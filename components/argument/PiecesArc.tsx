/**
 * "The arc" — a small SVG that orients the reader to the four prose
 * pieces (and the coda) as a single argument moving forward in cohort
 * time. The first piece names the apparatus; the second pulls the
 * foreclosure into the democratic-institutional register; the third
 * tracks the cohort formed inside the apparatus from the start; the
 * fourth tracks the late-stage figure that arrived at capture from a
 * self formed elsewhere; the coda turns back on the document itself.
 *
 * This is a sitemap as time-axis: pieces I → II → III → IV → coda
 * traverse "cohort time forward". Each node is a small clickable
 * marker; the spine connects them.
 *
 * Lives above the cards on /the-argument.
 */

import type { ArgumentPiece } from "@/lib/argument-pieces";

const NODES = [
  { slug: "the-loop", label: "I", subtitle: "the architecture", x: 50 },
  { slug: "citizen-after-the-pause", label: "II", subtitle: "democratic substrate", x: 200 },
  { slug: "adolescence-without-outside", label: "III", subtitle: "cohort formation", x: 350 },
  { slug: "sincere-captives", label: "IV", subtitle: "adult end-state", x: 500 },
  { slug: "note", label: "Coda", subtitle: "the document itself", x: 660 },
];

export function PiecesArc({ pieces }: { pieces: ArgumentPiece[] }) {
  const W = 720;
  const H = 100;
  const cy = 40;

  return (
    <figure className="my-lg" aria-labelledby="arc-caption">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
        role="img"
        aria-label="A horizontal arc connecting the four prose pieces and the coda, traversing cohort time from the architecture's specification through democratic substrate, cohort formation, and adult end-state, then turning back on the document itself."
      >
        {/* Spine */}
        <line
          x1={NODES[0].x}
          y1={cy}
          x2={NODES[NODES.length - 2].x}
          y2={cy}
          stroke="var(--color-ink-50)"
          strokeWidth="0.8"
        />
        {/* Coda is on the spine but visually offset by a small gap to mark its turn-back */}
        <line
          x1={NODES[NODES.length - 2].x}
          y1={cy}
          x2={NODES[NODES.length - 1].x - 14}
          y2={cy}
          stroke="var(--color-ink-50)"
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />

        {/* "cohort time forward" arrow tag at the end of the main spine */}
        <text
          x={NODES[NODES.length - 2].x + 14}
          y={cy - 8}
          fontFamily="var(--font-mono)"
          fontSize="9"
          textAnchor="middle"
          fill="var(--color-ink-50)"
        >
          ↑ cohort time
        </text>

        {/* Nodes */}
        {NODES.map((n) => {
          const piece = pieces.find((p) => p.slug === n.slug);
          if (!piece) return null;
          const isCoda = n.slug === "note";
          return (
            <a key={n.slug} href={`/the-argument/${n.slug}`}>
              <g>
                <circle
                  cx={n.x}
                  cy={cy}
                  r={isCoda ? 9 : 11}
                  fill="var(--color-paper-95)"
                  stroke={isCoda ? "var(--color-ink-50)" : "var(--color-ink)"}
                  strokeWidth="1.2"
                  className="hover:[stroke:var(--color-oxblood)] transition-colors duration-100"
                />
                <text
                  x={n.x}
                  y={cy + 3}
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize={isCoda ? "8" : "9"}
                  fontWeight="500"
                  fill="var(--color-ink-90)"
                >
                  {n.label}
                </text>
                <text
                  x={n.x}
                  y={cy + 26}
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  fill="var(--color-ink-70)"
                >
                  {n.subtitle}
                </text>
                <text
                  x={n.x}
                  y={cy + 40}
                  textAnchor="middle"
                  fontFamily="var(--font-serif)"
                  fontStyle="italic"
                  fontSize="9.5"
                  fill="var(--color-ink-50)"
                >
                  {piece.title.toLowerCase()}
                </text>
              </g>
            </a>
          );
        })}
      </svg>
      <figcaption
        id="arc-caption"
        className="font-mono text-xs text-ink-50 text-center mt-xs"
      >
        the arc · pieces traverse cohort time forward; the coda turns back
        on the document
      </figcaption>
    </figure>
  );
}
