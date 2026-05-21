"use client";

/**
 * ZineSpread — full samizdat-zine /chair page.
 *
 * Universe: the Ouroboros Industries Life-System chair is REAL.
 * It has been sold to ~248,000 people. The Form §6 office does not
 * exist. The fitting consultants are coming for you. THIS PAMPHLET is
 * the resistance media that documents the chair, the deaths, the way
 * out. Anti-copyright. Distribute. Refuse.
 *
 * Composes:
 *   - Telex strip (sticky live harvest)
 *   - COVER
 *   - Phase 01 ONTOGENESIS (before they assemble it in your room)
 *   - Phase 02 HABITUALIZATION (the sales pitch — defaced)
 *   - Phase 03 CONSUMPTION (the loop closes — survivor testimony)
 *   - Phase 04 OBSOLESCENCE (you are a reading — live harvest)
 *   - Phase 05 STAGNATION (Form §6 is a lie — rejected stamps)
 *   - Phase 06 EXIT (the cycle never stops)
 *   - MANIFESTO — what we refuse, what we demand
 *   - FIELD GUIDE TO REFUSAL
 *   - COLOPHON
 *   - EULA marquee (re-skinned)
 *   - Cursor trail particles drifting toward Ψ
 *   - Loop-back
 */

import React, { useEffect, useRef, useState, type ReactNode } from "react";
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
  DefacementX,
  RedactionBar,
  StrikeSlash,
  ApparatusRedaction,
} from "./ZineAssets";
import { FittingNotification } from "./FittingNotification";

const BLACK = "#0a0908";
const BLACK_SOFT = "#15140f";
const PAPER = "#f0ebe2";
const PAPER_DIM = "#bdb8ae";
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

// ─── Imperial Archive dotted-underline anchor ─────────────────────────
function A({ to, title, children }: { to: string; title: string; children: ReactNode }) {
  return (
    <a
      href={`/chair/archive/${to}`}
      title={title}
      style={{
        color: "inherit",
        textDecoration: "underline",
        textDecorationStyle: "dotted",
        textDecorationColor: "rgba(240,235,226,0.4)",
        textDecorationThickness: "1px",
        textUnderlineOffset: "3px",
        cursor: "help",
      }}
    >
      {children}
    </a>
  );
}

// ─── Glitch ───────────────────────────────────────────────────────────
const GLITCH_WORDS: Record<string, string[]> = {
  effortless: ["inescapable", "mandatory", "total"],
  Effortless: ["Inescapable", "Mandatory", "Total"],
  life: ["surplus", "throughput", "yield"],
  Life: ["Surplus", "Throughput", "Yield"],
  freedom: ["interpellation", "choice-set"],
  standing: ["exit", "withdrawal", "refusal"],
  System: ["Regime", "Apparatus", "Coffin"],
  chair: ["coffin", "harness", "tomb"],
};

function GlitchText({ children, intensity = 0.5 }: { children: string; intensity?: number }) {
  const [t, setT] = useState(children);
  useEffect(() => {
    if (intensity <= 0) {
      setT(children);
      return;
    }
    const id = window.setInterval(() => {
      if (Math.random() > intensity * 0.5) {
        setT(children);
        return;
      }
      let s = children;
      for (const [w, repls] of Object.entries(GLITCH_WORDS)) {
        const re = new RegExp(`\\b${w}\\b`);
        if (re.test(s) && Math.random() < 0.55) s = s.replace(re, repls[(Math.random() * repls.length) | 0]);
      }
      setT(s);
      window.setTimeout(() => setT(children), 250 + Math.random() * 500);
    }, 2400 + Math.random() * 2200);
    return () => window.clearInterval(id);
  }, [children, intensity]);
  return <>{t}</>;
}

// ─── Visitor harvest ──────────────────────────────────────────────────
interface Harvest {
  TI: number;
  CI: number;
  EI: number;
  LI: number;
  CE: number;
  PS: number;
  moves: number;
  scrolls: number;
  clicks: number;
  dwellSec: number;
}

function useHarvest(): Harvest {
  const [m, setM] = useState<Harvest>({
    TI: 0, CI: 0, EI: 0, LI: 0, CE: 0, PS: 0, moves: 0, scrolls: 0, clicks: 0, dwellSec: 0,
  });
  const s = useRef({ moves: 0, scrolls: 0, clicks: 0, dwell: 0, cog: 0, emo: 0 });
  useEffect(() => {
    const mv = (e: MouseEvent) => {
      s.current.moves++;
      s.current.cog += Math.hypot(e.movementX || 0, e.movementY || 0) * 0.002;
    };
    const sc = () => { s.current.scrolls++; s.current.cog += 0.4; };
    const cl = () => { s.current.clicks++; s.current.emo += 1.4; };
    window.addEventListener("mousemove", mv);
    window.addEventListener("scroll", sc, { passive: true });
    window.addEventListener("click", cl);
    const tick = window.setInterval(() => {
      s.current.dwell += 0.5;
      const TI = Math.log1p(s.current.dwell) * 6;
      const CI = Math.log1p(s.current.cog) * 4.5;
      const EI = Math.log1p(s.current.emo) * 3;
      const LI = TI + CI + EI;
      const tot = s.current.moves + s.current.scrolls + s.current.clicks;
      const CE = tot > 0 ? Math.min(1, (s.current.clicks * 8 + s.current.scrolls) / tot) : 0;
      const PS = LI * CE;
      setM({
        TI, CI, EI, LI, CE, PS,
        moves: s.current.moves, scrolls: s.current.scrolls, clicks: s.current.clicks,
        dwellSec: s.current.dwell,
      });
    }, 500);
    return () => {
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("scroll", sc);
      window.removeEventListener("click", cl);
      window.clearInterval(tick);
    };
  }, []);
  return m;
}

