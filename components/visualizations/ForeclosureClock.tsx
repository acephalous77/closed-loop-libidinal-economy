"use client";

import { useState } from "react";

interface OptionT<T> {
  value: T;
  label: string;
}

const THETA_REF_OPTIONS: OptionT<number>[] = [
  { value: 1, label: "1s" },
  { value: 5, label: "5s" },
  { value: 30, label: "30s" },
  { value: 120, label: "2min" },
  { value: 300, label: "5min" },
  { value: 600, label: "10min" },
  { value: 1800, label: "30min" },
  { value: 3600, label: "1hr" },
];

const DELTA_MIN_OPTIONS: OptionT<number>[] = [
  { value: 0.001, label: "1ms" },
  { value: 0.01, label: "10ms" },
  { value: 0.1, label: "100ms" },
  { value: 0.5, label: "500ms" },
  { value: 1, label: "1s" },
];

interface Reference {
  label: string;
  magnitude: number; // base-10 exponent
  unit: string;
}

const REFERENCES: Reference[] = [
  { label: "the diameter of the visible universe", magnitude: 27, unit: "m" },
  { label: "the age of the universe in seconds", magnitude: 17, unit: "s" },
  { label: "one meter", magnitude: 0, unit: "m" },
  { label: "the diameter of a hydrogen atom", magnitude: -10, unit: "m" },
  { label: "the Planck length", magnitude: -35, unit: "m" },
];

// Log-scale visual encoding: 5 pixels per order of magnitude, offset so 10^-50 is the visual zero.
const MIN_VISIBLE_MAG = -50;
const PX_PER_DECADE = 5;
const BAR_HEIGHT = 4;

function barWidth(magnitude: number): number {
  return Math.max(1, (magnitude - MIN_VISIBLE_MAG) * PX_PER_DECADE);
}

function formatRatio(n: number): string {
  if (n >= 1000) return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
  return n.toFixed(0);
}

function Picker<T>({
  label,
  options,
  value,
  onChange,
  unit,
}: {
  label: string;
  options: OptionT<T>[];
  value: T;
  onChange: (v: T) => void;
  unit?: string;
}) {
  const current = options.find((o) => o.value === value);
  return (
    <label className="inline-flex items-baseline gap-x-xs font-mono text-md text-ink-90">
      <span className="text-ink-70">{label} =</span>
      <select
        value={String(value)}
        onChange={(e) => {
          const next = options.find((o) => String(o.value) === e.target.value);
          if (next) onChange(next.value);
        }}
        className="font-mono text-md bg-paper-95 text-ink-90 border-b border-ink-50 hover:border-oxblood focus:border-oxblood outline-none cursor-pointer transition-colors duration-100 px-[0.3em] py-0"
      >
        {options.map((o) => (
          <option key={String(o.value)} value={String(o.value)}>
            {o.label}
          </option>
        ))}
      </select>
      {unit && <span className="text-ink-70 text-sm">{unit}</span>}
      <span className="sr-only">current value: {current?.label}</span>
    </label>
  );
}

export function ForeclosureClock() {
  const [thetaRef, setThetaRef] = useState<number>(30);
  const [deltaMin, setDeltaMin] = useState<number>(0.01);
  const [refIdx, setRefIdx] = useState<number>(4); // Planck length by default — sharpest

  const ratio = thetaRef / deltaMin;
  // The exponential bound is e^(-ratio). Convert to base-10 magnitude.
  const boundMag = -ratio * Math.log10(Math.E);
  const reference = REFERENCES[refIdx];

  const boundWidthPx = barWidth(boundMag);
  const referenceWidthPx = barWidth(reference.magnitude);

  return (
    <figure className="my-md">
      {/* The plate */}
      <div className="bg-paper-95 border border-ink-50 p-md">
        {/* Top layer — parameters */}
        <div className="flex flex-wrap items-baseline gap-x-md gap-y-sm">
          <Picker
            label="θ_ref"
            options={THETA_REF_OPTIONS}
            value={thetaRef}
            onChange={setThetaRef}
          />
          <Picker
            label="δ_min"
            options={DELTA_MIN_OPTIONS}
            value={deltaMin}
            onChange={setDeltaMin}
          />
        </div>

        <div className="font-mono text-sm text-ink-70 mt-sm space-y-xs">
          <p>
            ratio θ_ref / δ_min = <span className="text-ink-90">{formatRatio(ratio)}</span>
          </p>
          <p>
            S(θ_ref; θ*) ≤ C(c<sub>v</sub>) · e<sup>−{formatRatio(ratio)}</sup>{" "}
            <span className="text-ink-50">
              (≈ 10<sup>{Math.round(boundMag).toLocaleString("en-US")}</sup>)
            </span>
          </p>
        </div>

        {/* Middle layer — comparison */}
        <div className="mt-md pt-md border-t border-paper-85">
          <div className="space-y-sm">
            <ComparisonBar
              label="the foreclosure bound"
              labelClass="text-oxblood"
              magnitude={boundMag}
              widthPx={boundWidthPx}
              barClass="bg-oxblood"
              annotation={`10^${formatRatio(Math.round(boundMag))}`}
            />
            <ComparisonBar
              label={reference.label}
              labelClass="text-ink-90"
              magnitude={reference.magnitude}
              widthPx={referenceWidthPx}
              barClass="bg-ink-90"
              annotation={`10^${reference.magnitude} ${reference.unit}`}
            />
          </div>

          {/* Reference picker */}
          <div className="mt-md font-mono text-sm">
            <span className="text-ink-70">compared against: </span>
            <select
              value={refIdx}
              onChange={(e) => setRefIdx(Number(e.target.value))}
              className="font-mono text-sm bg-paper-95 text-ink-90 border-b border-ink-50 hover:border-oxblood focus:border-oxblood outline-none cursor-pointer transition-colors duration-100 px-[0.3em]"
            >
              {REFERENCES.map((r, i) => (
                <option key={i} value={i}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Bottom layer — caption */}
      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        <span className="font-mono text-xs text-oxblood">Lemma 1.</span> Under
        Assumptions (A1)–(A6), the survival function of the inter-stimulus
        interval at the converged policy θ* satisfies{" "}
        <span className="font-mono">S(θ_ref; θ*) ≤ C(c<sub>v</sub>) · e<sup>−θ_ref/δ_min</sup></span>.
        At realistic parameter values — a reflective threshold of seconds to
        minutes, a tick rate of milliseconds to sub-second — the exponent
        θ_ref/δ_min is on the order of <span className="font-mono">10<sup>3</sup></span>{" "}
        to <span className="font-mono">10<sup>5</sup></span>, so the bound is on the
        order of <span className="font-mono">e<sup>−1000</sup></span> to{" "}
        <span className="font-mono">e<sup>−100,000</sup></span>: mathematically positive,
        operationally indistinguishable from zero.
      </figcaption>
    </figure>
  );
}

function ComparisonBar({
  label,
  labelClass,
  magnitude,
  widthPx,
  barClass,
  annotation,
}: {
  label: string;
  labelClass: string;
  magnitude: number;
  widthPx: number;
  barClass: string;
  annotation: string;
}) {
  return (
    <div>
      <div className={`font-mono text-xs ${labelClass}`}>{label}</div>
      <div className="flex items-center gap-x-sm mt-xs">
        <div
          className={`${barClass} transition-all duration-200`}
          style={{ width: `${widthPx}px`, height: `${BAR_HEIGHT}px` }}
          role="img"
          aria-label={`bar of ${widthPx} pixels representing ${annotation}`}
        />
        <span className="font-mono text-xs text-ink-50">{annotation}</span>
      </div>
    </div>
  );
}
