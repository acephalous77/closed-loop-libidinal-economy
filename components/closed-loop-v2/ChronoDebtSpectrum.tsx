"use client";

import { useEffect, useRef, useState } from "react";
import { useAnimating } from "./useAnimating";
import {
  DEFAULT_PARAMS,
  generateLogSpacedTaus,
  initialState,
  step,
  survival,
  thetaRef,
  type SimParams,
  type SimState,
} from "@/lib/simulation/closed-loop-v2";

/**
 * The chrono-debt spectrum plate — v2.
 *
 * Visualizes Definition 1.1: D(t, τ) := S(τ; θ_∘) - S(τ; θ_t). The
 * spectrum is the function of τ; the plate renders it as a bar chart
 * over log-spaced τ. Optional weighted view multiplies each bar by
 * τ (the framework's default weighting w(τ) ∝ τ).
 *
 * Shares the sim engine with the foreclosure-clock plate.
 */
export function ChronoDebtSpectrum() {
  const [params, setParams] = useState<SimParams>(DEFAULT_PARAMS);
  const [state, setState] = useState<SimState>(() => initialState(DEFAULT_PARAMS));
  const [running, setRunning] = useState(false);
  const animating = useAnimating(running);
  const [weighted, setWeighted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const taus = generateLogSpacedTaus(params);
  const ref = thetaRef(params);

  // Chrono-debt spectrum: D(t, τ) = S(τ; θ_∘) − S(τ; θ_t).
  const spectrum = taus.map(
    (tau) => survival(tau, params.theta0, params) - survival(tau, state.theta, params),
  );

  // Operator contraction modulus κ_Φ = (β/α)·L_D (R1, under R2's α-strong
  // concavity). Convergence holds for κ_Φ < 1; κ_Φ = 1 is the
  // contractivity boundary (Theorem 12).
  const kappaPhi = (params.beta / params.alpha) * params.L_D;

  // Apply weighting if toggled. We normalize by max τ to keep bars in [0, 1].
  const tauMax = taus[taus.length - 1];
  const displayed = weighted
    ? spectrum.map((d, i) => (d * taus[i]) / tauMax)
    : spectrum;

  // The aggregate chrono-debt — integral of the spectrum (unweighted).
  // For visualization, compute as a trapezoidal sum on the log-scale τ.
  const aggregate = (() => {
    let sum = 0;
    for (let i = 0; i < taus.length - 1; i++) {
      const dtau = taus[i + 1] - taus[i];
      sum += 0.5 * (spectrum[i] + spectrum[i + 1]) * dtau;
    }
    return sum;
  })();

  // Plot dimensions.
  const width = 900;
  const height = 360;
  const padX = 60;
  const padY = 28;
  const plotW = width - 2 * padX;
  const plotH = height - 2 * padY;

  const logTauMin = Math.log10(taus[0]);
  const logTauMax = Math.log10(taus[taus.length - 1]);
  const xOf = (tau: number) =>
    padX + ((Math.log10(tau) - logTauMin) / (logTauMax - logTauMin)) * plotW;
  const barWidth = plotW / taus.length * 0.85;

  // Y scale — linear 0 to 1, inverted.
  const yOf = (d: number) => padY + (1 - Math.max(0, Math.min(1, d))) * plotH;

  useEffect(() => {
    if (!animating) return;
    intervalRef.current = setInterval(() => {
      setState((s) => step(s, params));
    }, 33);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [animating, params]);

  function reset() {
    setRunning(false);
    setState(initialState(params));
  }

  return (
    <div className="chrono-debt-spectrum-container">
      <style>{`
        .chrono-debt-spectrum-container .axis-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.05em;
          fill: var(--color-ink-70);
        }
      `}</style>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Chrono-debt spectrum: D(t, τ) over log-scale τ"
        className="w-full max-w-[900px] h-auto"
      >
        {/* Plot border */}
        <line x1={padX} y1={padY + plotH} x2={padX + plotW} y2={padY + plotH} stroke="var(--color-ink)" strokeWidth={1} />
        <line x1={padX} y1={padY} x2={padX} y2={padY + plotH} stroke="var(--color-ink)" strokeWidth={1} />

        {/* Y-axis gridlines + labels */}
        {[0, 0.5, 1].map((v) => (
          <g key={`y-${v}`}>
            <line x1={padX} y1={yOf(v)} x2={padX + plotW} y2={yOf(v)} stroke="var(--color-paper-85)" strokeWidth={0.5} />
            <text x={padX - 8} y={yOf(v) + 4} textAnchor="end" className="axis-label">
              {v.toFixed(1)}
            </text>
          </g>
        ))}

        {/* X-axis decade ticks */}
        {Array.from({ length: Math.ceil(logTauMax - logTauMin) + 1 }, (_, k) => {
          const log = Math.ceil(logTauMin) + k;
          if (log > logTauMax) return null;
          const x = padX + ((log - logTauMin) / (logTauMax - logTauMin)) * plotW;
          return (
            <g key={`x-${log}`}>
              <line x1={x} y1={padY + plotH} x2={x} y2={padY + plotH + 4} stroke="var(--color-ink)" strokeWidth={1} />
              <text x={x} y={padY + plotH + 18} textAnchor="middle" className="axis-label">
                10^{log}
              </text>
            </g>
          );
        })}

        {/* Axis labels */}
        <text x={padX + plotW / 2} y={height - 4} textAnchor="middle" className="axis-label">
          τ (log scale)
        </text>
        <text
          x={12} y={padY + plotH / 2}
          textAnchor="middle"
          className="axis-label"
          transform={`rotate(-90 12 ${padY + plotH / 2})`}
        >
          {weighted ? "w(τ)·D(t, τ)" : "D(t, τ)"}
        </text>

        {/* Bars */}
        {displayed.map((d, i) => {
          const x = xOf(taus[i]) - barWidth / 2;
          const y = yOf(d);
          const h = (padY + plotH) - y;
          if (h <= 0.1) return null;
          // Oxblood with intensity scaling by raw debt magnitude.
          const opacity = 0.25 + 0.55 * spectrum[i];
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={barWidth}
              height={h}
              fill="var(--color-oxblood)"
              fillOpacity={opacity}
            />
          );
        })}

        {/* θ_ref dashed line */}
        <line
          x1={xOf(ref)} y1={padY} x2={xOf(ref)} y2={padY + plotH}
          stroke="var(--color-oxblood)" strokeWidth={1.5} strokeDasharray="3 4"
        />
        <text x={xOf(ref) + 6} y={padY + 14} className="axis-label" fill="var(--color-oxblood)">
          θ_ref
        </text>
      </svg>

      {/* Readouts */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-md mt-md font-mono text-sm">
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">θ_t</div>
          <div className="text-ink">{state.theta.toFixed(4)}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">tick</div>
          <div className="text-ink">{state.t}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">aggregate ∫D dτ</div>
          <div className="text-ink">{aggregate.toExponential(2)}</div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-md flex flex-wrap gap-sm items-center">
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          className="font-mono text-xs uppercase tracking-wider px-sm py-xs border border-ink hover:bg-paper-95"
        >
          {running ? "▮ pause" : "▶ play"}
        </button>
        <button
          type="button"
          onClick={reset}
          className="font-mono text-xs uppercase tracking-wider px-sm py-xs border border-ink hover:bg-paper-95"
        >
          ↺ reset
        </button>
        <label className="font-mono text-xs uppercase tracking-wider flex items-center gap-xs cursor-pointer">
          <input
            type="checkbox"
            checked={weighted}
            onChange={(e) => setWeighted(e.target.checked)}
          />
          weighted by scale w(τ) ∝ τ
        </label>
      </div>

      {/* Computed operator modulus κ_Φ = (β/α)·L_D */}
      <div className="mt-md font-mono text-xs uppercase tracking-wider text-ink-70">
        κ_Φ = (β/α)·L_D
        <span className="ml-sm text-ink">{kappaPhi.toFixed(2)}</span>
        {kappaPhi >= 1 && (
          <span className="ml-sm text-oxblood">contractivity boundary crossed</span>
        )}
      </div>

      {/* Parameter controls */}
      <div className="mt-sm grid grid-cols-1 sm:grid-cols-2 gap-md text-sm">
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            β (reward smoothness)
            <span className="ml-sm text-ink">{params.beta.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.1}
            max={1.0}
            step={0.05}
            value={params.beta}
            onChange={(e) => {
              const beta = parseFloat(e.target.value);
              setParams((p) => ({ ...p, beta }));
            }}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            α (strong concavity)
            <span className="ml-sm text-ink">{params.alpha.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={2.0}
            step={0.05}
            value={params.alpha}
            onChange={(e) => {
              const alpha = parseFloat(e.target.value);
              setParams((p) => ({ ...p, alpha }));
            }}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            L_D (distribution sensitivity)
            <span className="ml-sm text-ink">{params.L_D.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.1}
            max={1.0}
            step={0.05}
            value={params.L_D}
            onChange={(e) => {
              const L_D = parseFloat(e.target.value);
              setParams((p) => ({ ...p, L_D }));
            }}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            θ_ref / δ_min (structural separation)
            <span className="ml-sm text-ink">10^{Math.log10(params.thetaRefRatio).toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={2}
            max={5}
            step={0.1}
            value={Math.log10(params.thetaRefRatio)}
            onChange={(e) => {
              const exp = parseFloat(e.target.value);
              setParams((p) => ({ ...p, thetaRefRatio: Math.pow(10, exp) }));
            }}
            className="w-full"
          />
        </label>
      </div>
    </div>
  );
}
