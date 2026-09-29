import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { S as BookOpen, _ as ChevronsRight, a as Swords, b as ChevronLeft, c as Plus, d as LoaderCircle, f as Lightbulb, g as Copy, h as Download, i as Trash2, l as Play, m as FlipVertical2, n as Upload, o as RotateCcw, p as Library, s as Radio, t as X, u as Pause, v as ChevronsLeft, x as Check, y as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Chess } from "../_libs/chess.js.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BX9voav6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Svg({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 45 45",
		className,
		"aria-hidden": "true",
		focusable: "false",
		children
	});
}
function WhitePawn({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z",
			fill: "var(--color-piece-w)",
			stroke: "var(--color-piece-w-stroke)",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})
	});
}
function BlackPawn({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z",
			fill: "var(--color-piece-b)",
			stroke: "var(--color-piece-b-stroke)",
			strokeWidth: "1.5",
			strokeLinecap: "round"
		})
	});
}
function WhiteRook({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "var(--color-piece-w)",
			stroke: "var(--color-piece-w-stroke)",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M34 14l-3 3H14l-3-3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M31 17v12.5H14V17" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M31 29.5l1.5 2.5h-20l1.5-2.5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M11 14h23",
					fill: "none"
				})
			]
		})
	});
}
function BlackRook({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "var(--color-piece-b)",
			stroke: "var(--color-piece-b-stroke)",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5H12.5zM12 36v-4h21v4H12z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 29.5v-13h17v13H14z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23",
					fill: "none",
					stroke: "var(--color-muted)",
					strokeWidth: "1"
				})
			]
		})
	});
}
function WhiteKnight({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: "var(--color-piece-w-stroke)",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21",
					fill: "var(--color-piece-w)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3",
					fill: "var(--color-piece-w)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z",
					fill: "#000"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M14.933 15.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z",
					fill: "#000"
				})
			]
		})
	});
}
function BlackKnight({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: "var(--color-piece-b-stroke)",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21",
					fill: "var(--color-piece-b)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3",
					fill: "var(--color-piece-b)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z",
					fill: "#eee",
					stroke: "#eee"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M14.933 15.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z",
					fill: "#eee",
					stroke: "#eee"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.25-2.37-4.4-5.79-6.64-9.25-7.5z",
					fill: "var(--color-muted)",
					stroke: "none"
				})
			]
		})
	});
}
function WhiteBishop({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: "var(--color-piece-w-stroke)",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "var(--color-piece-w)",
				strokeLinecap: "butt",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.94 3-2 3-2z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.5 26h10M15 30h15M22.5 15.5l-3 6 3 2 3-2-3-6" })]
		})
	});
}
function BlackBishop({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: "var(--color-piece-b-stroke)",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "var(--color-piece-b)",
				strokeLinecap: "butt",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.94 3-2 3-2z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M17.5 26h10M15 30h15M22.5 15.5l-3 6 3 2 3-2-3-6",
				stroke: "var(--color-muted)"
			})]
		})
	});
}
function WhiteQueen({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "var(--color-piece-w)",
			stroke: "var(--color-piece-w-stroke)",
			strokeWidth: "1.5",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M11.5 30c3.5-1 18.5-1 22 0M10 33.5c5.5-1 19.5-1 25 0",
					fill: "none"
				})
			]
		})
	});
}
function BlackQueen({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "var(--color-piece-b)",
			stroke: "var(--color-piece-b-stroke)",
			strokeWidth: "1.5",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "6",
					cy: "12",
					r: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "14",
					cy: "9",
					r: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "22.5",
					cy: "8",
					r: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "31",
					cy: "9",
					r: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "39",
					cy: "12",
					r: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.05-14.5-5.45 14.5-3-16.5-3 16.5-5.45-14.5L14 25 6.5 13.5 9 26z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M11 38.5a35 35 1 0 0 23 0",
					fill: "none",
					stroke: "var(--color-muted)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M11.5 30c3.5-1 18.5-1 22 0M10 33.5c5.5-1 19.5-1 25 0",
					fill: "none",
					stroke: "var(--color-muted)"
				})
			]
		})
	});
}
function WhiteKing({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: "var(--color-piece-w-stroke)",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M22.5 11.63V6M20 8h5",
					strokeLinejoin: "miter"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5",
					fill: "var(--color-piece-w)",
					strokeLinecap: "butt",
					strokeLinejoin: "miter"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z",
					fill: "var(--color-piece-w)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0" })
			]
		})
	});
}
function BlackKing({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: "var(--color-piece-b-stroke)",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M22.5 11.63V6M20 8h5",
					strokeLinejoin: "miter"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5",
					fill: "var(--color-piece-b)",
					strokeLinecap: "butt",
					strokeLinejoin: "miter"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z",
					fill: "var(--color-piece-b)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 8h5M22.5 11.63V6",
					stroke: "var(--color-piece-b-stroke)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0",
					stroke: "var(--color-muted)"
				})
			]
		})
	});
}
var MAP = {
	wp: WhitePawn,
	bp: BlackPawn,
	wr: WhiteRook,
	br: BlackRook,
	wn: WhiteKnight,
	bn: BlackKnight,
	wb: WhiteBishop,
	bb: BlackBishop,
	wq: WhiteQueen,
	bq: BlackQueen,
	wk: WhiteKing,
	bk: BlackKing
};
function ChessPiece({ type, color, className }) {
	const Cmp = MAP[`${color}${type}`];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cmp, { className });
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var FILES = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h"
];
function squareColor(file, rank) {
	return (file + rank) % 2 === 0 ? "dark" : "light";
}
function kingSquare(chess, color) {
	for (const file of FILES) for (let r = 1; r <= 8; r++) {
		const s = `${file}${r}`;
		const p = chess.get(s);
		if (p && p.type === "k" && p.color === color) return s;
	}
	return null;
}
function ChessBoard({ fen, orientation, lastMove, arrows = [], interactive = true, onMove }) {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [promo, setPromo] = (0, import_react.useState)(null);
	const chess = (0, import_react.useMemo)(() => {
		try {
			return new Chess(fen);
		} catch {
			return new Chess();
		}
	}, [fen]);
	const dests = (0, import_react.useMemo)(() => {
		if (!selected) return /* @__PURE__ */ new Map();
		const map = /* @__PURE__ */ new Map();
		for (const m of chess.moves({
			square: selected,
			verbose: true
		})) map.set(m.to, { promo: Boolean(m.promotion) });
		return map;
	}, [chess, selected]);
	const turn = chess.turn();
	const checkedKing = chess.inCheck() ? kingSquare(chess, turn) : null;
	const files = orientation === "white" ? [...FILES] : [...FILES].reverse();
	const ranks = orientation === "white" ? [
		8,
		7,
		6,
		5,
		4,
		3,
		2,
		1
	] : [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8
	];
	function attempt(from, to) {
		dests.get(to);
		if (!chess.moves({
			square: from,
			verbose: true
		}).some((m) => m.to === to)) {
			const piece = chess.get(to);
			if (piece && piece.color === turn) {
				setSelected(to);
				return;
			}
			setSelected(null);
			return;
		}
		if (chess.moves({
			square: from,
			verbose: true
		}).some((m) => m.to === to && m.promotion)) {
			setPromo({
				from,
				to
			});
			return;
		}
		const ok = onMove(from, to);
		setSelected(null);
		if (!ok) setSelected(null);
	}
	function onSquareClick(sq) {
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
	function onDrop(from, to) {
		if (!interactive || promo) return;
		const f = from;
		const t = to;
		const match = chess.moves({
			square: f,
			verbose: true
		}).find((m) => m.to === t);
		if (!match) return;
		if (match.promotion) {
			setSelected(f);
			setPromo({
				from: f,
				to: t
			});
			return;
		}
		onMove(f, t);
		setSelected(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "board-frame relative aspect-square w-full overflow-hidden rounded-lg p-[3.2%]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative grid size-full grid-cols-8 grid-rows-8 overflow-hidden rounded-xs",
			role: "grid",
			"aria-label": "Chessboard",
			onDragOver: (e) => e.preventDefault(),
			children: [ranks.map((rank, ri) => files.map((file, fi) => {
				const sq = `${file}${rank}`;
				const piece = chess.get(sq);
				const isLight = squareColor(fi, ri) === "light";
				const isLast = lastMove && (lastMove.from === sq || lastMove.to === sq);
				const isSel = selected === sq;
				const isCheck = checkedKing === sq;
				const dest = dests.get(sq);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					role: "gridcell",
					"aria-label": sq,
					disabled: !interactive,
					onClick: () => onSquareClick(sq),
					onDrop: (e) => {
						e.preventDefault();
						const from = e.dataTransfer.getData("text/square");
						if (from) onDrop(from, sq);
					},
					onDragOver: (e) => e.preventDefault(),
					className: cn("relative flex items-center justify-center", isLight ? "sq-light" : "sq-dark", isLast && "sq-last", isSel && "sq-selected", isCheck && "sq-check"),
					children: [
						fi === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("pointer-events-none absolute top-0.5 left-1 font-mono text-[10px] font-medium sm:text-xs", isLight ? "text-board-coord" : "text-board-light/80"),
							children: rank
						}),
						ri === 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("pointer-events-none absolute right-1 bottom-0.5 font-mono text-[10px] font-medium sm:text-xs", isLight ? "text-board-coord" : "text-board-light/80"),
							children: file
						}),
						dest && !piece && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-[22%] rounded-full bg-piece-b/35" }),
						dest && piece && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-[6%] rounded-full ring-[3px] ring-piece-b/40" }),
						piece && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							draggable: interactive,
							onDragStart: (e) => {
								if (!interactive) return;
								e.dataTransfer.setData("text/square", sq);
								e.dataTransfer.effectAllowed = "move";
								if (piece.color === turn) setSelected(sq);
							},
							className: cn("relative z-10 size-[88%] select-none", interactive && "cursor-grab active:cursor-grabbing", isSel && "piece-lift"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChessPiece, {
								type: piece.type,
								color: piece.color,
								className: "size-full"
							})
						})
					]
				}, sq);
			})), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "pointer-events-none absolute inset-0 z-20 size-full",
				viewBox: "0 0 8 8",
				children: [arrows.map((a) => {
					const fromFile = FILES.indexOf(a.from[0]);
					const fromRank = Number(a.from[1]);
					const toFile = FILES.indexOf(a.to[0]);
					const toRank = Number(a.to[1]);
					const fx = orientation === "white" ? fromFile + .5 : 7 - fromFile + .5;
					const fy = orientation === "white" ? 8 - fromRank + .5 : fromRank - .5;
					const tx = orientation === "white" ? toFile + .5 : 7 - toFile + .5;
					const ty = orientation === "white" ? 8 - toRank + .5 : toRank - .5;
					const color = a.color === "bad" ? "var(--color-danger)" : a.color === "ok" ? "var(--color-success)" : "#6f8f6e";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: fx,
						y1: fy,
						x2: tx,
						y2: ty,
						stroke: color,
						strokeWidth: "0.18",
						strokeLinecap: "round",
						markerEnd: "url(#arrowhead)",
						opacity: "0.9"
					}, `${a.from}${a.to}${a.color}`);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
					id: "arrowhead",
					markerWidth: "3",
					markerHeight: "3",
					refX: "1.6",
					refY: "1.5",
					orient: "auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M0,0 L3,1.5 L0,3 z",
						fill: "#6f8f6e"
					})
				}) })]
			})]
		}), promo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 z-30 flex items-center justify-center bg-bg/55",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 rounded-lg bg-surface p-2 ring-1 ring-border",
				children: [[
					"q",
					"r",
					"b",
					"n"
				].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "size-14 rounded-md bg-surface-2 p-1 ring-1 ring-border transition-transform hover:scale-105",
					onClick: () => {
						onMove(promo.from, promo.to, p);
						setPromo(null);
						setSelected(null);
					},
					"aria-label": `Promote to ${p}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChessPiece, {
						type: p,
						color: turn,
						className: "size-full"
					})
				}, p)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "rounded-md px-3 text-sm text-muted",
					onClick: () => setPromo(null),
					children: "Cancel"
				})]
			})
		})]
	});
}
function MiniBoard({ fen, className }) {
	const chess = (0, import_react.useMemo)(() => {
		try {
			return new Chess(fen);
		} catch {
			return new Chess();
		}
	}, [fen]);
	const files = [...FILES];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid aspect-square w-full grid-cols-8 grid-rows-8 overflow-hidden rounded-sm", className),
		"aria-hidden": "true",
		children: [
			8,
			7,
			6,
			5,
			4,
			3,
			2,
			1
		].map((rank, ri) => files.map((file, fi) => {
			const sq = `${file}${rank}`;
			const piece = chess.get(sq);
			const isLight = squareColor(fi, ri) === "light";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: isLight ? "sq-light" : "sq-dark",
				children: piece && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChessPiece, {
					type: piece.type,
					color: piece.color,
					className: "size-full"
				})
			}, sq);
		}))
	});
}
var INITIAL_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
var CASTLE_UCI = {
	e1h1: "e1g1",
	e1a1: "e1c1",
	e8h8: "e8g8",
	e8a8: "e8c8"
};
function normalizeCastleUci(uci) {
	const mapped = CASTLE_UCI[uci.slice(0, 4)];
	return mapped ? mapped + uci.slice(4) : uci;
}
function normalizeFen(fen) {
	return fen.split(" ").slice(0, 4).join(" ");
}
function uciOf(from, to, promotion) {
	return from + to + (promotion ?? "");
}
function tryMove(fen, from, to, promotion) {
	try {
		const chess = new Chess(fen);
		const move = chess.move({
			from,
			to,
			promotion: promotion || "q"
		});
		if (!move) return null;
		return {
			san: move.san,
			uci: uciOf(move.from, move.to, move.promotion),
			fen: chess.fen(),
			captured: Boolean(move.captured),
			check: chess.inCheck(),
			mate: chess.isCheckmate()
		};
	} catch {
		return null;
	}
}
function buildTreeFromLines(lines) {
	const root = {
		fen: INITIAL_FEN,
		children: []
	};
	for (const line of lines) {
		const chess = new Chess();
		let siblings = root.children;
		for (const san of line) {
			chess.fen();
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
					children: []
				};
				siblings.push(node);
			} else node.games += 1;
			siblings = node.children;
		}
	}
	return root;
}
function indexRepertoire(root) {
	const fenToChildren = /* @__PURE__ */ new Map();
	if (!root) return fenToChildren;
	const visit = (fen, children) => {
		fenToChildren.set(normalizeFen(fen), children);
		for (const child of children) visit(child.fen, child.children);
	};
	visit(root.fen, root.children);
	return fenToChildren;
}
function countNodes(root) {
	let n = 0;
	const walk = (nodes) => {
		for (const node of nodes) {
			n += 1;
			walk(node.children);
		}
	};
	walk(root.children);
	return n;
}
function fenAfterPlies(root, plies) {
	let fen = root.fen;
	let children = root.children;
	for (let i = 0; i < plies && children.length; i++) {
		const best = [...children].sort((a, b) => b.games - a.games)[0];
		fen = best.fen;
		children = best.children;
	}
	return fen;
}
function insertMoveAtFen(root, parentFen, child) {
	const cloned = structuredClone(root);
	const target = normalizeFen(parentFen);
	const walk = (fen, nodes) => {
		if (normalizeFen(fen) === target) {
			if (!nodes.some((n) => n.uci === child.uci)) nodes.push(child);
			return true;
		}
		for (const node of nodes) if (walk(node.fen, node.children)) return true;
		return false;
	};
	if (!walk(cloned.fen, cloned.children) && normalizeFen(cloned.fen) === target) cloned.children.push(child);
	return cloned;
}
function removeMoveAtFen(root, parentFen, uci) {
	const cloned = structuredClone(root);
	const target = normalizeFen(parentFen);
	const walk = (fen, nodes) => {
		if (normalizeFen(fen) === target) {
			const i = nodes.findIndex((n) => n.uci === uci);
			if (i >= 0) nodes.splice(i, 1);
			return true;
		}
		for (const node of nodes) if (walk(node.fen, node.children)) return true;
		return false;
	};
	walk(cloned.fen, cloned.children);
	return cloned;
}
function ensurePath(root, history, child) {
	const cloned = structuredClone(root);
	let nodes = cloned.children;
	cloned.fen;
	for (let i = 1; i < history.length; i++) {
		const step = history[i];
		let node = nodes.find((n) => n.uci === step.uci);
		if (!node) {
			node = {
				san: step.san,
				uci: step.uci,
				fen: step.fen,
				games: 1,
				children: []
			};
			nodes.push(node);
		}
		node.fen;
		nodes = node.children;
	}
	if (!nodes.some((n) => n.uci === child.uci)) nodes.push(child);
	return cloned;
}
function historyFromStart() {
	return [{
		san: "",
		uci: "",
		fen: INITIAL_FEN
	}];
}
function generatePgn(title, color, history) {
	const moves = history.filter((h) => h.san);
	const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replaceAll("-", ".");
	const headers = [
		`[Event "${title}"]`,
		`[Site "Repertoire Studio"]`,
		`[Date "${date}"]`,
		`[White "${color === "white" ? "Studio" : "Opponent"}"]`,
		`[Black "${color === "black" ? "Studio" : "Opponent"}"]`,
		`[Result "*"]`
	];
	const body = [];
	for (let i = 0; i < moves.length; i++) {
		if (i % 2 === 0) body.push(`${Math.floor(i / 2) + 1}.`);
		body.push(moves[i].san);
	}
	return `${headers.join("\n")}\n\n${body.join(" ")} *\n`;
}
function downloadText(filename, text, mime) {
	const blob = new Blob([text], { type: mime });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
function slugify(title) {
	return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 48);
}
function coerceMove(raw) {
	const san = raw.san || raw.coup;
	const uci = raw.uci;
	const fen = raw.fen;
	if (!san || !uci || !fen) return null;
	return {
		san,
		uci,
		fen,
		games: raw.games ?? raw.parties ?? 1,
		children: Array.isArray(raw.children) ? raw.children.map(coerceMove).filter((m) => Boolean(m)) : []
	};
}
function importRepertoire(raw) {
	if (!raw || typeof raw !== "object") return null;
	const o = raw;
	const rootRaw = o.root;
	if (!rootRaw?.fen || !Array.isArray(rootRaw.children)) return null;
	const children = rootRaw.children.map(coerceMove).filter((m) => Boolean(m));
	const color = o.color === "black" ? "black" : "white";
	const title = typeof o.title === "string" && o.title.trim() ? o.title.trim() : "Imported";
	const now = (/* @__PURE__ */ new Date()).toISOString();
	return {
		id: typeof o.id === "string" ? o.id : crypto.randomUUID(),
		title,
		color,
		eco: typeof o.eco === "string" ? o.eco : void 0,
		blurb: typeof o.blurb === "string" ? o.blurb : "Imported repertoire",
		builtin: o.builtin === true,
		createdAt: typeof o.createdAt === "string" ? o.createdAt : now,
		updatedAt: now,
		root: {
			fen: rootRaw.fen,
			children
		}
	};
}
function emptyRepertoire(title, color) {
	const now = (/* @__PURE__ */ new Date()).toISOString();
	return {
		id: crypto.randomUUID(),
		title,
		color,
		blurb: "A custom line. Play moves in Build to grow the tree.",
		builtin: false,
		createdAt: now,
		updatedAt: now,
		root: {
			fen: INITIAL_FEN,
			children: []
		}
	};
}
function formatGames(n) {
	if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
	if (n >= 1e4) return `${Math.round(n / 1e3)}k`;
	if (n >= 1e3) return `${(n / 1e3).toFixed(1)}k`;
	return String(n);
}
function pct(part, total) {
	if (total <= 0) return 0;
	return Math.round(part / total * 100);
}
var ITALIAN = [
	"e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Bd2 Bxd2+ Nbxd2 d5 exd5 Nxd5 Qb3 Nce7 O-O O-O".split(" "),
	"e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Nc3 Nxe4 O-O Bxc3 bxc3 d5".split(" "),
	"e4 e5 Nf3 Nc6 Bc4 Bc5 d3 Nf6 O-O d6 c3 a6 Bb3 Ba7 Nbd2 O-O h3".split(" "),
	"e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O Nge7 cxd4 d5".split(" "),
	"e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Be2 h6 Nf3 e4 Ne5 Bd6".split(" "),
	"e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O Re1 d6 a4".split(" "),
	"e4 e5 Nf3 Nc6 Bc4 Be7 d3 Nf6 O-O O-O".split(" "),
	"e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O a6".split(" ")
];
var RUY = [
	"e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Nb8 d4 Nbd7 Nbd2 Bb7".split(" "),
	"e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6".split(" "),
	"e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Bc5 Nbd2 O-O".split(" "),
	"e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5".split(" "),
	"e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8".split(" "),
	"e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O f6 d4 Bg4".split(" "),
	"e4 e5 Nf3 Nc6 Bb5 f5 Nc3 fxe4 Nxe4 Nf6".split(" "),
	"e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 O-O Bd7".split(" ")
];
var QG = [
	"d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 b6".split(" "),
	"d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 c6 Qc2 Be7 e3 Nbd7".split(" "),
	"d4 d5 c4 e6 Nf3 Nf6 Nc3 c5 cxd5 exd5 Bg5 Be7".split(" "),
	"d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6".split(" "),
	"d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3 e6 Bxc4".split(" "),
	"d4 d5 c4 e6 Nc3 c6 e3 Nf6 Nf3 Nbd7 Bd3 dxc4 Bxc4 b5".split(" "),
	"d4 d5 c4 e6 Nc3 Nf6 Nf3 Be7 Bf4 O-O e3 Nbd7".split(" ")
];
var LONDON = [
	"d4 Nf6 Nf3 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3 c4 Qc2".split(" "),
	"d4 d5 Nf3 Nf6 Bf4 c5 e3 Nc6 c3 Bg4 Nbd2 e6".split(" "),
	"d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2".split(" "),
	"d4 Nf6 Nf3 e6 Bf4 c5 e3 Nc6 c3 d5 Nbd2 Bd6".split(" "),
	"d4 d5 Bf4 Nf6 e3 c5 c3 Nc6 Nd2 Bf5 Ngf3 e6".split(" "),
	"d4 Nf6 Bf4 d5 e3 e6 Nd2 c5 c3 Nc6".split(" ")
];
var SICILIAN = [
	"e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3 Be6 f3 Be7 Qd2 O-O".split(" "),
	"e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Qb6 Qd2 Qxb2 Rb1 Qa3".split(" "),
	"e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2 e5 Nb3 Be7 O-O Be6".split(" "),
	"e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6".split(" "),
	"e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5".split(" "),
	"e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7 Be3 a6 Qd2 Nf6".split(" "),
	"e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3 Bg7 Be3 Nf6 Bc4 O-O".split(" ")
];
var FRENCH = [
	"e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 Qg4 Qc7".split(" "),
	"e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 f4 O-O".split(" "),
	"e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 Bd3 c5 c3 Nc6 Ne2 cxd4 cxd4 f6".split(" "),
	"e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 a3 c4".split(" "),
	"e4 e6 d4 d5 exd5 exd5 Bd3 Nc6 Nf3 Bd6".split(" "),
	"e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Ba5 b4 cxd4".split(" ")
];
var CARO = [
	"e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7".split(" "),
	"e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Nf3 Ngf6 Nxf6+ Nxf6".split(" "),
	"e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 c5 Be3".split(" "),
	"e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6".split(" "),
	"e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6".split(" "),
	"e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6".split(" ")
];
var KID = [
	"d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7".split(" "),
	"d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5".split(" "),
	"d4 Nf6 c4 g6 Nc3 Bg7 g3 O-O Bg2 d6 Nf3 Nc6 O-O a6".split(" "),
	"d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Na6".split(" "),
	"d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nbd7 Nc3 e5".split(" "),
	"d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7".split(" ")
];
function pack(id, title, color, eco, blurb, lines) {
	const root = buildTreeFromLines(lines);
	const now = "2026-01-01T00:00:00.000Z";
	return {
		id,
		title,
		color,
		eco,
		blurb,
		builtin: true,
		createdAt: now,
		updatedAt: now,
		root
	};
}
function builtinRepertoires() {
	return [
		pack("italian-white", "Italian Game", "white", "C50", "Giuoco Piano, Two Knights, and the Evans Gambit. A complete 1.e4 e5 system.", ITALIAN),
		pack("ruy-white", "Ruy Lopez", "white", "C60", "Closed Spanish, Marshall, Berlin, and Exchange. The classical gold standard.", RUY),
		pack("qg-white", "Queen's Gambit", "white", "D06", "Declined, Accepted, Slav, and Semi-Slav structures after 1.d4 d5 2.c4.", QG),
		pack("london-white", "London System", "white", "D02", "A reliable d4 setup with Bf4. Low theory, high structure.", LONDON),
		pack("sicilian-black", "Sicilian Defence", "black", "B20", "Najdorf, Dragon, Sveshnikov, and Taimanov replies to 1.e4.", SICILIAN),
		pack("french-black", "French Defence", "black", "C00", "Winawer, Classical, Tarrasch, and Advance. Counterpunch from e6.", FRENCH),
		pack("caro-black", "Caro-Kann", "black", "B10", "Classical, Advance, and Exchange. A solid, piece-play answer to 1.e4.", CARO),
		pack("kid-black", "King's Indian", "black", "E60", "Classical, Sämisch, Fianchetto, and Grünfeld transpositions against 1.d4.", KID)
	];
}
var STORAGE_KEY = "repertoire-studio-v1";
var EMPTY_STATS = {
	correct: 0,
	wrong: 0,
	streak: 0,
	best: 0,
	lines: 0
};
function lastMoveFromHistory(history, index) {
	const item = history[index];
	if (!item?.uci || item.uci.length < 4) return void 0;
	return {
		from: item.uci.slice(0, 2),
		to: item.uci.slice(2, 4)
	};
}
function loadSaved() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed.repertoires) || parsed.repertoires.length === 0) return null;
		const items = parsed.repertoires.map((r) => importRepertoire(r)).filter((r) => Boolean(r));
		return items.length ? items : null;
	} catch {
		return null;
	}
}
var useStudio = create((set, get) => ({
	view: "library",
	tab: "explore",
	repertoires: builtinRepertoires(),
	activeId: null,
	hydrated: false,
	orientation: "white",
	fen: INITIAL_FEN,
	history: historyFromStart(),
	currentIndex: 0,
	explorerSource: "masters",
	trainer: {
		feedback: null,
		stats: EMPTY_STATS,
		hint: false
	},
	hydrate: () => {
		if (get().hydrated) return;
		set({
			repertoires: loadSaved() ?? builtinRepertoires(),
			hydrated: true
		});
	},
	persist: () => {
		if (typeof window === "undefined") return;
		localStorage.setItem(STORAGE_KEY, JSON.stringify({ repertoires: get().repertoires }));
	},
	openLibrary: () => set({
		view: "library",
		activeId: null,
		trainer: {
			feedback: null,
			stats: get().trainer.stats,
			hint: false
		}
	}),
	openStudio: (id) => {
		const item = get().repertoires.find((r) => r.id === id);
		if (!item) return;
		set({
			view: "studio",
			activeId: id,
			tab: "explore",
			orientation: item.color,
			fen: INITIAL_FEN,
			history: historyFromStart(),
			currentIndex: 0,
			lastMove: void 0,
			trainer: {
				feedback: null,
				stats: EMPTY_STATS,
				hint: false
			}
		});
	},
	setTab: (tab) => set({
		tab,
		trainer: {
			...get().trainer,
			feedback: null,
			hint: false
		}
	}),
	setOrientation: (side) => set({ orientation: side }),
	flip: () => set({ orientation: get().orientation === "white" ? "black" : "white" }),
	setExplorerSource: (s) => set({ explorerSource: s }),
	jumpTo: (index) => {
		const { history } = get();
		const i = Math.max(0, Math.min(history.length - 1, index));
		set({
			currentIndex: i,
			fen: history[i].fen,
			lastMove: lastMoveFromHistory(history, i),
			trainer: {
				...get().trainer,
				feedback: null,
				hint: false
			}
		});
	},
	playMove: (from, to, promotion) => {
		const { fen, history, currentIndex, tab, activeId, repertoires } = get();
		const result = tryMove(fen, from, to, promotion);
		if (!result) return false;
		const next = {
			san: result.san,
			uci: result.uci,
			fen: result.fen
		};
		const truncated = history.slice(0, currentIndex + 1);
		const newHistory = [...truncated, next];
		set({
			history: newHistory,
			currentIndex: newHistory.length - 1,
			fen: result.fen,
			lastMove: {
				from,
				to
			}
		});
		if (tab === "build" && activeId) {
			const item = repertoires.find((r) => r.id === activeId);
			if (item) {
				const child = {
					san: result.san,
					uci: result.uci,
					fen: result.fen,
					games: 1,
					children: []
				};
				const root = ensurePath(item.root, truncated, child);
				get().updateActiveRoot(() => root);
			}
		}
		return true;
	},
	playUci: (uci) => {
		const from = uci.slice(0, 2);
		const to = uci.slice(2, 4);
		const promo = uci.length > 4 ? uci[4] : void 0;
		return get().playMove(from, to, promo);
	},
	appendForced: (san, uci, fen) => {
		const { history, currentIndex } = get();
		const next = [...history.slice(0, currentIndex + 1), {
			san,
			uci,
			fen
		}];
		set({
			history: next,
			currentIndex: next.length - 1,
			fen,
			lastMove: {
				from: uci.slice(0, 2),
				to: uci.slice(2, 4)
			}
		});
	},
	createRepertoire: (title, color) => {
		const item = emptyRepertoire(title, color);
		set({ repertoires: [item, ...get().repertoires] });
		get().persist();
		return item.id;
	},
	deleteRepertoire: (id) => {
		set({
			repertoires: get().repertoires.filter((r) => r.id !== id),
			activeId: get().activeId === id ? null : get().activeId,
			view: get().activeId === id ? "library" : get().view
		});
		get().persist();
	},
	importJson: (raw) => {
		const item = importRepertoire(raw);
		if (!item) return null;
		item.id = crypto.randomUUID();
		item.builtin = false;
		set({ repertoires: [item, ...get().repertoires] });
		get().persist();
		return item;
	},
	updateActiveRoot: (updater) => {
		const { activeId, repertoires } = get();
		if (!activeId) return;
		set({ repertoires: repertoires.map((r) => r.id === activeId ? {
			...r,
			root: updater(r),
			updatedAt: (/* @__PURE__ */ new Date()).toISOString()
		} : r) });
		get().persist();
	},
	addCurrentMoveToTree: (move, parentFen) => {
		const item = get().repertoires.find((r) => r.id === get().activeId);
		if (!item) return;
		get().updateActiveRoot(() => insertMoveAtFen(item.root, parentFen, move));
	},
	removeChild: (parentFen, uci) => {
		const item = get().repertoires.find((r) => r.id === get().activeId);
		if (!item) return;
		get().updateActiveRoot(() => removeMoveAtFen(item.root, parentFen, uci));
	},
	resetTrainer: () => set({ trainer: {
		feedback: null,
		stats: EMPTY_STATS,
		hint: false
	} }),
	setTrainerFeedback: (feedback) => set({ trainer: {
		...get().trainer,
		feedback
	} }),
	markTrainerSuccess: () => {
		const stats = { ...get().trainer.stats };
		stats.correct += 1;
		stats.streak += 1;
		stats.best = Math.max(stats.best, stats.streak);
		set({ trainer: {
			feedback: { kind: "ok" },
			stats,
			hint: false
		} });
	},
	markTrainerError: (played, expected, expectedUci) => {
		const stats = {
			...get().trainer.stats,
			wrong: get().trainer.stats.wrong + 1,
			streak: 0
		};
		set({ trainer: {
			feedback: {
				kind: "bad",
				played,
				expected,
				expectedUci
			},
			stats,
			hint: false
		} });
	},
	completeLine: () => {
		set({ trainer: {
			feedback: { kind: "done" },
			stats: {
				...get().trainer.stats,
				lines: get().trainer.stats.lines + 1
			},
			hint: false
		} });
	},
	setHint: (hint) => set({ trainer: {
		...get().trainer,
		hint
	} }),
	resetLine: () => {
		set({
			fen: INITIAL_FEN,
			history: historyFromStart(),
			currentIndex: 0,
			lastMove: void 0,
			trainer: {
				...get().trainer,
				feedback: null,
				hint: false
			}
		});
	}
}));
function useActiveRepertoire() {
	return useStudio((s) => s.repertoires.find((r) => r.id === s.activeId) ?? null);
}
function useCandidateMoves() {
	const fen = useStudio((s) => s.fen);
	const item = useActiveRepertoire();
	if (!item) return [];
	return indexRepertoire(item.root).get(normalizeFen(fen)) ?? [];
}
function LibraryView() {
	const repertoires = useStudio((s) => s.repertoires);
	const openStudio = useStudio((s) => s.openStudio);
	const createRepertoire = useStudio((s) => s.createRepertoire);
	const deleteRepertoire = useStudio((s) => s.deleteRepertoire);
	const importJson = useStudio((s) => s.importJson);
	const fileRef = (0, import_react.useRef)(null);
	const [creating, setCreating] = (0, import_react.useState)(false);
	const [title, setTitle] = (0, import_react.useState)("");
	const [color, setColor] = (0, import_react.useState)("white");
	function onImport(file) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-[0.22em] text-muted uppercase",
							children: "Opening preparation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display mt-2 text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl",
							children: "Repertoire Studio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-pretty text-muted",
							children: "Build a line, drill it against popular replies, and check how masters actually play the position."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => fileRef.current?.click(),
							className: "inline-flex h-11 items-center gap-2 rounded-md px-4 text-sm font-medium text-fg ring-1 ring-border transition-colors hover:bg-surface-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), "Import"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setCreating(true),
							className: "inline-flex h-11 items-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg transition-transform hover:opacity-90 active:scale-[0.98]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "New repertoire"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileRef,
							type: "file",
							accept: "application/json",
							className: "hidden",
							onChange: (e) => {
								const f = e.target.files?.[0];
								if (f) onImport(f);
								e.target.value = "";
							}
						})
					]
				})]
			}),
			creating && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-4 rounded-xl bg-surface p-4 ring-1 ring-border sm:flex-row sm:items-end",
				onSubmit: (e) => {
					e.preventDefault();
					const name = title.trim() || "Untitled";
					const id = createRepertoire(name, color);
					setCreating(false);
					setTitle("");
					openStudio(id);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-w-0 flex-1 flex-col gap-1.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: "Title"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoFocus: true,
							value: title,
							onChange: (e) => setTitle(e.target.value),
							placeholder: "My 1.e4 repertoire",
							className: "h-11 rounded-md bg-surface-2 px-3 text-fg ring-1 ring-border outline-none focus:ring-border-strong"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "sr-only",
							children: "Color"
						}), ["white", "black"].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setColor(c),
							className: cn("h-11 rounded-md px-4 text-sm capitalize ring-1 transition-colors", color === c ? "bg-accent text-accent-fg ring-transparent" : "text-fg ring-border hover:bg-surface-2"),
							children: c
						}, c))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCreating(false),
							className: "h-11 rounded-md px-4 text-sm text-muted",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "h-11 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg",
							children: "Create"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Library, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [repertoires.length, " repertoires"] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: repertoires.map((item) => {
					const nodes = countNodes(item.root);
					const preview = fenAfterPlies(item.root, 6);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group flex h-full flex-col overflow-hidden rounded-xl bg-surface ring-1 ring-border transition-colors hover:ring-border-strong",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => openStudio(item.id),
							className: "flex flex-1 flex-col text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative aspect-[5/3] overflow-hidden bg-surface-2 p-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto size-full max-w-[220px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniBoard, {
										fen: preview,
										className: "rounded-sm shadow-lg"
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col gap-2 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-xl font-medium tracking-tight",
											children: item.title
										}), item.eco && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs text-muted",
											children: item.eco
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "line-clamp-2 text-sm text-pretty text-muted",
										children: item.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-auto flex items-center gap-3 pt-2 text-xs text-subtle",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 capitalize",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swords, { className: "size-3.5" }), item.color]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-3.5" }),
												nodes,
												" moves"
											]
										})]
									})
								]
							})]
						}), !item.builtin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end border-t border-border px-3 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex h-9 items-center gap-1.5 rounded-md px-2 text-xs text-muted hover:text-danger",
								onClick: () => {
									deleteRepertoire(item.id);
									toast.message("Repertoire removed");
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), "Delete"]
							})
						})]
					}) }, item.id);
				})
			})] })
		]
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchLichessExplorer = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("8e3dab13cc3154e8e24f131801a8884a7f9643ce0e8d8d3832caabddfb107ae8"));
function ResultBar({ white, draws, black }) {
	const total = white + draws + black;
	if (total <= 0) return null;
	const w = white / total * 100;
	const d = draws / total * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-2 overflow-hidden rounded-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "result-w",
				style: { width: `${w}%` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "result-d",
				style: { width: `${d}%` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "result-b",
				style: { width: `${100 - w - d}%` }
			})
		]
	});
}
function ExplorerPanel() {
	const fen = useStudio((s) => s.fen);
	const source = useStudio((s) => s.explorerSource);
	const setSource = useStudio((s) => s.setExplorerSource);
	const playUci = useStudio((s) => s.playUci);
	const addCurrentMoveToTree = useStudio((s) => s.addCurrentMoveToTree);
	const tab = useStudio((s) => s.tab);
	const candidates = useCandidateMoves();
	const [data, setData] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)("idle");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		setStatus("loading");
		const t = window.setTimeout(() => {
			fetchLichessExplorer({ data: {
				fen,
				source
			} }).then((res) => {
				if (cancelled) return;
				setData(res);
				setStatus("idle");
			}).catch(() => {
				if (cancelled) return;
				setData(null);
				setStatus("error");
			});
		}, 220);
		return () => {
			cancelled = true;
			window.clearTimeout(t);
		};
	}, [fen, source]);
	const total = (data?.white ?? 0) + (data?.draws ?? 0) + (data?.black ?? 0);
	const inTree = new Set(candidates.map((c) => c.uci));
	function addMove(uci, san, opening, eco) {
		const std = normalizeCastleUci(uci);
		const result = tryMove(fen, std.slice(0, 2), std.slice(2, 4), std[4]);
		if (!result) {
			toast.error("That move is not legal here.");
			return;
		}
		const child = {
			san: result.san || san,
			uci: result.uci,
			fen: result.fen,
			games: 1,
			opening,
			eco,
			children: []
		};
		addCurrentMoveToTree(child, fen);
		toast.success(`${child.san} added to the repertoire`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-muted uppercase",
						children: "Opening"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-medium tracking-tight",
						children: data?.opening?.name ?? "Starting position"
					}),
					data?.opening?.eco && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-muted",
						children: data.opening.eco
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex rounded-md bg-surface-2 p-0.5 ring-1 ring-border",
					children: ["masters", "lichess"].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setSource(s),
						className: cn("h-8 rounded-sm px-3 text-xs font-medium capitalize", source === s ? "bg-accent text-accent-fg" : "text-muted"),
						children: s === "masters" ? "Masters" : "Lichess"
					}, s))
				})]
			}),
			status === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), "Querying games"]
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-md bg-danger-dim px-3 py-2 text-sm text-danger",
				children: "Live explorer is unavailable. You can still play and drill the local tree."
			}),
			data && total > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between text-xs text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [formatGames(total), " games"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: [
							pct(data.white, total),
							" / ",
							pct(data.draws, total),
							" /",
							" ",
							pct(data.black, total)
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultBar, {
					white: data.white,
					draws: data.draws,
					black: data.black
				})]
			}),
			candidates.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-medium tracking-[0.16em] text-muted uppercase",
				children: "In repertoire"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: candidates.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => playUci(m.uci),
					className: "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm hover:bg-surface-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: m.san
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted",
						children: [m.games, " lines"]
					})]
				}) }, m.uci))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-2 flex items-center gap-1.5 text-xs font-medium tracking-[0.16em] text-muted uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "size-3.5" }), "Live moves"]
			}), !data?.moves.length && status !== "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No master games from here."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: data?.moves.map((m) => {
					const games = m.white + m.draws + m.black;
					const known = inTree.has(normalizeCastleUci(m.uci));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_1fr_auto] items-center gap-2 border-b border-border py-2 last:border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => playUci(normalizeCastleUci(m.uci)),
								className: "min-w-12 text-left font-medium hover:text-accent",
								children: m.san
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => playUci(normalizeCastleUci(m.uci)),
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultBar, {
									white: m.white,
									draws: m.draws,
									black: m.black
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 flex justify-between font-mono text-[11px] text-subtle tabular-nums",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatGames(games) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										pct(m.white, games),
										"-",
										pct(m.draws, games),
										"-",
										pct(m.black, games)
									] })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: known,
								onClick: () => addMove(m.uci, m.san, m.opening?.name, m.opening?.eco),
								className: cn("inline-flex size-9 items-center justify-center rounded-md", known ? "text-success" : "text-muted ring-1 ring-border hover:bg-surface-2 hover:text-fg"),
								"aria-label": known ? "Already in repertoire" : "Add to repertoire",
								title: known ? "Already in repertoire" : "Add to repertoire",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
							})
						]
					}, m.uci);
				})
			})] }),
			tab === "build" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: "Every legal move you play on the board is saved to this repertoire."
			})
		]
	});
}
function TrainerPanel({ onRestart, onReveal }) {
	const trainer = useStudio((s) => s.trainer);
	const itemColor = useStudio((s) => s.repertoires.find((r) => r.id === s.activeId)?.color ?? "white");
	const candidates = useCandidateMoves();
	const { stats, feedback, hint } = trainer;
	const attempts = stats.correct + stats.wrong;
	const accuracy = attempts === 0 ? 100 : Math.round(stats.correct / attempts * 100);
	const hintSan = feedback?.expected ?? candidates[0]?.san;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.18em] text-muted uppercase",
					children: "Drill"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-lg font-medium tracking-tight",
					children: ["Play as ", itemColor === "white" ? "White" : "Black"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-pretty text-muted",
					children: "Recite your repertoire. The opponent answers with weighted popular moves from the tree."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid grid-cols-3 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Accuracy",
						value: `${accuracy}%`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Streak",
						value: String(stats.streak)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Lines",
						value: String(stats.lines)
					})
				]
			}),
			feedback?.kind === "ok" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Banner, {
				tone: "ok",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }),
				children: ["Correct. ", stats.streak > 1 ? `${stats.streak} in a row.` : "Keep going."]
			}),
			feedback?.kind === "bad" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Banner, {
				tone: "bad",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }),
				children: [
					feedback.played,
					" is off-book. Expected ",
					feedback.expected,
					"."
				]
			}),
			feedback?.kind === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Banner, {
				tone: "ok",
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }),
				children: [
					"End of line. ",
					stats.lines,
					" completed this session."
				]
			}),
			hint && hintSan && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: ["Hint: play ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-fg",
					children: hintSan
				})]
			}),
			candidates.length === 0 && feedback?.kind !== "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No repertoire moves from this position. Step back, or start a new line."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onRestart,
					className: "inline-flex h-11 items-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "New line"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onReveal,
					className: "inline-flex h-11 items-center gap-2 rounded-md px-4 text-sm font-medium text-fg ring-1 ring-border hover:bg-surface-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-4" }), "Show move"]
				})]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-surface-2 px-3 py-2 ring-1 ring-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-display text-xl font-medium tabular-nums",
			children: value
		})]
	});
}
function Banner({ tone, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-start gap-2 rounded-md px-3 py-2 text-sm", tone === "ok" ? "bg-success-dim text-success" : "bg-danger-dim text-danger"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children })]
	});
}
function TreePanel() {
	const playUci = useStudio((s) => s.playUci);
	const removeChild = useStudio((s) => s.removeChild);
	const fen = useStudio((s) => s.fen);
	const tab = useStudio((s) => s.tab);
	const candidates = useCandidateMoves();
	if (candidates.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: tab === "build" ? "Play a move on the board to grow this branch." : "No repertoire moves from this position."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 text-xs font-medium tracking-[0.16em] text-muted uppercase",
		children: "Branches"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-1",
		children: candidates.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-1 rounded-md hover:bg-surface-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => playUci(m.uci),
				className: "flex min-w-0 flex-1 items-center justify-between px-3 py-2 text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: m.san
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-xs text-muted",
					children: [m.children.length, " replies"]
				})]
			}), tab === "build" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "mr-1 inline-flex size-9 items-center justify-center rounded-md text-muted hover:text-danger",
				onClick: () => removeChild(fen, m.uci),
				"aria-label": `Remove ${m.san}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
			})]
		}, m.uci))
	})] });
}
var ctx = null;
function audio() {
	if (typeof window === "undefined") return null;
	if (!ctx) {
		const Ctor = window.AudioContext || window.webkitAudioContext;
		if (!Ctor) return null;
		ctx = new Ctor();
	}
	if (ctx.state === "suspended") ctx.resume();
	return ctx;
}
function unlockAudio() {
	audio();
}
function tone(freq, duration, type = "sine", gain = .06, delay = 0) {
	const ac = audio();
	if (!ac) return;
	const osc = ac.createOscillator();
	const g = ac.createGain();
	osc.type = type;
	osc.frequency.value = freq;
	g.gain.value = 0;
	osc.connect(g);
	g.connect(ac.destination);
	const t = ac.currentTime + delay;
	g.gain.setValueAtTime(0, t);
	g.gain.linearRampToValueAtTime(gain, t + .012);
	g.gain.exponentialRampToValueAtTime(1e-4, t + duration);
	osc.start(t);
	osc.stop(t + duration + .02);
}
var soundFx = {
	move() {
		tone(420, .07, "sine", .045);
	},
	capture() {
		tone(220, .09, "triangle", .05);
		tone(140, .11, "sine", .04, .02);
	},
	check() {
		tone(620, .08, "sine", .05);
		tone(880, .1, "sine", .035, .07);
	},
	success() {
		tone(523, .09, "sine", .05);
		tone(784, .12, "sine", .045, .08);
	},
	error() {
		tone(170, .16, "square", .035);
	}
};
var TABS = [
	{
		id: "explore",
		label: "Explore"
	},
	{
		id: "drill",
		label: "Drill"
	},
	{
		id: "build",
		label: "Build"
	}
];
function StudioView() {
	const item = useActiveRepertoire();
	const openLibrary = useStudio((s) => s.openLibrary);
	const tab = useStudio((s) => s.tab);
	const setTab = useStudio((s) => s.setTab);
	const fen = useStudio((s) => s.fen);
	const history = useStudio((s) => s.history);
	const currentIndex = useStudio((s) => s.currentIndex);
	const lastMove = useStudio((s) => s.lastMove);
	const orientation = useStudio((s) => s.orientation);
	const flip = useStudio((s) => s.flip);
	const jumpTo = useStudio((s) => s.jumpTo);
	const playMove = useStudio((s) => s.playMove);
	const playUci = useStudio((s) => s.playUci);
	const appendForced = useStudio((s) => s.appendForced);
	const resetLine = useStudio((s) => s.resetLine);
	const markTrainerSuccess = useStudio((s) => s.markTrainerSuccess);
	const markTrainerError = useStudio((s) => s.markTrainerError);
	const completeLine = useStudio((s) => s.completeLine);
	const setHint = useStudio((s) => s.setHint);
	const trainer = useStudio((s) => s.trainer);
	const candidates = useCandidateMoves();
	const replyTimer = (0, import_react.useRef)(null);
	const replyToken = (0, import_react.useRef)(0);
	const [autoplay, setAutoplay] = (0, import_react.useState)(false);
	const cancelReply = (0, import_react.useCallback)(() => {
		replyToken.current += 1;
		if (replyTimer.current) {
			window.clearTimeout(replyTimer.current);
			replyTimer.current = null;
		}
	}, []);
	(0, import_react.useEffect)(() => () => cancelReply(), [cancelReply]);
	const fenIndex = (0, import_react.useMemo)(() => item ? indexRepertoire(item.root) : /* @__PURE__ */ new Map(), [item]);
	const pickWeighted = (0, import_react.useCallback)((options) => {
		if (options.length === 0) return null;
		const total = options.reduce((s, m) => s + (m.games || 1), 0);
		let r = Math.random() * total;
		for (const m of options) {
			r -= m.games || 1;
			if (r <= 0) return m;
		}
		return options[0];
	}, []);
	const applyOpponent = (0, import_react.useCallback)((fromFen, options) => {
		const selected = pickWeighted(options);
		if (!selected) return;
		const std = normalizeCastleUci(selected.uci);
		const result = tryMove(fromFen, std.slice(0, 2), std.slice(2, 4), std[4]);
		if (!result) {
			completeLine();
			return;
		}
		soundFx.move();
		appendForced(result.san, result.uci, result.fen);
		if ((fenIndex.get(normalizeFen(result.fen)) ?? []).length === 0) completeLine();
	}, [
		appendForced,
		completeLine,
		fenIndex,
		pickWeighted
	]);
	const scheduleOpponent = (0, import_react.useCallback)((fromFen, options) => {
		cancelReply();
		if (options.length === 0) {
			completeLine();
			return;
		}
		const token = ++replyToken.current;
		replyTimer.current = window.setTimeout(() => {
			replyTimer.current = null;
			if (token !== replyToken.current) return;
			applyOpponent(fromFen, options);
		}, 380);
	}, [
		applyOpponent,
		cancelReply,
		completeLine
	]);
	const startDrill = (0, import_react.useCallback)(() => {
		cancelReply();
		resetLine();
		const root = item?.root;
		if (!root || !item) return;
		if (item.color === "black") {
			const options = root.children;
			const token = ++replyToken.current;
			replyTimer.current = window.setTimeout(() => {
				replyTimer.current = null;
				if (token !== replyToken.current) return;
				applyOpponent(root.fen, options);
			}, 420);
		}
	}, [
		applyOpponent,
		cancelReply,
		item,
		resetLine
	]);
	(0, import_react.useEffect)(() => {
		if (tab === "drill") startDrill();
		else cancelReply();
		setAutoplay(false);
	}, [tab, item?.id]);
	const myTurn = (0, import_react.useMemo)(() => {
		if (!item || tab !== "drill") return true;
		const side = fen.split(" ")[1];
		return item.color === "white" ? side === "w" : side === "b";
	}, [
		fen,
		item,
		tab
	]);
	function handleMove(from, to, promotion) {
		unlockAudio();
		if (tab === "drill" && item) {
			if (!myTurn || trainer.feedback?.kind === "done") return false;
			const preview = tryMove(fen, from, to, promotion);
			if (!preview) return false;
			if (!candidates.some((m) => m.uci === preview.uci || m.san === preview.san)) {
				markTrainerError(preview.san, candidates[0]?.san ?? "a book move", candidates[0]?.uci ?? "");
				soundFx.error();
				return false;
			}
			if (!playMove(from, to, promotion)) return false;
			if (preview.mate) soundFx.check();
			else if (preview.captured) soundFx.capture();
			else soundFx.success();
			markTrainerSuccess();
			const replies = fenIndex.get(normalizeFen(preview.fen)) ?? [];
			if (replies.length === 0) completeLine();
			else scheduleOpponent(preview.fen, replies);
			return true;
		}
		const preview = tryMove(fen, from, to, promotion);
		const ok = playMove(from, to, promotion);
		if (ok && preview) {
			if (preview.mate || preview.check) soundFx.check();
			else if (preview.captured) soundFx.capture();
			else soundFx.move();
		}
		return ok;
	}
	function revealHint() {
		if (!candidates[0]) return;
		setHint(true);
	}
	const arrows = (0, import_react.useMemo)(() => {
		const uci = trainer.feedback?.expectedUci || (trainer.hint ? candidates[0]?.uci : void 0);
		if (!uci || uci.length < 4) return [];
		if (trainer.feedback?.kind === "bad" || trainer.hint) return [{
			from: uci.slice(0, 2),
			to: uci.slice(2, 4),
			color: "hint"
		}];
		return [];
	}, [
		candidates,
		trainer.feedback,
		trainer.hint
	]);
	(0, import_react.useEffect)(() => {
		if (!autoplay) return;
		const id = window.setInterval(() => {
			const state = useStudio.getState();
			if (state.currentIndex >= state.history.length - 1) {
				const next = [...fenIndex.get(normalizeFen(state.fen)) ?? []].sort((a, b) => b.games - a.games)[0];
				if (!next) {
					setAutoplay(false);
					return;
				}
				playUci(next.uci);
				return;
			}
			jumpTo(state.currentIndex + 1);
		}, 700);
		return () => window.clearInterval(id);
	}, [
		autoplay,
		fenIndex,
		jumpTo,
		playUci
	]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if (e.key === "ArrowLeft") {
				e.preventDefault();
				jumpTo(currentIndex - 1);
			} else if (e.key === "ArrowRight") {
				e.preventDefault();
				jumpTo(currentIndex + 1);
			} else if (e.key === "Home") {
				e.preventDefault();
				jumpTo(0);
			} else if (e.key === "End") {
				e.preventDefault();
				jumpTo(history.length - 1);
			} else if (e.key === "f") flip();
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		currentIndex,
		flip,
		history.length,
		jumpTo
	]);
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: openLibrary,
			className: "text-muted",
			children: "Back to library"
		})
	});
	const status = (0, import_react.useMemo)(() => {
		try {
			const c = new Chess(fen);
			if (c.isCheckmate()) return "Checkmate";
			if (c.isDraw()) return "Draw";
			if (c.inCheck()) return "Check";
			return c.turn() === "w" ? "White to move" : "Black to move";
		} catch {
			return "";
		}
	}, [fen]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-6xl flex-col gap-5 px-3 py-4 sm:px-6 sm:py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: openLibrary,
					className: "inline-flex h-10 items-center rounded-md px-3 text-sm text-muted ring-1 ring-border hover:bg-surface-2 hover:text-fg",
					children: "Library"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display truncate text-2xl font-medium tracking-tight",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted capitalize",
						children: [
							item.color,
							" · ",
							item.eco ?? "custom",
							" · ",
							status
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex rounded-md bg-surface p-0.5 ring-1 ring-border",
				role: "tablist",
				children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					role: "tab",
					"aria-selected": tab === t.id,
					onClick: () => setTab(t.id),
					className: cn("h-10 min-w-20 rounded-sm px-4 text-sm font-medium", tab === t.id ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"),
					children: t.label
				}, t.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,380px)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto w-full max-w-[560px] lg:mx-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChessBoard, {
						fen,
						orientation,
						lastMove,
						arrows,
						interactive: tab !== "drill" || myTurn && trainer.feedback?.kind !== "done",
						onMove: handleMove
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								label: "Start",
								onClick: () => jumpTo(0),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsLeft, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								label: "Back",
								onClick: () => jumpTo(currentIndex - 1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								label: autoplay ? "Pause" : "Play main line",
								onClick: () => setAutoplay((v) => !v),
								children: autoplay ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								label: "Forward",
								onClick: () => jumpTo(currentIndex + 1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								label: "End",
								onClick: () => jumpTo(history.length - 1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsRight, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								label: "Flip board",
								onClick: flip,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipVertical2, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								label: "Reset",
								onClick: () => {
									cancelReply();
									if (tab === "drill") startDrill();
									else resetLine();
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveList, {
						history,
						currentIndex,
						onJump: jumpTo
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GhostBtn, {
								onClick: async () => {
									try {
										await navigator.clipboard.writeText(fen);
										toast.success("FEN copied");
									} catch {
										toast.error("Could not copy");
									}
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), "FEN"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GhostBtn, {
								onClick: async () => {
									const pgn = generatePgn(item.title, item.color, history);
									try {
										await navigator.clipboard.writeText(pgn);
										toast.success("PGN copied");
									} catch {
										toast.error("Could not copy");
									}
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), "PGN"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GhostBtn, {
								onClick: () => downloadText(`${slugify(item.title)}.json`, JSON.stringify(item, null, 2), "application/json"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "JSON"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GhostBtn, {
								onClick: () => downloadText(`${slugify(item.title)}.pgn`, generatePgn(item.title, item.color, history), "application/vnd.chess-pgn"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "PGN"]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-xl bg-surface p-4 ring-1 ring-border sm:p-5",
				children: [
					tab === "explore" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExplorerPanel, {}),
					tab === "build" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExplorerPanel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreePanel, {})]
					}),
					tab === "drill" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrainerPanel, {
						onRestart: startDrill,
						onReveal: revealHint
					})
				]
			})]
		})]
	});
}
function IconBtn({ label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		title: label,
		onClick,
		className: "inline-flex size-11 items-center justify-center rounded-md text-muted ring-1 ring-transparent hover:bg-surface-2 hover:text-fg hover:ring-border",
		children
	});
}
function GhostBtn({ onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: "inline-flex h-9 items-center gap-1.5 rounded-md px-3 text-xs font-medium text-muted ring-1 ring-border hover:bg-surface-2 hover:text-fg",
		children
	});
}
function MoveList({ history, currentIndex, onJump }) {
	const moves = history.map((h, i) => ({
		...h,
		i
	})).filter((h) => h.san);
	if (moves.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-3 text-center text-sm text-muted",
		children: "No moves yet."
	});
	const pairs = [];
	for (let i = 0; i < moves.length; i += 2) pairs.push({
		n: i / 2 + 1,
		w: moves[i],
		b: moves[i + 1]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "mt-3 flex flex-wrap gap-x-3 gap-y-1 rounded-md bg-surface px-3 py-2 font-mono text-sm ring-1 ring-border",
		children: pairs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-subtle tabular-nums",
					children: [p.n, "."]
				}),
				p.w && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onJump(p.w.i),
					className: cn("rounded-sm px-1", currentIndex === p.w.i && "bg-accent text-accent-fg"),
					children: p.w.san
				}),
				p.b && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onJump(p.b.i),
					className: cn("rounded-sm px-1", currentIndex === p.b.i && "bg-accent text-accent-fg"),
					children: p.b.san
				})
			]
		}, p.n))
	});
}
function Home() {
	const view = useStudio((s) => s.view);
	const hydrate = useStudio((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-dvh bg-bg text-fg",
		children: view === "library" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryView, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioView, {})
	});
}
//#endregion
export { Home as component };
