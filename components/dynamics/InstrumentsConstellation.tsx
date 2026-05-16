/**
 * "The six instruments" — a small SVG constellation surfaced on the
 * dynamics index. The closed loop sits at the center; the six
 * instruments (§3.1–§3.6 of the math doc) hang off it as spokes,
 * each labeled with its name and section, each clickable to its
 * mechanism plate. Designed as a sitemap for the dynamics surface
 * that orients the reader to "what kinds of measurement on the loop
 * exist" before they pick a plate.
 *
 * Layout: hexagon, ~120px radius, with each vertex carrying a small
 * disc. Labels sit just outside the discs, using SvgM via foreignObject
 * so they typeset like the prose.
 */

import { SvgM, M } from "@/components/ui/Math";

interface Instrument {
  slug: string;
  short: string;
  section: string;
  /** "What the instrument measures" — single-line gloss. */
  measures: React.ReactNode;
  /** Position on the hexagon (0 = top, 1 = upper right, ...). */
  vertex: 0 | 1 | 2 | 3 | 4 | 5;
}

const INSTRUMENTS: Instrument[] = [
  {
    slug: "surplus",
    short: "libidinal surplus",
    section: "§3.1",
    measures: <>what the platform extracts: <M>{String.raw`\Sigma(T)`}</M></>,
    vertex: 0,
  },
  {
    slug: "chrono-debt",
    short: "chrono-debt",
    section: "§3.2",
    measures: <>time foreclosed at every scale: <M>{String.raw`D(t,\tau)`}</M></>,
    vertex: 1,
  },
  {
    slug: "libidinal-routing",
    short: "libidinal routing",
    section: "§3.3",
    measures: <>cross-register coupling: <M>{String.raw`I(u^i; u^j)`}</M></>,
    vertex: 2,
  },
  {
    slug: "metric-superego",
    short: "metric superego",
    section: "§3.4",
    measures: <>self-evaluation drift: <M>{String.raw`D_{\mathrm{KL}}(\nu_u \,\|\, \pi_{\hat{R}})`}</M></>,
    vertex: 3,
  },
  {
    slug: "somatic-optimization",
    short: "somatic optimization",
    section: "§3.5",
    measures: <>the body as differential: <M>{String.raw`\lambda^i(t)`}</M></>,
    vertex: 4,
  },
  {
    slug: "captured-resonance",
    short: "captured resonance",
    section: "§3.6",
    measures: <>biological clocks captured: <M>{String.raw`K_{bm}`}</M></>,
    vertex: 5,
  },
];

const W = 760;
const H = 460;
const cx = W / 2;
const cy = H / 2;
const R = 150; // ring radius for instrument discs

function vertexPosition(v: number): { x: number; y: number } {
  // Vertex 0 at top (angle = -90°), going clockwise.
  const angle = (-Math.PI / 2) + (v * Math.PI / 3);
  return {
    x: cx + R * Math.cos(angle),
    y: cy + R * Math.sin(angle),
  };
}

function labelPosition(v: number): { x: number; y: number; align: "left" | "right" | "center" } {
  // Labels just outside the disc, biased to the left or right of the spoke.
  const { x, y } = vertexPosition(v);
  const dx = x - cx;
  const dy = y - cy;
  // Move outward by 28px along the spoke direction.
  const len = Math.hypot(dx, dy);
  const ox = (dx / len) * 28;
  const oy = (dy / len) * 28;
  // Pick alignment based on whether the vertex is on the left or right side.
  const align: "left" | "right" | "center" =
    Math.abs(dx) < 8 ? "center" : dx > 0 ? "left" : "right";
  return { x: x + ox, y: y + oy, align };
}

export function InstrumentsConstellation() {
  return (
    <figure className="my-lg" aria-labelledby="constellation-caption">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
        role="img"
        aria-label="A hexagonal constellation: the closed loop at the center, six instrument plates around it as vertices."
      >
        {/* Spokes */}
        {INSTRUMENTS.map((inst) => {
          const v = vertexPosition(inst.vertex);
          return (
            <line
              key={`spoke-${inst.slug}`}
              x1={cx}
              y1={cy}
              x2={v.x}
              y2={v.y}
              stroke="var(--color-paper-85)"
              strokeWidth="0.8"
              strokeDasharray="2 3"
            />
          );
        })}

        {/* Center: the closed loop */}
        <a href="/the-dynamics/closed-loop">
          <g>
            <circle
              cx={cx}
              cy={cy}
              r={36}
              fill="var(--color-paper-95)"
              stroke="var(--color-ink)"
              strokeWidth="1.4"
              className="hover:[stroke:var(--color-oxblood)] transition-colors duration-100"
            />
            <SvgM x={cx - 60} y={cy - 16} w={120} h={14} align="center" color="var(--color-ink-90)" size="11px">
              <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.5px" }}>
                the closed loop
              </span>
            </SvgM>
            <SvgM x={cx - 60} y={cy - 2} w={120} h={14} align="center" color="var(--color-ink-70)" size="9px">
              <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.5px" }}>§1</span>
            </SvgM>
            <SvgM x={cx - 60} y={cy + 12} w={120} h={14} align="center" color="var(--color-ink-50)" size="9px">
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>the architecture</span>
            </SvgM>
          </g>
        </a>

        {/* Instrument vertices */}
        {INSTRUMENTS.map((inst) => {
          const v = vertexPosition(inst.vertex);
          const lp = labelPosition(inst.vertex);
          // Label box: 200px wide, anchored to lp.x based on alignment.
          const lbW = 220;
          const lbX =
            lp.align === "right" ? lp.x - lbW : lp.align === "left" ? lp.x : lp.x - lbW / 2;
          return (
            <a key={inst.slug} href={`/the-dynamics/${inst.slug}`}>
              <g>
                <circle
                  cx={v.x}
                  cy={v.y}
                  r={14}
                  fill="var(--color-paper)"
                  stroke="var(--color-ink-70)"
                  strokeWidth="1"
                  className="hover:[stroke:var(--color-oxblood)] hover:[fill:var(--color-paper-95)] transition-colors duration-100"
                />
                <SvgM
                  x={v.x - 14}
                  y={v.y - 7}
                  w={28}
                  h={14}
                  align="center"
                  color="var(--color-ink-90)"
                  size="9px"
                >
                  <span style={{ fontFamily: "var(--font-mono)" }}>{inst.section}</span>
                </SvgM>
                <SvgM x={lbX} y={lp.y - 24} w={lbW} h={16} align={lp.align} color="var(--color-ink-90)" size="11.5px">
                  <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.3px" }}>
                    {inst.short}
                  </span>
                </SvgM>
                <SvgM x={lbX} y={lp.y - 8} w={lbW} h={16} align={lp.align} color="var(--color-ink-70)" size="10px">
                  <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                    {inst.measures}
                  </span>
                </SvgM>
              </g>
            </a>
          );
        })}
      </svg>
      <figcaption
        id="constellation-caption"
        className="font-mono text-xs text-ink-50 text-center mt-xs"
      >
        the six instruments · readings on the closed loop · click any to enter
      </figcaption>
    </figure>
  );
}
