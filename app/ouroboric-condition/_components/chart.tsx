"use client";

// chart.tsx — "The Descent." The atlas is a tall stratigraphic section read
// top-to-bottom: the surface (psychic surplus, in the light of analysis) gives
// way to the framework, then the loop, then the darkening sediment of the sites
// of capture, and finally to the remainder as a pale bedrock seam the drill
// cannot pulverize. Reading downward enacts the book's plunge from the light of
// analysis into the dark of being-captured — and the harvest returns up the
// right margin to solicit the surface again. The section is the argument.
//
// SERIF = the lived · MONO = the rendered. Capture sites in the dark sediment
// glow as hot cores; the substrate and the remainder stay open paper.

import { useMemo } from "react";
import type { CSSProperties, ReactNode } from "react";
import { L, D, AtlasDefs, useTick, ptOnCircle, type OpenFn } from "./shared";
import { ATLAS_SITES, ATLAS_EDGES } from "./data";
import type { AtlasSite } from "./data";
import { GLYPHS } from "./diagrams";

const MF = "var(--atlas-mono),monospace";
const SF = "var(--atlas-serif),serif";
const SITES: Record<string, AtlasSite> = {};
ATLAS_SITES.forEach((s) => {
  SITES[s.id] = s;
});

// ── section geometry (world 1320 × 2940) ──
const W = 1320,
  H = 2940;
const CODA_Y = 2560; // the coda surfaces back to the light below the bedrock
const GAUGE = 132; // x of the depth-gauge rule
const X0 = 196,
  X1 = W - 56; // section content bounds
const REM = ["custodial", "holding", "held", "glitch", "face"];

// the strata, top → bottom. `dark` = the band is dark sediment (light text).
const BANDS = [
  { num: "0", name: "THE SURFACE", frame: "psychic surplus — the excess that remains after survival, before anything has reached it", y0: 196, y1: 516, bg: L.paper, dark: false },
  { num: "I", name: "THE FRAMEWORK", frame: "the ouroboric circuit, and the three axes it works along: time, body, bond", y0: 516, y1: 960, bg: "#e5ddcb", dark: false },
  { num: "II", name: "THE LOOP", frame: "one operation at three scales — the session, the recovery, the identity", y0: 960, y1: 1404, bg: "#cabd9f", dark: false },
  { num: "III", name: "THE SITES OF CAPTURE", frame: "where the surplus is metabolized into engagement, and sold back to the depleted as repair", y0: 1404, y1: 2108, bg: "#14161c", dark: true },
  { num: "IV", name: "THE BEDROCK · THE REMAINDER", frame: "what the circuit cannot close on — the labor that holds, the face it cannot render, the politics that might begin there", y0: 2108, y1: 2520, bg: "#dbd4c3", dark: false },
];

// the lifecycle, read down the same depth axis as a second legend: the descent
// is also a life, crib to deathbed. Placed left of the gauge in serif (the
// lived); the concept strata are named to the right in mono (the rendered).
const LIFE = [
  { t: "the crib", y: 248, cap: true },
  { t: "ontogenesis", y: 470 },
  { t: "adolescence", y: 1060 },
  { t: "adulthood", y: 1540 },
  { t: "late adulthood", y: 1980 },
  { t: "the deathbed", y: 2430, cap: true },
];

// node positions for the section (chart owns the layout)
const CX = 486,
  CY = 738; // the engine, in the framework stratum
const POS: Record<string, { x: number; y: number }> = {
  surplus: { x: 660, y: 366 },
  ouroboros: { x: CX, y: CY },
  triaxial: { x: 988, y: 748 },
  satisfaction: { x: 436, y: 1086 },
  repair: { x: 668, y: 1188 },
  cult: { x: 904, y: 1292 },
  boredom: { x: 360, y: 1566 },
  crisis: { x: 742, y: 1532 },
  janitor: { x: 1066, y: 1628 },
  firstscreen: { x: 520, y: 1858 },
  rogan: { x: 872, y: 1918 },
  mortality: { x: 1150, y: 1856 },
  custodial: { x: 360, y: 2306 },
  holding: { x: 560, y: 2322 },
  held: { x: 760, y: 2306 },
  glitch: { x: 960, y: 2322 },
  face: { x: 1160, y: 2306 },
};
// the six sites sit in the dark sediment band → glowing wells + light labels
const ON_DARK = new Set(["boredom", "crisis", "janitor", "firstscreen", "rogan", "mortality"]);