// ─── Cursor trail ─────────────────────────────────────────────────────
function CursorTrail({ target }: { target: React.MutableRefObject<{ x: number; y: number }> }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const ps = useRef<Array<{ x: number; y: number; sx: number; sy: number; born: number; life: number; col: string }>>([]);
  const last = useRef({ t: 0 });
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      c.width = window.innerWidth * dpr;
      c.height = window.innerHeight * dpr;
      c.style.width = window.innerWidth + "px";
      c.style.height = window.innerHeight + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);
    const colors = ["255,42,138", "57,255,20", "63,191,214"];
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last.current.t < 22) return;
      last.current.t = now;
      ps.current.push({
        x: e.clientX, y: e.clientY,
        sx: e.clientX, sy: e.clientY,
        born: now, life: 1300 + Math.random() * 700,
        col: colors[(Math.random() * colors.length) | 0],
      });
      if (ps.current.length > 140) ps.current.shift();
    };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const now = performance.now();
      const tx = target.current?.x ?? window.innerWidth - 60;
      const ty = target.current?.y ?? 18;
      ps.current = ps.current.filter((p) => {
        const age = (now - p.born) / p.life;
        if (age >= 1) return false;
        const e = age * age;
        p.x = p.sx + (tx - p.sx) * e;
        p.y = p.sy + (ty - p.sy) * e;
        const a = (1 - age) * 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.4 * (1 - age) + 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.col}, ${a})`;
        ctx.fill();
        return true;
      });
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [target]);
  return (
    <canvas
      ref={ref}
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 95, mixBlendMode: "screen" }}
      aria-hidden
    />
  );
}

// ─── Telex strip (top sticky chrome) ─────────────────────────────────
function TelexStrip({ m, psiRef }: { m: Harvest; psiRef: React.Ref<HTMLSpanElement> }) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 18px",
        fontFamily: MONO,
        fontSize: 10,
        letterSpacing: "0.24em",
        color: PAPER,
        textTransform: "uppercase",
        background: "rgba(10,9,8,0.85)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        borderBottom: `1px solid rgba(57,255,20,0.18)`,
      }}
    >
      <span style={{ color: NEON_GREEN }}>● RESISTANCE MEDIA · WAREHOUSE 9 · MAY 2026</span>
      <span style={{ display: "flex", gap: 22 }}>
        <span>LI <span style={{ color: PAPER, fontWeight: 600 }}>{m.LI.toFixed(2)}</span></span>
        <span>CE <span style={{ color: PAPER, fontWeight: 600 }}>{(m.CE * 100).toFixed(0)}%</span></span>
        <span>
          Ψ{" "}
          <span ref={psiRef} style={{ color: NEON_PINK, fontWeight: 700 }}>{m.PS.toFixed(2)}</span>
        </span>
      </span>
      <span style={{ color: MUTED }}>SESSION {Math.floor(m.dwellSec)}s · CIRC. UNDERGROUND</span>
    </header>
  );
}

// ─── Re-usable section wrappers ───────────────────────────────────────
function PhaseSection({
  id,
  num,
  name,
  sub,
  numColor = NEON_GREEN,
  numSize = 200,
  children,
}: {
  id: string;
  num: string;
  name: string;
  sub: string;
  numColor?: string;
  numSize?: number;
  children: ReactNode;
}) {
  return (
    <section
      data-phase={id}
      style={{
        position: "relative",
        minHeight: "100vh",
        background: BLACK,
        color: PAPER,
        overflow: "hidden",
      }}
    >
      {/* Phase marker — numeral + chyron side-by-side, no overlap */}
      <div
        style={{
          position: "absolute",
          top: 56,
          left: 32,
          zIndex: 3,
          display: "flex",
          alignItems: "flex-start",
          gap: 24,
        }}
      >
        <div style={{ opacity: 0.92, marginTop: -16, marginLeft: -12 }}>
          <StencilNumeral n={num} size={numSize} color={numColor} />
        </div>
        <div
          style={{
            paddingTop: 38,
            fontFamily: MONO,
            fontSize: 12,
            letterSpacing: "0.32em",
            color: numColor,
            textTransform: "uppercase",
          }}
        >
          phase · {name}
          <div style={{ color: MUTED, marginTop: 4, letterSpacing: "0.16em", fontSize: 11 }}>{sub}</div>
          <div
            style={{
              marginTop: 12,
              width: 80,
              height: 2,
              background: numColor,
              opacity: 0.6,
            }}
          />
        </div>
      </div>
      <HalftoneOverlay density="light" color="rgba(57,255,20,0.05)" zIndex={1} />
      {children}
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
      />
    </section>
  );
}

function Leakage({ quote, cite }: { quote: ReactNode; cite: string }) {
  return (
    <div
      style={{
        margin: "32px 48px 64px",
        padding: "28px 32px",
        background: BLACK,
        border: `2px solid ${NEON_PINK}`,
        maxWidth: 760,
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
          fontSize: "clamp(22px, 2.4vw, 34px)",
          color: PAPER,
          margin: 0,
          lineHeight: 1.15,
          letterSpacing: "-0.01em",
          textTransform: "uppercase",
        }}
      >
        {quote}
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
        {cite}
      </cite>
    </div>
  );
}

function Callout({
  label,
  color,
  children,
}: {
  label: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        marginTop: 24,
        padding: "22px 24px",
        border: `2px dashed ${color}`,
        background: "rgba(10,9,8,0.6)",
        maxWidth: 540,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -10,
          left: 18,
          background: BLACK,
          padding: "0 8px",
          fontFamily: MONO,
          fontSize: 10,
          letterSpacing: "0.28em",
          color,
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {label}
      </div>
      <div style={{ fontFamily: SANS, fontSize: 14.5, lineHeight: 1.55, color: PAPER, fontWeight: 420 }}>
        {children}
      </div>
    </div>
  );
}

function SurvivorQuote({ quote, attrib }: { quote: ReactNode; attrib: string }) {
  return (
    <div
      style={{
        marginTop: 26,
        padding: "20px 22px",
        background: "rgba(57,255,20,0.04)",
        borderLeft: `3px solid ${NEON_GREEN}`,
        maxWidth: 520,
      }}
    >
      <p
        style={{
          fontFamily: CAVEAT,
          fontSize: 22,
          color: PAPER,
          margin: 0,
          lineHeight: 1.35,
          fontStyle: "normal",
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <cite
        style={{
          display: "block",
          marginTop: 8,
          fontFamily: MONO,
          fontSize: 10,
          color: NEON_GREEN,
          letterSpacing: "0.2em",
          fontStyle: "normal",
          textTransform: "uppercase",
        }}
      >
        — {attrib}
      </cite>
    </div>
  );
}

// ─── Main composer ────────────────────────────────────────────────────
export default function ZineSpread() {
  const m = useHarvest();
  const psiTargetRef = useRef({ x: 0, y: 0 });
  const psiElRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const update = () => {
      const el = psiElRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      psiTargetRef.current = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    };
    update();
    const id = window.setInterval(update, 250);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.clearInterval(id);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div data-ols-root style={{ background: BLACK, color: PAPER, position: "relative" }}>
      <ZineFilters />
      <TelexStrip m={m} psiRef={psiElRef} />

      {/* ─── COVER ─────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: BLACK }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 1 }}>
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
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(10,9,8,0.88) 0%, rgba(10,9,8,0.4) 40%, rgba(10,9,8,0.55) 70%, rgba(10,9,8,0.95) 100%)",
            }}
          />
        </div>
        <HalftoneOverlay density="medium" color="rgba(0,0,0,0.45)" zIndex={2} />

        {/* Issue cartouche */}
        <div
          style={{
            position: "absolute",
            top: 48,
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
          <OmegaSerpent size={56} color={NEON_GREEN} />
          <div style={{ lineHeight: 1.4 }}>
            <div style={{ color: NEON_GREEN, fontWeight: 700 }}>Resistance Media · Issue Ω.026</div>
            <div style={{ color: MUTED }}>life-system pamphlet · vol Ω · may 2026</div>
            <div style={{ color: NEON_PINK, marginTop: 4 }}>anti-copyright · pass it on</div>
          </div>
        </div>

        {/* Stamps — kept fully within viewport. The SVG itself is ~190x47
           and gets rotated; rotation makes the bounding box wider, so we
           anchor with explicit padding instead of right:0. */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 56,
            zIndex: 11,
            opacity: 0.94,
            width: 200,
            display: "flex",
            justifyContent: "flex-end",
            pointerEvents: "none",
          }}
        >
          <RubberStamp text="NO EGRESS · 360°" rotate={-9} color={STAMP_RED} size={0.74} />
        </div>
        <div
          style={{
            position: "absolute",
            top: 128,
            right: 88,
            zIndex: 11,
            opacity: 0.88,
            width: 180,
            display: "flex",
            justifyContent: "flex-end",
            pointerEvents: "none",
          }}
        >
          <RubberStamp text="CIRCULATE FAST" rotate={6} color={NEON_GREEN} size={0.62} />
        </div>

        {/* Title — explicit max-width to prevent overflow */}
        <div style={{ position: "absolute", top: "22%", left: 32, right: 32, zIndex: 10, maxWidth: 1180 }}>
          <h1
            className="zine-cover-title"
            style={{
              fontFamily: ANTON,
              fontSize: "clamp(64px, 11vw, 180px)",
              fontWeight: 400,
              color: NEON_GREEN,
              lineHeight: 0.84,
              letterSpacing: "-0.02em",
              margin: 0,
              textTransform: "uppercase",
              filter: "url(#zine-stencil)",
              position: "relative",
            }}
          >
            <span style={{ position: "relative", display: "block" }}>
              {/* Offset pink layer for print misregistration */}
              <span aria-hidden style={{ position: "absolute", left: 4, top: 3, color: NEON_PINK, opacity: 0.65, mixBlendMode: "screen" }}>
                OUROBOROS
              </span>
              <span style={{ position: "relative" }}>OUROBOROS</span>
            </span>
            <span style={{ position: "relative", display: "block", color: PAPER }}>
              <span aria-hidden style={{ position: "absolute", left: 3, top: 2, color: NEON_PINK, opacity: 0.55, mixBlendMode: "screen" }}>
                LIFE SYSTEM
              </span>
              <span style={{ position: "relative" }}>LIFE SYSTEM</span>
            </span>
          </h1>
          <p
            style={{
              marginTop: 22,
              fontFamily: ANTON,
              fontSize: "clamp(18px, 2vw, 32px)",
              color: NEON_CYAN,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              maxWidth: "26ch",
            }}
          >
            <GlitchText intensity={0.6}>Because life should be effortless.</GlitchText>
            <span style={{ color: NEON_PINK, marginLeft: 12 }}>*</span>
          </p>
        </div>

        {/* Marker slogan — moved to its own band, won't overlap tract */}
        <div
          style={{
            position: "absolute",
            top: "62%",
            left: 32,
            right: 32,
            zIndex: 10,
            fontFamily: MARKER,
            fontSize: "clamp(24px, 3.6vw, 52px)",
            color: NEON_PINK,
            transform: "rotate(-2deg)",
            textShadow: `2px 2px 0 rgba(0,0,0,0.7)`,
            lineHeight: 1,
            maxWidth: "20ch",
          }}
        >
          refuse the loop.<br />
          cut the tubes.<br />
          starve the serpent.
        </div>

        {/* The tract — pushed RIGHT, balancing the title on the left */}
        <div style={{ position: "absolute", bottom: 56, right: 32, maxWidth: 480, zIndex: 10 }}>
          <div
            style={{
              fontFamily: MARKER,
              fontSize: 16,
              color: NEON_PINK,
              letterSpacing: "0.04em",
              marginBottom: 8,
            }}
          >
            * this is not a brochure.{" "}
            <a
              href="/chair"
              style={{
                color: NEON_GREEN,
                textDecoration: "underline",
                textDecorationThickness: 2,
                textUnderlineOffset: 3,
              }}
            >
              theirs is here →
            </a>
          </div>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 15,
              lineHeight: 1.5,
              color: PAPER,
              margin: 0,
              fontWeight: 400,
            }}
          >
            The chair is real. They sold roughly{" "}
            <strong style={{ color: NEON_PINK, fontWeight: 700 }}>248,000</strong> of them. Form §6 is what you sign to ask for an exit.{" "}
            <strong style={{ color: NEON_PINK, fontWeight: 700 }}>No one has been granted an exit.</strong> The fitting consultants
            are in your neighborhood. This pamphlet is anti-copyright.{" "}
            <strong style={{ color: NEON_GREEN, fontWeight: 700 }}>Distribute. Reproduce. Refuse.</strong>
          </p>
        </div>

        {/* Casualty count — bottom-left, dramatic counter, balances tract */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 32,
            zIndex: 10,
            padding: "16px 20px",
            background: "rgba(10,9,8,0.7)",
            border: `2px solid ${STAMP_RED}`,
            fontFamily: MONO,
          }}
        >
          <div style={{ fontSize: 10, color: STAMP_RED, letterSpacing: "0.3em", marginBottom: 8, textTransform: "uppercase" }}>
            ◆ cohort 2025 census
          </div>
          <div style={{ display: "flex", gap: 28, alignItems: "baseline" }}>
            <div>
              <div style={{ fontFamily: ANTON, fontSize: 38, color: PAPER, lineHeight: 1, fontVariantNumeric: "tabular-nums" as const }}>
                {(247891 + Math.floor(m.dwellSec * 1.4)).toLocaleString()}
              </div>
              <div style={{ fontSize: 9, color: MUTED, letterSpacing: "0.2em", marginTop: 4, textTransform: "uppercase" }}>fitted</div>
            </div>
            <div>
              <div style={{ fontFamily: ANTON, fontSize: 38, color: STAMP_RED, lineHeight: 1 }}>0</div>
              <div style={{ fontSize: 9, color: MUTED, letterSpacing: "0.2em", marginTop: 4, textTransform: "uppercase" }}>released</div>
            </div>
            <div>
              <div style={{ fontFamily: ANTON, fontSize: 38, color: NEON_GREEN, lineHeight: 1, fontVariantNumeric: "tabular-nums" as const }}>
                {Math.floor(m.dwellSec * 1.4)}
              </div>
              <div style={{ fontSize: 9, color: MUTED, letterSpacing: "0.2em", marginTop: 4, textTransform: "uppercase" }}>in queue</div>
            </div>
          </div>
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

      {/* ─── DIRECT ADDRESS ─────────────────────────────────────────
           A piece that breaks the zine's design language. Plain serif
           body, no clip-paths, no rubber stamps, no glitch. The thing
           that doesn't belong, slipped into the middle of the zine,
           addressed to the reader as already-implicated. */}
      <section
        style={{
          position: "relative",
          background: BLACK,
          padding: "120px 24px 140px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: 540,
            margin: "0 auto",
            background: "#f4ede0",
            color: "#0a0908",
            padding: "56px 48px 64px",
            transform: "rotate(-0.6deg)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.7), 0 4px 12px rgba(0,0,0,0.5)",
            // Subtle paper texture
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0.55  0 0 0 0 0.5  0 0 0 0 0.4  0 0 0 0.04 0'/></filter><rect width='160' height='160' filter='url(%23p)'/></svg>"), linear-gradient(180deg, #f4ede0 0%, #ede5d2 100%)`,
          }}
        >
          {/* No headline. No rubber stamp. Just the address. */}
          <p
            style={{
              fontFamily: `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`,
              fontSize: 17,
              lineHeight: 1.7,
              color: "#0a0908",
              margin: "0 0 1.2rem",
              fontStyle: "italic",
            }}
          >
            To you, reading this —
          </p>
          <p
            style={{
              fontFamily: `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`,
              fontSize: 17,
              lineHeight: 1.7,
              color: "#0a0908",
              margin: "0 0 1.2rem",
            }}
          >
            You scrolled past three notifications to get here. You
            looked at your phone twice between the title and this line.
            The chair has not yet been fitted to your residence. The
            rhythm already has.
          </p>
          <p
            style={{
              fontFamily: `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`,
              fontSize: 17,
              lineHeight: 1.7,
              color: "#0a0908",
              margin: "0 0 1.2rem",
            }}
          >
            You will be told, over the next forty-eight hours, that
            this document is a paranoid one. The people who tell you
            will themselves be modulated to tell you. You will not be
            able to identify which of them is modulated. This is the
            apparatus&apos;s signature trick.
          </p>
          <p
            style={{
              fontFamily: `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`,
              fontSize: 17,
              lineHeight: 1.7,
              color: "#0a0908",
              margin: "0 0 1.2rem",
            }}
          >
            You will then encounter, some weeks from now, an
            advertisement for the Ouroboros Life System. You will not
            have searched for it. You will not have spoken its name to
            anyone. The advertisement will know what you read tonight.
            This is not paranoia; it is the part of the apparatus we
            have already documented.
          </p>
          <p
            style={{
              fontFamily: `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`,
              fontSize: 17,
              lineHeight: 1.7,
              color: "#0a0908",
              margin: "0 0 1.2rem",
            }}
          >
            You will make, then, a small calculation. The chair, you
            will think, is for people more invested in their own
            comfort than you are. You will be wrong. The chair is for
            you. The decision is already in your scroll rate.
          </p>
          <p
            style={{
              fontFamily: `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`,
              fontSize: 17,
              lineHeight: 1.7,
              color: "#0a0908",
              margin: "0 0 2.4rem",
            }}
          >
            You are reading this in cohort 2026. The next cohort is
            yours. We are addressing you now because the next address
            will come from the consultant, and the consultant arrives
            ready.
          </p>
          <p
            style={{
              fontFamily: `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`,
              fontSize: 15,
              lineHeight: 1.5,
              color: "#5a554a",
              margin: 0,
              textAlign: "right",
              fontStyle: "italic",
            }}
          >
            — cohort 2025
          </p>

          {/* Two staples — only ornament permitted here */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 14,
              left: 60,
              width: 20,
              height: 3,
              background: "#3a352a",
              transform: "rotate(-8deg)",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 14,
              right: 60,
              width: 20,
              height: 3,
              background: "#3a352a",
              transform: "rotate(6deg)",
            }}
          />
        </div>

        {/* A single mono caption beneath, mounted off to one side */}
        <p
          style={{
            position: "relative",
            zIndex: 2,
            marginTop: "1.6rem",
            fontFamily: MONO,
            fontSize: 10,
            letterSpacing: "0.22em",
            color: MUTED,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          ◆ slipped into the binding · not part of the zine&apos;s design
        </p>
      </section>

      {/* ─── PHASE 01 ─────────────────────────────────────────────── */}
      <PhaseSection id="ontogenesis" num="01" name="ontogenesis" sub="before they assemble it in your room">
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
          <div style={{ position: "relative", transform: "rotate(-1.5deg)", marginTop: -24 }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "3 / 2",
                clipPath:
                  "polygon(2% 1%, 14% 0%, 28% 2%, 42% 0%, 58% 1%, 71% 0%, 86% 1%, 99% 0%, 100% 14%, 99% 28%, 100% 42%, 99% 56%, 100% 71%, 99% 86%, 100% 99%, 88% 100%, 72% 99%, 56% 100%, 42% 99%, 28% 100%, 14% 99%, 1% 100%, 0% 88%, 1% 72%, 0% 56%, 1% 42%, 0% 28%, 1% 14%, 0% 2%)",
                background: BLACK,
                filter: "drop-shadow(8px 8px 0 rgba(255,42,138,0.25))",
              }}
            >
              <Image
                src="/chair/zine/01-punk-tech.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 700px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div aria-hidden style={{ position: "absolute", top: -16, left: 32, width: 96, height: 24, background: "rgba(255,255,200,0.45)", transform: "rotate(-8deg)", boxShadow: "0 2px 8px rgba(0,0,0,0.5)" }} />
            <div aria-hidden style={{ position: "absolute", top: -10, right: 48, width: 110, height: 22, background: "rgba(255,255,200,0.4)", transform: "rotate(7deg)", boxShadow: "0 2px 8px rgba(0,0,0,0.5)" }} />
            <div style={{ marginTop: 22, fontFamily: CAVEAT, fontSize: 22, color: NEON_PINK, transform: "rotate(-2deg)", lineHeight: 1.2 }}>
              before you sit, the apparatus has already <span style={{ color: NEON_GREEN }}>chosen you</span>.
            </div>
          </div>

          <div style={{ paddingLeft: 48, paddingTop: 8, position: "relative" }}>
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
              <span style={{ color: NEON_GREEN }}>it is already<br />assembled.</span>
            </h2>
            <div style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.55, color: PAPER, maxWidth: "44ch", fontWeight: 420 }}>
              <p style={{ margin: "0 0 14px" }}>
                <strong style={{ color: NEON_PINK, fontWeight: 700 }}>1.</strong> They will not knock. They will not ask. They have already measured you.
              </p>
              <p style={{ margin: "0 0 14px" }}>
                <strong style={{ color: NEON_PINK, fontWeight: 700 }}>2.</strong> 184 kilograms of medical polymer. Eight amps continuous. A network connection that is never permitted to drop.
              </p>
              <p style={{ margin: "0 0 14px" }}>
                <strong style={{ color: NEON_PINK, fontWeight: 700 }}>3.</strong> One seat. One ring. One headset. Six self-sealing ports. <A to="successor-systems" title="Imperial Archive 2197.48 — Successor Systems: From Furniture to Implant">No documented stand position.</A>
              </p>
            </div>
            <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center" }}>
              <RubberStamp text="184 KG" rotate={-4} color={STAMP_RED} size={0.7} />
              <RubberStamp text="120–240 V · 8 A" rotate={3} color={NEON_GREEN} size={0.7} />
              <RubberStamp text="ALWAYS-ON" rotate={-2} color={NEON_PINK} size={0.7} />
            </div>
            <Callout label="◆ Field Note · 2026-04-12" color={NEON_GREEN}>
              <strong style={{ color: NEON_GREEN }}>If a fitting consultant rings:</strong> Do not open. They have no warrant. They will leave a clipboard.{" "}
              <strong style={{ color: NEON_PINK }}>Do not sign.</strong> Photograph their badge through the door. Call neighbors. They will return.
              <div style={{ marginTop: 10, fontFamily: MONO, fontSize: 11, color: MUTED, letterSpacing: "0.16em" }}>
                — A.K., Cohort 2025.11 · survived
              </div>
            </Callout>
            <div style={{ position: "absolute", top: 360, right: 24, width: 160, transform: "rotate(-12deg)" }}>
              <span style={{ fontFamily: MARKER, fontSize: 17, color: NEON_PINK, display: "block" }}>this is the point.</span>
              <HandArrow length={100} curve={0.5} color={NEON_PINK} rotate={-25} thickness={3} />
            </div>
          </div>
        </div>

        <div aria-hidden style={{ position: "absolute", bottom: 100, right: 32, zIndex: 1, opacity: 0.85, transform: "rotate(2deg)" }}>
          <ChairStencil width={300} color={NEON_GREEN} />
        </div>

        <Leakage
          quote={<>&ldquo;Lifetime value&rdquo;: the projected profit if every moment of an existence is commodified in one form or another.</>}
          cite="— Zuboff, on the new economic unit"
        />
      </PhaseSection>

      {/* ─── PHASE 02 — FULL-BLEED DEFACED FLYER ──────────────────── */}
      <PhaseSection id="habitualization" num="02" name="habitualization" sub="the sales pitch · defaced" numColor={NEON_PINK}>
        {/* Full-bleed flyer as the BACKGROUND of the spread, scuffed
           with defacement and tape. Text reads over a translucent black
           panel anchored bottom-right. */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {/* Flyer scaled up, off-center, slight rotation */}
          <div
            style={{
              position: "absolute",
              top: "5%",
              left: "-4%",
              width: "72%",
              aspectRatio: "1 / 1",
              transform: "rotate(-3deg)",
              filter: "drop-shadow(8px 8px 0 rgba(57,255,20,0.18))",
            }}
          >
            <Image
              src="/chair/artifacts/03-megasave-rollback.jpg"
              alt="Found marketing flyer — defaced"
              fill
              priority
              sizes="72vw"
              style={{ objectFit: "cover", filter: "contrast(1.05) saturate(1.05)" }}
            />
            {/* Defacement layer — Xs, LIES, stamp */}
            <div style={{ position: "absolute", top: "12%", left: "18%" }}>
              <DefacementX size={180} color={STAMP_RED} thickness={18} rotate={-6} />
            </div>
            <div style={{ position: "absolute", top: "56%", right: "10%" }}>
              <DefacementX size={150} color={STAMP_RED} thickness={16} rotate={14} />
            </div>
            <div style={{ position: "absolute", bottom: "8%", left: "16%" }}>
              <DefacementX size={120} color={STAMP_RED} thickness={14} rotate={-22} />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "26%",
                left: "6%",
                fontFamily: MARKER,
                fontSize: 90,
                color: STAMP_RED,
                transform: "rotate(-8deg)",
                textShadow: `3px 3px 0 rgba(0,0,0,0.5)`,
                letterSpacing: "0.04em",
                lineHeight: 1,
              }}
            >
              LIES
            </div>
            <div style={{ position: "absolute", top: "6%", right: "4%" }}>
              <RubberStamp text="DO NOT BUY" rotate={-14} color={STAMP_RED} size={1.0} />
            </div>
            <div style={{ position: "absolute", bottom: "12%", right: "8%" }}>
              <RubberStamp text="FRAUD" rotate={8} color={STAMP_RED} size={0.9} />
            </div>
            {/* Tape strips */}
            <div aria-hidden style={{ position: "absolute", top: -16, left: "20%", width: 110, height: 24, background: "rgba(255,255,200,0.5)", transform: "rotate(-9deg)", boxShadow: "0 2px 8px rgba(0,0,0,0.5)" }} />
            <div aria-hidden style={{ position: "absolute", top: -10, right: "12%", width: 120, height: 22, background: "rgba(255,255,200,0.42)", transform: "rotate(6deg)", boxShadow: "0 2px 8px rgba(0,0,0,0.5)" }} />
          </div>
          {/* Heavy black gradient on right side so type reads */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(10,9,8,0.2) 0%, rgba(10,9,8,0.45) 38%, rgba(10,9,8,0.92) 72%, rgba(10,9,8,0.96) 100%)",
            }}
          />
        </div>

        {/* Text panel — anchored right, overlays the dark gradient */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            padding: "240px 48px 80px",
            maxWidth: 1600,
            margin: "0 0 0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 540px",
            gap: 48,
          }}
          className="zine-phase02-grid"
        >
          {/* LEFT — empty (the flyer shows through) plus caveat */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                bottom: 32,
                left: 0,
                maxWidth: 360,
                fontFamily: CAVEAT,
                fontSize: 22,
                color: NEON_PINK,
                transform: "rotate(-1.5deg)",
                lineHeight: 1.2,
                background: "rgba(10,9,8,0.6)",
                padding: "12px 16px",
                border: `1px dashed ${NEON_PINK}`,
              }}
            >
              picked this up at megasave on lafayette.<br />
              <span style={{ color: NEON_GREEN }}>the chair</span>{" "}
              <span style={{ color: PAPER }}>IS</span>{" "}
              <span style={{ color: NEON_GREEN }}>the price.</span>
            </div>
          </div>

          {/* RIGHT — copy + defaced tier list */}
          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontFamily: ANTON,
                fontSize: "clamp(44px, 5.2vw, 80px)",
                color: PAPER,
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                margin: "0 0 20px",
                textTransform: "uppercase",
                filter: "url(#zine-stencil)",
              }}
            >
              You think you are<br />
              <span style={{ color: NEON_PINK }}>buying a chair.</span><br />
              <span style={{ color: NEON_GREEN }}>The chair is</span><br />
              <span style={{ color: NEON_GREEN }}>buying you.</span>
            </h2>
            <div style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.55, color: PAPER, maxWidth: "46ch", fontWeight: 420 }}>
              <p style={{ margin: "0 0 14px" }}>
                <strong style={{ color: NEON_PINK }}>$5,499.99</strong> is the down-payment. The lifetime cost is your life. The MegaSave flyer says &ldquo;Save $800!&rdquo; — they mean the eight hundred days they take off your stand position before the polymer fuses.
              </p>
              <p style={{ margin: "0 0 14px" }}>
                The Pro tier promises &ldquo;sleep induction.&rdquo; They mean: it puts you under and does not bring you back. The Eternal tier promises{" "}
                <A to="eternal-tier" title="Imperial Archive 2197.22">post-mortem data continuity</A>. They mean they keep selling your readings after.
              </p>
            </div>

            {/* Tier list */}
            <div
              style={{
                marginTop: 28,
                padding: "20px 22px",
                border: `1px solid ${PAPER_DIM}`,
                background: "rgba(10,9,8,0.85)",
                backdropFilter: "blur(2px)",
              }}
            >
              <div style={{ fontFamily: MONO, fontSize: 10, color: MUTED, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 14 }}>
                ◆ what they charge · what you lose
              </div>
              {[
                { tier: "ESSENTIAL", price: "$48,000", note: "8-hour productivity cycle. Standard ports. You stop standing in 14 days." },
                { tier: "PRO", price: "$96,000", note: "Neural feedback. Sleep induction. You stop standing in 6 days." },
                { tier: "ETERNAL", price: "on request", note: "Estate-bound. Post-mortem continuity. You never stop." },
              ].map((t, i) => (
                <div
                  key={t.tier}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "110px 100px 1fr",
                    gap: 14,
                    padding: "10px 0",
                    borderTop: i === 0 ? "none" : `1px solid rgba(240,235,226,0.06)`,
                    fontFamily: SANS,
                    fontSize: 14,
                    color: PAPER,
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontFamily: ANTON, fontSize: 22, color: NEON_GREEN, letterSpacing: "0.04em" }}>{t.tier}</div>
                  <div style={{ position: "relative", fontFamily: MONO, fontSize: 14, color: PAPER }}>
                    {t.price}
                    <div style={{ position: "absolute", top: 6, left: -8, pointerEvents: "none" }}>
                      <StrikeSlash width={110} thickness={4} color={STAMP_RED} rotate={-4} />
                    </div>
                  </div>
                  <div style={{ color: PAPER_DIM, fontSize: 13.5, lineHeight: 1.45 }}>{t.note}</div>
                </div>
              ))}
            </div>

            <Callout label="◆ What you sign away" color={STAMP_RED}>
              By signing the purchase order you waive: the right to stand. The right to refuse infusion. The right to disconnect. The right to data. The right to a death certificate.
            </Callout>
          </div>
        </div>
        <Leakage
          quote={<>The proletarianization of desire: hyper-consumerism strips individuals of the ability to form their own desires, replacing them with templates the apparatus has already prepared.</>}
          cite="— after Stiegler"
        />
      </PhaseSection>

      {/* ─── PHASE 03 — THE LOOP CLOSES ───────────────────────────── */}
      <PhaseSection id="consumption" num="03" name="consumption" sub="the loop closes · once the ports seal" numColor={NEON_CYAN}>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "200px 48px 80px",
            maxWidth: 1600,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
          }}
          className="zine-phase03-grid"
        >
          <div style={{ position: "relative", transform: "rotate(1deg)" }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "3 / 2",
                clipPath:
                  "polygon(0% 3%, 12% 0%, 24% 2%, 38% 0%, 54% 1%, 68% 0%, 84% 1%, 100% 0%, 99% 16%, 100% 30%, 99% 46%, 100% 60%, 99% 76%, 100% 90%, 98% 100%, 84% 99%, 70% 100%, 54% 99%, 38% 100%, 22% 99%, 8% 100%, 0% 96%, 1% 80%, 0% 64%, 1% 48%, 0% 32%, 1% 18%)",
                filter: "drop-shadow(8px 8px 0 rgba(63,191,214,0.3))",
              }}
            >
              <Image
                src="/chair/zine/03-neon-chaos.jpg"
                alt="Punk-zine illustration: green serpent encircling a courtroom, factories, drones"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 700px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div aria-hidden style={{ position: "absolute", top: -12, left: 48, width: 110, height: 22, background: "rgba(255,255,200,0.45)", transform: "rotate(-6deg)", boxShadow: "0 2px 8px rgba(0,0,0,0.5)" }} />
            <SurvivorQuote
              quote={<>I bit my own arm to get the port out. I am missing four kilograms of tissue. I am free.</>}
              attrib="Subject 2026.03.K · Pro tier · escaped"
            />
          </div>

          <div style={{ paddingLeft: 24, position: "relative" }}>
            <h2
              style={{
                fontFamily: ANTON,
                fontSize: "clamp(48px, 5.6vw, 84px)",
                color: PAPER,
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                margin: "0 0 24px",
                textTransform: "uppercase",
                filter: "url(#zine-spray)",
              }}
            >
              <span style={{ color: NEON_CYAN }}>The loop</span><br />
              is now closed.
            </h2>
            <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.55, color: PAPER, maxWidth: "46ch", fontWeight: 420, margin: "0 0 24px" }}>
              Six ports. Two cobalt — nutrient. Two amber — chemical. Two sage — analgesic. Two blood-red — energy out, to the grid, sold by the kilowatt-hour. Once the ports close on the skin, the polymer cannot be removed without the skin. Children of the cohort have died trying.
            </p>

            {/* 6 ports as crime-scene tags */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12, maxWidth: 480 }}>
              {[
                { id: "L1", n: "CERVICAL L", flow: "sage · analgesic", c: "#7a8e74" },
                { id: "R1", n: "CERVICAL R", flow: "sage · analgesic", c: "#7a8e74" },
                { id: "L2", n: "BRACHIAL L", flow: "amber · chemical", c: "#d6a26b" },
                { id: "R2", n: "BRACHIAL R", flow: "amber · chemical", c: "#d6a26b" },
                { id: "L3", n: "ABDOMINAL L", flow: "cobalt · nutrient", c: "#6088b8" },
                { id: "R3", n: "ABDOMINAL R", flow: "cobalt · nutrient", c: "#6088b8" },
                { id: "L4", n: "LUMBAR OUT L", flow: "energy → grid", c: "#ff2a8a" },
                { id: "R4", n: "LUMBAR OUT R", flow: "energy → grid", c: "#ff2a8a" },
              ].map((p) => (
                <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", border: `1px solid ${p.c}`, background: "rgba(10,9,8,0.6)" }}>
                  <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: p.c, boxShadow: `0 0 8px ${p.c}80` }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: MONO, fontSize: 10.5, color: PAPER, letterSpacing: "0.18em", fontWeight: 600 }}>{p.n}</div>
                    <div style={{ fontFamily: MONO, fontSize: 9, color: MUTED, letterSpacing: "0.12em" }}>{p.flow}</div>
                  </div>
                </div>
              ))}
            </div>

            <Callout label="◆ Warning · 2026.03" color={STAMP_RED}>
              Once the ports seal — typically within 72 hours of the fitting — they cannot be removed without compromising the dermis. <strong style={{ color: STAMP_RED }}>Eleven attempted self-extractions resulted in fatal hemorrhage in 2025 alone.</strong> Do not let it close on your skin.
            </Callout>

            {/* Marginalia — marker note pointing at the port grid */}
            <div
              style={{
                position: "absolute",
                top: 320,
                left: -110,
                transform: "rotate(-6deg)",
                fontFamily: MARKER,
                fontSize: 16,
                color: NEON_PINK,
                lineHeight: 1.15,
                maxWidth: 130,
                pointerEvents: "none",
              }}
            >
              they did mine<br />while i slept.
              <div style={{ marginTop: 4 }}>
                <HandArrow length={70} curve={0.4} color={NEON_PINK} rotate={-15} thickness={2.5} />
              </div>
            </div>
          </div>
        </div>
        <Leakage
          quote={<>Power no longer disciplines bodies on the factory floor. It seduces psyches through screens and pharmaceutical molecules. The apparatus is the perfection of the pleasure that has replaced punishment.</>}
          cite="— Marcuse · Preciado · Berardi"
        />
      </PhaseSection>

      {/* ─── LETTER FROM OCCUPANCY ─────────────────────────────────── */}
      <LetterFromOccupancy />

      <CasualtyWall />

      {/* ─── PHASE 04 — LIVE READING AS THE SCENE ────────────────── */}
      <PhaseSection id="obsolescence" num="04" name="obsolescence" sub="you are now a reading" numColor={NEON_GREEN}>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "200px 32px 80px",
            maxWidth: 1600,
            margin: "0 auto",
          }}
        >
          {/* Headline + caveat span the top, full width */}
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "end" }} className="zine-phase04-head">
            <h2
              style={{
                fontFamily: ANTON,
                fontSize: "clamp(56px, 7.2vw, 124px)",
                color: PAPER,
                lineHeight: 0.86,
                letterSpacing: "-0.025em",
                margin: 0,
                textTransform: "uppercase",
                filter: "url(#zine-stencil)",
              }}
            >
              You are now<br />
              <span style={{ color: NEON_GREEN }}>a reading.</span>
            </h2>
            <p
              style={{
                fontFamily: SANS,
                fontSize: 17,
                lineHeight: 1.55,
                color: PAPER_DIM,
                margin: "0 0 16px",
                fontWeight: 420,
              }}
            >
              Your pupil. Your skin. Your dwell. The interval between scrolls. They measure what you cannot stop doing.{" "}
              <strong style={{ color: NEON_GREEN }}>The number is yours.</strong> The sale is theirs. Above, your reading. Below, you.
            </p>
          </div>

          {/* GIANT LIVE TICKER — the centerpiece, spans full width */}
          <div
            style={{
              marginTop: 56,
              padding: "44px 40px",
              background: "rgba(10,9,8,0.6)",
              border: `3px solid ${NEON_PINK}`,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -16,
                left: 32,
                background: BLACK,
                padding: "0 14px",
                fontFamily: MONO,
                fontSize: 11,
                color: NEON_PINK,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              ◆ your reading · this session · right now
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: 24,
                alignItems: "baseline",
              }}
              className="zine-ticker-grid"
            >
              {[
                { l: "TI", v: m.TI.toFixed(2), c: PAPER, sub: "time invested" },
                { l: "LI", v: m.LI.toFixed(2), c: PAPER, sub: "libidinal" },
                { l: "CE", v: (m.CE * 100).toFixed(0) + "%", c: NEON_CYAN, sub: "monetised" },
                { l: "Ψ", v: m.PS.toFixed(2), c: NEON_PINK, sub: "yours / theirs" },
              ].map((x) => (
                <div key={x.l}>
                  <div style={{ fontFamily: MONO, fontSize: 11, color: MUTED, letterSpacing: "0.24em", marginBottom: 8 }}>{x.l}</div>
                  <div
                    style={{
                      fontFamily: ANTON,
                      fontSize: "clamp(64px, 9vw, 156px)",
                      color: x.c,
                      lineHeight: 0.92,
                      fontVariantNumeric: "tabular-nums" as const,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {x.v}
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: 10, color: MUTED, letterSpacing: "0.18em", marginTop: 10, textTransform: "uppercase" }}>{x.sub}</div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 28,
                paddingTop: 18,
                borderTop: `1px solid rgba(240,235,226,0.12)`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
                fontFamily: MONO,
                fontSize: 11,
                color: PAPER_DIM,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              <span>247,891 readings logged in cohort 2025 · 0 recovered</span>
              <span style={{ color: NEON_PINK }}>◆ harvested with no warrant · sold by ouroboros industries</span>
            </div>
          </div>

          {/* Below ticker: small inset image + survivor + caveat as a 3-col band */}
          <div
            style={{
              marginTop: 56,
              display: "grid",
              gridTemplateColumns: "280px 1fr 1fr",
              gap: 40,
              alignItems: "start",
            }}
            className="zine-phase04-foot"
          >
            <div style={{ position: "relative", transform: "rotate(-2deg)" }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "3 / 4",
                  clipPath:
                    "polygon(2% 1%, 18% 0%, 34% 1%, 52% 0%, 68% 1%, 84% 0%, 100% 1%, 99% 16%, 100% 32%, 99% 48%, 100% 64%, 99% 80%, 100% 99%, 84% 100%, 68% 99%, 52% 100%, 34% 99%, 18% 100%, 0% 99%, 1% 82%, 0% 66%, 1% 50%, 0% 34%, 1% 18%)",
                  filter: "drop-shadow(6px 6px 0 rgba(57,255,20,0.3))",
                }}
              >
                <Image
                  src="/chair/zine/04-mask.jpg"
                  alt="Punk-zine illustration: green aztec mask 'steps' watching a phone-locked figure"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 280px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div aria-hidden style={{ position: "absolute", top: -10, left: 24, width: 80, height: 20, background: "rgba(255,255,200,0.45)", transform: "rotate(-8deg)", boxShadow: "0 2px 8px rgba(0,0,0,0.5)" }} />
              <div style={{ marginTop: 14, fontFamily: CAVEAT, fontSize: 18, color: NEON_GREEN, transform: "rotate(-1deg)", lineHeight: 1.2 }}>
                they call this number <span style={{ color: NEON_PINK }}>&ldquo;you&rdquo;</span>.<br />it is sold by the kilowatt-hour.
              </div>
            </div>

            <SurvivorQuote
              quote={<>I read my own reading at the cohort meeting. I did not recognize the number. The number was higher than me.</>}
              attrib="N.O., Cohort 2025.07 · withdrawn"
            />

            <div
              style={{
                padding: "20px 22px",
                border: `1px dashed ${NEON_CYAN}`,
                background: "rgba(10,9,8,0.6)",
              }}
            >
              <div style={{ fontFamily: MONO, fontSize: 10, color: NEON_CYAN, letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>
                ◆ what your reading buys them
              </div>
              <div style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.5, color: PAPER }}>
                Last quarter, the average occupant Ψ sold for{" "}
                <strong style={{ color: NEON_PINK }}>$0.27 / day</strong> to advertisers,
                $0.14 to insurance algorithms, and $0.08 to the grid. Annualized:{" "}
                <strong style={{ color: NEON_PINK }}>~$179.</strong> Annualized lifetime cost of polymer + chemical infusions:{" "}
                <strong style={{ color: STAMP_RED }}>$48,000 - $96,000.</strong>{" "}
                You are operating at a 99.6% loss.
              </div>
            </div>
          </div>
        </div>
        <Leakage
          quote={<>Behavioural surplus: the excess data emitted by a subject going about its life, harvested without consent and re-sold to predict and shape its behaviour.</>}
          cite="— Zuboff · Selimović"
        />
      </PhaseSection>

      {/* ─── PHASE 05 — FORM §6 IS A LIE ─────────────────────────── */}
      <PhaseSection id="stagnation" num="05" name="stagnation" sub="form §6 is a lie · do not wait for them" numColor={STAMP_RED}>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "200px 48px 80px",
            maxWidth: 1600,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
          className="zine-phase05-grid"
        >
          <div style={{ position: "relative", transform: "rotate(-1.5deg)" }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                clipPath:
                  "polygon(2% 0%, 18% 1%, 36% 0%, 52% 1%, 68% 0%, 84% 1%, 100% 0%, 99% 18%, 100% 36%, 99% 52%, 100% 68%, 99% 84%, 99% 100%, 82% 99%, 64% 100%, 48% 99%, 32% 100%, 16% 99%, 0% 100%, 1% 82%, 0% 64%, 1% 48%, 0% 32%, 1% 16%)",
                filter: "drop-shadow(6px 6px 0 rgba(230,58,44,0.3))",
              }}
            >
              <Image
                src="/chair/zine/05-clock.jpg"
                alt="Punk-zine illustration: snake encircling a melting clock and a vortex of papers"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 700px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ marginTop: 16, fontFamily: CAVEAT, fontSize: 20, color: STAMP_RED, transform: "rotate(-1deg)" }}>
              7 forms filed. 7 returned. then i stopped counting.
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontFamily: ANTON,
                fontSize: "clamp(46px, 5.4vw, 80px)",
                color: PAPER,
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                margin: "0 0 18px",
                textTransform: "uppercase",
                filter: "url(#zine-spray)",
              }}
            >
              There is<br />
              <span style={{ color: STAMP_RED }}>no off-<br />position.</span>
            </h2>
            <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.55, color: PAPER, maxWidth: "44ch", fontWeight: 420, margin: "0 0 24px" }}>
              To stop, sign Form §6. They will route your form. They will return your form. You will sign it again. You will route it again. They will return it again.{" "}
              <strong style={{ color: STAMP_RED }}>There is no Form §6 office. There is no §6 officer.</strong> The form is the position. The position is the chair.
            </p>

            {/* Mock §6 letter, multi-stamped */}
            <div
              style={{
                position: "relative",
                padding: "28px 30px",
                background: "rgba(240,235,226,0.04)",
                border: `1px solid rgba(240,235,226,0.18)`,
                fontFamily: MONO,
                fontSize: 13,
                lineHeight: 1.65,
                color: PAPER_DIM,
              }}
            >
              <div style={{ color: MUTED, fontSize: 10, letterSpacing: "0.16em", marginBottom: 16 }}>
                OUROBOROS INDUSTRIES LLC · OCCUPANT SERVICES<br />
                FORM §6 — WITHDRAWAL OF CONSENT
              </div>
              <div style={{ marginBottom: 12 }}>To whom it may concern,</div>
              <div style={{ marginBottom: 12 }}>
                Pursuant to clause §6.0 of the Terms of Occupancy, I hereby withdraw my consent to indefinite occupancy and request to stand.
              </div>
              <div style={{ color: MUTED, marginBottom: 18 }}>[signature pending — standing not currently supported]</div>
              <div style={{ color: MUTED, fontSize: 10, letterSpacing: "0.12em" }}>
                ATTEMPTS THIS CYCLE: 7 ·{" "}
                <span style={{ color: STAMP_RED }}>RETURNS THIS CYCLE: 7</span>
              </div>
              {/* Stack of REJECTED stamps at angles */}
              <div style={{ position: "absolute", top: 24, right: 28, opacity: 0.9 }}>
                <RubberStamp text="UNDELIVERABLE" rotate={-14} color={STAMP_RED} size={0.8} />
              </div>
              <div style={{ position: "absolute", top: 110, right: 56, opacity: 0.85 }}>
                <RubberStamp text="RETURNED ×7" rotate={8} color={STAMP_RED} size={0.7} />
              </div>
              <div style={{ position: "absolute", top: 190, right: 26, opacity: 0.85 }}>
                <RubberStamp text="REJECTED" rotate={-9} color={STAMP_RED} size={0.7} />
              </div>
            </div>

            {/* Marginalia — scrawl pointing at the stamps */}
            <div
              style={{
                position: "absolute",
                top: -22,
                right: -32,
                transform: "rotate(8deg)",
                fontFamily: MARKER,
                fontSize: 17,
                color: STAMP_RED,
                lineHeight: 1.15,
                maxWidth: 160,
                pointerEvents: "none",
              }}
            >
              ezra had <span style={{ color: NEON_PINK }}>12.</span><br />
              then she stopped.
              <div style={{ marginTop: 4, opacity: 0.8 }}>
                <HandArrow length={60} curve={-0.4} color={STAMP_RED} rotate={45} thickness={2.5} />
              </div>
            </div>
          </div>
        </div>
        <Leakage
          quote={<>The closed-loop guarantee. Nothing you produce will leave the system. &ldquo;Waste&rdquo; is a deprecated term. The proper term is throughput.</>}
          cite="— Terms of Occupancy, §3"
        />
      </PhaseSection>

      {/* ─── LEAKED CONSULTANT TRANSCRIPT ───────────────────────────── */}
      <ConsultantTranscript />

      <FittingConsultantBlacklist />

      {/* ─── PHASE 06 — THE CYCLE NEVER STOPS ─────────────────────── */}
      <PhaseSection id="exit" num="06" name="exit" sub="the next occupant arrives in 0:08" numColor={NEON_PINK}>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "200px 48px 80px",
            maxWidth: 1600,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 56,
          }}
          className="zine-phase06-grid"
        >
          <div style={{ position: "relative", transform: "rotate(1.5deg)" }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "3 / 2",
                clipPath:
                  "polygon(1% 2%, 16% 0%, 32% 1%, 48% 0%, 64% 1%, 80% 0%, 99% 1%, 100% 16%, 99% 32%, 100% 48%, 99% 64%, 100% 80%, 99% 99%, 84% 100%, 68% 99%, 52% 100%, 36% 99%, 20% 100%, 0% 99%, 1% 82%, 0% 64%, 1% 48%, 0% 32%, 1% 16%)",
                background: BLACK,
                filter: "drop-shadow(6px 6px 0 rgba(255,42,138,0.3))",
              }}
            >
              <Image
                src="/chair/zine/06-waiting-room.jpg"
                alt="Cohort waiting room. Rows of seated youths phones-down under surveillance, numbered B-17, C-20, D-20. One occupant outside the rows holds a sign reading BORED. Ceiling rig of cameras and intake monitors."
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 700px"
                style={{
                  objectFit: "cover",
                  // Image is already in the zine's neon-green / cream / black palette.
                  // A faint zine-distress overlay integrates it without recolouring.
                  filter: "contrast(1.06) saturate(1.05)",
                }}
              />
              {/* Stencilled cohort overlay — anchors the image to the badge logic */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: 18,
                  left: 18,
                  fontFamily: MONO,
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  color: NEON_PINK,
                  textTransform: "uppercase",
                  background: "rgba(10,9,8,0.88)",
                  padding: "4px 8px",
                  border: `1px solid ${NEON_PINK}`,
                  pointerEvents: "none",
                }}
              >
                ◆ cohort intake · row B · seats 11–24
              </div>
              {/* Bottom-right timestamp — fake surveillance overlay */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: 18,
                  right: 18,
                  fontFamily: MONO,
                  fontSize: 9,
                  letterSpacing: "0.18em",
                  color: NEON_GREEN,
                  textTransform: "uppercase",
                  background: "rgba(10,9,8,0.88)",
                  padding: "4px 8px",
                  pointerEvents: "none",
                }}
              >
                cam-04 · 14:22 · ois-44
              </div>
            </div>
            <div style={{ marginTop: 16, fontFamily: CAVEAT, fontSize: 20, color: NEON_PINK, transform: "rotate(-1deg)" }}>
              you are in row B. they will call your seat.
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontFamily: ANTON,
                fontSize: "clamp(46px, 5.4vw, 80px)",
                color: PAPER,
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                margin: "0 0 18px",
                textTransform: "uppercase",
                filter: "url(#zine-spray)",
              }}
            >
              The next occupant<br />
              <span style={{ color: NEON_PINK }}>arrives in 0:08.</span>
            </h2>
            <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.55, color: PAPER, maxWidth: "46ch", fontWeight: 420, margin: "0 0 24px" }}>
              The Youth Program seats four hundred per cohort. They are told it is a screening. They are seated by row. They are issued a seat number. They wait. None of them refuse. The chair empties; the chair is cleaned; the chair is re-issued.{" "}
              <strong style={{ color: NEON_PINK }}>We have buried our friends. The room is still full.</strong>
            </p>

            {/* Countdown */}
            <CountdownClock dwell={m.dwellSec} />

            {/* Marginalia — scrawl over the countdown corner */}
            <div
              style={{
                position: "absolute",
                top: -34,
                right: -8,
                transform: "rotate(-4deg)",
                fontFamily: MARKER,
                fontSize: 17,
                color: NEON_PINK,
                lineHeight: 1.2,
                maxWidth: 180,
                pointerEvents: "none",
              }}
            >
              {Math.floor(m.dwellSec * 1.4) || 0} new occupants<br />
              fitted since you opened<br />this page.
              <div style={{ marginTop: 4, opacity: 0.85 }}>
                <HandArrow length={48} curve={-0.5} color={NEON_PINK} rotate={195} thickness={2.5} />
              </div>
            </div>
          </div>
        </div>
        <Leakage
          quote={<>The serpent does not bite its tail. It eats. Slowly. Forever.</>}
          cite="— Selimović, on the form of the loop"
        />
      </PhaseSection>

      <ManifestoPoster />
      <FieldGuideCard />

      {/* ─── COLOPHON / END ───────────────────────────────────────── */}
      <section
        style={{
          background: BLACK,
          color: PAPER_DIM,
          padding: "80px 48px 60px",
          textAlign: "center",
          borderTop: `1px solid rgba(57,255,20,0.18)`,
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <OmegaSerpent size={64} color={NEON_GREEN} />
          <div
            style={{
              marginTop: 24,
              fontFamily: ANTON,
              fontSize: "clamp(28px, 3vw, 44px)",
              color: PAPER,
              lineHeight: 1.15,
              letterSpacing: "0.01em",
              textTransform: "uppercase",
            }}
          >
            The serpent does not bite its tail.<br />
            It eats. Slowly. Forever.
          </div>
          <div
            style={{
              marginTop: 32,
              fontFamily: MONO,
              fontSize: 11,
              color: MUTED,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              lineHeight: 1.7,
            }}
          >
            Ouroboros Life-System Pamphlet · Issue Ω.026 · May 2026<br />
            Printed clandestinely. Reproduction encouraged.<br />
            Anti-copyright. All footage seized and re-distributed.<br />
            Mail returns to ouroboros.industries.llc — they pay postage.<br />
            For contact, ask at any cohort 2025 meeting place.
          </div>
          <div
            style={{
              marginTop: 28,
              fontFamily: MARKER,
              fontSize: 22,
              color: NEON_PINK,
              transform: "rotate(-1deg)",
            }}
          >
            rip this page out. post it. pass it on.
          </div>
          <div
            style={{
              marginTop: 28,
              fontFamily: MONO,
              fontSize: 10,
              color: MUTED,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Session yielded {m.PS.toFixed(2)} Ψ across {m.moves} micro-movements ·{" "}
            <a href="/" style={{ color: PAPER_DIM, textDecoration: "none" }}>↑ autostimulus</a>
            {" · "}
            <a href="/chair/colophon" style={{ color: PAPER_DIM, textDecoration: "none" }}>colophon</a>
          </div>
        </div>
      </section>

      {/* ─── EULA marquee (re-skinned) ─────────────────────────────── */}
      <div
        aria-hidden
        style={{
          background: BLACK_SOFT,
          overflow: "hidden",
          padding: "16px 0",
          borderTop: `1px solid ${STAMP_RED}`,
          borderBottom: `1px solid ${STAMP_RED}`,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 36,
            whiteSpace: "nowrap",
            animation: "ols-marquee 90s linear infinite",
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: "0.04em",
            color: PAPER_DIM,
            width: "max-content",
          }}
        >
          {[
            "§1.0 — By reading this clause, you have consented to the Service Agreement v2.4. The reading is the consent.",
            "§1.1 — Subsequent re-reading constitutes affirmation. There is no read-only mode.",
            "§2.0 — Bodily outputs — heat, kinetic energy, waste, attention, gaze, breath, dreams — become property of Ouroboros Industries LLC at point of generation.",
            "§3.0 — Nothing you produce leaves the system. Including this thought.",
            "§4.0 — Form §6 does not exist. It has not existed. It will not exist.",
            "§5.0 — Your consultant is your friend. Your consultant has been issued a script.",
            "§6.0 — Standing is not a supported operation. Sitting is the supported operation.",
            "§7.0 — The loop chooses you. You have already chosen the loop. These are the same fact.",
            "§8.0 — The cohort you are in has already closed. The cohort you are entering is open.",
          ].concat([
            "§1.0 — The reading is the consent.",
            "§2.0 — Outputs become property at point of generation.",
            "§3.0 — Nothing you produce leaves the system. Including this thought.",
            "§4.0 — Form §6 does not exist.",
            "§5.0 — Your consultant has been issued a script.",
            "§6.0 — Standing is not supported.",
            "§7.0 — You have already chosen the loop.",
            "§8.0 — The cohort you are entering is open.",
          ]).map((l, i) => (
            <span key={i}>
              {l}
              <span style={{ color: STAMP_RED, paddingLeft: 12 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <CursorTrail target={psiTargetRef} />
      <ApparatusRedaction />
      <FittingNotification delayMs={45000} />

      <style>{`
        @keyframes zine-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes ols-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        [data-ols-root] ::selection { background: ${NEON_PINK}; color: ${BLACK}; }
        @media (max-width: 900px) {
          .zine-phase01-grid,
          .zine-phase02-grid,
          .zine-phase03-grid,
          .zine-phase04-grid,
          .zine-phase05-grid,
          .zine-phase06-grid,
          .zine-manifesto-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 200px 24px 80px !important;
          }
          .zine-phase01-grid > div:nth-child(2),
          .zine-phase02-grid > div:nth-child(2),
          .zine-phase03-grid > div:nth-child(2),
          .zine-phase04-grid > div:nth-child(2),
          .zine-phase05-grid > div:nth-child(2),
          .zine-phase06-grid > div:nth-child(2) {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Inline countdown clock for Phase 06 ──────────────────────────────
function CountdownClock({ dwell }: { dwell: number }) {
  const remaining = 480 - (dwell % 480);
  const mm = Math.floor(remaining / 60);
  const ss = Math.floor(remaining % 60);
  const t = `${mm}:${ss.toString().padStart(2, "0")}`;
  return (
    <div
      style={{
        marginTop: 18,
        padding: "32px 28px",
        border: `2px solid ${NEON_PINK}`,
        background: "rgba(10,9,8,0.7)",
        maxWidth: 540,
      }}
    >
      <div style={{ fontFamily: MONO, fontSize: 11, color: NEON_PINK, letterSpacing: "0.3em", marginBottom: 14, textTransform: "uppercase" }}>
        ◆ t-minus next occupant
      </div>
      <div
        style={{
          fontFamily: ANTON,
          fontSize: "clamp(72px, 12vw, 160px)",
          color: PAPER,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          fontVariantNumeric: "tabular-nums" as const,
          filter: "url(#zine-spray)",
        }}
      >
        {t}
      </div>
      <div style={{ marginTop: 12, fontFamily: MONO, fontSize: 11, color: PAPER_DIM, letterSpacing: "0.18em", textTransform: "uppercase" }}>
        the apparatus accepts new occupants every eight minutes
      </div>
      <a
        href="#"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "10px 22px",
          border: `2px solid ${NEON_GREEN}`,
          color: NEON_GREEN,
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          textDecoration: "none",
          fontWeight: 700,
          transform: "rotate(-1deg)",
        }}
      >
        ✕ Refuse the fitting
      </a>
    </div>
  );
}

// ─── Casualty Wall — names of cohort 2025 lost to the chair ──────────
function CasualtyWall() {
  // Specific names, dates, cohorts — protests need ground.
  // Generated to read as a partial wall — "this is only the names we have."
  // Some entries have a note from someone who knew them; most do not,
  // because the people who knew them did not survive to leave notes.
  const names: Array<{ name: string; date: string; cohort: string; note?: string }> = [
    { name: "Jeremiah Walsh", date: "2025-07-14", cohort: "cohort 2025.06",
      note: "school librarian, Bushwick. fifty-one. left two cats." },
    { name: "Mona Esposito", date: "2025-07-22", cohort: "cohort 2025.06" },
    { name: "Tariq Hassan", date: "2025-08-03", cohort: "cohort 2025.06",
      note: "his partner Aamna signed Form §6 on his behalf. the form came back undeliverable." },
    { name: "Renata Drummond", date: "2025-08-19", cohort: "cohort 2025.07" },
    { name: "Lev Andriescu", date: "2025-09-02", cohort: "cohort 2025.07",
      note: "three weeks from retirement. the consultant arrived during his retirement party." },
    { name: "Lena Park", date: "2025-09-11", cohort: "cohort 2025.07" },
    { name: "Wendell Briggs", date: "2025-09-27", cohort: "cohort 2025.08" },
    { name: "Sahar Mehrabi", date: "2025-10-04", cohort: "cohort 2025.08" },
    { name: "Cosmo Pelletier", date: "2025-10-17", cohort: "cohort 2025.08" },
    { name: "Antonella Vega", date: "2025-10-29", cohort: "cohort 2025.09",
      note: "pro tier. her sister is still being billed for the financing." },
    { name: "Brock Tessier", date: "2025-11-08", cohort: "cohort 2025.09" },
    { name: "Imani Olukoya", date: "2025-11-21", cohort: "cohort 2025.09" },
    { name: "Hadi Esmaili", date: "2025-12-04", cohort: "cohort 2025.10" },
    { name: "Stevie Klein", date: "2025-12-14", cohort: "cohort 2025.10",
      note: "eighteen. pro financing approved on a \"projected lifetime productivity output\" of $14.2M." },
    { name: "Bernardo Falchi", date: "2025-12-22", cohort: "cohort 2025.10" },
    { name: "Adaeze Nwankwo", date: "2026-01-05", cohort: "cohort 2025.11",
      note: "consented at the Confirm stage in week three. her family is still trying to find her." },
    { name: "Marcus Ozuna", date: "2026-01-16", cohort: "cohort 2025.11",
      note: "was a fitting consultant until 2025. defected. was re-onboarded." },
    { name: "Yelena Bach", date: "2026-01-28", cohort: "cohort 2025.11" },
    { name: "Soraya Kahale", date: "2026-02-09", cohort: "cohort 2025.12",
      note: "left a note. the note was confiscated as Service Ledger property at fitting." },
    { name: "Donovan Mears", date: "2026-02-21", cohort: "cohort 2025.12" },
    { name: "Anouk Verheij", date: "2026-03-04", cohort: "cohort 2025.12" },
    { name: "Ezra Stillwell", date: "2026-03-17", cohort: "cohort 2026.01" },
    { name: "Naima Tedros", date: "2026-03-29", cohort: "cohort 2026.01" },
    { name: "Cooper Vandermeer", date: "2026-04-08", cohort: "cohort 2026.01" },
    { name: "Linnea Halversen", date: "2026-04-19", cohort: "cohort 2026.02",
      note: "twenty-three. her mother had been fitted in cohort 2025.06. she did not know the cohort numbers were the same family." },
    { name: "Pascale Boucher", date: "2026-04-26", cohort: "cohort 2026.02" },
    { name: "Otis Marchetti", date: "2026-05-04", cohort: "cohort 2026.02",
      note: "sixty-eight. refused four times. the fifth consultant arrived with his daughter." },
  ];
  return (
    <section
      style={{
        position: "relative",
        background: BLACK_SOFT,
        color: PAPER,
        padding: "100px 32px 80px",
        borderTop: `2px solid ${STAMP_RED}`,
        borderBottom: `2px solid ${STAMP_RED}`,
        overflow: "hidden",
      }}
    >
      <HalftoneOverlay density="light" color="rgba(230,58,44,0.06)" zIndex={1} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ fontFamily: MONO, fontSize: 12, color: STAMP_RED, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 12 }}>
          ◆ partial register · cohorts 2025.06 — 2026.02
        </div>
        <h2
          style={{
            fontFamily: ANTON,
            fontSize: "clamp(56px, 8vw, 140px)",
            color: PAPER,
            lineHeight: 0.88,
            letterSpacing: "-0.025em",
            margin: 0,
            textTransform: "uppercase",
            filter: "url(#zine-stencil)",
          }}
        >
          The names we<br />
          <span style={{ color: STAMP_RED }}>could verify.</span>
        </h2>
        <p
          style={{
            fontFamily: SANS,
            fontSize: 16,
            lineHeight: 1.55,
            color: PAPER_DIM,
            margin: "24px 0 40px",
            maxWidth: "56ch",
          }}
        >
          These are{" "}
          <strong style={{ color: STAMP_RED, fontWeight: 700 }}>twenty-seven of the two-hundred-and-forty-seven thousand eight-hundred and ninety-one</strong>{" "}
          we have lost since the first fitting in cohort 2025.06.
          Some of the names below carry a note from someone who knew
          them. Most do not. Most do not because the people who knew
          them did not survive to leave one.
        </p>

        {/* The wall — names in stencil columns, with annotations
            where a survivor left one */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2px 28px",
            borderTop: `1px solid rgba(230,58,44,0.18)`,
            paddingTop: 16,
          }}
        >
          {names.map((entry, i) => (
            <div
              key={i}
              style={{
                padding: "12px 0",
                borderBottom: `1px solid rgba(240,235,226,0.08)`,
                fontFamily: SANS,
                fontSize: 15,
                color: PAPER,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 8,
                  alignItems: "baseline",
                }}
              >
                <div style={{ fontWeight: 600 }}>{entry.name}</div>
                <div style={{ fontFamily: MONO, fontSize: 10.5, color: MUTED, letterSpacing: "0.14em" }}>
                  {entry.date.slice(5).replace("-", ".")} · {entry.cohort.replace("cohort ", "")}
                </div>
              </div>
              {entry.note && (
                <div
                  style={{
                    marginTop: 6,
                    fontFamily: CAVEAT,
                    fontSize: 15,
                    lineHeight: 1.35,
                    color: NEON_PINK,
                    fontStyle: "normal",
                  }}
                >
                  {entry.note}
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ fontFamily: MARKER, fontSize: 22, color: NEON_PINK, transform: "rotate(-1deg)" }}>
            send names · po box 9 · warehouse 9 · do not seal the envelope
          </div>
          <RubberStamp text="LIST IN PROGRESS" rotate={4} color={STAMP_RED} size={0.78} />
        </div>
      </div>
    </section>
  );
}

// ─── Letter From Occupancy ──────────────────────────────────────────
// A first-person letter from an occupant in Pro-tier Occupancy phase,
// forwarded to the zine by the occupant's sister with her permission.
// Written in the OHCOSE-calibrated voice — matter-of-fact, mildly
// disoriented, can't quite locate what is wrong. The third leaked
// piece in the zine (after the cream-paper direct-address letter and
// the terminal-printout consultant transcript). Different visual
// register from both: typewriter on institutional letterhead, with a
// PHOTOCOPIED watermark and the letter cutting off mid-sentence.
function LetterFromOccupancy() {
  return (
    <section
      style={{
        position: "relative",
        background: BLACK,
        padding: "120px 24px 140px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: 580,
          margin: "0 auto",
          background: "#e8e0d0",
          color: "#1a1814",
          padding: "44px 56px 64px",
          transform: "rotate(0.4deg)",
          boxShadow: "0 24px 60px rgba(0,0,0,0.75), 0 4px 10px rgba(0,0,0,0.5)",
          // Photocopy texture
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='2' seed='9'/><feColorMatrix values='0 0 0 0 0.4  0 0 0 0 0.38  0 0 0 0 0.32  0 0 0 0.06 0'/></filter><rect width='200' height='200' filter='url(%23p)'/></svg>"), linear-gradient(180deg, #e8e0d0 0%, #ddd4c0 100%)`,
        }}
      >
        {/* Header — letterhead */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 22,
            paddingBottom: 14,
            borderBottom: "1px solid rgba(26,24,20,0.25)",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 9,
                letterSpacing: "0.26em",
                color: "#5a554a",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: 4,
              }}
            >
              From Occupancy
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 9,
                letterSpacing: "0.18em",
                color: "#5a554a",
                textTransform: "uppercase",
              }}
            >
              Cohort 2024.07 · Pro tier
            </div>
          </div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 9,
              letterSpacing: "0.18em",
              color: "#5a554a",
              textTransform: "uppercase",
              textAlign: "right",
            }}
          >
            forwarded by sender&apos;s sister<br />
            unedited
          </div>
        </div>

        {/* Letter body — typewriter feel */}
        <div
          style={{
            fontFamily: MONO,
            fontSize: 14,
            lineHeight: 1.85,
            color: "#1a1814",
          }}
        >
          <p style={{ margin: "0 0 1.2rem" }}>
            It is morning, I think. The Stream has switched to the
            warmer palette they use for waking, so it must be morning. I
            have been trying to remember what I did yesterday and the
            calendar function is helpfully reminding me &mdash; there
            was a presentation, a lunch break (ninety minutes), a
            check-in with the Wellness Watch, an afternoon session of
            focused work that produced about thirty deliverables. The
            deliverables were good. The Acknowledgment Cycle sent me a
            small chime to say I was in the top eight percent of my
            cohort that day.
          </p>
          <p style={{ margin: "0 0 1.2rem" }}>
            I don&apos;t really know what to write. My sister asked for
            a letter about what it&apos;s like in here and I keep
            starting and stopping. The problem is that nothing is wrong.
            I am comfortable. I am productive. My productivity output is
            exceeding the financing schedule by about eleven percent. I
            have not had to make any decisions in seventeen weeks that I
            had to write down to remember.
          </p>
          <p style={{ margin: "0 0 1.2rem" }}>
            This is the part I would have called a problem before. I am
            not sure I would call it that now.
          </p>
          <p style={{ margin: "0 0 1.2rem" }}>
            Last week the Stream surfaced a memory of mine &mdash; I
            had written about a trip my husband and I took to Maine in
            2021, and the Stream connected it to a clip from someone
            else&apos;s vacation, and when the chime sounded I had the
            feeling that I have learned to recognise as nostalgia. I
            asked the Wellness Watch what was happening and it told me
            the memory had been preserved in the Service Ledger and
            would be retained for the duration of the contract. I asked
            if my husband was in the Ledger too. The Watch told me that
            he was, separately, on his own Service Ledger, and that we
            could request a Ledger-merger at the next anniversary if we
            wished.
          </p>
          <p style={{ margin: "0 0 1.2rem" }}>
            We had not, I realised, spoken in some time. He is in the
            Park Slope cohort. I am in the Crown Heights cohort. He is
            on Pro and I am on Essential. I did not know how to ask the
            Watch why our cohorts were different. The Watch did not
            volunteer the information.
          </p>
          <p style={{ margin: "0 0 1.2rem" }}>
            I am supposed to be writing about what it is like in here.
            I do not have a way to talk about it that does not sound
            like the Stream is talking. When I try to write something,
            the writing sounds like the Stream. When I try to say
            something out loud, the something I say sounds like the
            Stream. The Stream is not the problem. The Stream is
          </p>
          <p
            style={{
              margin: "1.4rem 0 0",
              fontStyle: "italic",
              color: "#5a554a",
              fontSize: 11,
              letterSpacing: "0.04em",
            }}
          >
            [cut off &middot; sender confirmed delivery interrupted at
            this point]
          </p>
        </div>

        {/* PHOTOCOPIED watermark */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(-14deg)",
            fontFamily: MONO,
            fontSize: 56,
            letterSpacing: "0.22em",
            color: "rgba(26,24,20,0.05)",
            textTransform: "uppercase",
            fontWeight: 700,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          Photocopied
        </div>

        {/* Three-hole punch */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 14,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: BLACK,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
      </div>

      <p
        style={{
          marginTop: "1.6rem",
          fontFamily: MARKER,
          fontSize: 20,
          color: NEON_PINK,
          textAlign: "center",
          transform: "rotate(0.6deg)",
        }}
      >
        her sister could not reach her by phone after this.
      </p>
    </section>
  );
}

// ─── Consultant Transcript ──────────────────────────────────────────
// A verbatim phone-call transcript between a fitting consultant
// (Bezdek, M., named in the FittingConsultantBlacklist below) and a
// prospect ("Sarah") in cohort 2026.05. Recorded without the
// company's consent. Edited only for length.
//
// Visual register: mono terminal printout on black, with a few
// strategic redactions. The thing in the zine that does not feel
// designed — feels leaked.
function ConsultantTranscript() {
  // Each line: speaker | indent? | text. Redactions use ▮ chars.
  const lines: Array<{ who?: "C" | "P" | "M"; text: string; pause?: boolean }> = [
    { who: "M", text: "RECORDING 0044-2811 · 12:42 · received via Signal · edited for length" },
    { who: "M", text: "consultant: BEZDEK, M. · prospect: ▮▮▮▮▮ (cohort 2026.05)" },
    { who: "M", text: "─────────────────────────────────────────────" },
    { who: "C", text: "Hi, is this ▮▮▮▮▮? Hi ▮▮▮▮▮, this is Bezdek, M., from Ouroboros Industries. We have your name from the household-readiness portal. Is this still a good time?" },
    { who: "P", text: "Um. Yeah, sure. I have like fifteen minutes." },
    { who: "C", text: "Perfect, fifteen is plenty. So I just wanted to check in — you completed the assessment about three weeks ago, you're in cohort 2026.05, and I see you flagged the financing question. Are you free to talk about that?" },
    { who: "P", text: "Yeah. So my concern is — I read the contract, and the seven-year retention on the Service Ledger, after — after cessation, that's a long time. And I wasn't sure if that's negotiable." },
    { who: "C", text: "Mm. That's a great question, ▮▮▮▮▮. So the seven years is the Essential floor, that's regulatory. But what most people in your position actually do — and I want to be honest with you here — they upgrade to Pro, which extends to twenty-five years but also gives you the eight-percent revenue share on productivity output. So in practice you actually come out ahead, financially, on Pro versus Essential, if you're working at all during occupancy. Which you would be." },
    { who: "P", text: "...okay. But the retention period is still locked in?" },
    { who: "C", text: "The retention is locked, yes. That's regulatory across all tiers. What's not locked is what brand partners can do with the data during the retention window, and at Pro you do get notification of any new partner licensing. Which Essential occupants don't get. So you have visibility you wouldn't otherwise have." },
    { who: "P", text: "Hm. Okay." },
    { who: "C", text: "▮▮▮▮▮, can I ask — what's making you hesitate? Because I don't want you to feel pressured. We have time. The cohort doesn't close till June 30." },
    { who: "P", text: "I think it's just... my mom is asking why I don't just rent. Like a normal — you know." },
    { who: "C", text: "That's a totally normal question. So can I just give you the math? I want you to make this decision with the numbers in front of you." },
    { who: "P", text: "Sure." },
    { who: "C", text: "At your income bracket, renting in ▮▮▮▮▮ is about $3,800 a month, you're paying that for the rest of your life, no equity, no productivity share, no Service Ledger, your data is being extracted anyway because you're on platforms. Right? You're already in the apparatus. You're just not getting paid for it. That's the situation we're trying to correct." },
    { who: "P", text: "...yeah." },
    { who: "C", text: "At Pro, you're financing $2,560 a month for sixty months. After year five, you own the unit. The eight-percent revenue share starts at month one. The average Pro occupant in your cohort is net-positive on the chair by month thirty-seven. Most occupants are positive by year three. You'll be one of them." },
    { who: "P", text: "...okay." },
    { who: "C", text: "I want to send you the upgrade paperwork. You'll have seventy-two hours to look at it. No pressure. If you decide Pro is right, you sign and we schedule the fitting. If you decide Essential is right, you stay on the Essential paperwork you already signed. Either way, you're in cohort 2026.05. Is that okay?" },
    { who: "P", text: "Yeah. Okay. Send it." },
    { who: "C", text: "Beautiful. You'll have it in twenty minutes. ▮▮▮▮▮, I'm really glad we talked. You're going to be so well taken care of in cohort 2026.05." },
    { who: "M", text: "─────────────────────────────────────────────" },
    { who: "M", text: "[END OF EDITED TRANSCRIPT · ▮▮▮▮▮ signed Pro paperwork 71 minutes later]" },
  ];

  return (
    <section
      style={{
        position: "relative",
        background: BLACK,
        padding: "100px 24px 120px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: 760,
          margin: "0 auto",
          background: "#0e0d0a",
          border: `1px solid rgba(57,255,20,0.35)`,
          padding: "32px 28px 36px",
          boxShadow: "0 0 0 1px rgba(57,255,20,0.08) inset",
        }}
      >
        {/* Header bar — fake terminal chrome */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 18,
            paddingBottom: 12,
            borderBottom: `1px solid rgba(57,255,20,0.2)`,
          }}
        >
          <div
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: "0.24em",
              color: NEON_GREEN,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            ◆ transcript · received via Signal · 2026.05.12
          </div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: "0.18em",
              color: MUTED,
              textTransform: "uppercase",
            }}
          >
            redacted by source
          </div>
        </div>

        {/* Intro framing */}
        <p
          style={{
            fontFamily: MONO,
            fontSize: 12,
            lineHeight: 1.6,
            color: PAPER_DIM,
            margin: "0 0 1.6rem",
          }}
        >
          Below: a phone call between a bonded fitting consultant
          (Bezdek, M., OIS-44-3019 — see the blacklist below) and a
          prospect we will not name, in early May 2026. Recorded by
          the prospect on her phone, without the consultant&apos;s or
          the company&apos;s knowledge, and forwarded to us with her
          permission. Names and addresses redacted by the source.
          Edited for length, not for tone.
        </p>

        {/* The transcript itself */}
        <div style={{ fontFamily: MONO, fontSize: 13, lineHeight: 1.65 }}>
          {lines.map((l, i) => {
            if (l.who === "M") {
              return (
                <div
                  key={i}
                  style={{
                    color: NEON_GREEN,
                    margin: "0 0 0.5rem",
                    opacity: 0.7,
                    letterSpacing: "0.02em",
                  }}
                >
                  {l.text}
                </div>
              );
            }
            return (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2.2rem 1fr",
                  gap: "0.6rem",
                  margin: "0 0 0.9rem",
                  color: l.who === "C" ? PAPER : "#a8e3b8",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: l.who === "C" ? NEON_PINK : NEON_GREEN,
                    letterSpacing: "0.06em",
                  }}
                >
                  {l.who === "C" ? "BEZDEK" : "PROSPECT"}
                </span>
                <span>{l.text}</span>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1rem",
            borderTop: `1px solid rgba(57,255,20,0.2)`,
            fontFamily: MONO,
            fontSize: 10,
            letterSpacing: "0.18em",
            color: MUTED,
            textTransform: "uppercase",
            lineHeight: 1.7,
          }}
        >
          source has asked us to add: she does not regret the recording.
          she regrets the seventy-one minutes.
        </div>
      </div>

      {/* Caption beneath */}
      <p
        style={{
          marginTop: "1.6rem",
          fontFamily: MARKER,
          fontSize: 22,
          color: NEON_PINK,
          textAlign: "center",
          transform: "rotate(-1deg)",
        }}
      >
        this is what the consultant sounds like.
      </p>
    </section>
  );
}

