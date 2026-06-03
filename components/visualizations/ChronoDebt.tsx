"use client";

import { useMemo, useState } from "react";
import { M, SvgM } from "@/components/ui/Math";

/**
 * Chrono-debt spectrum — D(t,τ) = Λ_◦(τ) − Λ(t,τ).
 *
 * The realized survival function Λ(t,τ) of the inter-stimulus interval
 * sits inside the pre-closure baseline Λ_◦(τ); the shaded area between
 * the two curves is the chrono-debt at scale τ. The framework's central
 * observation in §3.2: D(t,τ) is non-zero across the entire spectrum,
 * not at any one preferred scale.
 *
 * Standalone version: a "closure regime" picker generates synthetic
 * realized survival functions of varying intensity, avoiding the need
 * to run the full sim.
 */

interface OptionT<T> {
  value: T;
  label: string;
}

interface Regime {
  key: string;
  label: string;
  realizedRate: number; // multiplier on the baseline decay rate
}

const REGIMES: Regime[] = [
  { key: "baseline", label: "baseline (pre-closure, no platform)", realizedRate: 1.0 },
  { key: "early", label: "early platform exposure", realizedRate: 2.5 },
  { key: "converged", label: "converged policy (closure)", realizedRate: 12.0 },
  { key: "saturated", label: "saturated platform", realizedRate: 60.0 },
];

const REGIME_OPTIONS: OptionT<string>[] = REGIMES.map((r) => ({
  value: r.key,
  label: r.label,
}));

// Tau axis: 60 sample points spanning short to long inter-stimulus intervals.
const TAUS = Array.from({ length: 60 }, (_, i) => 1 + i * 4);

// θ_ref marker position (in tau-axis units).
const THETA_REF_TICKS = 150;

// Baseline survival decay constant (pre-closure ISI is heavy-tailed).
const BASELINE_LAMBDA = 1 / 80;

function computeSurvival(rateMultiplier: number) {
  const Lam0 = TAUS.map((tau) => Math.exp(-BASELINE_LAMBDA * tau));
  const Lam = TAUS.map((tau) =>
    Math.exp(-BASELINE_LAMBDA * rateMultiplier * tau)
  );
  const D = TAUS.map((_, i) => Math.max(0, Lam0[i] - Lam[i]));
  return { Lam, Lam0, D };
}

