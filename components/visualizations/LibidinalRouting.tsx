"use client";

import { useState } from "react";

/**
 * Libidinal routing — mutual information across the four registers
 * (Subject, Citizen, Person, Consumer) under three regimes. Adapted
 * from the MutualInfo panel in the sim artifact; standalone with a
 * regime picker rather than a live trace.
 *
 * Off-diagonal cells = I(u^i; u^j) for i ≠ j. Under the closed loop,
 * off-diagonal mass concentrates: the four registers become
 * statistically redundant — the dividual condition H(u | y_{1:t}) → 0.
 */

const REGISTERS = [
  { id: "S", name: "Subject", apparatus: "school / archive" },
  { id: "C", name: "Citizen", apparatus: "press / parliament" },
  { id: "P", name: "Person", apparatus: "church / family" },
  { id: "K", name: "Consumer", apparatus: "marketplace" },
] as const;

interface Regime {
  key: string;
  label: string;
  // 4x4 matrix of mutual-info proxy values in [0, 1]
  M: number[][];
}

const REGIMES: Regime[] = [
  {
    key: "baseline",
    label: "baseline · pre-closure",
    // Diag 1, off-diag near 0 — registers were addressed by separate apparatuses.
    M: [
      [1.0, 0.06, 0.05, 0.04],
      [0.06, 1.0, 0.05, 0.05],
      [0.05, 0.05, 1.0, 0.04],
      [0.04, 0.05, 0.04, 1.0],
    ],
  },
  {
    key: "partial",
    label: "partial · early platform exposure",
    M: [
      [1.0, 0.32, 0.28, 0.30],
      [0.32, 1.0, 0.34, 0.36],
      [0.28, 0.34, 1.0, 0.30],
      [0.30, 0.36, 0.30, 1.0],
    ],
  },
  {
    key: "converged",
    label: "converged · single delivery surface",
    M: [
      [1.0, 0.71, 0.66, 0.74],
      [0.71, 1.0, 0.69, 0.72],
      [0.66, 0.69, 1.0, 0.68],
      [0.74, 0.72, 0.68, 1.0],
    ],
  },
];

function offDiagMean(M: number[][]): number {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i !== j) {
        sum += M[i][j];
        count++;
      }
    }
  }
  return sum / count;
}

export function LibidinalRouting() {
  const [regimeKey, setRegimeKey] = useState<string>("converged");
  const regime = REGIMES.find((r) => r.key === regimeKey) ?? REGIMES[0];
  const meanOffDiag = offDiagMean(regime.M);
  // H(b_t) proxy: high when off-diagonal is low (independent registers),
  // low when off-diagonal is high (registers redundant → posterior collapses).
  const Hbelief = (1 - meanOffDiag) * Math.log(4);
  const dividual = Hbelief < 0.5;

  return (
    <figure className="my-md">
      <div className="bg-paper-95 border border-ink-50 p-md">
        {/* Regime picker */}
        <div className="font-mono text-sm text-ink-90 mb-md">
          <label className="inline-flex items-baseline gap-x-xs">
            <span className="text-ink-70">regime =</span>
            <select
              value={regimeKey}
              onChange={(e) => setRegimeKey(e.target.value)}
              className="bg-paper-95 text-ink-90 border-b border-ink-50 hover:border-oxblood focus:border-oxblood outline-none cursor-pointer transition-colors duration-100 px-[0.3em]"
            >
              {REGIMES.map((r) => (
                <option key={r.key} value={r.key}>
                  {r.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* The 4×4 matrix */}
        <div
          className="font-mono text-sm"
          style={{
            display: "grid",
            gridTemplateColumns: "auto repeat(4, minmax(56px, 1fr))",
            gap: "2px",
            maxWidth: "440px",
          }}
          role="img"
          aria-label={`Mutual information matrix across four registers under ${regime.label}.`}
        >
          {/* Top-left empty + column headers */}
          <div />
          {REGISTERS.map((r) => (
            <div
              key={`ch-${r.id}`}
              className="text-ink-70 text-center py-xs"
            >
              {r.id}
            </div>
          ))}

          {/* Rows */}
          {REGISTERS.map((rj, j) => (
            <Row
              key={`r-${rj.id}`}
              rj={rj}
              j={j}
              M={regime.M}
            />
          ))}
        </div>

        {/* Diagnostic readouts */}
        <div className="font-mono text-sm text-ink-70 mt-md space-y-xs">
          <p>
            mean off-diagonal I(u^i; u^j) ={" "}
            <span className="text-ink-90">{meanOffDiag.toFixed(2)}</span>
          </p>
          <p>
            H(b_t) ≈{" "}
            <span className={dividual ? "text-oxblood" : "text-ink-90"}>
              {Hbelief.toFixed(2)}
            </span>{" "}
            nats {dividual ? "· dividual condition" : ""}
          </p>
        </div>
      </div>

      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        <span className="font-mono text-xs text-oxblood">§3.3.</span> The four
        registers — Subject, Citizen, Person, Consumer — were historically
        addressed through distinct apparatuses (school, parliament, church,
        marketplace) with their own evaluation criteria. Under the closed loop
        they collapse onto a single delivery surface. Off-diagonal entries
        I(u^i; u^j) measure how much knowing one register tells the platform
        about the other. Switch from baseline to converged: the off-diagonals
        fill in. The dividual condition H(u | y_1:t) → 0 follows: the
        platform's posterior over the user's full state converges to a point.
      </figcaption>
    </figure>
  );
}

function Row({
  rj,
  j,
  M,
}: {
  rj: { id: string; name: string };
  j: number;
  M: number[][];
}) {
  return (
    <>
      <div className="text-ink-70 self-center pr-sm">{rj.id}</div>
      {[0, 1, 2, 3].map((i) => {
        const v = M[j][i];
        const diag = i === j;
        // Diagonal: ink-50 tinted background, opacity scales with value.
        // Off-diagonal: oxblood-tinted background, opacity scales with value.
        const bg = diag
          ? `color-mix(in srgb, var(--color-ink-50) ${10 + v * 25}%, transparent)`
          : `color-mix(in srgb, var(--color-oxblood) ${10 + v * 65}%, transparent)`;
        // Foreground: paper when strongly oxblood, ink otherwise.
        const fg =
          !diag && v > 0.5
            ? "var(--color-paper)"
            : "var(--color-ink)";
        return (
          <div
            key={`mc-${j}-${i}`}
            className="text-center py-sm"
            style={{ background: bg, color: fg }}
          >
            {v.toFixed(2)}
          </div>
        );
      })}
    </>
  );
}
