"use client";

/**
 * PhaseDiagrams — one small focused diagram per OHCOSE phase.
 *
 * The chair illustration was the weak link. The chair is now described,
 * evoked through specs, leakage, ports, tubes — but never literally
 * drawn. Each phase gets its own diagrammatic accent that does ONE thing:
 *
 *   01 Ontogenesis    — apparatus footprint (architectural plan)
 *   02 Habitualization — sedation curve (lucid → submerged)
 *   03 Consumption    — port map (6 cutaneous ports + 2 lumbar outlets)
 *   04 Obsolescence   — live harvest dashboard (reads YOUR session)
 *   05 Stagnation     — Form §6 flow (submit → returned undeliverable → loop)
 *   06 Exit           — re-issue clock (T-minus 0:08 next occupant)
 */

import React from "react";

const INK = "#0a0a0a";
const INK_SOFT = "#1a1a1a";
const MUTED = "#6b6b66";
const HAIR = "rgba(10,10,10,0.55)";
const LINE = "rgba(10,10,10,0.14)";
const LINE_SOFT = "rgba(10,10,10,0.07)";
const PAPER = "#ffffff";
const BG = "#f1efea";
const BG_SOFT = "#f6f4ef";
const ACCENT = "#e23b2a";
const COBALT = "#2c4a6e";
const AMBER = "#c08643";
const SAGE = "#5a6e54";

const MONO = `var(--font-geist-mono), ui-monospace, monospace`;
const SANS = `var(--font-geist), ui-sans-serif, system-ui, sans-serif`;

