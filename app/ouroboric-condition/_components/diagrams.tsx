"use client";

// diagrams.tsx — specimen diagrams for the Atlas (ported from atlas/diagrams.jsx).
//   GLYPHS[id]   : tiny static line-mark for a map node (ink on paper).
//   DIAGRAMS[id] : the full performing diagram for a detail plate,
//                  tone-aware (light = paper/ink, dark = sodium glow).
// Authored in a 240×240 viewBox, center (120,120). Motion via useTick;
// every resting (t=0) frame is a complete composition.

import { useMemo } from "react";
import type { CSSProperties, ReactNode } from "react";
import type { Tone } from "./data";
import { useTick, ptOnCircle, L, D, AtlasDefs } from "./shared";

const MF = "var(--atlas-mono),monospace";

interface Pal {
  line: string;
  faint: string;
  accent: string;
  dim: string;
  glow: boolean;
  paper: string;
}
interface DiagramProps {
  size: number;
  tone: Tone;
}
type Diagram = (p: DiagramProps) => ReactNode;

const pal = (tone: Tone): Pal =>
  tone === "dark"
    ? { line: D.ink, faint: D.faint, accent: D.glow, dim: D.dim, glow: true, paper: D.bg }
    : { line: L.ink, faint: L.faint, accent: L.oxide, dim: L.gloss, glow: false, paper: L.paper };
const fx = (c: Pal): CSSProperties =>
  c.glow ? { filter: `drop-shadow(0 0 5px ${c.accent}cc)` } : {};

