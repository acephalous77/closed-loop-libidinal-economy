"use client";

import { useState } from "react";

/**
 * The crisis-boundary plate -- v2.
 *
 * Operates Theorem 12 (apparatus s10). At the contractivity boundary
 * kappa_Phi = 1, three generic codimension-1 bifurcations can occur:
 *   saddle-node:     stable + unstable fixed points collide
 *   period-doubling: stable fixed point becomes unstable; 2-cycle
 *   Neimark-Sacker:  invariant circle appears (Hopf-like)
 * The pitchfork is NON-generic: it requires Phi to commute with a
 * Z_2 symmetry, which symmetric cohorts can supply. Shown here as the
 * fourth, symmetry-protected case.
 *
 * Visualization: bifurcation diagram for the selected regime. The
 * x-axis is the control parameter mu = kappa_Phi - 1; the y-axis
 * is the state (xi for the 1-D normal forms, or the amplitude for
 * Neimark-Sacker).
 *
 * Stable branches render as solid warm-ink curves; unstable as
 * dashed oxblood. The user picks which of the four regimes to view.
 */

type Regime = "saddle-node" | "pitchfork" | "period-doubling" | "neimark-sacker";

const REGIMES: { id: Regime; label: string; description: string }[] = [
  {
    id: "saddle-node",
    label: "Saddle-node",
    description: "Two fixed points collide and annihilate. Above threshold: no fixed points; iteration diverges or jumps.",
  },
  {
    id: "pitchfork",
    label: "Pitchfork (Z₂)",
    description: "Non-generic: requires Φ to commute with a ℤ₂ symmetry, which symmetric cohorts can supply. The stable point becomes unstable; two new symmetric stable points appear.",
  },
  {
    id: "period-doubling",
    label: "Period-doubling",
    description: "Stable fixed point becomes unstable; stable 2-cycle appears. Cascade to chaos.",
  },
  {
    id: "neimark-sacker",
    label: "Neimark-Sacker",
    description: "Invariant circle appears with amplitude sqrt(mu) (Hopf-like).",
  },
];