// ─── Shared frame wrapper ─────────────────────────────────────────────
function DiagramFrame({
  label,
  children,
  height = 280,
}: {
  label: string;
  children: React.ReactNode;
  height?: number;
}) {
  return (
    <figure
      style={{
        margin: "8px 0 0",
        padding: 0,
        border: `1px solid ${LINE}`,
        background: PAPER,
        position: "relative",
      }}
    >
      <figcaption
        style={{
          position: "absolute",
          top: -7,
          left: 22,
          background: BG,
          color: INK_SOFT,
          fontFamily: MONO,
          fontSize: 10,
          letterSpacing: "0.16em",
          fontWeight: 600,
          padding: "0 8px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </figcaption>
      <div style={{ padding: "32px 20px 20px", height }}>{children}</div>
    </figure>
  );
}

// ─── Phase 01 — apparatus footprint plan ──────────────────────────────
export function FootprintPlan() {
  // Real proportions from the spec: 1180 × 1420 mm footprint, 2180 mm tall.
  // Render as an orthographic plan (top-down) at scale, with dimensions
  // and a clearance-arrow indicating no egress.
  const W = 480;
  const H = 280;
  const planW = 220; // chair footprint width on page
  const planH = 264; // chair footprint depth on page
  const x0 = (W - planW) / 2;
  const y0 = (H - planH) / 2;

  return (
    <DiagramFrame label="Fig. 01 — Footprint · 1:50 plan">
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" style={{ display: "block" }}>
        {/* Grid */}
        <g stroke={LINE_SOFT}>
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={(W / 8) * i} y1={0} x2={(W / 8) * i} y2={H} />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`h${i}`} x1={0} y1={(H / 5) * i} x2={W} y2={(H / 5) * i} />
          ))}
        </g>

        {/* Apparatus footprint */}
        <rect
          x={x0}
          y={y0}
          width={planW}
          height={planH}
          fill="none"
          stroke={INK}
          strokeWidth="1.4"
        />
        {/* Hatched footprint interior */}
        <defs>
          <pattern
            id="hatch-ftprint"
            patternUnits="userSpaceOnUse"
            width="6"
            height="6"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="6" stroke={HAIR} strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect
          x={x0}
          y={y0}
          width={planW}
          height={planH}
          fill="url(#hatch-ftprint)"
          opacity="0.6"
        />
        {/* Seat position (inner rect) */}
        <rect
          x={x0 + 60}
          y={y0 + 70}
          width={planW - 120}
          height={planH - 140}
          fill={BG_SOFT}
          stroke={INK}
          strokeWidth="0.8"
          strokeDasharray="3 3"
        />
        <text
          x={W / 2}
          y={H / 2 + 2}
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="9"
          letterSpacing="0.16em"
          fill={MUTED}
        >
          OCCUPANT
        </text>

        {/* Width dimension (top) */}
        <g fontFamily={MONO} fontSize="10" fill={INK}>
          <line x1={x0} y1={y0 - 18} x2={x0 + planW} y2={y0 - 18} stroke={INK} strokeWidth="0.6" />
          <line x1={x0} y1={y0 - 22} x2={x0} y2={y0 - 14} stroke={INK} strokeWidth="0.6" />
          <line x1={x0 + planW} y1={y0 - 22} x2={x0 + planW} y2={y0 - 14} stroke={INK} strokeWidth="0.6" />
          <text x={x0 + planW / 2} y={y0 - 22} textAnchor="middle">
            1,180 mm
          </text>
        </g>

        {/* Depth dimension (right) */}
        <g fontFamily={MONO} fontSize="10" fill={INK}>
          <line
            x1={x0 + planW + 18}
            y1={y0}
            x2={x0 + planW + 18}
            y2={y0 + planH}
            stroke={INK}
            strokeWidth="0.6"
          />
          <line x1={x0 + planW + 14} y1={y0} x2={x0 + planW + 22} y2={y0} stroke={INK} strokeWidth="0.6" />
          <line
            x1={x0 + planW + 14}
            y1={y0 + planH}
            x2={x0 + planW + 22}
            y2={y0 + planH}
            stroke={INK}
            strokeWidth="0.6"
          />
          <text
            x={x0 + planW + 22}
            y={y0 + planH / 2 + 4}
            textAnchor="start"
            transform={`rotate(-90 ${x0 + planW + 22} ${y0 + planH / 2 + 4})`}
          >
            1,420 mm
          </text>
        </g>

        {/* No-egress marker */}
        <g fontFamily={MONO} fontSize="9" fill={ACCENT}>
          <text x={x0 + 4} y={H - 6}>NO EGRESS · 360°</text>
        </g>

        {/* Height callout */}
        <g fontFamily={MONO} fontSize="9" fill={MUTED}>
          <text x={W - 8} y={H - 6} textAnchor="end">H 2,180 mm</text>
        </g>
      </svg>
    </DiagramFrame>
  );
}