// ───────────────────────── GLYPHS (map nodes) ─────────────────────────
// stroke uses currentColor; the node sets color + size.
const G = { fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" } as const;
function Svg({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      {children}
    </svg>
  );
}

export const GLYPHS: Record<string, ReactNode> = {
  surplus: (
    <Svg>
      {[
        [30, 28],
        [54, 22],
        [72, 36],
        [24, 52],
        [50, 50],
        [76, 60],
        [38, 74],
        [64, 76],
      ].map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="currentColor" stroke="none" opacity={0.5 + (i % 3) * 0.25} />
      ))}
    </Svg>
  ),
  ouroboros: (
    <Svg>
      <circle cx="50" cy="50" r="32" {...G} strokeDasharray="180 22" strokeDashoffset="11" />
      <circle cx="50" cy="18" r="3.4" fill="currentColor" stroke="none" />
    </Svg>
  ),
  triaxial: (
    <Svg>
      {[90, 210, 330].map((d, i) => {
        const [x, y] = ptOnCircle(50, 50, 34, d);
        return <line key={i} x1="50" y1="50" x2={x} y2={y} {...G} />;
      })}
      <circle cx="50" cy="50" r="5" {...G} />
    </Svg>
  ),
  boredom: (
    <Svg>
      <line x1="16" y1="50" x2="42" y2="50" {...G} />
      <line x1="58" y1="50" x2="84" y2="50" {...G} />
    </Svg>
  ),
  satisfaction: (
    <Svg>
      <path d="M50 18 A32 32 0 1 1 24 34" {...G} />
      <path d="M24 34 l-5 -9 l11 -1" {...G} />
    </Svg>
  ),
  janitor: (
    <Svg>
      <circle cx="50" cy="50" r="30" {...G} strokeDasharray="5 6" />
      <circle cx="40" cy="44" r="3.2" fill="currentColor" stroke="none" />
      <circle cx="60" cy="44" r="3.2" fill="currentColor" stroke="none" />
    </Svg>
  ),
  rogan: (
    <Svg>
      <circle cx="30" cy="50" r="5" fill="currentColor" stroke="none" />
      {[18, 30, 42].map((r, i) => (
        <path key={i} d={`M44 ${50 - r} A${r} ${r} 0 0 1 44 ${50 + r}`} {...G} opacity={1 - i * 0.25} />
      ))}
    </Svg>
  ),
  cult: (
    <Svg>
      {[14, 24, 34].map((r, i) => (
        <circle key={i} cx="50" cy="50" r={r} {...G} opacity={1 - i * 0.22} />
      ))}
      <circle cx="50" cy="50" r="4" fill="currentColor" stroke="none" />
    </Svg>
  ),
  crisis: (
    <Svg>
      <rect x="22" y="22" width="56" height="56" {...G} />
      <line x1="50" y1="22" x2="50" y2="78" {...G} />
      <line x1="22" y1="50" x2="78" y2="50" {...G} />
      <rect x="50" y="50" width="28" height="28" fill="currentColor" stroke="none" opacity="0.18" />
    </Svg>
  ),
  repair: (
    <Svg>
      <path d="M34 30 A28 28 0 0 1 78 46" {...G} />
      <path d="M78 46 l-9 -2 l3 -9" {...G} />
      <path d="M66 70 A28 28 0 0 1 22 54" {...G} />
      <path d="M22 54 l9 2 l-3 9" {...G} />
    </Svg>
  ),
  firstscreen: (
    <Svg>
      <rect x="46" y="28" width="34" height="48" rx="3" {...G} />
      <circle cx="26" cy="52" r="4.5" fill="currentColor" stroke="none" />
      <line x1="31" y1="52" x2="44" y2="52" {...G} strokeDasharray="2 5" />
    </Svg>
  ),
  mortality: (
    <Svg>
      <polyline points="16,50 34,50 42,30 52,70 60,50 84,50" {...G} strokeWidth="2.6" />
    </Svg>
  ),
  custodial: (
    <Svg>
      <rect x="26" y="26" width="48" height="48" {...G} />
      <line x1="26" y1="40" x2="74" y2="40" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      <line x1="26" y1="54" x2="74" y2="54" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      <line x1="26" y1="68" x2="74" y2="68" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
    </Svg>
  ),
  glitch: (
    <Svg>
      <line x1="44" y1="16" x2="44" y2="46" {...G} />
      <line x1="58" y1="50" x2="58" y2="84" {...G} />
      <line x1="40" y1="48" x2="62" y2="48" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
    </Svg>
  ),
  held: (
    <Svg>
      <path d="M30 26 A34 34 0 0 0 30 74" {...G} />
      <path d="M70 26 A34 34 0 0 1 70 74" {...G} />
      <circle cx="50" cy="50" r="6" {...G} />
    </Svg>
  ),
  holding: (
    <Svg>
      <path d="M30 26 A34 34 0 0 0 30 74" {...G} />
      <path d="M70 26 A34 34 0 0 1 70 74" {...G} />
      <circle cx="50" cy="50" r="5" fill="currentColor" stroke="none" />
    </Svg>
  ),
  face: (
    <Svg>
      <ellipse cx="50" cy="50" rx="22" ry="30" {...G} />
      {[40, 50, 60].map((y, i) => (
        <line key={i} x1="34" y1={y} x2="66" y2={y} stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      ))}
    </Svg>
  ),
};

