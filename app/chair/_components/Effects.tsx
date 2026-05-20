"use client";

/**
 * Effects — the glitch/performative visual layer.
 *
 * - Scanlines        — persistent CRT-style overlay on the viewport
 * - RGBShift         — wraps any element with red/blue ghost offsets that
 *                      activate on glitch peaks
 * - TextScramble     — replaces target text with cycling chars before
 *                      resolving — the visitor watches a value be "decoded"
 * - Artifact         — frames an image as a "recovered document" from
 *                      the year-2197 Imperial Archive POV: caption stamp,
 *                      inventory number, light desaturation, paper tone
 * - HeartbeatPulse   — tiny pulsing red dot that breathes like vitals
 * - RedFlash         — brief full-page red flash, triggered programmatically
 */

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ACCENT = "#ff3a25";
const MUTED = "#6b6760";
const INK = "#f0ebe2";
const SANS = `var(--font-geist), ui-sans-serif, system-ui, sans-serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;

// ─── Scanlines — viewport-wide CRT scan ───────────────────────────────
export function Scanlines() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 96,
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 3px)",
        mixBlendMode: "overlay",
      }}
    />
  );
}

// ─── RGBShift — chromatic-aberration wrapper ──────────────────────────
export function RGBShift({
  intensity = 0,
  children,
}: {
  intensity?: number; // 0..1
  children: React.ReactNode;
}) {
  if (intensity <= 0) return <>{children}</>;
  const dx = intensity * 3; // up to 3px
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          color: "rgba(255, 80, 80, 0.7)",
          transform: `translate(-${dx}px, 0)`,
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      >
        {children}
      </span>
      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          color: "rgba(80, 180, 255, 0.7)",
          transform: `translate(${dx}px, 0)`,
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      >
        {children}
      </span>
      <span style={{ position: "relative" }}>{children}</span>
    </span>
  );
}

// ─── TextScramble — cycle random chars before resolving ───────────────
const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________░▒▓█";
export function TextScramble({
  children,
  trigger = 0,
  duration = 700,
  style,
}: {
  children: string;
  trigger?: number; // any value change triggers a new scramble
  duration?: number;
  style?: React.CSSProperties;
}) {
  const [text, setText] = useState(children);
  useEffect(() => {
    const targetText = children;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const progress = Math.min(1, (t - start) / duration);
      // Reveal letters left-to-right
      const reveal = Math.floor(targetText.length * progress);
      let out = "";
      for (let i = 0; i < targetText.length; i++) {
        if (i < reveal || targetText[i] === " " || targetText[i] === ".") {
          out += targetText[i];
        } else {
          out += SCRAMBLE_CHARS[(Math.random() * SCRAMBLE_CHARS.length) | 0];
        }
      }
      setText(out);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setText(targetText);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [children, trigger, duration]);
  return <span style={style}>{text}</span>;
}

// ─── Artifact — image presented as recovered Imperial Archive document
export function Artifact({
  src,
  alt,
  caption,
  inv,
  width,
  height,
  priority,
  aspectRatio,
  treatment = "found",
}: {
  src: string;
  alt: string;
  caption?: string;
  inv?: string; // inventory number, like "INV. OILS-2026-04-ALPHA"
  width: number;
  height: number;
  priority?: boolean;
  aspectRatio?: string;
  treatment?: "found" | "showroom" | "flyer";
}) {
  // Each treatment renders the image differently:
  //   - found    : warm sepia desaturation, paper-warp filter, archival stamp
  //   - showroom : clean clinical, just bordered + captioned
  //   - flyer    : rotated 1°, slight scuff, "leaked" feel
  const filterMap = {
    found: "saturate(0.78) contrast(1.05) brightness(0.95)",
    showroom: "contrast(1.04)",
    flyer: "saturate(0.95) contrast(1.08)",
  };
  const rotation = treatment === "flyer" ? "rotate(-0.8deg)" : "rotate(0deg)";

  return (
    <figure
      style={{
        margin: "60px auto 0",
        width: "100%",
        maxWidth: 880,
        position: "relative",
        transform: rotation,
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: aspectRatio ?? `${width} / ${height}`,
          border: "1px solid rgba(240,235,226,0.18)",
          background: "#0d0c0a",
          overflow: "hidden",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 720px) 92vw, (max-width: 1024px) 80vw, 880px"
          priority
          style={{
            objectFit: "cover",
            filter: filterMap[treatment],
            zIndex: 1,
          }}
        />
        {/* Paper texture overlay — subtle, ABOVE image */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' seed='5'/><feColorMatrix values='0 0 0 0 0.8  0 0 0 0 0.75  0 0 0 0 0.65  0 0 0 0.04 0'/></filter><rect width='200' height='200' filter='url(%23p)'/></svg>\")",
            mixBlendMode: "overlay",
            pointerEvents: "none",
            opacity: 0.35,
            zIndex: 2,
          }}
        />
        {/* Subtle vignette */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 65%, rgba(0,0,0,0.35) 100%)",
            pointerEvents: "none",
            zIndex: 3,
          }}
        />
        {/* Inventory stamp (top-left corner) */}
        {inv && (
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              fontFamily: MONO,
              fontSize: 9.5,
              letterSpacing: "0.24em",
              color: ACCENT,
              border: `1px solid ${ACCENT}`,
              padding: "4px 8px",
              opacity: 0.85,
              backdropFilter: "blur(2px)",
              background: "rgba(0,0,0,0.4)",
            }}
          >
            {inv}
          </div>
        )}
        {/* Archival caption (bottom-left) */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 14,
            left: 14,
            right: 14,
            fontFamily: MONO,
            fontSize: 9,
            letterSpacing: "0.16em",
            color: "rgba(240,235,226,0.6)",
            textTransform: "uppercase",
          }}
        >
          ouroboros industries llc · 2026 · recovered 2197 · imperial archive
        </div>
      </div>
      {caption && (
        <figcaption
          style={{
            marginTop: 14,
            fontFamily: MONO,
            fontSize: 10.5,
            letterSpacing: "0.16em",
            color: MUTED,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// ─── HeartbeatPulse — small dot pulsing like vitals (used on harvest line) ──
export function HeartbeatPulse({ size = 7 }: { size?: number }) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "50%",
        background: ACCENT,
        boxShadow: `0 0 ${size * 2}px ${ACCENT}`,
        animation: "ols-heartbeat 1.4s ease-out infinite",
      }}
    />
  );
}

// ─── RedFlash — programmatic full-page brief red flash ────────────────
export function useRedFlash() {
  const [flash, setFlash] = useState(false);
  const trigger = () => {
    setFlash(true);
    window.setTimeout(() => setFlash(false), 120);
  };
  const node = (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        background: ACCENT,
        opacity: flash ? 0.18 : 0,
        transition: flash ? "none" : "opacity 200ms ease-out",
        pointerEvents: "none",
        zIndex: 90,
        mixBlendMode: "screen",
      }}
    />
  );
  return { node, trigger };
}

// ─── TextHover — wraps text so it RGB-shifts on hover ────────────────
export function TextHoverShift({ children }: { children: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {hover ? <RGBShift intensity={0.5}>{children}</RGBShift> : children}
    </span>
  );
}

// ─── Caption — a small "evidence label" caption to put under things ───
export function EvidenceCaption({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        marginTop: 12,
        fontFamily: MONO,
        fontSize: 10,
        letterSpacing: "0.24em",
        color: MUTED,
        textTransform: "uppercase",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
