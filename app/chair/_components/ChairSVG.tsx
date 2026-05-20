/**
 * ChairSVG — The Apparatus.
 *
 * Stripped to its essence: the chair, a tight Ouroboros ring, and the
 * phase-aware accessories (headgear, monitors, tubes, ports, LEDs). No
 * Vitruvian figure. No zodiac labels. No inscribed square. No leader-line
 * annotations cluttering the field. No floating recycle tank.
 *
 * The chair IS the centerpiece. The text in the narrative column does
 * the labelling work the SVG used to do badly at 8-10 px.
 *
 *   phase 0 Ontogenesis   — empty, dim
 *   phase 1 Habitualization — empty still, LEDs awakening
 *   phase 2 Consumption   — headgear down, tubes engaged, monitors lit, ports visible
 *   phase 3 Obsolescence  — full activity
 *   phase 4 Stagnation    — dimming
 *   phase 5 Exit          — empty again, ring continues
 */

import React from "react";

type Theme = "light";

interface ChairSVGProps {
  phase?: number;
  theme?: Theme;
  surplusLevel?: number; // kept in API for back-compat; not used here
  glitch?: number;
  showAnnotations?: boolean; // kept in API; ignored
  width?: number | string;
  height?: number | string;
}

const CX = 400;
const CY = 560;
const R_RING_OUT = 380;
const R_RING_IN = 356;

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

