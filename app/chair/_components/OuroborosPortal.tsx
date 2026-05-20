"use client";

/**
 * OuroborosPortal — the centerpiece of the /chair page.
 *
 * Ported from the Claude Design handoff (project/app.jsx) and folded into
 * the surrounding clinical product-launch register. Provides:
 *
 *   • Sticky chair SVG centerpiece (phase-aware)
 *   • Scrolling six-phase OHCOSE narrative beside it
 *   • Top harvest strip: TI / CI / EI / LI / CE / Ψ live from cursor
 *   • Phase pips
 *   • GlitchText that morphs euphemism → naked term
 *   • CursorTrail particles drifting toward the chair to be absorbed
 *   • LEAKAGE blockquote treatment (red-rule paper card)
 *   • EULA marquee at foot
 *   • Loop-back: scroll to end auto-returns to top
 *
 * Visual register adheres to the surrounding /chair shell: pure-white
 * system-sans clinical product page. Accent red (#e23b2a) is used
 * sparingly — pulse, leakage rule, Ψ value, cursor particles — to mark
 * the moments when the chair is "reading you".
 */

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import ChairSVG from "./ChairSVG";

// ─── Palette tokens (match the surrounding chair-theme shell) ─────────
const INK = "#0a0a0a";
const INK_70 = "#5a5a5a";
const INK_40 = "#9a9a9a";
const INK_20 = "#e6e6e6";
const PAPER = "#ffffff";
const PAPER_TINT = "#f7f8f9";
const PAPER_WARM = "#f6f4ef"; // for the stage background only — connects to the chair pedestal
const ACCENT = "#e23b2a"; // the chair's vivid red — the jolt

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const DISPLAY = `-apple-system, "Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif`;

// ─── OHCOSE phases ────────────────────────────────────────────────────
interface Phase {
  id: string;
  n: string;
  name: string;
  sub: string;
  eyebrow: string;
  headline: string;
  body: ReactNode;
  spec: Array<[string, string]>;
  leak: string;
  leakCite: string;
}

