import { Chess, type Square } from "chess.js";
import { useMemo, useState } from "react";
import { ChessPiece } from "./pieces";
import { cn } from "@/lib/utils";
import type { Arrow, Side } from "@/lib/chess/types";

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;

type PendingPromo = { from: Square; to: Square };

type Props = {
  fen: string;
  orientation: Side;
  lastMove?: { from: string; to: string };
  arrows?: Arrow[];
  interactive?: boolean;
  onMove: (from: string, to: string, promotion?: string) => boolean;
};

function squareColor(file: number, rank: number) {
  return (file + rank) % 2 === 0 ? "dark" : "light";
}

function kingSquare(chess: Chess, color: "w" | "b"): Square | null {
  for (const file of FILES) {
    for (let r = 1; r <= 8; r++) {
      const s = `${file}${r}` as Square;
      const p = chess.get(s);
      if (p && p.type === "k" && p.color === color) return s;
    }
  }
  return null;
}

export function ChessBoard({
  fen,
  orientation,
  lastMove,
  arrows = [],
  interactive = true,
  onMove,
}: Props) {
  const [selected, setSelected] = useState<Square | null>(null);
  const [promo, setPromo] = useState<PendingPromo | null>(null);

  const chess = useMemo(() => {
    try {
      return new Chess(fen);
    } catch {
      return new Chess();
    }
  }, [fen]);

  const dests = useMemo(() => {
    if (!selected) return new Map<string, { promo: boolean }>();
    const map = new Map<string, { promo: boolean }>();
    for (const m of chess.moves({ square: selected, verbose: true })) {
      map.set(m.to, { promo: Boolean(m.promotion) });
    }
    return map;
  }, [chess, selected]);

  const turn = chess.turn();
  const inCheck = chess.inCheck();
  const checkedKing = inCheck ? kingSquare(chess, turn) : null;

  const files =
    orientation === "white" ? [...FILES] : [...FILES].reverse();
  const ranks =
    orientation === "white"
      ? [8, 7, 6, 5, 4, 3, 2, 1]
      : [1, 2, 3, 4, 5, 6, 7, 8];

  function attempt(from: Square, to: Square) {
    const info = dests.get(to) ?? { promo: false };
    const legal = chess
      .moves({ square: from, verbose: true })
      .some((m) => m.to === to);
    if (!legal) {
      const piece = chess.get(to);
      if (piece && piece.color === turn) {
        setSelected(to);
        return;
      }
      setSelected(null);
      return;
    }
    if (
      chess
        .moves({ square: from, verbose: true })
        .some((m) => m.to === to && m.promotion)
    ) {
      setPromo({ from, to });
      return;
    }
    void info;
    const ok = onMove(from, to);
    setSelected(null);
    if (!ok) setSelected(null);
  }

  function onSquareClick(sq: Square) {
    if (!interactive || promo) return;
    const piece = chess.get(sq);
    if (!selected) {
      if (piece && piece.color === turn) setSelected(sq);
      return;
    }
    if (selected === sq) {
      setSelected(null);
      return;
    }
    if (piece && piece.color === turn && !dests.has(sq)) {
      setSelected(sq);
      return;
    }
    attempt(selected, sq);
  }

  function onDrop(from: string, to: string) {
    if (!interactive || promo) return;
    const f = from as Square;
    const t = to as Square;
    const legal = chess.moves({ square: f, verbose: true });
    const match = legal.find((m) => m.to === t);
    if (!match) return;
    if (match.promotion) {
      setSelected(f);
      setPromo({ from: f, to: t });
      return;
    }
    onMove(f, t);
    setSelected(null);
  }

  return (
    <div className="board-frame relative aspect-square w-full overflow-hidden rounded-lg p-[3.2%]">
      <div
        className="relative grid size-full grid-cols-8 grid-rows-8 overflow-hidden rounded-xs"
        role="grid"
        aria-label="Chessboard"
        onDragOver={(e) => e.preventDefault()}
      >
        {ranks.map((rank, ri) =>
          files.map((file, fi) => {
            const sq = `${file}${rank}` as Square;
            const piece = chess.get(sq);
            const isLight = squareColor(fi, ri) === "light";
            const isLast =
              lastMove && (lastMove.from === sq || lastMove.to === sq);
            const isSel = selected === sq;
            const isCheck = checkedKing === sq;
            const dest = dests.get(sq);
            return (
              <button
                key={sq}
                type="button"
                role="gridcell"
                aria-label={sq}
                disabled={!interactive}
                onClick={() => onSquareClick(sq)}
                onDrop={(e) => {
                  e.preventDefault();
                  const from = e.dataTransfer.getData("text/square");
                  if (from) onDrop(from, sq);
                }}
                onDragOver={(e) => e.preventDefault()}
                className={cn(
                  "relative flex items-center justify-center",
                  isLight ? "sq-light" : "sq-dark",
                  isLast && "sq-last",
                  isSel && "sq-selected",
                  isCheck && "sq-check",
                )}
              >
                {fi === 0 && (
                  <span
                    className={cn(
                      "pointer-events-none absolute top-0.5 left-1 font-mono text-[10px] font-medium sm:text-xs",
                      isLight ? "text-board-coord" : "text-board-light/80",
                    )}
                  >
                    {rank}
                  </span>
                )}
                {ri === 7 && (
                  <span
                    className={cn(
                      "pointer-events-none absolute right-1 bottom-0.5 font-mono text-[10px] font-medium sm:text-xs",
                      isLight ? "text-board-coord" : "text-board-light/80",
                    )}
                  >
                    {file}
                  </span>
                )}
                {dest && !piece && (
                  <span className="size-[22%] rounded-full bg-piece-b/35" />
                )}
                {dest && piece && (
                  <span className="absolute inset-[6%] rounded-full ring-[3px] ring-piece-b/40" />
                )}
                {piece && (
                  <div
                    draggable={interactive}
                    onDragStart={(e) => {
                      if (!interactive) return;
                      e.dataTransfer.setData("text/square", sq);
                      e.dataTransfer.effectAllowed = "move";
                      if (piece.color === turn) setSelected(sq);
                    }}
                    className={cn(
                      "relative z-10 size-[88%] select-none",
                      interactive && "cursor-grab active:cursor-grabbing",
                      isSel && "piece-lift",
                    )}
                  >
                    <ChessPiece
                      type={piece.type}
                      color={piece.color}
                      className="size-full"
                    />
                  </div>
                )}
              </button>
            );
          }),
        )}
        <svg
          className="pointer-events-none absolute inset-0 z-20 size-full"
          viewBox="0 0 8 8"
        >
          {arrows.map((a) => {
            const fromFile = FILES.indexOf(a.from[0] as (typeof FILES)[number]);
            const fromRank = Number(a.from[1]);
            const toFile = FILES.indexOf(a.to[0] as (typeof FILES)[number]);
            const toRank = Number(a.to[1]);
            const fx =
              orientation === "white" ? fromFile + 0.5 : 7 - fromFile + 0.5;
            const fy =
              orientation === "white" ? 8 - fromRank + 0.5 : fromRank - 0.5;
            const tx =
              orientation === "white" ? toFile + 0.5 : 7 - toFile + 0.5;
            const ty =
              orientation === "white" ? 8 - toRank + 0.5 : toRank - 0.5;
            const color =
              a.color === "bad"
                ? "var(--color-danger)"
                : a.color === "ok"
                  ? "var(--color-success)"
                  : "#6f8f6e";
            return (
              <line
                key={`${a.from}${a.to}${a.color}`}
                x1={fx}
                y1={fy}
                x2={tx}
                y2={ty}
                stroke={color}
                strokeWidth="0.18"
                strokeLinecap="round"
                markerEnd="url(#arrowhead)"
                opacity="0.9"
              />
            );
          })}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="3"
              markerHeight="3"
              refX="1.6"
              refY="1.5"
              orient="auto"
            >
              <path d="M0,0 L3,1.5 L0,3 z" fill="#6f8f6e" />
            </marker>
          </defs>
        </svg>
      </div>

      {promo && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-bg/55">
          <div className="flex gap-2 rounded-lg bg-surface p-2 ring-1 ring-border">
            {(["q", "r", "b", "n"] as const).map((p) => (
              <button
                key={p}
                type="button"
                className="size-14 rounded-md bg-surface-2 p-1 ring-1 ring-border transition-transform hover:scale-105"
                onClick={() => {
                  onMove(promo.from, promo.to, p);
                  setPromo(null);
                  setSelected(null);
                }}
                aria-label={`Promote to ${p}`}
              >
                <ChessPiece type={p} color={turn} className="size-full" />
              </button>
            ))}
            <button
              type="button"
              className="rounded-md px-3 text-sm text-muted"
              onClick={() => setPromo(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function MiniBoard({ fen, className }: { fen: string; className?: string }) {
  const chess = useMemo(() => {
    try {
      return new Chess(fen);
    } catch {
      return new Chess();
    }
  }, [fen]);
  const files = [...FILES];
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
  return (
    <div
      className={cn(
        "grid aspect-square w-full grid-cols-8 grid-rows-8 overflow-hidden rounded-sm",
        className,
      )}
      aria-hidden="true"
    >
      {ranks.map((rank, ri) =>
        files.map((file, fi) => {
          const sq = `${file}${rank}` as Square;
          const piece = chess.get(sq);
          const isLight = squareColor(fi, ri) === "light";
          return (
            <div key={sq} className={isLight ? "sq-light" : "sq-dark"}>
              {piece && (
                <ChessPiece
                  type={piece.type}
                  color={piece.color}
                  className="size-full"
                />
              )}
            </div>
          );
        }),
      )}
    </div>
  );
}
