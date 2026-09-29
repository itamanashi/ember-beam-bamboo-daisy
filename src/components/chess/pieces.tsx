import type { ReactNode } from "react";
import type { PieceSymbol } from "chess.js";

type Props = {
  type: PieceSymbol;
  color: "w" | "b";
  className?: string;
};

function Svg({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 45 45"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

function WhitePawn({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path
        d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
        fill="var(--color-piece-w)"
        stroke="var(--color-piece-w-stroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
}

function BlackPawn({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <path
        d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
        fill="var(--color-piece-b)"
        stroke="var(--color-piece-b-stroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
}

function WhiteRook({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <g
        fill="var(--color-piece-w)"
        stroke="var(--color-piece-w-stroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" />
        <path d="M34 14l-3 3H14l-3-3" />
        <path d="M31 17v12.5H14V17" />
        <path d="M31 29.5l1.5 2.5h-20l1.5-2.5" />
        <path d="M11 14h23" fill="none" />
      </g>
    </Svg>
  );
}

function BlackRook({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <g
        fill="var(--color-piece-b)"
        stroke="var(--color-piece-b-stroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5H12.5zM12 36v-4h21v4H12z" />
        <path d="M14 29.5v-13h17v13H14z" />
        <path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" />
        <path
          d="M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23"
          fill="none"
          stroke="var(--color-muted)"
          strokeWidth="1"
        />
      </g>
    </Svg>
  );
}

function WhiteKnight({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <g
        fill="none"
        stroke="var(--color-piece-w-stroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"
          fill="var(--color-piece-w)"
        />
        <path
          d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"
          fill="var(--color-piece-w)"
        />
        <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z" fill="#000" />
        <path
          d="M14.933 15.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"
          fill="#000"
        />
      </g>
    </Svg>
  );
}

function BlackKnight({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <g
        fill="none"
        stroke="var(--color-piece-b-stroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"
          fill="var(--color-piece-b)"
        />
        <path
          d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"
          fill="var(--color-piece-b)"
        />
        <path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0z" fill="#eee" stroke="#eee" />
        <path
          d="M14.933 15.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"
          fill="#eee"
          stroke="#eee"
        />
        <path
          d="M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.25-2.37-4.4-5.79-6.64-9.25-7.5z"
          fill="var(--color-muted)"
          stroke="none"
        />
      </g>
    </Svg>
  );
}

function WhiteBishop({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <g
        fill="none"
        stroke="var(--color-piece-w-stroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g fill="var(--color-piece-w)" strokeLinecap="butt">
          <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.94 3-2 3-2z" />
          <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" />
          <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" />
        </g>
        <path d="M17.5 26h10M15 30h15M22.5 15.5l-3 6 3 2 3-2-3-6" />
      </g>
    </Svg>
  );
}

function BlackBishop({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <g
        fill="none"
        stroke="var(--color-piece-b-stroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g fill="var(--color-piece-b)" strokeLinecap="butt">
          <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.94 3-2 3-2z" />
          <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" />
          <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" />
        </g>
        <path
          d="M17.5 26h10M15 30h15M22.5 15.5l-3 6 3 2 3-2-3-6"
          stroke="var(--color-muted)"
        />
      </g>
    </Svg>
  );
}

function WhiteQueen({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <g
        fill="var(--color-piece-w)"
        stroke="var(--color-piece-w-stroke)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      >
        <path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z" />
        <path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z" />
        <path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" />
        <path d="M11.5 30c3.5-1 18.5-1 22 0M10 33.5c5.5-1 19.5-1 25 0" fill="none" />
      </g>
    </Svg>
  );
}

function BlackQueen({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <g
        fill="var(--color-piece-b)"
        stroke="var(--color-piece-b-stroke)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="12" r="2" />
        <circle cx="14" cy="9" r="2" />
        <circle cx="22.5" cy="8" r="2" />
        <circle cx="31" cy="9" r="2" />
        <circle cx="39" cy="12" r="2" />
        <path d="M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.05-14.5-5.45 14.5-3-16.5-3 16.5-5.45-14.5L14 25 6.5 13.5 9 26z" />
        <path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z" />
        <path
          d="M11 38.5a35 35 1 0 0 23 0"
          fill="none"
          stroke="var(--color-muted)"
        />
        <path
          d="M11.5 30c3.5-1 18.5-1 22 0M10 33.5c5.5-1 19.5-1 25 0"
          fill="none"
          stroke="var(--color-muted)"
        />
      </g>
    </Svg>
  );
}

function WhiteKing({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <g
        fill="none"
        stroke="var(--color-piece-w-stroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.5 11.63V6M20 8h5" strokeLinejoin="miter" />
        <path
          d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
          fill="var(--color-piece-w)"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
        <path
          d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"
          fill="var(--color-piece-w)"
        />
        <path d="M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0" />
      </g>
    </Svg>
  );
}

function BlackKing({ className }: { className?: string }) {
  return (
    <Svg className={className}>
      <g
        fill="none"
        stroke="var(--color-piece-b-stroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.5 11.63V6M20 8h5" strokeLinejoin="miter" />
        <path
          d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
          fill="var(--color-piece-b)"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
        <path
          d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"
          fill="var(--color-piece-b)"
        />
        <path
          d="M20 8h5M22.5 11.63V6"
          stroke="var(--color-piece-b-stroke)"
        />
        <path
          d="M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0"
          stroke="var(--color-muted)"
        />
      </g>
    </Svg>
  );
}

const MAP = {
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
  bk: BlackKing,
} as const;

export function ChessPiece({ type, color, className }: Props) {
  const Cmp = MAP[`${color}${type}` as keyof typeof MAP];
  return <Cmp className={className} />;
}
