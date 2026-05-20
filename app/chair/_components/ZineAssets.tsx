"use client";

/**
 * ZineAssets — original drawn SVG components for the punk-zine register.
 *
 * Designed for the zine aesthetic specifically:
 *   - Flat 2-color silhouettes
 *   - Hand-imperfect bezier paths
 *   - Distressed edges via feTurbulence filters
 *   - Stencil/screen-print register
 *
 * Each asset is original SVG drawn for this page — no AI, no found image.
 */

import React from "react";

const NEON_GREEN = "#39ff14";
const NEON_PINK = "#ff2a8a";
const NEON_CYAN = "#3fbfd6";
const PAPER = "#f0ebe2";
const BLACK = "#0a0908";
const STAMP_RED = "#e63a2c";

// ─── DistressFilter — reusable SVG filter for stamped/photocopied edges ──
export function ZineFilters() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0 }}
      aria-hidden
    >
      <defs>
        {/* Distress filter — erodes edges of stamps + stencils */}
        <filter id="zine-distress" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
        {/* Heavier distress for stamps */}
        <filter id="zine-stamp" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" seed="5" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.5" result="d" />
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" seed="11" result="n2" />
          <feComposite in="d" in2="n2" operator="in" result="masked" />
          <feMerge>
            <feMergeNode in="masked" />
            <feMergeNode in="d" />
          </feMerge>
        </filter>
        {/* Spray-paint edge for stencils */}
        <filter id="zine-spray" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="4" />
        </filter>
        {/* Halftone pattern */}
        <pattern
          id="zine-halftone"
          patternUnits="userSpaceOnUse"
          width="6"
          height="6"
        >
          <circle cx="1.5" cy="1.5" r="1" fill={BLACK} opacity="0.6" />
        </pattern>
        <pattern
          id="zine-halftone-light"
          patternUnits="userSpaceOnUse"
          width="4"
          height="4"
        >
          <circle cx="1" cy="1" r="0.7" fill={PAPER} opacity="0.4" />
        </pattern>
      </defs>
    </svg>
  );
}

// ─── Ω-serpent logotype ────────────────────────────────────────────────
export function OmegaSerpent({ size = 64, color = NEON_GREEN }: { size?: number; color?: string }) {
  // Custom logotype: an Ω with a snake-tail wrapping around it, ouroboros-style.
  // Drawn freehand-feel — slight asymmetry, bezier wobble.
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ouroboros omega logotype"
      style={{ display: "block" }}
    >
      {/* Serpent body — a loop with slight imperfection */}
      <path
        d="M 50 12 C 75 12 92 30 92 52 C 92 75 73 90 50 90 C 27 90 8 75 8 52 C 8 30 25 12 50 12 Z"
        fill="none"
        stroke={color}
        strokeWidth="3"
        filter="url(#zine-distress)"
      />
      {/* Inner Ω shape */}
      <path
        d="M 28 70 L 28 56 C 28 42 38 32 50 32 C 62 32 72 42 72 56 L 72 70 L 60 70 L 60 56 C 60 50 56 46 50 46 C 44 46 40 50 40 56 L 40 70 Z"
        fill={color}
        filter="url(#zine-distress)"
      />
      {/* Snake head — small triangle on the right side of the ring */}
      <path
        d="M 88 50 L 95 46 L 95 54 Z"
        fill={color}
        filter="url(#zine-distress)"
      />
      {/* Snake eye */}
      <circle cx="91" cy="50" r="1.2" fill={BLACK} />
      {/* Tail mouth — small notch where head meets tail */}
      <circle cx="89" cy="50" r="2.5" fill={BLACK} opacity="0.85" />
    </svg>
  );
}

// ─── Chair stencil silhouette ──────────────────────────────────────────
export function ChairStencil({
  width = 320,
  color = NEON_GREEN,
  className,
}: {
  width?: number;
  color?: string;
  className?: string;
}) {
  // Bold flat profile of a recliner chair seen 3/4 from the front.
  // Pedestal, seat, backrest, headrest, boom arm + visor, monitor.
  // Drawn for zine register: blocky outline, no shading, two color.
  const h = width * 1.2;
  return (
    <svg
      viewBox="0 0 400 480"
      width={width}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Chair stencil silhouette"
      className={className}
      style={{ display: "block" }}
    >
      {/* Boom arm + VR visor floating above the chair */}
      <g fill={color} filter="url(#zine-spray)">
        {/* boom arm */}
        <rect x="195" y="40" width="6" height="80" />
        {/* visor */}
        <rect x="140" y="100" width="120" height="36" rx="4" />
        {/* visor lens cutouts (negative space) */}
        <rect x="156" y="110" width="32" height="18" rx="3" fill={BLACK} />
        <rect x="212" y="110" width="32" height="18" rx="3" fill={BLACK} />
      </g>

      {/* Chair body */}
      <g fill={color} filter="url(#zine-spray)">
        {/* headrest */}
        <rect x="148" y="156" width="104" height="60" rx="6" />
        {/* backrest */}
        <path d="M 132 216 L 268 216 L 280 360 L 120 360 Z" />
        {/* seat */}
        <path d="M 100 360 L 300 360 L 290 400 L 110 400 Z" />
        {/* armrests */}
        <rect x="80" y="270" width="32" height="100" rx="4" />
        <rect x="288" y="270" width="32" height="100" rx="4" />
        {/* pedestal column */}
        <path d="M 175 400 L 225 400 L 230 450 L 170 450 Z" />
        {/* base disc */}
        <ellipse cx="200" cy="460" rx="80" ry="10" />
      </g>

      {/* Monitor on left arm */}
      <g fill={color} filter="url(#zine-spray)">
        <rect x="20" y="220" width="58" height="42" rx="3" />
        <rect x="42" y="262" width="6" height="20" />
        {/* monitor screen cutout */}
        <rect x="26" y="226" width="46" height="30" fill={BLACK} />
      </g>

      {/* Tubes (cyan and pink, dribbling down) */}
      <g fill="none" strokeLinecap="round">
        <path
          d="M 175 138 Q 178 200 168 280 Q 162 340 158 400"
          stroke={NEON_CYAN}
          strokeWidth="6"
          opacity="0.95"
          filter="url(#zine-spray)"
        />
        <path
          d="M 225 138 Q 222 200 232 280 Q 238 340 242 400"
          stroke={NEON_PINK}
          strokeWidth="6"
          opacity="0.95"
          filter="url(#zine-spray)"
        />
        <path
          d="M 96 340 Q 60 360 50 395"
          stroke={NEON_CYAN}
          strokeWidth="5"
          filter="url(#zine-spray)"
        />
      </g>
    </svg>
  );
}