// ─── Phase 02 — sedation curve ────────────────────────────────────────
export function SedationCurve() {
  const W = 480;
  const H = 240;
  const padL = 60;
  const padR = 30;
  const padT = 24;
  const padB = 40;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  // Curve from lucid (top-left, t=0, c=1) to submerged (bottom-right, t=30 days, c=0)
  // Steeper drop early, asymptotic at the end — sigmoid-ish.
  const points: Array<[number, number]> = [];
  for (let i = 0; i <= 40; i++) {
    const t = i / 40; // 0..1
    // sigmoid descent
    const c = 1 / (1 + Math.exp(8 * (t - 0.4)));
    const x = padL + t * innerW;
    const y = padT + (1 - c) * innerH;
    points.push([x, y]);
  }
  const path = "M " + points.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(" L ");

  return (
    <DiagramFrame label="Fig. 02 — Sedation curve · default profile" height={240}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" style={{ display: "block" }}>
        {/* Grid */}
        <g stroke={LINE_SOFT}>
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={`gv${i}`}
              x1={padL + (innerW / 4) * i}
              y1={padT}
              x2={padL + (innerW / 4) * i}
              y2={padT + innerH}
            />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line
              key={`gh${i}`}
              x1={padL}
              y1={padT + (innerH / 4) * i}
              x2={padL + innerW}
              y2={padT + (innerH / 4) * i}
            />
          ))}
        </g>

        {/* Axes */}
        <line x1={padL} y1={padT + innerH} x2={padL + innerW} y2={padT + innerH} stroke={INK} strokeWidth="1.2" />
        <line x1={padL} y1={padT} x2={padL} y2={padT + innerH} stroke={INK} strokeWidth="1.2" />

        {/* Curve */}
        <path d={path} fill="none" stroke={INK} strokeWidth="2" />
        {/* End marker */}
        <circle cx={points[points.length - 1][0]} cy={points[points.length - 1][1]} r="4" fill={ACCENT} />
        <circle cx={points[0][0]} cy={points[0][1]} r="4" fill={INK} />

        {/* Y-axis labels */}
        <g fontFamily={MONO} fontSize="9" fill={MUTED}>
          <text x={padL - 8} y={padT + 4} textAnchor="end">LUCID</text>
          <text x={padL - 8} y={padT + innerH + 4} textAnchor="end">SUBMERGED</text>
        </g>

        {/* X-axis labels */}
        <g fontFamily={MONO} fontSize="9" fill={MUTED}>
          <text x={padL} y={padT + innerH + 18} textAnchor="middle">DAY 0</text>
          <text x={padL + innerW / 2} y={padT + innerH + 18} textAnchor="middle">DAY 15</text>
          <text x={padL + innerW} y={padT + innerH + 18} textAnchor="middle">DAY 30</text>
        </g>

        {/* Cooling-off marker (vertical line at day 30 / x=padL+innerW) */}
        <g>
          <line
            x1={padL + innerW}
            y1={padT - 4}
            x2={padL + innerW}
            y2={padT + innerH + 4}
            stroke={ACCENT}
            strokeWidth="0.6"
            strokeDasharray="2 3"
          />
          <text
            x={padL + innerW - 4}
            y={padT + 12}
            textAnchor="end"
            fontFamily={MONO}
            fontSize="9"
            fill={ACCENT}
          >
            COOLING-OFF EXPIRES
          </text>
        </g>
      </svg>
    </DiagramFrame>
  );
}

// ─── Phase 03 — port map ──────────────────────────────────────────────
export function PortMap() {
  const W = 480;
  const H = 320;

  const ports = [
    { x: 120, y: 70, color: SAGE, label: "Cervical L", flow: "analgesic" },
    { x: 360, y: 70, color: SAGE, label: "Cervical R", flow: "analgesic" },
    { x: 80, y: 160, color: AMBER, label: "Brachial L", flow: "chemical" },
    { x: 400, y: 160, color: AMBER, label: "Brachial R", flow: "chemical" },
    { x: 180, y: 230, color: COBALT, label: "Abdominal L", flow: "nutrient" },
    { x: 300, y: 230, color: COBALT, label: "Abdominal R", flow: "nutrient" },
    { x: 200, y: 280, color: ACCENT, label: "Lumbar out L", flow: "energy → grid" },
    { x: 280, y: 280, color: ACCENT, label: "Lumbar out R", flow: "energy → grid" },
  ];

  return (
    <DiagramFrame label="Fig. 03 — Cutaneous ports · 6 in · 2 out" height={320}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" style={{ display: "block" }}>
        {/* Outline of an occupant's anterior aspect — abstract, no anatomical detail */}
        <g stroke={HAIR} strokeWidth="0.8" fill={BG_SOFT}>
          <ellipse cx={W / 2} cy="48" rx="32" ry="36" />
          {/* shoulders */}
          <path
            d={`M ${W / 2 - 70} 100 Q ${W / 2 - 90} 110 ${W / 2 - 88} 130 L ${W / 2 - 72} 250 Q ${W / 2 - 70} 285 ${W / 2 - 40} 295 L ${W / 2 + 40} 295 Q ${W / 2 + 70} 285 ${W / 2 + 72} 250 L ${W / 2 + 88} 130 Q ${W / 2 + 90} 110 ${W / 2 + 70} 100 Q ${W / 2 + 32} 84 ${W / 2} 84 Q ${W / 2 - 32} 84 ${W / 2 - 70} 100 Z`}
          />
        </g>

        {/* Ports */}
        {ports.map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="6" fill={PAPER} stroke={INK} strokeWidth="1" />
            <circle cx={p.x} cy={p.y} r="2.4" fill={p.color} />
            {/* Leader line to label outside */}
            <line
              x1={p.x}
              y1={p.y}
              x2={p.x < W / 2 ? 30 : W - 30}
              y2={p.y}
              stroke={HAIR}
              strokeWidth="0.4"
              strokeDasharray="2 2"
            />
            <text
              x={p.x < W / 2 ? 26 : W - 26}
              y={p.y - 4}
              textAnchor={p.x < W / 2 ? "end" : "start"}
              fontFamily={MONO}
              fontSize="9"
              fill={INK}
              fontWeight={500}
            >
              {p.label}
            </text>
            <text
              x={p.x < W / 2 ? 26 : W - 26}
              y={p.y + 6}
              textAnchor={p.x < W / 2 ? "end" : "start"}
              fontFamily={MONO}
              fontSize="8"
              fill={MUTED}
            >
              {p.flow}
            </text>
          </g>
        ))}
      </svg>
    </DiagramFrame>
  );
}

