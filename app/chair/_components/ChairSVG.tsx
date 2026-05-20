/**
 * ChairSVG — The Apparatus.
 * A Vitruvian figure inscribed inside the Ouroboros Machine, ported from
 * the Claude Design handoff bundle (project/chair.jsx). Phase-aware:
 *   0 Ontogenesis (empty) → 1 Habitualization (seated) →
 *   2 Consumption (connected) → 3 Obsolescence (harvest dominant) →
 *   4 Stagnation (dim) → 5 Exit (empty again)
 *
 * Theme palette restricted to "light" to match the clinical product-page
 * register of the surrounding /chair shell. Other palettes from the bundle
 * (red / blueprint / dark) are dropped on purpose — they belong to the
 * design-bundle's standalone register; here the chair is the depth, not
 * the chrome.
 */

import React from "react";

type Theme = "light";

interface ChairSVGProps {
  phase?: number; // 0..5
  theme?: Theme;
  surplusLevel?: number; // 0..1 — fluid level in recycle tank
  glitch?: number; // 0..1 — escalating fracture overlay
  showAnnotations?: boolean;
  width?: number | string;
  height?: number | string;
}

const PHASE_NAMES = [
  "Ontogenesis",
  "Habitualization",
  "Consumption",
  "Obsolescence",
  "Stagnation",
  "Exit",
];
const PHASE_ANGLES = [-90, -30, 30, 90, 150, 210];

// Canvas constants
const CX = 400;
const CY = 560;
const R_ZODIAC_OUT = 432;
const R_ZODIAC_IN = 398;
const R_RING_OUT = 388;
const R_RING_IN = 364;
const R_INSCRIBED = 360;

const PAL = {
  light: {
    ink: "#0a0a0a",
    hair: "rgba(10,10,10,0.55)",
    ghost: "rgba(10,10,10,0.16)",
    cream: "#f6f4ef",
    polymer: "#ffffff",
    blood: "#e23b2a",
    cobalt: "#2c4a6e",
    amber: "#c08643",
    sage: "#5a6e54",
    muted: "#6b6b66",
  },
} as const;

function tickPath(angleDeg: number, ri: number, ro: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return `M ${CX + Math.cos(rad) * ri} ${CY + Math.sin(rad) * ri} L ${CX + Math.cos(rad) * ro} ${CY + Math.sin(rad) * ro}`;
}

