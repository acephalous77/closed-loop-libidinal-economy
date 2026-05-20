"use client";

/**
 * ZineSpread — punk samizdat zine spread for /chair, demo build.
 *
 * Renders:
 *   - The COVER (full-bleed Ouroboros Recliner + stenciled title + drawn
 *     Ω-serpent logotype + halftone + handwritten marginalia + stamps)
 *   - PHASE 01 ONTOGENESIS as one spread (Punk Tech Ouroboros torn-edge
 *     image + chair-stencil silhouette + tract prose + spec stamps +
 *     hand-drawn arrows + LEAKAGE pull-quote)
 *
 * Drops in above the existing OuroborosPortal so the rest of the page
 * stays on cinematic-dark for the demo. If this lands, the rest follows.
 */

import React from "react";
import Image from "next/image";
import {
  ZineFilters,
  OmegaSerpent,
  ChairStencil,
  StencilNumeral,
  RubberStamp,
  HandArrow,
  MarkerCircle,
  HalftoneOverlay,
} from "./ZineAssets";

const BLACK = "#0a0908";
const PAPER = "#f0ebe2";
const NEON_GREEN = "#39ff14";
const NEON_PINK = "#ff2a8a";
const NEON_CYAN = "#3fbfd6";
const STAMP_RED = "#e63a2c";
const MUTED = "#6b6760";

