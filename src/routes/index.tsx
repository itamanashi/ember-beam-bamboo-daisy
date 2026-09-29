import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LibraryView } from "@/components/chess/library";
import { StudioView } from "@/components/chess/studio";
import { useStudio } from "@/lib/chess/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const view = useStudio((s) => s.view);
  const hydrate = useStudio((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <main className="min-h-dvh bg-bg text-fg">
      {view === "library" ? <LibraryView /> : <StudioView />}
    </main>
  );
}
