"use client";

import { useEffect, useState } from "react";
import { M } from "@/components/ui/Math";

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

  const nodes = [
    { id: "u", x: cx, y: cy - r, label: "u_t", sub: "user state" },
    { id: "y", x: cx + r, y: cy, label: "y_t", sub: "engagement" },
    { id: "π", x: cx, y: cy + r, label: "π(y₁ₜ;θₜ)", sub: "policy" },
    { id: "s", x: cx - r, y: cy, label: "s_t", sub: "stimulus" },
  ] as const;

  const edges = [
    { from: "u", to: "y", eq: "(2) y = g(u) + η" },
    { from: "y", to: "π", eq: "(4) θ ← θ + α·∇R̂" },
    { from: "π", to: "s", eq: "(3) s = π(y₁ₜ)" },
    { from: "s", to: "u", eq: "(1) u' = f(u, s) + ξ" },
  ] as const;

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
            <text
              x="-6"
              y="-28"
              textAnchor="end"
              fontFamily="var(--font-mono)"
              fontSize="10"
              style={{ fill: "var(--color-ink-70)", letterSpacing: "1.2px" }}
            >
              e_t ≡ 0
            </text>
            <text
              x="-6"
              y="-14"
              textAnchor="end"
              fontFamily="var(--font-serif)"
              fontStyle="italic"
              fontSize="11"
              style={{ fill: "var(--color-ink-70)" }}
            >
              no exogenous
            </text>
            <text
              x="-6"
              y="0"
              textAnchor="end"
              fontFamily="var(--font-serif)"
              fontStyle="italic"
              fontSize="11"
              style={{ fill: "var(--color-ink-70)" }}
            >
              channel
            </text>
            <text
              x="-6"
              y="14"
              textAnchor="end"
              fontFamily="var(--font-serif)"
              fontStyle="italic"
              fontSize="11"
              style={{ fill: "var(--color-ink-70)" }}
            >
              (6)
            </text>
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
                <text
                  x={mx}
                  y={my - 4}
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="10"
                  style={{
                    fill: active
                      ? "var(--color-oxblood)"
                      : "var(--color-ink-90)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {e.eq}
                </text>
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
              <text
                textAnchor="middle"
                y="-3"
                fontFamily="var(--font-serif)"
                fontStyle="italic"
                fontSize="17"
                style={{ fill: "var(--color-ink)" }}
              >
                {n.label}
              </text>
              <text
                textAnchor="middle"
                y="13"
                fontFamily="var(--font-mono)"
                fontSize="8.5"
                style={{ fill: "var(--color-ink-70)", letterSpacing: "1px" }}
              >
                {n.sub}
              </text>
            </g>
          ))}

          {/* CLOSED CONTOUR annotation in the center */}
          <text
            x={cx}
            y={cy - 4}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            style={{ fill: "var(--color-ink-50)", letterSpacing: "1.5px" }}
          >
            CLOSED
          </text>
          <text
            x={cx}
            y={cy + 10}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            style={{ fill: "var(--color-ink-50)", letterSpacing: "1.5px" }}
          >
            CONTOUR
          </text>
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