export default function ChairSVG({
  phase = 2,
  theme = "light",
  surplusLevel = 0,
  glitch = 0,
  showAnnotations = true,
  width,
  height,
}: ChairSVGProps) {
  const c = PAL[theme];

  // Phase-driven visibility / opacity
  const figVis = phase >= 1 && phase < 5;
  const figOp =
    phase === 1 ? 0.45 : phase === 2 ? 0.92 : phase === 3 ? 0.78 : phase === 4 ? 0.42 : 0;
  const tubesOn = phase >= 2;
  const tubesOp = phase >= 2 ? Math.min(1, (phase - 1) * 0.6) : 0;
  const headgearDown = phase >= 2;
  const screensLit = phase >= 2 && phase < 5;

  return (
    <svg
      viewBox="0 0 800 1100"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", maxWidth: "100%", height: "auto", overflow: "visible" }}
      aria-label="The Ouroboros Life System apparatus"
    >
      <defs>
        <radialGradient id="ols-floor-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.18)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <linearGradient id="ols-polymer-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.polymer} />
          <stop offset="100%" stopColor={c.cream} stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="ols-chrome-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.hair} stopOpacity="0.6" />
          <stop offset="50%" stopColor={c.cream} />
          <stop offset="100%" stopColor={c.hair} stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="ols-tank-fluid" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={c.blood} stopOpacity="0.85" />
          <stop offset="60%" stopColor={c.amber} stopOpacity="0.6" />
          <stop offset="100%" stopColor={c.amber} stopOpacity="0" />
        </linearGradient>
        <pattern id="ols-flow-cobalt" patternUnits="userSpaceOnUse" width="16" height="6">
          <rect width="16" height="6" fill={c.cobalt} opacity="0.20" />
          <rect width="6" height="6" fill={c.cobalt} opacity="0.7">
            <animate attributeName="x" from="-16" to="16" dur="2s" repeatCount="indefinite" />
          </rect>
        </pattern>
        <pattern id="ols-flow-amber" patternUnits="userSpaceOnUse" width="14" height="5">
          <rect width="14" height="5" fill={c.amber} opacity="0.20" />
          <rect width="5" height="5" fill={c.amber} opacity="0.7">
            <animate attributeName="x" from="-14" to="14" dur="2.6s" repeatCount="indefinite" />
          </rect>
        </pattern>
        <pattern id="ols-flow-blood" patternUnits="userSpaceOnUse" width="22" height="6">
          <rect width="22" height="6" fill={c.blood} opacity="0.18" />
          <rect width="6" height="6" fill={c.blood} opacity="0.8">
            <animate attributeName="x" from="-22" to="22" dur="1.4s" repeatCount="indefinite" />
          </rect>
        </pattern>
      </defs>

      {/* ─── ZODIAC: OHCOSE phase ring ─────────────────────────────── */}
      <circle cx={CX} cy={CY} r={R_ZODIAC_OUT} fill="none" stroke={c.hair} strokeWidth="0.4" />
      <circle cx={CX} cy={CY} r={R_ZODIAC_IN} fill="none" stroke={c.hair} strokeWidth="0.4" />

      <g stroke={c.hair} strokeWidth="0.4">
        {Array.from({ length: 60 }).map((_, i) => {
          const a = i * 6;
          const long = i % 5 === 0;
          const ri = long ? R_ZODIAC_IN : R_ZODIAC_IN + 6;
          const ro = R_ZODIAC_OUT;
          return <path key={i} d={tickPath(a - 90, ri, ro)} />;
        })}
      </g>

      {/* OHCOSE labels around the ring */}
      {showAnnotations &&
        PHASE_NAMES.map((name, i) => {
          const a = PHASE_ANGLES[i];
          const rad = (a * Math.PI) / 180;
          const r = (R_ZODIAC_OUT + R_ZODIAC_IN) / 2;
          const x = CX + Math.cos(rad) * r;
          const y = CY + Math.sin(rad) * r;
          const rot = a + 90;
          const isCurrent = i === phase;
          return (
            <g key={name} transform={`translate(${x}, ${y}) rotate(${rot})`}>
              <text
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="var(--font-jetbrains-mono), ui-monospace, monospace"
                fontSize="11"
                letterSpacing="0.22em"
                fill={isCurrent ? c.blood : c.hair}
                fontWeight={isCurrent ? 500 : 400}
              >
                {name.toUpperCase()}
              </text>
            </g>
          );
        })}

      {/* Vitruvian inscribed square + diagonals */}
      <g stroke={c.ghost} strokeWidth="0.4" fill="none">
        <rect
          x={CX - R_INSCRIBED * Math.SQRT1_2}
          y={CY - R_INSCRIBED * Math.SQRT1_2}
          width={2 * R_INSCRIBED * Math.SQRT1_2}
          height={2 * R_INSCRIBED * Math.SQRT1_2}
        />
        <line x1={CX - R_INSCRIBED} y1={CY} x2={CX + R_INSCRIBED} y2={CY} />
        <line x1={CX} y1={CY - R_INSCRIBED} x2={CX} y2={CY + R_INSCRIBED} />
        <line
          x1={CX - R_INSCRIBED * 0.7}
          y1={CY - R_INSCRIBED * 0.7}
          x2={CX + R_INSCRIBED * 0.7}
          y2={CY + R_INSCRIBED * 0.7}
        />
        <line
          x1={CX - R_INSCRIBED * 0.7}
          y1={CY + R_INSCRIBED * 0.7}
          x2={CX + R_INSCRIBED * 0.7}
          y2={CY - R_INSCRIBED * 0.7}
        />
      </g>

      {/* Structural Ouroboros ring */}
      <circle cx={CX} cy={CY} r={R_RING_OUT} fill={c.cream} stroke={c.ink} strokeWidth="1.1" opacity={0.4} />
      <circle cx={CX} cy={CY} r={R_RING_OUT} fill="none" stroke={c.ink} strokeWidth="1.0" />
      <circle cx={CX} cy={CY} r={R_RING_IN} fill="none" stroke={c.ink} strokeWidth="0.8" />
      <circle cx={CX} cy={CY} r={R_RING_OUT - 4} fill="none" stroke={c.hair} strokeWidth="0.3" />
      <circle cx={CX} cy={CY} r={R_RING_IN + 4} fill="none" stroke={c.hair} strokeWidth="0.3" />

      {/* Snake-mouth seam */}
      <g transform={`translate(${CX}, ${CY + R_RING_OUT})`}>
        <path
          d="M -28 -3 Q -14 -16 0 -2 Q 14 -16 28 -3 Q 14 2 0 -1 Q -14 2 -28 -3 Z"
          fill={c.cream}
          stroke={c.ink}
          strokeWidth="0.7"
        />
        <circle cx="-12" cy="-6" r="1.4" fill={c.ink} />
        <circle cx="-4" cy="-2" r="0.8" fill={c.ink} />
        <circle cx="4" cy="-2" r="0.8" fill={c.ink} />
      </g>

      {/* LED indicators (phase >= 2) — deterministic flicker via SVG <animate> */}
      {phase >= 2 &&
        Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const x = CX + Math.cos(a) * (R_RING_OUT - 12);
          const y = CY + Math.sin(a) * (R_RING_OUT - 12);
          const phaseOffset = (i * 0.13) % 1;
          return (
            <circle key={i} cx={x} cy={y} r="1.6" fill={c.blood} opacity="0.55">
              <animate
                attributeName="opacity"
                values="0.35;0.85;0.35"
                dur="1.8s"
                begin={`-${phaseOffset * 1.8}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}

      {/* ─── CHAIR ───────────────────────────────────────────────── */}
      {/* Pedestal */}
      <g>
        <ellipse cx={CX} cy={930} rx={140} ry={14} fill={c.cream} stroke={c.ink} strokeWidth="0.8" />
        <ellipse cx={CX} cy={935} rx={140} ry={10} fill={c.hair} opacity="0.5" />
        <path
          d={`M ${CX - 40} 930 L ${CX - 60} 800 L ${CX + 60} 800 L ${CX + 40} 930 Z`}
          fill="url(#ols-chrome-grad)"
          stroke={c.ink}
          strokeWidth="0.8"
        />
        <line x1={CX - 50} y1={870} x2={CX + 50} y2={870} stroke={c.hair} strokeWidth="0.3" />
        <line x1={CX - 50} y1={900} x2={CX + 50} y2={900} stroke={c.hair} strokeWidth="0.3" />
      </g>

      {/* Seat pan */}
      <g>
        <path
          d={`M ${CX - 130} 720 L ${CX + 130} 720 L ${CX + 110} 800 L ${CX - 110} 800 Z`}
          fill="url(#ols-polymer-grad)"
          stroke={c.ink}
          strokeWidth="0.9"
        />
        <path d={`M ${CX - 116} 740 L ${CX + 116} 740`} fill="none" stroke={c.hair} strokeWidth="0.4" />
        <path d={`M ${CX - 110} 770 L ${CX + 110} 770`} fill="none" stroke={c.hair} strokeWidth="0.4" />
      </g>

      {/* Armrests */}
      <g>
        <path
          d={`M ${CX - 165} 680 L ${CX - 130} 680 L ${CX - 130} 720 L ${CX - 130} 760 L ${CX - 170} 760 Z`}
          fill="url(#ols-polymer-grad)"
          stroke={c.ink}
          strokeWidth="0.9"
        />
        <path
          d={`M ${CX + 165} 680 L ${CX + 130} 680 L ${CX + 130} 720 L ${CX + 130} 760 L ${CX + 170} 760 Z`}
          fill="url(#ols-polymer-grad)"
          stroke={c.ink}
          strokeWidth="0.9"
        />
        <rect x={CX - 162} y={690} width="28" height="14" rx="2" fill={c.cream} stroke={c.ink} strokeWidth="0.5" opacity="0.9" />
        <rect x={CX + 134} y={690} width="28" height="14" rx="2" fill={c.cream} stroke={c.ink} strokeWidth="0.5" opacity="0.9" />
        {[0, 1, 2].map((i) => (
          <circle key={`l${i}`} cx={CX - 156 + i * 9} cy={697} r="1.3" fill={c.ink} opacity="0.7" />
        ))}
        {[0, 1, 2].map((i) => (
          <circle key={`r${i}`} cx={CX + 140 + i * 9} cy={697} r="1.3" fill={c.ink} opacity="0.7" />
        ))}
      </g>

      {/* Backrest */}
      <g>
        <path
          d={`M ${CX - 130} 720 L ${CX - 122} 380 Q ${CX - 122} 365 ${CX - 108} 365 L ${CX + 108} 365 Q ${CX + 122} 365 ${CX + 122} 380 L ${CX + 130} 720 Z`}
          fill="url(#ols-polymer-grad)"
          stroke={c.ink}
          strokeWidth="0.9"
        />
        <line x1={CX} y1={380} x2={CX} y2={720} stroke={c.hair} strokeWidth="0.4" />
        <path d={`M ${CX - 100} 410 Q ${CX - 95} 500 ${CX - 105} 700`} fill="none" stroke={c.hair} strokeWidth="0.3" />
        <path d={`M ${CX + 100} 410 Q ${CX + 95} 500 ${CX + 105} 700`} fill="none" stroke={c.hair} strokeWidth="0.3" />
      </g>

      {/* Headrest */}
      <g>
        <path
          d={`M ${CX - 85} 280 Q ${CX - 85} 250 ${CX - 60} 248 L ${CX + 60} 248 Q ${CX + 85} 250 ${CX + 85} 280 L ${CX + 85} 365 L ${CX - 85} 365 Z`}
          fill="url(#ols-polymer-grad)"
          stroke={c.ink}
          strokeWidth="0.9"
        />
        <line x1={CX} y1={258} x2={CX} y2={360} stroke={c.hair} strokeWidth="0.4" />
      </g>

      {/* ─── VITRUVIAN FIGURE (occupant) ───────────────────────────── */}
      {figVis && (
        <g opacity={figOp} style={{ transition: "opacity 0.7s ease" }}>
          {/* Vitruvian double-figure ghost */}
          <g stroke={c.ghost} strokeWidth="0.7" fill="none">
            <line x1={CX - 360} y1={CY - 50} x2={CX + 360} y2={CY - 50} />
            <line x1={CX} y1={CY} x2={CX - 250} y2={CY + 250} />
            <line x1={CX} y1={CY} x2={CX + 250} y2={CY + 250} />
          </g>

          <g stroke={c.ink} strokeWidth="0.9" fill="none">
            {/* head */}
            <circle cx={CX} cy={310} r={36} fill={c.polymer} stroke={c.ink} />
            <path d={`M ${CX - 30} 295 Q ${CX} 280 ${CX + 30} 295`} stroke={c.hair} strokeWidth="0.4" />
            <circle cx={CX - 11} cy={310} r="1.4" fill={c.ink} />
            <circle cx={CX + 11} cy={310} r="1.4" fill={c.ink} />
            <line x1={CX} y1={315} x2={CX} y2={322} stroke={c.hair} strokeWidth="0.4" />
            <path d={`M ${CX - 6} 330 Q ${CX} 333 ${CX + 6} 330`} stroke={c.hair} strokeWidth="0.4" />
            {/* neck */}
            <path d={`M ${CX - 14} 348 L ${CX - 18} 380 L ${CX + 18} 380 L ${CX + 14} 348`} fill={c.polymer} />
            {/* torso */}
            <path
              d={`M ${CX - 70} 410 Q ${CX - 90} 420 ${CX - 78} 470 L ${CX - 70} 580 Q ${CX - 60} 620 ${CX - 50} 700 L ${CX + 50} 700 Q ${CX + 60} 620 ${CX + 70} 580 L ${CX + 78} 470 Q ${CX + 90} 420 ${CX + 70} 410 Q ${CX + 50} 388 ${CX} 388 Q ${CX - 50} 388 ${CX - 70} 410 Z`}
              fill={c.polymer}
            />
            <path d={`M ${CX - 60} 460 Q ${CX} 470 ${CX + 60} 460`} stroke={c.hair} strokeWidth="0.35" fill="none" />
            <path d={`M ${CX - 65} 490 Q ${CX} 502 ${CX + 65} 490`} stroke={c.hair} strokeWidth="0.35" fill="none" />
            <path d={`M ${CX - 68} 520 Q ${CX} 534 ${CX + 68} 520`} stroke={c.hair} strokeWidth="0.35" fill="none" />
            <path d={`M ${CX - 68} 550 Q ${CX} 566 ${CX + 68} 550`} stroke={c.hair} strokeWidth="0.35" fill="none" />
            <line x1={CX} y1={400} x2={CX} y2={580} stroke={c.hair} strokeWidth="0.35" />
            {/* arms */}
            <path
              d={`M ${CX - 78} 420 Q ${CX - 110} 460 ${CX - 138} 510 Q ${CX - 150} 600 ${CX - 150} 680 L ${CX - 130} 680 L ${CX - 130} 590 Q ${CX - 100} 480 ${CX - 70} 440`}
              fill={c.polymer}
            />
            <path
              d={`M ${CX + 78} 420 Q ${CX + 110} 460 ${CX + 138} 510 Q ${CX + 150} 600 ${CX + 150} 680 L ${CX + 130} 680 L ${CX + 130} 590 Q ${CX + 100} 480 ${CX + 70} 440`}
              fill={c.polymer}
            />
            {/* legs */}
            <path d={`M ${CX - 50} 720 Q ${CX - 60} 800 ${CX - 55} 870 L ${CX - 30} 870 Q ${CX - 25} 800 ${CX - 18} 720 Z`} fill={c.polymer} />
            <path d={`M ${CX + 50} 720 Q ${CX + 60} 800 ${CX + 55} 870 L ${CX + 30} 870 Q ${CX + 25} 800 ${CX + 18} 720 Z`} fill={c.polymer} />
          </g>

          {/* Port markings on body (when tubes engaged) */}
          {tubesOn && (
            <g style={{ opacity: tubesOp, transition: "opacity 0.6s" }}>
              <circle cx={CX - 22} cy={510} r="3.5" fill={c.cream} stroke={c.ink} strokeWidth="0.7" />
              <circle cx={CX + 22} cy={510} r="3.5" fill={c.cream} stroke={c.ink} strokeWidth="0.7" />
              <circle cx={CX - 22} cy={510} r="1.2" fill={c.cobalt} />
              <circle cx={CX + 22} cy={510} r="1.2" fill={c.cobalt} />
              <circle cx={CX - 125} cy={550} r="3" fill={c.cream} stroke={c.ink} strokeWidth="0.6" />
              <circle cx={CX + 125} cy={550} r="3" fill={c.cream} stroke={c.ink} strokeWidth="0.6" />
              <circle cx={CX - 125} cy={550} r="1" fill={c.amber} />
              <circle cx={CX + 125} cy={550} r="1" fill={c.amber} />
              <circle cx={CX - 14} cy={370} r="2.4" fill={c.cream} stroke={c.ink} strokeWidth="0.6" />
              <circle cx={CX + 14} cy={370} r="2.4" fill={c.cream} stroke={c.ink} strokeWidth="0.6" />
              <circle cx={CX - 14} cy={370} r="0.9" fill={c.sage} />
              <circle cx={CX + 14} cy={370} r="0.9" fill={c.sage} />
              <circle cx={CX - 40} cy={780} r="2.4" fill={c.cream} stroke={c.ink} strokeWidth="0.6" />
              <circle cx={CX + 40} cy={780} r="2.4" fill={c.cream} stroke={c.ink} strokeWidth="0.6" />
              <circle cx={CX - 40} cy={780} r="0.9" fill={c.blood} />
              <circle cx={CX + 40} cy={780} r="0.9" fill={c.blood} />
            </g>
          )}
        </g>
      )}

      {/* ─── TUBES ─────────────────────────────────────────────────── */}
      {tubesOn && (
        <g style={{ opacity: tubesOp, transition: "opacity 0.6s" }}>
          {/* Nutrient (cobalt) */}
          <g>
            <path
              d={`M ${CX - 80} ${CY - R_RING_IN + 14} C ${CX - 50} 380 ${CX - 30} 460 ${CX - 22} 510`}
              fill="none"
              stroke={c.cobalt}
              strokeWidth="4.5"
              opacity="0.9"
            />
            <path
              d={`M ${CX + 80} ${CY - R_RING_IN + 14} C ${CX + 50} 380 ${CX + 30} 460 ${CX + 22} 510`}
              fill="none"
              stroke={c.cobalt}
              strokeWidth="4.5"
              opacity="0.9"
            />
            <path
              d={`M ${CX - 80} ${CY - R_RING_IN + 14} C ${CX - 50} 380 ${CX - 30} 460 ${CX - 22} 510`}
              fill="none"
              stroke="url(#ols-flow-cobalt)"
              strokeWidth="4.5"
            />
            <path
              d={`M ${CX + 80} ${CY - R_RING_IN + 14} C ${CX + 50} 380 ${CX + 30} 460 ${CX + 22} 510`}
              fill="none"
              stroke="url(#ols-flow-cobalt)"
              strokeWidth="4.5"
            />
          </g>
          {/* Chemical (amber) */}
          <g>
            <path
              d={`M ${CX - R_RING_IN + 16} ${CY - 40} C ${CX - 240} ${CY} ${CX - 180} 530 ${CX - 125} 550`}
              fill="none"
              stroke={c.amber}
              strokeWidth="3.6"
              opacity="0.85"
            />
            <path
              d={`M ${CX + R_RING_IN - 16} ${CY - 40} C ${CX + 240} ${CY} ${CX + 180} 530 ${CX + 125} 550`}
              fill="none"
              stroke={c.amber}
              strokeWidth="3.6"
              opacity="0.85"
            />
            <path
              d={`M ${CX - R_RING_IN + 16} ${CY - 40} C ${CX - 240} ${CY} ${CX - 180} 530 ${CX - 125} 550`}
              fill="none"
              stroke="url(#ols-flow-amber)"
              strokeWidth="3.6"
            />
            <path
              d={`M ${CX + R_RING_IN - 16} ${CY - 40} C ${CX + 240} ${CY} ${CX + 180} 530 ${CX + 125} 550`}
              fill="none"
              stroke="url(#ols-flow-amber)"
              strokeWidth="3.6"
            />
          </g>
          {/* Analgesic (sage) */}
          <g>
            <path
              d={`M ${CX - 150} ${CY - 280} C ${CX - 90} ${CY - 240} ${CX - 30} 370 ${CX - 14} 370`}
              fill="none"
              stroke={c.sage}
              strokeWidth="2.4"
              opacity="0.85"
            />
            <path
              d={`M ${CX + 150} ${CY - 280} C ${CX + 90} ${CY - 240} ${CX + 30} 370 ${CX + 14} 370`}
              fill="none"
              stroke={c.sage}
              strokeWidth="2.4"
              opacity="0.85"
            />
          </g>
          {/* Energy (blood) — outbound */}
          <g>
            <path
              d={`M ${CX} 770 C ${CX + 140} 760 ${CX + 280} 760 ${CX + R_RING_IN - 10} ${CY + 80}`}
              fill="none"
              stroke={c.blood}
              strokeWidth="4.5"
              opacity="0.95"
            />
            <path
              d={`M ${CX} 770 C ${CX - 140} 760 ${CX - 280} 760 ${CX - R_RING_IN + 10} ${CY + 80}`}
              fill="none"
              stroke={c.blood}
              strokeWidth="4.5"
              opacity="0.95"
            />
            <path
              d={`M ${CX} 770 C ${CX + 140} 760 ${CX + 280} 760 ${CX + R_RING_IN - 10} ${CY + 80}`}
              fill="none"
              stroke="url(#ols-flow-blood)"
              strokeWidth="4.5"
            />
            <path
              d={`M ${CX} 770 C ${CX - 140} 760 ${CX - 280} 760 ${CX - R_RING_IN + 10} ${CY + 80}`}
              fill="none"
              stroke="url(#ols-flow-blood)"
              strokeWidth="4.5"
            />
          </g>
          {/* Waste */}
          <g>
            <path
              d={`M ${CX} 800 C ${CX - 30} 880 ${CX - 100} 950 ${CX - 160} 1020`}
              fill="none"
              stroke={c.hair}
              strokeWidth="10"
              opacity="0.4"
            />
            <path
              d={`M ${CX} 800 C ${CX - 30} 880 ${CX - 100} 950 ${CX - 160} 1020`}
              fill="none"
              stroke={c.ink}
              strokeWidth="0.4"
              strokeDasharray="3 4"
              opacity="0.8"
            />
          </g>
        </g>
      )}

      {/* ─── VR/AR HEADGEAR — descends when phase >= 2 ──────────────── */}
      <g
        style={{
          transform: headgearDown ? "translateY(0)" : "translateY(-60px)",
          transformOrigin: `${CX}px 260px`,
          transition: "transform 0.8s ease-out",
          opacity: headgearDown ? 1 : 0,
        }}
      >
        <path
          d={`M ${CX} ${CY - R_RING_IN + 18} L ${CX - 6} 260 L ${CX - 70} 260`}
          stroke={c.ink}
          strokeWidth="1.2"
          fill="none"
        />
        <rect x={CX - 80} y={290} width="160" height="44" rx="14" fill={c.polymer} stroke={c.ink} strokeWidth="0.9" />
        <rect x={CX - 72} y={296} width="144" height="32" rx="8" fill={c.ink} opacity="0.9" />
        <ellipse cx={CX - 36} cy={312} rx="14" ry="9" fill="#0c0c12" />
        <ellipse cx={CX + 36} cy={312} rx="14" ry="9" fill="#0c0c12" />
        <ellipse cx={CX - 40} cy={308} rx="4" ry="2.4" fill="rgba(255,255,255,0.6)" />
        <ellipse cx={CX + 32} cy={308} rx="4" ry="2.4" fill="rgba(255,255,255,0.6)" />
        <path d={`M ${CX - 80} 318 L ${CX - 110} 340`} stroke={c.ink} strokeWidth="1" />
        <path d={`M ${CX + 80} 318 L ${CX + 110} 340`} stroke={c.ink} strokeWidth="1" />
      </g>

      {/* ─── ARTICULATED MONITORS ───────────────────────────────────── */}
      <g>
        <path d={`M ${CX - 170} 720 L ${CX - 250} 600 L ${CX - 290} 480`} fill="none" stroke={c.ink} strokeWidth="1.2" />
        <circle cx={CX - 250} cy={600} r="3" fill={c.cream} stroke={c.ink} strokeWidth="0.6" />
        <rect x={CX - 370} y={400} width="160" height="100" rx="3" fill={c.polymer} stroke={c.ink} strokeWidth="1" />
        <rect
          x={CX - 363}
          y={407}
          width="146"
          height="86"
          rx="2"
          fill={screensLit ? "#0a0d14" : c.cream}
          stroke={c.ink}
          strokeWidth="0.4"
        />
        {screensLit && (
          <g>
            <rect x={CX - 358} y={414} width="60" height="3" fill="#7aa8ff" opacity="0.8" />
            <rect x={CX - 358} y={422} width="100" height="2" fill="#7aa8ff" opacity="0.4" />
            <rect x={CX - 358} y={428} width="80" height="2" fill="#7aa8ff" opacity="0.4" />
            <rect x={CX - 358} y={440} width="136" height="40" rx="1" fill="#7aa8ff" opacity="0.07" />
            <path
              d={`M ${CX - 356} 470 L ${CX - 340} 460 L ${CX - 320} 466 L ${CX - 300} 450 L ${CX - 280} 458 L ${CX - 260} 446 L ${CX - 240} 454 L ${CX - 224} 442`}
              stroke="#7aa8ff"
              strokeWidth="0.6"
              fill="none"
            />
          </g>
        )}

        <path d={`M ${CX + 170} 720 L ${CX + 250} 600 L ${CX + 290} 480`} fill="none" stroke={c.ink} strokeWidth="1.2" />
        <circle cx={CX + 250} cy={600} r="3" fill={c.cream} stroke={c.ink} strokeWidth="0.6" />
        <rect x={CX + 210} y={400} width="160" height="100" rx="3" fill={c.polymer} stroke={c.ink} strokeWidth="1" />
        <rect
          x={CX + 217}
          y={407}
          width="146"
          height="86"
          rx="2"
          fill={screensLit ? "#0a0d14" : c.cream}
          stroke={c.ink}
          strokeWidth="0.4"
        />
        {screensLit && (
          <g>
            <rect x={CX + 222} y={414} width="136" height="60" fill={c.blood} opacity="0.10" />
            <circle cx={CX + 320} cy={444} r="14" fill={c.amber} opacity="0.6" />
            <circle cx={CX + 320} cy={444} r="6" fill={c.blood} opacity="0.8" />
            <rect x={CX + 222} y={478} width="40" height="3" fill={c.amber} opacity="0.7" />
            <rect x={CX + 222} y={484} width="80" height="2" fill={c.amber} opacity="0.4" />
          </g>
        )}
      </g>

      {/* ─── RECYCLE TANK ───────────────────────────────────────────── */}
      <g transform={`translate(${CX - 280}, ${CY + 240})`}>
        <rect x="-30" y="-90" width="60" height="100" rx="4" fill={c.cream} stroke={c.ink} strokeWidth="1" />
        <rect
          x="-26"
          y={-86 + (1 - surplusLevel) * 92}
          width="52"
          height={surplusLevel * 92}
          fill="url(#ols-tank-fluid)"
        />
        <line
          x1="-22"
          y1={-86 + (1 - surplusLevel) * 92}
          x2="22"
          y2={-86 + (1 - surplusLevel) * 92}
          stroke={c.cream}
          strokeWidth="0.6"
          opacity="0.7"
        />
        <text
          x="0"
          y="22"
          textAnchor="middle"
          fontFamily="var(--font-jetbrains-mono), ui-monospace, monospace"
          fontSize="8"
          letterSpacing="0.16em"
          fill={c.muted}
        >
          RECYCLE · Ψ
        </text>
        <text
          x="0"
          y="32"
          textAnchor="middle"
          fontFamily="var(--font-jetbrains-mono), ui-monospace, monospace"
          fontSize="8"
          letterSpacing="0.06em"
          fill={c.muted}
        >
          {(surplusLevel * 100).toFixed(0)}%
        </text>
        <path d="M 0 -90 C 0 -130 80 -160 130 -180" fill="none" stroke={c.ink} strokeWidth="0.6" />
      </g>

      {/* ─── ANNOTATIONS ───────────────────────────────────────────── */}
      {showAnnotations && (
        <g
          fontFamily="var(--font-jetbrains-mono), ui-monospace, monospace"
          fontSize="10"
          letterSpacing="0.10em"
          fill={c.muted}
        >
          <g>
            <path d={`M ${CX} 295 L ${CX + 150} 220 L ${CX + 220} 220`} fill="none" stroke={c.hair} strokeWidth="0.4" />
            <circle cx={CX} cy={295} r="2" fill={c.ink} />
            <text x={CX + 226} y={216}>01 · CRANIAL INTERFACE</text>
            <text x={CX + 226} y={228} fontSize="8" opacity="0.7">
              VR/AR · 8K/eye · gaze-logged
            </text>
          </g>
          <g>
            <path
              d={`M ${CX - 60} 470 L ${CX - 280} 380 L ${CX - 380} 380`}
              fill="none"
              stroke={c.hair}
              strokeWidth="0.4"
            />
            <circle cx={CX - 60} cy={470} r="2" fill={c.ink} />
            <text x={CX - 380} y={376} textAnchor="start">
              02 · NUTRIENT FEED
            </text>
            <text x={CX - 380} y={388} fontSize="8" opacity="0.7">
              macronutrient slurry · 7-day cycle
            </text>
          </g>
          <g>
            <path
              d={`M ${CX + 140} 540 L ${CX + 320} 660 L ${CX + 380} 660`}
              fill="none"
              stroke={c.hair}
              strokeWidth="0.4"
            />
            <circle cx={CX + 140} cy={540} r="2" fill={c.ink} />
            <text x={CX + 386} y={656}>03 · CHEMICAL BAY</text>
            <text x={CX + 386} y={668} fontSize="8" opacity="0.7">
              8-vial infusion · auto-titrated
            </text>
          </g>
          <g>
            <path
              d={`M ${CX + 30} 510 L ${CX + 240} 460 L ${CX + 360} 460`}
              fill="none"
              stroke={c.hair}
              strokeWidth="0.4"
            />
            <circle cx={CX + 30} cy={510} r="2" fill={c.ink} />
            <text x={CX + 366} y={456}>04 · CUTANEOUS PORTS ×6</text>
            <text x={CX + 366} y={468} fontSize="8" opacity="0.7">
              self-sealing · auto-analgesic
            </text>
          </g>
          <g>
            <path
              d={`M ${CX - 80} 920 L ${CX - 380} 920 L ${CX - 380} 760`}
              fill="none"
              stroke={c.hair}
              strokeWidth="0.4"
            />
            <text x={CX - 380} y={755}>05 · WASTE → NUTRIENT</text>
            <text x={CX - 380} y={767} fontSize="8" opacity="0.7">
              closed-loop · 94% efficiency
            </text>
          </g>
          <g>
            <path
              d={`M ${CX + 220} 730 L ${CX + 320} 880 L ${CX + 380} 880`}
              fill="none"
              stroke={c.hair}
              strokeWidth="0.4"
            />
            <text x={CX + 386} y={876}>06 · GRID INTERFACE</text>
            <text x={CX + 386} y={888} fontSize="8" opacity="0.7">
              14–22 W continuous · sold per kWh
            </text>
          </g>
          <g>
            <text x={CX - 380} y={830} fontSize="9">07 · RECYCLE Ψ</text>
            <text x={CX - 380} y={842} fontSize="8" opacity="0.7">
              visitor surplus tank
            </text>
          </g>
          <g>
            <path
              d={`M ${CX - 148} 697 L ${CX - 220} 720 L ${CX - 280} 720`}
              fill="none"
              stroke={c.hair}
              strokeWidth="0.4"
            />
            <circle cx={CX - 148} cy={697} r="2" fill={c.ink} />
            <text x={CX - 280} y={716} textAnchor="end">08 · HAPTIC INPUT</text>
            <text x={CX - 280} y={728} textAnchor="end" fontSize="8" opacity="0.7">
              gesture · gaze-pinch fallback
            </text>
          </g>
          <text x={CX} y={1010} textAnchor="middle" fontSize="11" letterSpacing="0.30em">
            ILS · Ω · UNIT 001
          </text>
          <text x={CX} y={1024} textAnchor="middle" fontSize="9" letterSpacing="0.12em" opacity="0.7">
            occupant lifecycle phase {phase} · {PHASE_NAMES[phase]?.toUpperCase()}
          </text>
        </g>
      )}

      {/* ─── STAIN / FRACTURE OVERLAY ───────────────────────────────── */}
      {glitch > 0.3 && (
        <g style={{ opacity: Math.min(0.6, glitch * 0.7), mixBlendMode: "multiply" }} pointerEvents="none">
          <circle
            cx={CX}
            cy={CY}
            r={R_RING_OUT + 40}
            fill="none"
            stroke={c.blood}
            strokeWidth="0.5"
            strokeDasharray={`${4 + glitch * 20} ${2 + glitch * 6}`}
          />
        </g>
      )}

      {/* Vitals EKG when occupied & connected */}
      {phase >= 2 && phase < 5 && (
        <g transform={`translate(${CX - 60}, 200)`} opacity="0.6">
          <text
            fontFamily="var(--font-jetbrains-mono), ui-monospace, monospace"
            fontSize="8"
            fill={c.muted}
            letterSpacing="0.12em"
          >
            VITALS
          </text>
          <path
            d="M 0 14 L 14 14 L 18 8 L 22 20 L 26 6 L 30 14 L 120 14"
            fill="none"
            stroke={c.blood}
            strokeWidth="0.8"
          >
            <animate attributeName="stroke-dasharray" from="0 200" to="200 0" dur="1.6s" repeatCount="indefinite" />
          </path>
        </g>
      )}
    </svg>
  );
}
