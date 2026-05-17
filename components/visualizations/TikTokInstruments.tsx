"use client";

import { useState } from "react";
import { M, SvgM } from "@/components/ui/Math";

/**
 * TikTok worked example — six panels, one per instrument.
 *
 * Each panel shows how the §3 instrument operates on TikTok specifically.
 * Diagrams are simple line drawings — they convey one structural relation;
 * the prose does the explanatory work. Not infographics, not screenshots
 * of TikTok's interface. The analysis is anatomical, not moralistic.
 */

interface Panel {
  numeral: string;
  slug: string;
  name: string;
  mechanism: string;
  prose: React.ReactNode;
  mathSection: string;
  mechanismPlate: string;
  Diagram: React.ComponentType;
}

const PANELS: Panel[] = [
  {
    numeral: "I.",
    slug: "surplus",
    name: "libidinal surplus",
    mechanism: "the FYP as an exploration/exploitation balance",
    prose: (
      <>
        TikTok's <span className="font-mono">For You Page</span> maintains a
        balance between content that matches the user's inferred preferences
        (exploitation) and content that probes preference uncertainty
        (exploration). The libidinal surplus is the expected reward in excess
        of baseline — the cumulative yield the platform extracts from this
        balance, decomposed across the four registers depending on which
        content categories the user's engagement profile leans into. The FYP
        is the operating apparatus that produces <M>{String.raw`\Sigma(T)`}</M>.
      </>
    ),
    mathSection: "#3-the-six-instruments",
    mechanismPlate: "/closed-loop/the-dynamics/surplus",
    Diagram: FYPDiagram,
  },
  {
    numeral: "II.",
    slug: "chrono-debt",
    name: "chrono-debt spectrum",
    mechanism: "the 15-second video as the unit of foreclosed pause",
    prose: (
      <>
        TikTok's videos are ~7–60 seconds. The auto-advance compresses
        inter-stimulus intervals to near-zero — the swipe down is the next
        stimulus. The pre-closure analog would be long-form video, where
        natural pauses between scenes or chapters offer reflective windows.
        TikTok's vertical scroll architecture is purpose-built to remove
        these. The chrono-debt spectrum, when computed against TikTok's
        survival function, fills out across every <M>{String.raw`\tau`}</M>{" "}
        below the typical session length.
      </>
    ),
    mathSection: "#3-the-six-instruments",
    mechanismPlate: "/closed-loop/the-dynamics/chrono-debt",
    Diagram: VideoTickDiagram,
  },
  {
    numeral: "III.",
    slug: "libidinal-routing",
    name: "libidinal routing",
    mechanism: "category-blurring through interleaved content",
    prose: (
      <>
        TikTok's content categories interleave through the FYP — political
        content, lifestyle content, intimate confessional content, and
        product placement appear in adjacent slots. The Subject, Citizen,
        Person, and Consumer registers are addressed through the same
        delivery surface in seconds. The cross-register mutual information{" "}
        <M>{String.raw`I(u^i; u^j)`}</M> grows precisely
        because the engagement signal can't disentangle which register a
        given swipe belongs to.
      </>
    ),
    mathSection: "#3-the-six-instruments",
    mechanismPlate: "/closed-loop/the-dynamics/libidinal-routing",
    Diagram: RoutingDiagram,
  },
  {
    numeral: "IV.",
    slug: "metric-superego",
    name: "metric superego",
    mechanism: "the visible like/view count as ν_u shaper",
    prose: (
      <>
        TikTok displays like counts, view counts, share counts, and saves as
        primary overlays on every video. The creator side has analytics
        dashboards. The metric is the same on both ends of the platform.{" "}
        <M>{String.raw`\nu_u`}</M> — the user's self-evaluative
        distribution — converges toward whatever produces a high count, and
        the count IS the platform's reward-induced distribution{" "}
        <M>{String.raw`\pi_{\hat{R}}`}</M> made visible. The
        D_KL collapse is not hidden — it is the platform's UX.
      </>
    ),
    mathSection: "#3-the-six-instruments",
    mechanismPlate: "/closed-loop/the-dynamics/metric-superego",
    Diagram: MetricOverlayDiagram,
  },
  {
    numeral: "V.",
    slug: "somatic-optimization",
    name: "somatic optimization",
    mechanism: "the vertical scroll thumb as differential dN/dt",
    prose: (
      <>
        The vertical scroll-with-thumb gesture is the apparatus's chosen
        differential. The body's micro-motor activity — the thumb's vertical
        flick — is the only somatic act the platform observes, and it is the
        act the platform optimizes against. The marked point process{" "}
        <M>{String.raw`dN^i_t`}</M> is, on TikTok, almost
        literally the thumb's contact events with the screen. Deliberative
        choice does not enter. The hand is the integrand.
      </>
    ),
    mathSection: "#3-the-six-instruments",
    mechanismPlate: "/closed-loop/the-dynamics/somatic-optimization",
    Diagram: ThumbScrollDiagram,
  },
  {
    numeral: "VI.",
    slug: "captured-resonance",
    name: "captured resonance",
    mechanism: "sound + scroll as paired oscillators",
    prose: (
      <>
        TikTok's audio is short, looping, and synchronized to scroll
        boundaries — every video has a sound, and sounds chain across videos
        so the user's auditory rhythm entrains to the swipe rhythm. The
        Kuramoto coupling <M>{String.raw`K_{bm}`}</M> between
        the body's attentional oscillation and the platform's delivery phase
        is reinforced through the paired auditory–visual structure. The
        platform's policy can drive K_bm above threshold simply by choosing
        sound boundaries that align with scroll cadence.
      </>
    ),
    mathSection: "#3-the-six-instruments",
    mechanismPlate: "/closed-loop/the-dynamics/captured-resonance",
    Diagram: ResonanceDiagram,
  },
];

