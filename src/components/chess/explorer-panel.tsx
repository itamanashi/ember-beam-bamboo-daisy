import { useEffect, useMemo, useState } from "react";
import { Plus, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { localExplorer, openingFromSans } from "@/lib/chess/book";
import { fetchLichessExplorer } from "@/lib/chess/lichess";
import {
  formatGames,
  normalizeCastleUci,
  pct,
  tryMove,
} from "@/lib/chess/repertoire";
import { useCandidateMoves, useStudio } from "@/lib/chess/store";
import { cn } from "@/lib/utils";
import type { ExplorerSource, LichessExplorer, RepertoireMove } from "@/lib/chess/types";

function ResultBar({
  white,
  draws,
  black,
}: {
  white: number;
  draws: number;
  black: number;
}) {
  const total = white + draws + black;
  if (total <= 0) return null;
  const w = (white / total) * 100;
  const d = (draws / total) * 100;
  return (
    <div className="flex h-2 overflow-hidden rounded-full">
      <span className="result-w" style={{ width: `${w}%` }} />
      <span className="result-d" style={{ width: `${d}%` }} />
      <span className="result-b" style={{ width: `${100 - w - d}%` }} />
    </div>
  );
}

export function ExplorerPanel() {
  const fen = useStudio((s) => s.fen);
  const history = useStudio((s) => s.history);
  const source = useStudio((s) => s.explorerSource);
  const setSource = useStudio((s) => s.setExplorerSource);
  const playUci = useStudio((s) => s.playUci);
  const addCurrentMoveToTree = useStudio((s) => s.addCurrentMoveToTree);
  const tab = useStudio((s) => s.tab);
  const candidates = useCandidateMoves();
  const [live, setLive] = useState<LichessExplorer | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "offline">("idle");

  const local = useMemo(() => localExplorer(fen), [fen]);
  const localName = useMemo(
    () => openingFromSans(history.filter((h) => h.san).map((h) => h.san)),
    [history],
  );

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    const t = window.setTimeout(() => {
      fetchLichessExplorer({ data: { fen, source } })
        .then((res) => {
          if (cancelled) return;
          setLive(res);
          setStatus("idle");
        })
        .catch(() => {
          if (cancelled) return;
          setLive(null);
          setStatus("offline");
        });
    }, 220);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [fen, source]);

  const data = live && (live.moves.length > 0 || live.white + live.draws + live.black > 0)
    ? live
    : local;
  const opening =
    live?.opening?.name && status !== "offline"
      ? live.opening
      : { name: localName.name, eco: localName.eco || live?.opening?.eco };
  const total = (data?.white ?? 0) + (data?.draws ?? 0) + (data?.black ?? 0);
  const inTree = new Set(candidates.map((c) => c.uci));

  function addMove(uci: string, san: string, openingName?: string, eco?: string) {
    const std = normalizeCastleUci(uci);
    const result = tryMove(fen, std.slice(0, 2), std.slice(2, 4), std[4]);
    if (!result) {
      toast.error("That move is not legal here.");
      return;
    }
    const child: RepertoireMove = {
      san: result.san || san,
      uci: result.uci,
      fen: result.fen,
      games: 1,
      opening: openingName,
      eco,
      children: [],
    };
    addCurrentMoveToTree(child, fen);
    toast.success(`${child.san} added to the repertoire`);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
            Opening
          </p>
          <h2 className="font-display text-lg font-medium tracking-tight">
            {opening?.name || "Starting position"}
          </h2>
          {opening?.eco && (
            <p className="font-mono text-xs text-muted">{opening.eco}</p>
          )}
        </div>
        <div className="flex rounded-md bg-surface-2 p-0.5 ring-1 ring-border">
          {(["masters", "lichess"] as ExplorerSource[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSource(s)}
              className={cn(
                "h-8 rounded-sm px-3 text-xs font-medium capitalize",
                source === s ? "bg-accent text-accent-fg" : "text-muted",
              )}
            >
              {s === "masters" ? "Masters" : "Lichess"}
            </button>
          ))}
        </div>
      </div>

      {status === "loading" && !data && (
        <div className="flex items-center gap-2 text-sm text-muted">
          <LoaderCircle className="size-4 animate-spin" />
          Querying games
        </div>
      )}
      {status === "offline" && (
        <p className="text-xs text-muted">
          Live database is offline. Showing the reference book.
        </p>
      )}

      {data && total > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between text-xs text-muted">
            <span>{formatGames(total)} games</span>
            <span className="tabular-nums">
              {pct(data.white, total)} / {pct(data.draws, total)} /{" "}
              {pct(data.black, total)}
            </span>
          </div>
          <ResultBar white={data.white} draws={data.draws} black={data.black} />
        </div>
      )}

      {candidates.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-medium tracking-[0.16em] text-muted uppercase">
            In repertoire
          </p>
          <ul className="flex flex-col gap-1">
            {candidates.map((m) => (
              <li key={m.uci}>
                <button
                  type="button"
                  onClick={() => playUci(m.uci)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-surface-2"
                >
                  <span className="font-medium">{m.san}</span>
                  <span className="text-xs text-muted">{m.games} lines</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <p className="mb-2 text-xs font-medium tracking-[0.16em] text-muted uppercase">
          Book moves
        </p>
        {!data?.moves.length ? (
          <p className="text-sm text-muted">No book moves from here.</p>
        ) : (
          <ul className="flex flex-col">
            {data.moves.map((m) => {
              const games = m.white + m.draws + m.black;
              const known = inTree.has(normalizeCastleUci(m.uci));
              return (
                <li
                  key={m.uci}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-2 border-b border-border py-2 last:border-0"
                >
                  <button
                    type="button"
                    onClick={() => playUci(normalizeCastleUci(m.uci))}
                    className="min-w-12 text-left font-medium hover:text-accent"
                  >
                    {m.san}
                  </button>
                  <button
                    type="button"
                    onClick={() => playUci(normalizeCastleUci(m.uci))}
                    className="min-w-0"
                  >
                    <ResultBar
                      white={m.white}
                      draws={m.draws}
                      black={m.black}
                    />
                    <div className="mt-1 flex justify-between font-mono text-[11px] text-subtle tabular-nums">
                      <span>{formatGames(games)}</span>
                      <span>
                        {pct(m.white, games)}-{pct(m.draws, games)}-
                        {pct(m.black, games)}
                      </span>
                    </div>
                  </button>
                  <button
                    type="button"
                    disabled={known}
                    onClick={() =>
                      addMove(m.uci, m.san, m.opening?.name, m.opening?.eco)
                    }
                    className={cn(
                      "inline-flex size-9 items-center justify-center rounded-md",
                      known
                        ? "text-success"
                        : "text-muted ring-1 ring-border hover:bg-surface-2 hover:text-fg",
                    )}
                    aria-label={known ? "Already in repertoire" : "Add to repertoire"}
                    title={known ? "Already in repertoire" : "Add to repertoire"}
                  >
                    <Plus className="size-4" />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {tab === "build" && (
        <p className="text-xs text-muted">
          Every legal move you play on the board is saved to this repertoire.
        </p>
      )}
    </div>
  );
}