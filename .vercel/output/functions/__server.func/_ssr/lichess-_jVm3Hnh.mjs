import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lichess-_jVm3Hnh.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchLichessExplorer_createServerFn_handler = createServerRpc({
	id: "8e3dab13cc3154e8e24f131801a8884a7f9643ce0e8d8d3832caabddfb107ae8",
	name: "fetchLichessExplorer",
	filename: "src/lib/chess/lichess.ts"
}, (opts) => fetchLichessExplorer.__executeServer(opts));
var fetchLichessExplorer = createServerFn({ method: "POST" }).validator((data) => data).handler(fetchLichessExplorer_createServerFn_handler, async ({ data }) => {
	const fen = encodeURIComponent(data.fen);
	const url = data.source === "masters" ? `https://explorer.lichess.ovh/masters?fen=${fen}&moves=12&topGames=0&since=2015` : `https://explorer.lichess.ovh/lichess?variant=standard&fen=${fen}&speeds=blitz,rapid,classical&ratings=1600,1800,2000,2200,2500&moves=12&topGames=0`;
	const res = await fetch(url, {
		headers: {
			Accept: "application/json",
			"User-Agent": "RepertoireStudio/1.0"
		},
		signal: AbortSignal.timeout(8e3)
	});
	if (!res.ok) throw new Error(`Lichess explorer returned ${res.status}`);
	const json = await res.json();
	return {
		white: json.white ?? 0,
		draws: json.draws ?? 0,
		black: json.black ?? 0,
		moves: Array.isArray(json.moves) ? json.moves : [],
		opening: json.opening
	};
});
//#endregion
export { fetchLichessExplorer_createServerFn_handler };
