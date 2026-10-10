"use client";

import { useEffect, useRef, useState } from "react";
import { M, SvgM } from "@/components/ui/Math";

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

  // Phase state — updated in the interval below. K_bm is read through a
  // ref so sweeping the control doesn't restart the interval.
  const [phases, setPhases] = useState<{ b: number; m: number }>({
    b: 0,
    m: Math.PI / 4, // slight initial offset
  });
  const kBmRef = useRef(kBm);

  useEffect(() => {
    kBmRef.current = kBm;
  }, [kBm]);

  useEffect(() => {
    const interval = setInterval(() => {
      const k = kBmRef.current;
      // Symplectic-ish update: medium first (constant rate), body second.
      setPhases(({ b, m }) => {
        const newPhiM = (m + OMEGA_M) % (2 * Math.PI);
        const newPhiB =
          (b + OMEGA_B + k * Math.sin(newPhiM - b) + 2 * Math.PI) %
          (2 * Math.PI);
        return { b: newPhiB, m: newPhiM };
      });
    }, DT_MS);
    return () => clearInterval(interval);
  }, []);

  const w = 460;
  const h = 240;
  const cx = h / 2 + 40;
  const cy = h / 2;
  const r = 80;

  const phiB = phases.b;
  const phiM = phases.m;
  const bx = cx + r * Math.cos(phiB);
  const by = cy + r * Math.sin(phiB);
  const mx = cx + r * Math.cos(phiM);
  const my = cy + r * Math.sin(phiM);
  const dphi =
    (((phiM - phiB) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  const locked = kBm > DETUNING;

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
            <SvgM
              x={0}
              y={-10}
              w={260}
              h={20}
              align="left"
              color="var(--color-ink)"
              size="13px"
            >
              {String.raw`d\varphi_b/dt = \omega_b + K_{bm}\,\sin(\varphi_m - \varphi_b)`}
            </SvgM>
            <SvgM
              x={0}
              y={20}
              w={200}
              h={16}
              align="left"
              color="var(--color-ink-90)"
              size="11px"
            >
              <span style={{ display: "inline-flex", alignItems: "baseline", gap: "4px" }}>
                <M>{String.raw`K_{bm}`}</M>
                <span style={{ fontFamily: "var(--font-mono)" }}>{`= ${kBm.toFixed(3)}`}</span>
              </span>
            </SvgM>
            <SvgM
              x={0}
              y={38}
              w={220}
              h={16}
              align="left"
              color="var(--color-ink-90)"
              size="11px"
            >
              <span style={{ display: "inline-flex", alignItems: "baseline", gap: "4px" }}>
                <M>{String.raw`|\omega_b - \omega_m|`}</M>
                <span style={{ fontFamily: "var(--font-mono)" }}>{`= ${DETUNING.toFixed(3)}`}</span>
              </span>
            </SvgM>
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
            <SvgM
              x={0}
              y={78}
              w={200}
              h={16}
              align="left"
              color="var(--color-ink-70)"
              size="11px"
            >
              <span style={{ display: "inline-flex", alignItems: "baseline", gap: "4px" }}>
                <M>{String.raw`\Delta\varphi`}</M>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>{`= ${dphi.toFixed(2)} rad`}</span>
              </span>
            </SvgM>
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
