import { Chess, type Square } from "chess.js";
import {
  INITIAL_FEN,
  type MoveHistoryItem,
  type RepertoireItem,
  type RepertoireMove,
  type RepertoireRoot,
} from "./types";

const CASTLE_UCI: Record<string, string> = {
  e1h1: "e1g1",
  e1a1: "e1c1",
  e8h8: "e8g8",
  e8a8: "e8c8",
};

export function normalizeCastleUci(uci: string): string {
  const key = uci.slice(0, 4);
  const mapped = CASTLE_UCI[key];
  return mapped ? mapped + uci.slice(4) : uci;
}

export function normalizeFen(fen: string): string {
  return fen.split(" ").slice(0, 4).join(" ");
}

export function uciOf(
  from: string,
  to: string,
  promotion?: string | null,
): string {
  return from + to + (promotion ?? "");
}

export function parseUci(uci: string): {
  from: Square;
  to: Square;
  promotion?: "q" | "r" | "b" | "n";
} {
  const std = normalizeCastleUci(uci);
  const promo = std[4];
  return {
    from: std.slice(0, 2) as Square,
    to: std.slice(2, 4) as Square,
    promotion:
      promo === "q" || promo === "r" || promo === "b" || promo === "n"
        ? promo
        : undefined,
  };
}

export function tryMove(
  fen: string,
  from: string,
  to: string,
  promotion?: string,
) {
  try {
    const chess = new Chess(fen);
    const move = chess.move({
      from: from as Square,
      to: to as Square,
      promotion: (promotion || "q") as "q" | "r" | "b" | "n",
    });
    if (!move) return null;
    return {
      san: move.san,
      uci: uciOf(move.from, move.to, move.promotion),
      fen: chess.fen(),
      captured: Boolean(move.captured),
      check: chess.inCheck(),
      mate: chess.isCheckmate(),
    };
  } catch {
    return null;
  }
}

export function buildTreeFromLines(lines: string[][]): RepertoireRoot {
  const root: RepertoireRoot = { fen: INITIAL_FEN, children: [] };
  for (const line of lines) {
    const chess = new Chess();
    let siblings = root.children;
    for (const san of line) {
      const before = chess.fen();
      let move;
      try {
        move = chess.move(san);
      } catch {
        move = null;
      }
      if (!move) break;
      const uci = uciOf(move.from, move.to, move.promotion);
      let node = siblings.find((c) => c.uci === uci);
      if (!node) {
        node = {
          san: move.san,
          uci,
          fen: chess.fen(),
          games: 1,
          children: [],
        };
        siblings.push(node);
      } else {
        node.games += 1;
      }
      void before;
      siblings = node.children;
    }
  }
  return root;
}

export function indexRepertoire(root: RepertoireRoot | null) {
  const fenToChildren = new Map<string, RepertoireMove[]>();
  if (!root) return fenToChildren;
  const visit = (fen: string, children: RepertoireMove[]) => {
    fenToChildren.set(normalizeFen(fen), children);
    for (const child of children) visit(child.fen, child.children);
  };
  visit(root.fen, root.children);
  return fenToChildren;
}

export function countNodes(root: RepertoireRoot): number {
  let n = 0;
  const walk = (nodes: RepertoireMove[]) => {
    for (const node of nodes) {
      n += 1;
      walk(node.children);
    }
  };
  walk(root.children);
  return n;
}

export function mainLineSans(root: RepertoireRoot, max = 16): string[] {
  const sans: string[] = [];
  let children = root.children;
  while (children.length && sans.length < max) {
    const best = [...children].sort((a, b) => b.games - a.games)[0];
    sans.push(best.san);
    children = best.children;
  }
  return sans;
}

export function fenAfterPlies(root: RepertoireRoot, plies: number): string {
  let fen = root.fen;
  let children = root.children;
  for (let i = 0; i < plies && children.length; i++) {
    const best = [...children].sort((a, b) => b.games - a.games)[0];
    fen = best.fen;
    children = best.children;
  }
  return fen;
}

export function insertMoveAtFen(
  root: RepertoireRoot,
  parentFen: string,
  child: RepertoireMove,
): RepertoireRoot {
  const cloned = structuredClone(root) as RepertoireRoot;
  const target = normalizeFen(parentFen);
  const walk = (fen: string, nodes: RepertoireMove[]): boolean => {
    if (normalizeFen(fen) === target) {
      if (!nodes.some((n) => n.uci === child.uci)) nodes.push(child);
      return true;
    }
    for (const node of nodes) {
      if (walk(node.fen, node.children)) return true;
    }
    return false;
  };
  if (!walk(cloned.fen, cloned.children) && normalizeFen(cloned.fen) === target) {
    cloned.children.push(child);
  }
  return cloned;
}

