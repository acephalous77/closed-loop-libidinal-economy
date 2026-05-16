"use client";

import { useMemo, useState } from "react";
import { M, SvgM } from "@/components/ui/Math";

/**
 * Metric superego — D_KL(ν_u ‖ π_R̂) trajectory.
 *
 *   d D_KL / dt = −h_0(β_u) + r(L_m)
 *
 * Under exposure alone (L_m = 0), D_KL collapses to zero: the metric
 * superego forms. With maintenance labor L_m above the threshold
 * L_m* = h_0/c_op, the gap is preserved at a positive constant.
 * Adapted from the §3.4 dynamics in sim.jsx.
 */

const BETA_U_BASE = 0.016;
const C_OP = 1.0;
const H_0 = BETA_U_BASE * C_OP * C_OP; // ≈ 0.016
const R_COEFF = 0.020;
const L_M_STAR = H_0 / R_COEFF; // ≈ 0.80
const D_KL_INITIAL = 0.65;
const D_KL_MAX_DISPLAY = 1.0;
const HORIZON_TICKS = 1500;
const SAMPLE_INTERVAL = 5;

interface OptionT {
  value: number;
  label: string;
}

const L_M_OPTIONS: OptionT[] = [
  { value: 0, label: "0 — no labor" },
  { value: 0.3, label: "0.3 — well below threshold" },
  { value: 0.7, label: "0.7 — just below threshold" },
  { value: L_M_STAR, label: `${L_M_STAR.toFixed(2)} — at threshold` },
  { value: 1.2, label: "1.2 — above threshold" },
  { value: 2.0, label: "2.0 — sustained labor" },
];

function simulateTrajectory(Lm: number): number[] {
  const trail: number[] = [];
  let D = D_KL_INITIAL;
  const r = Lm * R_COEFF;
  for (let t = 0; t < HORIZON_TICKS; t++) {
    if (t % SAMPLE_INTERVAL === 0) trail.push(D);
    const dD = -H_0 + r;
    D = Math.max(0, Math.min(D_KL_MAX_DISPLAY, D + dD));
  }
  trail.push(D);
  return trail;
}

