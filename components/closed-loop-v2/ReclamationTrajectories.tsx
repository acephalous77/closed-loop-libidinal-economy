"use client";

import { useEffect, useState } from "react";

/**
 * The reclamation-trajectories plate -- v2.
 *
 * Operates Theorem 1': MSE of any estimator of I_P(tau) is bounded
 * below by c * sigma_u^4 / [T * S(tau; theta*)]. The plate shows a
 * bundle of estimator-MSE trajectories vs sample budget T, with the
 * framework's lower bound as a reference curve. Trajectories below
 * the bound are rare (the bound is tight); they render highlighted
 * in moss to emphasize their rarity.
 *
 * Parameter sliders:
 *   theta_ref / delta_min (structural separation) -- controls
 *     S(theta_ref; theta*) and hence the bound's height
 *   N (number of trajectories displayed)
 */

interface SimParams {
  thetaRefRatio: number; // theta_ref / delta_min
  N: number; // number of trajectories
  sigma_u: number; // user-state variance
}

const DEFAULT: SimParams = {
  thetaRefRatio: 1e3,
  N: 50,
  sigma_u: 1,
};

// Cramer-Rao-style lower bound on estimator MSE.
function lowerBound(T: number, params: SimParams): number {
  const c = 1; // absolute constant
  // S(theta_ref; theta*) under the exponential ISI simplification:
  // S = exp(-theta_ref/delta_min). Use a slightly less extreme model
  // for visualization: S = 1 / theta_ref_ratio^2 (polynomial bound).
  const S = 1 / (params.thetaRefRatio * params.thetaRefRatio);
  return (c * Math.pow(params.sigma_u, 4)) / (T * S);
}

// Generate a single trajectory: sequence of (T, MSE) pairs.
// The estimator MSE behaves roughly as bound * (1 + small noise).
// Rarely (5% of trajectories), an estimator under-realizes the bound
// briefly.
function generateTrajectory(
  Ts: number[],
  params: SimParams,
  rngSeed: number,
): { T: number; mse: number }[] {
  // Deterministic pseudo-random sequence from seed.
  let state = rngSeed;
  function rand(): number {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  }

  const isRare = rand() < 0.05; // 5% chance of beating the bound

  return Ts.map((T) => {
    const bound = lowerBound(T, params);
    // Standard trajectory: bound * exp(N(0, 0.3))
    const noise = (rand() - 0.5) * 0.6;
    const factor = isRare && T > 1e4 ? 0.5 + noise * 0.3 : 1 + Math.abs(noise) + 0.5;
    return { T, mse: bound * factor };
  });
}