export function removeMoveAtFen(
  root: RepertoireRoot,
  parentFen: string,
  uci: string,
): RepertoireRoot {
  const cloned = structuredClone(root) as RepertoireRoot;
  const target = normalizeFen(parentFen);
  const walk = (fen: string, nodes: RepertoireMove[]): boolean => {
    if (normalizeFen(fen) === target) {
      const i = nodes.findIndex((n) => n.uci === uci);
      if (i >= 0) nodes.splice(i, 1);
      return true;
    }
    for (const node of nodes) {
      if (walk(node.fen, node.children)) return true;
    }
    return false;
  };
  walk(cloned.fen, cloned.children);
  return cloned;
}

export function ensurePath(
  root: RepertoireRoot,
  history: MoveHistoryItem[],
  child: RepertoireMove,
): RepertoireRoot {
  const cloned = structuredClone(root) as RepertoireRoot;
  let nodes = cloned.children;
  let fen = cloned.fen;
  for (let i = 1; i < history.length; i++) {
    const step = history[i];
    let node = nodes.find((n) => n.uci === step.uci);
    if (!node) {
      node = {
        san: step.san,
        uci: step.uci,
        fen: step.fen,
        games: 1,
        children: [],
      };
      nodes.push(node);
    }
    fen = node.fen;
    nodes = node.children;
  }
  if (!nodes.some((n) => n.uci === child.uci)) nodes.push(child);
  void fen;
  return cloned;
}

export function historyFromStart(): MoveHistoryItem[] {
  return [{ san: "", uci: "", fen: INITIAL_FEN }];
}

export function generatePgn(
  title: string,
  color: string,
  history: MoveHistoryItem[],
): string {
  const moves = history.filter((h) => h.san);
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", ".");
  const headers = [
    `[Event "${title}"]`,
    `[Site "Repertoire Studio"]`,
    `[Date "${date}"]`,
    `[White "${color === "white" ? "Studio" : "Opponent"}"]`,
    `[Black "${color === "black" ? "Studio" : "Opponent"}"]`,
    `[Result "*"]`,
  ];
  const body: string[] = [];
  for (let i = 0; i < moves.length; i++) {
    if (i % 2 === 0) body.push(`${Math.floor(i / 2) + 1}.`);
    body.push(moves[i].san);
  }
  return `${headers.join("\n")}\n\n${body.join(" ")} *\n`;
}

export function downloadText(filename: string, text: string, mime: string) {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 48);
}

type LooseMove = {
  san?: string;
  uci?: string;
  fen?: string;
  games?: number;
  parties?: number;
  children?: LooseMove[];
  coup?: string;
};

function coerceMove(raw: LooseMove): RepertoireMove | null {
  const san = raw.san || raw.coup;
  const uci = raw.uci;
  const fen = raw.fen;
  if (!san || !uci || !fen) return null;
  return {
    san,
    uci,
    fen,
    games: raw.games ?? raw.parties ?? 1,
    children: Array.isArray(raw.children)
      ? raw.children.map(coerceMove).filter((m): m is RepertoireMove => Boolean(m))
      : [],
  };
}

export function importRepertoire(raw: unknown): RepertoireItem | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const rootRaw = o.root as { fen?: string; children?: LooseMove[] } | undefined;
  if (!rootRaw?.fen || !Array.isArray(rootRaw.children)) return null;
  const children = rootRaw.children
    .map(coerceMove)
    .filter((m): m is RepertoireMove => Boolean(m));
  const color = o.color === "black" ? "black" : "white";
  const title =
    typeof o.title === "string" && o.title.trim() ? o.title.trim() : "Imported";
  const now = new Date().toISOString();
  return {
    id: typeof o.id === "string" ? o.id : crypto.randomUUID(),
    title,
    color,
    eco: typeof o.eco === "string" ? o.eco : undefined,
    blurb: typeof o.blurb === "string" ? o.blurb : "Imported repertoire",
    builtin: o.builtin === true,
    createdAt: typeof o.createdAt === "string" ? o.createdAt : now,
    updatedAt: now,
    root: { fen: rootRaw.fen, children },
  };
}

export function emptyRepertoire(
  title: string,
  color: "white" | "black",
): RepertoireItem {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    title,
    color,
    blurb: "A custom line. Play moves in Build to grow the tree.",
    builtin: false,
    createdAt: now,
    updatedAt: now,
    root: { fen: INITIAL_FEN, children: [] },
  };
}

export function formatGames(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 10_000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export function pct(part: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((part / total) * 100);
}
