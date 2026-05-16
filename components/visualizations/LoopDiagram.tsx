"use client";

import { useEffect, useState } from "react";
import { M, SvgM } from "@/components/ui/Math";

/**
 * The closed loop as a directed graph — equations (1)–(6) wired together
 * with a pulse that lights one edge per tick. Ported from the LoopDiagram
 * panel in the live simulator (panels.jsx), adapted to the site's design
 * tokens.
 */
export function LoopDiagram() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 700);
    return () => clearInterval(interval);
  }, []);

  const w = 560;
  const h = 360;
  const cx = w / 2;
  const cy = h / 2;
  const r = 132;

  const nodes: { id: string; x: number; y: number; tex: string; sub: string }[] = [
    { id: "u", x: cx, y: cy - r, tex: String.raw`u_t`, sub: "user state" },
    { id: "y", x: cx + r, y: cy, tex: String.raw`y_t`, sub: "engagement" },
    { id: "π", x: cx, y: cy + r, tex: String.raw`\pi(y_{1:t};\, \theta_t)`, sub: "policy" },
    { id: "s", x: cx - r, y: cy, tex: String.raw`s_t`, sub: "stimulus" },
  ];

  const edges: { from: string; to: string; n: string; tex: string }[] = [
    { from: "u", to: "y", n: "(2)", tex: String.raw`y = g(u) + \eta` },
    { from: "y", to: "π", n: "(4)", tex: String.raw`\theta \leftarrow \theta + \alpha \cdot \nabla \hat{R}` },
    { from: "π", to: "s", n: "(3)", tex: String.raw`s = \pi(y_{1:t})` },
    { from: "s", to: "u", n: "(1)", tex: String.raw`u' = f(u, s) + \xi` },
  ];

  const phase = tick % 4;

  return (
    <figure className="my-md">
      <div className="bg-paper-95 border border-ink-50 p-md">
        <svg
          viewBox={`0 0 ${w} ${h}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto"
          role="img"
          aria-label="The closed loop: four nodes u_t, y_t, π, s_t connected by four edges representing equations (1)–(4). The exogenous channel e_t ≡ 0 marker is shown outside the loop (equation 6)."
        >
          <defs>
            <marker
              id="loop-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--color-ink)" }} />
            </marker>
            <marker
              id="loop-arrow-active"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path
                d="M0,0 L10,5 L0,10 z"
                style={{ fill: "var(--color-oxblood)" }}
              />
            </marker>
          </defs>

          {/* Closed contour — the loop hint */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            style={{ stroke: "var(--color-paper-85)" }}
            strokeDasharray="2 4"
          />

          {/* Foreclosure marker — (6) e_t ≡ 0 */}
          <g transform={`translate(${cx - 200}, ${cy})`}>
            <line
              x1="0"
              y1="-22"
              x2="0"
              y2="22"
              style={{ stroke: "var(--color-ink)" }}
              strokeWidth="1"
            />
            <SvgM x={-90} y={-32} w={84} h={14} align="right" color="var(--color-ink-70)" size="10px">
              {String.raw`e_t \equiv 0`}
            </SvgM>
            <SvgM x={-90} y={-18} w={84} h={14} align="right" color="var(--color-ink-70)" size="11px">
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>no exogenous</span>
            </SvgM>
            <SvgM x={-90} y={-4} w={84} h={14} align="right" color="var(--color-ink-70)" size="11px">
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>channel</span>
            </SvgM>
            <SvgM x={-90} y={10} w={84} h={14} align="right" color="var(--color-ink-70)" size="11px">
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>(6)</span>
            </SvgM>
          </g>

          {/* Edges */}
          {edges.map((e, idx) => {
            const f = nodes.find((n) => n.id === e.from)!;
            const t = nodes.find((n) => n.id === e.to)!;
            const dx = t.x - f.x;
            const dy = t.y - f.y;
            const len = Math.hypot(dx, dy);
            const ux = dx / len;
            const uy = dy / len;
            const fx = f.x + ux * 36;
            const fy = f.y + uy * 36;
            const tx = t.x - ux * 36;
            const ty = t.y - uy * 36;
            const mx = (fx + tx) / 2 + uy * 22;
            const my = (fy + ty) / 2 - ux * 22;
            const active = idx === phase;
            return (
              <g key={`${e.from}-${e.to}`}>
                <path
                  d={`M ${fx} ${fy} Q ${mx} ${my} ${tx} ${ty}`}
                  fill="none"
                  style={{
                    stroke: active
                      ? "var(--color-oxblood)"
                      : "var(--color-ink)",
                  }}
                  strokeWidth={active ? 2.2 : 1}
                  markerEnd={active ? "url(#loop-arrow-active)" : "url(#loop-arrow)"}
                  opacity={active ? 1 : 0.7}
                />
                <SvgM
                  x={mx - 100}
                  y={my - 16}
                  w={200}
                  h={16}
                  align="center"
                  color={active ? "var(--color-oxblood)" : "var(--color-ink-90)"}
                  size="11px"
                >
                  <span style={{ display: "inline-flex", alignItems: "baseline", gap: "4px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px" }}>{e.n}</span>
                    <M>{e.tex}</M>
                  </span>
                </SvgM>
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((n) => (
            <g key={n.id} transform={`translate(${n.x},${n.y})`}>
              <circle
                r="32"
                style={{ fill: "var(--color-paper-95)", stroke: "var(--color-ink)" }}
                strokeWidth="1.2"
              />
              <SvgM x={-40} y={-22} w={80} h={22} align="center" color="var(--color-ink)" size="15px">
                <M>{n.tex}</M>
              </SvgM>
              <SvgM x={-40} y={4} w={80} h={14} align="center" color="var(--color-ink-70)" size="8.5px">
                <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "1px" }}>{n.sub}</span>
              </SvgM>
            </g>
          ))}

          {/* CLOSED CONTOUR annotation in the center */}
          <SvgM x={cx - 60} y={cy - 18} w={120} h={14} align="center" color="var(--color-ink-50)" size="9px">
            <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "1.5px" }}>CLOSED</span>
          </SvgM>
          <SvgM x={cx - 60} y={cy - 2} w={120} h={14} align="center" color="var(--color-ink-50)" size="9px">
            <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "1.5px" }}>CONTOUR</span>
          </SvgM>
        </svg>
      </div>

      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        <span className="font-mono text-xs text-oxblood">Equations (1)–(6).</span>{" "}
        The four edges step in sequence: the user's state{" "}
        <M>{String.raw`u_t`}</M> produces an engagement signal{" "}
        <M>{String.raw`y_t`}</M> by the observation function (2),
        the platform updates its policy parameters{" "}
        <M>{String.raw`\theta_t`}</M> by gradient ascent (4), the policy
        selects the next stimulus <M>{String.raw`s_t`}</M> (3), and
        the stimulus reshapes the user's state (1). The exogenous channel
        {" "}<M>{String.raw`e_t \equiv 0`}</M> stands outside the contour —
        the loop has no input it did not, in some prior step, contribute to
        shaping (6).
      </figcaption>
    </figure>
  );
}