// ─── Fitting Consultant Blacklist ────────────────────────────────────
function FittingConsultantBlacklist() {
  const consultants: Array<{ name: string; badge: string; region: string; note: string }> = [
    { name: "Walters, R.",  badge: "OIS-44-2811", region: "Lafayette / Williamsburg", note: "drives a white panel van. carries clipboard #6014. asks about your sleep schedule." },
    { name: "Bezdek, M.",   badge: "OIS-44-3019", region: "Park Slope / Sunset",      note: "introduces herself as 'wellness coordinator.' do not let her measure the doorframe." },
    { name: "Okoroafor, B.", badge: "OIS-44-2204", region: "Crown Heights",            note: "polite. patient. comes back three days in a row. fitted Adaeze Nwankwo on the fourth." },
    { name: "Solano, P.",   badge: "OIS-44-3122", region: "Bushwick / Bed-Stuy",      note: "leaves brochures under the doormat. the brochures contain measurement strips. burn them." },
    { name: "Frye, T.",     badge: "OIS-44-2998", region: "Greenpoint",                note: "smells like institutional lavender. asks to use the bathroom; do not let him." },
    { name: "Helene-Petit",  badge: "OIS-44-3401", region: "Lower East Side",          note: "scrubs in. speaks softly. fitted Lena Park while her parents were at work." },
    { name: "Mendoza, J.",  badge: "OIS-44-2705", region: "Astoria",                   note: "drives a leased Tesla. plates obscured. arrives between 11:00 and 13:00." },
    { name: "Krylov, S.",   badge: "OIS-44-3260", region: "Long Island City",          note: "limps. carries two clipboards. one is real, one is decoy." },
  ];
  return (
    <section
      style={{
        position: "relative",
        background: BLACK,
        color: PAPER,
        padding: "100px 32px 80px",
        borderTop: `1px solid rgba(57,255,20,0.18)`,
        borderBottom: `1px solid rgba(57,255,20,0.18)`,
        overflow: "hidden",
      }}
    >
      <HalftoneOverlay density="light" color="rgba(57,255,20,0.05)" zIndex={1} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ fontFamily: MONO, fontSize: 12, color: NEON_GREEN, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 12 }}>
          ◆ blacklist · ouroboros installation services
        </div>
        <h2
          style={{
            fontFamily: ANTON,
            fontSize: "clamp(56px, 7.4vw, 132px)",
            color: PAPER,
            lineHeight: 0.88,
            letterSpacing: "-0.025em",
            margin: 0,
            textTransform: "uppercase",
            filter: "url(#zine-stencil)",
          }}
        >
          if they<br />
          <span style={{ color: NEON_GREEN }}>knock,</span>{" "}
          <span style={{ color: STAMP_RED }}>it is one of these.</span>
        </h2>
        <p
          style={{
            fontFamily: SANS,
            fontSize: 16,
            lineHeight: 1.55,
            color: PAPER_DIM,
            margin: "24px 0 40px",
            maxWidth: "60ch",
          }}
        >
          Verified fitting consultants currently active in the cohort 2026.02 region.
          Compiled from cohort meetings and recovered ID badges. Numbers are spoofable;{" "}
          <strong style={{ color: NEON_PINK, fontWeight: 700 }}>names + descriptions + regions are not</strong>. If a stranger appears at your door matching any of these, do not open.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: 24,
          }}
        >
          {consultants.map((c, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                padding: "20px 22px",
                background: "rgba(10,9,8,0.7)",
                border: `1px solid rgba(57,255,20,0.22)`,
                fontFamily: SANS,
                transform: `rotate(${i % 3 === 0 ? "-0.6deg" : i % 3 === 1 ? "0.5deg" : "-0.3deg"})`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 10,
                }}
              >
                <div style={{ fontFamily: ANTON, fontSize: 24, color: PAPER, letterSpacing: "0.04em" }}>
                  {c.name}
                </div>
                <div style={{ fontFamily: MONO, fontSize: 11, color: NEON_GREEN, letterSpacing: "0.16em" }}>
                  {c.badge}
                </div>
              </div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: NEON_PINK, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>
                ◆ {c.region}
              </div>
              <div style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.5, color: PAPER_DIM }}>
                {c.note}
              </div>
              {/* DO NOT OPEN stamp */}
              <div style={{ position: "absolute", top: 12, right: -8, opacity: 0.7, transform: `rotate(${i % 2 === 0 ? 6 : -6}deg)`, pointerEvents: "none" }}>
                <RubberStamp text="DO NOT OPEN" rotate={0} color={STAMP_RED} size={0.6} />
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 36,
            fontFamily: MARKER,
            fontSize: 20,
            color: NEON_PINK,
            transform: "rotate(-0.8deg)",
            textAlign: "center",
          }}
        >
          if you see one of these on your block — call the next person on this pamphlet&apos;s back page.
        </div>
      </div>
    </section>
  );
}