const SANS = `var(--font-geist), system-ui, sans-serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;
const ANTON = `var(--font-anton), Impact, "Bebas Neue", sans-serif`;
const MARKER = `var(--font-permanent-marker), "Comic Sans MS", cursive`;
const CAVEAT = `var(--font-caveat), "Comic Sans MS", cursive`;

export default function ZineSpread() {
  return (
    <>
      <ZineFilters />

      {/* ─── COVER ─────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          background: BLACK,
        }}
      >
        {/* Full-bleed cover image */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
          }}
        >
          <Image
            src="/chair/zine/cover-recliner.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
              filter: "saturate(1.2) contrast(1.15) brightness(0.9)",
            }}
          />
          {/* Darkening gradient so type reads */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(10,9,8,0.85) 0%, rgba(10,9,8,0.35) 40%, rgba(10,9,8,0.55) 70%, rgba(10,9,8,0.92) 100%)",
            }}
          />
        </div>

        {/* Halftone overlay over image */}
        <HalftoneOverlay density="medium" color="rgba(0,0,0,0.45)" zIndex={2} />

        {/* ─── COVER CHROME ─── */}
        {/* Top telex strip — tiny harvest line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 18px",
            fontFamily: MONO,
            fontSize: 10,
            letterSpacing: "0.24em",
            color: PAPER,
            textTransform: "uppercase",
            borderBottom: `1px solid rgba(240,235,226,0.18)`,
            background: "rgba(10,9,8,0.6)",
            backdropFilter: "blur(4px)",
          }}
        >
          <span>◆ ISSUE Ω.026 / 2026 / SAMIZDAT</span>
          <span style={{ color: NEON_GREEN }}>● TRANSMITTING · NO RETURN POSTAGE</span>
        </div>

        {/* Issue cartouche */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 32,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: MONO,
            fontSize: 10.5,
            letterSpacing: "0.18em",
            color: PAPER,
            textTransform: "uppercase",
          }}
        >
          <OmegaSerpent size={52} color={NEON_GREEN} />
          <div style={{ lineHeight: 1.4 }}>
            <div style={{ color: NEON_GREEN, fontWeight: 700 }}>Ouroboros Industries</div>
            <div style={{ color: MUTED }}>life-system pamphlet · vol Ω · no 026</div>
            <div style={{ color: NEON_PINK, marginTop: 4 }}>anti-copyright · pass it on</div>
          </div>
        </div>

        {/* Stamp — NO EGRESS 360° */}
        <div
          style={{
            position: "absolute",
            top: 88,
            right: 56,
            zIndex: 11,
            opacity: 0.92,
          }}
        >
          <RubberStamp text="NO EGRESS · 360°" rotate={-9} color={STAMP_RED} size={0.92} />
        </div>

        {/* THE MASTHEAD — stencil sprayed title */}
        <div
          style={{
            position: "absolute",
            top: "32%",
            left: 32,
            right: 32,
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontFamily: ANTON,
              fontSize: "clamp(72px, 14vw, 220px)",
              fontWeight: 400,
              color: NEON_GREEN,
              lineHeight: 0.82,
              letterSpacing: "-0.02em",
              margin: 0,
              filter: "url(#zine-spray)",
              textTransform: "uppercase",
              textShadow: `4px 4px 0 ${NEON_PINK}, 8px 8px 0 rgba(0,0,0,0.5)`,
            }}
          >
            OUROBOROS
            <br />
            <span style={{ color: PAPER }}>LIFE SYSTEM</span>
          </h1>
          <p
            style={{
              marginTop: 18,
              fontFamily: ANTON,
              fontSize: "clamp(20px, 2.4vw, 36px)",
              color: NEON_CYAN,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              filter: "url(#zine-spray)",
              maxWidth: "20ch",
            }}
          >
            Because life should be effortless.
            <span style={{ color: NEON_PINK, marginLeft: 12 }}>*</span>
          </p>
        </div>

        {/* The tract — bottom-left manifesto */}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: 32,
            maxWidth: 520,
            zIndex: 10,
            color: PAPER,
          }}
        >
          <div
            style={{
              fontFamily: MARKER,
              fontSize: 18,
              color: NEON_PINK,
              letterSpacing: "0.04em",
              marginBottom: 6,
            }}
          >
            * read this before you sit.
          </div>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 16,
              lineHeight: 1.5,
              color: PAPER,
              margin: 0,
              fontWeight: 400,
              maxWidth: "44ch",
            }}
          >
            This pamphlet documents the Ouroboros Industries Life-System apparatus. It
            harvests your motion, your gaze, your dwell. <strong style={{ color: NEON_GREEN, fontWeight: 700 }}>
            Distribute. Reproduce. Refuse.</strong>{" "}
            The apparatus chose the loop. The loop chose you.
          </p>
        </div>

        {/* Hand-drawn arrow + Caveat note pointing AT the chair-recliner */}
        <div
          style={{
            position: "absolute",
            top: "58%",
            right: "8%",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: CAVEAT,
              fontSize: 28,
              color: NEON_PINK,
              transform: "rotate(-6deg)",
            }}
          >
            this one&apos;s yours
          </span>
          <HandArrow length={120} curve={-0.4} color={NEON_PINK} rotate={20} />
        </div>

        {/* Descend prompt */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            right: 32,
            zIndex: 10,
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: "0.3em",
            color: NEON_GREEN,
            textTransform: "uppercase",
            animation: "zine-blink 1.4s steps(2, start) infinite",
          }}
        >
          ↓ Descend
        </div>
      </section>

      {/* ─── PHASE 01 ONTOGENESIS — "THE EMPTY CHAIR" ───────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          background: BLACK,
          color: PAPER,
          padding: "0",
          overflow: "hidden",
        }}
      >
        {/* Big spray-painted phase numeral upper-left */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 24,
            left: -12,
            zIndex: 2,
            opacity: 0.88,
          }}
        >
          <StencilNumeral n="01" size={260} color={NEON_GREEN} />
        </div>

        {/* Phase label — mono */}
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 220,
            zIndex: 3,
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: "0.32em",
            color: NEON_GREEN,
            textTransform: "uppercase",
          }}
        >
          phase · ontogenesis
          <div style={{ color: MUTED, marginTop: 4, letterSpacing: "0.16em", fontSize: 11 }}>
            the apparatus, unoccupied
          </div>
        </div>

        {/* Halftone background flourish */}
        <HalftoneOverlay density="light" color="rgba(57,255,20,0.06)" zIndex={1} />

        {/* Two-column broken grid */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            padding: "200px 48px 100px",
            maxWidth: 1600,
            margin: "0 auto",
            alignItems: "start",
          }}
          className="zine-phase01-grid"
        >
          {/* LEFT — Punk Tech image, torn-edge + chair-stencil silhouette layered */}
          <div
            style={{
              position: "relative",
              transform: "rotate(-1.5deg)",
              marginTop: -24,
            }}
          >
            {/* The image — clipped with a jagged tear */}
            <div
              style={{
                position: "relative",
                aspectRatio: "3 / 2",
                clipPath:
                  "polygon(2% 1%, 14% 0%, 28% 2%, 42% 0%, 58% 1%, 71% 0%, 86% 1%, 99% 0%, 100% 14%, 99% 28%, 100% 42%, 99% 56%, 100% 71%, 99% 86%, 100% 99%, 88% 100%, 72% 99%, 56% 100%, 42% 99%, 28% 100%, 14% 99%, 1% 100%, 0% 88%, 1% 72%, 0% 56%, 1% 42%, 0% 28%, 1% 14%, 0% 2%)",
                background: BLACK,
                border: `0 solid transparent`,
                filter: "drop-shadow(8px 8px 0 rgba(255,42,138,0.25))",
              }}
            >
              <Image
                src="/chair/zine/01-punk-tech.jpg"
                alt="Punk illustration: green serpent emerging from a smashed phone, halftone zine cover"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 700px"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Masking-tape strip top-left */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -16,
                left: 32,
                width: 96,
                height: 24,
                background: "rgba(255,255,200,0.45)",
                transform: "rotate(-8deg)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -10,
                right: 48,
                width: 110,
                height: 22,
                background: "rgba(255,255,200,0.4)",
                transform: "rotate(7deg)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            />

            {/* Caveat note under image */}
            <div
              style={{
                marginTop: 22,
                fontFamily: CAVEAT,
                fontSize: 22,
                color: NEON_PINK,
                transform: "rotate(-2deg)",
                lineHeight: 1.2,
              }}
            >
              before you sit, the apparatus has already <span style={{ color: NEON_GREEN }}>chosen you</span>.
            </div>
          </div>

          {/* RIGHT — Tract + body + chair-stencil + specs */}
          <div
            style={{
              paddingLeft: 48,
              paddingTop: 8,
              position: "relative",
            }}
          >
            {/* Tract headline — punchy zine prose */}
            <h2
              style={{
                fontFamily: ANTON,
                fontSize: "clamp(52px, 6vw, 96px)",
                color: PAPER,
                lineHeight: 0.88,
                letterSpacing: "-0.025em",
                margin: "0 0 24px",
                textTransform: "uppercase",
                filter: "url(#zine-spray)",
              }}
            >
              Before you<br />sit down,<br />
              <span style={{ color: NEON_GREEN }}>
                it is already<br />assembled.
              </span>
            </h2>

            {/* Body — punchy short paragraphs */}
            <div
              style={{
                fontFamily: SANS,
                fontSize: 17,
                lineHeight: 1.55,
                color: PAPER,
                maxWidth: "44ch",
                fontWeight: 420,
              }}
            >
              <p style={{ margin: "0 0 16px" }}>
                <strong style={{ color: NEON_PINK, fontWeight: 700 }}>1.</strong>{" "}
                184 kilograms of medical polymer. Eight amps continuous. A network
                connection that is never permitted to drop.
              </p>
              <p style={{ margin: "0 0 16px" }}>
                <strong style={{ color: NEON_PINK, fontWeight: 700 }}>2.</strong>{" "}
                A seat. A ring. A headset. Six self-sealing ports. No documented
                stand position.
              </p>
              <p style={{ margin: "0 0 16px" }}>
                <strong style={{ color: NEON_PINK, fontWeight: 700 }}>3.</strong>{" "}
                It arrives empty. It does not stay empty.
              </p>
            </div>

            {/* Spec stamps — pasted in mid-column */}
            <div
              style={{
                marginTop: 32,
                display: "flex",
                flexWrap: "wrap",
                gap: 18,
                alignItems: "center",
              }}
            >
              <RubberStamp text="184 KG" rotate={-4} color={STAMP_RED} size={0.7} />
              <RubberStamp text="120–240 V · 8 A" rotate={3} color={NEON_GREEN} size={0.7} />
              <RubberStamp text="ALWAYS-ON" rotate={-2} color={NEON_PINK} size={0.7} />
            </div>

            {/* Marker arrow pointing at "no documented stand position" */}
            <div
              style={{
                position: "absolute",
                top: 360,
                right: 24,
                width: 160,
                transform: "rotate(-12deg)",
              }}
            >
              <span
                style={{
                  fontFamily: MARKER,
                  fontSize: 17,
                  color: NEON_PINK,
                  display: "block",
                }}
              >
                this is the point.
              </span>
              <HandArrow length={100} curve={0.5} color={NEON_PINK} rotate={-25} thickness={3} />
            </div>
          </div>
        </div>

        {/* Chair-stencil silhouette — large, anchored to bottom-right of section */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: 40,
            right: 32,
            zIndex: 1,
            opacity: 0.85,
            transform: "rotate(2deg)",
          }}
        >
          <ChairStencil width={300} color={NEON_GREEN} />
        </div>

        {/* LEAKAGE pull-quote — bottom band */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            margin: "0 48px 64px",
            padding: "28px 32px",
            background: BLACK,
            border: `2px solid ${NEON_PINK}`,
            maxWidth: 720,
          }}
        >
          <div
            style={{
              fontFamily: MONO,
              fontSize: 10,
              color: NEON_PINK,
              letterSpacing: "0.3em",
              marginBottom: 12,
              textTransform: "uppercase",
            }}
          >
            ◆ leakage · pull-quote
          </div>
          <p
            style={{
              fontFamily: ANTON,
              fontSize: "clamp(22px, 2.6vw, 36px)",
              color: PAPER,
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            &ldquo;Lifetime value&rdquo;: the projected profit if every moment of an
            existence is commodified in one form or another.
          </p>
          <cite
            style={{
              display: "block",
              marginTop: 18,
              fontFamily: CAVEAT,
              fontSize: 22,
              color: NEON_GREEN,
              fontStyle: "normal",
            }}
          >
            — Zuboff, on the new economic unit
          </cite>
        </div>

        {/* Bottom transition divider */}
        <div
          aria-hidden
          style={{
            position: "relative",
            zIndex: 2,
            height: 64,
            borderTop: `1px solid rgba(57,255,20,0.18)`,
            borderBottom: `1px solid rgba(57,255,20,0.18)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `repeating-linear-gradient(45deg, transparent 0, transparent 6px, rgba(57,255,20,0.04) 6px, rgba(57,255,20,0.04) 7px)`,
          }}
        >
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              color: NEON_GREEN,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
            }}
          >
            ↓ phase 02 · habitualization · be seated
          </span>
        </div>
      </section>

      {/* Animation keyframes for descend-blink */}
      <style>{`
        @keyframes zine-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 900px) {
          .zine-phase01-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 200px 24px 80px !important;
          }
          .zine-phase01-grid > div:nth-child(2) {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
