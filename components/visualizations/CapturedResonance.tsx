"use client";

import { useEffect, useRef, useState } from "react";
import { M } from "@/components/ui/Math";

/**
 * Captured resonance — Kuramoto phase coupling between the body (φ_b)
 * and the medium (φ_m). Adapted from the KuramotoView panel in the
 * live simulator, made standalone with K_bm under user control so
 * readers can sweep the coupling strength through the lock transition.
 *
 *   dφ_b/dt = ω_b + K_bm · sin(φ_m − φ_b)
 *   dφ_m/dt = ω_m
 *
 * Lock condition: K_bm > |ω_b − ω_m|.
 */

const OMEGA_B = 0.018; // body intrinsic frequency
const OMEGA_M = 0.025; // medium intrinsic frequency
const DETUNING = Math.abs(OMEGA_B - OMEGA_M);
const DT_MS = 16;

interface OptionT<T> {
  value: T;
  label: string;
}

const K_OPTIONS: OptionT<number>[] = [
  { value: 0, label: "0 (no coupling)" },
  { value: 0.003, label: "0.003 (below threshold)" },
  { value: DETUNING, label: `${DETUNING.toFixed(3)} (at threshold)` },
  { value: 0.02, label: "0.02 (above threshold)" },
  { value: 0.08, label: "0.08 (strong)" },
  { value: 0.25, label: "0.25 (forced)" },
];

