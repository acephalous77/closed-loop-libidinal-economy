"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The libidinal-routing plate -- v2.
 *
 * Operates Proposition 7': the four registers (S, C, P, K) become
 * dependently distributed under closed-loop joint observation. Off-
 * diagonal mutual information climbs from zero (factorizing prior)
 * to a saturated coupling pattern as the closure converges.
 *
 * Visualization:
 *   4x4 heatmap of mutual information I(u^i; u^j). Diagonal entries
 *   show register-level entropy (cream/quiet). Off-diagonals show
 *   coupling strength (cream to oxblood). The reader can scrub the
 *   time slider to see the matrix form over closure-convergence time.
 *
 * Each pair has a characteristic coupling rate. Typical platform-
 * induced patterns: S-C and S-K couple quickly (somatic-cognitive,
 * somatic-kinaesthetic); P (political) couples last.
 */

type Register = "S" | "C" | "P" | "K";
const REGISTERS: Register[] = ["S", "C", "P", "K"];
const REGISTER_LABELS: Record<Register, string> = {
  S: "somatic",
  C: "cognitive",
  P: "political",
  K: "kinaesthetic",
};

// Coupling rates for off-diagonal pairs. Higher = couples faster.
// Modeled as a symmetric 4x4 matrix.
const COUPLING_RATES: Record<string, number> = {
  "SC": 0.20, // somatic-cognitive: fast (engagement-cognition coupling)
  "SK": 0.18, // somatic-kinaesthetic: fast (somatic-kin coupling)
  "CK": 0.14, // cognitive-kinaesthetic: medium
  "SP": 0.08, // somatic-political: slow
  "CP": 0.10, // cognitive-political: medium-slow
  "PK": 0.06, // political-kinaesthetic: slowest
};

function key(a: Register, b: Register): string {
  return a < b ? a + b : b + a;
}

function couplingRate(a: Register, b: Register): number {
  if (a === b) return 0;
  return COUPLING_RATES[key(a, b)] ?? 0.1;
}

// MI saturation values (the asymptote each pair approaches under closure).
const MI_SATURATION: Record<string, number> = {
  "SC": 0.95,
  "SK": 0.90,
  "CK": 0.80,
  "SP": 0.70,
  "CP": 0.75,
  "PK": 0.60,
};

function miSaturation(a: Register, b: Register): number {
  if (a === b) return 0;
  return MI_SATURATION[key(a, b)] ?? 0.7;
}

// MI as a function of closure-convergence time t.
// MI(t) = saturation * (1 - exp(-rate * t)).
function miAt(t: number, a: Register, b: Register): number {
  if (a === b) {
    // Diagonal: register-level entropy (constant for the plot).
    return 0.5;
  }
  const r = couplingRate(a, b);
  const sat = miSaturation(a, b);
  return sat * (1 - Math.exp(-r * t));
}

