"use client";

import { useState } from "react";
import { MASTER, FONT } from "./tokens";
import { PlateHeader, PlateFooter } from "./PlateChrome";

const T = MASTER;

interface Axis {
  key: string; name: string; capture: string;
  body: string; inh: string; angle: number;
}

const AXES: Axis[] = [
  { key: "t", name: "Temporal", capture: "cadence",
    body: "The cadence at which the occupant's attention and affect are produced and answered. What Selimović calls Capture of Cadence.",
    inh: "Stiegler · cybernetic tradition", angle: -90 },
  { key: "e", name: "Economic", capture: "metering · price",
    body: "The metering and pricing of the occupant's attention, affect and productive output. The Service Ledger meters; the Portfolio Optimisation Layer prices.",
    inh: "Berardi · Zuboff", angle: 150 },
  { key: "a", name: "Affective", capture: "modulation",
    body: "The modulation of which emotions the subject is permitted, or invited, to feel. The Biometric Integration reads continuously; the Content Stream responds.",
    inh: "Preciado · Marcuse", angle: 30 },
];

const PRESETS: [string, [number, number, number]][] = [
  ["platform · 2026", [0.85, 0.7, 0.9]],
  ["chair · 2030",    [0.95, 0.85, 0.95]],
  ["low-engagement",  [0.4, 0.3, 0.5]],
  ["balanced",        [0.65, 0.65, 0.65]],
];

