"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The metric-superego plate — v2.
 *
 * Operates Proposition 5': the user's behavioral distribution
 * ν_u(t) converges to π_R* under Fisher–Rao gradient flow. D_KL is
 * a strict Lyapunov function decreasing monotonically to zero.
 *
 * Visualization:
 *   Left panel — the 3-choice simplex (triangle). ν_u(t) renders as
 *               a point inside the triangle; π_R* as a target marker.
 *               The flow is traced as a trajectory.
 *   Right panel — D_KL(ν_u(t) || π_R*) over time on log scale —
 *               the strict-Lyapunov certificate.
 */

type Dist3 = [number, number, number];

interface SimState {
  nu: Dist3; // current ν_u, a probability vector on three choices
  t: number;
  history: { t: number; kl: number; nu: Dist3 }[];
}

const HISTORY_LENGTH = 600;

function klDivergence(p: Dist3, q: Dist3): number {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    if (p[i] > 1e-12 && q[i] > 1e-12) {
      sum += p[i] * Math.log(p[i] / q[i]);
    }
  }
  return Math.max(sum, 0);
}

/**
 * Fisher–Rao gradient flow step. The gradient of D_KL(ν || π) under
 * the Fisher–Rao metric at ν is ν * log(ν / π) − ν · (mean of log ratio).
 * Discretized step: ν_new ∝ ν * exp(−β · gradient).
 */
function step(state: SimState, target: Dist3, beta: number): SimState {
  const meanLog = state.nu.reduce(
    (acc, p, i) => acc + p * Math.log(Math.max(p, 1e-12) / Math.max(target[i], 1e-12)),
    0,
  );
  const update = state.nu.map((p, i) => {
    const grad = Math.log(Math.max(p, 1e-12) / Math.max(target[i], 1e-12)) - meanLog;
    return p * Math.exp(-beta * grad);
  }) as Dist3;
  const sum = update[0] + update[1] + update[2];
  const newNu = update.map((v) => v / sum) as Dist3;
  const dt = 0.5;
  const newT = state.t + dt;
  const kl = klDivergence(newNu, target);
  const history = [
    ...state.history,
    { t: newT, kl, nu: newNu },
  ].slice(-HISTORY_LENGTH);
  return { nu: newNu, t: newT, history };
}

function initialState(start: Dist3): SimState {
  return { nu: start, t: 0, history: [{ t: 0, kl: 0, nu: start }] };
}

// Barycentric → Cartesian for the 3-choice simplex triangle.
function bary(p: Dist3, corners: { x: number; y: number }[]): { x: number; y: number } {
  return {
    x: p[0] * corners[0].x + p[1] * corners[1].x + p[2] * corners[2].x,
    y: p[0] * corners[0].y + p[1] * corners[1].y + p[2] * corners[2].y,
  };
}

