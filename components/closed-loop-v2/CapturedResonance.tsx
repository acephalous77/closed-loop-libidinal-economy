"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The captured-resonance plate — v2.
 *
 * Operates Proposition 6: somatic phase-locking under media coupling.
 * Two oscillators:
 *   φ_b(t) — somatic phase, intrinsic frequency ω_b
 *   φ_m(t) — media-delivery phase, frequency ω_m
 *
 * Coupled dynamics: dφ_b/dt = ω_b + K_bm · sin(φ_m − φ_b)
 *
 * Phase-locking (ψ := φ_m − φ_b → const) occurs iff K_bm > |ω_b − ω_m|.
 *
 * Visualization:
 *   - Two phase dials (body, media) — rotating in real time
 *   - Phase-difference plot ψ(t) over a rolling time window
 *   - Threshold indicator: K_bm vs |Δω| with the locking condition highlighted
 */

interface SimState {
  phi_b: number;
  phi_m: number;
  t: number;
  psiHistory: number[]; // rolling buffer of phase differences
}

const HISTORY_LENGTH = 400;
const DT = 0.05;

function initialState(): SimState {
  return {
    phi_b: 0,
    phi_m: Math.PI / 2,
    t: 0,
    psiHistory: [],
  };
}

function step(
  state: SimState,
  omega_b: number,
  omega_m: number,
  K_bm: number,
): SimState {
  const dPhi_b = omega_b + K_bm * Math.sin(state.phi_m - state.phi_b);
  const dPhi_m = omega_m; // media is exogenous; doesn't respond to body
  const phi_b = (state.phi_b + dPhi_b * DT) % (2 * Math.PI);
  const phi_m = (state.phi_m + dPhi_m * DT) % (2 * Math.PI);
  const psi = ((phi_m - phi_b + 3 * Math.PI) % (2 * Math.PI)) - Math.PI;
  const psiHistory = [...state.psiHistory, psi].slice(-HISTORY_LENGTH);
  return { phi_b, phi_m, t: state.t + DT, psiHistory };
}