// Compute bifurcation curves for each regime as a list of (mu, xi)
// segments. Each segment is { points: [{x: mu, y: xi}], stable: bool }.
function bifurcationCurves(regime: Regime): {
  points: { mu: number; xi: number }[];
  stable: boolean;
  label?: string;
}[] {
  const muMin = -1;
  const muMax = 1;
  const N = 100;
  const segments: { points: { mu: number; xi: number }[]; stable: boolean; label?: string }[] = [];

  switch (regime) {
    case "saddle-node": {
      // xi_{n+1} = xi_n + mu + xi^2 — fixed points xi = +-sqrt(-mu) for mu < 0.
      const upper: { mu: number; xi: number }[] = [];
      const lower: { mu: number; xi: number }[] = [];
      for (let i = 0; i <= N; i++) {
        const mu = muMin + (i / N) * (0 - muMin);
        const xi = Math.sqrt(Math.max(-mu, 0));
        upper.push({ mu, xi });
        lower.push({ mu, xi: -xi });
      }
      segments.push({ points: upper, stable: true, label: "stable" });
      segments.push({ points: lower, stable: false, label: "unstable" });
      break;
    }
    case "pitchfork": {
      // xi_{n+1} = (1+mu) xi + xi^3 (subcritical) — actually use:
      // dot xi = mu xi - xi^3 (supercritical pitchfork) for clarity.
      // Fixed points: xi = 0 (always); xi = +-sqrt(mu) for mu > 0.
      const center: { mu: number; xi: number }[] = [];
      const upper: { mu: number; xi: number }[] = [];
      const lower: { mu: number; xi: number }[] = [];
      for (let i = 0; i <= N; i++) {
        const mu = muMin + (i / N) * (muMax - muMin);
        center.push({ mu, xi: 0 });
        if (mu > 0) {
          const xi = Math.sqrt(mu);
          upper.push({ mu, xi });
          lower.push({ mu, xi: -xi });
        }
      }
      // Center branch: stable for mu < 0; unstable for mu > 0.
      const centerStable = center.filter((p) => p.mu < 0);
      const centerUnstable = center.filter((p) => p.mu >= 0);
      segments.push({ points: centerStable, stable: true, label: "stable" });
      segments.push({ points: centerUnstable, stable: false });
      segments.push({ points: upper, stable: true });
      segments.push({ points: lower, stable: true });
      break;
    }
    case "period-doubling": {
      // xi_{n+1} = -(1+mu) xi - xi^3.
      // Fixed point xi = 0 stable for mu < 0, unstable for mu > 0.
      // 2-cycle for mu > 0 at xi = +-sqrt(mu).
      const center: { mu: number; xi: number }[] = [];
      const upper: { mu: number; xi: number }[] = [];
      const lower: { mu: number; xi: number }[] = [];
      for (let i = 0; i <= N; i++) {
        const mu = muMin + (i / N) * (muMax - muMin);
        center.push({ mu, xi: 0 });
        if (mu > 0) {
          const xi = Math.sqrt(mu);
          upper.push({ mu, xi });
          lower.push({ mu, xi: -xi });
        }
      }
      const centerStable = center.filter((p) => p.mu < 0);
      const centerUnstable = center.filter((p) => p.mu >= 0);
      segments.push({ points: centerStable, stable: true, label: "stable" });
      segments.push({ points: centerUnstable, stable: false });
      segments.push({ points: upper, stable: true, label: "2-cycle" });
      segments.push({ points: lower, stable: true });
      // Visualize "cascade" by adding successively smaller 4-cycle hints.
      if (true) {
        const upper4: { mu: number; xi: number }[] = [];
        const lower4: { mu: number; xi: number }[] = [];
        for (let i = 0; i <= N; i++) {
          const mu = muMin + (i / N) * (muMax - muMin);
          if (mu > 0.4) {
            const xi = Math.sqrt(mu * 1.4);
            upper4.push({ mu, xi });
            lower4.push({ mu, xi: -xi });
          }
        }
        segments.push({ points: upper4, stable: true });
        segments.push({ points: lower4, stable: true });
      }
      break;
    }
    case "neimark-sacker": {
      // Invariant circle amplitude r = sqrt(mu) for mu > 0.
      const fixed: { mu: number; xi: number }[] = [];
      const circleUpper: { mu: number; xi: number }[] = [];
      const circleLower: { mu: number; xi: number }[] = [];
      for (let i = 0; i <= N; i++) {
        const mu = muMin + (i / N) * (muMax - muMin);
        fixed.push({ mu, xi: 0 });
        if (mu > 0) {
          const r = Math.sqrt(mu);
          circleUpper.push({ mu, xi: r });
          circleLower.push({ mu, xi: -r });
        }
      }
      const fixedStable = fixed.filter((p) => p.mu < 0);
      const fixedUnstable = fixed.filter((p) => p.mu >= 0);
      segments.push({ points: fixedStable, stable: true, label: "fixed" });
      segments.push({ points: fixedUnstable, stable: false });
      segments.push({ points: circleUpper, stable: true, label: "circle amplitude" });
      segments.push({ points: circleLower, stable: true });
      break;
    }
  }

  return segments;
}