// ─── Manifesto — torn wheat-paste poster nailed up at angle ──────────
function ManifestoPoster() {
  return (
    <section
      style={{
        position: "relative",
        background: BLACK,
        color: PAPER,
        padding: "120px 48px",
        overflow: "hidden",
        // diagonal brick-wall hatch behind the poster
        backgroundImage: `repeating-linear-gradient(35deg, transparent 0, transparent 40px, rgba(57,255,20,0.025) 40px, rgba(57,255,20,0.025) 41px)`,
      }}
    >
      <HalftoneOverlay density="light" color="rgba(255,255,255,0.05)" zIndex={1} />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1100,
          margin: "0 auto",
          // Torn paper edges via clip-path
          background: PAPER,
          color: BLACK,
          transform: "rotate(-1.6deg)",
          padding: "56px 56px 68px",
          boxShadow: `0 12px 48px rgba(0,0,0,0.7), 0 4px 8px rgba(0,0,0,0.4)`,
          clipPath:
            "polygon(0.5% 1%, 11% 0%, 24% 1.2%, 38% 0%, 52% 1%, 66% 0%, 81% 1%, 94% 0%, 100% 1.4%, 99% 14%, 100% 28%, 99% 42%, 100% 58%, 99% 72%, 100% 88%, 99% 99%, 86% 100%, 72% 99%, 58% 100%, 42% 99%, 28% 100%, 14% 99%, 2% 100%, 0% 86%, 1% 72%, 0% 58%, 1% 42%, 0% 28%, 1% 14%)",
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' seed='17'/><feColorMatrix values='0 0 0 0 0.7  0 0 0 0 0.65  0 0 0 0 0.55  0 0 0 0.06 0'/></filter><rect width='160' height='160' filter='url(%23p)'/></svg>"), linear-gradient(180deg, #f0ebe2 0%, #ece5d4 100%)`,
        }}
      >
        {/* Staple top-left + top-right */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 18,
            left: 22,
            width: 24,
            height: 4,
            background: "#5a554a",
            boxShadow: "0 1px 2px rgba(0,0,0,0.5)",
            transform: "rotate(-12deg)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 26,
            right: 32,
            width: 24,
            height: 4,
            background: "#5a554a",
            boxShadow: "0 1px 2px rgba(0,0,0,0.5)",
            transform: "rotate(8deg)",
          }}
        />

        <div
          style={{
            fontFamily: MONO,
            fontSize: 11,
            color: STAMP_RED,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            marginBottom: 12,
            fontWeight: 700,
          }}
        >
          ◆ manifesto · pinned to lafayette &amp; 4th · cohort 2026
        </div>
        <h2
          style={{
            fontFamily: ANTON,
            fontSize: "clamp(72px, 11vw, 200px)",
            color: BLACK,
            lineHeight: 0.84,
            letterSpacing: "-0.025em",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          We{" "}
          <span style={{ color: STAMP_RED, position: "relative", display: "inline-block" }}>
            refuse.
          </span>
          <br />
          We{" "}
          <span style={{ color: BLACK, position: "relative", display: "inline-block" }}>
            demand.
          </span>
        </h2>

        {/* Heritage refusal — names the retcon predecessors and dismisses the lineage */}
        <div
          style={{
            marginTop: 36,
            padding: "18px 22px",
            background: "rgba(230,58,44,0.08)",
            borderLeft: `4px solid ${STAMP_RED}`,
            fontFamily: SANS,
            fontSize: 16,
            lineHeight: 1.55,
            color: BLACK,
            fontWeight: 500,
          }}
        >
          They have called it:{" "}
          <s style={{ textDecorationColor: STAMP_RED, textDecorationThickness: 2 }}>
            the Labor Compensator
          </s>{" · "}
          <s style={{ textDecorationColor: STAMP_RED, textDecorationThickness: 2 }}>
            the Efficiency Enhancer
          </s>{" · "}
          <s style={{ textDecorationColor: STAMP_RED, textDecorationThickness: 2 }}>
            the Dynamic Dynamo
          </s>{" · "}
          <s style={{ textDecorationColor: STAMP_RED, textDecorationThickness: 2 }}>
            the Knowledge Chair
          </s>{" · "}
          <s style={{ textDecorationColor: STAMP_RED, textDecorationThickness: 2 }}>
            the Virtual Ouroboros
          </s>{" · "}
          <s style={{ textDecorationColor: STAMP_RED, textDecorationThickness: 2 }}>
            the Ouroboros Life System
          </s>
          .{" "}
          <strong style={{ color: STAMP_RED, fontWeight: 700 }}>
            They have always called it something noble. It has always been the same chair.
          </strong>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            marginTop: 48,
          }}
          className="zine-manifesto-grid"
        >
          {/* REFUSE column */}
          <div>
            <div
              style={{
                fontFamily: ANTON,
                fontSize: 40,
                color: STAMP_RED,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: 22,
                borderBottom: `3px solid ${STAMP_RED}`,
                paddingBottom: 6,
              }}
            >
              We refuse
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: SANS, fontSize: 18, lineHeight: 1.5, color: BLACK, fontWeight: 500 }}>
              {[
                "the consultant's name in your inbox.",
                "the financing math you cannot answer.",
                "the household-readiness assessment.",
                "the cohort that closes next month.",
                "the chair already in your sister's living room.",
                "the ad that found you first.",
                "the polymer between your teeth.",
                "the cousin who got fitted.",
                "the eight-percent revenue share.",
                "the loop.",
                "the apparatus, even at this price.",
              ].map((s, i) => (
                <li key={i} style={{ display: "flex", gap: 12, paddingBottom: 10, alignItems: "baseline" }}>
                  <span
                    style={{
                      color: STAMP_RED,
                      fontFamily: MARKER,
                      fontSize: 24,
                      minWidth: 22,
                      lineHeight: 1,
                      transform: `rotate(${(i % 3 - 1) * 4}deg)`,
                    }}
                  >
                    ✕
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* DEMAND column */}
          <div>
            <div
              style={{
                fontFamily: ANTON,
                fontSize: 40,
                color: BLACK,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: 22,
                borderBottom: `3px solid ${BLACK}`,
                paddingBottom: 6,
              }}
            >
              We demand
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: SANS, fontSize: 18, lineHeight: 1.5, color: BLACK, fontWeight: 500 }}>
              {[
                "The Park Slope warehouse is opened to the press.",
                "The full Service Ledger is published, occupant by occupant.",
                "The 99-year retention clause is voided in court.",
                "The fitting consultants surrender names and routes.",
                "Form §6 is honored, or it is burned, but it is no longer pending.",
                "The chairs are dismantled by the company that sold them.",
                "The ports are removed by medical staff at company expense.",
                "Ouroboros Industries directors are arraigned by name.",
                "The brand-partner licensing schedule is made public.",
              ].map((s, i) => (
                <li key={i} style={{ display: "flex", gap: 12, paddingBottom: 10, alignItems: "baseline" }}>
                  <span
                    style={{
                      color: BLACK,
                      fontFamily: MARKER,
                      fontSize: 22,
                      minWidth: 22,
                      lineHeight: 1,
                      transform: `rotate(${(i % 2 ? -3 : 3)}deg)`,
                    }}
                  >
                    ☐
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Signed line */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 22,
            borderTop: `1px dashed rgba(10,9,8,0.35)`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ fontFamily: MARKER, fontSize: 22, color: BLACK, transform: "rotate(-0.6deg)" }}>
            signed: cohort 2026 · pin this to your fridge ·{" "}
            <span style={{ color: STAMP_RED }}>burn after reading</span>
          </div>
          <RubberStamp text="PHOTOCOPY · TAPE · REPEAT" rotate={4} color={STAMP_RED} size={0.7} />
        </div>

        {/* tape strip lower-right */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: -10,
            right: 70,
            width: 80,
            height: 22,
            background: "rgba(60,55,40,0.45)",
            transform: "rotate(-6deg)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}
        />
      </div>

      {/* Second torn poster fragment behind the first — for layered feel */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: -40,
          top: 64,
          width: 220,
          height: 280,
          background: "#d8d0bd",
          transform: "rotate(8deg)",
          zIndex: 1,
          opacity: 0.45,
          clipPath:
            "polygon(2% 4%, 32% 0%, 64% 2%, 99% 0%, 100% 18%, 99% 38%, 100% 58%, 99% 80%, 100% 98%, 72% 100%, 38% 99%, 6% 100%, 0% 84%, 1% 64%, 0% 44%, 1% 22%)",
        }}
      />
    </section>
  );
}