export function CapturedResonance() {
  const [kBm, setKBm] = useState<number>(0.02);

  // Phases live in refs so the animation loop reads the latest values
  // without triggering React re-renders 60 times/second.
  const phaseBRef = useRef<number>(0);
  const phaseMRef = useRef<number>(Math.PI / 4); // slight initial offset
  const [tick, setTick] = useState<number>(0);
  const kBmRef = useRef(kBm);
  kBmRef.current = kBm;

  useEffect(() => {
    const interval = setInterval(() => {
      const k = kBmRef.current;
      const phiB = phaseBRef.current;
      const phiM = phaseMRef.current;
      // Symplectic-ish update: medium first (constant rate), body second.
      const newPhiM = (phiM + OMEGA_M) % (2 * Math.PI);
      const newPhiB =
        (phiB + OMEGA_B + k * Math.sin(newPhiM - phiB) + 2 * Math.PI) %
        (2 * Math.PI);
      phaseMRef.current = newPhiM;
      phaseBRef.current = newPhiB;
      setTick((t) => t + 1);
    }, DT_MS);
    return () => clearInterval(interval);
  }, []);

  const w = 460;
  const h = 240;
  const cx = h / 2 + 40;
  const cy = h / 2;
  const r = 80;

  const phiB = phaseBRef.current;
  const phiM = phaseMRef.current;
  const bx = cx + r * Math.cos(phiB);
  const by = cy + r * Math.sin(phiB);
  const mx = cx + r * Math.cos(phiM);
  const my = cy + r * Math.sin(phiM);
  const dphi =
    (((phiM - phiB) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  const locked = kBm > DETUNING;

  // Suppress unused warning — tick is used implicitly to trigger re-render.
  void tick;

  return (
    <figure className="my-md">
      <div className="bg-paper-95 border border-ink-50 p-md">
        {/* Picker */}
        <div className="font-mono text-sm text-ink-90 mb-md">
          <label className="inline-flex items-baseline gap-x-xs">
            <span className="text-ink-70">K_bm =</span>
            <select
              value={String(kBm)}
              onChange={(e) => setKBm(Number(e.target.value))}
              className="bg-paper-95 text-ink-90 border-b border-ink-50 hover:border-oxblood focus:border-oxblood outline-none cursor-pointer transition-colors duration-100 px-[0.3em]"
            >
              {K_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <svg
          viewBox={`0 0 ${w} ${h}`}
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={`Kuramoto phase diagram: body and medium phase vectors. K_bm = ${kBm}, ${locked ? "phase-locked" : "free oscillation"}.`}
        >
          {/* Phase circle */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            style={{ stroke: "var(--color-paper-85)" }}
          />
          <circle cx={cx} cy={cy} r="2" style={{ fill: "var(--color-ink)" }} />

          {/* Body phase vector */}
          <line
            x1={cx}
            y1={cy}
            x2={bx}
            y2={by}
            style={{ stroke: "var(--color-ink)" }}
            strokeWidth="1.8"
          />
          <circle cx={bx} cy={by} r="4.5" style={{ fill: "var(--color-ink)" }} />

          {/* Medium phase vector */}
          <line
            x1={cx}
            y1={cy}
            x2={mx}
            y2={my}
            style={{ stroke: "var(--color-oxblood)" }}
            strokeWidth="1.8"
          />
          <circle cx={mx} cy={my} r="4.5" style={{ fill: "var(--color-oxblood)" }} />

          {/* Axis label */}
          <text
            x={cx}
            y={cy + r + 24}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="10"
            style={{ fill: "var(--color-ink-70)", letterSpacing: "1.5px" }}
          >
            body · medium
          </text>

          {/* Live readouts */}
          <g transform={`translate(${h + 60}, 28)`}>
            <text
              fontFamily="var(--font-serif)"
              fontStyle="italic"
              fontSize="14"
              style={{ fill: "var(--color-ink)" }}
            >
              dφ
              <tspan baselineShift="sub" fontSize="9">b</tspan>
              /dt = ω
              <tspan baselineShift="sub" fontSize="9">b</tspan>
              {" + K"}
              <tspan baselineShift="sub" fontSize="9">bm</tspan>
              {" sin(φ"}
              <tspan baselineShift="sub" fontSize="9">m</tspan>
              {" − φ"}
              <tspan baselineShift="sub" fontSize="9">b</tspan>
              {")"}
            </text>
            <text
              y="28"
              fontFamily="var(--font-mono)"
              fontSize="11"
              style={{ fill: "var(--color-ink-90)" }}
            >
              K
              <tspan baselineShift="sub" fontSize="8">bm</tspan>
              {` = ${kBm.toFixed(3)}`}
            </text>
            <text
              y="46"
              fontFamily="var(--font-mono)"
              fontSize="11"
              style={{ fill: "var(--color-ink-90)" }}
            >
              |ω
              <tspan baselineShift="sub" fontSize="8">b</tspan>
              {" − ω"}
              <tspan baselineShift="sub" fontSize="8">m</tspan>
              {`| = ${DETUNING.toFixed(3)}`}
            </text>
            <text
              y="68"
              fontFamily="var(--font-mono)"
              fontSize="11"
              fontWeight="600"
              style={{
                fill: locked ? "var(--color-oxblood)" : "var(--color-ink-70)",
                letterSpacing: "0.8px",
              }}
            >
              {locked ? "■  PHASE-LOCKED" : "○  free oscillation"}
            </text>
            <text
              y="86"
              fontFamily="var(--font-serif)"
              fontStyle="italic"
              fontSize="11"
              style={{ fill: "var(--color-ink-70)" }}
            >
              Δφ = {dphi.toFixed(2)} rad
            </text>
          </g>
        </svg>
      </div>

      <figcaption className="mt-sm font-serif text-sm text-ink-70 max-w-[var(--container-prose)]">
        <span className="font-mono text-xs text-oxblood">§3.6.</span> Body phase
        (ink) and medium-delivery phase (oxblood) on a single dial. Below the
        lock condition <M>{String.raw`K_{bm} > |\omega_b - \omega_m|`}</M>{" "}
        the vectors drift apart; above it the body becomes a forced oscillator
        and the angular gap Δφ collapses to a constant. Set K_bm at threshold
        (≈ {DETUNING.toFixed(3)}) to watch the bifurcation directly.
      </figcaption>
    </figure>
  );
}