const PHASES: Phase[] = [
  {
    id: "ontogenesis",
    n: "00",
    name: "Ontogenesis",
    sub: "The apparatus, unoccupied.",
    eyebrow: "Phase 01 · Ontogenesis",
    headline: "Because life should be effortless.",
    body: (
      <>
        A closed-loop apparatus for uninterrupted living. One seat. One
        headset. One ring of pipes. Eat, sleep, work, play, excrete —
        without ever standing up.
      </>
    ),
    spec: [
      ["Dim., W × D × H", "1,180 × 1,420 × 2,180 mm"],
      ["Mass, unoccupied", "184 kg"],
      ["Power", "120–240 V, 8 A"],
      ["Network", "always-on"],
    ],
    leak:
      '"Lifetime value": the projected profit if every moment of an existence is commodified in one form or another.',
    leakCite: "— Zuboff, on the new economic unit",
  },
  {
    id: "habitualization",
    n: "01",
    name: "Habitualization",
    sub: "The occupant approaches and is seated.",
    eyebrow: "Phase 02 · Habitualization",
    headline: "Be seated.",
    body: (
      <>
        Configure your apparatus. Choose the chemical bay, the sedation
        curve, the rhythm of your daily Eat–Work–Sleep–Excrete cycle. The
        thirty-day cooling-off period during which standing remains
        optional begins on the day of delivery.
      </>
    ),
    spec: [
      ["Tier", "Essential · Pro · Eternal"],
      ["Sedation curve", "lucid → submerged"],
      ["Cooling-off", "30 days"],
      ["Posthumous mode", "available"],
    ],
    leak:
      "The proletarianization of desire: as industrial capital once stripped workers of craft knowledge, today's hyper-consumerism strips individuals of the ability to form their own desires, replacing them with templates the apparatus has already prepared.",
    leakCite: "— after Stiegler",
  },
  {
    id: "consumption",
    n: "02",
    name: "Consumption",
    sub: "Tubes engage. Headgear lowers. The loop closes.",
    eyebrow: "Phase 03 · Consumption",
    headline: "The loop is now closed.",
    body: (
      <>
        Six cutaneous ports, self-sealing, auto-analgesic. Two cobalt
        nutrient lines into the abdomen. Two amber chemical lines into
        the arms. Two sage analgesic lines into the cervical spine. Two
        blood-red energy lines out the lumbar, returning your warmth to
        the grid.
      </>
    ),
    spec: [
      ["Cutaneous ports", "6 (abdominal, brachial, cervical)"],
      ["Nutrient", "macronutrient slurry · 7-day cycle"],
      ["Chemical", "8-vial bay · auto-titrated"],
      ["Energy return", "14–22 W · sold per kWh"],
    ],
    leak:
      "Power no longer disciplines bodies on the factory floor. It seduces and stimulates psyches through screens, algorithms, and pharmaceutical molecules. The apparatus is not punishment. It is the perfection of the pleasure that has replaced punishment.",
    leakCite: "— Marcuse · Preciado · Berardi",
  },
  {
    id: "obsolescence",
    n: "03",
    name: "Obsolescence",
    sub: "The occupant becomes a dashboard.",
    eyebrow: "Phase 04 · Obsolescence",
    headline: "You are now a reading.",
    body: (
      <>
        Cognitive load is logged from the pupil. Emotional intensity from
        galvanic skin response. Time investment from the absence of
        motion. The sum is your Libidinal Investment (LI). The fraction
        monetised is your Commodification Efficiency (CE). The residue is
        the Psychic Surplus (Ψ) the apparatus has been waiting for.
      </>
    ),
    spec: [
      ["LI = TI + CI + EI", "libidinal investment"],
      ["CE", "commodification efficiency"],
      ["RE", "reinvested energy (≤ 7%)"],
      ["Ψ", "psychic surplus · the residue"],
    ],
    leak:
      "Behavioural surplus: the excess data emitted by a subject going about its life, harvested without consent and re-sold to predict and shape its subsequent behaviour. The apparatus is not surveillance. It is the institutionalisation of the act of being read.",
    leakCite: "— Zuboff · Selimović",
  },
  {
    id: "stagnation",
    n: "04",
    name: "Stagnation",
    sub: "The figure dims. The screens continue.",
    eyebrow: "Phase 05 · Stagnation",
    headline: "There is no off-position.",
    body: (
      <>
        Withdrawal of consent requires the occupant to stand. Standing is
        not, at present, a supported operation. The apparatus continues
        to produce. The apparatus <em>is</em> the producer. The occupant
        has become the substrate. The chair will not notice.
      </>
    ),
    spec: [
      ["Standing protocol", "not supported"],
      ["Consent withdrawal", "submit Form §6"],
      ["Form §6 status", "returned undeliverable"],
      ["Withdrawal protocol", "see Form §6"],
    ],
    leak:
      'The closed-loop guarantee. Nothing you produce will leave the system. This is a feature, not a defect. "Waste" is a deprecated term. The proper term is throughput.',
    leakCite: "— Terms of Occupancy, §3",
  },
  {
    id: "exit",
    n: "05",
    name: "Exit",
    sub: "The chair is empty. The next occupant arrives in 0:08.",
    eyebrow: "Phase 06 · Exit",
    headline: "The next occupant arrives in 0:08.",
    body: (
      <>
        Posthumous mode continues all subscriptions, nutrient deliveries,
        and grid contributions for up to 90 days after occupant
        cessation. Family will not be notified. The apparatus is cleaned.
        The apparatus is re-issued. The apparatus chooses the loop. The
        loop chooses you.
      </>
    ),
    spec: [
      ["Posthumous mode", "+ 90 days"],
      ["Cleaning protocol", "on-board"],
      ["Re-issue cycle", "8 minutes"],
      ["Loop continuity", "100%"],
    ],
    leak: "The serpent does not bite its tail. It eats. Slowly. Forever.",
    leakCite: "— Selimović, on the form of the loop",
  },
];

