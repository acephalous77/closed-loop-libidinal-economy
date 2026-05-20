"use client";

/**
 * PhaseDiagrams — one atmospheric visual per phase, dark register.
 *
 * Where the previous version had busy framed figures with figcaptions,
 * these are sparse cinematic moments. Each diagram is one element on
 * dark ground — a line, a ticker, a stamp, a clock. No frames, no
 * captions inside the SVG. The text in the narrative around them
 * does the labelling work.
 *
 *   01 Ontogenesis    — single dimension line (the empty footprint)
 *   02 Habitualization — single sedation curve, no axes
 *   03 Consumption    — six pulsing port-dots in body-position layout
 *   04 Obsolescence   — massive live ticker of YOUR session readings
 *   05 Stagnation     — UNDELIVERABLE stamp on a typed letter
 *   06 Exit           — giant ceremonial countdown to 0:00
 */

import React from "react";

const INK = "#f0ebe2";
const INK_SOFT = "#d6d1c8";
const MUTED = "#6b6760";
const LINE = "rgba(240,235,226,0.12)";
const HAIR = "rgba(240,235,226,0.30)";
const ACCENT = "#ff3a25";
const COBALT = "#6088b8";
const AMBER = "#d6a26b";
const SAGE = "#7a8e74";

const MONO = `var(--font-geist-mono), ui-monospace, monospace`;
const SANS = `var(--font-geist), ui-sans-serif, system-ui, sans-serif`;

// ─── Phase 01 — single dimension line (the empty footprint) ───────────
export function FootprintPlan() {
  // A long horizontal line, dimensioned. That's the diagram. The
  // emptiness of the page IS the apparatus's emptiness.
  return (
    <div
      style={{
        margin: "60px auto",
        width: "100%",
        maxWidth: 720,
        position: "relative",
        padding: "80px 0 40px",
      }}
    >
      <svg viewBox="0 0 720 200" width="100%" style={{ display: "block" }}>
        {/* Width dimension — top */}
        <g>
          <line x1="40" y1="60" x2="680" y2="60" stroke={INK} strokeWidth="1.4" />
          <line x1="40" y1="50" x2="40" y2="70" stroke={INK} strokeWidth="1.4" />
          <line x1="680" y1="50" x2="680" y2="70" stroke={INK} strokeWidth="1.4" />
          <text
            x="360"
            y="42"
            textAnchor="middle"
            fontFamily={MONO}
            fontSize="13"
            fill={INK}
            letterSpacing="0.16em"
          >
            1,180 mm
          </text>
        </g>

        {/* Depth dimension — middle (intersecting cross) */}
        <g>
          <line x1="240" y1="100" x2="480" y2="100" stroke={MUTED} strokeWidth="1" />
          <line x1="240" y1="90" x2="240" y2="110" stroke={MUTED} strokeWidth="1" />
          <line x1="480" y1="90" x2="480" y2="110" stroke={MUTED} strokeWidth="1" />
          <text
            x="360"
            y="118"
            textAnchor="middle"
            fontFamily={MONO}
            fontSize="11"
            fill={MUTED}
            letterSpacing="0.12em"
          >
            1,420 mm
          </text>
        </g>

        {/* Height callout */}
        <g>
          <text
            x="360"
            y="160"
            textAnchor="middle"
            fontFamily={MONO}
            fontSize="11"
            fill={MUTED}
            letterSpacing="0.12em"
          >
            H 2,180 mm
          </text>
        </g>

        {/* NO EGRESS — the wound */}
        <g>
          <text
            x="360"
            y="184"
            textAnchor="middle"
            fontFamily={MONO}
            fontSize="11"
            fill={ACCENT}
            letterSpacing="0.3em"
            fontWeight={600}
          >
            NO EGRESS · 360°
          </text>
        </g>
      </svg>
    </div>
  );
}

