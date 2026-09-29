import { useRef, useState } from "react";
import {
  BookOpen,
  Plus,
  Trash2,
  Upload,
  Swords,
  Library as LibraryIcon,
} from "lucide-react";
import { toast } from "sonner";
import { MiniBoard } from "./board";
import { cn } from "@/lib/utils";
import { countNodes, fenAfterPlies } from "@/lib/chess/repertoire";
import { useStudio } from "@/lib/chess/store";
import type { Side } from "@/lib/chess/types";

export function LibraryView() {
  const repertoires = useStudio((s) => s.repertoires);
  const openStudio = useStudio((s) => s.openStudio);
  const createRepertoire = useStudio((s) => s.createRepertoire);
  const deleteRepertoire = useStudio((s) => s.deleteRepertoire);
  const importJson = useStudio((s) => s.importJson);
  const fileRef = useRef<HTMLInputElement>(null);
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState<Side>("white");

  function onImport(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const raw = JSON.parse(String(reader.result));
        const item = importJson(raw);
        if (!item) {
          toast.error("Could not read that repertoire file.");
          return;
        }
        toast.success(`Imported ${item.title}`);
      } catch {
        toast.error("Invalid JSON.");
      }
    };
    reader.readAsText(file);
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
      <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase">
            Opening preparation
          </p>
          <h1 className="font-display mt-2 text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl">
            Repertoire Studio
          </h1>
          <p className="mt-3 max-w-md text-pretty text-muted">
            Build a line, drill it against popular replies, and check how
            masters actually play the position.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="inline-flex h-11 items-center gap-2 rounded-md px-4 text-sm font-medium text-fg ring-1 ring-border transition-colors hover:bg-surface-2"
          >
            <Upload className="size-4" />
            Import
          </button>
          <button
            type="button"
            onClick={() => setCreating(true)}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg transition-transform hover:opacity-90 active:scale-[0.98]"
          >
            <Plus className="size-4" />
            New repertoire
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onImport(f);
              e.target.value = "";
            }}
          />
        </div>
      </header>

      {creating && (
        <form
          className="flex flex-col gap-4 rounded-xl bg-surface p-4 ring-1 ring-border sm:flex-row sm:items-end"
          onSubmit={(e) => {
            e.preventDefault();
            const name = title.trim() || "Untitled";
            const id = createRepertoire(name, color);
            setCreating(false);
            setTitle("");
            openStudio(id);
          }}
        >
          <label className="flex min-w-0 flex-1 flex-col gap-1.5 text-sm">
            <span className="text-muted">Title</span>
            <input
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="My 1.e4 repertoire"
              className="h-11 rounded-md bg-surface-2 px-3 text-fg ring-1 ring-border outline-none focus:ring-border-strong"
            />
          </label>
          <fieldset className="flex gap-2">
            <legend className="sr-only">Color</legend>
            {(["white", "black"] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={cn(
                  "h-11 rounded-md px-4 text-sm capitalize ring-1 transition-colors",
                  color === c
                    ? "bg-accent text-accent-fg ring-transparent"
                    : "text-fg ring-border hover:bg-surface-2",
                )}
              >
                {c}
              </button>
            ))}
          </fieldset>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setCreating(false)}
              className="h-11 rounded-md px-4 text-sm text-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-11 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
            >
              Create
            </button>
          </div>
        </form>
      )}

      <section>
        <div className="mb-4 flex items-center gap-2 text-sm text-muted">
          <LibraryIcon className="size-4" />
          <span>{repertoires.length} repertoires</span>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repertoires.map((item) => {
            const nodes = countNodes(item.root);
            const preview = fenAfterPlies(item.root, 6);
            return (
              <li key={item.id}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-surface ring-1 ring-border transition-colors hover:ring-border-strong">
                  <button
                    type="button"
                    onClick={() => openStudio(item.id)}
                    className="flex flex-1 flex-col text-left"
                  >
                    <div className="relative aspect-[5/3] overflow-hidden bg-surface-2 p-5">
                      <div className="mx-auto size-full max-w-[220px]">
                        <MiniBoard fen={preview} className="rounded-sm shadow-lg" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="font-display text-xl font-medium tracking-tight">
                          {item.title}
                        </h2>
                        {item.eco && (
                          <span className="font-mono text-xs text-muted">
                            {item.eco}
                          </span>
                        )}
                      </div>
                      <p className="line-clamp-2 text-sm text-pretty text-muted">
                        {item.blurb}
                      </p>
                      <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-subtle">
                        <span className="inline-flex items-center gap-1.5 capitalize">
                          <Swords className="size-3.5" />
                          {item.color}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <BookOpen className="size-3.5" />
                          {nodes} moves
                        </span>
                      </div>
                    </div>
                  </button>
                  {!item.builtin && (
                    <div className="flex justify-end border-t border-border px-3 py-2">
                      <button
                        type="button"
                        className="inline-flex h-9 items-center gap-1.5 rounded-md px-2 text-xs text-muted hover:text-danger"
                        onClick={() => {
                          deleteRepertoire(item.id);
                          toast.message("Repertoire removed");
                        }}
                      >
                        <Trash2 className="size-3.5" />
                        Delete
                      </button>
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