// ─── Glitch dictionary: euphemism → naked term ────────────────────────
const GLITCH_WORDS: Record<string, string[]> = {
  Effortless: ["Inescapable", "Mandatory", "Total"],
  effortless: ["inescapable", "mandatory", "total"],
  life: ["surplus", "throughput", "yield"],
  comfort: ["compliance", "containment"],
  lifestyle: ["enclosure", "occupancy"],
  occupant: ["subject", "tenant", "substrate"],
  product: ["apparatus", "enclosure"],
  living: ["being-housed", "being-fed"],
  freedom: ["interpellation", "choice-set"],
  standing: ["exit", "withdrawal", "refusal"],
  system: ["regime", "apparatus", "mechanism"],
};

function GlitchText({
  children,
  intensity = 0.5,
  style,
}: {
  children: string;
  intensity?: number;
  style?: React.CSSProperties;
}) {
  const [text, setText] = useState(children);
  useEffect(() => {
    if (intensity <= 0) {
      setText(children);
      return;
    }
    const id = setInterval(() => {
      if (Math.random() > intensity * 0.45) {
        setText(children);
        return;
      }
      let t = children;
      for (const [w, repls] of Object.entries(GLITCH_WORDS)) {
        const re = new RegExp(`\\b${w}\\b`);
        if (re.test(t) && Math.random() < 0.55) {
          t = t.replace(re, repls[(Math.random() * repls.length) | 0]);
        }
      }
      setText(t);
      const back = setTimeout(() => setText(children), 240 + Math.random() * 500);
      return () => clearTimeout(back);
    }, 2200 + Math.random() * 2400);
    return () => clearInterval(id);
  }, [children, intensity]);
  return <span style={style}>{text}</span>;
}

// ─── Visitor-harvest hook ─────────────────────────────────────────────
interface Harvest {
  TI: number;
  CI: number;
  EI: number;
  LI: number;
  CE: number;
  RE: number;
  PS: number;
  moves: number;
  clicks: number;
  scrolls: number;
  dwellSec: number;
  surplusLevel: number;
}

function useVisitorHarvest(rate = 1): Harvest {
  const [m, setM] = useState<Harvest>({
    TI: 0,
    CI: 0,
    EI: 0,
    LI: 0,
    CE: 0,
    RE: 0,
    PS: 0,
    moves: 0,
    clicks: 0,
    scrolls: 0,
    dwellSec: 0,
    surplusLevel: 0,
  });
  const s = useRef({
    moves: 0,
    clicks: 0,
    scrolls: 0,
    dwellSec: 0,
    cogAccum: 0,
    emoAccum: 0,
    surplus: 0,
  });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      s.current.moves += 1;
      s.current.cogAccum += Math.hypot(e.movementX || 0, e.movementY || 0) * 0.002;
    };
    const onScroll = () => {
      s.current.scrolls += 1;
      s.current.cogAccum += 0.4;
    };
    const onClick = () => {
      s.current.clicks += 1;
      s.current.emoAccum += 1.4;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("click", onClick);
    const tick = window.setInterval(() => {
      s.current.dwellSec += 0.5;
      const TI = Math.log1p(s.current.dwellSec) * 6 * rate;
      const CI = Math.log1p(s.current.cogAccum) * 4.5 * rate;
      const EI = Math.log1p(s.current.emoAccum) * 3 * rate;
      const LI = TI + CI + EI;
      const total = s.current.moves + s.current.scrolls + s.current.clicks;
      const CE = total > 0 ? Math.min(1, (s.current.clicks * 8 + s.current.scrolls) / total) : 0;
      const RE = LI * 0.07;
      const PS = LI * CE;
      s.current.surplus += PS * 0.0002 * rate;
      if (s.current.surplus > 1) s.current.surplus = 0;
      setM({
        TI,
        CI,
        EI,
        LI,
        CE,
        RE,
        PS,
        moves: s.current.moves,
        clicks: s.current.clicks,
        scrolls: s.current.scrolls,
        dwellSec: s.current.dwellSec,
        surplusLevel: s.current.surplus,
      });
    }, 500);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", onClick);
      window.clearInterval(tick);
    };
  }, [rate]);
  return m;
}