export function MetricSuperego() {
  const [Lm, setLm] = useState<number>(0);

  const trail = useMemo(() => simulateTrajectory(Lm), [Lm]);
  const finalD = trail[trail.length - 1];
  const formed = finalD < 0.05;
  const preserved = Lm >= L_M_STAR && finalD > 0.4;

  const w = 560;
  const h = 240;
  const pad = { l: 44, r: 16, t: 16, b: 36 };

  const xs = trail.map(
    (_, i) => pad.l + (i / (trail.length - 1)) * (w - pad.l - pad.r)
  );
  const yScale = (v: number) =>
    pad.t + (1 - v / D_KL_MAX_DISPLAY) * (h - pad.t - pad.b);

  const line = xs.map((x, i) => `${x},${yScale(trail[i])}`).join(" ");

  const status = formed
    ? "metric superego forms"
    : preserved
      ? "Mode B holds the gap"
      : "D_KL drifting";
  const statusColor = formed
    ? "var(--color-oxblood)"
    : preserved
      ? "var(--color-ink-90)"
      : "var(--color-ink-70)";

  return (
    <figure className="my-md">
      <div className="bg-paper-95 border border-ink-50 p-md">
        {/* L_m picker */}
        <div className="font-mono text-sm text-ink-90 mb-md">
          <label className="inline-flex items-baseline gap-x-xs">
            <span className="text-ink-70">L_m =</span>
            <select
              value={String(Lm)}
              onChange={(e) => setLm(Number(e.target.value))}
              className="bg-paper-95 text-ink-90 border-b border-ink-50 hover:border-oxblood focus:border-oxblood outline-none cursor-pointer transition-colors duration-100 px-[0.3em]"
            >
              {L_M_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`D_KL trajectory at L_m=${Lm}, final value ${finalD.toFixed(3)}, ${status}.`}
        >
          {/* Y gridlines */}
          {[0, 0.25, 0.5, 0.75, 1].map((v) => (
            <g key={v}>
              <line
                x1={pad.l}
                x2={w - pad.r}
                y1={yScale(v)}
                y2={yScale(v)}
                style={{ stroke: "var(--color-paper-85)" }}
                strokeWidth="0.5"
              />
              <text
                x={pad.l - 8}
                y={yScale(v) + 3}
                fontFamily="var(--font-mono)"
                fontSize="9"
                textAnchor="end"
                style={{ fill: "var(--color-ink-50)" }}
              >
                {v.toFixed(2)}
              </text>
            </g>
          ))}

          {/* Trajectory */}
          <polyline
            points={line}
            fill="none"
            style={{
              stroke: formed ? "var(--color-oxblood)" : "var(--color-ink-90)",
            }}
            strokeWidth="2"
          />

          {/* Initial value marker */}
          <circle
            cx={xs[0]}
            cy={yScale(trail[0])}
            r="3"
            style={{ fill: "var(--color-ink-70)" }}
          />

          {/* Final value marker */}
          <circle
            cx={xs[xs.length - 1]}
            cy={yScale(finalD)}
            r="3.5"
            style={{
              fill: formed ? "var(--color-oxblood)" : "var(--color-ink-90)",
            }}
          />

          {/* Axes */}
          <line
            x1={pad.l}
            y1={h - pad.b}
            x2={w - pad.r}
            y2={h - pad.b}
            style={{ stroke: "var(--color-ink)" }}
          />
          <line
            x1={pad.l}
            y1={pad.t}
            x2={pad.l}
            y2={h - pad.b}
            style={{ stroke: "var(--color-ink)" }}
          />
          <SvgM
            x={(w + pad.l) / 2 - 70}
            y={h - 18}
            w={140}
            h={16}
            align="center"
            color="var(--color-ink-70)"
            size="10px"
          >
            <span style={{ display: "inline-flex", alignItems: "baseline", gap: "4px" }}>
              <M>{String.raw`t`}</M>
              <span style={{ fontFamily: "var(--font-mono)" }}>(ticks · 20ms)</span>
            </span>
          </SvgM>
          <SvgM
            x={4}
            y={pad.t}
            w={160}
            h={16}
            align="left"
            color="var(--color-ink-70)"
            size="10px"
          >
            {String.raw`D_{\mathrm{KL}}(\nu_u \,\|\, \pi_{\hat{R}})`}
          </SvgM>
        </svg>

        {/* Readouts */}
        <div className="font-mono text-sm text-ink-70 mt-md space-y-xs">
          <p>
            L_m* (threshold) ={" "}
            <span className="text-ink-90">{L_M_STAR.toFixed(2)}</span>{" "}
            <span className="text-ink-50">
              · current L_m ={" "}
              <span className="text-ink-90">{Lm.toFixed(2)}</span>
            </span>
          </p>
          <p>
            D_KL at horizon ={" "}
            <span style={{ color: statusColor }}>
              {finalD.toFixed(3)}
            </span>{" "}
            <span className="text-ink-50">
              · status:{" "}
              <span style={{ color: statusColor }}>{status}</span>
            </span>
          </p>
        </div>
      </div>

      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        <span className="font-mono text-xs text-oxblood">§3.4.</span> The
        divergence{" "}
        <M>{String.raw`D_{\mathrm{KL}}(\nu_u \,\|\, \pi_{\hat{R}})`}</M> measures the gap
        between the user's self-evaluative distribution and the platform's
        reward-induced distribution. Without maintenance labor it decays at
        rate <M>{String.raw`-h_0(\beta_u)`}</M>: the user's image of
        what is valuable converges to the platform's. With labor at the
        threshold <M>{String.raw`L_m^* = h_0/c_{\mathrm{op}}`}</M>, the
        decay is exactly counteracted; above it, the gap grows. Proposition 2
        in §5.2 establishes this; the trajectory above is its time evolution.
      </figcaption>
    </figure>
  );
}