export function MetricSuperego() {
  const [beta, setBeta] = useState(0.08);
  const [target, setTarget] = useState<Dist3>([0.7, 0.2, 0.1]);
  const [start, setStart] = useState<Dist3>([0.1, 0.6, 0.3]);
  const [state, setState] = useState<SimState>(() => initialState([0.1, 0.6, 0.3]));
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // When start changes, reset state.
  useEffect(() => {
    setState(initialState(start));
    setRunning(false);
  }, [start]);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setState((s) => step(s, target, beta));
    }, 50);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, target, beta]);

  function reset() {
    setRunning(false);
    setState(initialState(start));
  }

  // Plot dimensions.
  const width = 900;
  const height = 380;

  // Simplex triangle on the left.
  const triPad = 30;
  const triSide = 280;
  const triH = (triSide * Math.sqrt(3)) / 2;
  const triCx = triPad + triSide / 2;
  const triCy = 60 + triH / 2;
  const triCorners = [
    { x: triCx, y: 60 }, // top
    { x: triCx - triSide / 2, y: 60 + triH }, // bottom-left
    { x: triCx + triSide / 2, y: 60 + triH }, // bottom-right
  ];

  const targetPt = bary(target, triCorners);
  const nuPt = bary(state.nu, triCorners);
  const trajectory = state.history.map((h) => bary(h.nu, triCorners));
  const trajPath = trajectory
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(" ");

  // D_KL log-scale plot on the right.
  const klX0 = 380;
  const klY0 = 60;
  const klW = 480;
  const klH = 240;
  const klMax = Math.max(0.5, ...state.history.map((h) => h.kl));
  const logKLMax = Math.ceil(Math.log10(klMax));
  const logKLMin = logKLMax - 6;
  const tMax = Math.max(50, ...state.history.map((h) => h.t));
  const xOfT = (t: number) => klX0 + (t / tMax) * klW;
  const yOfKL = (kl: number) => {
    const logKL = Math.log10(Math.max(kl, 1e-15));
    const normalized = (logKL - logKLMin) / (logKLMax - logKLMin);
    return klY0 + (1 - Math.max(0, Math.min(1, normalized))) * klH;
  };
  const klPath = state.history
    .map((h, i) => `${i === 0 ? "M" : "L"} ${xOfT(h.t).toFixed(2)} ${yOfKL(h.kl).toFixed(2)}`)
    .join(" ");

  return (
    <div className="metric-superego-container">
      <style>{`
        .metric-superego-container .axis-label {
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
        aria-label="Metric superego: ν_u converging to π_R* on the simplex, with D_KL Lyapunov decay"
        className="w-full max-w-[900px] h-auto"
      >
        {/* Simplex triangle */}
        <g>
          {/* Triangle outline */}
          <polygon
            points={triCorners.map((c) => `${c.x},${c.y}`).join(" ")}
            fill="var(--color-paper-95)"
            stroke="var(--color-ink)"
            strokeWidth={1.5}
          />
          {/* Trajectory */}
          <path d={trajPath} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} opacity={0.6} />
          {/* Current ν_u */}
          <circle cx={nuPt.x} cy={nuPt.y} r={6} fill="var(--color-moss)" stroke="var(--color-paper)" strokeWidth={1.5} />
          {/* Target π_R* */}
          <g>
            <circle cx={targetPt.x} cy={targetPt.y} r={8} fill="none" stroke="var(--color-oxblood)" strokeWidth={2} />
            <circle cx={targetPt.x} cy={targetPt.y} r={3} fill="var(--color-oxblood)" />
          </g>
          {/* Corner labels */}
          <text x={triCorners[0].x} y={triCorners[0].y - 8} textAnchor="middle" className="axis-label">a₁</text>
          <text x={triCorners[1].x - 4} y={triCorners[1].y + 16} textAnchor="end" className="axis-label">a₂</text>
          <text x={triCorners[2].x + 4} y={triCorners[2].y + 16} textAnchor="start" className="axis-label">a₃</text>
          {/* Section title */}
          <text x={triCx} y={26} textAnchor="middle" className="axis-label">
            Simplex Δ(A_u) — ν_u(t) (moss) → π_R* (oxblood)
          </text>
        </g>

        {/* D_KL plot */}
        <g>
          <text x={klX0 + klW / 2} y={26} textAnchor="middle" className="axis-label">
            D_KL(ν_u(t) || π_R*) — Lyapunov decay (log scale)
          </text>
          {/* Plot border */}
          <line x1={klX0} y1={klY0 + klH} x2={klX0 + klW} y2={klY0 + klH} stroke="var(--color-ink)" strokeWidth={1} />
          <line x1={klX0} y1={klY0} x2={klX0} y2={klY0 + klH} stroke="var(--color-ink)" strokeWidth={1} />
          {/* Y-axis log decade gridlines */}
          {Array.from({ length: 7 }, (_, k) => {
            const log = logKLMin + k;
            if (log > logKLMax) return null;
            const y = yOfKL(Math.pow(10, log));
            return (
              <g key={`y-${log}`}>
                <line x1={klX0} y1={y} x2={klX0 + klW} y2={y} stroke="var(--color-paper-85)" strokeWidth={0.5} />
                <text x={klX0 - 6} y={y + 4} textAnchor="end" className="axis-label">
                  10^{log}
                </text>
              </g>
            );
          })}
          {/* Curve */}
          <path d={klPath} fill="none" stroke="var(--color-ink)" strokeWidth={2} />
        </g>
      </svg>

      {/* Readouts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-md mt-md font-mono text-sm">
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">D_KL(ν_u || π_R*)</div>
          <div className="text-ink">{state.history[state.history.length - 1].kl.toExponential(2)}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">ν_u</div>
          <div className="text-ink text-xs">
            ({state.nu[0].toFixed(2)}, {state.nu[1].toFixed(2)}, {state.nu[2].toFixed(2)})
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">π_R*</div>
          <div className="text-ink text-xs">
            ({target[0].toFixed(2)}, {target[1].toFixed(2)}, {target[2].toFixed(2)})
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">sim time</div>
          <div className="text-ink">{state.t.toFixed(1)}</div>
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

      <div className="mt-md grid grid-cols-1 sm:grid-cols-3 gap-md text-sm">
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            β_u (plasticity rate)
            <span className="ml-sm text-ink">{beta.toFixed(3)}</span>
          </div>
          <input
            type="range"
            min={0.01}
            max={0.5}
            step={0.01}
            value={beta}
            onChange={(e) => setBeta(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <PresetButtonGroup
          label="ν_u(0) presets"
          onSelect={(v) => setStart(v)}
          options={[
            { label: "near a₁", value: [0.7, 0.2, 0.1] as Dist3 },
            { label: "near a₂", value: [0.1, 0.7, 0.2] as Dist3 },
            { label: "uniform", value: [0.33, 0.33, 0.34] as Dist3 },
          ]}
        />
        <PresetButtonGroup
          label="π_R* presets"
          onSelect={(v) => setTarget(v)}
          options={[
            { label: "target a₁", value: [0.7, 0.2, 0.1] as Dist3 },
            { label: "target a₂", value: [0.2, 0.7, 0.1] as Dist3 },
            { label: "target a₃", value: [0.1, 0.2, 0.7] as Dist3 },
          ]}
        />
      </div>
    </div>
  );
}

function PresetButtonGroup({
  label,
  onSelect,
  options,
}: {
  label: string;
  onSelect: (v: Dist3) => void;
  options: { label: string; value: Dist3 }[];
}) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
        {label}
      </div>
      <div className="flex flex-wrap gap-xs">
        {options.map((opt) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => onSelect(opt.value)}
            className="font-mono text-xs uppercase tracking-wider px-xs py-xs border border-ink-70 hover:bg-paper-95"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
