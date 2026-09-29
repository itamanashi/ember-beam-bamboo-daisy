import type { ReactNode } from "react";
import { Check, Lightbulb, RotateCcw, X } from "lucide-react";
import { useCandidateMoves, useStudio } from "@/lib/chess/store";
import { cn } from "@/lib/utils";

export function TrainerPanel({
  onRestart,
  onReveal,
}: {
  onRestart: () => void;
  onReveal: () => void;
}) {
  const trainer = useStudio((s) => s.trainer);
  const itemColor = useStudio(
    (s) => s.repertoires.find((r) => r.id === s.activeId)?.color ?? "white",
  );
  const candidates = useCandidateMoves();
  const { stats, feedback, hint } = trainer;
  const attempts = stats.correct + stats.wrong;
  const accuracy = attempts === 0 ? 100 : Math.round((stats.correct / attempts) * 100);
  const hintSan = feedback?.expected ?? candidates[0]?.san;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
          Drill
        </p>
        <h2 className="font-display text-lg font-medium tracking-tight">
          Play as {itemColor === "white" ? "White" : "Black"}
        </h2>
        <p className="mt-1 text-sm text-pretty text-muted">
          Recite your repertoire. The opponent answers with weighted popular
          moves from the tree.
        </p>
      </div>

      <dl className="grid grid-cols-3 gap-2">
        <Stat label="Accuracy" value={`${accuracy}%`} />
        <Stat label="Streak" value={String(stats.streak)} />
        <Stat label="Lines" value={String(stats.lines)} />
      </dl>

      {feedback?.kind === "ok" && (
        <Banner tone="ok" icon={<Check className="size-4" />}>
          Correct. {stats.streak > 1 ? `${stats.streak} in a row.` : "Keep going."}
        </Banner>
      )}
      {feedback?.kind === "bad" && (
        <Banner tone="bad" icon={<X className="size-4" />}>
          {feedback.played} is off-book. Expected {feedback.expected}.
        </Banner>
      )}
      {feedback?.kind === "done" && (
        <Banner tone="ok" icon={<Check className="size-4" />}>
          End of line. {stats.lines} completed this session.
        </Banner>
      )}
      {hint && hintSan && (
        <p className="text-sm text-muted">
          Hint: play <span className="font-medium text-fg">{hintSan}</span>
        </p>
      )}

      {candidates.length === 0 && feedback?.kind !== "done" && (
        <p className="text-sm text-muted">
          No repertoire moves from this position. Step back, or start a new
          line.
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
        >
          <RotateCcw className="size-4" />
          New line
        </button>
        <button
          type="button"
          onClick={onReveal}
          className="inline-flex h-11 items-center gap-2 rounded-md px-4 text-sm font-medium text-fg ring-1 ring-border hover:bg-surface-2"
        >
          <Lightbulb className="size-4" />
          Show move
        </button>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-surface-2 px-3 py-2 ring-1 ring-border">
      <dt className="text-[11px] tracking-wide text-muted uppercase">{label}</dt>
      <dd className="font-display text-xl font-medium tabular-nums">{value}</dd>
    </div>
  );
}

function Banner({
  tone,
  icon,
  children,
}: {
  tone: "ok" | "bad";
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-2 rounded-md px-3 py-2 text-sm",
        tone === "ok" ? "bg-success-dim text-success" : "bg-danger-dim text-danger",
      )}
    >
      <span className="mt-0.5">{icon}</span>
      <p>{children}</p>
    </div>
  );
}