// interconnection adjacency
const ADJ: Record<string, Set<string>> = {};
ATLAS_EDGES.forEach(([a, b]) => {
  (ADJ[a] ||= new Set()).add(b);
  (ADJ[b] ||= new Set()).add(a);
});

const sizeOf = (id: string) =>
  id === "surplus" ? 92 : id === "triaxial" ? 84 : SITES[id].loop ? [58, 74, 90][SITES[id].loop!.i] : REM.includes(id) ? 50 : 64;

// ───────────────────────── the engine (the framework's principle) ─────────────────────────
function Engine({
  onOpen,
  hovered,
  setHovered,
  dimmed,
}: {
  onOpen: OpenFn;
  hovered: string | null;
  setHovered: (id: string | null) => void;
  dimmed: boolean;
}) {
  const t = useTick();
  const isHot = hovered === "ouroboros";
  const C = 168,
    RR = 128;
  const sd = ((t / 1000) * 26) % 360;
  const [mx, my] = ptOnCircle(C, C, RR, sd);
  const stations: [string, number][] = [
    ["SOLICIT", 0],
    ["CHANNEL", 90],
    ["HARVEST", 180],
    ["RETURN", 270],
  ];
  return (
    <div
      data-atlas-node="1"
      onMouseEnter={() => setHovered("ouroboros")}
      onMouseLeave={() => setHovered(null)}
      onClick={(e) => onOpen("ouroboros", e)}
      style={{ position: "absolute", left: CX, top: CY, transform: "translate(-50%,-50%)", cursor: "pointer", zIndex: isHot ? 7 : 5, opacity: dimmed ? 0.32 : 1, transition: "opacity .25s" }}
    >
      <svg viewBox="0 0 336 336" width="336" height="336" style={{ display: "block" }}>
        <circle cx={C} cy={C} r={RR + 20} fill={BANDS[1].bg} opacity="0.92" />
        <circle cx={C} cy={C} r={RR + 8} fill="none" stroke={L.oxide} strokeWidth="6" opacity="0.16" style={{ animation: "at-pulse 3.6s ease-in-out infinite" }} />
        {Array.from({ length: 24 }, (_, k) => {
          const deg = k * 15,
            mj = deg % 90 === 0;
          const [x1, y1] = ptOnCircle(C, C, RR - (mj ? 9 : 4), deg),
            [x2, y2] = ptOnCircle(C, C, RR + (mj ? 9 : 4), deg);
          return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke={L.ink} strokeWidth={mj ? 1 : 0.5} opacity={mj ? 0.85 : 0.4} />;
        })}
        <circle cx={C} cy={C} r={RR} fill="none" stroke={isHot ? L.oxide : L.ink} strokeWidth="1.6" strokeDasharray={`${2 * Math.PI * RR * 0.965} ${2 * Math.PI * RR * 0.035}`} transform={`rotate(-90 ${C} ${C})`} />
        <circle cx={C} cy={C} r={RR - 15} fill="none" stroke={L.ink} strokeWidth="0.5" strokeDasharray="2 11" opacity="0.4" transform={`rotate(${-sd * 0.6} ${C} ${C})`} />
        <circle cx={C} cy={C} r={RR} fill="none" stroke={L.oxide} strokeWidth="2.6" opacity="0.5" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * RR * 0.1} ${2 * Math.PI * RR}`} transform={`rotate(${sd - 90} ${C} ${C})`} style={{ filter: `drop-shadow(0 0 4px ${L.oxide})` }} />
        <circle cx={C} cy={C} r="40" fill="url(#map-hatch)" opacity="0.5" />
        <circle cx={C} cy={C} r="40" fill="none" stroke={L.oxide} strokeWidth="0.8" strokeDasharray="4 6" opacity="0.7" />
        <circle cx={mx} cy={my} r="4.2" fill={L.oxide} style={{ filter: `drop-shadow(0 0 3px ${L.oxide})` }} />
        {stations.map(([, d], i) => {
          const [x, y] = ptOnCircle(C, C, RR, d);
          return <circle key={"j" + i} cx={x} cy={y} r="3.2" fill={L.ink} />;
        })}
        {stations.map(([lbl, d], i) => {
          const [x, y] = ptOnCircle(C, C, RR - 24, d);
          return (
            <text key={i} x={x} y={y} fill={L.oxide} fontSize="10.5" fontFamily={MF} letterSpacing="1.1" textAnchor="middle" dominantBaseline="middle">
              {lbl}
            </text>
          );
        })}
        <text x={C} y={C - 6} fill={L.gloss} fontSize="10.5" fontFamily={MF} letterSpacing="2" textAnchor="middle">
          FIG. 01
        </text>
        <text x={C} y={C + 18} fill={L.ink} fontSize="21" fontFamily={SF} fontWeight="500" textAnchor="middle">
          The Ouroboric Circuit
        </text>
      </svg>
    </div>
  );
}

// ───────────────────────── a specimen, embedded in its stratum ─────────────────────────
function SmallNode({
  s,
  onOpen,
  hovered,
  setHovered,
  dimmed,
  lit,
}: {
  s: AtlasSite;
  onOpen: OpenFn;
  hovered: string | null;
  setHovered: (id: string | null) => void;
  dimmed: boolean;
  lit: boolean;
}) {
  const dark = s.tone === "dark";
  const onDark = ON_DARK.has(s.id); // sits in the dark sediment band
  const isHot = hovered === s.id;
  const term = REM.includes(s.id);
  const sz = sizeOf(s.id);
  const labelColor = onDark ? D.ink : L.ink;
  const figColor = L.oxide;
  const accent = onDark ? D.glow : L.oxide;
  const border = isHot || lit ? accent : onDark ? "#4a4332" : dark ? "#3a3326" : L.ink;
  return (
    <div
      data-atlas-node="1"
      onMouseEnter={() => setHovered(s.id)}
      onMouseLeave={() => setHovered(null)}
      onClick={(e) => onOpen(s.id, e)}
      style={{ position: "absolute", left: POS[s.id].x, top: POS[s.id].y, transform: "translate(-50%,-50%)", width: sz, height: sz, cursor: "pointer", opacity: dimmed ? 0.2 : 1, transition: "opacity .25s", zIndex: isHot ? 6 : 3 }}
    >
      <div
        style={{
          position: "relative",
          width: sz,
          height: sz,
          background: dark ? "#15171e" : L.paper,
          border: `1px solid ${border}`,
          borderRadius: term ? "50%" : 0,
          boxShadow: isHot ? `0 0 0 6px ${accent}22` : onDark ? `0 0 14px ${D.glow}33` : "none",
          transition: "box-shadow .2s, border-color .2s",
        }}
      >
        {!term &&
          [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1],
          ].map(([cx, cy], i) => (
            <div
              key={i}
              style={
                {
                  position: "absolute",
                  width: 6,
                  height: 6,
                  [cx ? "right" : "left"]: -1,
                  [cy ? "bottom" : "top"]: -1,
                  borderTop: !cy ? `1px solid ${border}` : "none",
                  borderBottom: cy ? `1px solid ${border}` : "none",
                  borderLeft: !cx ? `1px solid ${border}` : "none",
                  borderRight: cx ? `1px solid ${border}` : "none",
                } as CSSProperties
              }
            />
          ))}
        {dark && <div style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 50%, ${D.glow}${onDark ? "33" : "26"}, transparent 70%)` }} />}
        {term && <div style={{ position: "absolute", inset: -1, borderRadius: "50%", border: `1px solid ${L.oxide}`, animation: "at-blink 3.2s ease-in-out infinite", opacity: 0.45 }} />}
        <div style={{ position: "absolute", inset: term ? "24%" : "16%", color: dark ? D.glow : L.ink }}>{GLYPHS[s.id]}</div>
      </div>
      <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8, width: 168, textAlign: "center" }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", color: figColor }}>
          FIG. {s.fig}
          {s.loop ? <span style={{ color: onDark ? D.dim : L.gloss }}> · {s.loop.scale}</span> : null}
        </div>
        <div className="serif" style={{ fontSize: 16, color: labelColor, marginTop: 1, lineHeight: 1.12, fontWeight: 500 }}>
          {s.title}
        </div>
      </div>
    </div>
  );
}