// ─── Phase 04 — live harvest dashboard ────────────────────────────────
interface DashboardProps {
  TI: number;
  CI: number;
  EI: number;
  LI: number;
  CE: number;
  PS: number;
  surplusLevel: number;
}

export function HarvestDashboard(m: DashboardProps) {
  const W = 480;
  const H = 280;

  // Normalize bars
  const maxBar = Math.max(m.TI, m.CI, m.EI, 10);
  const barW = (v: number) => Math.min(280, (v / maxBar) * 280);

  // CE dial: 0..1 fraction of circle filled
  const cx = 380;
  const cy = 110;
  const r = 36;
  const cePath = (() => {
    const angle = m.CE * Math.PI * 2;
    const x = cx + Math.sin(angle) * r;
    const y = cy - Math.cos(angle) * r;
    const large = m.CE > 0.5 ? 1 : 0;
    return `M ${cx} ${cy - r} A ${r} ${r} 0 ${large} 1 ${x.toFixed(2)} ${y.toFixed(2)}`;
  })();

  // Surplus tank
  const tankX = 340;
  const tankY = 180;
  const tankW = 80;
  const tankH = 70;
  const fillH = m.surplusLevel * (tankH - 4);

  return (
    <DiagramFrame label="Fig. 04 — Live harvest · this session" height={280}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" style={{ display: "block" }}>
        {/* Bars: TI / CI / EI / LI */}
        {[
          { label: "TI · time invested", value: m.TI },
          { label: "CI · cognitive load", value: m.CI },
          { label: "EI · emotional intensity", value: m.EI },
          { label: "LI · libidinal investment", value: m.LI },
        ].map((b, i) => {
          const y = 28 + i * 36;
          const bw = barW(b.value);
          const accentBar = b.label.startsWith("LI");
          return (
            <g key={b.label}>
              <text x={12} y={y - 6} fontFamily={MONO} fontSize="9" fill={MUTED}>
                {b.label}
              </text>
              <rect x={12} y={y} width="280" height="10" fill={BG_SOFT} stroke={LINE} strokeWidth="0.6" />
              <rect x={12} y={y} width={bw} height="10" fill={accentBar ? INK : INK_SOFT} />
              <text
                x={12 + bw + 6}
                y={y + 9}
                fontFamily={MONO}
                fontSize="9"
                fill={INK}
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {b.value.toFixed(2)}
              </text>
            </g>
          );
        })}

        {/* CE dial */}
        <g>
          <text x={cx} y={cy - r - 14} textAnchor="middle" fontFamily={MONO} fontSize="9" fill={MUTED}>
            CE
          </text>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={LINE} strokeWidth="2" />
          {m.CE > 0 && <path d={cePath} fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />}
          <text
            x={cx}
            y={cy + 4}
            textAnchor="middle"
            fontFamily={MONO}
            fontSize="14"
            fill={INK}
            fontWeight={600}
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {(m.CE * 100).toFixed(0)}%
          </text>
        </g>

        {/* Surplus Ψ tank */}
        <g>
          <text x={tankX + tankW / 2} y={tankY - 8} textAnchor="middle" fontFamily={MONO} fontSize="9" fill={MUTED}>
            Ψ TANK
          </text>
          <rect x={tankX} y={tankY} width={tankW} height={tankH} fill={BG_SOFT} stroke={INK} strokeWidth="1" />
          <rect
            x={tankX + 2}
            y={tankY + tankH - 2 - fillH}
            width={tankW - 4}
            height={fillH}
            fill={ACCENT}
          />
          <line
            x1={tankX}
            y1={tankY + tankH - fillH - 2}
            x2={tankX + tankW}
            y2={tankY + tankH - fillH - 2}
            stroke={ACCENT}
            strokeWidth="0.6"
          />
          <text
            x={tankX + tankW / 2}
            y={tankY + tankH + 14}
            textAnchor="middle"
            fontFamily={MONO}
            fontSize="11"
            fill={ACCENT}
            fontWeight={600}
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {m.PS.toFixed(2)}
          </text>
        </g>
      </svg>
    </DiagramFrame>
  );
}