// ───────────────────────── plate helpers ─────────────────────────
function Frame({ size, tone, children }: { size: number; tone: Tone; children: ReactNode }) {
  const c = pal(tone);
  const pre = tone === "dark" ? "pd" : "pl";
  return (
    <svg viewBox="0 0 240 240" width={size} height={size} style={{ display: "block" }}>
      <AtlasDefs idPrefix={pre} tone={tone} />
      {c.glow && <circle cx="120" cy="120" r="110" fill={c.accent} opacity="0.06" />}
      {children}
    </svg>
  );
}
// ring of construction ticks
function RingTicks({ cx = 120, cy = 120, R = 80, every = 15, c }: { cx?: number; cy?: number; R?: number; every?: number; c: Pal }) {
  return Array.from({ length: 360 / every }, (_, k) => {
    const deg = k * every,
      major = deg % 90 === 0;
    const [x1, y1] = ptOnCircle(cx, cy, R - (major ? 7 : 3), deg);
    const [x2, y2] = ptOnCircle(cx, cy, R + (major ? 7 : 3), deg);
    return (
      <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke={c.line} strokeWidth={major ? 0.9 : 0.5} opacity={major ? 0.8 : 0.4} />
    );
  });
}
function Stations({ stations, R = 80, cx = 120, cy = 120, c, active = -1 }: { stations: string[]; R?: number; cx?: number; cy?: number; c: Pal; active?: number }) {
  return stations.map((s, i) => {
    const deg = (360 / stations.length) * i;
    const [nx, ny] = ptOnCircle(cx, cy, R, deg);
    const [lx, ly] = ptOnCircle(cx, cy, R + 22, deg);
    const on = active === i;
    return (
      <g key={i}>
        <circle cx={nx} cy={ny} r={on ? 4.5 : 3} fill={on ? c.accent : c.paper} stroke={c.line} strokeWidth="1" style={on ? fx(c) : {}} />
        <text x={lx} y={ly} fill={on ? c.accent : c.dim} fontSize="7.5" fontFamily={MF} letterSpacing="1" textAnchor="middle" dominantBaseline="middle">
          {s}
        </text>
      </g>
    );
  });
}

// ───────────────────────── DIAGRAMS (plates) ─────────────────────────
function Ouroboros({ size, tone }: DiagramProps) {
  const c = pal(tone),
    t = useTick();
  const rot = ((t / 1000) * 18) % 360,
    sd = ((t / 1000) * 70) % 360;
  const [sx, sy] = ptOnCircle(120, 120, 80, sd);
  return (
    <Frame size={size} tone={tone}>
      <RingTicks c={c} />
      <circle
        cx="120"
        cy="120"
        r="80"
        fill="none"
        stroke={c.line}
        strokeWidth="1.6"
        strokeDasharray={`${2 * Math.PI * 80 * 0.96} ${2 * Math.PI * 80 * 0.04}`}
        strokeDashoffset={2 * Math.PI * 80 * 0.02}
        transform="rotate(-90 120 120)"
        style={fx(c)}
      />
      <circle cx="120" cy="120" r="80" fill="none" stroke={c.accent} strokeWidth="0.6" opacity="0.4" strokeDasharray="1.5 14" transform={`rotate(${rot} 120 120)`} />
      <Stations stations={["SOLICIT", "CHANNEL", "HARVEST", "RETURN"]} c={c} active={Math.floor(t / 1500) % 4} />
      <circle cx={sx} cy={sy} r="3.6" fill={c.accent} style={fx(c)} />
      <circle cx="120" cy="120" r="30" fill={`url(#${tone === "dark" ? "pd" : "pl"}-hatch)`} opacity="0.5" />
      <circle cx="120" cy="120" r="30" fill="none" stroke={c.accent} strokeWidth="0.7" strokeDasharray="4 6" opacity="0.7" />
    </Frame>
  );
}

function MoteField({ size, tone, captured = 0.5 }: DiagramProps & { captured?: number }) {
  const c = pal(tone),
    t = useTick();
  const motes = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => {
        // deterministic fract(sin) hash → a stable pseudo-random scatter
        // (no Math.random in render; the field reads identically, just fixed).
        const h = (n: number) => {
          const x = Math.sin((i + 1) * n) * 43758.5453;
          return x - Math.floor(x);
        };
        return { a: h(12.9898) * 360, r0: 40 + h(78.233) * 70, per: 2600 + h(37.719) * 3600, off: h(94.673) * 5000 };
      }),
    []
  );
  return (
    <Frame size={size} tone={tone}>
      <circle cx="120" cy="120" r="34" fill="none" stroke={c.line} strokeWidth="1" strokeDasharray="3 5" opacity="0.6" />
      {motes.map((m, i) => {
        const ph = ((t + m.off) % m.per) / m.per;
        const r = i / motes.length < captured ? m.r0 - (m.r0 - 32) * ph : m.r0;
        const [x, y] = ptOnCircle(120, 120, r, m.a);
        const cons = Math.max(0, (r - 32) / (m.r0 - 32));
        return <circle key={i} cx={x} cy={y} r={1.4 + cons * 1} fill={c.accent} opacity={0.2 + cons * 0.6} style={cons < 0.3 ? fx(c) : {}} />;
      })}
      <text x="120" y="122" fill={c.dim} fontSize="7" fontFamily={MF} textAnchor="middle">
        CHARGE
      </text>
    </Frame>
  );
}
const Surplus: Diagram = (p) => <MoteField {...p} captured={0.35} />;