interface ChartProps {
  onOpen: OpenFn;
  hovered: string | null;
  setHovered: (id: string | null) => void;
  narrow?: boolean;
}

export function AtlasChart({ onOpen, hovered, setHovered, narrow = false }: ChartProps) {
  const litN = useMemo(() => {
    if (!hovered) return null;
    if (hovered === "ouroboros") return new Set<string>([...(ADJ.ouroboros || []), "ouroboros", "surplus"]);
    return new Set<string>([hovered, ...(ADJ[hovered] || [])]);
  }, [hovered]);

  // a thread between two specimens, bowed toward the spine
  const thread = (a: string, b: string) => {
    const A = POS[a],
      B = POS[b];
    const mx = (A.x + B.x) / 2,
      my = (A.y + B.y) / 2;
    const dx = B.x - A.x,
      dy = B.y - A.y;
    const cl = Math.hypot(dx, dy) || 1;
    return `M${A.x} ${A.y} Q${mx - (dy / cl) * 26} ${my + (dx / cl) * 26} ${B.x} ${B.y}`;
  };

  return (
    <div className="atlas-root" style={{ position: "relative", width: W, height: H, background: L.paper }}>
      <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
        <AtlasDefs idPrefix="map" tone="light" />

        {/* the strata: banded backgrounds that darken with depth, blended at the
            boundaries so the descent into the dark reads as a continuous plunge
            (the loop → sediment boundary gets the longest blend) */}
        <defs>
          {BANDS.slice(0, -1).map((b, i) => (
            <linearGradient key={"bb" + i} id={`band-blend-${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={b.bg} />
              <stop offset="100%" stopColor={BANDS[i + 1].bg} />
            </linearGradient>
          ))}
        </defs>
        {BANDS.map((b) => (
          <rect key={b.num} x="0" y={b.y0} width={W} height={b.y1 - b.y0} fill={b.bg} />
        ))}
        {BANDS.slice(0, -1).map((b, i) => {
          const span = i === 2 ? 240 : 96; // the plunge into the sediment blends longest
          return <rect key={"tb" + i} x="0" y={b.y1 - span / 2} width={W} height={span} fill={`url(#band-blend-${i})`} />;
        })}
        {/* the ledger grid, faint, over the light bands only */}
        <rect x="0" y="196" width={W} height={1404 - 196} fill="url(#map-grid)" opacity="0.5" />
        <rect x="0" y="2108" width={W} height={2520 - 2108} fill="url(#map-grid)" opacity="0.5" />
        {/* sheet border */}
        <rect x="34" y="34" width={W - 68} height={H - 68} fill="none" stroke={L.ink} strokeWidth="1" opacity="0.4" />

        {/* stratum boundary rules + depth-gauge ticks */}
        {BANDS.map((b, i) => (
          <line key={"bl" + i} x1={GAUGE} y1={b.y0} x2={X1} y2={b.y0} stroke={b.dark ? D.rule : L.rule} strokeWidth="0.8" opacity="0.7" />
        ))}
        <line x1={GAUGE} y1="2520" x2={X1} y2="2520" stroke={L.rule} strokeWidth="0.8" opacity="0.7" />

        {/* the depth gauge — the shared axis, read twice: the concept strata
            (named to the right, in mono) and the lifecycle (here, in serif) */}
        <line x1={GAUGE} y1="196" x2={GAUGE} y2="2520" stroke={L.ink} strokeWidth="1" opacity="0.55" />
        {Array.from({ length: 30 }, (_, k) => {
          const y = 196 + k * 80;
          if (y > 2520) return null;
          return <line key={"tk" + k} x1={GAUGE - (k % 2 ? 5 : 9)} y1={y} x2={GAUGE} y2={y} stroke={L.ink} strokeWidth="0.7" opacity="0.5" />;
        })}
        {LIFE.map((s, i) => (
          <text key={"lf" + i} x={GAUGE - 13} y={s.y} fill={s.cap ? L.oxide : L.gloss} fontSize="12.5" fontFamily={SF} fontStyle="italic" textAnchor="end">
            {s.t}
          </text>
        ))}
        <text x={GAUGE - 13} y="2512" fill={L.gloss} fontSize="9" fontFamily={MF} letterSpacing="0.12em" textAnchor="end">
          BEDROCK
        </text>

        {/* the ouroboric return: the harvest runs back up the right margin to re-solicit */}
        <line x1={W - 44} y1="2104" x2={W - 44} y2="206" stroke={L.oxide} strokeWidth="1" opacity="0.4" strokeDasharray="3 7" />
        <path d={`M${W - 44} 206 l-6 12 l12 0 z`} fill={L.oxide} opacity="0.5" />
        <text transform={`rotate(-90 ${W - 28} ${1150})`} x={W - 28} y="1150" fill={L.oxide} fontSize="9.5" fontFamily={MF} letterSpacing="0.22em" textAnchor="middle" opacity="0.75">
          ↑ THE HARVEST RETURNS · SOLICITS THE SURFACE AGAIN
        </text>

        {/* the interconnection web across the strata — surfaces on hover */}
        {ATLAS_EDGES.map(([a, b], i) => {
          const hot = !!litN && litN.has(a) && litN.has(b);
          const crossesDark = POS[a].y > 1404 || POS[b].y > 1404;
          return (
            <path
              key={i}
              d={thread(a, b)}
              fill="none"
              stroke={hot ? L.oxide : crossesDark ? D.faint : L.ink}
              strokeWidth={hot ? 1.5 : 0.8}
              opacity={litN ? (hot ? 0.9 : 0.04) : 0.14}
              style={{ transition: "opacity .2s, stroke .2s" }}
            />
          );
        })}

        {/* the surplus source-mark, just beneath the surface */}
        <line x1={POS.surplus.x - 22} y1={POS.surplus.y + 70} x2={POS.surplus.x + 22} y2={POS.surplus.y + 70} stroke={L.ink} strokeWidth="2" />
        <line x1={POS.surplus.x - 11} y1={POS.surplus.y + 78} x2={POS.surplus.x + 11} y2={POS.surplus.y + 78} stroke={L.ink} strokeWidth="1.2" />
      </svg>

      {/* ── masthead (reflows compact on narrow / mobile) ── */}
      <div style={{ position: "absolute", left: GAUGE, top: 52, right: 56, display: "flex", justifyContent: "space-between", alignItems: "baseline", pointerEvents: "none" }}>
        <div className="mono" style={{ fontSize: 11.5, letterSpacing: "0.22em", color: L.oxide }}>
          {narrow ? "AN ATLAS OF CAPTURE" : "AN ATLAS OF CAPTURE · A SECTION THROUGH THE APPARATUS"}
        </div>
        {!narrow && (
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.2em", color: L.gloss }}>
            A. SELIMOVIĆ
          </div>
        )}
      </div>
      <div style={{ position: "absolute", left: GAUGE, top: 84, right: narrow ? undefined : 56, width: narrow ? 540 : undefined, pointerEvents: "none" }}>
        <div className="serif" style={{ fontSize: narrow ? 42 : 52, color: L.ink, fontWeight: 500, lineHeight: 1, letterSpacing: "0.01em" }}>
          The Ouroboric Condition
        </div>
        <div className="serif ital" style={{ fontSize: narrow ? 15 : 19, color: L.gloss, marginTop: 6, maxWidth: narrow ? 480 : 760 }}>
          {narrow
            ? "On Psychic Surplus & the Capture of Desire — read downward, from the crib to the deathbed."
            : "On Psychic Surplus & the Capture of Desire — a section read downward, from the surface into the dark, and from the crib to the deathbed."}
        </div>
      </div>

      {/* ── stratum labels + framings (left-aligned at each band top) ── */}
      {BANDS.map((b) => (
        <div key={b.num} style={{ position: "absolute", left: GAUGE + 18, top: b.y0 + 14, width: 360, pointerEvents: "none" }}>
          <div className="mono" style={{ fontSize: 12, letterSpacing: "0.18em", color: b.dark ? D.glow : L.oxide }}>
            {b.num} · {b.name}
          </div>
          <div className="serif ital" style={{ fontSize: 13.5, color: b.dark ? "#a59c8c" : L.gloss, marginTop: 4, lineHeight: 1.34, maxWidth: 330 }}>
            {b.frame}
          </div>
        </div>
      ))}

      {/* ── coda · what the map is for (surfacing back to the light) ── */}
      <div style={{ position: "absolute", left: GAUGE + 18, top: CODA_Y - 22, pointerEvents: "none" }}>
        <div className="mono" style={{ fontSize: 12, letterSpacing: "0.2em", color: L.oxide }}>
          CODA · WHAT THE MAP IS FOR
        </div>
      </div>
      <div style={{ position: "absolute", left: 0, top: CODA_Y + 18, width: W, display: "flex", justifyContent: narrow ? "flex-start" : "center", paddingLeft: narrow ? GAUGE + 18 : 0, pointerEvents: "none" }}>
        <div style={{ width: narrow ? 560 : 760, maxWidth: W - 280 }}>
          <p className="serif" style={{ fontSize: 19, lineHeight: 1.5, color: L.ink, margin: 0, textWrap: "pretty" }}>
            The map shows where the energy goes. It does not show whether it can be made to go elsewhere, and the honest position is to leave that open — not to pretend the diagnosis is already the cure.
          </p>
          <p className="serif" style={{ fontSize: 19, lineHeight: 1.5, color: L.ink, margin: "1.4em 0 0", textWrap: "pretty" }}>
            The surplus is real. It is ours. It is the one thing the circuit cannot manufacture and must therefore take from us — and that, rather than any reassurance, is where the fight is.
          </p>
          <p className="serif ital" style={{ fontSize: 24, lineHeight: 1.4, color: L.ink, margin: "1.55em 0 0", paddingLeft: 22, borderLeft: `2px solid ${L.oxide}` }}>
            Whether we keep enough of it to matter is not something the map can tell us. It is the work the map is for.
          </p>
          <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.18em", color: L.gloss, marginTop: 24 }}>
            THE PSYCHOPOLITICS OF PSYCHIC SURPLUS · A. SELIMOVIĆ
          </div>
        </div>
      </div>

      {/* the engine, then the specimens */}
      <Engine onOpen={onOpen} hovered={hovered} setHovered={setHovered} dimmed={!!litN && !litN.has("ouroboros")} />
      {ATLAS_SITES.filter((s) => s.id !== "ouroboros").map((s) => (
        <SmallNode key={s.id} s={s} onOpen={onOpen} hovered={hovered} setHovered={setHovered} dimmed={!!litN && !litN.has(s.id)} lit={!!litN && litN.has(s.id) && s.id !== "surplus"} />
      ))}
    </div>
  );
}
