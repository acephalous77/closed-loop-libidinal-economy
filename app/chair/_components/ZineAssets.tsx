"use client";

import Image from "next/image";

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

import React, { useEffect } from "react";

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
        {/* Distress — small, sharp, for stamps + outlines */}
        <filter id="zine-distress" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="1.8" numOctaves="1" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.5" />
        </filter>
        {/* Stamp — sharp displacement + erode-style speckle holes */}
        <filter id="zine-stamp" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="2" seed="5" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.8" result="d" />
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="11" result="n2" />
          <feColorMatrix in="n2" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 9 -4" result="mask" />
          <feComposite in="d" in2="mask" operator="out" />
        </filter>
        {/* Stencil — REAL punk stencil: erode the source slightly then add
            random "paint slips" via composite. Output: hard-cut letterforms
            with irregular paint-bleed holes inside, not blurry outlines. */}
        <filter id="zine-stencil" x="-5%" y="-5%" width="110%" height="110%">
          <feMorphology in="SourceGraphic" operator="dilate" radius="0.5" result="thick" />
          <feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="2" seed="9" result="grain" />
          <feColorMatrix in="grain" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -4 1.2" result="holes" />
          <feComposite in="thick" in2="holes" operator="in" result="cut" />
          <feMerge>
            <feMergeNode in="cut" />
            <feMergeNode in="thick" />
          </feMerge>
        </filter>
        {/* Stencil spray — for solid block-style stencils */}
        <filter id="zine-spray" x="-3%" y="-3%" width="106%" height="106%">
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="2" seed="7" result="g" />
          <feDisplacementMap in="SourceGraphic" in2="g" scale="1.2" />
        </filter>
        {/* Print misregistration — for two-color offset effect */}
        <filter id="zine-misreg" x="-5%" y="-5%" width="110%" height="110%">
          <feOffset in="SourceGraphic" dx="3" dy="2" result="off" />
          <feColorMatrix in="off" type="matrix" values="0 0 0 0 1  0 0 0 0 0.16  0 0 0 0 0.54  0 0 0 0.7 0" result="pink" />
          <feMerge>
            <feMergeNode in="pink" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
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
// Sizes the viewBox to fit the text — no more clipping.
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
  // Estimate text width in viewBox units. Anton is condensed (~0.46em
  // per char advance), plus letter-spacing 0.12em. Add 12% safety margin.
  const fontSizeVB = 32; // viewBox-space font size
  const charAdv = fontSizeVB * 0.46;
  const letterSpace = fontSizeVB * 0.12;
  const estTextW = text.length * (charAdv + letterSpace) * 1.12;
  const w = Math.max(180, estTextW + 32) * size;
  const h = 60 * size;
  return (
    <svg
      viewBox={`0 0 ${w / size} ${h / size}`}
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
            width={w / size - 6}
            height={h / size - 6}
            fill="none"
            stroke={color}
            strokeWidth="3"
          />
        )}
        <text
          x={w / size / 2}
          y={h / size / 2 + fontSizeVB * 0.32}
          textAnchor="middle"
          fontFamily="var(--font-anton), Impact, sans-serif"
          fontSize={fontSizeVB}
          fontWeight="900"
          fill={color}
          letterSpacing="0.12em"
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

// ─── Red defacement X mark ────────────────────────────────────────────
export function DefacementX({
  size = 80,
  color = STAMP_RED,
  thickness = 10,
  rotate = 0,
}: {
  size?: number;
  color?: string;
  thickness?: number;
  rotate?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", transform: `rotate(${rotate}deg)`, overflow: "visible" }}
      aria-hidden
    >
      <g filter="url(#zine-distress)">
        <line x1="10" y1="10" x2="90" y2="90" stroke={color} strokeWidth={thickness} strokeLinecap="round" />
        <line x1="90" y1="10" x2="10" y2="90" stroke={color} strokeWidth={thickness} strokeLinecap="round" />
      </g>
    </svg>
  );
}

// ─── Redaction bar (hand-cut black strip) ─────────────────────────────
export function RedactionBar({
  width = 200,
  height = 22,
  rotate = 0,
}: {
  width?: number;
  height?: number;
  rotate?: number;
}) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", transform: `rotate(${rotate}deg)` }}
      aria-hidden
    >
      <rect x="0" y="0" width={width} height={height} fill="#0a0908" filter="url(#zine-distress)" />
    </svg>
  );
}