const Crisis: Diagram = (p) => {
  const c = pal(p.tone),
    t = useTick();
  // a grid of labor decomposing into microtasks; one cell is "remotely operated"
  return (
    <Frame size={p.size} tone={p.tone}>
      <RingTicks c={c} R={86} every={30} />
      {Array.from({ length: 36 }, (_, k) => {
        const col = k % 6,
          row = (k / 6) | 0;
        const x = 70 + col * 20,
          y = 70 + row * 20;
        const lit = Math.floor(t / 220) % 36 === k;
        return <rect key={k} x={x} y={y} width="14" height="14" fill={lit ? c.accent : "none"} opacity={lit ? 0.8 : 1} stroke={c.line} strokeWidth="0.7" style={lit ? fx(c) : {}} />;
      })}
      <text x="120" y="210" fill={c.dim} fontSize="7.5" fontFamily={MF} textAnchor="middle">
        MICROTASKS · REMOTELY OPERATED
      </text>
    </Frame>
  );
};

function Triaxial({ size, tone }: DiagramProps) {
  const c = pal(tone),
    t = useTick();
  const axes = [
    { d: 0, n: "TIME" },
    { d: 120, n: "BODY" },
    { d: 240, n: "BOND" },
  ];
  const k = Math.floor(t / 1100) % 3;
  return (
    <Frame size={size} tone={tone}>
      {axes.map((a, i) => {
        const [x, y] = ptOnCircle(120, 120, 92, a.d);
        const [lx, ly] = ptOnCircle(120, 120, 104, a.d);
        const on = k === i;
        return (
          <g key={i}>
            <line x1="120" y1="120" x2={x} y2={y} stroke={on ? c.accent : c.line} strokeWidth={on ? 1.6 : 1} style={on ? fx(c) : {}} />
            <circle cx={x} cy={y} r="3" fill={on ? c.accent : c.paper} stroke={c.line} strokeWidth="1" />
            <text x={lx} y={ly} fill={on ? c.accent : c.dim} fontSize="8" fontFamily={MF} textAnchor="middle" dominantBaseline="middle">
              {a.n}
            </text>
          </g>
        );
      })}
      {[34, 22].map((r, i) => (
        <circle key={i} cx="120" cy="120" r={r} fill="none" stroke={c.line} strokeWidth="0.7" opacity={0.5 - i * 0.15} />
      ))}
      <circle cx="120" cy="120" r="6" fill={c.accent} style={fx(c)} />
      <text x="120" y="160" fill={c.dim} fontSize="6.5" fontFamily={MF} textAnchor="middle">
        THE LOOP
      </text>
    </Frame>
  );
}

function Satisfaction({ size, tone }: DiagramProps) {
  const c = pal(tone),
    t = useTick();
  const sd = ((t / 1000) * 150) % 360;
  const [sx, sy] = ptOnCircle(120, 120, 80, sd);
  const prog = (t / 1400) % 1; // a bar that fills and resets — partial gratification
  return (
    <Frame size={size} tone={tone}>
      <RingTicks c={c} />
      <circle cx="120" cy="120" r="80" fill="none" stroke={c.line} strokeWidth="1.4" style={fx(c)} />
      <Stations stations={["KILL", "COLLECT", "UPGRADE", "REPEAT"]} c={c} active={Math.floor(sd / 90) % 4} />
      <circle cx={sx} cy={sy} r="3.6" fill={c.accent} style={fx(c)} />
      <rect x="80" y="118" width="80" height="5" fill="none" stroke={c.line} strokeWidth="0.8" />
      <rect x="80.5" y="118.5" width={79 * prog} height="4" fill={c.accent} opacity="0.85" />
      <text x="120" y="138" fill={c.dim} fontSize="6.5" fontFamily={MF} textAnchor="middle">
        ALMOST
      </text>
    </Frame>
  );
}