// ─── Phase 02 — sedation curve, no axes ───────────────────────────────
export function SedationCurve() {
  // Just the curve, drawn massively across the column width. No grid,
  // no axes, just LUCID at the start and SUBMERGED at the end.
  const W = 720;
  const H = 200;
  const padL = 80;
  const padR = 80;
  const padT = 40;
  const padB = 40;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const points: Array<[number, number]> = [];
  for (let i = 0; i <= 50; i++) {
    const t = i / 50;
    const c = 1 / (1 + Math.exp(8 * (t - 0.42)));
    const x = padL + t * innerW;
    const y = padT + (1 - c) * innerH;
    points.push([x, y]);
  }
  const path = "M " + points.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(" L ");

  return (
    <div style={{ margin: "60px auto", width: "100%", maxWidth: 720 }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
        {/* The curve */}
        <path d={path} fill="none" stroke={INK} strokeWidth="2" />
        {/* Endpoints */}
        <circle cx={points[0][0]} cy={points[0][1]} r="4" fill={INK} />
        <circle cx={points[points.length - 1][0]} cy={points[points.length - 1][1]} r="4" fill={ACCENT} />
        {/* Labels */}
        <text x={padL} y={padT - 14} fontFamily={MONO} fontSize="11" fill={MUTED} letterSpacing="0.16em">
          LUCID · DAY 0
        </text>
        <text
          x={W - padR}
          y={H - padB + 24}
          textAnchor="end"
          fontFamily={MONO}
          fontSize="11"
          fill={ACCENT}
          letterSpacing="0.16em"
        >
          SUBMERGED · DAY 30
        </text>
      </svg>
    </div>
  );
}

// ─── Phase 03 — six pulsing port dots in body-position layout ─────────
export function PortMap() {
  // No body silhouette. Just the dots, arranged in the positions on a
  // body where they would be. The viewer infers the body from the
  // pattern. With faint leader lines fading off to color labels.
  const W = 720;
  const H = 380;

  const ports = [
    { x: 300, y: 60, color: SAGE, label: "Cervical L", flow: "Analgesic" },
    { x: 420, y: 60, color: SAGE, label: "Cervical R", flow: "Analgesic" },
    { x: 250, y: 170, color: AMBER, label: "Brachial L", flow: "Chemical" },
    { x: 470, y: 170, color: AMBER, label: "Brachial R", flow: "Chemical" },
    { x: 330, y: 230, color: COBALT, label: "Abdominal L", flow: "Nutrient" },
    { x: 390, y: 230, color: COBALT, label: "Abdominal R", flow: "Nutrient" },
    { x: 320, y: 310, color: ACCENT, label: "Lumbar out L", flow: "Energy → grid" },
    { x: 400, y: 310, color: ACCENT, label: "Lumbar out R", flow: "Energy → grid" },
  ];

  return (
    <div style={{ margin: "60px auto", width: "100%", maxWidth: 720 }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
        {ports.map((p, i) => {
          const isLeft = p.x < W / 2;
          const labelX = isLeft ? 20 : W - 20;
          return (
            <g key={p.label}>
              {/* Pulsing port dot */}
              <circle cx={p.x} cy={p.y} r="9" fill="none" stroke={p.color} strokeWidth="1.4" opacity="0.4">
                <animate
                  attributeName="r"
                  values="6;14;6"
                  dur="2.4s"
                  begin={`-${(i * 0.3) % 2.4}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;0;0.5"
                  dur="2.4s"
                  begin={`-${(i * 0.3) % 2.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={p.x} cy={p.y} r="4" fill={p.color} />
              {/* Leader line */}
              <line
                x1={p.x + (isLeft ? -10 : 10)}
                y1={p.y}
                x2={labelX + (isLeft ? 60 : -60)}
                y2={p.y}
                stroke={LINE}
                strokeWidth="0.5"
                strokeDasharray="2 3"
              />
              {/* Label */}
              <text
                x={labelX}
                y={p.y - 4}
                textAnchor={isLeft ? "start" : "end"}
                fontFamily={MONO}
                fontSize="10"
                fill={INK}
                fontWeight={500}
                letterSpacing="0.08em"
              >
                {p.label}
              </text>
              <text
                x={labelX}
                y={p.y + 8}
                textAnchor={isLeft ? "start" : "end"}
                fontFamily={MONO}
                fontSize="9"
                fill={MUTED}
                letterSpacing="0.12em"
              >
                {p.flow}
              </text>
            </g>
          );
        })}

        {/* Group dividers — faint dashes between cervical / brachial / abdominal / lumbar bands */}
        <g stroke={LINE} strokeWidth="0.4" strokeDasharray="2 6">
          <line x1="60" y1="115" x2={W - 60} y2="115" />
          <line x1="60" y1="200" x2={W - 60} y2="200" />
          <line x1="60" y1="270" x2={W - 60} y2="270" />
        </g>

        {/* Direction marker — IN flows DOWN, OUT flows UP */}
        <g>
          <text
            x={W / 2}
            y={356}
            textAnchor="middle"
            fontFamily={MONO}
            fontSize="10"
            fill={MUTED}
            letterSpacing="0.24em"
          >
            6 IN · 2 OUT · NO RETURN
          </text>
        </g>
      </svg>
    </div>
  );
}

// ─── Phase 04 — massive live ticker of YOUR session ───────────────────
interface TickerProps {
  TI: number;
  CI: number;
  EI: number;
  LI: number;
  CE: number;
  PS: number;
}

export function LiveTicker(m: TickerProps) {
  const fmt = (n: number, d = 2) => n.toFixed(d);
  return (
    <div
      data-ols-ticker
      style={{
        margin: "60px auto",
        width: "100%",
        maxWidth: 900,
        padding: "40px 0",
        borderTop: `1px solid ${LINE}`,
        borderBottom: `1px solid ${LINE}`,
      }}
    >
      <div
        data-ols-ticker-grid
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 48,
          alignItems: "baseline",
        }}
      >
        {[
          { label: "LI", value: fmt(m.LI), unit: "libidinal investment", accent: false },
          { label: "CE", value: fmt(m.CE * 100, 1) + "%", unit: "commodification efficiency", accent: false },
          { label: "Ψ", value: fmt(m.PS), unit: "psychic surplus", accent: true },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 11,
                color: MUTED,
                letterSpacing: "0.24em",
                marginBottom: 12,
              }}
            >
              {stat.label}
            </div>
            <div
              style={{
                fontFamily: SANS,
                fontSize: "clamp(48px, 7vw, 96px)",
                fontWeight: 600,
                color: stat.accent ? ACCENT : INK,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                color: MUTED,
                letterSpacing: "0.16em",
                marginTop: 12,
                textTransform: "uppercase",
              }}
            >
              {stat.unit}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 32,
          textAlign: "center",
          fontFamily: MONO,
          fontSize: 11,
          color: MUTED,
          letterSpacing: "0.2em",
        }}
      >
        — THIS IS YOUR READING. THIS SESSION. RIGHT NOW. —
      </div>
    </div>
  );
}

