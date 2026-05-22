"use client";

import { useState } from "react";
import { MASTER, FONT } from "./tokens";
import { PlateHeader, PlateFooter, ChairGlyph } from "./PlateChrome";

const T = MASTER;

interface LineageItem {
  num: string; year: number; name: string;
  blurb: string; shipped: string; claim: string; verdict: string;
  context: string; color: "real" | "thin" | "fabricated";
}

const LINEAGE: LineageItem[] = [
  { num: "01", year: 1865, name: "Labor Compensator",
    blurb: "Hand-cranked mechanical aid sold to Reconstruction-era plantations to maintain productivity through the labor reorganisation the period required.",
    shipped: "≈ 2 400 units",
    claim: "The brochure's foundational entry: 'where the lineage begins.'",
    verdict: "Half real and half marketing. The half that is real is real enough.",
    context: "13th Amendment ratified · Mendel publishes pea-plant ratios",
    color: "real" },
  { num: "02", year: 1900, name: "Efficiency Enhancer",
    blurb: "Mechanised agriculture and human labor combined into a single seated unit, integrating the operator into the machine for the duration of the shift.",
    shipped: "≈ 18 000 units",
    claim: "The brochure calls this the lineage's first commercially-successful integration.",
    verdict: "Documented. Field manuals survive in the Smithsonian collection.",
    context: "Taylor publishes Shop Management · Boxer Rebellion",
    color: "real" },
  { num: "03", year: 1925, name: "Dynamic Dynamo",
    blurb: "Western Electric's Hawthorne stations and the Ford River Rouge floor. The first fully-electrified workstation.",
    shipped: "≈ 110 000 units (across two manufacturers)",
    claim: "'The electrified locus' — quoted from a 1928 manufacturer brochure the OLS literature cites.",
    verdict: "Documented but conflated. The two manufacturers had distinct designs the brochure flattens.",
    context: "Hawthorne Studies begin · Scopes trial · the Charleston",
    color: "real" },
  { num: "04", year: 1955, name: "Knowledge Chair",
    blurb: "Hartman's Integrated Office Workstation. 83 units shipped to a single Bell Labs contract before cancellation.",
    shipped: "83 units (one contract)",
    claim: "The brochure presents this as 'the lineage's mid-century cognitive turn'.",
    verdict: "Shipped, yes — but in vanishingly small quantities. The brochure overstates the period.",
    context: "Bell Labs publishes the transistor · Brown v. Board",
    color: "thin" },
  { num: "05", year: 1985, name: "Virtual Ouroboros",
    blurb: "The brochure backdates by twenty years. The phenomenon — fusion of physical and digital workspaces — was a 2005 phenomenon, not a 1985 one.",
    shipped: "14 units (pre-production prototypes)",
    claim: "'The hybrid configuration.' Date and shipment quantity both implausible by 1985 standards.",
    verdict: "Real phenomenon, wrong date. The 22nd-century archive treats this as the lineage claim's weakest entry.",
    context: "Plaza Accord · Microsoft Windows 1.0",
    color: "fabricated" },
  { num: "06", year: 2024, name: "Ouroboros Life System",
    blurb: "The seventh seat. The only iteration not verified against historical records — it is the historical record.",
    shipped: "Cohort 2026.05 opens next month",
    claim: "'The integration in its currently-deployed form.'",
    verdict: "The present apparatus. The essay's entire premise.",
    context: "OHCOSE phase architecture published · cohort 2024.01 instated",
    color: "real" },
];

const VERDICT_COLOR: Record<LineageItem["color"], string> = {
  real: T.accent, thin: "#a06820", fabricated: "#7a3a55",
};