function Repair({ size, tone }: DiagramProps) {
  const c = pal(tone),
    t = useTick();
  const sd = ((t / 1000) * 120) % 360;
  const [sx, sy] = ptOnCircle(120, 120, 56, sd);
  return (
    <Frame size={size} tone={tone}>
      <circle cx="120" cy="120" r="86" fill="none" stroke={c.line} strokeWidth="0.7" strokeDasharray="2 7" opacity="0.5" />
      <circle cx="120" cy="120" r="56" fill="none" stroke={c.line} strokeWidth="1.4" style={fx(c)} />
      <Stations stations={["DAMAGE", "REPAIR", "DAMAGE", "REPAIR"]} R={56} c={c} active={Math.floor(sd / 90) % 4} />
      <circle cx={sx} cy={sy} r="3.4" fill={c.accent} style={fx(c)} />
      <text x="120" y="206" fill={c.dim} fontSize="7" fontFamily={MF} textAnchor="middle">
        SECONDARY LOOP · +1 LEVEL
      </text>
    </Frame>
  );
}

function Cult({ size, tone }: DiagramProps) {
  const c = pal(tone),
    t = useTick();
  const pulse = (Math.sin(t / 700) + 1) / 2;
  return (
    <Frame size={size} tone={tone}>
      {[84, 64, 44, 26].map((r, i) => (
        <circle key={i} cx="120" cy="120" r={r} fill="none" stroke={c.line} strokeWidth={i === 3 ? 1.6 : 0.9} opacity={0.35 + i * 0.18} style={i === 3 ? fx(c) : {}} />
      ))}
      <circle cx="120" cy="120" r={26} fill={c.accent} opacity={0.1 + pulse * 0.18} />
      {["BELONG", "DEVOTE", "ENCLOSE"].map((s, i) => {
        const [x, y] = ptOnCircle(120, 120, 100, i * 120);
        return (
          <text key={i} x={x} y={y} fill={c.dim} fontSize="7.5" fontFamily={MF} textAnchor="middle" dominantBaseline="middle">
            {s}
          </text>
        );
      })}
      <circle cx="120" cy="120" r="5" fill={c.accent} style={fx(c)} />
    </Frame>
  );
}

function Boredom({ size, tone }: DiagramProps) {
  const c = pal(tone),
    t = useTick();
  const fill = (t / 1800) % 1; // the apparatus rushing to fill the gap
  return (
    <Frame size={size} tone={tone}>
      <line x1="36" y1="120" x2="98" y2="120" stroke={c.line} strokeWidth="1.6" />
      <line x1="142" y1="120" x2="204" y2="120" stroke={c.line} strokeWidth="1.6" />
      <line x1="98" y1="120" x2={98 + 44 * fill} y2="120" stroke={c.accent} strokeWidth="2.4" style={fx(c)} />
      <line x1="120" y1="104" x2="120" y2="136" stroke={c.line} strokeWidth="0.7" strokeDasharray="2 3" opacity="0.6" />
      <text x="120" y="150" fill={c.dim} fontSize="7.5" fontFamily={MF} textAnchor="middle">
        DEAD AIR
      </text>
      <text x="120" y="96" fill={c.accent} fontSize="7" fontFamily={MF} textAnchor="middle" opacity={0.4 + fill * 0.5}>
        ↳ colonized
      </text>
    </Frame>
  );
}