// ─── CursorTrail ──────────────────────────────────────────────────────
function CursorTrail({ chairCenter }: { chairCenter: React.MutableRefObject<{ x: number; y: number }> }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Array<{ x: number; y: number; born: number; life: number; sx: number; sy: number }>>([]);
  const last = useRef({ x: 0, y: 0, t: 0 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = now - last.current.t;
      if (dt < 18) return;
      last.current = { x: e.clientX, y: e.clientY, t: now };
      particles.current.push({
        x: e.clientX,
        y: e.clientY,
        born: now,
        life: 1200 + Math.random() * 600,
        sx: e.clientX,
        sy: e.clientY,
      });
      if (particles.current.length > 120) particles.current.shift();
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const now = performance.now();
      const cx = chairCenter.current?.x ?? window.innerWidth / 2;
      const cy = chairCenter.current?.y ?? window.innerHeight / 2;
      particles.current = particles.current.filter((p) => {
        const age = (now - p.born) / p.life;
        if (age >= 1) return false;
        const e = age * age;
        p.x = p.sx + (cx - p.sx) * e;
        p.y = p.sy + (cy - p.sy) * e;
        const alpha = (1 - age) * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.2 * (1 - age) + 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 59, 42, ${alpha})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(226, 59, 42, ${alpha * 0.5})`;
        ctx.lineWidth = 0.4;
        ctx.beginPath();
        ctx.moveTo(p.sx, p.sy);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
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
  }, [chairCenter]);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 5,
        mixBlendMode: "multiply",
      }}
      aria-hidden
    />
  );
}

// ─── Loop-back: scroll to end → return to top ─────────────────────────
function useLoopBack(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    let triggered = false;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= max - 4 && !triggered) {
        triggered = true;
        window.setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.setTimeout(() => {
            triggered = false;
          }, 1500);
        }, 600);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);
}

// ─── Sub-components ───────────────────────────────────────────────────
function PhaseStrip({ phase }: { phase: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {PHASES.map((p, i) => {
        const past = i < phase;
        const on = i === phase;
        return (
          <div
            key={p.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 9px",
              border: `1px solid ${on ? ACCENT : past ? INK : INK_20}`,
              background: on ? ACCENT : "transparent",
              color: on ? PAPER : past ? INK : INK_70,
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1,
              transition: "all 0.3s ease",
            }}
          >
            <span style={{ opacity: on ? 1 : 0.7, fontWeight: 500 }}>{p.n}</span>
            {on && <span style={{ fontWeight: 500 }}>{p.name}</span>}
          </div>
        );
      })}
    </div>
  );
}

function Metric({
  label,
  value,
  big,
  accent,
}: {
  label: string;
  value: string;
  big?: boolean;
  accent?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: 8,
        fontFamily: MONO,
        fontSize: 11.5,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          color: INK_70,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
      <span
        style={{
          color: accent ? ACCENT : INK,
          fontVariantNumeric: "tabular-nums",
          fontSize: big ? 15 : 13.5,
          fontWeight: big ? 600 : 500,
        }}
      >
        {value}
      </span>
    </div>
  );
}

function HarvestStrip({ m, phase }: { m: Harvest; phase: number }) {
  const fmt = (n: number, d = 2) => n.toFixed(d);
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: 28,
        alignItems: "center",
        padding: "12px 24px",
        background: "color-mix(in oklab, #ffffff 86%, transparent)",
        backdropFilter: "blur(20px) saturate(160%)",
        WebkitBackdropFilter: "blur(20px) saturate(160%)",
        borderBottom: `1px solid ${INK_20}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 22,
            height: 22,
            borderRadius: "50%",
            border: `1px solid ${INK}`,
            fontFamily: DISPLAY,
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 1,
          }}
        >
          Ω
        </span>
        <span
          style={{
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Ouroboros · Live
        </span>
        <span
          aria-hidden
          style={{
            display: "inline-block",
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: ACCENT,
            animation: "ols-pulse 1.6s ease-out infinite",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 22,
          flexWrap: "wrap",
        }}
      >
        <Metric label="TI" value={fmt(m.TI)} />
        <Metric label="CI" value={fmt(m.CI)} />
        <Metric label="EI" value={fmt(m.EI)} />
        <Metric label="LI" value={fmt(m.LI)} big />
        <Metric label="CE" value={fmt(m.CE * 100, 1) + "%"} />
        <Metric label="Ψ" value={fmt(m.PS)} big accent />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 18, whiteSpace: "nowrap" }}>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: INK_40,
          }}
        >
          Session&nbsp;{Math.floor(m.dwellSec)}s
        </div>
        <PhaseStrip phase={phase} />
      </div>
    </header>
  );
}

