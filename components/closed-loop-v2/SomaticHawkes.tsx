"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The somatic-Hawkes plate -- v2.
 *
 * Operates s3.5 Definition 3.1: multi-mark Hawkes process across the
 * four registers with cross-register coupling.
 *
 *   lambda^k(t) = lambda_0^k + sum_l alpha_kl * integral_0^t kappa(t-s) dN_s^l
 *
 * Visualization: four horizontal tracks (S, C, P, K). Events render
 * as vertical ticks; intensity functions overlay as filled curves.
 * The reader sees cascades visibly when off-diagonal alpha_kl is
 * raised: an event on track S raises intensity on tracks C, P, K.
 */

type Register = "S" | "C" | "P" | "K";
const REGISTERS: Register[] = ["S", "C", "P", "K"];
const REGISTER_COLORS: Record<Register, string> = {
  S: "var(--color-ink)",
  C: "var(--color-slate)",
  P: "var(--color-oxblood)",
  K: "var(--color-moss)",
};

interface Event {
  t: number;
  reg: Register;
}

interface SimState {
  t: number;
  events: Event[]; // rolling event history
}

const WINDOW_SIZE = 60; // seconds of event history shown
const DT = 0.05;

function initialState(): SimState {
  return { t: 0, events: [] };
}

// Exponential kernel kappa(s) = exp(-s/tau_k).
function kernel(s: number, tauKernel: number): number {
  if (s < 0) return 0;
  return Math.exp(-s / tauKernel);
}

// Intensity at time t for register r given event history.
function intensity(
  t: number,
  r: Register,
  events: Event[],
  baseline: number,
  alpha: Record<Register, Record<Register, number>>,
  tauKernel: number,
): number {
  let sum = baseline;
  for (const ev of events) {
    if (ev.t >= t) continue;
    const dt = t - ev.t;
    if (dt > 5 * tauKernel) continue; // skip negligible contributions
    sum += alpha[r][ev.reg] * kernel(dt, tauKernel);
  }
  return Math.max(sum, 0);
}

function step(
  state: SimState,
  baseline: number,
  alpha: Record<Register, Record<Register, number>>,
  tauKernel: number,
): SimState {
  const newT = state.t + DT;
  const newEvents: Event[] = [];

  for (const r of REGISTERS) {
    const lambda = intensity(newT, r, state.events, baseline, alpha, tauKernel);
    if (Math.random() < lambda * DT) {
      newEvents.push({ t: newT, reg: r });
    }
  }

  // Drop events older than the visible window.
  const allEvents = [...state.events, ...newEvents].filter((e) => newT - e.t < WINDOW_SIZE);

  return { t: newT, events: allEvents };
}