export function LibidinalRouting() {
  const [t, setT] = useState(0);
  const [running, setRunning] = useState(false);
  const autoMaxT = 60;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setT((prev) => {
        if (prev >= autoMaxT) {
          setRunning(false);
          return prev;
        }
        return prev + 0.5;
      });
    }, 50);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, autoMaxT]);

  function reset() {
    setRunning(false);
    setT(0);
  }

  // Plot dimensions.
  const width = 900;
  const height = 420;
  const gridX = 200;
  const gridY = 60;
  const cellSize = 70;
  const gridW = cellSize * 4;

  // Color: cream (low MI) to oxblood (high MI). Use HSL interpolation
  // through the design palette. Implementation: opacity over oxblood.
  function cellColor(value: number): { fill: string; fillOpacity: number } {
    return {
      fill: "var(--color-oxblood)",
      fillOpacity: 0.08 + value * 0.7,
    };
  }

  return (
    <div className="libidinal-routing-container">
      <style>{`
        .libidinal-routing-container .axis-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.05em;
          fill: var(--color-ink-70);
        }
        .libidinal-routing-container .reg-label {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          fill: var(--color-ink);
        }
        .libidinal-routing-container .cell-value {
          font-family: var(--font-mono);
          font-size: 12px;
          fill: var(--color-ink);
        }
      `}</style>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Libidinal routing: 4x4 mutual information matrix between user registers"
        className="w-full max-w-[900px] h-auto"
      >
        {/* Title */}
        <text x={gridX + gridW / 2} y={32} textAnchor="middle" className="axis-label">
          mutual information I(u^i ; u^j) across the four registers
        </text>

        {/* Column headers (top) */}
        {REGISTERS.map((reg, i) => (
          <g key={`col-${reg}`}>
            <text
              x={gridX + i * cellSize + cellSize / 2}
              y={gridY - 24}
              textAnchor="middle"
              className="reg-label"
            >
              {reg}
            </text>
            <text
              x={gridX + i * cellSize + cellSize / 2}
              y={gridY - 10}
              textAnchor="middle"
              className="axis-label"
            >
              {REGISTER_LABELS[reg]}
            </text>
          </g>
        ))}

        {/* Row labels (left) */}
        {REGISTERS.map((reg, i) => (
          <g key={`row-${reg}`}>
            <text
              x={gridX - 12}
              y={gridY + i * cellSize + cellSize / 2 - 4}
              textAnchor="end"
              className="reg-label"
            >
              {reg}
            </text>
            <text
              x={gridX - 12}
              y={gridY + i * cellSize + cellSize / 2 + 12}
              textAnchor="end"
              className="axis-label"
            >
              {REGISTER_LABELS[reg]}
            </text>
          </g>
        ))}

        {/* Cells */}
        {REGISTERS.flatMap((rowReg, i) =>
          REGISTERS.map((colReg, j) => {
            const value = miAt(t, rowReg, colReg);
            const color = cellColor(value);
            const isDiag = i === j;
            const x = gridX + j * cellSize;
            const y = gridY + i * cellSize;
            return (
              <g key={`${rowReg}-${colReg}`}>
                <rect
                  x={x}
                  y={y}
                  width={cellSize}
                  height={cellSize}
                  fill={isDiag ? "var(--color-paper-85)" : color.fill}
                  fillOpacity={isDiag ? 0.4 : color.fillOpacity}
                  stroke="var(--color-ink)"
                  strokeWidth={0.5}
                />
                <text
                  x={x + cellSize / 2}
                  y={y + cellSize / 2 + 4}
                  textAnchor="middle"
                  className="cell-value"
                >
                  {isDiag ? "—" : value.toFixed(2)}
                </text>
              </g>
            );
          })
        )}

        {/* Legend (right of grid) */}
        <g transform={`translate(${gridX + gridW + 50} ${gridY})`}>
          <text x={0} y={-10} className="axis-label">
            scale (off-diagonals)
          </text>
          {[0, 0.25, 0.5, 0.75, 1.0].map((v, i) => {
            const color = cellColor(v);
            return (
              <g key={v} transform={`translate(0 ${i * 28})`}>
                <rect width={28} height={20} fill={color.fill} fillOpacity={color.fillOpacity} stroke="var(--color-ink)" strokeWidth={0.5} />
                <text x={38} y={14} className="axis-label">
                  {v.toFixed(2)}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Readouts */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-md mt-md font-mono text-sm">
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">closure time t</div>
          <div className="text-ink">{t.toFixed(1)}</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">fastest pair</div>
          <div className="text-ink">S-C (rate {COUPLING_RATES["SC"]})</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ink-70 mb-xs">slowest pair</div>
          <div className="text-ink">P-K (rate {COUPLING_RATES["PK"]})</div>
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

      <div className="mt-md text-sm">
        <label className="block">
          <div className="font-mono text-xs uppercase tracking-wider text-ink-70 mb-xs">
            closure-convergence time t (scrub){" "}
            <span className="ml-sm text-ink">{t.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={autoMaxT}
            step={0.5}
            value={t}
            onChange={(e) => setT(parseFloat(e.target.value))}
            className="w-full"
          />
        </label>
      </div>
    </div>
  );
}
