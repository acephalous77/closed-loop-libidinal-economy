"use client";

import { useState } from "react";

/**
 * The cohort-gradient plate — v2.
 *
 * Operates Proposition 8: D_KL(ν_u^init(τ_exp) || π_R*) ≤
 * D_KL(ν_u^pre || π_R*) · e^(−2K τ_exp). Displays the exponential
 * decay of behavioral distance with developmental exposure, with
 * three named cohorts marked on the curve.
 *
 * No shared engine — this plate's dynamics are a single analytic
 * decay parameterized by K (developmental-rate constant) and the
 * pre-platform baseline distance.
 */
export function CohortGradient() {
  const [K, setK] = useState(0.3); // developmental rate per year
  const [dKLpre, setDKLpre] = useState(2.0); // baseline KL distance

  // Plot dimensions.
  const width = 900;
  const height = 360;
  const padX = 70;
  const padY = 28;
  const plotW = width - 2 * padX;
  const plotH = height - 2 * padY;

  // X: developmental exposure τ_exp in years, 0 to 25.
  const tauMax = 25;
  // Y: D_KL on log scale (always positive, decays exponentially).
  // log10 from -10 to log10(dKLpre · 1.1) — cover ten orders of magnitude.
  const logYMin = -10;
  const logYMax = Math.log10(Math.max(dKLpre * 1.1, 0.1));

  const xOf = (tauExp: number) => padX + (tauExp / tauMax) * plotW;
  const yOf = (dKL: number) => {
    const logY = Math.log10(Math.max(dKL, 1e-15));
    const normalized = (logY - logYMin) / (logYMax - logYMin);
    return padY + (1 - Math.max(0, Math.min(1, normalized))) * plotH;
  };

  // Generate the curve points.
  const curvePoints = [];
  const N = 200;
  for (let i = 0; i <= N; i++) {
    const tauExp = (i / N) * tauMax;
    const dKL = dKLpre * Math.exp(-2 * K * tauExp);
    curvePoints.push({ tauExp, dKL });
  }
  const curvePath = curvePoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xOf(p.tauExp)} ${yOf(p.dKL)}`)
    .join(" ");

  // Cohort markers (specific τ_exp values where named cohorts sit).
  const cohorts = [
    { name: "pre-platform", tauExp: 0, color: "var(--color-moss)" },
    { name: "transition", tauExp: 5, color: "var(--color-slate)" },
    { name: "native", tauExp: 15, color: "var(--color-oxblood)" },
  ];

  // Operational-foreclosure threshold (D_KL < 0.01).
  const foreclosureThreshold = 0.01;

  return (
    <div className="cohort-gradient-container">
      <style>{`
        .cohort-gradient-container .axis-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.05em;
          fill: var(--color-ink-70);
        }
        .cohort-gradient-container .cohort-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.05em;
          fill: var(--color-ink);
        }
      `}</style>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Cohort gradient: D_KL by developmental exposure τ_exp"
        className="w-full max-w-[900px] h-auto"
      >
        {/* Axes */}
        <line x1={padX} y1={padY + plotH} x2={padX + plotW} y2={padY + plotH} stroke="var(--color-ink)" strokeWidth={1} />
        <line x1={padX} y1={padY} x2={padX} y2={padY + plotH} stroke="var(--color-ink)" strokeWidth={1} />

        {/* Y-axis log decade gridlines + labels */}
        {Array.from({ length: Math.ceil(logYMax - logYMin) + 1 }, (_, k) => {
          const log = Math.ceil(logYMin) + k;
          if (log > logYMax) return null;
          const y = yOf(Math.pow(10, log));
          return (
            <g key={`y-${log}`}>
              <line
                x1={padX} y1={y} x2={padX + plotW} y2={y}
                stroke="var(--color-paper-85)" strokeWidth={0.5}
              />
              <text x={padX - 8} y={y + 4} textAnchor="end" className="axis-label">
                10^{log}
              </text>
            </g>
          );
        })}

        {/* X-axis tick marks every 5 years */}
        {[0, 5, 10, 15, 20, 25].map((t) => (
          <g key={`x-${t}`}>
            <line
              x1={xOf(t)} y1={padY + plotH} x2={xOf(t)} y2={padY + plotH + 4}
              stroke="var(--color-ink)" strokeWidth={1}
            />
            <text x={xOf(t)} y={padY + plotH + 18} textAnchor="middle" className="axis-label">
              {t}y
            </text>
          </g>
        ))}

        {/* Foreclosure-threshold horizontal line at D_KL = 0.01 */}
        <line
          x1={padX} y1={yOf(foreclosureThreshold)}
          x2={padX + plotW} y2={yOf(foreclosureThreshold)}
          stroke="var(--color-oxblood)" strokeWidth={1} strokeDasharray="3 4"
        />
        <text
          x={padX + plotW - 6} y={yOf(foreclosureThreshold) - 4}
          textAnchor="end" className="axis-label" fill="var(--color-oxblood)"
        >
          operational foreclosure threshold (D_KL ≈ 10⁻²)
        </text>

        {/* Axis labels */}
        <text x={padX + plotW / 2} y={height - 4} textAnchor="middle" className="axis-label">
          τ_exp (developmental exposure, years)
        </text>
        <text
          x={14} y={padY + plotH / 2}
          textAnchor="middle" className="axis-label"
          transform={`rotate(-90 14 ${padY + plotH / 2})`}
        >
          D_KL(ν_u^init || π_R*)
        </text>

        {/* The decay curve */}
        <path
          d={curvePath}
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth={2}
        />

        {/* Cohort markers */}
        {cohorts.map((c) => {
          const dKL = dKLpre * Math.exp(-2 * K * c.tauExp);
          const cx = xOf(c.tauExp);
          const cy = yOf(dKL);
          return (
            <g key={c.name}>
              <circle cx={cx} cy={cy} r={6} fill={c.color} stroke="var(--color-paper)" strokeWidth={1.5} />
              <text
                x={cx + 10} y={cy + 4}
                className="cohort-label"
                fill={c.color}
              >
                {c.name} (τ_exp = {c.tauExp}y; D_KL = {dKL.toExponential(2)})
              </text>
            </g>
          );
        })}
      </svg>

      {/* Readouts */}
      <div className="grid grid-cols-3 gap-md mt-md font-mono text-sm">
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">K (rate, /year)</div>
          <div className="text-ink">{K.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">D_KL^pre</div>
          <div className="text-ink">{dKLpre.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">Half-life τ_½</div>
          <div className="text-ink">{(Math.log(2) / (2 * K)).toFixed(2)}y</div>
        </div>
      </div>

      {/* Parameter controls */}
      <div className="mt-md grid grid-cols-1 sm:grid-cols-2 gap-md text-sm">
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            K (developmental rate per year)
            <span className="ml-sm text-ink">{K.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.05}
            max={2}
            step={0.01}
            value={K}
            onChange={(e) => setK(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            D_KL^pre (baseline distance)
            <span className="ml-sm text-ink">{dKLpre.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={5}
            step={0.1}
            value={dKLpre}
            onChange={(e) => setDKLpre(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
      </div>
    </div>
  );
}
