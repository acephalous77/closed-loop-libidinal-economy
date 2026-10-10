"use client";

import { useState } from "react";
import { MASTER, FONT } from "./tokens";
import { PlateHeader, PlateFooter } from "./PlateChrome";

const T = MASTER;

// ══════════════════════════════════════════════════════════════════
// OHCOSEWheel — six phases on a wheel, click to focus, scrubber
// drives a marker around the wheel.
// ══════════════════════════════════════════════════════════════════

interface Phase {
  letter: string; name: string; window: string; yield: number;
  body: string; note: string;
}

const PHASES: Phase[] = [
  { letter: "O", name: "Onboarding",  window: "days 1 – 7",     yield: 0.55,
    body: "A bonded fitting consultant arrives with the apparatus. Installation, anchoring and ring engagement complete in a single visit. The occupant is seated, ringed, and instated.",
    note: "Transitional-object work begins. The apparatus is, at this stage, openly external." },
  { letter: "H", name: "Habituation", window: "days 8 – 90",    yield: 0.75,
    body: "Circadian and metabolic rhythms acclimate. Sleep onset, attention rhythm, and gastrointestinal tempo synchronise to the apparatus's curve.",
    note: "≈ 94% report by day 90 that the apparatus has receded from conscious attention." },
  { letter: "C", name: "Calibration", window: "months 4 – 12",  yield: 0.90,
    body: "The Biometric Integration tunes Content Stream, the Acknowledgment Cycle, and pharmacological adjuncts to the occupant's measured response profile.",
    note: "Behavior becomes indistinguishable, by the occupant's account, from their intention." },
  { letter: "O", name: "Occupancy",   window: "year 2 →",       yield: 1.00,
    body: "The steady state. The occupant inhabits the apparatus continuously. Productive output, biometric reads, and engagement route through the Service Ledger without interruption.",
    note: "Open-ended by contract. Most occupants never leave it." },
  { letter: "S", name: "Stewardship", window: "late life",      yield: 0.55,
    body: "Nutritional, pharmacological and ambient subsystems adjust to preserve continuous occupancy as productive output declines with age.",
    note: "No occupant in the recorded history has been asked to leave." },
  { letter: "E", name: "Estate",      window: "post-mortem",    yield: 0.30,
    body: "On biological cessation the apparatus's data record and productivity profile remain active under the Estate protocol.",
    note: "Eternal-tier configurations operate for 99 fiscal years past the occupant." },
];

