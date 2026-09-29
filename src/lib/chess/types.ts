export const INITIAL_FEN =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

export type Side = "white" | "black";
export type StudioTab = "explore" | "drill" | "build";
export type ExplorerSource = "masters" | "lichess";

export interface RepertoireMove {
  san: string;
  uci: string;
  fen: string;
  games: number;
  opening?: string;
  eco?: string;
  children: RepertoireMove[];
}

export interface RepertoireRoot {
  fen: string;
  children: RepertoireMove[];
}

export interface RepertoireItem {
  id: string;
  title: string;
  color: Side;
  eco?: string;
  blurb: string;
  builtin: boolean;
  createdAt: string;
  updatedAt: string;
  root: RepertoireRoot;
}

export interface MoveHistoryItem {
  san: string;
  uci: string;
  fen: string;
}

export interface TrainerFeedback {
  kind: "ok" | "bad" | "done";
  played?: string;
  expected?: string;
  expectedUci?: string;
}

export interface TrainerStats {
  correct: number;
  wrong: number;
  streak: number;
  best: number;
  lines: number;
}

export interface LichessMove {
  san: string;
  uci: string;
  white: number;
  draws: number;
  black: number;
  averageRating?: number;
  opening?: { eco?: string; name?: string };
}

export interface LichessExplorer {
  white: number;
  draws: number;
  black: number;
  moves: LichessMove[];
  opening?: { eco?: string; name?: string };
}

export interface Arrow {
  from: string;
  to: string;
  color: "ok" | "hint" | "bad";
}
