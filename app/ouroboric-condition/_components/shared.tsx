"use client";

// shared.tsx — tokens, clock, geometry, and reusable SVG defs for
// "The Ouroboric Condition · An Atlas of Capture". Ported from the Claude
// Design prototype (atlas/atlas-shared.jsx).
//
// TWO REGISTERS, by design:
//   LIGHT  (Anatomy)   — paper & ink, the analyst's measured distance.
//                        The map, the substrate, the remainder.
//   DARK   (Apparatus) — near-black + sodium glow, the felt environment
//                        of capture. Every site of capture.
// SERIF = the lived (the face, holding, the surplus).
// MONO  = the rendered (the profile, the metric, capture).
//
// Font families resolve through the --atlas-serif / --atlas-mono CSS
// variables set on the route layout wrapper (next/font/google: EB Garamond
// + IBM Plex Mono, self-hosted at build — no runtime CDN request).

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import type { Tone } from "./data";

// Open a specimen plate. The optional event carries the click point so the
// engine can originate the descent/surfacing transition from it.
export type OpenFn = (id: string, e?: MouseEvent) => void;

// LIGHT — Anatomy / paper
export const L = {
  paper: "#e9e3d6",
  ink: "#211d18",
  rule: "#c3bba7",
  oxide: "#a8543c",
  gloss: "#4f4a40",
  faint: "#b3ab98",
};

// DARK — Apparatus
export const D = {
  bg: "#12141a",
  ink: "#d9d6cd",
  dim: "#727987",
  glow: "#f0a64e",
  oxide: "#e0894a",
  rule: "#2a2e39",
  faint: "#4a505e",
};

export const SERIF = "var(--atlas-serif), Georgia, serif";
export const MONO = "var(--atlas-mono), 'SFMono-Regular', monospace";

// Base stylesheet, rendered once via a <style> element inside the engine
// (rather than the prototype's imperative document.head injection).
export const ATLAS_CSS = `
.atlas-root{font-family:var(--atlas-serif),Georgia,serif;
  -webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.atlas-root *{box-sizing:border-box}
.atlas-root .mono{font-family:var(--atlas-mono),'SFMono-Regular',monospace;font-feature-settings:"tnum" 1}
.atlas-root .serif{font-family:var(--atlas-serif),Georgia,serif}
.atlas-root .ital{font-style:italic}
.atlas-root ::selection{background:${L.oxide}33}
.atlas-root ::-webkit-scrollbar{width:9px;height:9px}
.atlas-root ::-webkit-scrollbar-thumb{background:#0003;border-radius:5px}
@keyframes at-fade{from{opacity:0}to{opacity:1}}
@keyframes at-rise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes at-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.02)}}
@keyframes at-flick{0%,96%,100%{opacity:1}97%{opacity:.7}98.5%{opacity:.92}}
@keyframes at-dash{to{stroke-dashoffset:-1000}}
@keyframes at-blink{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes at-pulse{0%,100%{opacity:.2}50%{opacity:.05}}
@keyframes at-drift{0%,100%{opacity:.5}50%{opacity:.85}}
@keyframes at-plunge{0%{clip-path:circle(0% at var(--ox,50%) var(--oy,50%));opacity:1}42%{clip-path:circle(180% at var(--ox,50%) var(--oy,50%));opacity:1}100%{clip-path:circle(180% at var(--ox,50%) var(--oy,50%));opacity:0}}
@media (prefers-reduced-motion: reduce){
  .atlas-root *{animation-duration:.001ms !important;animation-iteration-count:1 !important}
}
`;

// rAF clock — milliseconds since mount. Every resting (t=0) frame in the
// diagrams is a complete composition; motion layers on top.
export function useTick(): number {
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (n: number) => {
      setT(n - start);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return t;
}

// Live viewport width (for responsive layout / mobile).
export function useViewport(): number {
  const [w, setW] = useState<number>(() =>
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  useEffect(() => {
    const f = () => setW(window.innerWidth);
    window.addEventListener("resize", f);
    window.addEventListener("orientationchange", f);
    return () => {
      window.removeEventListener("resize", f);
      window.removeEventListener("orientationchange", f);
    };
  }, []);
  return w;
}

export function ptOnCircle(
  cx: number,
  cy: number,
  r: number,
  deg: number
): [number, number] {
  const a = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

// Reusable SVG <defs>: ledger grid, diagonal hatch (the "unrendered"),
// for either register. Pass tone and a unique idPrefix.
export function AtlasDefs({
  idPrefix = "a",
  tone = "light",
}: {
  idPrefix?: string;
  tone?: Tone;
}) {
  const c = tone === "dark" ? D : L;
  return (
    <defs>
      <pattern id={`${idPrefix}-grid`} width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M40 0H0V40"
          fill="none"
          stroke={c.rule}
          strokeWidth="0.5"
          opacity={tone === "dark" ? 0.5 : 0.45}
        />
      </pattern>
      <pattern id={`${idPrefix}-grid2`} width="200" height="200" patternUnits="userSpaceOnUse">
        <path
          d="M200 0H0V200"
          fill="none"
          stroke={c.rule}
          strokeWidth="0.7"
          opacity={tone === "dark" ? 0.6 : 0.55}
        />
      </pattern>
      <pattern
        id={`${idPrefix}-hatch`}
        width="6"
        height="6"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line x1="0" y1="0" x2="0" y2="6" stroke={c.oxide} strokeWidth="0.6" opacity="0.5" />
      </pattern>
      <radialGradient id={`${idPrefix}-glowgrad`}>
        <stop offset="0%" stopColor={D.glow} stopOpacity="0.22" />
        <stop offset="70%" stopColor={D.glow} stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}