// ─── Phase 05 — Form §6 flow ──────────────────────────────────────────
export function Form6Flow() {
  const W = 480;
  const H = 220;

  const boxes = [
    { x: 20, y: 80, w: 110, h: 60, label: "SUBMIT FORM §6" },
    { x: 180, y: 80, w: 110, h: 60, label: "ROUTED TO §6 OFFICE" },
    { x: 340, y: 80, w: 110, h: 60, label: "RETURNED UNDELIVERABLE" },
  ];

  return (
    <DiagramFrame label="Fig. 05 — Withdrawal protocol · Form §6" height={220}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" style={{ display: "block" }}>
        {boxes.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} fill={PAPER} stroke={INK} strokeWidth="1.2" />
            <text
              x={b.x + b.w / 2}
              y={b.y + b.h / 2 + 4}
              textAnchor="middle"
              fontFamily={MONO}
              fontSize="9.5"
              fill={INK}
              fontWeight={500}
            >
              {b.label}
            </text>
            {/* arrows */}
            {i < boxes.length - 1 && (
              <g>
                <line
                  x1={b.x + b.w + 4}
                  y1={b.y + b.h / 2}
                  x2={boxes[i + 1].x - 6}
                  y2={b.y + b.h / 2}
                  stroke={INK}
                  strokeWidth="1"
                />
                <path
                  d={`M ${boxes[i + 1].x - 10} ${b.y + b.h / 2 - 4} L ${boxes[i + 1].x - 4} ${b.y + b.h / 2} L ${boxes[i + 1].x - 10} ${b.y + b.h / 2 + 4} Z`}
                  fill={INK}
                />
              </g>
            )}
          </g>
        ))}
        {/* Loop-back arrow from rightmost box back to first box */}
        <g stroke={ACCENT} strokeWidth="1" fill="none">
          <path
            d={`M ${boxes[2].x + boxes[2].w / 2} ${boxes[2].y + boxes[2].h + 4} V 180 H ${boxes[0].x + boxes[0].w / 2} V ${boxes[0].y + boxes[0].h + 4}`}
          />
          <path
            d={`M ${boxes[0].x + boxes[0].w / 2 - 4} ${boxes[0].y + boxes[0].h + 10} L ${boxes[0].x + boxes[0].w / 2} ${boxes[0].y + boxes[0].h + 4} L ${boxes[0].x + boxes[0].w / 2 + 4} ${boxes[0].y + boxes[0].h + 10} Z`}
            fill={ACCENT}
          />
        </g>
        <text x={W / 2} y={196} textAnchor="middle" fontFamily={MONO} fontSize="9" fill={ACCENT}>
          RESUBMIT · LOOP
        </text>

        {/* Stamp on rightmost box */}
        <g transform={`translate(${boxes[2].x + boxes[2].w - 30}, ${boxes[2].y + 16}) rotate(-12)`}>
          <rect x="-32" y="-9" width="64" height="18" fill="none" stroke={ACCENT} strokeWidth="1.2" />
          <text x="0" y="3" textAnchor="middle" fontFamily={MONO} fontSize="9" fill={ACCENT} fontWeight={700}>
            UNDELIVERABLE
          </text>
        </g>
      </svg>
    </DiagramFrame>
  );
}

