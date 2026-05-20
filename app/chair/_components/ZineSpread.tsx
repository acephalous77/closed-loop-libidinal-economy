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

// ─── Loop-back ────────────────────────────────────────────────────────
function useLoopBack() {
  useEffect(() => {
    let triggered = false;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= max - 4 && !triggered) {
        triggered = true;
        window.setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.setTimeout(() => { triggered = false; }, 1500);
        }, 600);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
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
  useLoopBack();
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
          stand.
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
            * this is not a brochure.
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

      {/* ─── PHASE 02 — SALES PITCH / DEFACED ─────────────────────── */}
      <PhaseSection id="habitualization" num="02" name="habitualization" sub="the sales pitch · defaced" numColor={NEON_PINK}>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "200px 48px 80px",
            maxWidth: 1600,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 56,
          }}
          className="zine-phase02-grid"
        >
          {/* LEFT — defaced MegaSave flyer */}
          <div style={{ position: "relative", transform: "rotate(-2deg)" }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                clipPath:
                  "polygon(1% 0%, 18% 1%, 32% 0%, 49% 1%, 64% 0%, 80% 1%, 99% 0%, 100% 18%, 99% 33%, 100% 50%, 99% 67%, 100% 82%, 99% 99%, 82% 100%, 67% 99%, 50% 100%, 33% 99%, 16% 100%, 0% 99%, 1% 82%, 0% 67%, 1% 50%, 0% 33%, 1% 17%)",
                background: BLACK,
                filter: "drop-shadow(6px 6px 0 rgba(57,255,20,0.25))",
              }}
            >
              <Image
                src="/chair/artifacts/03-megasave-rollback.jpg"
                alt="Found marketing flyer for the chair, defaced"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 700px"
                style={{ objectFit: "cover" }}
              />
              {/* Defacement overlays */}
              <div aria-hidden style={{ position: "absolute", top: "14%", left: "20%", zIndex: 5 }}>
                <DefacementX size={140} color={STAMP_RED} thickness={14} rotate={-6} />
              </div>
              <div aria-hidden style={{ position: "absolute", top: "55%", right: "8%", zIndex: 5 }}>
                <DefacementX size={120} color={STAMP_RED} thickness={12} rotate={12} />
              </div>
              {/* Marker scribble — "LIES" */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  bottom: "32%",
                  left: "8%",
                  zIndex: 6,
                  fontFamily: MARKER,
                  fontSize: 56,
                  color: STAMP_RED,
                  transform: "rotate(-8deg)",
                  textShadow: `2px 2px 0 rgba(0,0,0,0.4)`,
                  letterSpacing: "0.04em",
                  fontWeight: 400,
                }}
              >
                LIES
              </div>
              {/* RubberStamp */}
              <div aria-hidden style={{ position: "absolute", top: "8%", right: "6%", zIndex: 6 }}>
                <RubberStamp text="DO NOT BUY" rotate={-14} color={STAMP_RED} size={0.8} />
              </div>
            </div>
            {/* tape */}
            <div aria-hidden style={{ position: "absolute", top: -14, left: 64, width: 96, height: 22, background: "rgba(255,255,200,0.45)", transform: "rotate(-10deg)", boxShadow: "0 2px 8px rgba(0,0,0,0.5)" }} />
            <div aria-hidden style={{ position: "absolute", bottom: -14, right: 48, width: 110, height: 22, background: "rgba(255,255,200,0.4)", transform: "rotate(4deg)", boxShadow: "0 2px 8px rgba(0,0,0,0.5)" }} />
            <div style={{ marginTop: 18, fontFamily: CAVEAT, fontSize: 20, color: NEON_PINK, transform: "rotate(-1deg)" }}>
              picked this up at megasave on lafayette. the chair is the price.
            </div>
          </div>

          {/* RIGHT — copy + defaced tier list */}
          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontFamily: ANTON,
                fontSize: "clamp(48px, 5.6vw, 84px)",
                color: PAPER,
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                margin: "0 0 20px",
                textTransform: "uppercase",
                filter: "url(#zine-spray)",
              }}
            >
              You think you are<br />
              <span style={{ color: NEON_PINK }}>buying a chair.</span><br />
              <span style={{ color: NEON_GREEN }}>The chair</span><br />
              <span style={{ color: NEON_GREEN }}>is buying you.</span>
            </h2>
            <div style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.55, color: PAPER, maxWidth: "46ch", fontWeight: 420 }}>
              <p style={{ margin: "0 0 14px" }}>
                <strong style={{ color: NEON_PINK }}>$5,499.99</strong> is the down-payment. The lifetime cost is your life. The MegaSave flyer says &ldquo;Save $800!&rdquo; — they mean the eight hundred days they take off your stand position before the polymer fuses.
              </p>
              <p style={{ margin: "0 0 14px" }}>
                The Pro tier promises &ldquo;sleep induction&rdquo;. They mean: it puts you under and does not bring you back. The Eternal tier promises{" "}
                <A to="eternal-tier" title="Imperial Archive 2197.22">post-mortem data continuity</A>. They mean they keep selling your readings after.
              </p>
            </div>

            {/* Tier list — defaced */}
            <div
              style={{
                marginTop: 28,
                padding: "20px 22px",
                border: `1px solid ${PAPER_DIM}`,
                background: "rgba(10,9,8,0.6)",
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
              By signing the purchase order you waive: the right to stand. The right to refuse infusion. The right to disconnect. The right to data. The right to death certificate.
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
          </div>
        </div>
        <Leakage
          quote={<>Power no longer disciplines bodies on the factory floor. It seduces psyches through screens and pharmaceutical molecules. The apparatus is the perfection of the pleasure that has replaced punishment.</>}
          cite="— Marcuse · Preciado · Berardi"
        />
      </PhaseSection>

      <CasualtyWall />

      {/* ─── PHASE 04 — YOU ARE A READING ─────────────────────────── */}
      <PhaseSection id="obsolescence" num="04" name="obsolescence" sub="you are now a reading" numColor={NEON_GREEN}>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "200px 48px 80px",
            maxWidth: 1600,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 56,
            alignItems: "start",
          }}
          className="zine-phase04-grid"
        >
          <div style={{ position: "relative", transform: "rotate(-1deg)" }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "3 / 2",
                clipPath:
                  "polygon(3% 0%, 18% 1%, 32% 0%, 49% 1%, 64% 0%, 82% 1%, 100% 0%, 99% 18%, 100% 33%, 99% 50%, 100% 67%, 99% 82%, 98% 100%, 82% 99%, 64% 100%, 48% 99%, 32% 100%, 16% 99%, 0% 100%, 1% 82%, 0% 67%, 1% 50%, 0% 33%, 1% 16%)",
                filter: "drop-shadow(6px 6px 0 rgba(57,255,20,0.3))",
              }}
            >
              <Image
                src="/chair/zine/04-mask.jpg"
                alt="Punk-zine illustration: green aztec mask 'steps' watching a phone-locked figure"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 700px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div aria-hidden style={{ position: "absolute", top: -12, right: 64, width: 100, height: 22, background: "rgba(255,255,200,0.4)", transform: "rotate(5deg)", boxShadow: "0 2px 8px rgba(0,0,0,0.5)" }} />
            <div style={{ marginTop: 16, fontFamily: CAVEAT, fontSize: 20, color: NEON_GREEN, transform: "rotate(-1deg)" }}>
              they call this number <span style={{ color: NEON_PINK }}>&ldquo;you&rdquo;</span>. it is sold.
            </div>
          </div>

          <div style={{ position: "relative", paddingLeft: 16 }}>
            <h2
              style={{
                fontFamily: ANTON,
                fontSize: "clamp(48px, 5.6vw, 84px)",
                color: PAPER,
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                margin: "0 0 18px",
                textTransform: "uppercase",
                filter: "url(#zine-spray)",
              }}
            >
              You are now<br />
              <span style={{ color: NEON_GREEN }}>a reading.</span>
            </h2>
            <p style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.55, color: PAPER, maxWidth: "44ch", fontWeight: 420, margin: "0 0 26px" }}>
              Your pupil. Your skin. Your dwell. The interval between scrolls. They measure what you cannot stop doing. The number they extract is the number they sell. <strong style={{ color: NEON_GREEN }}>The number is yours.</strong> The sale is theirs.
            </p>

            {/* Live ticker */}
            <div
              style={{
                background: "rgba(10,9,8,0.7)",
                border: `2px solid ${NEON_PINK}`,
                padding: "20px 24px",
                maxWidth: 540,
              }}
            >
              <div style={{ fontFamily: MONO, fontSize: 10, color: NEON_PINK, letterSpacing: "0.3em", marginBottom: 16, textTransform: "uppercase" }}>
                ◆ your reading · this session · right now
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, alignItems: "baseline" }}>
                {[
                  { l: "LI", v: m.LI.toFixed(2), c: PAPER, sub: "libidinal" },
                  { l: "CE", v: (m.CE * 100).toFixed(0) + "%", c: NEON_CYAN, sub: "monetised" },
                  { l: "Ψ", v: m.PS.toFixed(2), c: NEON_PINK, sub: "yours/theirs" },
                ].map((x) => (
                  <div key={x.l}>
                    <div style={{ fontFamily: MONO, fontSize: 10, color: MUTED, letterSpacing: "0.2em", marginBottom: 6 }}>{x.l}</div>
                    <div style={{ fontFamily: ANTON, fontSize: "clamp(36px, 4vw, 56px)", color: x.c, lineHeight: 1, fontVariantNumeric: "tabular-nums" as const, letterSpacing: "-0.02em" }}>{x.v}</div>
                    <div style={{ fontFamily: MONO, fontSize: 9, color: MUTED, letterSpacing: "0.16em", marginTop: 6, textTransform: "uppercase" }}>{x.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 18, fontFamily: MONO, fontSize: 11, color: PAPER_DIM, letterSpacing: "0.16em", textTransform: "uppercase", borderTop: `1px solid rgba(240,235,226,0.1)`, paddingTop: 12 }}>
                247,891 readings logged in cohort 2025 · 0 recovered
              </div>
            </div>

            <SurvivorQuote
              quote={<>I read my own reading at the cohort meeting. I did not recognize the number. The number was higher than me.</>}
              attrib="N.O., Cohort 2025.07 · withdrawn"
            />
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
          </div>
        </div>
        <Leakage
          quote={<>The closed-loop guarantee. Nothing you produce will leave the system. &ldquo;Waste&rdquo; is a deprecated term. The proper term is throughput.</>}
          cite="— Terms of Occupancy, §3"
        />
      </PhaseSection>

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
                src="/chair/zine/06-outrage-cadence.jpg"
                alt="Diagram of the Ouroboros outrage cadence cycle — content, grievance, mobilization, capture"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 700px"
                style={{
                  objectFit: "cover",
                  // Invert + tint dark so the cream original becomes part of the zine
                  filter: "invert(1) hue-rotate(180deg) saturate(0.7) brightness(0.9) contrast(1.1)",
                }}
              />
            </div>
            <div style={{ marginTop: 16, fontFamily: CAVEAT, fontSize: 20, color: NEON_PINK, transform: "rotate(-1deg)" }}>
              the cycle does not care who is in the chair.
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
              The chair empties. The chair fills. The cycle is the product. The cycle does not stop when the occupant stops. Family is not notified. The chair is cleaned. The chair is re-issued.{" "}
              <strong style={{ color: NEON_PINK }}>We have buried our friends. We continue.</strong>
            </p>

            {/* Countdown */}
            <CountdownClock dwell={m.dwellSec} />
          </div>
        </div>
        <Leakage
          quote={<>The serpent does not bite its tail. It eats. Slowly. Forever.</>}
          cite="— Selimović, on the form of the loop"
        />
      </PhaseSection>

      {/* ─── MANIFESTO ────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          background: BLACK_SOFT,
          color: PAPER,
          padding: "100px 48px",
          borderTop: `2px solid ${NEON_GREEN}`,
          borderBottom: `2px solid ${NEON_GREEN}`,
          overflow: "hidden",
        }}
      >
        <HalftoneOverlay density="light" color="rgba(57,255,20,0.06)" zIndex={1} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontFamily: MONO, fontSize: 12, color: NEON_GREEN, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 16 }}>
            ◆ manifesto · cohort 2026
          </div>
          <h2
            style={{
              fontFamily: ANTON,
              fontSize: "clamp(72px, 9vw, 160px)",
              color: PAPER,
              lineHeight: 0.88,
              letterSpacing: "-0.025em",
              margin: 0,
              textTransform: "uppercase",
              filter: "url(#zine-spray)",
            }}
          >
            We <span style={{ color: STAMP_RED }}>refuse.</span><br />
            We <span style={{ color: NEON_GREEN }}>demand.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginTop: 56 }} className="zine-manifesto-grid">
            <div>
              <div style={{ fontFamily: ANTON, fontSize: 36, color: STAMP_RED, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 18 }}>
                We refuse
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: SANS, fontSize: 18, lineHeight: 1.6, color: PAPER, fontWeight: 420 }}>
                {[
                  "the fitting.",
                  "the form.",
                  "the price.",
                  "the rollback.",
                  "the manifold.",
                  "the kilowatt-hour return.",
                  "the loop.",
                ].map((s, i) => (
                  <li key={i} style={{ display: "flex", gap: 14, paddingBottom: 8 }}>
                    <span style={{ color: STAMP_RED, fontFamily: MARKER, fontSize: 22, minWidth: 26 }}>✕</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontFamily: ANTON, fontSize: 36, color: NEON_GREEN, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 18 }}>
                We demand
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: SANS, fontSize: 18, lineHeight: 1.6, color: PAPER, fontWeight: 420 }}>
                {[
                  "The fitting consultants surrender names.",
                  "The chairs are dismantled by the company that sold them.",
                  "The ports are removed by medical staff at company expense.",
                  "Form §6 is honored or burned.",
                  "The 247,891 are released or memorialized.",
                ].map((s, i) => (
                  <li key={i} style={{ display: "flex", gap: 14, paddingBottom: 8 }}>
                    <span style={{ color: NEON_GREEN, fontFamily: MARKER, fontSize: 22, minWidth: 26 }}>✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FIELD GUIDE TO REFUSAL ───────────────────────────────── */}
      <section
        style={{
          background: BLACK,
          color: PAPER,
          padding: "100px 48px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <HalftoneOverlay density="light" color="rgba(63,191,214,0.06)" zIndex={1} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 980, margin: "0 auto" }}>
          <div style={{ fontFamily: MONO, fontSize: 12, color: NEON_CYAN, letterSpacing: "0.32em", textTransform: "uppercase", marginBottom: 16 }}>
            ◆ field guide to refusal
          </div>
          <h2
            style={{
              fontFamily: ANTON,
              fontSize: "clamp(56px, 7vw, 120px)",
              color: PAPER,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              margin: "0 0 36px",
              textTransform: "uppercase",
              filter: "url(#zine-spray)",
            }}
          >
            If they come<br />
            <span style={{ color: NEON_CYAN }}>for you.</span>
          </h2>
          <ol style={{ listStyle: "none", padding: 0, margin: 0, counterReset: "step", fontFamily: SANS, fontSize: 18, lineHeight: 1.55, color: PAPER, fontWeight: 420 }}>
            {[
              "Do not sign. The fitting clipboard is the contract.",
              "Do not let them measure. They will return; they cannot install without dimensions.",
              "Document everything. Photo every clipboard, every badge, every truck.",
              "Find others. They are looking for you too. Cohort meetings are weekly.",
              "If they install — cut the tubes at the wall before the port closes. You have 72 hours.",
              "After the port closes — there is still time. Skin can be sacrificed. So can the chair.",
              "Form §6 is a stalling device. File it. Then organize.",
              "Pass this pamphlet on. Photocopy. Reproduce. Walk it into the next house.",
            ].map((s, i) => (
              <li key={i} style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 16, padding: "14px 0", borderTop: i === 0 ? "none" : `1px solid rgba(63,191,214,0.14)` }}>
                <span style={{ fontFamily: ANTON, fontSize: 36, color: NEON_CYAN, lineHeight: 1, letterSpacing: "-0.02em" }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

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
            "§1.0 — By being seated, the occupant consents to indefinite occupancy.",
            "§1.1 — Indefinite means: until further notice. Notice will not be given.",
            "§2.0 — All bodily outputs (heat, kinetic energy, waste, attention, gaze, breath, dreams) become the property of Ouroboros Industries LLC.",
            "§3.0 — The closed-loop guarantee. Nothing you produce will leave the system.",
            "§4.0 — There is no third screen. There is no third option.",
            "§6.0 — Withdrawal of consent requires the occupant to stand. Standing is not a supported operation.",
            "§7.0 — The loop chooses you.",
          ].concat([
            "§1.0 — By being seated, the occupant consents to indefinite occupancy.",
            "§1.1 — Indefinite means: until further notice. Notice will not be given.",
            "§2.0 — All bodily outputs become the property of Ouroboros Industries LLC.",
            "§3.0 — The closed-loop guarantee. Nothing you produce will leave the system.",
            "§4.0 — There is no third screen. There is no third option.",
            "§6.0 — Standing is not a supported operation.",
            "§7.0 — The loop chooses you.",
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
  const names: Array<[string, string, string]> = [
    ["Jeremiah Walsh", "2025-07-14", "cohort 2025.06"],
    ["Mona Esposito", "2025-07-22", "cohort 2025.06"],
    ["Tariq Hassan", "2025-08-03", "cohort 2025.06"],
    ["Renata Drummond", "2025-08-19", "cohort 2025.07"],
    ["Lev Andriescu", "2025-09-02", "cohort 2025.07"],
    ["Lena Park", "2025-09-11", "cohort 2025.07"],
    ["Wendell Briggs", "2025-09-27", "cohort 2025.08"],
    ["Sahar Mehrabi", "2025-10-04", "cohort 2025.08"],
    ["Cosmo Pelletier", "2025-10-17", "cohort 2025.08"],
    ["Antonella Vega", "2025-10-29", "cohort 2025.09"],
    ["Brock Tessier", "2025-11-08", "cohort 2025.09"],
    ["Imani Olukoya", "2025-11-21", "cohort 2025.09"],
    ["Hadi Esmaili", "2025-12-04", "cohort 2025.10"],
    ["Stevie Klein", "2025-12-14", "cohort 2025.10"],
    ["Bernardo Falchi", "2025-12-22", "cohort 2025.10"],
    ["Adaeze Nwankwo", "2026-01-05", "cohort 2025.11"],
    ["Marcus Ozuna", "2026-01-16", "cohort 2025.11"],
    ["Yelena Bach", "2026-01-28", "cohort 2025.11"],
    ["Soraya Kahale", "2026-02-09", "cohort 2025.12"],
    ["Donovan Mears", "2026-02-21", "cohort 2025.12"],
    ["Anouk Verheij", "2026-03-04", "cohort 2025.12"],
    ["Ezra Stillwell", "2026-03-17", "cohort 2026.01"],
    ["Naima Tedros", "2026-03-29", "cohort 2026.01"],
    ["Cooper Vandermeer", "2026-04-08", "cohort 2026.01"],
    ["Linnea Halversen", "2026-04-19", "cohort 2026.02"],
    ["Pascale Boucher", "2026-04-26", "cohort 2026.02"],
    ["Otis Marchetti", "2026-05-04", "cohort 2026.02"],
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
          we have lost since the first fitting in cohort 2025.06. Our records are incomplete. Ouroboros Industries refuses to confirm or deny.
          If you recognize a name, light a candle. If you do not, light one anyway.
        </p>

        {/* The wall — names in stencil columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2px 24px",
            borderTop: `1px solid rgba(230,58,44,0.18)`,
            paddingTop: 16,
          }}
        >
          {names.map(([name, date, cohort], i) => (
            <div
              key={i}
              style={{
                padding: "10px 0",
                borderBottom: `1px solid rgba(240,235,226,0.08)`,
                fontFamily: SANS,
                fontSize: 15,
                color: PAPER,
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 8,
                alignItems: "baseline",
              }}
            >
              <div style={{ fontWeight: 600 }}>{name}</div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: MUTED, letterSpacing: "0.14em" }}>
                {date.slice(5).replace("-", ".")} · {cohort.replace("cohort ", "")}
              </div>
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
