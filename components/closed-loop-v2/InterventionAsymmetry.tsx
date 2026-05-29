"use client";

import { useState } from "react";

/**
 * The intervention-asymmetry plate — v2.
 *
 * Operates Theorem 9: the unified sensitivity formula. The 2x2
 * site-source taxonomy from apparatus s5.0 made operable. Each cell
 * shows (d theta* / d X) * intensity = closure-amplification * mechanism-partial.
 * Mode A and the fourth-cell scale O(1) in N; individual-scale Modes
 * B and C scale O(1/N).
 *
 * The reader adjusts: intervention intensity in each cell, population
 * size N, and the operator contraction modulus κ_Φ = (β/α)·L_D via its
 * three constituents (R1 under R2's α-strong concavity). The closure
 * amplification factor is 1/(1 - κ_Φ); it diverges as κ_Φ → 1 (the
 * crisis boundary, Theorem 12).
 */

type Mode = "A" | "B-ind" | "C-ind" | "fourth";

interface ModeInfo {
  id: Mode;
  label: string;
  cellLabel: string;
  source: "regulatory" | "individual";
  site: "reward" | "response" | "observation";
  color: string;
  scale: "O(1)" | "O(1/N)";
}

const MODES: ModeInfo[] = [
  {
    id: "A",
    label: "Mode A",
    cellLabel: "regulatory × reward R",
    source: "regulatory",
    site: "reward",
    color: "var(--color-slate)",
    scale: "O(1)",
  },
  {
    id: "B-ind",
    label: "Mode B (individual)",
    cellLabel: "individual × response T",
    source: "individual",
    site: "response",
    color: "var(--color-moss)",
    scale: "O(1/N)",
  },
  {
    id: "C-ind",
    label: "Mode C (individual)",
    cellLabel: "individual × observation O",
    source: "individual",
    site: "observation",
    color: "var(--color-oxblood)",
    scale: "O(1/N)",
  },
  {
    id: "fourth",
    label: "fourth-cell",
    cellLabel: "regulatory × observation O",
    source: "regulatory",
    site: "observation",
    color: "var(--color-fog)",
    scale: "O(1)",
  },
];