// ─── Stencil phase numeral ─────────────────────────────────────────────
export function StencilNumeral({
  n,
  size = 200,
  color = NEON_GREEN,
}: {
  n: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ display: "block" }}
    >
      <text
        x="100"
        y="160"
        textAnchor="middle"
        fontFamily="var(--font-anton), Impact, sans-serif"
        fontSize="180"
        fontWeight="900"
        fill={color}
        filter="url(#zine-spray)"
        letterSpacing="-0.04em"
      >
        {n}
      </text>
    </svg>
  );
}

// ─── Distressed rubber stamp ───────────────────────────────────────────
export function RubberStamp({
  text,
  rotate = -8,
  color = STAMP_RED,
  size = 1,
  border = true,
}: {
  text: string;
  rotate?: number;
  color?: string;
  size?: number;
  border?: boolean;
}) {
  const w = 240 * size;
  const h = 60 * size;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{
        display: "block",
        transform: `rotate(${rotate}deg)`,
        filter: "drop-shadow(0 0 0 transparent)",
      }}
    >
      <g filter="url(#zine-stamp)">
        {border && (
          <rect
            x={3}
            y={3}
            width={w - 6}
            height={h - 6}
            fill="none"
            stroke={color}
            strokeWidth="3"
          />
        )}
        <text
          x={w / 2}
          y={h / 2 + 8}
          textAnchor="middle"
          fontFamily="var(--font-anton), Impact, sans-serif"
          fontSize={h * 0.55}
          fontWeight="900"
          fill={color}
          letterSpacing="0.15em"
        >
          {text}
        </text>
      </g>
    </svg>
  );
}

// ─── Hand-drawn arrow (curves, slight wobble) ─────────────────────────
export function HandArrow({
  length = 120,
  curve = 0.3,
  thickness = 2.5,
  color = NEON_PINK,
  rotate = 0,
  arrowhead = "tip",
}: {
  length?: number;
  curve?: number;
  thickness?: number;
  color?: string;
  rotate?: number;
  arrowhead?: "tip" | "none";
}) {
  const w = length + 20;
  const h = Math.abs(length * curve) + 40;
  const sy = h / 2;
  const ex = length + 10;
  const ey = h / 2 - length * curve * 0.5;
  const cx1 = length * 0.4 + 10;
  const cy1 = sy - length * curve * 1.2;
  const cx2 = length * 0.7 + 10;
  const cy2 = ey + length * curve * 0.4;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", transform: `rotate(${rotate}deg)`, overflow: "visible" }}
      aria-hidden
    >
      <path
        d={`M 10 ${sy} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${ex} ${ey}`}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        filter="url(#zine-distress)"
      />
      {arrowhead === "tip" && (
        <path
          d={`M ${ex - 12} ${ey - 7} L ${ex} ${ey} L ${ex - 12} ${ey + 7}`}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#zine-distress)"
        />
      )}
    </svg>
  );
}

// ─── Circled annotation — for circling a word or value ────────────────
export function MarkerCircle({
  width = 90,
  height = 40,
  color = NEON_PINK,
  thickness = 2.5,
}: {
  width?: number;
  height?: number;
  color?: string;
  thickness?: number;
}) {
  // Hand-drawn ellipse with slight imperfection
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ display: "block", overflow: "visible" }}
    >
      <ellipse
        cx={width / 2}
        cy={height / 2}
        rx={width / 2 - 3}
        ry={height / 2 - 3}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        filter="url(#zine-distress)"
        strokeDasharray="0"
      />
      {/* Continuation tail — like the marker kept going past the circle */}
      <path
        d={`M ${width - 8} ${height / 2 - 4} C ${width + 4} ${height / 2 - 10}, ${width + 6} ${height / 2 - 14}, ${width + 10} ${height / 2 - 18}`}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        filter="url(#zine-distress)"
      />
    </svg>
  );
}

// ─── Halftone overlay (full-bleed) ────────────────────────────────────
export function HalftoneOverlay({
  density = "medium",
  color = "rgba(255,255,255,0.10)",
  zIndex = 1,
}: {
  density?: "light" | "medium" | "heavy";
  color?: string;
  zIndex?: number;
}) {
  const dotSize = density === "light" ? 0.6 : density === "medium" ? 1 : 1.4;
  const spacing = density === "light" ? 8 : density === "medium" ? 5 : 3.5;
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex,
        backgroundImage: `radial-gradient(circle, ${color} ${dotSize}px, transparent ${dotSize + 0.3}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        mixBlendMode: "overlay",
      }}
    />
  );
}
