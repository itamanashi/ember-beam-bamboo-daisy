import { buildTreeFromLines, countNodes } from "./repertoire";
import type { RepertoireItem } from "./types";

const ITALIAN: string[][] = [
  "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Bd2 Bxd2+ Nbxd2 d5 exd5 Nxd5 Qb3 Nce7 O-O O-O".split(" "),
  "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Nc3 Nxe4 O-O Bxc3 bxc3 d5".split(" "),
  "e4 e5 Nf3 Nc6 Bc4 Bc5 d3 Nf6 O-O d6 c3 a6 Bb3 Ba7 Nbd2 O-O h3".split(" "),
  "e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O Nge7 cxd4 d5".split(" "),
  "e4 e5 Nf3 Nc6 Bc4 Nf6 Ng5 d5 exd5 Na5 Bb5+ c6 dxc6 bxc6 Be2 h6 Nf3 e4 Ne5 Bd6".split(" "),
  "e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Be7 O-O O-O Re1 d6 a4".split(" "),
  "e4 e5 Nf3 Nc6 Bc4 Be7 d3 Nf6 O-O O-O".split(" "),
  "e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d3 d6 O-O a6".split(" "),
];

const RUY: string[][] = [
  "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Nb8 d4 Nbd7 Nbd2 Bb7".split(" "),
  "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 O-O c3 d5 exd5 Nxd5 Nxe5 Nxe5 Rxe5 c6".split(" "),
  "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Nxe4 d4 b5 Bb3 d5 dxe5 Be6 c3 Bc5 Nbd2 O-O".split(" "),
  "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7 Re1 b5 Bb3 d6 c3 O-O h3 Na5 Bc2 c5".split(" "),
  "e4 e5 Nf3 Nc6 Bb5 Nf6 O-O Nxe4 d4 Nd6 Bxc6 dxc6 dxe5 Nf5 Qxd8+ Kxd8".split(" "),
  "e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 O-O f6 d4 Bg4".split(" "),
  "e4 e5 Nf3 Nc6 Bb5 f5 Nc3 fxe4 Nxe4 Nf6".split(" "),
  "e4 e5 Nf3 Nc6 Bb5 a6 Ba4 d6 O-O Bd7".split(" "),
];

const QG: string[][] = [
  "d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O Nf3 h6 Bh4 b6".split(" "),
  "d4 d5 c4 e6 Nc3 Nf6 cxd5 exd5 Bg5 c6 Qc2 Be7 e3 Nbd7".split(" "),
  "d4 d5 c4 e6 Nf3 Nf6 Nc3 c5 cxd5 exd5 Bg5 Be7".split(" "),
  "d4 d5 c4 dxc4 Nf3 Nf6 e3 e6 Bxc4 c5 O-O a6".split(" "),
  "d4 d5 c4 c6 Nf3 Nf6 Nc3 dxc4 a4 Bf5 e3 e6 Bxc4".split(" "),
  "d4 d5 c4 e6 Nc3 c6 e3 Nf6 Nf3 Nbd7 Bd3 dxc4 Bxc4 b5".split(" "),
  "d4 d5 c4 e6 Nc3 Nf6 Nf3 Be7 Bf4 O-O e3 Nbd7".split(" "),
];

const LONDON: string[][] = [
  "d4 Nf6 Nf3 d5 Bf4 c5 e3 Nc6 c3 Qb6 Qb3 c4 Qc2".split(" "),
  "d4 d5 Nf3 Nf6 Bf4 c5 e3 Nc6 c3 Bg4 Nbd2 e6".split(" "),
  "d4 Nf6 Bf4 g6 e3 Bg7 Nf3 d6 h3 O-O Be2".split(" "),
  "d4 Nf6 Nf3 e6 Bf4 c5 e3 Nc6 c3 d5 Nbd2 Bd6".split(" "),
  "d4 d5 Bf4 Nf6 e3 c5 c3 Nc6 Nd2 Bf5 Ngf3 e6".split(" "),
  "d4 Nf6 Bf4 d5 e3 e6 Nd2 c5 c3 Nc6".split(" "),
];

const SICILIAN: string[][] = [
  "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be3 e5 Nb3 Be6 f3 Be7 Qd2 O-O".split(" "),
  "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Bg5 e6 f4 Qb6 Qd2 Qxb2 Rb1 Qa3".split(" "),
  "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6 Be2 e5 Nb3 Be7 O-O Be6".split(" "),
  "e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 g6 Be3 Bg7 f3 O-O Qd2 Nc6".split(" "),
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 Nf6 Nc3 e5 Ndb5 d6 Bg5 a6 Na3 b5".split(" "),
  "e4 c5 Nf3 e6 d4 cxd4 Nxd4 Nc6 Nc3 Qc7 Be3 a6 Qd2 Nf6".split(" "),
  "e4 c5 Nf3 Nc6 d4 cxd4 Nxd4 g6 Nc3 Bg7 Be3 Nf6 Bc4 O-O".split(" "),
];

