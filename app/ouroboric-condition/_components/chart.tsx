"use client";

// chart.tsx — the Atlas map (the LIGHT / Anatomy register). Renders the whole
// apparatus as a measured specimen chart on ledger paper: movement regions,
// the interconnection threads, and a node per site. Capture sites (tone:dark)
// appear as small glowing wells; the substrate & remainder stay open paper.
// Ported from atlas/chart.jsx.

import { useMemo } from "react";
import type { CSSProperties } from "react";
import { L, D, AtlasDefs, type OpenFn } from "./shared";
import { ATLAS_SITES, ATLAS_EDGES, ATLAS_WORLD } from "./data";
import type { AtlasSite } from "./data";
import { GLYPHS } from "./diagrams";

const MF = "var(--atlas-mono),monospace";
const SITES: Record<string, AtlasSite> = {};
ATLAS_SITES.forEach((s) => {
  SITES[s.id] = s;
});
const W = ATLAS_WORLD.w,
  H = ATLAS_WORLD.h;

interface NodeProps {
  s: AtlasSite;
  onOpen: OpenFn;
  hovered: string | null;
  setHovered: (id: string | null) => void;
  dimmed: boolean;
}

function Node({ s, onOpen, hovered, setHovered, dimmed }: NodeProps) {
  const dark = s.tone === "dark";
  const big = s.id === "ouroboros",
    med = s.id === "surplus" || s.id === "held";
  const gsz = big ? 108 : med ? 84 : s.loop ? [58, 76, 94][s.loop.i] : 66;
  const isHot = hovered === s.id;
  const boxBg = dark ? "#15171e" : "transparent";
  const glyphColor = dark ? D.glow : L.ink;
  const border = isHot ? L.oxide : dark ? "#3a3326" : L.ink;
  return (
    <div
      data-atlas-node="1"
      onMouseEnter={() => setHovered(s.id)}
      onMouseLeave={() => setHovered(null)}
      onClick={(e) => onOpen(s.id, e)}
      style={{
        position: "absolute",
        left: s.pos.x,
        top: s.pos.y,
        transform: "translate(-50%,-50%)",
        width: gsz + 132,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        opacity: dimmed ? 0.28 : 1,
        transition: "opacity .25s",
        textAlign: "center",
        zIndex: isHot ? 5 : 2,
      }}
    >
      <div
        style={{
          position: "relative",
          width: gsz,
          height: gsz,
          background: boxBg,
          border: `1px solid ${border}`,
          boxShadow: isHot ? `0 0 0 4px ${L.oxide}22` : "none",
          transition: "box-shadow .2s, border-color .2s",
        }}
      >
        {/* corner registration ticks */}
        {[
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
        {dark && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 50% 50%, ${D.glow}22, transparent 70%)`,
            }}
          />
        )}
        <div style={{ position: "absolute", inset: "14%", color: glyphColor }}>{GLYPHS[s.id]}</div>
      </div>
      <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.18em", color: L.oxide, marginTop: 8 }}>
        FIG. {s.fig}
      </div>
      <div
        className="serif"
        style={{ fontSize: big ? 22 : 16, color: L.ink, marginTop: 3, lineHeight: 1.12, fontWeight: 500, textWrap: "balance" }}
      >
        {s.title}
      </div>
      <div className="serif ital" style={{ fontSize: 12, color: L.gloss, marginTop: 2 }}>
        {s.sub}
      </div>
      {s.loop && (
        <div
          className="mono"
          style={{ fontSize: 9, letterSpacing: "0.14em", color: L.oxide, marginTop: 6, border: `1px solid ${L.oxide}`, padding: "2px 8px" }}
        >
          SCALE · {s.loop.scale}
        </div>
      )}
    </div>
  );
}

interface ChartProps {
  onOpen: OpenFn;
  hovered: string | null;
  setHovered: (id: string | null) => void;
}

export function AtlasChart({ onOpen, hovered, setHovered }: ChartProps) {
  // edges incident to the hovered node, for highlight
  const hotSet = useMemo(() => {
    if (!hovered) return null;
    const set = new Set<string>([hovered]);
    ATLAS_EDGES.forEach(([a, b]) => {
      if (a === hovered) set.add(b);
      if (b === hovered) set.add(a);
    });
    return set;
  }, [hovered]);

  return (
    <div className="atlas-root" style={{ position: "relative", width: W, height: H, background: L.paper }}>
      {/* paper ledger + frame */}
      <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
        <AtlasDefs idPrefix="map" tone="light" />
        <rect x="0" y="0" width={W} height={H} fill="url(#map-grid)" />
        <rect x="0" y="0" width={W} height={H} fill="url(#map-grid2)" />
        <rect x="46" y="46" width={W - 92} height={H - 92} fill="none" stroke={L.ink} strokeWidth="1" opacity="0.55" />
        <rect x="58" y="58" width={W - 116} height={H - 116} fill="none" stroke={L.ink} strokeWidth="0.5" opacity="0.35" />

        {/* nested-loops scale group — satisfaction ⊂ repair ⊂ cult */}
        <rect x="292" y="652" width="278" height="862" fill={L.ink} opacity="0.025" />
        <rect x="292" y="652" width="278" height="862" fill="none" stroke={L.oxide} strokeWidth="1" strokeDasharray="3 6" opacity="0.55" />
        <text x="431" y="684" fill={L.oxide} fontSize="13" fontFamily={MF} letterSpacing="1.2" textAnchor="middle">
          ONE OPERATION · THREE SCALES
        </text>
        {[922, 1227].map((y, i) => (
          <g key={i} stroke={L.oxide} strokeWidth="1.5" opacity="0.7" fill="none" strokeLinejoin="round" strokeLinecap="round">
            <path d={`M420 ${y} L431 ${y + 10} L442 ${y}`} />
          </g>
        ))}

        {/* the interconnection threads */}
        {ATLAS_EDGES.map(([a, b], i) => {
          const A = SITES[a].pos,
            B = SITES[b].pos;
          const hot = hotSet && hotSet.has(a) && hotSet.has(b);
          const mx = (A.x + B.x) / 2,
            my = (A.y + B.y) / 2;
          const dx = B.x - A.x,
            dy = B.y - A.y;
          const cl = Math.hypot(dx, dy) || 1;
          const cx = mx - (dy / cl) * 36,
            cy = my + (dx / cl) * 36; // gentle bow
          return (
            <path
              key={i}
              d={`M${A.x} ${A.y} Q${cx} ${cy} ${B.x} ${B.y}`}
              fill="none"
              stroke={hot ? L.oxide : L.ink}
              strokeWidth={hot ? 1.6 : 0.9}
              opacity={hotSet ? (hot ? 0.95 : 0.06) : 0.2}
              style={{ transition: "opacity .2s" }}
            />
          );
        })}
      </svg>

      {/* movement region labels — ghosted */}
      {[
        { t: "I · THE FRAMEWORK", x: 1300, y: 120, s: 30 },
        { t: "THE SITES OF CAPTURE", x: 1610, y: 690, s: 25 },
        { t: "THE REMAINDER", x: 1300, y: 1905, s: 28 },
      ].map((m, i) => (
        <div
          key={i}
          className="serif ital"
          style={{
            position: "absolute",
            left: m.x,
            top: m.y,
            transform: "translate(-50%,-50%)",
            fontSize: m.s,
            color: L.faint,
            letterSpacing: "0.04em",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          {m.t}
        </div>
      ))}

      {/* the hatched "unrendered" shore beneath the remainder */}
      <svg width={W} height="220" style={{ position: "absolute", left: 0, top: H - 250, pointerEvents: "none" }}>
        <AtlasDefs idPrefix="shore" tone="light" />
        <rect x="60" y="0" width={W - 120} height="200" fill="url(#shore-hatch)" opacity="0.10" />
      </svg>

      {/* nodes */}
      {ATLAS_SITES.map((s) => (
        <Node key={s.id} s={s} onOpen={onOpen} hovered={hovered} setHovered={setHovered} dimmed={!!hotSet && !hotSet.has(s.id)} />
      ))}
    </div>
  );
}