export function SomaticHawkes() {
  const [baseline, setBaseline] = useState(0.5);
  const [crossCoupling, setCrossCoupling] = useState(0.4); // off-diagonal alpha
  const [selfExcitation, setSelfExcitation] = useState(0.6); // diagonal alpha
  const [tauKernel, setTauKernel] = useState(1.0);
  const [state, setState] = useState<SimState>(() => initialState());
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Build alpha matrix from the two scalar parameters.
  const alpha: Record<Register, Record<Register, number>> = (() => {
    const m: Record<Register, Record<Register, number>> = {} as Record<
      Register,
      Record<Register, number>
    >;
    for (const r of REGISTERS) {
      m[r] = {} as Record<Register, number>;
      for (const c of REGISTERS) {
        m[r][c] = r === c ? selfExcitation : crossCoupling;
      }
    }
    return m;
  })();

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setState((s) => step(s, baseline, alpha, tauKernel));
    }, 33);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, baseline, alpha, tauKernel]);

  function reset() {
    setRunning(false);
    setState(initialState());
  }

  // Plot dimensions.
  const width = 900;
  const height = 380;
  const padX = 60;
  const padY = 30;
  const plotW = width - 2 * padX;
  const trackH = 70;
  const trackGap = 6;

  const tWindowStart = Math.max(0, state.t - WINDOW_SIZE);
  const xOfT = (t: number) =>
    padX + ((t - tWindowStart) / WINDOW_SIZE) * plotW;

  // Compute intensity curve for a register on the visible window.
  function intensityCurve(r: Register): { x: number; y: number }[] {
    const points: { x: number; y: number }[] = [];
    const N = 80;
    for (let i = 0; i <= N; i++) {
      const t = tWindowStart + (i / N) * WINDOW_SIZE;
      const lam = intensity(t, r, state.events, baseline, alpha, tauKernel);
      points.push({ t, lam, x: xOfT(t), y: 0 } as never);
    }
    // Normalize intensity to track height.
    const maxLam = Math.max(...points.map((p) => (p as never as { lam: number }).lam), 1.0);
    return points.map((p) => ({
      x: (p as never as { x: number }).x,
      y: (1 - ((p as never as { lam: number }).lam / Math.max(maxLam, 0.1))) * (trackH - 8) + 4,
    }));
  }

  // Branching ratio for the stability readout.
  // Per s3.5, stability iff rho(alpha) * integral kappa < 1.
  // For our symmetric alpha matrix (diag = selfExcitation, off-diag = crossCoupling)
  // the eigenvalues are selfExcitation + 3*crossCoupling and selfExcitation - crossCoupling.
  const integralK = tauKernel; // integral_0^inf exp(-s/tau_k) ds = tau_k
  const rhoAlpha = selfExcitation + 3 * crossCoupling;
  const branchingRatio = rhoAlpha * integralK;
  const stable = branchingRatio < 1;

  return (
    <div className="somatic-hawkes-container">
      <style>{`
        .somatic-hawkes-container .axis-label {
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
        aria-label="Somatic Hawkes: event raster across four registers with intensity curves"
        className="w-full max-w-[900px] h-auto"
      >
        {/* Per-register tracks */}
        {REGISTERS.map((reg, i) => {
          const trackY = padY + i * (trackH + trackGap);
          const regEvents = state.events.filter((e) => e.reg === reg);
          const curve = intensityCurve(reg);
          const curvePath =
            curve.length === 0
              ? ""
              : curve.map((p, j) => `${j === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${(trackY + p.y).toFixed(2)}`).join(" ");
          const fillPath = curvePath
            ? curvePath + ` L ${(padX + plotW).toFixed(2)} ${(trackY + trackH).toFixed(2)} L ${padX.toFixed(2)} ${(trackY + trackH).toFixed(2)} Z`
            : "";
          return (
            <g key={reg}>
              {/* Track background */}
              <rect
                x={padX}
                y={trackY}
                width={plotW}
                height={trackH}
                fill="var(--color-paper-95)"
                fillOpacity={0.3}
                stroke="var(--color-ink-70)"
                strokeWidth={0.5}
              />
              {/* Intensity curve fill */}
              {fillPath && (
                <path
                  d={fillPath}
                  fill={REGISTER_COLORS[reg]}
                  fillOpacity={0.15}
                />
              )}
              {/* Intensity curve line */}
              {curvePath && (
                <path d={curvePath} fill="none" stroke={REGISTER_COLORS[reg]} strokeWidth={1.2} />
              )}
              {/* Events as vertical ticks */}
              {regEvents.map((ev, idx) => (
                <line
                  key={idx}
                  x1={xOfT(ev.t)}
                  y1={trackY + trackH - 16}
                  x2={xOfT(ev.t)}
                  y2={trackY + trackH - 2}
                  stroke={REGISTER_COLORS[reg]}
                  strokeWidth={1.5}
                />
              ))}
              {/* Track label */}
              <text x={padX - 10} y={trackY + trackH / 2 + 4} textAnchor="end" className="axis-label">
                {reg}
              </text>
            </g>
          );
        })}

        {/* X-axis */}
        <line
          x1={padX}
          y1={padY + 4 * (trackH + trackGap) - trackGap}
          x2={padX + plotW}
          y2={padY + 4 * (trackH + trackGap) - trackGap}
          stroke="var(--color-ink)"
          strokeWidth={1}
        />
        <text
          x={padX + plotW / 2}
          y={padY + 4 * (trackH + trackGap) + 10}
          textAnchor="middle"
          className="axis-label"
        >
          time (sliding window — {WINDOW_SIZE.toFixed(0)} s)
        </text>
      </svg>

      {/* Readouts */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-md mt-md font-mono text-sm">
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">events in window</div>
          <div className="text-ink">{state.events.length}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">branching ratio</div>
          <div className="text-ink">{branchingRatio.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">stability</div>
          <div className={stable ? "text-moss" : "text-oxblood"}>
            {stable ? "stable" : "supercritical"}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-md flex flex-wrap gap-sm items-center">
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          className="font-mono text-xs uppercase tracking-wider px-sm py-xs border border-ink hover:bg-paper-95"
        >
          {running ? "[pause]" : "[play]"}
        </button>
        <button
          type="button"
          onClick={reset}
          className="font-mono text-xs uppercase tracking-wider px-sm py-xs border border-ink hover:bg-paper-95"
        >
          reset
        </button>
      </div>

      <div className="mt-md grid grid-cols-1 sm:grid-cols-2 gap-md text-sm">
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            baseline lambda_0{" "}
            <span className="ml-sm text-ink">{baseline.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={2}
            step={0.05}
            value={baseline}
            onChange={(e) => setBaseline(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            self-excitation (alpha diag){" "}
            <span className="ml-sm text-ink">{selfExcitation.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={1.5}
            step={0.05}
            value={selfExcitation}
            onChange={(e) => setSelfExcitation(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            cross-coupling (alpha off-diag){" "}
            <span className="ml-sm text-ink">{crossCoupling.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={1.5}
            step={0.05}
            value={crossCoupling}
            onChange={(e) => setCrossCoupling(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            kernel timescale tau_k{" "}
            <span className="ml-sm text-ink">{tauKernel.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.1}
            max={3}
            step={0.05}
            value={tauKernel}
            onChange={(e) => setTauKernel(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
      </div>
    </div>
  );
}