export function TikTokInstruments() {
  return (
    <div className="space-y-2xl">
      {PANELS.map((panel) => (
        <InstrumentPanel key={panel.slug} panel={panel} />
      ))}
    </div>
  );
}

function InstrumentPanel({ panel }: { panel: Panel }) {
  const [expanded, setExpanded] = useState(false);
  const { Diagram } = panel;
  return (
    <section className="bg-paper-95 border border-ink-50 p-md">
      <header className="flex items-baseline justify-between mb-sm">
        <h2 className="font-mono font-medium text-md text-ink-90">
          {panel.name}
        </h2>
        <span className="font-mono text-xs text-ink-50">{panel.numeral}</span>
      </header>
      <p className="font-serif italic text-md text-ink-70 mb-md">
        {panel.mechanism}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="block w-full focus:outline-none"
        aria-expanded={expanded}
        aria-label={`Toggle expanded view of ${panel.name} diagram`}
      >
        <div
          className={
            expanded
              ? "transition-all duration-200 max-h-[400px]"
              : "transition-all duration-200 max-h-[180px] overflow-hidden"
          }
          style={{ background: "var(--color-paper)" }}
        >
          <Diagram />
        </div>
      </button>

      <p className="font-serif text-base text-ink-90 leading-[1.55] mt-md max-w-[var(--measure)]">
        {panel.prose}
      </p>

      <div className="mt-sm font-mono text-xs">
        <a
          href={`/the-mathematics${panel.mathSection}`}
          className="text-ink-70 hover:text-oxblood transition-colors duration-100"
        >
          ↗ the formal statement
        </a>
        <span className="text-ink-50 mx-xs">·</span>
        <a
          href={panel.mechanismPlate}
          className="text-ink-70 hover:text-oxblood transition-colors duration-100"
        >
          ↗ the mechanism plate
        </a>
      </div>
    </section>
  );
}

/* ─────────────── Diagrams ─────────────── */

const DIAGRAM_W = 540;
const DIAGRAM_H = 160;

function DiagramFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox={`0 0 ${DIAGRAM_W} ${DIAGRAM_H}`}
      className="w-full h-auto"
      style={{ maxHeight: "180px" }}
      preserveAspectRatio="xMidYMid meet"
    >
      {children}
    </svg>
  );
}

