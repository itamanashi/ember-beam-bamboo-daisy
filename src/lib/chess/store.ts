import { create } from "zustand";
import { builtinRepertoires } from "./openings";
import {
  emptyRepertoire,
  ensurePath,
  historyFromStart,
  importRepertoire,
  indexRepertoire,
  insertMoveAtFen,
  normalizeFen,
  removeMoveAtFen,
  tryMove,
} from "./repertoire";
import type {
  Arrow,
  ExplorerSource,
  MoveHistoryItem,
  RepertoireItem,
  RepertoireMove,
  Side,
  StudioTab,
  TrainerFeedback,
  TrainerStats,
} from "./types";
import { INITIAL_FEN } from "./types";

const STORAGE_KEY = "repertoire-studio-v1";

const EMPTY_STATS: TrainerStats = {
  correct: 0,
  wrong: 0,
  streak: 0,
  best: 0,
  lines: 0,
};

type View = "library" | "studio";

interface StudioStore {
  view: View;
  tab: StudioTab;
  repertoires: RepertoireItem[];
  activeId: string | null;
  hydrated: boolean;
  orientation: Side;
  fen: string;
  history: MoveHistoryItem[];
  currentIndex: number;
  lastMove?: { from: string; to: string };
  explorerSource: ExplorerSource;
  trainer: {
    feedback: TrainerFeedback | null;
    stats: TrainerStats;
    hint: boolean;
  };
  hydrate: () => void;
  persist: () => void;
  openLibrary: () => void;
  openStudio: (id: string) => void;
  setTab: (tab: StudioTab) => void;
  setOrientation: (side: Side) => void;
  flip: () => void;
  setExplorerSource: (s: ExplorerSource) => void;
  jumpTo: (index: number) => void;
  playMove: (from: string, to: string, promotion?: string) => boolean;
  playUci: (uci: string) => boolean;
  appendForced: (san: string, uci: string, fen: string) => void;
  createRepertoire: (title: string, color: Side) => string;
  deleteRepertoire: (id: string) => void;
  importJson: (raw: unknown) => RepertoireItem | null;
  updateActiveRoot: (
    updater: (item: RepertoireItem) => RepertoireItem["root"],
  ) => void;
  addCurrentMoveToTree: (move: RepertoireMove, parentFen: string) => void;
  removeChild: (parentFen: string, uci: string) => void;
  resetTrainer: () => void;
  setTrainerFeedback: (feedback: TrainerFeedback | null) => void;
  markTrainerSuccess: () => void;
  markTrainerError: (played: string, expected: string, expectedUci: string) => void;
  completeLine: () => void;
  setHint: (hint: boolean) => void;
  resetLine: () => void;
}

function lastMoveFromHistory(
  history: MoveHistoryItem[],
  index: number,
): { from: string; to: string } | undefined {
  const item = history[index];
  if (!item?.uci || item.uci.length < 4) return undefined;
  return { from: item.uci.slice(0, 2), to: item.uci.slice(2, 4) };
}

function loadSaved(): RepertoireItem[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { repertoires?: unknown };
    if (!Array.isArray(parsed.repertoires) || parsed.repertoires.length === 0) {
      return null;
    }
    const items = parsed.repertoires
      .map((r) => importRepertoire(r))
      .filter((r): r is RepertoireItem => Boolean(r));
    return items.length ? items : null;
  } catch {
    return null;
  }
}

