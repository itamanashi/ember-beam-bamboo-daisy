import { createServerFn } from "@tanstack/react-start";
import type { ExplorerSource, LichessExplorer } from "./types";

export const fetchLichessExplorer = createServerFn({ method: "POST" })
  .validator((data: { fen: string; source: ExplorerSource }) => data)
  .handler(async ({ data }): Promise<LichessExplorer> => {
    const fen = encodeURIComponent(data.fen);
    const url =
      data.source === "masters"
        ? `https://explorer.lichess.ovh/masters?fen=${fen}&moves=12&topGames=0&since=2015`
        : `https://explorer.lichess.ovh/lichess?variant=standard&fen=${fen}&speeds=blitz,rapid,classical&ratings=1600,1800,2000,2200,2500&moves=12&topGames=0`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "RepertoireStudio/1.0",
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      throw new Error(`Lichess explorer returned ${res.status}`);
    }
    const json = (await res.json()) as LichessExplorer;
    return {
      white: json.white ?? 0,
      draws: json.draws ?? 0,
      black: json.black ?? 0,
      moves: Array.isArray(json.moves) ? json.moves : [],
      opening: json.opening,
    };
  });
