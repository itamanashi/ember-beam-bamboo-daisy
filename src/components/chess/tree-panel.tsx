import { Trash2 } from "lucide-react";
import { useCandidateMoves, useStudio } from "@/lib/chess/store";

export function TreePanel() {
  const playUci = useStudio((s) => s.playUci);
  const removeChild = useStudio((s) => s.removeChild);
  const fen = useStudio((s) => s.fen);
  const tab = useStudio((s) => s.tab);
  const candidates = useCandidateMoves();

  if (candidates.length === 0) {
    return (
      <p className="text-sm text-muted">
        {tab === "build"
          ? "Play a move on the board to grow this branch."
          : "No repertoire moves from this position."}
      </p>
    );
  }

  return (
    <div>
      <p className="mb-2 text-xs font-medium tracking-[0.16em] text-muted uppercase">
        Branches
      </p>
      <ul className="flex flex-col gap-1">
        {candidates.map((m) => (
          <li
            key={m.uci}
            className="flex items-center gap-1 rounded-md hover:bg-surface-2"
          >
            <button
              type="button"
              onClick={() => playUci(m.uci)}
              className="flex min-w-0 flex-1 items-center justify-between px-3 py-2 text-left text-sm"
            >
              <span className="font-medium">{m.san}</span>
              <span className="text-xs text-muted">
                {m.children.length} replies
              </span>
            </button>
            {tab === "build" && (
              <button
                type="button"
                className="mr-1 inline-flex size-9 items-center justify-center rounded-md text-muted hover:text-danger"
                onClick={() => removeChild(fen, m.uci)}
                aria-label={`Remove ${m.san}`}
              >
                <Trash2 className="size-3.5" />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