// I. FYP — explore/exploit balance as a feedback loop
function FYPDiagram() {
  return (
    <DiagramFrame>
      {/* user */}
      <circle cx={80} cy={80} r={26} fill="none" stroke="var(--color-ink-90)" strokeWidth={1} />
      <text x={80} y={84} textAnchor="middle" fontFamily="var(--font-serif)" fontSize={11} fontStyle="italic" fill="var(--color-ink-90)">user</text>
      {/* arrow user → engagement */}
      <path d="M 110 70 Q 175 40 240 65" fill="none" stroke="var(--color-ink-90)" strokeWidth={1} markerEnd="url(#fyp-ar)" />
      <text x={175} y={42} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={9} fill="var(--color-ink-70)" letterSpacing={0.5}>swipe</text>
      {/* engagement */}
      <rect x={240} y={50} width={120} height={50} fill="none" stroke="var(--color-ink-90)" strokeWidth={1} />
      <text x={300} y={73} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={10} fill="var(--color-ink-90)">FYP algorithm</text>
      <text x={300} y={88} textAnchor="middle" fontFamily="var(--font-serif)" fontStyle="italic" fontSize={9} fill="var(--color-ink-70)">exploit ↔ explore</text>
      {/* arrows: exploit (oxblood) + explore (ink) */}
      <path d="M 365 65 Q 420 50 460 80" fill="none" stroke="var(--color-oxblood)" strokeWidth={1.5} markerEnd="url(#fyp-ar-ox)" />
      <text x={430} y={46} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={9} fill="var(--color-oxblood)">exploit</text>
      <path d="M 365 85 Q 420 130 460 110" fill="none" stroke="var(--color-ink-90)" strokeWidth={1} strokeDasharray="3 3" markerEnd="url(#fyp-ar)" />
      <text x={430} y={138} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={9} fill="var(--color-ink-70)">explore</text>
      {/* next video */}
      <rect x={460} y={70} width={60} height={40} fill="var(--color-paper-95)" stroke="var(--color-ink-90)" strokeWidth={1} />
      <SvgM x={460} y={82} w={60} h={16} align="center" color="var(--color-ink-90)" size="10px">
        {String.raw`s_{t+1}`}
      </SvgM>
      {/* feedback loop back */}
      <path d="M 490 110 Q 490 145 80 115 L 80 106" fill="none" stroke="var(--color-ink-70)" strokeWidth={0.8} strokeDasharray="2 3" markerEnd="url(#fyp-ar-dim)" />
      <defs>
        <marker id="fyp-ar" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={6} markerHeight={6} orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--color-ink-90)" />
        </marker>
        <marker id="fyp-ar-ox" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={6} markerHeight={6} orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--color-oxblood)" />
        </marker>
        <marker id="fyp-ar-dim" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={6} markerHeight={6} orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--color-ink-70)" />
        </marker>
      </defs>
    </DiagramFrame>
  );
}

// II. Chrono-debt — dense sequence of short rectangles vs sparse long ones
function VideoTickDiagram() {
  const baselineWidths = [60, 80, 70, 90];
  const tiktokWidths = Array(18).fill(20);
  return (
    <DiagramFrame>
      {/* Baseline lane */}
      <text x={10} y={50} fontFamily="var(--font-mono)" fontSize={9} fill="var(--color-ink-70)">baseline (long-form)</text>
      {baselineWidths.reduce<{ x: number; rects: React.ReactNode[] }>((acc, w, i) => {
        const x = acc.x;
        acc.rects.push(
          <rect key={`b-${i}`} x={x} y={60} width={w - 4} height={20} fill="none" stroke="var(--color-ink-90)" strokeWidth={0.8} />
        );
        acc.x += w + 8;
        return acc;
      }, { x: 10, rects: [] }).rects}
      {/* TikTok lane */}
      <text x={10} y={108} fontFamily="var(--font-mono)" fontSize={9} fill="var(--color-oxblood)">TikTok FYP</text>
      {tiktokWidths.map((w, i) => (
        <rect key={`t-${i}`} x={10 + i * 22} y={118} width={w - 2} height={20} fill="var(--color-oxblood)" opacity={0.7} />
      ))}
      {/* Time axis */}
      <line x1={10} y1={150} x2={520} y2={150} stroke="var(--color-ink-50)" strokeWidth={0.6} />
      <text x={265} y={158} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={9} fill="var(--color-ink-70)">t →</text>
    </DiagramFrame>
  );
}