export default function ChairSVG({
  phase = 2,
  theme = "light",
  glitch = 0,
  width,
  height,
}: ChairSVGProps) {
  const c = PAL[theme];

  const tubesOn = phase >= 2 && phase < 5;
  const tubesOp = phase >= 2 ? Math.min(1, (phase - 1) * 0.6) : 0;
  const headgearDown = phase >= 2;
  const screensLit = phase >= 2 && phase < 5;
  const ledsOn = phase >= 1; // LEDs awaken in Habitualization
  const portsOn = phase >= 2;

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
        <linearGradient id="ols-polymer-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.polymer} />
          <stop offset="100%" stopColor={c.cream} stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="ols-chrome-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.hair} stopOpacity="0.6" />
          <stop offset="50%" stopColor={c.cream} />
          <stop offset="100%" stopColor={c.hair} stopOpacity="0.5" />
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

      {/* ─── OUROBOROS RING ────────────────────────────────────────── */}
      {/* The halo. Tight against the chair, no decoration outside it. */}
      <circle
        cx={CX}
        cy={CY}
        r={R_RING_OUT}
        fill={c.cream}
        stroke={c.ink}
        strokeWidth="1.4"
        opacity={0.5}
      />
      <circle cx={CX} cy={CY} r={R_RING_OUT} fill="none" stroke={c.ink} strokeWidth="1.4" />
      <circle cx={CX} cy={CY} r={R_RING_IN} fill="none" stroke={c.ink} strokeWidth="0.9" />
      <circle cx={CX} cy={CY} r={R_RING_OUT - 5} fill="none" stroke={c.hair} strokeWidth="0.35" />
      <circle cx={CX} cy={CY} r={R_RING_IN + 5} fill="none" stroke={c.hair} strokeWidth="0.35" />

      {/* Snake-mouth seam at bottom (the loop closing on itself) */}
      <g transform={`translate(${CX}, ${CY + R_RING_OUT})`}>
        <path
          d="M -32 -3 Q -16 -18 0 -2 Q 16 -18 32 -3 Q 16 3 0 -1 Q -16 3 -32 -3 Z"
          fill={c.cream}
          stroke={c.ink}
          strokeWidth="0.9"
        />
        <circle cx="-14" cy="-7" r="1.6" fill={c.ink} />
        <circle cx="-5" cy="-2" r="0.9" fill={c.ink} />
        <circle cx="5" cy="-2" r="0.9" fill={c.ink} />
      </g>

      {/* LED indicators around the ring perimeter (phase >= 1) */}
      {ledsOn &&
        Array.from({ length: 32 }).map((_, i) => {
          const a = (i / 32) * Math.PI * 2;
          const x = CX + Math.cos(a) * (R_RING_OUT - 12);
          const y = CY + Math.sin(a) * (R_RING_OUT - 12);
          const offset = (i * 0.07) % 1;
          return (
            <circle key={i} cx={x} cy={y} r="1.8" fill={c.blood} opacity="0.55">
              <animate
                attributeName="opacity"
                values="0.25;0.9;0.25"
                dur="2s"
                begin={`-${offset * 2}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}

      {/* ─── CHAIR ────────────────────────────────────────────────── */}
      {/* Heavy, present, recognizable. The apparatus you're meant to sit in. */}

      {/* Pedestal */}
      <g>
        <ellipse cx={CX} cy={935} rx={150} ry={16} fill={c.cream} stroke={c.ink} strokeWidth="1.0" />
        <ellipse cx={CX} cy={940} rx={150} ry={11} fill={c.hair} opacity="0.5" />
        <path
          d={`M ${CX - 44} 935 L ${CX - 64} 800 L ${CX + 64} 800 L ${CX + 44} 935 Z`}
          fill="url(#ols-chrome-grad)"
          stroke={c.ink}
          strokeWidth="1.0"
        />
        <line x1={CX - 54} y1={870} x2={CX + 54} y2={870} stroke={c.hair} strokeWidth="0.3" />
        <line x1={CX - 54} y1={900} x2={CX + 54} y2={900} stroke={c.hair} strokeWidth="0.3" />
      </g>

      {/* Seat pan */}
      <g>
        <path
          d={`M ${CX - 138} 720 L ${CX + 138} 720 L ${CX + 116} 800 L ${CX - 116} 800 Z`}
          fill="url(#ols-polymer-grad)"
          stroke={c.ink}
          strokeWidth="1.1"
        />
        <path d={`M ${CX - 122} 742 L ${CX + 122} 742`} fill="none" stroke={c.hair} strokeWidth="0.4" />
        <path d={`M ${CX - 115} 772 L ${CX + 115} 772`} fill="none" stroke={c.hair} strokeWidth="0.4" />
        {/* Seat ports (phase >= 2) — abdominal pair */}
        {portsOn && (
          <g opacity={tubesOp}>
            <circle cx={CX - 24} cy={760} r="5" fill={c.cream} stroke={c.ink} strokeWidth="0.9" />
            <circle cx={CX + 24} cy={760} r="5" fill={c.cream} stroke={c.ink} strokeWidth="0.9" />
            <circle cx={CX - 24} cy={760} r="2" fill={c.cobalt} />
            <circle cx={CX + 24} cy={760} r="2" fill={c.cobalt} />
          </g>
        )}
      </g>

      {/* Armrests */}
      <g>
        <path
          d={`M ${CX - 172} 680 L ${CX - 138} 680 L ${CX - 138} 720 L ${CX - 138} 760 L ${CX - 178} 760 Z`}
          fill="url(#ols-polymer-grad)"
          stroke={c.ink}
          strokeWidth="1.1"
        />
        <path
          d={`M ${CX + 172} 680 L ${CX + 138} 680 L ${CX + 138} 720 L ${CX + 138} 760 L ${CX + 178} 760 Z`}
          fill="url(#ols-polymer-grad)"
          stroke={c.ink}
          strokeWidth="1.1"
        />
        {/* Control pads */}
        <rect x={CX - 170} y={690} width="30" height="16" rx="2" fill={c.cream} stroke={c.ink} strokeWidth="0.6" />
        <rect x={CX + 140} y={690} width="30" height="16" rx="2" fill={c.cream} stroke={c.ink} strokeWidth="0.6" />
        {[0, 1, 2].map((i) => (
          <circle key={`l${i}`} cx={CX - 163 + i * 10} cy={698} r="1.6" fill={c.ink} opacity="0.75" />
        ))}
        {[0, 1, 2].map((i) => (
          <circle key={`r${i}`} cx={CX + 147 + i * 10} cy={698} r="1.6" fill={c.ink} opacity="0.75" />
        ))}
        {/* Armrest ports (phase >= 2) — brachial pair */}
        {portsOn && (
          <g opacity={tubesOp}>
            <circle cx={CX - 158} cy={730} r="4.5" fill={c.cream} stroke={c.ink} strokeWidth="0.8" />
            <circle cx={CX + 158} cy={730} r="4.5" fill={c.cream} stroke={c.ink} strokeWidth="0.8" />
            <circle cx={CX - 158} cy={730} r="1.8" fill={c.amber} />
            <circle cx={CX + 158} cy={730} r="1.8" fill={c.amber} />
          </g>
        )}
      </g>

      {/* Backrest */}
      <g>
        <path
          d={`M ${CX - 138} 720 L ${CX - 130} 380 Q ${CX - 130} 364 ${CX - 114} 364 L ${CX + 114} 364 Q ${CX + 130} 364 ${CX + 130} 380 L ${CX + 138} 720 Z`}
          fill="url(#ols-polymer-grad)"
          stroke={c.ink}
          strokeWidth="1.1"
        />
        {/* Spine seam */}
        <line x1={CX} y1={380} x2={CX} y2={720} stroke={c.hair} strokeWidth="0.4" />
        {/* Shoulder contours */}
        <path d={`M ${CX - 106} 410 Q ${CX - 100} 500 ${CX - 112} 700`} fill="none" stroke={c.hair} strokeWidth="0.35" />
        <path d={`M ${CX + 106} 410 Q ${CX + 100} 500 ${CX + 112} 700`} fill="none" stroke={c.hair} strokeWidth="0.35" />
        {/* Backrest ports (phase >= 2) — cervical pair */}
        {portsOn && (
          <g opacity={tubesOp}>
            <circle cx={CX - 32} cy={470} r="4" fill={c.cream} stroke={c.ink} strokeWidth="0.8" />
            <circle cx={CX + 32} cy={470} r="4" fill={c.cream} stroke={c.ink} strokeWidth="0.8" />
            <circle cx={CX - 32} cy={470} r="1.6" fill={c.sage} />
            <circle cx={CX + 32} cy={470} r="1.6" fill={c.sage} />
            {/* Energy outlet — lumbar pair */}
            <circle cx={CX - 38} cy={650} r="4" fill={c.cream} stroke={c.ink} strokeWidth="0.8" />
            <circle cx={CX + 38} cy={650} r="4" fill={c.cream} stroke={c.ink} strokeWidth="0.8" />
            <circle cx={CX - 38} cy={650} r="1.6" fill={c.blood} />
            <circle cx={CX + 38} cy={650} r="1.6" fill={c.blood} />
          </g>
        )}
      </g>

      {/* Headrest */}
      <g>
        <path
          d={`M ${CX - 92} 280 Q ${CX - 92} 250 ${CX - 64} 248 L ${CX + 64} 248 Q ${CX + 92} 250 ${CX + 92} 280 L ${CX + 92} 364 L ${CX - 92} 364 Z`}
          fill="url(#ols-polymer-grad)"
          stroke={c.ink}
          strokeWidth="1.1"
        />
        <line x1={CX} y1={258} x2={CX} y2={360} stroke={c.hair} strokeWidth="0.4" />
      </g>

      {/* ─── VR/AR HEADGEAR — descends when phase >= 2 ──────────────── */}
      <g
        style={{
          transform: headgearDown ? "translateY(0)" : "translateY(-80px)",
          transformOrigin: `${CX}px 260px`,
          transition: "transform 0.8s ease-out",
          opacity: headgearDown ? 1 : 0,
        }}
      >
        <path
          d={`M ${CX} ${CY - R_RING_IN + 16} L ${CX - 6} 260 L ${CX - 80} 260`}
          stroke={c.ink}
          strokeWidth="1.4"
          fill="none"
        />
        <rect x={CX - 88} y={290} width="176" height="48" rx="14" fill={c.polymer} stroke={c.ink} strokeWidth="1.1" />
        <rect x={CX - 78} y={296} width="156" height="36" rx="8" fill={c.ink} opacity="0.92" />
        <ellipse cx={CX - 40} cy={314} rx="16" ry="10" fill="#0c0c12" />
        <ellipse cx={CX + 40} cy={314} rx="16" ry="10" fill="#0c0c12" />
        <ellipse cx={CX - 44} cy={310} rx="5" ry="3" fill="rgba(255,255,255,0.55)" />
        <ellipse cx={CX + 36} cy={310} rx="5" ry="3" fill="rgba(255,255,255,0.55)" />
        <path d={`M ${CX - 88} 322 L ${CX - 118} 344`} stroke={c.ink} strokeWidth="1.1" />
        <path d={`M ${CX + 88} 322 L ${CX + 118} 344`} stroke={c.ink} strokeWidth="1.1" />
      </g>

      {/* ─── ARTICULATED MONITORS ───────────────────────────────────── */}
      <g>
        {/* Left arm — work terminal */}
        <path d={`M ${CX - 178} 720 L ${CX - 258} 600 L ${CX - 296} 480`} fill="none" stroke={c.ink} strokeWidth="1.4" />
        <circle cx={CX - 258} cy={600} r="3.5" fill={c.cream} stroke={c.ink} strokeWidth="0.7" />
        <rect x={CX - 376} y={398} width="166" height="104" rx="3" fill={c.polymer} stroke={c.ink} strokeWidth="1.1" />
        <rect
          x={CX - 369}
          y={405}
          width="152"
          height="90"
          rx="2"
          fill={screensLit ? "#0a0d14" : c.cream}
          stroke={c.ink}
          strokeWidth="0.5"
        />
        {screensLit && (
          <g>
            <rect x={CX - 364} y={414} width="62" height="3" fill="#7aa8ff" opacity="0.8" />
            <rect x={CX - 364} y={422} width="104" height="2" fill="#7aa8ff" opacity="0.4" />
            <rect x={CX - 364} y={428} width="84" height="2" fill="#7aa8ff" opacity="0.4" />
            <rect x={CX - 364} y={440} width="142" height="42" rx="1" fill="#7aa8ff" opacity="0.07" />
            <path
              d={`M ${CX - 362} 472 L ${CX - 344} 460 L ${CX - 322} 466 L ${CX - 300} 450 L ${CX - 278} 458 L ${CX - 256} 446 L ${CX - 236} 454 L ${CX - 220} 442`}
              stroke="#7aa8ff"
              strokeWidth="0.7"
              fill="none"
            />
          </g>
        )}

        {/* Right arm — play terminal */}
        <path d={`M ${CX + 178} 720 L ${CX + 258} 600 L ${CX + 296} 480`} fill="none" stroke={c.ink} strokeWidth="1.4" />
        <circle cx={CX + 258} cy={600} r="3.5" fill={c.cream} stroke={c.ink} strokeWidth="0.7" />
        <rect x={CX + 210} y={398} width="166" height="104" rx="3" fill={c.polymer} stroke={c.ink} strokeWidth="1.1" />
        <rect
          x={CX + 217}
          y={405}
          width="152"
          height="90"
          rx="2"
          fill={screensLit ? "#0a0d14" : c.cream}
          stroke={c.ink}
          strokeWidth="0.5"
        />
        {screensLit && (
          <g>
            <rect x={CX + 222} y={414} width="142" height="62" fill={c.blood} opacity="0.10" />
            <circle cx={CX + 322} cy={446} r="16" fill={c.amber} opacity="0.6" />
            <circle cx={CX + 322} cy={446} r="7" fill={c.blood} opacity="0.8" />
            <rect x={CX + 222} y={480} width="42" height="3" fill={c.amber} opacity="0.7" />
            <rect x={CX + 222} y={486} width="84" height="2" fill={c.amber} opacity="0.4" />
          </g>
        )}
      </g>

      {/* ─── TUBES — ring → chair body ──────────────────────────────── */}
      {tubesOn && (
        <g style={{ opacity: tubesOp, transition: "opacity 0.6s" }}>
          {/* Nutrient (cobalt) — top of ring → abdominal ports on seat */}
          <g>
            <path
              d={`M ${CX - 70} ${CY - R_RING_IN + 14} C ${CX - 50} 500 ${CX - 40} 680 ${CX - 24} 760`}
              fill="none"
              stroke={c.cobalt}
              strokeWidth="5"
              opacity="0.9"
            />
            <path
              d={`M ${CX + 70} ${CY - R_RING_IN + 14} C ${CX + 50} 500 ${CX + 40} 680 ${CX + 24} 760`}
              fill="none"
              stroke={c.cobalt}
              strokeWidth="5"
              opacity="0.9"
            />
            <path
              d={`M ${CX - 70} ${CY - R_RING_IN + 14} C ${CX - 50} 500 ${CX - 40} 680 ${CX - 24} 760`}
              fill="none"
              stroke="url(#ols-flow-cobalt)"
              strokeWidth="5"
            />
            <path
              d={`M ${CX + 70} ${CY - R_RING_IN + 14} C ${CX + 50} 500 ${CX + 40} 680 ${CX + 24} 760`}
              fill="none"
              stroke="url(#ols-flow-cobalt)"
              strokeWidth="5"
            />
          </g>
          {/* Chemical (amber) — ring sides → armrest brachial ports */}
          <g>
            <path
              d={`M ${CX - R_RING_IN + 14} ${CY - 60} C ${CX - 230} ${CY + 20} ${CX - 200} 720 ${CX - 158} 730`}
              fill="none"
              stroke={c.amber}
              strokeWidth="4"
              opacity="0.88"
            />
            <path
              d={`M ${CX + R_RING_IN - 14} ${CY - 60} C ${CX + 230} ${CY + 20} ${CX + 200} 720 ${CX + 158} 730`}
              fill="none"
              stroke={c.amber}
              strokeWidth="4"
              opacity="0.88"
            />
            <path
              d={`M ${CX - R_RING_IN + 14} ${CY - 60} C ${CX - 230} ${CY + 20} ${CX - 200} 720 ${CX - 158} 730`}
              fill="none"
              stroke="url(#ols-flow-amber)"
              strokeWidth="4"
            />
            <path
              d={`M ${CX + R_RING_IN - 14} ${CY - 60} C ${CX + 230} ${CY + 20} ${CX + 200} 720 ${CX + 158} 730`}
              fill="none"
              stroke="url(#ols-flow-amber)"
              strokeWidth="4"
            />
          </g>
          {/* Analgesic (sage) — ring upper → cervical ports on backrest */}
          <g>
            <path
              d={`M ${CX - 160} ${CY - 290} C ${CX - 90} ${CY - 200} ${CX - 50} 460 ${CX - 32} 470`}
              fill="none"
              stroke={c.sage}
              strokeWidth="2.8"
              opacity="0.85"
            />
            <path
              d={`M ${CX + 160} ${CY - 290} C ${CX + 90} ${CY - 200} ${CX + 50} 460 ${CX + 32} 470`}
              fill="none"
              stroke={c.sage}
              strokeWidth="2.8"
              opacity="0.85"
            />
          </g>
          {/* Energy (blood) — lumbar ports → ring back-sides (sold to grid) */}
          <g>
            <path
              d={`M ${CX - 38} 650 C ${CX - 180} 650 ${CX - 280} 660 ${CX - R_RING_IN + 16} ${CY + 80}`}
              fill="none"
              stroke={c.blood}
              strokeWidth="5"
              opacity="0.95"
            />
            <path
              d={`M ${CX + 38} 650 C ${CX + 180} 650 ${CX + 280} 660 ${CX + R_RING_IN - 16} ${CY + 80}`}
              fill="none"
              stroke={c.blood}
              strokeWidth="5"
              opacity="0.95"
            />
            <path
              d={`M ${CX - 38} 650 C ${CX - 180} 650 ${CX - 280} 660 ${CX - R_RING_IN + 16} ${CY + 80}`}
              fill="none"
              stroke="url(#ols-flow-blood)"
              strokeWidth="5"
            />
            <path
              d={`M ${CX + 38} 650 C ${CX + 180} 650 ${CX + 280} 660 ${CX + R_RING_IN - 16} ${CY + 80}`}
              fill="none"
              stroke="url(#ols-flow-blood)"
              strokeWidth="5"
            />
          </g>
          {/* Waste — translucent, from beneath seat down through pedestal */}
          <g>
            <path
              d={`M ${CX} 800 C ${CX - 20} 880 ${CX - 80} 960 ${CX - 140} 1030`}
              fill="none"
              stroke={c.hair}
              strokeWidth="10"
              opacity="0.4"
            />
            <path
              d={`M ${CX} 800 C ${CX - 20} 880 ${CX - 80} 960 ${CX - 140} 1030`}
              fill="none"
              stroke={c.ink}
              strokeWidth="0.4"
              strokeDasharray="3 4"
              opacity="0.85"
            />
          </g>
        </g>
      )}

      {/* ─── Vitals — a small EKG hairline on the headrest, phase 2–4 ── */}
      {phase >= 2 && phase < 5 && (
        <g transform={`translate(${CX - 60}, 268)`} opacity="0.7">
          <path
            d="M 0 14 L 14 14 L 18 8 L 22 22 L 26 6 L 30 14 L 120 14"
            fill="none"
            stroke={c.blood}
            strokeWidth="1.0"
          >
            <animate attributeName="stroke-dasharray" from="0 200" to="200 0" dur="1.6s" repeatCount="indefinite" />
          </path>
        </g>
      )}

      {/* ─── Stain / fracture overlay — escalates with glitch ───────── */}
      {glitch > 0.3 && (
        <g
          style={{ opacity: Math.min(0.55, glitch * 0.65), mixBlendMode: "multiply" }}
          pointerEvents="none"
        >
          <circle
            cx={CX}
            cy={CY}
            r={R_RING_OUT + 14}
            fill="none"
            stroke={c.blood}
            strokeWidth="0.6"
            strokeDasharray={`${4 + glitch * 20} ${2 + glitch * 6}`}
          />
        </g>
      )}
    </svg>
  );
}