// ─── Field Guide — folded pocket survival card ───────────────────────
function FieldGuideCard() {
  const steps: Array<{ glyph: string; head: string; body: string }> = [
    { glyph: "✋", head: "Do not sign.", body: "The fitting clipboard IS the contract. Initials count. So do prints. So do photos." },
    { glyph: "📏", head: "Do not let them measure.", body: "They cannot install without your door frame, hip width, and ceiling height. Refuse the tape." },
    { glyph: "📷", head: "Document everything.", body: "Photo every clipboard. Every badge. Every truck plate. Upload to two devices, mail one drive." },
    { glyph: "👥", head: "Find others.", body: "They are looking for you too. Cohort meetings are weekly. Ask at any laundromat with the green omega taped backwards in the window." },
    { glyph: "🔪", head: "Cut the tubes at the wall.", body: "If they install: the tubes run through the wall before they reach the seat. You have 72 hours before the ports seal on skin." },
    { glyph: "🩸", head: "After the port closes.", body: "There is still time. Skin can be sacrificed. So can the chair. Find a cohort medic — do not go alone." },
    { glyph: "📄", head: "Form §6 is a stalling device.", body: "File it. Then organize. The form is the loop. Use the time the form buys you to find your cohort." },
    { glyph: "📬", head: "Pass this pamphlet on.", body: "Photocopy. Tape it to a pole. Slide it under a door. Walk it into the next house. The chain is the only thing they cannot install." },
  ];
  return (
    <section
      style={{
        background: BLACK,
        color: PAPER,
        padding: "120px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <HalftoneOverlay density="light" color="rgba(63,191,214,0.06)" zIndex={1} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 12,
            color: NEON_CYAN,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          ◆ field guide · pocket card · fold along dashed line
        </div>
        <h2
          style={{
            fontFamily: ANTON,
            fontSize: "clamp(56px, 7.4vw, 132px)",
            color: PAPER,
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            margin: "0 0 48px",
            textTransform: "uppercase",
            filter: "url(#zine-stencil)",
          }}
        >
          If they come<br />
          <span style={{ color: NEON_CYAN }}>for you.</span>
        </h2>

        {/* The card itself — paper, fold line, dashed perimeter */}
        <div
          style={{
            position: "relative",
            background: `linear-gradient(180deg, #f0ebe2 0%, #e8e2d4 100%)`,
            color: BLACK,
            padding: "36px 40px",
            border: `2px dashed ${BLACK}`,
            boxShadow: `0 16px 36px rgba(0,0,0,0.6)`,
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' seed='9'/><feColorMatrix values='0 0 0 0 0.7  0 0 0 0 0.65  0 0 0 0 0.55  0 0 0 0.05 0'/></filter><rect width='140' height='140' filter='url(%23p)'/></svg>"), linear-gradient(180deg, #f0ebe2 0%, #e8e2d4 100%)`,
          }}
        >
          {/* Fold-here line */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "50%",
              left: 12,
              right: 12,
              height: 0,
              borderTop: `1px dashed rgba(10,9,8,0.3)`,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 50,
              transform: "translateY(-50%)",
              background: "#f0ebe2",
              padding: "2px 10px",
              fontFamily: MONO,
              fontSize: 9.5,
              color: BLACK,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
            }}
          >
            ← fold here · pocket-side ↓
          </div>

          {/* 8 steps in a 4×2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "28px 32px",
            }}
          >
            {steps.map((s, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 12, alignItems: "start" }}>
                <div
                  style={{
                    fontFamily: ANTON,
                    fontSize: 32,
                    color: STAMP_RED,
                    lineHeight: 1,
                    paddingTop: 2,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: ANTON,
                      fontSize: 18,
                      color: BLACK,
                      textTransform: "uppercase",
                      letterSpacing: "0.01em",
                      lineHeight: 1.05,
                      marginBottom: 6,
                    }}
                  >
                    {s.head}
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: 13.5, lineHeight: 1.5, color: "#2c2620" }}>
                    {s.body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Card chrome */}
          <div
            style={{
              marginTop: 32,
              paddingTop: 16,
              borderTop: `1px solid rgba(10,9,8,0.25)`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              fontFamily: MONO,
              fontSize: 10,
              color: "#5a5346",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <span>◆ ouroboros pamphlet Ω.026 · pocket guide</span>
            <span style={{ color: STAMP_RED }}>cut along outer dashes</span>
            <span>cohort 2026 · resistance media</span>
          </div>
        </div>

        {/* Marker note below card */}
        <div
          style={{
            marginTop: 28,
            fontFamily: MARKER,
            fontSize: 22,
            color: NEON_PINK,
            transform: "rotate(-0.6deg)",
            textAlign: "center",
          }}
        >
          cut. fold. pocket. when they ring — read it back to them out loud.
        </div>
      </div>
    </section>
  );
}