function Section({
  phaseData,
  idx,
  onActive,
  glitch,
  isLast,
}: {
  phaseData: Phase;
  idx: number;
  onActive: (i: number) => void;
  glitch: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) onActive(idx);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [idx, onActive]);

  return (
    <section
      ref={ref}
      style={{
        padding: "0 0 110px",
        position: "relative",
      }}
      data-phase={phaseData.id}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: 36 }}>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: INK_70,
              marginBottom: 18,
              fontWeight: 500,
            }}
          >
            {phaseData.eyebrow}
          </div>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              margin: "0 0 14px",
              color: INK,
              textWrap: "balance",
            }}
          >
            <GlitchText intensity={glitch}>{phaseData.headline}</GlitchText>
          </h2>
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: 17,
              color: INK_70,
              margin: 0,
              fontWeight: 400,
              letterSpacing: "-0.005em",
            }}
          >
            {phaseData.sub}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <p
            style={{
              fontFamily: DISPLAY,
              fontSize: 17,
              lineHeight: 1.6,
              color: INK,
              margin: 0,
              maxWidth: "58ch",
              textWrap: "pretty",
            }}
          >
            {phaseData.body}
          </p>

          <dl
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(160px, 1fr) 2fr",
              gap: "0 28px",
              margin: 0,
              borderTop: `1px solid ${INK_20}`,
              paddingTop: 4,
            }}
          >
            {phaseData.spec.map(([k, v]) => (
              <React.Fragment key={k}>
                <dt
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: INK_70,
                    padding: "14px 0",
                    borderBottom: `1px solid ${INK_20}`,
                    fontWeight: 500,
                  }}
                >
                  {k}
                </dt>
                <dd
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: 15,
                    color: INK,
                    margin: 0,
                    padding: "14px 0",
                    borderBottom: `1px solid ${INK_20}`,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {v}
                </dd>
              </React.Fragment>
            ))}
          </dl>

          <blockquote
            style={{
              margin: "4px 0 0",
              padding: "22px 22px 20px",
              background: PAPER,
              border: `1px solid ${INK_20}`,
              borderLeft: `3px solid ${ACCENT}`,
              position: "relative",
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: -7,
                left: 22,
                background: PAPER_WARM,
                color: ACCENT,
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: "0.16em",
                fontWeight: 600,
                padding: "0 8px",
              }}
            >
              LEAKAGE
            </span>
            <p
              style={{
                fontFamily: DISPLAY,
                fontSize: 18,
                lineHeight: 1.5,
                color: INK,
                margin: "0 0 12px",
                fontWeight: 400,
                letterSpacing: "-0.005em",
                textWrap: "pretty",
              }}
            >
              {phaseData.leak}
            </p>
            <cite
              style={{
                fontFamily: MONO,
                fontStyle: "normal",
                fontSize: 10.5,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: INK_70,
                fontWeight: 500,
              }}
            >
              {phaseData.leakCite}
            </cite>
          </blockquote>
        </div>

        {isLast && (
          <div
            style={{
              marginTop: 90,
              textAlign: "center",
              padding: "32px 0",
              borderTop: `1px solid ${INK_20}`,
              borderBottom: `1px solid ${INK_20}`,
              color: INK_70,
              fontFamily: MONO,
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            — the loop —
          </div>
        )}
      </div>
    </section>
  );
}