// III. Routing — four register nodes with crossed arrows
function RoutingDiagram() {
  const xs = [120, 220, 320, 420];
  const labels = ["S", "C", "P", "K"];
  const names = ["politics", "lifestyle", "intimacy", "shopping"];
  return (
    <DiagramFrame>
      {xs.map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={50} r={18} fill="var(--color-paper-95)" stroke="var(--color-ink-90)" strokeWidth={1} />
          <text x={x} y={54} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={11} fill="var(--color-ink-90)">{labels[i]}</text>
          <text x={x} y={84} textAnchor="middle" fontFamily="var(--font-serif)" fontSize={9} fontStyle="italic" fill="var(--color-ink-70)">{names[i]}</text>
        </g>
      ))}
      {/* crossed arrows between adjacent + non-adjacent registers */}
      {[[0,1],[1,2],[2,3],[0,2],[1,3],[0,3]].map(([a,b], i) => {
        const x1 = xs[a], x2 = xs[b];
        const my = 130 + Math.abs(b-a) * 5;
        return (
          <path key={i} d={`M ${x1} 110 Q ${(x1+x2)/2} ${my} ${x2} 110`} fill="none" stroke="var(--color-oxblood)" strokeWidth={0.8} opacity={0.6} />
        );
      })}
      <text x={270} y={150} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={9} fill="var(--color-ink-70)">cross-register coupling via interleaved FYP slots</text>
    </DiagramFrame>
  );
}

// IV. Metric overlay — like/view counts visualized
function MetricOverlayDiagram() {
  return (
    <DiagramFrame>
      {/* phone frame */}
      <rect x={200} y={20} width={140} height={120} rx={4} fill="var(--color-paper-95)" stroke="var(--color-ink-90)" strokeWidth={1} />
      {/* user profile circle */}
      <circle cx={235} cy={50} r={9} fill="none" stroke="var(--color-ink-90)" strokeWidth={0.8} />
      {/* metric counts stacked on right */}
      <text x={325} y={45} textAnchor="end" fontFamily="var(--font-mono)" fontSize={10} fill="var(--color-oxblood)">♥ 1.2M</text>
      <text x={325} y={62} textAnchor="end" fontFamily="var(--font-mono)" fontSize={10} fill="var(--color-oxblood)">↺ 84K</text>
      <text x={325} y={79} textAnchor="end" fontFamily="var(--font-mono)" fontSize={10} fill="var(--color-oxblood)">⊕ 12K</text>
      {/* central "value" label */}
      <text x={270} y={120} textAnchor="middle" fontFamily="var(--font-serif)" fontStyle="italic" fontSize={11} fill="var(--color-ink-90)">value = count</text>
      {/* arrow from user to metrics */}
      <path d="M 50 80 Q 130 80 195 80" fill="none" stroke="var(--color-ink-70)" strokeWidth={0.8} strokeDasharray="2 3" markerEnd="url(#metric-ar)" />
      <SvgM x={90} y={60} w={60} h={14} align="center" color="var(--color-ink-70)" size="10px">
        {String.raw`\nu_u(t)`}
      </SvgM>
      <SvgM x={90} y={84} w={60} h={14} align="center" color="var(--color-oxblood)" size="10px">
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: "3px" }}>
          <span style={{ fontFamily: "var(--font-mono)" }}>→</span>
          <M>{String.raw`\pi_{\hat{R}}`}</M>
        </span>
      </SvgM>
      <defs>
        <marker id="metric-ar" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={6} markerHeight={6} orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--color-ink-70)" />
        </marker>
      </defs>
    </DiagramFrame>
  );
}

