import { Chess } from "chess.js";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Copy,
  Download,
  FlipVertical2,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";
import { toast } from "sonner";
import { ChessBoard } from "./board";
import { ExplorerPanel } from "./explorer-panel";
import { TrainerPanel } from "./trainer-panel";
import { TreePanel } from "./tree-panel";
import { soundFx, unlockAudio } from "@/lib/chess/audio";
import {
  downloadText,
  generatePgn,
  indexRepertoire,
  normalizeCastleUci,
  normalizeFen,
  slugify,
  tryMove,
} from "@/lib/chess/repertoire";
import {
  useActiveRepertoire,
  useCandidateMoves,
  useStudio,
} from "@/lib/chess/store";
import type { Arrow, RepertoireMove, StudioTab } from "@/lib/chess/types";
import { cn } from "@/lib/utils";

const TABS: { id: StudioTab; label: string }[] = [
  { id: "explore", label: "Explore" },
  { id: "drill", label: "Drill" },
  { id: "build", label: "Build" },
];

export function StudioView() {
  const item = useActiveRepertoire();
  const openLibrary = useStudio((s) => s.openLibrary);
  const tab = useStudio((s) => s.tab);
  const setTab = useStudio((s) => s.setTab);
  const fen = useStudio((s) => s.fen);
  const history = useStudio((s) => s.history);
  const currentIndex = useStudio((s) => s.currentIndex);
  const lastMove = useStudio((s) => s.lastMove);
  const orientation = useStudio((s) => s.orientation);
  const flip = useStudio((s) => s.flip);
  const jumpTo = useStudio((s) => s.jumpTo);
  const playMove = useStudio((s) => s.playMove);
  const playUci = useStudio((s) => s.playUci);
  const appendForced = useStudio((s) => s.appendForced);
  const resetLine = useStudio((s) => s.resetLine);
  const markTrainerSuccess = useStudio((s) => s.markTrainerSuccess);
  const markTrainerError = useStudio((s) => s.markTrainerError);
  const completeLine = useStudio((s) => s.completeLine);
  const setHint = useStudio((s) => s.setHint);
  const trainer = useStudio((s) => s.trainer);
  const candidates = useCandidateMoves();

  const replyTimer = useRef<number | null>(null);
  const replyToken = useRef(0);
  const [autoplay, setAutoplay] = useState(false);

  const cancelReply = useCallback(() => {
    replyToken.current += 1;
    if (replyTimer.current) {
      window.clearTimeout(replyTimer.current);
      replyTimer.current = null;
    }
  }, []);

  useEffect(() => () => cancelReply(), [cancelReply]);

  const fenIndex = useMemo(
    () => (item ? indexRepertoire(item.root) : new Map()),
    [item],
  );

  const pickWeighted = useCallback((options: RepertoireMove[]) => {
    if (options.length === 0) return null;
    const total = options.reduce((s, m) => s + (m.games || 1), 0);
    let r = Math.random() * total;
    for (const m of options) {
      r -= m.games || 1;
      if (r <= 0) return m;
    }
    return options[0];
  }, []);

  const applyOpponent = useCallback(
    (fromFen: string, options: RepertoireMove[]) => {
      const selected = pickWeighted(options);
      if (!selected) return;
      const std = normalizeCastleUci(selected.uci);
      const result = tryMove(fromFen, std.slice(0, 2), std.slice(2, 4), std[4]);
      if (!result) {
        completeLine();
        return;
      }
      soundFx.move();
      appendForced(result.san, result.uci, result.fen);
      const next = fenIndex.get(normalizeFen(result.fen)) ?? [];
      if (next.length === 0) completeLine();
    },
    [appendForced, completeLine, fenIndex, pickWeighted],
  );

  const scheduleOpponent = useCallback(
    (fromFen: string, options: RepertoireMove[]) => {
      cancelReply();
      if (options.length === 0) {
        completeLine();
        return;
      }
      const token = ++replyToken.current;
      replyTimer.current = window.setTimeout(() => {
        replyTimer.current = null;
        if (token !== replyToken.current) return;
        applyOpponent(fromFen, options);
      }, 380);
    },
    [applyOpponent, cancelReply, completeLine],
  );

  const startDrill = useCallback(() => {
    cancelReply();
    resetLine();
    const root = item?.root;
    if (!root || !item) return;
    if (item.color === "black") {
      const options = root.children;
      const token = ++replyToken.current;
      replyTimer.current = window.setTimeout(() => {
        replyTimer.current = null;
        if (token !== replyToken.current) return;
        applyOpponent(root.fen, options);
      }, 420);
    }
  }, [applyOpponent, cancelReply, item, resetLine]);

  useEffect(() => {
    if (tab === "drill") startDrill();
    else cancelReply();
    setAutoplay(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, item?.id]);

  const myTurn = useMemo(() => {
    if (!item || tab !== "drill") return true;
    const side = fen.split(" ")[1];
    return item.color === "white" ? side === "w" : side === "b";
  }, [fen, item, tab]);

  function handleMove(from: string, to: string, promotion?: string): boolean {
    unlockAudio();
    if (tab === "drill" && item) {
      if (!myTurn || trainer.feedback?.kind === "done") return false;
      const preview = tryMove(fen, from, to, promotion);
      if (!preview) return false;
      const theory = candidates.some(
        (m) => m.uci === preview.uci || m.san === preview.san,
      );
      if (!theory) {
        markTrainerError(
          preview.san,
          candidates[0]?.san ?? "a book move",
          candidates[0]?.uci ?? "",
        );
        soundFx.error();
        return false;
      }
      const ok = playMove(from, to, promotion);
      if (!ok) return false;
      if (preview.mate) soundFx.check();
      else if (preview.captured) soundFx.capture();
      else soundFx.success();
      markTrainerSuccess();
      const replies = fenIndex.get(normalizeFen(preview.fen)) ?? [];
      if (replies.length === 0) completeLine();
      else scheduleOpponent(preview.fen, replies);
      return true;
    }
    const preview = tryMove(fen, from, to, promotion);
    const ok = playMove(from, to, promotion);
    if (ok && preview) {
      if (preview.mate || preview.check) soundFx.check();
      else if (preview.captured) soundFx.capture();
      else soundFx.move();
    }
    return ok;
  }

  function revealHint() {
    if (!candidates[0]) return;
    setHint(true);
  }

  const arrows: Arrow[] = useMemo(() => {
    const uci =
      trainer.feedback?.expectedUci ||
      (trainer.hint ? candidates[0]?.uci : undefined);
    if (!uci || uci.length < 4) return [];
    if (trainer.feedback?.kind === "bad" || trainer.hint) {
      return [{ from: uci.slice(0, 2), to: uci.slice(2, 4), color: "hint" }];
    }
    return [];
  }, [candidates, trainer.feedback, trainer.hint]);

  useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(() => {
      const state = useStudio.getState();
      if (state.currentIndex >= state.history.length - 1) {
        const kids =
          fenIndex.get(normalizeFen(state.fen)) ?? [];
        const next = [...kids].sort((a, b) => b.games - a.games)[0];
        if (!next) {
          setAutoplay(false);
          return;
        }
        playUci(next.uci);
        return;
      }
      jumpTo(state.currentIndex + 1);
    }, 700);
    return () => window.clearInterval(id);
  }, [autoplay, fenIndex, jumpTo, playUci]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        jumpTo(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        jumpTo(currentIndex + 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        jumpTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        jumpTo(history.length - 1);
      } else if (e.key === "f") {
        flip();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex, flip, history.length, jumpTo]);

  if (!item) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <button type="button" onClick={openLibrary} className="text-muted">
          Back to library
        </button>
      </div>
    );
  }

  const status = useMemo(() => {
    try {
      const c = new Chess(fen);
      if (c.isCheckmate()) return "Checkmate";
      if (c.isDraw()) return "Draw";
      if (c.inCheck()) return "Check";
      return c.turn() === "w" ? "White to move" : "Black to move";
    } catch {
      return "";
    }
  }, [fen]);

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col gap-5 px-3 py-4 sm:px-6 sm:py-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={openLibrary}
            className="inline-flex h-10 items-center rounded-md px-3 text-sm text-muted ring-1 ring-border hover:bg-surface-2 hover:text-fg"
          >
            Library
          </button>
          <div className="min-w-0">
            <h1 className="font-display truncate text-2xl font-medium tracking-tight">
              {item.title}
            </h1>
            <p className="text-xs text-muted capitalize">
              {item.color} · {item.eco ?? "custom"} · {status}
            </p>
          </div>
        </div>
        <div
          className="flex rounded-md bg-surface p-0.5 ring-1 ring-border"
          role="tablist"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "h-10 min-w-20 rounded-sm px-4 text-sm font-medium",
                tab === t.id
                  ? "bg-accent text-accent-fg"
                  : "text-muted hover:text-fg",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </header>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)]">
        <section className="mx-auto w-full max-w-[560px] lg:mx-0">
          <ChessBoard
            fen={fen}
            orientation={orientation}
            lastMove={lastMove}
            arrows={arrows}
            interactive={tab !== "drill" || (myTurn && trainer.feedback?.kind !== "done")}
            onMove={handleMove}
          />
          <div className="mt-3 flex items-center justify-center gap-1">
            <IconBtn label="Start" onClick={() => jumpTo(0)}>
              <ChevronsLeft className="size-4" />
            </IconBtn>
            <IconBtn label="Back" onClick={() => jumpTo(currentIndex - 1)}>
              <ChevronLeft className="size-4" />
            </IconBtn>
            <IconBtn
              label={autoplay ? "Pause" : "Play main line"}
              onClick={() => setAutoplay((v) => !v)}
            >
              {autoplay ? (
                <Pause className="size-4" />
              ) : (
                <Play className="size-4" />
              )}
            </IconBtn>
            <IconBtn
              label="Forward"
              onClick={() => jumpTo(currentIndex + 1)}
            >
              <ChevronRight className="size-4" />
            </IconBtn>
            <IconBtn
              label="End"
              onClick={() => jumpTo(history.length - 1)}
            >
              <ChevronsRight className="size-4" />
            </IconBtn>
            <IconBtn label="Flip board" onClick={flip}>
              <FlipVertical2 className="size-4" />
            </IconBtn>
            <IconBtn
              label="Reset"
              onClick={() => {
                cancelReply();
                if (tab === "drill") startDrill();
                else resetLine();
              }}
            >
              <RotateCcw className="size-4" />
            </IconBtn>
          </div>
          <MoveList
            history={history}
            currentIndex={currentIndex}
            onJump={jumpTo}
          />
          <div className="mt-3 flex flex-wrap gap-2">
            <GhostBtn
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(fen);
                  toast.success("FEN copied");
                } catch {
                  toast.error("Could not copy");
                }
              }}
            >
              <Copy className="size-3.5" />
              FEN
            </GhostBtn>
            <GhostBtn
              onClick={async () => {
                const pgn = generatePgn(item.title, item.color, history);
                try {
                  await navigator.clipboard.writeText(pgn);
                  toast.success("PGN copied");
                } catch {
                  toast.error("Could not copy");
                }
              }}
            >
              <Copy className="size-3.5" />
              PGN
            </GhostBtn>
            <GhostBtn
              onClick={() =>
                downloadText(
                  `${slugify(item.title)}.json`,
                  JSON.stringify(item, null, 2),
                  "application/json",
                )
              }
            >
              <Download className="size-3.5" />
              JSON
            </GhostBtn>
            <GhostBtn
              onClick={() =>
                downloadText(
                  `${slugify(item.title)}.pgn`,
                  generatePgn(item.title, item.color, history),
                  "application/vnd.chess-pgn",
                )
              }
            >
              <Download className="size-3.5" />
              PGN
            </GhostBtn>
          </div>
        </section>

        <aside className="rounded-xl bg-surface p-4 ring-1 ring-border sm:p-5">
          {tab === "explore" && <ExplorerPanel />}
          {tab === "build" && (
            <div className="flex flex-col gap-5">
              <ExplorerPanel />
              <TreePanel />
            </div>
          )}
          {tab === "drill" && (
            <TrainerPanel onRestart={startDrill} onReveal={revealHint} />
          )}
        </aside>
      </div>
    </div>
  );
}