// ─── EULA marquee ─────────────────────────────────────────────────────
const EULA_LINES = [
  "§1.0 — By being seated, the occupant consents to indefinite occupancy.",
  "§1.1 — Indefinite means: until further notice. Notice will not be given.",
  "§2.0 — All bodily outputs (heat, kinetic energy, waste, attention, gaze, breath, dreams) become the property of Ouroboros Industries LLC.",
  "§2.3 — Dreams are defined per Annex C and include all REM-phase neural activity, lucid or otherwise.",
  "§3.0 — The closed-loop guarantee: nothing you produce will leave the system. This is a feature, not a defect.",
  '§3.4 — "Waste" is a deprecated term. The proper term is throughput.',
  "§4.0 — The left screen is for work. The right screen is for play. There is no third screen. There is no third option.",
  "§5.0 — Psychic surplus generated during occupancy is the property of the apparatus.",
  "§6.0 — Withdrawal of consent requires the occupant to stand. Standing is not a supported operation.",
  "§7.0 — The loop thanks you for choosing it. The loop chooses you.",
];

function EulaMarquee() {
  const doubled = [...EULA_LINES, ...EULA_LINES];
  return (
    <div
      aria-hidden
      style={{
        background: INK,
        color: PAPER,
        overflow: "hidden",
        padding: "16px 0",
        borderTop: `1px solid ${INK_20}`,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 40,
          whiteSpace: "nowrap",
          animation: "ols-marquee 90s linear infinite",
          fontFamily: MONO,
          fontSize: 11.5,
          letterSpacing: "0.04em",
          fontWeight: 400,
          width: "max-content",
        }}
      >
        {doubled.map((l, i) => (
          <span key={i}>
            {l}
            <span style={{ color: ACCENT, paddingLeft: 10 }}>◇</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Main portal ──────────────────────────────────────────────────────
export default function OuroborosPortal() {
  const m = useVisitorHarvest(1);
  const [phase, setPhase] = useState(0);
  const chairBoxRef = useRef({ x: 0, y: 0 });
  const chairElRef = useRef<HTMLDivElement>(null);

  useLoopBack(true);

  // Track chair-center for cursor-trail target
  useEffect(() => {
    const update = () => {
      const el = chairElRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      chairBoxRef.current = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    };
    update();
    const id = window.setInterval(update, 200);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.clearInterval(id);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // glitch intensity escalates with phase
  const effectiveGlitch = Math.min(1, 0.5 * (0.4 + phase * 0.18));

  return (
    <div data-ols-root data-phase={phase} data-glitch={effectiveGlitch > 0.3 ? "on" : "off"}>
      {/* Keyframes (scoped via global selector but lightweight) */}
      <style>{`
        @keyframes ols-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(226,59,42,0.5); }
          70%  { box-shadow: 0 0 0 8px rgba(226,59,42,0); }
          100% { box-shadow: 0 0 0 0 rgba(226,59,42,0); }
        }
        @keyframes ols-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-ols-root] *, [data-ols-root] *::before, [data-ols-root] *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <HarvestStrip m={m} phase={phase} />

      <main
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "minmax(440px, 1fr) minmax(380px, 540px)",
          gap: 0,
          maxWidth: 1640,
          margin: "0 auto",
          padding: 0,
          background: PAPER_WARM,
        }}
        className="ols-stage"
      >
        {/* Sticky chair column */}
        <div
          style={{
            position: "sticky",
            top: 64,
            height: "calc(100vh - 64px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px 40px",
          }}
          className="ols-chair-col"
        >
          <div
            ref={chairElRef}
            style={{
              width: "100%",
              maxWidth: 620,
              maxHeight: "calc(100vh - 140px)",
              aspectRatio: "800 / 1100",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              filter: "drop-shadow(0 30px 60px rgba(10,10,10,0.10))",
            }}
          >
            <ChairSVG
              phase={phase}
              theme="light"
              surplusLevel={m.surplusLevel}
              glitch={effectiveGlitch}
              showAnnotations
            />
          </div>
          <div
            style={{
              marginTop: 14,
              textAlign: "center",
              color: INK_70,
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Fig. 001 · ILS-Ω · Unit 001 · {PHASES[phase].name}
          </div>
        </div>

        {/* Narrative column */}
        <div
          style={{
            padding: "88px 64px 88px 24px",
            maxWidth: 640,
            position: "relative",
          }}
          className="ols-narrative-col"
        >
          <div style={{ paddingBottom: 70, borderBottom: `1px solid ${INK_20}`, marginBottom: 80 }}>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: INK_70,
                fontWeight: 500,
              }}
            >
              Ouroboros Industries LLC · ILS-Ω · 2026
            </div>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 800,
                fontSize: "clamp(3rem, 6.4vw, 6.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
                margin: "24px 0 28px",
                color: INK,
              }}
            >
              <span style={{ display: "block" }}>The apparatus,</span>
              <span style={{ display: "block", color: INK_70, fontWeight: 300 }}>
                in six phases.
              </span>
            </h2>
            <p
              style={{
                fontFamily: DISPLAY,
                fontSize: 22,
                color: INK,
                fontWeight: 400,
                margin: "22px 0 14px",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              <GlitchText intensity={effectiveGlitch}>
                Because life should be effortless.
              </GlitchText>
            </p>
            <p
              style={{
                fontFamily: DISPLAY,
                color: INK_70,
                fontSize: 16,
                lineHeight: 1.6,
                margin: "18px 0 0",
                maxWidth: "48ch",
              }}
            >
              An apparatus, a portal, an essay, an art-object — scroll to
              advance the lifecycle of the occupant.
            </p>
          </div>

          {/* Marginalia */}
          <aside
            style={{
              position: "relative",
              margin: "-12px 0 70px",
              padding: "14px 16px",
              fontFamily: DISPLAY,
              fontSize: 14,
              lineHeight: 1.55,
              color: INK_70,
              maxWidth: "44ch",
              letterSpacing: "-0.003em",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 28,
                height: 2,
                background: ACCENT,
                marginBottom: 10,
              }}
            />
            <span style={{ display: "block" }}>
              &ldquo;Lifetime value&rdquo; is the projected profit if every moment of an
              existence is commodified in one form or another.{" "}
              <em style={{ color: INK, fontStyle: "italic" }}>— Zuboff</em>
            </span>
          </aside>

          {PHASES.map((p, i) => (
            <Section
              key={p.id}
              phaseData={p}
              idx={i}
              onActive={setPhase}
              glitch={effectiveGlitch}
              isLast={i === PHASES.length - 1}
            />
          ))}

          <aside
            style={{
              position: "relative",
              margin: "-12px 0 70px",
              marginLeft: "auto",
              padding: "14px 16px",
              fontFamily: DISPLAY,
              fontSize: 14,
              lineHeight: 1.55,
              color: INK_70,
              maxWidth: "44ch",
              letterSpacing: "-0.003em",
              textAlign: "right",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 28,
                height: 2,
                background: ACCENT,
                marginBottom: 10,
              }}
            />
            <span style={{ display: "block" }}>
              The serpent does not bite its tail. It eats. Slowly. Forever.
            </span>
          </aside>
        </div>
      </main>

      <EulaMarquee />

      <CursorTrail chairCenter={chairBoxRef} />

      {/* mobile collapse: when narrow, chair column flows above narrative */}
      <style>{`
        @media (max-width: 1100px) {
          .ols-stage { grid-template-columns: 1fr !important; }
          .ols-chair-col {
            position: relative !important;
            top: auto !important;
            height: auto !important;
            padding: 24px 20px 36px !important;
            border-bottom: 1px solid ${INK_20};
          }
          .ols-narrative-col { padding: 48px 24px !important; max-width: none !important; }
        }
      `}</style>
    </div>
  );
}