export function OHCOSEWheel() {
  const [sel, setSel] = useState(3);
  const [scrub, setScrub] = useState(0.55);

  const phase = PHASES[sel];
  const cx = 280, cy = 320, rOuter = 200, rInner = 110;
  const segStart = -Math.PI / 2 - Math.PI / 6;
  const segAngle = (Math.PI * 2) / 6;
  // Quantize trig-derived coords to 2dp so SSR and client serialize identical
  // path/line strings — Math.cos/sin differ by ULPs across engines, tripping hydration.
  const q = (n: number) => Math.round(n * 100) / 100;
  const pt = (r: number, a: number): [number, number] =>
    [q(cx + Math.cos(a) * r), q(cy + Math.sin(a) * r)];

  const scrubAngle = segStart + scrub * Math.PI * 2;
  const [mx, my] = pt(rOuter + 20, scrubAngle);

  return (
    <div style={{
      maxWidth: 1200, margin: "2rem auto", background: T.paper, color: T.ink,
      border: `0.5px solid ${T.rule}`, position: "relative", overflow: "hidden",
    }}>
      <PlateHeader plate="IV.i" route="/chair · § IV · OHCOSE · interactive"
                   code="PLATE · INTERACTIVE · 01" />
      <div className="ohcose-grid" style={{
        display: "grid", gridTemplateColumns: "minmax(0, 600px) 1fr",
        gap: 40, padding: "32px 40px",
      }}>
        <svg viewBox="0 0 560 640" style={{ width: "100%", height: "auto" }}>
          <circle cx={cx} cy={cy} r={rOuter} fill="none" stroke={T.ink} strokeWidth="0.8" opacity="0.55" />
          <circle cx={cx} cy={cy} r={rInner + 24} fill="none" stroke={T.ink} strokeWidth="0.5" opacity="0.25" strokeDasharray="2 4" />
          <circle cx={cx} cy={cy} r={rInner} fill="none" stroke={T.ink} strokeWidth="0.5" opacity="0.4" />
          {PHASES.map((_, i) => {
            const a = segStart + i * segAngle;
            const [x1, y1] = pt(rInner, a);
            const [x2, y2] = pt(rOuter, a);
            return <line key={`d-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
                          stroke={T.ink} strokeWidth="0.5" opacity="0.25" />;
          })}
          {PHASES.map((p, i) => {
            const a0 = segStart + i * segAngle;
            const a1 = a0 + segAngle;
            const [iA, iB] = [pt(rInner, a0), pt(rInner, a1)];
            const [oA, oB] = [pt(rOuter, a0), pt(rOuter, a1)];
            const aMid = a0 + segAngle / 2;
            const rBarEnd = rInner + 6 + (rOuter - rInner - 32) * p.yield;
            const [bx1, by1] = pt(rInner + 6, aMid);
            const [bx2, by2] = pt(rBarEnd, aMid);
            const [nx, ny] = pt(rOuter, aMid);
            const [lx, ly] = pt(rOuter + 38, aMid);
            const anchor: "start" | "middle" | "end" =
              Math.cos(aMid) > 0.4 ? "start" : Math.cos(aMid) < -0.4 ? "end" : "middle";
            const isActive = sel === i;
            return (
              <g key={i} style={{ cursor: "pointer" }} onClick={() => setSel(i)}>
                <path d={`M ${iA[0]} ${iA[1]} L ${oA[0]} ${oA[1]} A ${rOuter} ${rOuter} 0 0 1 ${oB[0]} ${oB[1]} L ${iB[0]} ${iB[1]} A ${rInner} ${rInner} 0 0 0 ${iA[0]} ${iA[1]} Z`}
                      fill={isActive ? T.accentBg : "transparent"} stroke="none" />
                <line x1={bx1} y1={by1} x2={bx2} y2={by2}
                      stroke={T.accent} strokeWidth="7"
                      opacity={isActive ? 1 : 0.6} strokeLinecap="round" />
                <circle cx={nx} cy={ny} r={isActive ? 28 : 22}
                        fill={isActive ? T.accent : T.paper}
                        stroke={T.ink} strokeWidth={isActive ? 1.4 : 1.1} />
                <text x={nx} y={ny + 7} textAnchor="middle" fontFamily={FONT.serif}
                      fontStyle="italic" fontWeight="500" fontSize="22"
                      fill={isActive ? T.paper : T.ink}>{p.letter}</text>
                <text x={lx} y={ly} textAnchor={anchor} fontFamily={FONT.serif}
                      fontStyle="italic" fontSize="14"
                      fill={isActive ? T.ink : T.inkDim}
                      fontWeight={isActive ? 600 : 400}>{p.name}</text>
                <text x={lx} y={ly + 14} textAnchor={anchor} fontFamily={FONT.mono}
                      fontSize="9" fill={T.inkMute} letterSpacing="0.18em"
                      style={{ textTransform: "uppercase" }}>{p.window}</text>
              </g>
            );
          })}
          <line x1={cx} y1={cy} x2={mx} y2={my}
                stroke={T.ink} strokeWidth="0.7" opacity="0.5" strokeDasharray="2 3" />
          <circle cx={mx} cy={my} r="7" fill={T.ink} />
          <circle cx={mx} cy={my} r="13" fill="none" stroke={T.ink} strokeWidth="0.8" opacity="0.4" />
          <text x={cx} y={cy + 14} textAnchor="middle" fontFamily={FONT.serif}
                fontStyle="italic" fontSize="56" fontWeight="500" fill={T.accent}>Ω</text>
          <text x={cx} y={cy + 38} textAnchor="middle" fontFamily={FONT.mono}
                fontSize="9" fill={T.inkMute} letterSpacing="0.28em"
                style={{ textTransform: "uppercase" }}>OHCOSE</text>
        </svg>

        <div>
          <div style={{
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
            color: T.accent, textTransform: "uppercase", fontWeight: 600, marginBottom: 12,
          }}>● Fig. 2.i · OHCOSE · interactive</div>
          <h2 style={{
            fontFamily: FONT.serif, fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 0.98,
            letterSpacing: "-0.02em", fontStyle: "italic", fontWeight: 400,
            margin: "0 0 6px", color: T.ink,
          }}>Phase {sel + 1} · <em>{phase.name}</em></h2>
          <div style={{
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
            color: T.inkMute, textTransform: "uppercase", marginBottom: 22,
          }}>{phase.window} · extraction yield {Math.round(phase.yield * 100)}%</div>

          <div style={{ height: 6, background: T.ruleSoft, marginBottom: 22,
                          position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute", inset: 0, width: `${phase.yield * 100}%`,
              background: T.accent, transition: "width 0.2s",
            }} />
          </div>

          <p style={{
            fontFamily: FONT.serif, fontSize: 15.5, lineHeight: 1.65,
            color: T.ink, margin: "0 0 18px",
          }}>{phase.body}</p>

          <div style={{
            padding: "14px 16px", background: T.accentBg,
            borderLeft: `2px solid ${T.accent}`,
          }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
              color: T.accent, textTransform: "uppercase", fontWeight: 700, marginBottom: 6,
            }}>Analytical note</div>
            <p style={{
              fontFamily: FONT.serif, fontSize: 13.5, fontStyle: "italic",
              lineHeight: 1.55, color: T.ink, margin: 0,
            }}>{phase.note}</p>
          </div>

          <div style={{ marginTop: 36 }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
              color: T.inkMute, textTransform: "uppercase", marginBottom: 12,
              display: "flex", justifyContent: "space-between",
            }}>
              <span>Occupant journey</span>
              <span style={{ color: T.accent, fontWeight: 700 }}>
                {PHASES[Math.min(5, Math.floor(scrub * 6))].name.toLowerCase()}
              </span>
            </div>
            <input type="range" min={0} max={1} step={0.001} value={scrub}
                   onChange={(e) => {
                     const v = parseFloat(e.target.value);
                     setScrub(v);
                     setSel(Math.min(5, Math.floor(v * 6)));
                   }}
                   style={{ width: "100%", accentColor: T.accent, cursor: "pointer" }} />
            <div style={{
              fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
              color: T.inkFaint, textTransform: "uppercase", marginTop: 6,
              display: "flex", justifyContent: "space-between",
            }}>
              <span>day 1</span><span>year 2</span><span>cessation</span>
            </div>
          </div>
        </div>
      </div>
      <PlateFooter folio="i" total="iii" section="Interactive · OHCOSE wheel" />
      <style>{`
        @media (max-width: 800px) {
          .ohcose-grid { grid-template-columns: 1fr !important; padding: 22px 18px !important; gap: 28px !important; }
        }
      `}</style>
    </div>
  );
}