export function ReclamationTrajectories() {
  const [params, setParams] = useState<SimParams>(DEFAULT);
  const [seed, setSeed] = useState(42);

  // Log-spaced T values.
  const Ts: number[] = [];
  for (let logT = 1; logT <= 7; logT += 0.1) {
    Ts.push(Math.pow(10, logT));
  }

  // Generate N trajectories.
  const trajectories = Array.from({ length: params.N }, (_, i) =>
    generateTrajectory(Ts, params, seed * 1000 + i),
  );

  // Reference curve (the bound).
  const boundCurve = Ts.map((T) => ({ T, mse: lowerBound(T, params) }));

  // Plot dimensions.
  const width = 900;
  const height = 380;
  const padX = 72;
  const padY = 32;
  const plotW = width - 2 * padX;
  const plotH = height - 2 * padY;

  // Determine y range.
  const allMSE = trajectories
    .flat()
    .map((p) => p.mse)
    .concat(boundCurve.map((p) => p.mse));
  const logMSEMin = Math.log10(Math.max(Math.min(...allMSE), 1e-15));
  const logMSEMax = Math.log10(Math.max(...allMSE));
  const logTMin = Math.log10(Ts[0]);
  const logTMax = Math.log10(Ts[Ts.length - 1]);

  function xOf(T: number): number {
    return (
      padX + ((Math.log10(T) - logTMin) / (logTMax - logTMin)) * plotW
    );
  }
  function yOf(mse: number): number {
    const logMSE = Math.log10(Math.max(mse, 1e-15));
    const normalized = (logMSE - logMSEMin) / (logMSEMax - logMSEMin);
    return padY + (1 - Math.max(0, Math.min(1, normalized))) * plotH;
  }

  function pathOf(traj: { T: number; mse: number }[]): string {
    return traj
      .map((p, i) => `${i === 0 ? "M" : "L"} ${xOf(p.T).toFixed(2)} ${yOf(p.mse).toFixed(2)}`)
      .join(" ");
  }

  // Highlight trajectories that fall below the bound at any point.
  const isAboveBound = (traj: { T: number; mse: number }[]): boolean => {
    return traj.every((p) => p.mse > lowerBound(p.T, params) * 0.95);
  };

  const feasibleTBound = 1e6; // feasibility threshold

  return (
    <div className="reclamation-trajectories-container">
      <style>{`
        .reclamation-trajectories-container .axis-label {
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
        aria-label="Reclamation trajectories: estimator MSE vs sample budget T"
        className="w-full max-w-[900px] h-auto"
      >
        {/* Plot border */}
        <line x1={padX} y1={padY + plotH} x2={padX + plotW} y2={padY + plotH} stroke="var(--color-ink)" strokeWidth={1} />
        <line x1={padX} y1={padY} x2={padX} y2={padY + plotH} stroke="var(--color-ink)" strokeWidth={1} />

        {/* Y-axis log decade gridlines + labels */}
        {Array.from({ length: Math.ceil(logMSEMax - logMSEMin) + 1 }, (_, k) => {
          const log = Math.ceil(logMSEMin) + k;
          if (log > logMSEMax) return null;
          const y = yOf(Math.pow(10, log));
          return (
            <g key={`y-${log}`}>
              <line x1={padX} y1={y} x2={padX + plotW} y2={y} stroke="var(--color-paper-85)" strokeWidth={0.5} />
              <text x={padX - 8} y={y + 4} textAnchor="end" className="axis-label">
                10^{log}
              </text>
            </g>
          );
        })}

        {/* X-axis log decade ticks */}
        {Array.from({ length: Math.ceil(logTMax - logTMin) + 1 }, (_, k) => {
          const log = Math.ceil(logTMin) + k;
          if (log > logTMax) return null;
          const x = padX + ((log - logTMin) / (logTMax - logTMin)) * plotW;
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
          T (sample budget, log scale)
        </text>
        <text
          x={14} y={padY + plotH / 2}
          textAnchor="middle" className="axis-label"
          transform={`rotate(-90 14 ${padY + plotH / 2})`}
        >
          MSE of estimator I_T(tau)
        </text>

        {/* Feasibility threshold vertical line */}
        <line
          x1={xOf(feasibleTBound)} y1={padY}
          x2={xOf(feasibleTBound)} y2={padY + plotH}
          stroke="var(--color-oxblood)" strokeWidth={1} strokeDasharray="3 4"
        />
        <text
          x={xOf(feasibleTBound) - 6} y={padY + 14}
          textAnchor="end" className="axis-label" fill="var(--color-oxblood)"
        >
          feasible sample budget
        </text>

        {/* Trajectories — warm-ink for typical, moss highlight for rare-below-bound */}
        {trajectories.map((traj, i) => {
          const aboveBound = isAboveBound(traj);
          return (
            <path
              key={i}
              d={pathOf(traj)}
              fill="none"
              stroke={aboveBound ? "var(--color-ink)" : "var(--color-moss)"}
              strokeWidth={aboveBound ? 0.6 : 1.5}
              opacity={aboveBound ? 0.35 : 0.9}
            />
          );
        })}

        {/* Reference bound curve (oxblood) */}
        <path
          d={pathOf(boundCurve)}
          fill="none"
          stroke="var(--color-oxblood)"
          strokeWidth={2}
        />

        {/* Bound label */}
        <text
          x={xOf(Ts[Math.floor(Ts.length * 0.7)])}
          y={yOf(lowerBound(Ts[Math.floor(Ts.length * 0.7)], params)) - 8}
          className="axis-label"
          fill="var(--color-oxblood)"
        >
          framework's lower bound: c · sigma^4 / (T · S(tau; theta*))
        </text>
      </svg>

      {/* Readouts */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-md mt-md font-mono text-sm">
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">trajectories</div>
          <div className="text-ink">{params.N}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">below-bound (moss)</div>
          <div className="text-ink">
            {trajectories.filter((t) => !isAboveBound(t)).length} / {params.N}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">S(theta_ref; theta*)</div>
          <div className="text-ink">
            {(1 / (params.thetaRefRatio * params.thetaRefRatio)).toExponential(2)}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-md flex flex-wrap gap-sm items-center">
        <button
          type="button"
          onClick={() => setSeed((s) => s + 1)}
          className="font-mono text-xs uppercase tracking-wider px-sm py-xs border border-ink hover:bg-paper-95"
        >
          re-seed trajectories
        </button>
      </div>

      <div className="mt-md grid grid-cols-1 sm:grid-cols-2 gap-md text-sm">
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            theta_ref / delta_min (structural separation){" "}
            <span className="ml-sm text-ink">10^{Math.log10(params.thetaRefRatio).toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={1}
            max={5}
            step={0.1}
            value={Math.log10(params.thetaRefRatio)}
            onChange={(e) =>
              setParams((p) => ({ ...p, thetaRefRatio: Math.pow(10, parseFloat(e.target.value)) }))
            }
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            N (trajectories){" "}
            <span className="ml-sm text-ink">{params.N}</span>
          </div>
          <input
            type="range"
            min={10}
            max={200}
            step={10}
            value={params.N}
            onChange={(e) => setParams((p) => ({ ...p, N: parseInt(e.target.value) }))}
            className="w-full"
          />
        </label>
      </div>
    </div>
  );
}