export function CrisisBoundary() {
  const [regime, setRegime] = useState<Regime>("saddle-node");

  const curves = bifurcationCurves(regime);
  const currentRegime = REGIMES.find((r) => r.id === regime)!;

  // Plot dimensions.
  const width = 900;
  const height = 380;
  const padX = 80;
  const padY = 30;
  const plotW = width - 2 * padX;
  const plotH = height - 2 * padY;

  const muMin = -1;
  const muMax = 1;
  const xiMin = -1.5;
  const xiMax = 1.5;

  const xOf = (mu: number) => padX + ((mu - muMin) / (muMax - muMin)) * plotW;
  const yOf = (xi: number) => padY + (1 - (xi - xiMin) / (xiMax - xiMin)) * plotH;

  function pathOf(points: { mu: number; xi: number }[]): string {
    if (points.length === 0) return "";
    return points.map((p, i) => `${i === 0 ? "M" : "L"} ${xOf(p.mu).toFixed(2)} ${yOf(p.xi).toFixed(2)}`).join(" ");
  }

  return (
    <div className="crisis-boundary-container">
      <style>{`
        .crisis-boundary-container .axis-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.05em;
          fill: var(--color-ink-70);
        }
      `}</style>

      {/* Regime selector */}
      <div className="mb-md flex flex-wrap gap-xs">
        {REGIMES.map((r) => (
          <button
            key={r.id}
            type="button"
            aria-pressed={regime === r.id}
            onClick={() => setRegime(r.id)}
            className={`font-mono text-xs uppercase tracking-wider px-sm py-xs border ${
              regime === r.id
                ? "border-oxblood text-oxblood"
                : "border-ink-70 text-ink-70 hover:border-ink hover:text-ink"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <p className="text-base text-ink-90 mb-md max-w-prose">
        {currentRegime.description}
      </p>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Bifurcation diagram: ${currentRegime.label}`}
        className="w-full max-w-[900px] h-auto"
      >
        {/* Plot border */}
        <line x1={padX} y1={padY + plotH} x2={padX + plotW} y2={padY + plotH} stroke="var(--color-ink)" strokeWidth={1} />
        <line x1={padX} y1={padY} x2={padX} y2={padY + plotH} stroke="var(--color-ink)" strokeWidth={1} />

        {/* Threshold line at mu = 0 (the bifurcation point) */}
        <line
          x1={xOf(0)} y1={padY} x2={xOf(0)} y2={padY + plotH}
          stroke="var(--color-oxblood)" strokeWidth={1} strokeDasharray="3 4"
        />
        <text x={xOf(0) + 6} y={padY + 14} className="axis-label" fill="var(--color-oxblood)">
          bifurcation (μ = 0, κ_Φ = 1)
        </text>

        {/* xi = 0 line */}
        <line
          x1={padX} y1={yOf(0)} x2={padX + plotW} y2={yOf(0)}
          stroke="var(--color-paper-85)" strokeWidth={0.5}
        />

        {/* Curves */}
        {curves.map((c, i) => (
          <path
            key={i}
            d={pathOf(c.points)}
            fill="none"
            stroke={c.stable ? "var(--color-ink)" : "var(--color-oxblood)"}
            strokeWidth={c.stable ? 2 : 1.5}
            strokeDasharray={c.stable ? "0" : "4 3"}
          />
        ))}

        {/* Axis labels */}
        <text x={padX + plotW / 2} y={height - 4} textAnchor="middle" className="axis-label">
          μ = κ_Φ − 1 (control parameter)
        </text>
        <text
          x={14} y={padY + plotH / 2}
          textAnchor="middle" className="axis-label"
          transform={`rotate(-90 14 ${padY + plotH / 2})`}
        >
          state (xi, amplitude, etc.)
        </text>

        {/* Legend */}
        <g transform={`translate(${padX + plotW - 220} ${padY + 10})`}>
          <line x1={0} y1={6} x2={20} y2={6} stroke="var(--color-ink)" strokeWidth={2} />
          <text x={26} y={10} className="axis-label">stable branch</text>
          <line x1={0} y1={26} x2={20} y2={26} stroke="var(--color-oxblood)" strokeWidth={1.5} strokeDasharray="4 3" />
          <text x={26} y={30} className="axis-label">unstable branch</text>
        </g>
      </svg>

      <div className="grid grid-cols-2 gap-md mt-md font-mono text-sm">
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">selected regime</div>
          <div className="text-ink">{currentRegime.label}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">empirical signature</div>
          <div className="text-ink text-xs">
            {regime === "saddle-node"
              ? "platform crises, algorithm-rebuild events"
              : regime === "pitchfork"
              ? "polarized stable regimes"
              : regime === "period-doubling"
              ? "oscillating then chaotic engagement"
              : "rage-bait cycles, viral rhythms"}
          </div>
        </div>
      </div>
    </div>
  );
}