// V. Thumb scroll — vertical phone with scroll indicator
function ThumbScrollDiagram() {
  return (
    <DiagramFrame>
      {/* phone frame */}
      <rect x={230} y={20} width={80} height={120} rx={8} fill="var(--color-paper-95)" stroke="var(--color-ink-90)" strokeWidth={1} />
      {/* scroll arrows (up/down) */}
      <path d="M 270 50 L 270 95" stroke="var(--color-ink-90)" strokeWidth={1.5} />
      <path d="M 262 60 L 270 50 L 278 60" fill="none" stroke="var(--color-ink-90)" strokeWidth={1.5} />
      <path d="M 262 85 L 270 95 L 278 85" fill="none" stroke="var(--color-ink-90)" strokeWidth={1.5} />
      {/* thumb (semi-circle at bottom) */}
      <path d="M 250 130 Q 270 110 290 130" fill="none" stroke="var(--color-oxblood)" strokeWidth={1.8} />
      <text x={270} y={158} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={9} fill="var(--color-oxblood)">thumb</text>
      {/* event ticks below — dN^i_t */}
      <SvgM x={70} y={40} w={80} h={16} align="left" color="var(--color-ink-70)" size="11px">
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: "3px" }}>
          <M>{String.raw`dN^i_t`}</M>
          <span style={{ fontFamily: "var(--font-mono)" }}>=</span>
        </span>
      </SvgM>
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={70 + i * 10} y={60} width={2} height={16} fill="var(--color-ink-90)" />
      ))}
      <text x={70} y={100} fontFamily="var(--font-serif)" fontStyle="italic" fontSize={10} fill="var(--color-ink-70)">somatic micro-events</text>
      <text x={70} y={120} fontFamily="var(--font-serif)" fontStyle="italic" fontSize={10} fill="var(--color-ink-70)">= the body's flicks</text>
    </DiagramFrame>
  );
}

// Precomputed wave paths — kept at module level so SSR and client emit
// identical attribute strings. Hydration warnings on these go away.
const WAVE_BODY = Array.from({ length: 100 }, (_, i) => {
  const x = 30 + i * 4.8;
  const y = 60 + Math.sin(i * 0.25) * 15;
  return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(3)}`;
}).join(" ");

const WAVE_MEDIUM = Array.from({ length: 100 }, (_, i) => {
  const x = 30 + i * 4.8;
  const phaseShift =
    i < 30 ? Math.PI / 2 : (0.2 * (30 - i)) / 30 * Math.PI;
  const y = 110 + Math.sin(i * 0.25 + phaseShift) * 15;
  return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(3)}`;
}).join(" ");

// VI. Captured resonance — two oscillating waveforms phase-locking
function ResonanceDiagram() {
  return (
    <DiagramFrame>
      <SvgM x={30} y={20} w={120} h={16} align="left" color="var(--color-ink-90)" size="11px">
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: "4px" }}>
          <M>{String.raw`\varphi_b`}</M>
          <span style={{ fontFamily: "var(--font-mono)" }}>· body</span>
        </span>
      </SvgM>
      <path d={WAVE_BODY} fill="none" stroke="var(--color-ink-90)" strokeWidth={1.2} />
      <SvgM x={30} y={138} w={140} h={16} align="left" color="var(--color-oxblood)" size="11px">
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: "4px" }}>
          <M>{String.raw`\varphi_m`}</M>
          <span style={{ fontFamily: "var(--font-mono)" }}>· sound/scroll</span>
        </span>
      </SvgM>
      <path d={WAVE_MEDIUM} fill="none" stroke="var(--color-oxblood)" strokeWidth={1.2} />
      {/* lock marker after some point */}
      <line x1={250} y1={45} x2={250} y2={130} stroke="var(--color-ink-50)" strokeDasharray="2 3" strokeWidth={0.6} />
      <text x={255} y={42} fontFamily="var(--font-mono)" fontSize={9} fill="var(--color-ink-70)">phase lock</text>
    </DiagramFrame>
  );
}