const FRENCH: string[][] = [
  "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Bxc3+ bxc3 Ne7 Qg4 Qc7".split(" "),
  "e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7 Bxe7 Qxe7 f4 O-O".split(" "),
  "e4 e6 d4 d5 Nd2 Nf6 e5 Nfd7 Bd3 c5 c3 Nc6 Ne2 cxd4 cxd4 f6".split(" "),
  "e4 e6 d4 d5 e5 c5 c3 Nc6 Nf3 Qb6 a3 c4".split(" "),
  "e4 e6 d4 d5 exd5 exd5 Bd3 Nc6 Nf3 Bd6".split(" "),
  "e4 e6 d4 d5 Nc3 Bb4 e5 c5 a3 Ba5 b4 cxd4".split(" "),
];

const CARO: string[][] = [
  "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6 Nf3 Nd7".split(" "),
  "e4 c6 d4 d5 Nc3 dxe4 Nxe4 Nd7 Nf3 Ngf6 Nxf6+ Nxf6".split(" "),
  "e4 c6 d4 d5 e5 Bf5 Nf3 e6 Be2 c5 Be3".split(" "),
  "e4 c6 d4 d5 exd5 cxd5 Bd3 Nc6 c3 Nf6".split(" "),
  "e4 c6 d4 d5 Nd2 dxe4 Nxe4 Bf5 Ng3 Bg6 h4 h6".split(" "),
  "e4 c6 Nc3 d5 Nf3 Bg4 h3 Bxf3 Qxf3 e6".split(" "),
];

const KID: string[][] = [
  "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Nc6 d5 Ne7".split(" "),
  "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 f3 O-O Be3 e5 d5 Nh5".split(" "),
  "d4 Nf6 c4 g6 Nc3 Bg7 g3 O-O Bg2 d6 Nf3 Nc6 O-O a6".split(" "),
  "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6 Nf3 O-O Be2 e5 O-O Na6".split(" "),
  "d4 Nf6 c4 g6 Nf3 Bg7 g3 O-O Bg2 d6 O-O Nbd7 Nc3 e5".split(" "),
  "d4 Nf6 c4 g6 Nc3 d5 cxd5 Nxd5 e4 Nxc3 bxc3 Bg7".split(" "),
];

function pack(
  id: string,
  title: string,
  color: "white" | "black",
  eco: string,
  blurb: string,
  lines: string[][],
): RepertoireItem {
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
    root,
  };
}

export function builtinRepertoires(): RepertoireItem[] {
  return [
    pack(
      "italian-white",
      "Italian Game",
      "white",
      "C50",
      "Giuoco Piano, Two Knights, and the Evans Gambit. A complete 1.e4 e5 system.",
      ITALIAN,
    ),
    pack(
      "ruy-white",
      "Ruy Lopez",
      "white",
      "C60",
      "Closed Spanish, Marshall, Berlin, and Exchange. The classical gold standard.",
      RUY,
    ),
    pack(
      "qg-white",
      "Queen's Gambit",
      "white",
      "D06",
      "Declined, Accepted, Slav, and Semi-Slav structures after 1.d4 d5 2.c4.",
      QG,
    ),
    pack(
      "london-white",
      "London System",
      "white",
      "D02",
      "A reliable d4 setup with Bf4. Low theory, high structure.",
      LONDON,
    ),
    pack(
      "sicilian-black",
      "Sicilian Defence",
      "black",
      "B20",
      "Najdorf, Dragon, Sveshnikov, and Taimanov replies to 1.e4.",
      SICILIAN,
    ),
    pack(
      "french-black",
      "French Defence",
      "black",
      "C00",
      "Winawer, Classical, Tarrasch, and Advance. Counterpunch from e6.",
      FRENCH,
    ),
    pack(
      "caro-black",
      "Caro-Kann",
      "black",
      "B10",
      "Classical, Advance, and Exchange. A solid, piece-play answer to 1.e4.",
      CARO,
    ),
    pack(
      "kid-black",
      "King's Indian",
      "black",
      "E60",
      "Classical, Sämisch, Fianchetto, and Grünfeld transpositions against 1.d4.",
      KID,
    ),
  ];
}

export function repertoireWeight(item: RepertoireItem): number {
  return countNodes(item.root);
}