export const useStudio = create<StudioStore>((set, get) => ({
  view: "library",
  tab: "explore",
  repertoires: builtinRepertoires(),
  activeId: null,
  hydrated: false,
  orientation: "white",
  fen: INITIAL_FEN,
  history: historyFromStart(),
  currentIndex: 0,
  explorerSource: "masters",
  trainer: { feedback: null, stats: EMPTY_STATS, hint: false },

  hydrate: () => {
    if (get().hydrated) return;
    const saved = loadSaved();
    set({
      repertoires: saved ?? builtinRepertoires(),
      hydrated: true,
    });
  },

  persist: () => {
    if (typeof window === "undefined") return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ repertoires: get().repertoires }),
    );
  },

  openLibrary: () =>
    set({
      view: "library",
      activeId: null,
      trainer: { feedback: null, stats: get().trainer.stats, hint: false },
    }),

  openStudio: (id) => {
    const item = get().repertoires.find((r) => r.id === id);
    if (!item) return;
    set({
      view: "studio",
      activeId: id,
      tab: "explore",
      orientation: item.color,
      fen: INITIAL_FEN,
      history: historyFromStart(),
      currentIndex: 0,
      lastMove: undefined,
      trainer: { feedback: null, stats: EMPTY_STATS, hint: false },
    });
  },

  setTab: (tab) =>
    set({
      tab,
      trainer: { ...get().trainer, feedback: null, hint: false },
    }),

  setOrientation: (side) => set({ orientation: side }),
  flip: () =>
    set({ orientation: get().orientation === "white" ? "black" : "white" }),
  setExplorerSource: (s) => set({ explorerSource: s }),

  jumpTo: (index) => {
    const { history } = get();
    const i = Math.max(0, Math.min(history.length - 1, index));
    set({
      currentIndex: i,
      fen: history[i].fen,
      lastMove: lastMoveFromHistory(history, i),
      trainer: { ...get().trainer, feedback: null, hint: false },
    });
  },

  playMove: (from, to, promotion) => {
    const { fen, history, currentIndex, tab, activeId, repertoires } = get();
    const result = tryMove(fen, from, to, promotion);
    if (!result) return false;
    const next: MoveHistoryItem = {
      san: result.san,
      uci: result.uci,
      fen: result.fen,
    };
    const truncated = history.slice(0, currentIndex + 1);
    const newHistory = [...truncated, next];
    set({
      history: newHistory,
      currentIndex: newHistory.length - 1,
      fen: result.fen,
      lastMove: { from, to },
    });
    if (tab === "build" && activeId) {
      const item = repertoires.find((r) => r.id === activeId);
      if (item) {
        const child: RepertoireMove = {
          san: result.san,
          uci: result.uci,
          fen: result.fen,
          games: 1,
          children: [],
        };
        const root = ensurePath(item.root, truncated, child);
        get().updateActiveRoot(() => root);
      }
    }
    return true;
  },

  playUci: (uci) => {
    const from = uci.slice(0, 2);
    const to = uci.slice(2, 4);
    const promo = uci.length > 4 ? uci[4] : undefined;
    return get().playMove(from, to, promo);
  },

  appendForced: (san, uci, fen) => {
    const { history, currentIndex } = get();
    const truncated = history.slice(0, currentIndex + 1);
    const next = [...truncated, { san, uci, fen }];
    set({
      history: next,
      currentIndex: next.length - 1,
      fen,
      lastMove: { from: uci.slice(0, 2), to: uci.slice(2, 4) },
    });
  },

  createRepertoire: (title, color) => {
    const item = emptyRepertoire(title, color);
    set({ repertoires: [item, ...get().repertoires] });
    get().persist();
    return item.id;
  },

  deleteRepertoire: (id) => {
    set({
      repertoires: get().repertoires.filter((r) => r.id !== id),
      activeId: get().activeId === id ? null : get().activeId,
      view: get().activeId === id ? "library" : get().view,
    });
    get().persist();
  },

  importJson: (raw) => {
    const item = importRepertoire(raw);
    if (!item) return null;
    item.id = crypto.randomUUID();
    item.builtin = false;
    set({ repertoires: [item, ...get().repertoires] });
    get().persist();
    return item;
  },

  updateActiveRoot: (updater) => {
    const { activeId, repertoires } = get();
    if (!activeId) return;
    set({
      repertoires: repertoires.map((r) =>
        r.id === activeId
          ? { ...r, root: updater(r), updatedAt: new Date().toISOString() }
          : r,
      ),
    });
    get().persist();
  },

  addCurrentMoveToTree: (move, parentFen) => {
    const item = get().repertoires.find((r) => r.id === get().activeId);
    if (!item) return;
    get().updateActiveRoot(() => insertMoveAtFen(item.root, parentFen, move));
  },

  removeChild: (parentFen, uci) => {
    const item = get().repertoires.find((r) => r.id === get().activeId);
    if (!item) return;
    get().updateActiveRoot(() => removeMoveAtFen(item.root, parentFen, uci));
  },

  resetTrainer: () =>
    set({ trainer: { feedback: null, stats: EMPTY_STATS, hint: false } }),

  setTrainerFeedback: (feedback) =>
    set({ trainer: { ...get().trainer, feedback } }),

  markTrainerSuccess: () => {
    const stats = { ...get().trainer.stats };
    stats.correct += 1;
    stats.streak += 1;
    stats.best = Math.max(stats.best, stats.streak);
    set({
      trainer: { feedback: { kind: "ok" }, stats, hint: false },
    });
  },

  markTrainerError: (played, expected, expectedUci) => {
    const stats = { ...get().trainer.stats, wrong: get().trainer.stats.wrong + 1, streak: 0 };
    set({
      trainer: {
        feedback: { kind: "bad", played, expected, expectedUci },
        stats,
        hint: false,
      },
    });
  },

  completeLine: () => {
    const stats = { ...get().trainer.stats, lines: get().trainer.stats.lines + 1 };
    set({ trainer: { feedback: { kind: "done" }, stats, hint: false } });
  },

  setHint: (hint) => set({ trainer: { ...get().trainer, hint } }),

  resetLine: () => {
    set({
      fen: INITIAL_FEN,
      history: historyFromStart(),
      currentIndex: 0,
      lastMove: undefined,
      trainer: { ...get().trainer, feedback: null, hint: false },
    });
  },
}));

export function useActiveRepertoire(): RepertoireItem | null {
  return useStudio((s) => s.repertoires.find((r) => r.id === s.activeId) ?? null);
}

export function useCandidateMoves(): RepertoireMove[] {
  const fen = useStudio((s) => s.fen);
  const item = useActiveRepertoire();
  if (!item) return [];
  const index = indexRepertoire(item.root);
  return index.get(normalizeFen(fen)) ?? [];
}

export function arrowsForTrainer(): Arrow[] {
  const feedback = useStudio.getState().trainer.feedback;
  const hint = useStudio.getState().trainer.hint;
  const uci = feedback?.expectedUci;
  if (!uci || uci.length < 4) return [];
  if (feedback?.kind === "bad" || hint) {
    return [{ from: uci.slice(0, 2), to: uci.slice(2, 4), color: "hint" }];
  }
  return [];
}