export function LineageScrubber() {
  const [sel, setSel] = useState(2);
  const pct = (y: number) => ((y - 1865) / (2025 - 1865)) * 100;
  const item = LINEAGE[sel];
  const verdictColor = VERDICT_COLOR[item.color];

  return (
    <div style={{
      maxWidth: 1200, margin: "2rem auto", background: T.paper, color: T.ink,
      border: `0.5px solid ${T.rule}`, position: "relative", overflow: "hidden",
    }}>
      <PlateHeader plate="VII.i" route="/chair · § VII · Lineage · interactive"
                   code="PLATE · INTERACTIVE · 02" />

      <div className="lin-pad" style={{ padding: "36px 60px 36px" }}>
        <div className="lin-head" style={{ display: "flex", justifyContent: "space-between",
                       alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 28 }}>
          <div>
            <div style={{
              fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
              color: T.accent, textTransform: "uppercase", fontWeight: 600,
              marginBottom: 8,
            }}>● Fig. 3.i · Lineage scrubber</div>
            <h2 style={{
              fontFamily: FONT.serif, fontSize: 36, lineHeight: 0.98,
              letterSpacing: "-0.018em", fontStyle: "italic", fontWeight: 400,
              margin: 0, color: T.ink,
            }}>160 years of seated extraction.</h2>
          </div>
          <div style={{
            fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
            color: T.inkMute, textTransform: "uppercase",
            textAlign: "right", lineHeight: 1.7,
          }}>
            <div>Click a tick · or use the arrows</div>
            <div style={{ display: "flex", gap: 4, marginTop: 6, justifyContent: "flex-end" }}>
              <button onClick={() => setSel(Math.max(0, sel - 1))}
                      style={navBtn(sel === 0)}>←</button>
              <button onClick={() => setSel(Math.min(5, sel + 1))}
                      style={navBtn(sel === 5)}>→</button>
            </div>
          </div>
        </div>

        {/* MOBILE iter selector — replaces the cramped visual timeline */}
        <div className="lin-mobile-picker" style={{ display: "none", marginBottom: 24 }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 4,
          }}>
            {LINEAGE.map((d, i) => (
              <button
                key={d.num}
                onClick={() => setSel(i)}
                style={{
                  background: sel === i ? T.accent : "transparent",
                  color: sel === i ? T.paper : T.ink,
                  border: `1px solid ${sel === i ? T.accent : T.rule}`,
                  padding: "10px 4px",
                  fontFamily: FONT.mono, fontSize: 9.5,
                  letterSpacing: "0.06em", cursor: "pointer",
                  display: "flex", flexDirection: "column", gap: 3,
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: 700 }}>{d.year}</span>
                <span style={{
                  fontFamily: FONT.serif, fontStyle: "italic",
                  fontSize: 11, textTransform: "none", letterSpacing: 0,
                  fontWeight: sel === i ? 600 : 400, opacity: 0.9,
                }}>{d.name.split(" ").slice(-1)[0]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lin-timeline" style={{ position: "relative", height: 160, marginBottom: 8 }}>
          <div style={{
            position: "absolute", left: 0, right: 0, top: 80,
            height: 1, background: T.ink, opacity: 0.7,
          }} />
          {Array.from({ length: 17 }, (_, i) => {
            const year = 1865 + i * 10;
            const major = i % 5 === 0;
            return (
              <div key={i} style={{
                position: "absolute", top: 80, left: `${pct(year)}%`,
                width: 1, height: major ? 12 : 6,
                background: T.ink, opacity: major ? 0.55 : 0.3,
              }} />
            );
          })}
          {[1865, 1900, 1925, 1955, 1985, 2025].map((y) => (
            <div key={y} style={{
              position: "absolute", top: 100, left: `${pct(y)}%`,
              transform: "translateX(-50%)",
              fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.06em",
              color: T.inkDim,
            }}>{y}</div>
          ))}
          {LINEAGE.map((d, i) => {
            const x = pct(d.year);
            const isSel = sel === i;
            const up = i % 2 === 0;
            return (
              <div key={d.num} onClick={() => setSel(i)} style={{
                position: "absolute", top: up ? 20 : 96,
                left: `${x}%`, transform: "translateX(-50%)",
                cursor: "pointer", width: 78, textAlign: "center",
              }}>
                <div style={{
                  fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.18em",
                  color: isSel ? T.accent : T.inkMute,
                  fontWeight: isSel ? 700 : 400, marginBottom: 4,
                  textTransform: "uppercase",
                }}>iter {d.num}</div>
                <div style={{
                  fontFamily: FONT.serif, fontSize: 12, fontStyle: "italic",
                  fontWeight: isSel ? 600 : 400,
                  color: isSel ? T.ink : T.inkDim, lineHeight: 1.15,
                }}>{d.name}</div>
                <div style={{
                  position: "absolute", top: up ? 64 : -10,
                  left: "50%", transform: "translate(-50%, 0)",
                  width: isSel ? 14 : 10, height: isSel ? 14 : 10,
                  borderRadius: "50%",
                  background: isSel ? T.accent : T.paper,
                  border: `1.5px solid ${T.accent}`,
                  transition: "all 0.18s",
                }} />
              </div>
            );
          })}
          <div style={{
            position: "absolute", top: 60, height: 40,
            left: `${pct(item.year)}%`, width: 1,
            background: T.accent, transition: "left 0.25s ease-out",
          }} />
        </div>

        <div className="lineage-detail" style={{
          marginTop: 64, padding: "26px 28px",
          border: `0.5px solid ${T.rule}`, background: "rgba(255,253,245,0.55)",
          display: "grid", gridTemplateColumns: "1fr 260px", gap: 36,
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "baseline",
                           gap: 14, marginBottom: 12 }}>
              <span style={{
                fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
                color: T.accent, fontWeight: 700, textTransform: "uppercase",
              }}>ITER {item.num}  ·  {item.year}</span>
              <span style={{
                padding: "2px 10px", background: verdictColor, color: T.paper,
                fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.18em",
                textTransform: "uppercase", fontWeight: 600, borderRadius: 2,
              }}>
                {item.color === "real" ? "● verified" :
                 item.color === "thin" ? "◐ thinly documented" :
                                         "○ partly fabricated"}
              </span>
            </div>
            <h3 style={{
              fontFamily: FONT.serif, fontSize: 36, lineHeight: 1,
              letterSpacing: "-0.018em", fontStyle: "italic",
              fontWeight: 500, margin: "0 0 14px", color: T.ink,
            }}>The {item.name}.</h3>
            <p style={{
              fontFamily: FONT.serif, fontSize: 14.5, lineHeight: 1.65,
              color: T.ink, margin: "0 0 16px",
            }}>{item.blurb}</p>
            <div style={{
              padding: "12px 14px", borderLeft: `2px solid ${verdictColor}`,
              background: "rgba(255,253,245,0.7)",
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.22em",
                color: verdictColor, fontWeight: 700,
                textTransform: "uppercase", marginBottom: 6,
              }}>Brochure claim · vs. historical record</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: 12.5, fontStyle: "italic",
                lineHeight: 1.5, color: T.inkDim, marginBottom: 8,
              }}>{item.claim}</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: 12.5, lineHeight: 1.5, color: T.ink,
              }}><strong style={{ fontWeight: 600 }}>Verdict.</strong> {item.verdict}</div>
            </div>
          </div>
          <div>
            <Field k="Shipped">{item.shipped}</Field>
            <Field k={`World, in ${item.year}`}>{item.context}</Field>
            <Field k="Long-form">
              → /chair/lineage/{item.name.toLowerCase().replace(/ /g, "-")}
            </Field>
            <div style={{ marginTop: 18, paddingTop: 14, borderTop: `0.5px solid ${T.rule}` }}>
              <ChairGlyph size={56} stroke={T.accent}
                          phase={String.fromCharCode(96 + sel + 1)} />
            </div>
          </div>
        </div>
      </div>

      <PlateFooter folio="ii" total="iii" section="Interactive · Lineage scrubber" />
      <style>{`
        @media (max-width: 800px) {
          .lin-pad { padding: 24px 18px !important; }
          .lin-head { flex-direction: column !important; align-items: stretch !important; gap: 14px !important; }
          .lin-head > div:last-child { text-align: left !important; }
          .lin-timeline { display: none !important; }
          .lin-mobile-picker { display: block !important; }
          .lineage-detail { grid-template-columns: 1fr !important; padding: 20px 18px !important; gap: 22px !important; }
        }
      `}</style>
    </div>
  );
}

function Field({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{
        fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.22em",
        color: T.inkMute, textTransform: "uppercase",
        fontWeight: 600, marginBottom: 5,
      }}>{k}</div>
      <div style={{
        fontFamily: FONT.serif, fontSize: 13, fontStyle: "italic",
        color: T.ink, lineHeight: 1.5,
      }}>{children}</div>
    </div>
  );
}

function navBtn(disabled: boolean): React.CSSProperties {
  return {
    border: `0.5px solid ${T.ink}`,
    background: disabled ? "transparent" : T.ink,
    color: disabled ? T.inkFaint : T.paper,
    padding: "4px 10px", fontFamily: FONT.mono, fontSize: 10,
    cursor: disabled ? "default" : "pointer", fontWeight: 700,
    opacity: disabled ? 0.4 : 1,
  };
}