// ─── Phase 05 — UNDELIVERABLE stamp on a typed letter ─────────────────
export function ReturnedUndeliverable() {
  return (
    <div
      data-ols-letter
      style={{
        margin: "60px auto",
        width: "100%",
        maxWidth: 600,
        padding: "48px 56px",
        background: "rgba(240,235,226,0.04)",
        border: `1px solid ${LINE}`,
        position: "relative",
        fontFamily: MONO,
        fontSize: 14,
        lineHeight: 1.7,
        color: INK_SOFT,
      }}
    >
      <div style={{ color: MUTED, fontSize: 10, letterSpacing: "0.16em", marginBottom: 24 }}>
        OUROBOROS INDUSTRIES LLC · OCCUPANT SERVICES
        <br />
        FORM §6 — WITHDRAWAL OF CONSENT
      </div>

      <div style={{ marginBottom: 16 }}>To whom it may concern,</div>
      <div style={{ marginBottom: 16 }}>
        Pursuant to clause §6.0 of the Terms of Occupancy, I hereby
        withdraw my consent to indefinite occupancy and request to stand.
      </div>
      <div style={{ marginBottom: 16, color: MUTED }}>
        [signature pending — standing not currently supported]
      </div>

      <div style={{ color: MUTED, fontSize: 10, letterSpacing: "0.12em", marginTop: 32 }}>
        ROUTED · §6 OFFICE · 2026-05-19 14:22 UTC
        <br />
        STATUS · undeliverable · returned to sender
        <br />
        ACTION · resubmit via §6
      </div>

      {/* The stamp */}
      <div
        style={{
          position: "absolute",
          top: 40,
          right: 30,
          transform: "rotate(-14deg)",
          border: `2px solid ${ACCENT}`,
          color: ACCENT,
          padding: "8px 14px",
          fontFamily: MONO,
          fontSize: 13,
          letterSpacing: "0.24em",
          fontWeight: 700,
          background: "rgba(255,58,37,0.05)",
        }}
      >
        UNDELIVERABLE
      </div>
    </div>
  );
}

// ─── Phase 06 — ceremonial T-MINUS countdown ──────────────────────────
export function ReissueCountdown({ dwellSec }: { dwellSec: number }) {
  const remaining = 480 - (dwellSec % 480);
  const minutes = Math.floor(remaining / 60);
  const seconds = Math.floor(remaining % 60);
  const timeStr = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div
      data-ols-countdown
      style={{
        margin: "60px auto",
        width: "100%",
        maxWidth: 720,
        textAlign: "center",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          fontFamily: MONO,
          fontSize: 11,
          color: MUTED,
          letterSpacing: "0.3em",
          marginBottom: 20,
        }}
      >
        T-MINUS NEXT OCCUPANT
      </div>
      <div
        data-ols-countdown-time
        style={{
          fontFamily: SANS,
          fontSize: "clamp(96px, 16vw, 220px)",
          fontWeight: 600,
          color: INK,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {timeStr}
      </div>
      <div
        style={{
          fontFamily: MONO,
          fontSize: 12,
          color: ACCENT,
          letterSpacing: "0.24em",
          marginTop: 20,
        }}
      >
        — THE APPARATUS ACCEPTS NEW OCCUPANTS EVERY EIGHT MINUTES —
      </div>
    </div>
  );
}
