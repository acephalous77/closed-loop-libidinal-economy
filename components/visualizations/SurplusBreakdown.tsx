"use client";

import { useState } from "react";

/**
 * Surplus Σ(T) — per-register libidinal surplus accumulation.
 *
 *   Σ(T) = Σ_i ∫_0^T ρ_i(u_{t⁻}, y_{t⁻}) dN^i_t
 *
 * The platform's accumulated yield over horizon T, decomposed by register
 * (Subject / Citizen / Person / Consumer). Under the closure, the
 * distribution across registers is unequal — the policy concentrates
 * extraction where the per-register yield is highest. Adapted from the
 * SurplusBreakdown panel in panels.jsx.
 */

const REGISTERS = [
  { id: "S", label: "Subject", apparatus: "school / archive" },
  { id: "C", label: "Citizen", apparatus: "press / parliament" },
  { id: "P", label: "Person", apparatus: "church / family" },
  { id: "K", label: "Consumer", apparatus: "marketplace" },
] as const;

interface Regime {
  key: string;
  label: string;
  // accumulated surplus per register at horizon T
  values: Record<"S" | "C" | "P" | "K", number>;
}

const REGIMES: Regime[] = [
  {
    key: "baseline",
    label: "baseline · pre-closure",
    values: { S: 0.4, C: 0.5, P: 0.45, K: 0.55 },
  },
  {
    key: "early",
    label: "early platform exposure",
    values: { S: 1.8, C: 2.4, P: 1.6, K: 3.2 },
  },
  {
    key: "converged",
    label: "converged · operating point",
    values: { S: 4.8, C: 6.2, P: 3.9, K: 14.7 },
  },
  {
    key: "with-bonus",
    label: "with-bonus (Mode A, β = 10)",
    values: { S: 2.4, C: 3.1, P: 2.0, K: 5.8 },
  },
];

export function SurplusBreakdown() {
  const [regimeKey, setRegimeKey] = useState<string>("converged");
  const regime = REGIMES.find((r) => r.key === regimeKey) ?? REGIMES[0];
  const total = Object.values(regime.values).reduce((a, b) => a + b, 0);
  const maxVal = Math.max(...Object.values(regime.values));

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

        {/* Per-register bars */}
        <div className="space-y-sm">
          {REGISTERS.map((reg) => {
            const v = regime.values[reg.id];
            const pct = (v / total) * 100;
            const widthPct = (v / maxVal) * 100;
            return (
              <div key={reg.id}>
                <div className="flex items-baseline justify-between font-mono text-sm gap-x-sm">
                  <span className="text-ink-90">
                    <span className="italic font-serif">Σ</span>
                    <sub>{reg.id}</sub> · {reg.label}
                    <span className="text-ink-50 ml-xs italic font-serif">
                      ({reg.apparatus})
                    </span>
                  </span>
                  <span className="text-ink-90 shrink-0">
                    {v.toFixed(2)}
                    <span className="text-ink-50 ml-xs">
                      ({pct.toFixed(1)}%)
                    </span>
                  </span>
                </div>
                <div className="mt-xs h-[6px] bg-paper-85 relative overflow-hidden">
                  <div
                    className="h-full transition-all duration-300"
                    style={{
                      width: `${widthPct}%`,
                      background: "var(--color-oxblood)",
                    }}
                    role="img"
                    aria-label={`${reg.label} accumulated surplus ${v.toFixed(2)}, ${pct.toFixed(1)} percent of total`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Total */}
        <div className="mt-md font-mono text-sm text-ink-70 pt-sm border-t border-paper-85">
          total Σ(T) ={" "}
          <span className="text-ink-90">{total.toFixed(2)}</span>{" "}
          <span className="text-ink-50">(units of accumulated reward)</span>
        </div>
      </div>

      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        <span className="font-mono text-xs text-oxblood">§3.1.</span> Each bar
        is one register's accumulated surplus{" "}
        <span className="font-mono">Σ^i(T) = ∫_0^T ρ_i(u_{`{t⁻}`}, y_{`{t⁻}`}) dN^i_t</span>{" "}
        — the platform's yield from extraction events marked with that
        register. Under the converged regime the distribution is sharply
        unequal — the policy concentrates extraction where per-register yield
        is highest. Under Mode A intervention, total surplus drops and the
        distribution flattens; the architectural change costs the platform
        absolute yield.
      </figcaption>
    </figure>
  );
}