export function InterventionAsymmetry() {
  // κ_Φ = (β/α)·L_D, set via its three constituents (R1 under R2).
  const [beta, setBeta] = useState(0.6); // reward smoothness
  const [alpha, setAlpha] = useState(1.0); // strong-concavity modulus
  const [L_D, setL_D] = useState(1.0); // distribution sensitivity
  const [N, setN] = useState(1e4); // population size
  const [intensity, setIntensity] = useState<Record<Mode, number>>({
    A: 0.5,
    "B-ind": 0.5,
    "C-ind": 0.5,
    fourth: 0.5,
  });

  const kappa = (beta / alpha) * L_D;

  // Closure amplification factor: 1/(1 - κ_Φ).
  const amp = 1 / Math.max(1 - kappa, 0.001);

  // Per-mode effect on θ*.
  function effectOf(mode: Mode): number {
    const i = intensity[mode];
    const m = MODES.find((x) => x.id === mode)!;
    const base = amp * i;
    return m.scale === "O(1)" ? base : base / N;
  }

  const effects = MODES.map((m) => ({ ...m, effect: effectOf(m.id) }));
  const maxEffect = Math.max(...effects.map((e) => e.effect), 1e-9);

  // For visualization: bars are normalized to max = 1.0.
  function barWidth(e: number): number {
    return Math.min(e / maxEffect, 1.0) * 100;
  }

  // Layout: 2x2 grid for the four cells.
  const width = 900;
  const height = 480;
  const padX = 80;
  const padY = 80;
  const cellW = (width - 2 * padX) / 2 - 12;
  const cellH = (height - 2 * padY) / 2 - 12;

  // Cells: top-row = regulatory; bottom-row = individual.
  // Columns: 0 = reward, 1 = observation. (Response cell is hidden in
  // this collapsed view; it's the population-coordinated response cell.)
  function cellPosition(mode: ModeInfo): { col: number; row: number } {
    if (mode.id === "A") return { col: 0, row: 0 };
    if (mode.id === "fourth") return { col: 1, row: 0 };
    if (mode.id === "B-ind") return { col: 0, row: 1 };
    return { col: 1, row: 1 }; // C-ind
  }

  function cellXY(mode: ModeInfo): { x: number; y: number } {
    const { col, row } = cellPosition(mode);
    return {
      x: padX + col * (cellW + 24),
      y: padY + row * (cellH + 24),
    };
  }

  return (
    <div className="intervention-asymmetry-container">
      <style>{`
        .intervention-asymmetry-container .axis-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.05em;
          fill: var(--color-ink-70);
        }
        .intervention-asymmetry-container .cell-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.05em;
          fill: var(--color-ink);
        }
      `}</style>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Intervention asymmetry: 2×2 taxonomy with per-cell sensitivity"
        className="w-full max-w-[900px] h-auto"
      >
        {/* Axis-area labels */}
        <text x={padX + cellW / 2} y={padY - 40} textAnchor="middle" className="axis-label">
          SITE: reward R̂
        </text>
        <text x={padX + (cellW + 24) + cellW / 2} y={padY - 40} textAnchor="middle" className="axis-label">
          SITE: observation O
        </text>
        <text
          x={padX - 50} y={padY + cellH / 2}
          textAnchor="middle" className="axis-label"
          transform={`rotate(-90 ${padX - 50} ${padY + cellH / 2})`}
        >
          regulatory source
        </text>
        <text
          x={padX - 50} y={padY + (cellH + 24) + cellH / 2}
          textAnchor="middle" className="axis-label"
          transform={`rotate(-90 ${padX - 50} ${padY + (cellH + 24) + cellH / 2})`}
        >
          individual source
        </text>

        {/* The four cells */}
        {effects.map((cell) => {
          const { x, y } = cellXY(cell);
          const bw = barWidth(cell.effect);
          return (
            <g key={cell.id}>
              {/* Cell border */}
              <rect
                x={x} y={y}
                width={cellW} height={cellH}
                fill="var(--color-paper-95)" stroke="var(--color-ink)" strokeWidth={1}
                fillOpacity={0.3}
              />
              {/* Cell label */}
              <text x={x + 12} y={y + 22} className="cell-label">
                {cell.label}
              </text>
              <text x={x + 12} y={y + 38} className="axis-label">
                {cell.cellLabel}
              </text>
              <text x={x + 12} y={y + 54} className="axis-label">
                scale: {cell.scale}
              </text>

              {/* Sensitivity bar */}
              <text x={x + 12} y={y + 84} className="axis-label">
                ∂θ* / ∂X · intensity:
              </text>
              <rect
                x={x + 12} y={y + 92}
                width={(cellW - 24)} height={20}
                fill="none" stroke="var(--color-ink-70)" strokeWidth={1}
              />
              <rect
                x={x + 12} y={y + 92}
                width={(cellW - 24) * (bw / 100)} height={20}
                fill={cell.color} fillOpacity={0.7}
              />
              <text x={x + 12} y={y + 130} className="axis-label">
                value: {cell.effect.toExponential(2)}
              </text>
            </g>
          );
        })}

        {/* Amplification factor readout */}
        <text x={width / 2} y={height - 20} textAnchor="middle" className="axis-label">
          closure amplification (1 − κ_Φ)⁻¹ = {amp.toFixed(2)}
          {kappa > 0.95 && (
            <tspan fill="var(--color-oxblood)"> · approaching crisis boundary</tspan>
          )}
        </text>
      </svg>

      {/* Computed operator modulus κ_Φ = (β/α)·L_D */}
      <div className="mt-md font-mono text-xs uppercase tracking-wider text-ink-70">
        κ_Φ = (β/α)·L_D
        <span className="ml-sm text-ink">{kappa.toFixed(2)}</span>
        {kappa >= 1 && (
          <span className="ml-sm text-oxblood">contractivity boundary crossed</span>
        )}
      </div>

      {/* Top-level controls */}
      <div className="mt-sm grid grid-cols-1 sm:grid-cols-2 gap-md text-sm">
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            β (reward smoothness){" "}
            <span className="ml-sm text-ink">{beta.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.1}
            max={1.0}
            step={0.05}
            value={beta}
            onChange={(e) => setBeta(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            α (strong concavity){" "}
            <span className="ml-sm text-ink">{alpha.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={2.0}
            step={0.05}
            value={alpha}
            onChange={(e) => setAlpha(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            L_D (distribution sensitivity){" "}
            <span className="ml-sm text-ink">{L_D.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.1}
            max={1.0}
            step={0.05}
            value={L_D}
            onChange={(e) => setL_D(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            N (population size){" "}
            <span className="ml-sm text-ink">10^{Math.log10(N).toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={6}
            step={0.1}
            value={Math.log10(N)}
            onChange={(e) => setN(Math.pow(10, parseFloat(e.target.value)))}
            className="w-full"
          />
        </label>
      </div>

      {/* Per-cell intensity sliders */}
      <div className="mt-md grid grid-cols-1 sm:grid-cols-2 gap-md text-sm">
        {MODES.map((mode) => (
          <label key={mode.id} className="block">
            <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
              {mode.label} intensity{" "}
              <span className="ml-sm text-ink">{intensity[mode.id].toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={intensity[mode.id]}
              onChange={(e) =>
                setIntensity({ ...intensity, [mode.id]: parseFloat(e.target.value) })
              }
              className="w-full"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