export function TAOGTriangle() {
  const [sel, setSel] = useState(0);
  const [intensity, setIntensity] = useState<[number, number, number]>([0.85, 0.7, 0.9]);

  const cx = 280, cy = 280, baseR = 180;
  const pt = (a: number, r: number): [number, number] => [
    cx + Math.cos((a * Math.PI) / 180) * r,
    cy + Math.sin((a * Math.PI) / 180) * r,
  ];
  const axisPts = AXES.map((a, i) => pt(a.angle, baseR * intensity[i]));
  const focused = AXES[sel];

  return (
    <div style={{
      maxWidth: 1200, margin: "2rem auto", background: T.paper, color: T.ink,
      border: `0.5px solid ${T.rule}`, position: "relative", overflow: "hidden",
    }}>
      <PlateHeader plate="VIII.i" route="/chair · § VIII · TAOG · interactive"
                   code="PLATE · INTERACTIVE · 03" />

      <div className="taog-grid" style={{
        display: "grid", gridTemplateColumns: "minmax(0, 560px) 1fr",
        gap: 40, padding: "32px 40px",
      }}>
        <svg viewBox="0 0 560 600" style={{ width: "100%", height: "auto" }}>
          <polygon points={AXES.map((a) => pt(a.angle, baseR).join(",")).join(" ")}
                   fill="none" stroke={T.ink} strokeWidth="0.5"
                   strokeDasharray="2 4" opacity="0.25" />
          {[0.25, 0.5, 0.75].map((r, i) => (
            <polygon key={i}
              points={AXES.map((a) => pt(a.angle, baseR * r).join(",")).join(" ")}
              fill="none" stroke={T.ink} strokeWidth="0.4" opacity="0.12" />
          ))}
          <polygon points={axisPts.map(p => p.join(",")).join(" ")}
                   fill={T.accent} fillOpacity="0.08"
                   stroke={T.accent} strokeWidth="0.8" />
          {AXES.map((a, i) => {
            const [x, y] = pt(a.angle, baseR);
            const [hx, hy] = pt(a.angle, baseR + 12);
            const tx = cx + Math.cos((a.angle * Math.PI) / 180) * (baseR + 60);
            const ty = cy + Math.sin((a.angle * Math.PI) / 180) * (baseR + 60);
            const isSel = sel === i;
            const [ix, iy] = pt(a.angle, baseR * intensity[i]);
            return (
              <g key={i} onClick={() => setSel(i)} style={{ cursor: "pointer" }}>
                <line x1={cx} y1={cy} x2={hx} y2={hy} stroke="transparent" strokeWidth="40" />
                <line x1={cx} y1={cy} x2={x} y2={y}
                      stroke={isSel ? T.accent : T.ink}
                      strokeWidth={isSel ? 1.4 : 0.9}
                      opacity={isSel ? 1 : 0.55} />
                <circle cx={ix} cy={iy} r={isSel ? 9 : 7}
                        fill={T.accent} stroke={T.paper} strokeWidth="2" />
                <g transform={`translate(${tx} ${ty})`}>
                  <text textAnchor="middle" fontFamily={FONT.serif}
                        fontStyle="italic" fontSize={isSel ? 22 : 18}
                        fontWeight={isSel ? 600 : 400}
                        fill={isSel ? T.ink : T.inkDim}>{a.name}</text>
                  <text y="18" textAnchor="middle" fontFamily={FONT.mono}
                        fontSize="9" letterSpacing="0.22em" fill={T.inkMute}
                        style={{ textTransform: "uppercase" }}>
                    capture · {a.capture}
                  </text>
                  <text y="32" textAnchor="middle" fontFamily={FONT.mono}
                        fontSize="9" letterSpacing="0.06em"
                        fill={isSel ? T.accent : T.inkMute} fontWeight="700">
                    {Math.round(intensity[i] * 100)}%
                  </text>
                </g>
              </g>
            );
          })}
          <circle cx={cx} cy={cy} r="26" fill={T.paper} stroke={T.ink} strokeWidth="1" />
          <text x={cx} y={cy + 5} textAnchor="middle" fontFamily={FONT.serif}
                fontStyle="italic" fontSize="14" fill={T.ink}>subject</text>
        </svg>

        <div>
          <div style={{
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
            color: T.accent, textTransform: "uppercase", fontWeight: 600, marginBottom: 12,
          }}>● Fig. 4.i · TAOG · interactive</div>
          <h2 style={{
            fontFamily: FONT.serif, fontSize: 42, lineHeight: 0.96,
            letterSpacing: "-0.02em", fontStyle: "italic", fontWeight: 400,
            margin: "0 0 6px", color: T.ink,
          }}>Axis {sel + 1} · <em>{focused.name}</em></h2>
          <div style={{
            fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
            color: T.inkMute, textTransform: "uppercase", marginBottom: 22,
          }}>Capture · {focused.capture}  ·  inheritance · {focused.inh}</div>
          <p style={{
            fontFamily: FONT.serif, fontSize: 15.5, lineHeight: 1.65,
            color: T.ink, margin: "0 0 24px",
          }}>{focused.body}</p>

          <div style={{
            padding: "20px 22px", background: "rgba(255,253,245,0.55)",
            border: `0.5px solid ${T.rule}`,
          }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
              color: T.inkMute, textTransform: "uppercase",
              fontWeight: 700, marginBottom: 14,
            }}>Adjust apparatus emphasis</div>
            {AXES.map((a, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "baseline", marginBottom: 4,
                }}>
                  <span style={{
                    fontFamily: FONT.serif, fontStyle: "italic", fontSize: 14,
                    color: sel === i ? T.ink : T.inkDim,
                    fontWeight: sel === i ? 600 : 400,
                  }}>{a.name}</span>
                  <span style={{
                    fontFamily: FONT.mono, fontSize: 10, color: T.accent,
                    fontWeight: 700, letterSpacing: "0.1em",
                  }}>{Math.round(intensity[i] * 100)}%</span>
                </div>
                <input type="range" min={0} max={1} step={0.01}
                       value={intensity[i]}
                       onChange={(e) => {
                         const v = parseFloat(e.target.value);
                         const next = [...intensity] as [number, number, number];
                         next[i] = v;
                         setIntensity(next);
                         setSel(i);
                       }}
                       style={{ width: "100%", accentColor: T.accent, cursor: "pointer" }} />
              </div>
            ))}
            <div style={{
              marginTop: 8, paddingTop: 14, borderTop: `0.5px solid ${T.rule}`,
              display: "flex", gap: 6,
            }}>
              {PRESETS.map(([label, vals], i) => (
                <button key={i} onClick={() => setIntensity(vals)}
                        style={{
                          flex: 1, padding: "7px 4px", background: "transparent",
                          color: T.inkDim, border: `0.5px solid ${T.rule}`,
                          fontFamily: FONT.mono, fontSize: 8.5,
                          letterSpacing: "0.16em", textTransform: "uppercase",
                          cursor: "pointer", fontWeight: 600,
                        }}>{label}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PlateFooter folio="iii" total="iii" section="Interactive · TAOG triangle" />
      <style>{`
        @media (max-width: 800px) {
          .taog-grid { grid-template-columns: 1fr !important; padding: 22px 18px !important; gap: 28px !important; }
        }
      `}</style>
    </div>
  );
}