function Janitor({ size, tone }: DiagramProps) {
  const c = pal(tone),
    t = useTick();
  const blink = t % 4000 > 3850;
  return (
    <Frame size={size} tone={tone}>
      <circle cx="120" cy="116" r="60" fill="none" stroke={c.line} strokeWidth="1.2" strokeDasharray="5 7" style={fx(c)} />
      <ellipse cx="100" cy="104" rx="4" ry={blink ? 0.8 : 4} fill={c.accent} style={fx(c)} />
      <ellipse cx="140" cy="104" rx="4" ry={blink ? 0.8 : 4} fill={c.accent} style={fx(c)} />
      <path d="M104 138 Q120 146 136 138" fill="none" stroke={c.line} strokeWidth="1.4" />
      <text x="120" y="198" fill={c.dim} fontSize="7.5" fontFamily={MF} textAnchor="middle">
        SIMULATED · NO DEMAND
      </text>
    </Frame>
  );
}

function Rogan({ size, tone }: DiagramProps) {
  const c = pal(tone),
    t = useTick();
  return (
    <Frame size={size} tone={tone}>
      <circle cx="70" cy="120" r="7" fill={c.accent} style={fx(c)} />
      {[28, 48, 68, 88].map((r, i) => {
        const ph = (t / 1600 + i / 4) % 1;
        return <path key={i} d={`M82 ${120 - r} A${r} ${r} 0 0 1 82 ${120 + r}`} fill="none" stroke={c.accent} strokeWidth="1.4" opacity={(1 - ph) * 0.8} />;
      })}
      <text x="120" y="208" fill={c.dim} fontSize="7.5" fontFamily={MF} textAnchor="middle">
        HAILED · INTERPELLATED
      </text>
    </Frame>
  );
}

function FirstScreen({ size, tone }: DiagramProps) {
  const c = pal(tone),
    t = useTick();
  const reach = (t / 1600) % 1;
  const hx = 56 + reach * 30;
  return (
    <Frame size={size} tone={tone}>
      <rect x="120" y="78" width="64" height="86" rx="4" fill="none" stroke={c.line} strokeWidth="1.6" style={fx(c)} />
      <rect x="120" y="78" width="64" height="86" rx="4" fill={c.accent} opacity={0.08 + reach * 0.12} />
      <circle cx={hx} cy="121" r="6" fill="none" stroke={c.line} strokeWidth="1.4" />
      <line x1={hx + 7} y1="121" x2="116" y2="121" stroke={c.line} strokeWidth="0.8" strokeDasharray="2 4" opacity="0.7" />
      <text x="120" y="196" fill={c.dim} fontSize="7" fontFamily={MF} textAnchor="middle">
        THE GESTURE · IN FORMATION
      </text>
    </Frame>
  );
}

function Mortality({ size, tone }: DiagramProps) {
  const c = pal(tone),
    t = useTick();
  const x = (t / 22) % 240;
  return (
    <Frame size={size} tone={tone}>
      <line x1="20" y1="120" x2="220" y2="120" stroke={c.line} strokeWidth="0.6" opacity="0.4" />
      <polyline points="20,120 70,120 84,84 100,156 116,120 220,120" fill="none" stroke={c.accent} strokeWidth="1.6" style={fx(c)} />
      <line x1={x} y1="60" x2={x} y2="180" stroke={c.accent} strokeWidth="0.6" opacity="0.5" />
      <text x="120" y="200" fill={c.dim} fontSize="7.5" fontFamily={MF} textAnchor="middle">
        $2,000,000 / YR · NO TERMINUS
      </text>
    </Frame>
  );
}

function Custodial({ size, tone }: DiagramProps) {
  const c = pal(tone);
  return (
    <Frame size={size} tone={tone}>
      <rect x="60" y="60" width="120" height="120" fill="url(#pl-hatch)" opacity="0.35" />
      <rect x="60" y="60" width="120" height="120" fill="none" stroke={c.line} strokeWidth="1" />
      {[88, 116, 144].map((y, i) => (
        <line key={i} x1="60" y1={y} x2="180" y2={y} stroke={c.line} strokeWidth="0.7" opacity="0.4" />
      ))}
      <text x="120" y="48" fill={c.dim} fontSize="7.5" fontFamily={MF} textAnchor="middle">
        DEVALUED · DEPENDED-ON
      </text>
      <text x="120" y="200" fill={c.accent} fontSize="7.5" fontFamily={MF} textAnchor="middle">
        — and it persists —
      </text>
    </Frame>
  );
}