function IconBtn({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="inline-flex size-11 items-center justify-center rounded-md text-muted ring-1 ring-transparent hover:bg-surface-2 hover:text-fg hover:ring-border"
    >
      {children}
    </button>
  );
}

function GhostBtn({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-xs font-medium text-muted ring-1 ring-border hover:bg-surface-2 hover:text-fg"
    >
      {children}
    </button>
  );
}

function MoveList({
  history,
  currentIndex,
  onJump,
}: {
  history: { san: string }[];
  currentIndex: number;
  onJump: (i: number) => void;
}) {
  const moves = history.map((h, i) => ({ ...h, i })).filter((h) => h.san);
  if (moves.length === 0) {
    return (
      <p className="mt-3 text-center text-sm text-muted">No moves yet.</p>
    );
  }
  const pairs: { n: number; w?: (typeof moves)[0]; b?: (typeof moves)[0] }[] =
    [];
  for (let i = 0; i < moves.length; i += 2) {
    pairs.push({
      n: i / 2 + 1,
      w: moves[i],
      b: moves[i + 1],
    });
  }
  return (
    <ol className="mt-3 flex flex-wrap gap-x-3 gap-y-1 rounded-md bg-surface px-3 py-2 font-mono text-sm ring-1 ring-border">
      {pairs.map((p) => (
        <li key={p.n} className="flex items-center gap-1.5">
          <span className="text-subtle tabular-nums">{p.n}.</span>
          {p.w && (
            <button
              type="button"
              onClick={() => onJump(p.w!.i)}
              className={cn(
                "rounded-sm px-1",
                currentIndex === p.w.i && "bg-accent text-accent-fg",
              )}
            >
              {p.w.san}
            </button>
          )}
          {p.b && (
            <button
              type="button"
              onClick={() => onJump(p.b!.i)}
              className={cn(
                "rounded-sm px-1",
                currentIndex === p.b.i && "bg-accent text-accent-fg",
              )}
            >
              {p.b.san}
            </button>
          )}
        </li>
      ))}
    </ol>
  );
}