// ─── Strike-through (single diagonal slash) for canceling text ──────
export function StrikeSlash({
  width = 120,
  thickness = 6,
  color = STAMP_RED,
  rotate = -3,
}: {
  width?: number;
  thickness?: number;
  color?: string;
  rotate?: number;
}) {
  return (
    <svg
      viewBox={`0 0 ${width} 30`}
      width={width}
      height={30}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", transform: `rotate(${rotate}deg)`, overflow: "visible" }}
      aria-hidden
    >
      <path
        d={`M 4 22 Q ${width / 3} 8, ${(width * 2) / 3} 20 T ${width - 4} 12`}
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        fill="none"
        filter="url(#zine-distress)"
      />
    </svg>
  );
}

// ─── Redaction effect: randomly black out words across viewport ──────
// This is the "apparatus is censoring this protest media" performative.
// Every ~7-14 seconds, scans the visible viewport for text nodes,
// picks 1-3 random words, wraps them in a black bar with "REDACTED"
// stamp briefly. Restores after ~700ms.
export function ApparatusRedaction({ enabled = true }: { enabled?: boolean }) {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;

    const restore = new Map<HTMLElement, string>();

    const candidateSelectors = "p, h2, h3, li, dd, cite, blockquote";
    const isInViewport = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0 && r.width > 50;
    };
    const wordRe = /\b[A-Za-z][A-Za-z'-]{4,}\b/g;

    const tick = () => {
      const elems = Array.from(document.querySelectorAll<HTMLElement>(candidateSelectors)).filter(isInViewport);
      if (elems.length === 0) return;
      const picks = Math.min(3, Math.max(1, Math.floor(Math.random() * 3) + 1));
      for (let i = 0; i < picks; i++) {
        const el = elems[(Math.random() * elems.length) | 0];
        if (!el || restore.has(el)) continue;
        const html = el.innerHTML;
        const matches = el.textContent?.match(wordRe);
        if (!matches || matches.length === 0) continue;
        const word = matches[(Math.random() * matches.length) | 0];
        // Skip words that contain HTML tag chars
        if (word.length < 5) continue;
        // Replace first occurrence with a redaction span
        const span = `<span style="display:inline-block;background:#0a0908;color:#0a0908;border:1px solid rgba(255,42,138,0.4);padding:0 4px;letter-spacing:0.04em;position:relative;">${word}<span style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:#ff2a8a;font-family:var(--font-geist-mono),monospace;font-size:8px;letter-spacing:0.16em;text-transform:uppercase;white-space:nowrap;">redacted</span></span>`;
        const next = html.replace(word, span);
        if (next === html) continue;
        restore.set(el, html);
        el.innerHTML = next;
        const delay = 600 + Math.random() * 600;
        window.setTimeout(() => {
          const original = restore.get(el);
          if (original !== undefined) {
            el.innerHTML = original;
            restore.delete(el);
          }
        }, delay);
      }
    };

    const id = window.setInterval(tick, 8000 + Math.random() * 6000);
    // First tick after a small dwell delay so the page settles
    const first = window.setTimeout(tick, 7000);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(first);
      // restore any pending
      restore.forEach((html, el) => { el.innerHTML = html; });
      restore.clear();
    };
  }, [enabled]);
  return null;
}

// ─── Polaroid card — for floating zine-paste-in moments ──────────────
export function PolaroidCard({
  imageSrc,
  imageAlt,
  caption,
  width = 280,
  rotate = -3,
  tone = "warm",
}: {
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
  width?: number;
  rotate?: number;
  tone?: "warm" | "cool";
}) {
  const bg = tone === "warm" ? "#f5efe1" : "#e8eaf2";
  return (
    <div
      style={{
        width,
        background: bg,
        padding: 12,
        paddingBottom: 18,
        boxShadow: "0 8px 22px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.3)",
        transform: `rotate(${rotate}deg)`,
        fontFamily: "var(--font-caveat), cursive",
        color: "#1a1815",
      }}
    >
      <div
        style={{
          width: width - 24,
          height: width - 24,
          background: "#0a0908",
          marginBottom: 10,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {imageSrc && imageAlt && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 700px) 90vw, 360px"
            style={{
              objectFit: "cover",
              filter: "saturate(0.85) contrast(1.05)",
            }}
          />
        )}
      </div>
      {caption && (
        <div style={{ fontSize: 16, textAlign: "left", lineHeight: 1.2 }}>{caption}</div>
      )}
    </div>
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
