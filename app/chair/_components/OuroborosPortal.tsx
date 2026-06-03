"use client";

/**
 * OuroborosPortal — cinematic dark, slow horror.
 *
 * Each phase is a full-viewport scene with one dominant element. The
 * visitor descends through six scenes, an essay-as-film. The harvest
 * strip is a faint glowing line at the top — the apparatus is always
 * reading, but quietly. Cursor particles drift toward the Ψ value. The
 * EULA marquee at foot is the only loud element, an institutional
 * voice rolling underneath the art.
 */

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  FootprintPlan,
  SedationCurve,
  PortMap,
  LiveTicker,
  ReturnedUndeliverable,
  ReissueCountdown,
} from "./PhaseDiagrams";
import {
  Scanlines,
  Artifact,
  HeartbeatPulse,
  RGBShift,
  TextScramble,
  EvidenceCaption,
} from "./Effects";

// ─── Cinematic dark palette ───────────────────────────────────────────
const BG = "#0a0908";
const BG_DEEP = "#050403";
const INK = "#f0ebe2";
const INK_SOFT = "#d6d1c8";
const MUTED = "#6b6760";
const LINE = "rgba(240,235,226,0.10)";
const LINE_FAINT = "rgba(240,235,226,0.04)";
const ACCENT = "#ff3a25";

const SANS = `var(--font-geist), ui-sans-serif, system-ui, -apple-system, sans-serif`;
const MONO = `var(--font-geist-mono), ui-monospace, "SF Mono", Menlo, monospace`;

// ─── Imperial Archive dotted-underline anchor ─────────────────────────
function A({
  to,
  title,
  children,
}: {
  to: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <a
      href={`/chair/archive/${to}`}
      title={title}
      style={{
        color: "inherit",
        textDecoration: "underline",
        textDecorationStyle: "dotted",
        textDecorationColor: "rgba(240,235,226,0.35)",
        textDecorationThickness: "1px",
        textUnderlineOffset: "3px",
        cursor: "help",
      }}
    >
      {children}
    </a>
  );
}