export function CapturedResonance() {
  const [omega_b, setOmega_b] = useState(1.0);
  const [omega_m, setOmega_m] = useState(1.4);
  const [K_bm, setK_bm] = useState(0.6);
  const [state, setState] = useState<SimState>(() => initialState());
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const deltaOmega = Math.abs(omega_b - omega_m);
  const isLocked = K_bm > deltaOmega;

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setState((s) => step(s, omega_b, omega_m, K_bm));
    }, 33);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, omega_b, omega_m, K_bm]);

  function reset() {
    setRunning(false);
    setState(initialState());
  }

  // Phase dials.
  const dialR = 45;
  const dialCenter1 = { x: 110, y: 100 };
  const dialCenter2 = { x: 280, y: 100 };

  function PhaseDial({
    cx, cy, phi, label, color,
  }: { cx: number; cy: number; phi: number; label: string; color: string }) {
    const handX = cx + Math.cos(phi) * dialR;
    const handY = cy + Math.sin(phi) * dialR;
    return (
      <g>
        <circle cx={cx} cy={cy} r={dialR} fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={1.5} />
        {/* Tick marks at 0, 90, 180, 270 */}
        {[0, 90, 180, 270].map((deg) => {
          const a = (deg * Math.PI) / 180;
          const tx1 = cx + Math.cos(a) * dialR;
          const ty1 = cy + Math.sin(a) * dialR;
          const tx2 = cx + Math.cos(a) * (dialR - 4);
          const ty2 = cy + Math.sin(a) * (dialR - 4);
          return <line key={deg} x1={tx1} y1={ty1} x2={tx2} y2={ty2} stroke="var(--color-ink-70)" strokeWidth={1} />;
        })}
        {/* Hand */}
        <line x1={cx} y1={cy} x2={handX} y2={handY} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={3} fill={color} />
        {/* Label */}
        <text x={cx} y={cy + dialR + 18} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.05em" fill="var(--color-ink-70)">
          {label}
        </text>
      </g>
    );
  }

  // Phase-difference plot.
  const width = 900;
  const height = 320;
  const plotX0 = 420;
  const plotY0 = 28;
  const plotW = width - plotX0 - 30;
  const plotH = 180;

  const yOfPsi = (psi: number) => plotY0 + ((Math.PI - psi) / (2 * Math.PI)) * plotH;
  const xOfIdx = (i: number) => plotX0 + (i / Math.max(HISTORY_LENGTH - 1, 1)) * plotW;

  const psiPath = state.psiHistory
    .map((psi, i) => `${i === 0 ? "M" : "L"} ${xOfIdx(i).toFixed(2)} ${yOfPsi(psi).toFixed(2)}`)
    .join(" ");

  // Threshold visualization.
  const thresholdBarY = 250;
  const thresholdBarH = 24;
  const maxScale = 3.0;
  const widthOfVal = (v: number) => (v / maxScale) * 280;

  return (
    <div className="captured-resonance-container">
      <style>{`
        .captured-resonance-container .axis-label {
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
        aria-label="Captured resonance: phase-locking between body and media oscillators"
        className="w-full max-w-[900px] h-auto"
      >
        {/* Two dials */}
        <PhaseDial cx={dialCenter1.x} cy={dialCenter1.y} phi={state.phi_b} label="φ_b (body)" color="var(--color-moss)" />
        <PhaseDial cx={dialCenter2.x} cy={dialCenter2.y} phi={state.phi_m} label="φ_m (media)" color="var(--color-oxblood)" />

        {/* Coupling indicator between dials */}
        <text x={195} y={70} textAnchor="middle" className="axis-label">
          K_bm = {K_bm.toFixed(2)}
        </text>
        <line x1={155} y1={100} x2={235} y2={100} stroke="var(--color-ink-70)" strokeWidth={1.5} strokeDasharray="2 3" />

        {/* Threshold bar — visualizes K_bm vs |Δω| */}
        <g transform={`translate(20 ${thresholdBarY})`}>
          <text x={0} y={-8} className="axis-label">
            phase-locking condition: K_bm {isLocked ? ">" : "≤"} |Δω| → {isLocked ? "LOCKED" : "DRIFT"}
          </text>
          {/* |Δω| bar (cream) */}
          <rect x={0} y={0} width={widthOfVal(deltaOmega)} height={thresholdBarH} fill="var(--color-paper-85)" />
          <text x={widthOfVal(deltaOmega) + 6} y={thresholdBarH / 2 + 4} className="axis-label">
            |Δω| = {deltaOmega.toFixed(2)}
          </text>
          {/* K_bm bar (oxblood or moss based on lock) */}
          <rect
            x={0}
            y={thresholdBarH + 4}
            width={widthOfVal(K_bm)}
            height={thresholdBarH}
            fill={isLocked ? "var(--color-moss)" : "var(--color-oxblood)"}
            fillOpacity={0.5}
          />
          <text x={widthOfVal(K_bm) + 6} y={thresholdBarH + 4 + thresholdBarH / 2 + 4} className="axis-label">
            K_bm = {K_bm.toFixed(2)}
          </text>
        </g>

        {/* Phase-difference plot */}
        <g>
          {/* Plot border */}
          <line x1={plotX0} y1={plotY0 + plotH} x2={plotX0 + plotW} y2={plotY0 + plotH} stroke="var(--color-ink)" strokeWidth={1} />
          <line x1={plotX0} y1={plotY0} x2={plotX0} y2={plotY0 + plotH} stroke="var(--color-ink)" strokeWidth={1} />
          {/* Y gridlines at ±π/2, 0 */}
          {[-Math.PI, -Math.PI / 2, 0, Math.PI / 2, Math.PI].map((v) => (
            <g key={v}>
              <line x1={plotX0} y1={yOfPsi(v)} x2={plotX0 + plotW} y2={yOfPsi(v)} stroke="var(--color-paper-85)" strokeWidth={0.5} />
              <text x={plotX0 - 6} y={yOfPsi(v) + 4} textAnchor="end" className="axis-label">
                {v === 0 ? "0" : v === Math.PI ? "π" : v === -Math.PI ? "-π" : v === Math.PI / 2 ? "π/2" : "-π/2"}
              </text>
            </g>
          ))}
          {/* Path */}
          <path d={psiPath} fill="none" stroke="var(--color-ink)" strokeWidth={1.5} />
          {/* Y-axis label */}
          <text x={plotX0 + plotW / 2} y={plotY0 - 8} textAnchor="middle" className="axis-label">
            phase difference ψ(t) = φ_m − φ_b
          </text>
        </g>
      </svg>

      {/* Readouts */}
      <div className="grid grid-cols-4 gap-md mt-md font-mono text-sm">
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">|Δω|</div>
          <div className="text-ink">{deltaOmega.toFixed(3)}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">K_bm</div>
          <div className="text-ink">{K_bm.toFixed(3)}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">regime</div>
          <div className={isLocked ? "text-moss" : "text-oxblood"}>
            {isLocked ? "phase-locked" : "drift"}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">sim time</div>
          <div className="text-ink">{state.t.toFixed(1)}s</div>
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
            ω_b (body) <span className="ml-sm text-ink">{omega_b.toFixed(2)}</span>
          </div>
          <input type="range" min={0.1} max={3} step={0.05} value={omega_b}
            onChange={(e) => setOmega_b(parseFloat(e.target.value))} className="w-full" />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            ω_m (media) <span className="ml-sm text-ink">{omega_m.toFixed(2)}</span>
          </div>
          <input type="range" min={0.1} max={3} step={0.05} value={omega_m}
            onChange={(e) => setOmega_m(parseFloat(e.target.value))} className="w-full" />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            K_bm (coupling) <span className="ml-sm text-ink">{K_bm.toFixed(2)}</span>
          </div>
          <input type="range" min={0} max={2} step={0.02} value={K_bm}
            onChange={(e) => setK_bm(parseFloat(e.target.value))} className="w-full" />
        </label>
      </div>
    </div>
  );
}