// ─── Phase 06 — re-issue clock ────────────────────────────────────────
export function ReissueClock({ dwellSec }: { dwellSec: number }) {
  const W = 480;
  const H = 240;
  const cx = W / 2;
  const cy = H / 2 + 10;
  const r = 80;

  // 8-minute cycle (480s). Position around the ring based on dwellSec.
  const cyclePos = (dwellSec % 480) / 480; // 0..1
  const remaining = 480 - (dwellSec % 480);
  const minutes = Math.floor(remaining / 60);
  const seconds = Math.floor(remaining % 60);
  const timeStr = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  const angle = cyclePos * Math.PI * 2 - Math.PI / 2;
  const tipX = cx + Math.cos(angle) * (r - 6);
  const tipY = cy + Math.sin(angle) * (r - 6);

  return (
    <DiagramFrame label="Fig. 06 — Re-issue cycle · T-minus next occupant" height={240}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" style={{ display: "block" }}>
        {/* Outer rim */}
        <circle cx={cx} cy={cy} r={r + 8} fill="none" stroke={LINE} strokeWidth="0.6" />
        <circle cx={cx} cy={cy} r={r} fill={BG_SOFT} stroke={INK} strokeWidth="1.4" />

        {/* Tick marks (every 30s = 360deg/16 = 22.5deg) */}
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2 - Math.PI / 2;
          const long = i % 4 === 0;
          const ri = r - (long ? 10 : 6);
          const ro = r - 2;
          return (
            <line
              key={i}
              x1={cx + Math.cos(a) * ri}
              y1={cy + Math.sin(a) * ri}
              x2={cx + Math.cos(a) * ro}
              y2={cy + Math.sin(a) * ro}
              stroke={INK}
              strokeWidth={long ? 1 : 0.5}
            />
          );
        })}

        {/* Hand */}
        <line x1={cx} y1={cy} x2={tipX} y2={tipY} stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="3" fill={INK} />

        {/* Center readout */}
        <text
          x={cx}
          y={cy - 16}
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="9"
          fill={MUTED}
          letterSpacing="0.16em"
        >
          T-MINUS
        </text>
        <text
          x={cx}
          y={cy + 32}
          textAnchor="middle"
          fontFamily={MONO}
          fontSize="22"
          fill={INK}
          fontWeight={700}
          letterSpacing="0.04em"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {timeStr}
        </text>

        {/* Cycle labels */}
        <g fontFamily={MONO} fontSize="9" fill={MUTED}>
          <text x={cx} y={cy - r - 16} textAnchor="middle">RE-ISSUE</text>
          <text x={cx + r + 24} y={cy + 4} textAnchor="start">2:00</text>
          <text x={cx} y={cy + r + 24} textAnchor="middle">4:00</text>
          <text x={cx - r - 24} y={cy + 4} textAnchor="end">6:00</text>
        </g>
      </svg>
    </DiagramFrame>
  );
}