// ─── Glitch dictionary ────────────────────────────────────────────────
const GLITCH_WORDS: Record<string, string[]> = {
  Effortless: ["Inescapable", "Mandatory", "Total"],
  effortless: ["inescapable", "mandatory", "total"],
  life: ["surplus", "throughput", "yield"],
  Life: ["Surplus", "Throughput", "Yield"],
  occupant: ["subject", "tenant", "substrate"],
  living: ["being-housed", "being-fed"],
  freedom: ["interpellation", "choice-set"],
  standing: ["exit", "withdrawal", "refusal"],
  system: ["regime", "apparatus", "mechanism"],
  System: ["Regime", "Apparatus", "Mechanism"],
  Ouroboros: ["Apparatus", "Ourob000s", "OUROBOROS"],
  loop: ["noose", "harness", "feeder"],
  closed: ["sealed", "welded", "irreversible"],
  apparatus: ["mechanism", "regime", "harness"],
  reading: ["yield", "extract", "harvest"],
  seated: ["enclosed", "harnessed", "fitted"],
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
    const id = window.setInterval(() => {
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
      window.setTimeout(() => setText(children), 240 + Math.random() * 500);
    }, 2200 + Math.random() * 2400);
    return () => window.clearInterval(id);
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
      const CE =
        total > 0 ? Math.min(1, (s.current.clicks * 8 + s.current.scrolls) / total) : 0;
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

// ─── Cursor trail drifting toward Ψ ───────────────────────────────────
function CursorTrail({
  target,
}: {
  target: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const particles = useRef<
    Array<{ x: number; y: number; born: number; life: number; sx: number; sy: number }>
  >([]);
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
        life: 1400 + Math.random() * 600,
        sx: e.clientX,
        sy: e.clientY,
      });
      if (particles.current.length > 140) particles.current.shift();
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const now = performance.now();
      const tx = target.current?.x ?? window.innerWidth / 2;
      const ty = target.current?.y ?? 30;
      particles.current = particles.current.filter((p) => {
        const age = (now - p.born) / p.life;
        if (age >= 1) return false;
        const e = age * age;
        p.x = p.sx + (tx - p.sx) * e;
        p.y = p.sy + (ty - p.sy) * e;
        const alpha = (1 - age) * 0.55;
        // glow particles on dark — ember red
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * (1 - age) + 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 58, 37, ${alpha})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(255, 58, 37, ${alpha * 0.4})`;
        ctx.lineWidth = 0.5;
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
  }, [target]);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 95,
        mixBlendMode: "screen",
      }}
      aria-hidden
    />
  );
}

// ─── Loop-back ────────────────────────────────────────────────────────
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

// ─── OHCOSE phases ────────────────────────────────────────────────────
interface Phase {
  id: string;
  n: string;
  name: string;
  sub: string;
  eyebrow: string;
  headline: string;
  body: ReactNode;
  leak: ReactNode;
  leakCite: string;
  diagram?: (m: Harvest) => ReactNode;
  extra?: ReactNode;
}

const PHASES: Phase[] = [
  {
    id: "ontogenesis",
    n: "01",
    name: "Ontogenesis",
    sub: "The apparatus, unoccupied.",
    eyebrow: "Phase 01",
    headline: "Because life should be effortless.",
    body: (
      <>
        A{" "}
        <A to="ouroboros-ring" title="Imperial Archive 2197.04 — On the Ouroboros Ring">
          closed-loop apparatus
        </A>{" "}
        for uninterrupted living. One seat. One headset. One ring of
        pipes. Eat, sleep, work, play, excrete — without ever standing
        up.
      </>
    ),
    leak: (
      <>
        &ldquo;Lifetime value&rdquo;: the projected profit if every moment of an
        existence is commodified in one form or another.
      </>
    ),
    leakCite: "— Zuboff, on the new economic unit",
    diagram: () => (
      <>
        <FootprintPlan />
        <Artifact
          src="/chair/artifacts/02-schematic-engraved.jpg"
          alt="Technical schematic of the Ouroboros chair, side view, with annotated subsystems"
          inv="INV. OILS-2026-Ω-α"
          caption="Plate I — Apparatus, side elevation · sedation, chemical infusion, evacuation, energy converter, ouroboros loop"
          width={1536}
          height={1024}
          treatment="found"
        />
      </>
    ),
  },
  {
    id: "habitualization",
    n: "02",
    name: "Habitualization",
    sub: "The occupant approaches and is seated.",
    eyebrow: "Phase 02",
    headline: "Be seated.",
    body: (
      <>
        Configure your apparatus. Choose the chemical bay, the sedation
        curve, the rhythm of your daily Eat–Work–Sleep–Excrete cycle. The
        thirty-day cooling-off period during which standing remains
        optional begins on the day of delivery.
      </>
    ),
    leak: (
      <>
        The proletarianization of desire: as industrial capital once
        stripped workers of craft knowledge, today&rsquo;s
        hyper-consumerism strips individuals of the ability to form
        their own desires, replacing them with templates the apparatus
        has already prepared.
      </>
    ),
    leakCite: "— after Stiegler",
    diagram: () => (
      <>
        <SedationCurve />
        <Artifact
          src="/chair/artifacts/03-megasave-rollback.jpg"
          alt="A retail flyer for the Integrated Life System X, MegaSave Superstore Rollback Special, $5,499.99"
          inv="INV. RETAIL-2026-04"
          caption="Plate II — Point-of-sale promotional, MegaSave Superstore, rollback special · ‟live, work & thrive without ever leaving your chair”"
          width={1536}
          height={1024}
          treatment="flyer"
        />
      </>
    ),
    extra: <TierTable />,
  },
  {
    id: "consumption",
    n: "03",
    name: "Consumption",
    sub: "Tubes engage. Headgear lowers. The loop closes.",
    eyebrow: "Phase 03",
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
    leak: (
      <>
        Power no longer disciplines bodies on the factory floor. It
        seduces and stimulates psyches through screens, algorithms, and
        pharmaceutical molecules. The apparatus is the perfection of the
        pleasure that has replaced punishment.
      </>
    ),
    leakCite: "— Marcuse · Preciado · Berardi",
    diagram: () => (
      <>
        <PortMap />
        <Artifact
          src="/chair/artifacts/04-port-grid.jpg"
          alt="A grid of clinical close-ups showing the seven integration ports — forearm, abdominal, pelvic, spinal, occipital, neural headgear interior, ouroboros ring routing channels"
          inv="INV. CLINICAL-2026-07"
          caption="Plate III — Cutaneous integration · forearm, abdominal, pelvic, spinal, occipital · neural headgear interior · ring routing channels"
          width={1536}
          height={1024}
          treatment="showroom"
        />
      </>
    ),
  },
  {
    id: "obsolescence",
    n: "04",
    name: "Obsolescence",
    sub: "The occupant becomes a dashboard.",
    eyebrow: "Phase 04",
    headline: "You are now a reading.",
    body: (
      <>
        Cognitive load is logged from the pupil. Emotional intensity
        from galvanic skin response. Time investment from the absence of
        motion. The sum is your Libidinal Investment (LI). The fraction
        monetised is your Commodification Efficiency (CE). The residue
        is the Psychic Surplus (Ψ) the apparatus has been waiting for.
      </>
    ),
    leak: (
      <>
        Behavioural surplus: the excess data emitted by a subject going
        about its life, harvested without consent and re-sold to predict
        and shape its subsequent behaviour. The apparatus is the
        institutionalisation of the act of being read.
      </>
    ),
    leakCite: "— Zuboff · Selimović",
    diagram: (m) => (
      <>
        <Artifact
          src="/chair/artifacts/05-vr-immersion.jpg"
          alt="An occupant in the chair, smiling, VR visor over the eyes, tubes attached to arms and abdomen"
          inv="INV. SUBJECT-2026-M.K."
          caption="Plate IV — Subject M.K. · Pro tier · session in progress · the smile is verified"
          width={1536}
          height={1024}
          treatment="found"
        />
        <LiveTicker {...m} />
      </>
    ),
    extra: <Reading />,
  },
  {
    id: "stagnation",
    n: "05",
    name: "Stagnation",
    sub: "The figure dims. The screens continue.",
    eyebrow: "Phase 05",
    headline: "There is no off-position.",
    body: (
      <>
        Withdrawal of consent requires the occupant to stand.{" "}
        <A
          to="successor-systems"
          title="Imperial Archive 2197.48 — Successor Systems: From Furniture to Implant"
        >
          Standing
        </A>{" "}
        is not, at present, a supported operation. The apparatus
        continues to produce. The apparatus <em>is</em> the producer.
        The occupant has become the substrate. The chair will not
        notice.
      </>
    ),
    leak: (
      <>
        The closed-loop guarantee. Nothing you produce will leave the
        system. This is a feature, not a defect. &ldquo;Waste&rdquo; is a
        deprecated term. The proper term is throughput.
      </>
    ),
    leakCite: "— Terms of Occupancy, §3",
    diagram: () => (
      <>
        <Artifact
          src="/chair/artifacts/02-sensor-systems.jpg"
          alt="Engineering diagram of the chair's sensor systems and body-contact interfaces, with measurements"
          inv="INV. ENG-2026-Ω-β"
          caption="Plate V — Sensor systems and body-contact interfaces · biofeed · infusion · extraction · neurolink · feedback"
          width={1536}
          height={1024}
          treatment="found"
        />
        <ReturnedUndeliverable />
      </>
    ),
  },
  {
    id: "exit",
    n: "06",
    name: "Exit",
    sub: "The chair is empty. The next occupant arrives in 0:08.",
    eyebrow: "Phase 06",
    headline: "The next occupant arrives in 0:08.",
    body: (
      <>
        Posthumous mode continues all subscriptions, nutrient
        deliveries, and grid contributions for up to 90 days after
        occupant cessation. Family will not be notified. The apparatus
        is cleaned. The apparatus is re-issued. The apparatus chooses
        the loop. The loop chooses you.
      </>
    ),
    leak: <>The serpent does not bite its tail. It eats. Slowly. Forever.</>,
    leakCite: "— Selimović, on the form of the loop",
    diagram: (m) => (
      <>
        <ReissueCountdown dwellSec={m.dwellSec} />
        <Artifact
          src="/chair/artifacts/06-life-cycle-flyer.jpg"
          alt="A bright yellow retail brochure: THE OUROBOROS — YOUR COMPLETE LIFE-CYCLE POD, with icons for Eat, Drink, Work, Play, Excrete, Sleep"
          inv="INV. RETAIL-2026-XL"
          caption="Plate VI — Final consumer brochure · ‟your complete life-cycle pod” · the loop accepts the next occupant"
          width={1536}
          height={1024}
          treatment="flyer"
        />
      </>
    ),
    extra: <FittingInquiry />,
  },
];

// ─── Tier table (folded into Phase 02) ────────────────────────────────
function TierTable() {
  const tiers = [
    {
      tier: "Essential",
      price: "$48,000",
      desc: "single occupant · standard subsystem suite · 8-hour productivity feedback cycle",
      archive: null as null | { to: string; title: string },
    },
    {
      tier: "Pro",
      price: "$96,000",
      desc: "neural-feedback work terminal · sleep-induction subsystem · triple-screen interface",
      archive: {
        to: "pro-tier-moratorium",
        title: "Imperial Archive 2197.11 — The Pro-tier Moratorium of 2049",
      },
    },
    {
      tier: "Eternal",
      price: "on request",
      desc: "lifetime support contract · estate-bound configuration · post-mortem data continuity",
      archive: {
        to: "eternal-tier",
        title: "Imperial Archive 2197.22 — On the Eternal Tier: Post-mortem Continuity",
      },
    },
  ];
  return (
    <div
      style={{
        margin: "48px auto 0",
        width: "100%",
        maxWidth: 720,
        padding: "32px 0 0",
        borderTop: `1px solid ${LINE}`,
      }}
    >
      <div
        style={{
          fontFamily: MONO,
          fontSize: 11,
          color: MUTED,
          letterSpacing: "0.3em",
          marginBottom: 24,
        }}
      >
        — TIERS —
      </div>
      <dl
        data-ols-tier-table
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(140px, auto) minmax(120px, auto) 1fr",
          gap: "0 28px",
          margin: 0,
        }}
      >
        {tiers.map((t, i) => (
          <React.Fragment key={t.tier}>
            <dt
              style={{
                fontFamily: SANS,
                fontSize: 22,
                color: INK,
                fontWeight: 500,
                padding: "20px 0",
                borderTop: i === 0 ? "none" : `1px solid ${LINE_FAINT}`,
                letterSpacing: "-0.01em",
              }}
            >
              {t.archive ? (
                <A to={t.archive.to} title={t.archive.title}>
                  {t.tier}
                </A>
              ) : (
                t.tier
              )}
            </dt>
            <dd
              style={{
                margin: 0,
                fontFamily: MONO,
                fontSize: 15,
                color: INK,
                fontVariantNumeric: "tabular-nums",
                padding: "22px 0",
                borderTop: i === 0 ? "none" : `1px solid ${LINE_FAINT}`,
                letterSpacing: "0.02em",
              }}
            >
              {t.price}
            </dd>
            <dd
              style={{
                margin: 0,
                fontFamily: SANS,
                fontSize: 14,
                color: MUTED,
                padding: "22px 0",
                borderTop: i === 0 ? "none" : `1px solid ${LINE_FAINT}`,
                lineHeight: 1.55,
              }}
            >
              {t.desc}
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
}

// ─── Testimonial-as-reading (folded into Phase 04) ────────────────────
function Reading() {
  return (
    <div
      style={{
        margin: "48px auto 0",
        width: "100%",
        maxWidth: 720,
        padding: "32px 0 0",
        borderTop: `1px solid ${LINE}`,
      }}
    >
      <div
        style={{
          fontFamily: MONO,
          fontSize: 11,
          color: MUTED,
          letterSpacing: "0.3em",
          marginBottom: 20,
        }}
      >
        — A READING · COHORT 2026.04 —
      </div>
      <p
        style={{
          fontFamily: SANS,
          fontSize: 24,
          lineHeight: 1.4,
          color: INK,
          margin: "0 0 16px",
          fontWeight: 380,
          letterSpacing: "-0.015em",
        }}
      >
        &ldquo;
        <A
          to="testimonial-analysis"
          title="Imperial Archive 2197.26 — The Testimonial Voice"
        >
          I haven&rsquo;t had to stand up in nine months
        </A>
        . The Pro tier has changed everything. My productivity is at an
        all-time high and I genuinely cannot imagine going back.&rdquo;
      </p>
      <cite
        style={{
          fontFamily: MONO,
          fontStyle: "normal",
          fontSize: 11,
          letterSpacing: "0.16em",
          color: MUTED,
          fontWeight: 500,
        }}
      >
        — M.K. · Pro tier · LI 1,824 · CE 71.4 % · Ψ 1,302
      </cite>
    </div>
  );
}

// ─── Fitting inquiry (folded into Phase 06) ───────────────────────────
function FittingInquiry() {
  return (
    <div
      style={{
        margin: "48px auto 0",
        width: "100%",
        maxWidth: 720,
        padding: "32px 0 0",
        borderTop: `1px solid ${LINE}`,
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: MONO,
          fontSize: 11,
          color: ACCENT,
          letterSpacing: "0.3em",
          marginBottom: 20,
        }}
      >
        — ACCEPTANCE —
      </div>
      <p
        style={{
          fontFamily: SANS,
          fontSize: 20,
          lineHeight: 1.5,
          color: INK_SOFT,
          margin: "0 auto 28px",
          fontWeight: 400,
          letterSpacing: "-0.005em",
          maxWidth: "44ch",
        }}
      >
        A certified Ouroboros Life System{" "}
        <A
          to="fitting-ritual"
          title="Imperial Archive 2197.30 — On the Fitting Ritual"
        >
          consultant
        </A>{" "}
        will visit your residence for biometric calibration and chair
        sizing.
      </p>
      <a
        href="#"
        style={{
          display: "inline-block",
          color: ACCENT,
          border: `1px solid ${ACCENT}`,
          padding: "16px 28px",
          fontFamily: MONO,
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Begin a fitting →
      </a>
    </div>
  );
}

// ─── Subtle harvest line at top ───────────────────────────────────────
function HarvestLine({
  m,
  psiRef,
}: {
  m: Harvest;
  psiRef: React.Ref<HTMLSpanElement>;
}) {
  const fmt = (n: number, d = 2) => n.toFixed(d);
  return (
    <header
      data-ols-harvest
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gap: 32,
        alignItems: "center",
        padding: "14px 28px",
        background: "linear-gradient(180deg, rgba(10,9,8,0.92) 0%, rgba(10,9,8,0) 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {/* Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap" }}>
        <HeartbeatPulse size={7} />
        <span
          style={{
            fontFamily: MONO,
            fontSize: 10,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: INK_SOFT,
            fontWeight: 500,
          }}
        >
          Ω · Ouroboros · live
        </span>
      </div>

      {/* Center — tracking numbers, faint */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 28,
          fontFamily: MONO,
          fontSize: 10,
          color: MUTED,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        }}
      >
        <span>
          LI <span style={{ color: INK_SOFT, marginLeft: 4 }}>{fmt(m.LI)}</span>
        </span>
        <span>
          CE <span style={{ color: INK_SOFT, marginLeft: 4 }}>{fmt(m.CE * 100, 0)}%</span>
        </span>
        <span>
          Ψ{" "}
          <span ref={psiRef} style={{ color: ACCENT, marginLeft: 4, fontWeight: 600 }}>
            {fmt(m.PS)}
          </span>
        </span>
      </div>

      {/* Right — session counter */}
      <div
        style={{
          fontFamily: MONO,
          fontSize: 10,
          color: MUTED,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        Session&nbsp;{Math.floor(m.dwellSec)}s
      </div>
    </header>
  );
}

// ─── A single cinematic scene ─────────────────────────────────────────
function Scene({
  phaseData,
  idx,
  onActive,
  glitch,
  harvest,
}: {
  phaseData: Phase;
  idx: number;
  onActive: (i: number) => void;
  glitch: number;
  harvest: Harvest;
}) {
  const ref = useRef<HTMLElement>(null);

  // Only track phase changes for the harvest-strip indicator —
  // don't fade scene opacity. The fade was making images on faded
  // sections look black-on-black, and was a major contributor to
  // the previous "messy/hard to follow" feel.
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
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 32px 120px",
        position: "relative",
      }}
      data-phase={phaseData.id}
    >
      <div style={{ maxWidth: 980, margin: "0 auto", width: "100%" }}>
        {/* Phase chyron */}
        <div
          style={{
            fontFamily: MONO,
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            color: MUTED,
            marginBottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 22,
              height: 1,
              background: ACCENT,
            }}
          />
          <span>
            {phaseData.eyebrow} · {phaseData.name}
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: SANS,
            fontWeight: 550,
            fontSize: "clamp(48px, 6.4vw, 112px)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            margin: "0 0 24px",
            color: INK,
            textWrap: "balance" as const,
            maxWidth: "16ch",
            animation: glitch > 0.6 ? `ols-rgb-jitter ${4 + glitch * 4}s ease-in-out infinite` : undefined,
          }}
        >
          <GlitchText intensity={glitch}>{phaseData.headline}</GlitchText>
        </h2>

        {/* Sub */}
        <p
          style={{
            fontFamily: SANS,
            fontSize: 20,
            color: MUTED,
            margin: "0 0 56px",
            fontWeight: 400,
            letterSpacing: "-0.005em",
            fontStyle: "italic",
          }}
        >
          {phaseData.sub}
        </p>

        {/* Body */}
        <p
          style={{
            fontFamily: SANS,
            fontSize: 21,
            lineHeight: 1.6,
            color: INK_SOFT,
            margin: 0,
            maxWidth: "58ch",
            fontWeight: 380,
          }}
        >
          {phaseData.body}
        </p>

        {/* Diagram */}
        {phaseData.diagram?.(harvest)}

        {/* Leakage */}
        <blockquote
          style={{
            margin: "60px 0 0",
            padding: "32px 0 0",
            borderTop: `1px solid ${LINE}`,
            maxWidth: 720,
          }}
        >
          <div
            style={{
              fontFamily: MONO,
              fontSize: 10,
              color: ACCENT,
              letterSpacing: "0.3em",
              marginBottom: 18,
              textTransform: "uppercase",
            }}
          >
            — Leakage —
          </div>
          <p
            style={{
              fontFamily: SANS,
              fontSize: 22,
              lineHeight: 1.5,
              color: INK,
              margin: "0 0 16px",
              fontWeight: 380,
              letterSpacing: "-0.01em",
            }}
          >
            {phaseData.leak}
          </p>
          <cite
            style={{
              fontFamily: MONO,
              fontStyle: "normal",
              fontSize: 11,
              letterSpacing: "0.16em",
              color: MUTED,
              fontWeight: 500,
            }}
          >
            {phaseData.leakCite}
          </cite>
        </blockquote>

        {/* Phase-specific extra (tier table, reading, acceptance) */}
        {phaseData.extra}
      </div>
    </section>
  );
}

// ─── Scene divider — film-cut to black between scenes ────────────────
function SceneDivider() {
  return (
    <div
      style={{
        height: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BG_DEEP,
      }}
      aria-hidden
    >
      <div
        style={{
          width: 1,
          height: 60,
          background: `linear-gradient(180deg, transparent 0%, ${MUTED} 50%, transparent 100%)`,
        }}
      />
    </div>
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
        background: BG_DEEP,
        color: INK_SOFT,
        overflow: "hidden",
        padding: "18px 0",
        borderTop: `1px solid ${LINE}`,
        borderBottom: `1px solid ${LINE}`,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 48,
          whiteSpace: "nowrap",
          animation: "ols-marquee 100s linear infinite",
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: "0.06em",
          fontWeight: 400,
          width: "max-content",
        }}
      >
        {doubled.map((l, i) => (
          <span key={i}>
            {l}
            <span style={{ color: ACCENT, paddingLeft: 12 }}>◇</span>
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
  const psiTargetRef = useRef({ x: 0, y: 0 });
  const psiElRef = useRef<HTMLSpanElement>(null);

  useLoopBack(true);

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

  // Glitch escalates with phase — by Phase 06 the page is heavily disturbed.
  const effectiveGlitch = Math.min(1, 0.4 + phase * 0.13);

  return (
    <div data-ols-root data-phase={phase}>
      <style>{`
        @keyframes ols-pulse {
          0%, 100% { box-shadow: 0 0 12px ${ACCENT}; opacity: 1; }
          50%      { box-shadow: 0 0 20px ${ACCENT}; opacity: 0.7; }
        }
        @keyframes ols-heartbeat {
          0%, 100%  { transform: scale(1);   opacity: 1; }
          20%       { transform: scale(1.4); opacity: 1; }
          35%       { transform: scale(1);   opacity: 0.6; }
          50%       { transform: scale(1.2); opacity: 1; }
          65%       { transform: scale(1);   opacity: 0.6; }
        }
        @keyframes ols-flicker {
          0%, 100% { opacity: 1; }
          92%      { opacity: 1; }
          93%      { opacity: 0.4; }
          94%      { opacity: 1; }
          96%      { opacity: 0.6; }
          97%      { opacity: 1; }
        }
        @keyframes ols-scan-roll {
          0%   { transform: translateY(-2vh); }
          100% { transform: translateY(102vh); }
        }
        @keyframes ols-rgb-jitter {
          0%, 100% { text-shadow: 0 0 0 transparent; }
          20%      { text-shadow: -1px 0 rgba(255,80,80,0.5), 1px 0 rgba(80,180,255,0.5); }
          40%      { text-shadow: 1px 0 rgba(255,80,80,0.5), -1px 0 rgba(80,180,255,0.5); }
          60%      { text-shadow: 0 0 0 transparent; }
        }
        @keyframes ols-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes ols-fadein {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-ols-root] *, [data-ols-root] *::before, [data-ols-root] *::after {
            animation: none !important;
            transition: none !important;
          }
        }

        /* ─── RESPONSIVE — tablet & mobile ──────────────────────────── */

        /* Safety net: no horizontal scroll, ever. */
        [data-ols-root] {
          overflow-x: hidden;
        }

        /* Tablet (≤ 1024px): tighten harvest line + scene padding */
        @media (max-width: 1024px) {
          [data-ols-harvest] {
            grid-template-columns: auto 1fr auto !important;
            gap: 16px !important;
            padding: 12px 20px !important;
          }
          [data-ols-root] section {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }

        /* Mobile (≤ 720px): heavy responsive overhaul */
        @media (max-width: 720px) {
          /* Harvest line: collapse to metrics-only row */
          [data-ols-harvest] {
            grid-template-columns: 1fr !important;
            padding: 10px 16px !important;
            gap: 6px !important;
          }
          [data-ols-harvest] > div:first-child,
          [data-ols-harvest] > div:last-child {
            display: none !important;
          }
          [data-ols-harvest] > div:nth-child(2) {
            gap: 14px !important;
            justify-content: space-between !important;
            flex-wrap: wrap !important;
          }

          /* Scenes: tighter padding, drop forced 100vh */
          [data-ols-root] section {
            padding: 72px 20px !important;
            min-height: auto !important;
          }
          /* Faded scenes: keep readable */
          [data-ols-root] section[data-phase] {
            opacity: 1 !important;
          }

          /* Overture H1 */
          [data-ols-root] h1 {
            font-size: clamp(48px, 13vw, 80px) !important;
            line-height: 0.95 !important;
            margin-top: 16px !important;
            word-break: break-word !important;
          }
          [data-ols-root] h1 + p,
          [data-ols-root] h1 ~ p {
            font-size: clamp(20px, 5vw, 28px) !important;
          }

          /* Phase H2 */
          [data-ols-root] h2 {
            font-size: clamp(36px, 9vw, 56px) !important;
            line-height: 1.0 !important;
            max-width: 100% !important;
          }

          /* Body paragraphs */
          [data-ols-root] section p {
            font-size: 17px !important;
            line-height: 1.55 !important;
            max-width: 100% !important;
          }

          /* LEAKAGE blockquote */
          [data-ols-root] blockquote p {
            font-size: 18px !important;
          }

          /* Tier table: single column stacks */
          [data-ols-tier-table] {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          [data-ols-tier-table] dt {
            padding: 18px 0 4px !important;
            border-top: 1px solid rgba(240,235,226,0.06) !important;
          }
          [data-ols-tier-table] dd {
            padding: 4px 0 !important;
            border-top: none !important;
          }
          [data-ols-tier-table] > *:first-child {
            border-top: none !important;
          }

          /* Live ticker (Phase 04): stack to single column */
          [data-ols-ticker-grid] {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          [data-ols-ticker-grid] > div {
            text-align: left !important;
          }
          [data-ols-ticker-grid] > div > div:nth-child(2) {
            font-size: clamp(56px, 14vw, 84px) !important;
          }

          /* §6 letter: padded tighter */
          [data-ols-letter] {
            padding: 28px 22px !important;
          }

          /* Countdown clock — slightly tamer on small screens */
          [data-ols-countdown-time] {
            font-size: clamp(64px, 18vw, 100px) !important;
          }

          /* SVG figures */
          [data-ols-root] svg {
            max-width: 100% !important;
          }
        }
      `}</style>

      <HarvestLine m={m} psiRef={psiElRef} />
      <Scanlines />

      {/* Rolling scan beam — descends slowly across the viewport */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(180deg, transparent 0%, rgba(255,58,37,0.7) 50%, transparent 100%)`,
          pointerEvents: "none",
          zIndex: 97,
          mixBlendMode: "screen",
          opacity: 0.45,
          animation: "ols-scan-roll 8s linear infinite",
        }}
      />

      {/* ─── OVERTURE — the slow open ─── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 32px",
          position: "relative",
          background: `radial-gradient(ellipse at 50% 40%, rgba(255,58,37,0.04) 0%, transparent 60%)`,
          overflow: "hidden",
        }}
      >
        {/* Ghost photo of an occupant behind the overture text */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <Image
            src="/chair/artifacts/01-mechanized-isolation.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "right center",
              opacity: 0.22,
              filter: "saturate(0.5) contrast(1.1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(10,9,8,0.95) 0%, rgba(10,9,8,0.7) 50%, rgba(10,9,8,0.4) 100%)",
            }}
          />
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.4em",
              color: MUTED,
              marginBottom: 32,
            }}
          >
            Ouroboros Industries LLC · ILS-Ω · 2026 · an apparatus by{" "}
            <A
              to="proto-apparatuses"
              title="Imperial Archive 2197.14 — Proto-Apparatuses: The Social-Media Ancestry"
            >
              A. Selimović
            </A>
          </div>
          <h1
            style={{
              fontFamily: SANS,
              fontWeight: 500,
              fontSize: "clamp(80px, 11vw, 200px)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              margin: "32px 0",
              color: INK,
            }}
          >
            <span style={{ display: "block" }}>
              <GlitchText intensity={effectiveGlitch * 0.7}>The Ouroboros</GlitchText>
            </span>
            <em
              style={{
                display: "block",
                fontStyle: "normal",
                fontWeight: 300,
                color: INK_SOFT,
              }}
            >
              <GlitchText intensity={effectiveGlitch * 0.5}>Life System.</GlitchText>
            </em>
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: "clamp(22px, 2.6vw, 36px)",
              color: INK,
              fontWeight: 380,
              margin: "48px 0 24px",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              maxWidth: "22ch",
            }}
          >
            <GlitchText intensity={effectiveGlitch}>
              Because life should be effortless.
            </GlitchText>
          </p>
          <p
            style={{
              fontFamily: SANS,
              color: MUTED,
              fontSize: 17,
              lineHeight: 1.65,
              margin: "32px 0 0",
              maxWidth: "52ch",
              fontWeight: 380,
              fontStyle: "italic",
            }}
          >
            An apparatus, a portal, an essay, an art-object in six scenes.
            Scroll to descend. Every motion is being counted.
          </p>
          <div
            style={{
              marginTop: 80,
              fontFamily: MONO,
              fontSize: 10,
              color: MUTED,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
            }}
          >
            ↓ begin descent
          </div>
        </div>
      </section>

      <SceneDivider />

      {PHASES.map((p, i) => (
        <React.Fragment key={p.id}>
          <Scene
            phaseData={p}
            idx={i}
            onActive={setPhase}
            glitch={effectiveGlitch}
            harvest={m}
          />
          {i < PHASES.length - 1 && <SceneDivider />}
        </React.Fragment>
      ))}

      {/* Closing — the loop */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 32px",
          background: BG_DEEP,
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 40,
            height: 1,
            background: ACCENT,
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontFamily: SANS,
            fontSize: "clamp(20px, 2.2vw, 28px)",
            color: INK,
            fontWeight: 380,
            letterSpacing: "-0.01em",
            lineHeight: 1.4,
            maxWidth: "32ch",
          }}
        >
          The serpent does not bite its tail. It eats. Slowly. Forever.
        </div>
        <div
          style={{
            marginTop: 40,
            fontFamily: MONO,
            fontSize: 10,
            color: MUTED,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Session yielded {m.PS.toFixed(2)} Ψ across {m.moves} micro-movements
        </div>
      </section>

      <EulaMarquee />

      <CursorTrail target={psiTargetRef} />
    </div>
  );
}