export function ChronoDebt() {
  const [regimeKey, setRegimeKey] = useState<string>("converged");
  const regime = REGIMES.find((r) => r.key === regimeKey) ?? REGIMES[0];

  const { Lam, Lam0, D } = useMemo(
    () => computeSurvival(regime.realizedRate),
    [regime.realizedRate]
  );

  // Aggregate chrono-debt with default weighting w(τ) ∝ τ.
  const Dw = useMemo(
    () =>
      D.reduce((acc, d, i) => acc + d * TAUS[i], 0) /
      TAUS.reduce((a, t) => a + t, 0),
    [D]
  );

  const w = 560;
  const h = 260;
  const pad = { l: 44, r: 16, t: 16, b: 36 };

  const xs = TAUS.map(
    (_, i) => pad.l + (i / (TAUS.length - 1)) * (w - pad.l - pad.r)
  );
  const yScale = (v: number) =>
    pad.t + (1 - v) * (h - pad.t - pad.b);

  const lineLam0 = xs
    .map((x, i) => `${x},${yScale(Lam0[i])}`)
    .join(" ");
  const lineLam = xs
    .map((x, i) => `${x},${yScale(Lam[i])}`)
    .join(" ");
  // Polygon for shaded chrono-debt area: forward along Lam0, back along Lam.
  const area =
    xs.map((x, i) => `${x},${yScale(Lam0[i])}`).join(" ") +
    " " +
    xs
      .slice()
      .reverse()
      .map((x, i) => `${x},${yScale(Lam[xs.length - 1 - i])}`)
      .join(" ");

  // θ_ref marker
  const thetaRefIdx = Math.min(
    TAUS.length - 1,
    Math.round((THETA_REF_TICKS - 1) / 4)
  );
  const thetaRefX = xs[thetaRefIdx];

  return (
    <figure className="my-md">
      <div className="bg-paper-95 border border-ink-50 p-md">
        {/* Regime picker */}
        <div className="font-mono text-sm text-ink-90 mb-md">
          <label className="inline-flex items-baseline gap-x-xs">
            <span className="text-ink-70">regime =</span>
            <select
              value={regimeKey}
              onChange={(e) => setRegimeKey(e.target.value)}
              className="bg-paper-95 text-ink-90 border-b border-ink-50 hover:border-oxblood focus:border-oxblood outline-none cursor-pointer transition-colors duration-100 px-[0.3em]"
            >
              {REGIME_OPTIONS.map((o) => (
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
          aria-label={`Chrono-debt spectrum under ${regime.label}: realized survival decays faster than baseline; shaded area is the deficit.`}
        >
          {/* Y-axis gridlines */}
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

          {/* Chrono-debt shaded area */}
          <polygon
            points={area}
            style={{ fill: "var(--color-oxblood)", opacity: 0.18 }}
          />

          {/* Baseline survival Λ_◦(τ) — dashed */}
          <polyline
            points={lineLam0}
            fill="none"
            style={{ stroke: "var(--color-ink-90)" }}
            strokeWidth="1.4"
            strokeDasharray="4 3"
          />

          {/* Realized survival Λ(t,τ) — solid oxblood */}
          <polyline
            points={lineLam}
            fill="none"
            style={{ stroke: "var(--color-oxblood)" }}
            strokeWidth="2"
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
            x={(w + pad.l) / 2 - 60}
            y={h - 18}
            w={120}
            h={16}
            align="center"
            color="var(--color-ink-70)"
            size="10px"
          >
            <span style={{ display: "inline-flex", alignItems: "baseline", gap: "4px" }}>
              <M>{String.raw`\tau`}</M>
              <span style={{ fontFamily: "var(--font-mono)" }}>(ticks)</span>
            </span>
          </SvgM>
          <SvgM
            x={4}
            y={pad.t}
            w={120}
            h={16}
            align="left"
            color="var(--color-ink-70)"
            size="10px"
          >
            {String.raw`\mathrm{Pr}(\tau_m > \tau)`}
          </SvgM>

          {/* θ_ref marker */}
          <line
            x1={thetaRefX}
            x2={thetaRefX}
            y1={pad.t}
            y2={h - pad.b}
            style={{ stroke: "var(--color-ink)" }}
            strokeDasharray="2 3"
            strokeWidth="0.8"
          />
          <SvgM
            x={thetaRefX + 4}
            y={pad.t + 2}
            w={60}
            h={14}
            align="left"
            color="var(--color-ink-90)"
            size="10px"
          >
            {String.raw`\theta_{\mathrm{ref}}`}
          </SvgM>
        </svg>

        {/* Legend */}
        <div className="mt-sm flex flex-wrap gap-x-md gap-y-xs font-mono text-xs text-ink-70">
          <span className="inline-flex items-center gap-x-xs">
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: "18px",
                height: "0",
                borderTop: "1.4px dashed var(--color-ink-90)",
              }}
            />
            Λ_◦(τ) — pre-closure baseline
          </span>
          <span className="inline-flex items-center gap-x-xs">
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: "18px",
                height: "2px",
                background: "var(--color-oxblood)",
              }}
            />
            Λ(t,τ) — realized under π
          </span>
          <span className="inline-flex items-center gap-x-xs">
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: "18px",
                height: "10px",
                background: "var(--color-oxblood)",
                opacity: 0.18,
              }}
            />
            D(t,τ) — chrono-debt
          </span>
        </div>

        {/* Aggregate readout */}
        <div className="mt-sm font-mono text-sm text-ink-70">
          aggregate D_w (with w(τ) ∝ τ) ={" "}
          <span className="text-ink-90">{Dw.toFixed(3)}</span>
        </div>
      </div>

      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        <span className="font-mono text-xs text-oxblood">§3.2.</span>{" "}
        <M>{String.raw`D(t,\tau) = \Lambda_\circ(\tau) - \Lambda(t,\tau)`}</M>. The realized
        survival under the closed loop falls fast; the baseline falls slowly.
        The vertical gap between them at any τ is the chrono-debt at scale τ —
        the pause-time that has been foreclosed at that scale. The framework's
        observation is that D is non-zero across the entire τ axis
        simultaneously: accumulated everywhere, at every scale at once, with
        no single preferred scale where it concentrates, weighted by{" "}
        <M>{String.raw`w(\tau) \propto \tau`}</M> so that longer foreclosed
        windows count more. A foreclosed second is recoverable; a foreclosed
        adolescence is not.
      </figcaption>
    </figure>
  );
}
