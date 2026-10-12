"use client";

import { useEffect, useRef, useState } from "react";
import { useAnimating } from "./useAnimating";
import {
  DEFAULT_PARAMS,
  generateLogSpacedTaus,
  initialState,
  step,
  survival,
  survivalCurve,
  thetaRef,
  type SimParams,
  type SimState,
} from "@/lib/simulation/closed-loop-v2";

/**
 * The foreclosure-clock plate — v2.
 *
 * Visualizes Lemma 1: under closed-loop convergence θ_t → θ*, the
 * survival function S(τ; θ_t) collapses, and at τ = θ_ref it
 * approaches operational zero. The chrono-debt spectrum (Def 1.1)
 * fills the area between the converged survival curve and the
 * baseline at θ_0.
 *
 * Per design: setInterval (not rAF) for the sim loop — rAF throttles
 * in dev preview and background tabs.
 */
export function ForeclosureClock() {
  const [params, setParams] = useState<SimParams>(DEFAULT_PARAMS);
  const [state, setState] = useState<SimState>(() => initialState(DEFAULT_PARAMS));
  const [running, setRunning] = useState(false);
  const animating = useAnimating(running);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const taus = generateLogSpacedTaus(params);
  const ref = thetaRef(params);

  // Baseline survival at θ_0 (the pre-closure baseline).
  const baselineCurve = survivalCurve(params.theta0, taus, params);
  const currentCurve = survivalCurve(state.theta, taus, params);

  // Operator contraction modulus κ_Φ = (β/α)·L_D (R1, under R2's α-strong
  // concavity). Convergence holds for κ_Φ < 1; κ_Φ = 1 is the
  // contractivity boundary (Theorem 12).
  const kappaPhi = (params.beta / params.alpha) * params.L_D;

  // Plot dimensions.
  const width = 900;
  const height = 360;
  const padX = 60;
  const padY = 28;
  const plotW = width - 2 * padX;
  const plotH = height - 2 * padY;

  // X scale: log10(τ) over [log10(τ_min), log10(τ_max)].
  const logTauMin = Math.log10(taus[0]);
  const logTauMax = Math.log10(taus[taus.length - 1]);
  const xOf = (tau: number) =>
    padX + ((Math.log10(tau) - logTauMin) / (logTauMax - logTauMin)) * plotW;

  // Y scale: linear from 0 to 1, inverted.
  const yOf = (s: number) => padY + (1 - s) * plotH;

  // Round to 2 decimals — sufficient precision for screen rendering,
  // and produces deterministic string output across server/client to
  // avoid the React-19 SVG-path hydration warning on float-precision
  // differences.
  const fx = (n: number) => n.toFixed(2);

  // Build the SVG path for a curve.
  const pathOf = (curve: number[]) =>
    curve
      .map((s, i) => `${i === 0 ? "M" : "L"} ${fx(xOf(taus[i]))} ${fx(yOf(s))}`)
      .join(" ");

  // Chrono-debt shaded region: between baseline (upper) and current (lower).
  const debtPath = (() => {
    const top = curve(baselineCurve);
    const bottomReversed = [...curve(currentCurve)].reverse();
    return `M ${fx(xOf(taus[0]))} ${fx(yOf(baselineCurve[0]))} ` +
      top.slice(1).map((_, i) => `L ${fx(xOf(taus[i + 1]))} ${fx(yOf(baselineCurve[i + 1]))}`).join(" ") +
      ` L ${fx(xOf(taus[taus.length - 1]))} ${fx(yOf(currentCurve[taus.length - 1]))} ` +
      bottomReversed.slice(1).map((_, i) => `L ${fx(xOf(taus[taus.length - 2 - i]))} ${fx(yOf(currentCurve[taus.length - 2 - i]))}`).join(" ") +
      " Z";
  })();

  // Helper to enumerate curve elements (used for the debt path above).
  function curve(arr: number[]) {
    return arr.map((s, i) => ({ tau: taus[i], s, x: xOf(taus[i]), y: yOf(s) }));
  }

  // Sim loop — setInterval at ~30 FPS.
  useEffect(() => {
    if (!animating) return;
    intervalRef.current = setInterval(() => {
      setState((s) => step(s, params));
    }, 33);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [animating, params]);

  // Reset state when params change in a way that would invalidate the run.
  function reset() {
    setRunning(false);
    setState(initialState(params));
  }

  // Survival at θ_ref under the current θ_t.
  const sAtRef = survival(ref, state.theta, params);

  return (
    <div className="foreclosure-clock-container">
      <style>{`
        .foreclosure-clock-container .axis-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.05em;
          fill: var(--color-ink-70);
        }
        .foreclosure-clock-container .readout-label {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.05em;
          fill: var(--color-ink-70);
          text-transform: uppercase;
        }
        .foreclosure-clock-container .readout-value {
          font-family: var(--font-mono);
          font-size: 14px;
          fill: var(--color-ink);
        }
      `}</style>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Foreclosure clock: survival function S(τ; θ_t) over log-scale τ"
        className="w-full max-w-[900px] h-auto"
      >
        {/* Plot border — bottom and left axes */}
        <line
          x1={padX} y1={padY + plotH} x2={padX + plotW} y2={padY + plotH}
          stroke="var(--color-ink)" strokeWidth={1}
        />
        <line
          x1={padX} y1={padY} x2={padX} y2={padY + plotH}
          stroke="var(--color-ink)" strokeWidth={1}
        />

        {/* Y-axis gridlines + labels (S = 0, 0.5, 1) */}
        {[0, 0.5, 1].map((s) => (
          <g key={`y-${s}`}>
            <line
              x1={padX} y1={yOf(s)} x2={padX + plotW} y2={yOf(s)}
              stroke="var(--color-paper-85)" strokeWidth={0.5}
            />
            <text
              x={padX - 8} y={yOf(s) + 4}
              textAnchor="end" className="axis-label"
            >
              {s.toFixed(1)}
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
              <line
                x1={x} y1={padY + plotH} x2={x} y2={padY + plotH + 4}
                stroke="var(--color-ink)" strokeWidth={1}
              />
              <text
                x={x} y={padY + plotH + 18}
                textAnchor="middle" className="axis-label"
              >
                10^{log}
              </text>
            </g>
          );
        })}

        {/* Axis labels */}
        <text
          x={padX + plotW / 2} y={height - 4}
          textAnchor="middle" className="axis-label"
        >
          τ (log scale)
        </text>
        <text
          x={12} y={padY + plotH / 2}
          textAnchor="middle" className="axis-label"
          transform={`rotate(-90 12 ${padY + plotH / 2})`}
        >
          S(τ; θ_t)
        </text>

        {/* Chrono-debt shaded region */}
        <path
          d={debtPath}
          fill="var(--color-oxblood)"
          fillOpacity={0.18}
        />

        {/* Baseline survival curve (cream — pre-closure) */}
        <path
          d={pathOf(baselineCurve)}
          fill="none"
          stroke="var(--color-ink-70)"
          strokeWidth={1.5}
          strokeDasharray="2 3"
        />

        {/* Current survival curve (warm-ink — closed-loop, decaying) */}
        <path
          d={pathOf(currentCurve)}
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth={2}
        />

        {/* θ_ref vertical line (dashed oxblood) */}
        <line
          x1={xOf(ref)} y1={padY}
          x2={xOf(ref)} y2={padY + plotH}
          stroke="var(--color-oxblood)"
          strokeWidth={1.5}
          strokeDasharray="3 4"
        />
        <text
          x={xOf(ref) + 6} y={padY + 14}
          className="axis-label"
          fill="var(--color-oxblood)"
        >
          θ_ref
        </text>
      </svg>

      {/* Readouts */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-md mt-md font-mono text-sm">
        <div>
          <div className="readout-label text-xs uppercase tracking-wider text-ink-70 mb-xs">θ_t</div>
          <div className="text-ink">{state.theta.toFixed(4)}</div>
        </div>
        <div>
          <div className="readout-label text-xs uppercase tracking-wider text-ink-70 mb-xs">tick</div>
          <div className="text-ink">{state.t}</div>
        </div>
        <div>
          <div className="readout-label text-xs uppercase tracking-wider text-ink-70 mb-xs">S(θ_ref; θ_t)</div>
          <div className="text-ink">{sAtRef.toExponential(2)}</div>
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