function Glitch({ size, tone }: DiagramProps) {
  const c = pal(tone),
    t = useTick();
  const brk = t % 5000 > 4400; // the feed breaks: the face appears
  return (
    <Frame size={size} tone={tone}>
      {Array.from({ length: 7 }, (_, i) => {
        const y = 60 + i * 18;
        const off = brk && i === 3 ? 14 : 0;
        return (
          <line key={i} x1={40 + off} y1={y} x2={200 + off} y2={y} stroke={i === 3 && brk ? c.accent : c.line} strokeWidth={i === 3 && brk ? 1.6 : 1} opacity={i === 3 && brk ? 1 : 0.5} style={i === 3 && brk ? fx(c) : {}} />
        );
      })}
      {brk && <ellipse cx="120" cy="114" rx="13" ry="18" fill="none" stroke={c.accent} strokeWidth="1.2" style={fx(c)} />}
      <text x="120" y="200" fill={c.dim} fontSize="7" fontFamily={MF} textAnchor="middle">
        {brk ? "A FACE — UNRENDERABLE" : "THE FEED NEVER BREAKS"}
      </text>
    </Frame>
  );
}

function Cupped({ size, tone, filled, label }: DiagramProps & { filled?: boolean; label: string }) {
  const c = pal(tone);
  return (
    <Frame size={size} tone={tone}>
      <path d="M78 56 A70 70 0 0 0 78 184" fill="none" stroke={c.line} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M162 56 A70 70 0 0 1 162 184" fill="none" stroke={c.line} strokeWidth="1.8" strokeLinecap="round" />
      {filled ? <circle cx="120" cy="120" r="13" fill={c.accent} opacity="0.8" /> : <circle cx="120" cy="120" r="13" fill="none" stroke={c.accent} strokeWidth="1.6" />}
      <text x="120" y="206" fill={c.dim} fontSize="8" fontFamily={MF} textAnchor="middle">
        {label}
      </text>
    </Frame>
  );
}
const Held: Diagram = (p) => <Cupped {...p} filled label="MAINTAINED, NOT EXTRACTED" />;
const Holding: Diagram = (p) => <Cupped {...p} filled label="LEFT IN HER OWN HANDS" />;

function Face({ size, tone }: DiagramProps) {
  const c = pal(tone);
  return (
    <Frame size={size} tone={tone}>
      <ellipse cx="120" cy="116" rx="52" ry="68" fill="url(#pl-hatch)" opacity="0.18" />
      <ellipse cx="120" cy="116" rx="52" ry="68" fill="none" stroke={c.line} strokeWidth="1.4" />
      {/* the grid tries and fails to render it */}
      {[80, 100, 120, 140, 160].map((y, i) => (
        <line key={i} x1="58" y1={y} x2="182" y2={y} stroke={c.accent} strokeWidth="0.6" opacity="0.3" />
      ))}
      <text x="120" y="208" fill={c.dim} fontSize="7.5" fontFamily={MF} textAnchor="middle">
        EXCEEDS THE PROFILE
      </text>
    </Frame>
  );
}

export const DIAGRAMS: Record<string, Diagram> = {
  surplus: Surplus,
  ouroboros: Ouroboros,
  triaxial: Triaxial,
  boredom: Boredom,
  satisfaction: Satisfaction,
  janitor: Janitor,
  rogan: Rogan,
  cult: Cult,
  crisis: Crisis,
  repair: Repair,
  firstscreen: FirstScreen,
  mortality: Mortality,
  custodial: Custodial,
  glitch: Glitch,
  held: Held,
  holding: Holding,
  face: Face,
};
