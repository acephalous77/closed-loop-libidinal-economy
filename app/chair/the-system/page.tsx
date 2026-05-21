import type { Metadata } from "next";
import { FONT } from "../_components/tokens";
import { PlateHeader, PlateFooter } from "../_components/PlateChrome";
import { OccupantGallery } from "../_components/OccupantGallery";

export const metadata: Metadata = {
  title: { absolute: "The Apparatus — Ouroboros Life System" },
  description:
    "The Ouroboros Life System operates a closed-loop libidinal economy at the scale of a single household.",
  alternates: { canonical: "/chair/the-system" },
};

// ──────────────────────────────────────────────────────────────────
// /chair/the-system — the brochure as modern product presentation.
//
// Register INVERSION from the essay's master cream/sepia. Clinical
// showroom white + blueprint navy accent. Manrope dominates the
// chrome; Source Serif italic carries only the apparatus's voice
// moments. The register-shift from the essay (serif-dominant) is
// felt typographically as well as in palette.
// ──────────────────────────────────────────────────────────────────

const B = {
  paper:    "#fafaf7",
  panel:    "#ffffff",
  panelSoft:"#f1f1ee",
  ink:      "#0d0d10",
  inkDim:   "#3a3a3e",
  inkMute:  "#6e6e74",
  inkFaint: "#a8a8ae",
  rule:     "rgba(13,13,16,0.10)",
  ruleSoft: "rgba(13,13,16,0.05)",
  accent:   "#15356c",
  accentBg: "#f0f3f9",
};

const BROCHURE_TOKENS = {
  paper: B.paper, paper2: B.panel, ink: B.ink, inkDim: B.inkDim,
  inkMute: B.inkMute, inkFaint: B.inkFaint, rule: B.rule, ruleSoft: B.ruleSoft,
  accent: B.accent, accentDim: B.accent, accentBg: B.accentBg,
};

export default function BrochurePage() {
  return (
    <div style={{
      background: B.paper, color: B.ink,
      fontFamily: FONT.manrope, fontWeight: 400,
      letterSpacing: "-0.005em", position: "relative",
    }}>
      <PlateHeader plate="II" route="/chair/the-system" code="OLS · ARTIFACT · BROCHURE"
                   tokens={BROCHURE_TOKENS} />

      <Nav />
      <Hero />
      <Specs />
      <Foreword />
      <RingDetail />
      <OHCOSE />
      <Schematic />
      <OccupantGallery tokens={B} />
      <Tiers />
      <CTAandCostco />
      <Footer />

      <PlateFooter folio="II" total="XLII" section="Brochure · the apparatus"
                   tokens={BROCHURE_TOKENS} />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// NAV — sticky bar, hamburger on mobile.
// ──────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 10,
      height: 64, background: "rgba(250,250,247,0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: `0.5px solid ${B.rule}`,
      display: "grid", gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center", padding: "0 32px",
    }} className="brochure-nav">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" stroke={B.ink} strokeWidth="1.2" />
          <path d="M 7 19 L 7 15 Q 7 13.6 8.4 13.4 L 14 12.5 L 21 10.5 Q 22.4 10.1 22.8 11.6 L 23.6 14.4 Q 23.6 15.2 23 15.4 L 9.2 21 Q 8 21.4 7.4 20.6 Z"
                stroke={B.ink} strokeWidth="0.9" fill="none" />
        </svg>
        <div style={{ fontWeight: 600, fontSize: 14, letterSpacing: "-0.01em" }}>
          Ouroboros Life System
        </div>
        <span style={{
          fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.18em",
          color: B.inkMute, marginLeft: 8, textTransform: "uppercase",
        }}>v 4.2</span>
      </div>
      <nav className="brochure-nav-links" style={{
        display: "flex", gap: 28, fontSize: 13, color: B.inkDim,
      }}>
        {["The Ring", "OHCOSE", "Subsystems", "Schematic", "Tiers"].map((s) => (
          <a key={s} href="#" style={{ color: "inherit", textDecoration: "none" }}>{s}</a>
        ))}
      </nav>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 14, alignItems: "center" }}>
        <span style={{
          fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.18em",
          color: B.inkMute, textTransform: "uppercase",
        }} className="brochure-cohort">Cohort · 2026.05</span>
        <button style={{
          background: B.ink, color: B.paper, border: 0,
          padding: "10px 18px", borderRadius: 999, fontSize: 13,
          fontWeight: 600, letterSpacing: "-0.005em", cursor: "pointer",
        }}>Fit me →</button>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .brochure-nav { grid-template-columns: 1fr auto !important; }
          .brochure-nav-links { display: none !important; }
          .brochure-cohort { display: none !important; }
        }
      `}</style>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// HERO
// ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <div style={{
      position: "relative", height: 880, overflow: "hidden", background: B.panel,
    }} className="brochure-hero">
      <img src="/chair/ils/render-ring.jpg" alt="The Ring · OLS v 4.2"
           style={{
             position: "absolute", inset: 0, width: "100%", height: "100%",
             objectFit: "cover", objectPosition: "center 40%",
           }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(250,250,247,0.0) 60%, rgba(250,250,247,0.92) 100%)",
      }} />
      <div style={{
        position: "absolute", top: 28, left: 32,
        fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
        textTransform: "uppercase", color: B.inkDim,
      }}>
        <div style={{ color: B.accent, fontWeight: 600 }}>● OLS · v 4.2 · fig. 1</div>
        <div style={{ marginTop: 4 }}>Standard configuration, ringed</div>
      </div>
      <div style={{
        position: "absolute", bottom: 60, left: 32, right: 32,
        display: "grid", gridTemplateColumns: "1fr 280px",
        alignItems: "end", gap: 40,
      }} className="brochure-hero-foot">
        <div>
          <div style={{
            fontFamily: FONT.mono, fontSize: 10.5, letterSpacing: "0.22em",
            textTransform: "uppercase", color: B.inkMute, marginBottom: 16,
          }}>The apparatus, configured for residence</div>
          <h1 style={{
            fontFamily: FONT.manrope, fontSize: "clamp(64px, 13vw, 144px)",
            lineHeight: 0.9, letterSpacing: "-0.04em", fontWeight: 300,
            margin: 0, color: B.ink,
          }}>
            The<br />apparatus.
          </h1>
        </div>
        <div style={{
          paddingLeft: 24, borderLeft: `0.5px solid ${B.rule}`,
          fontSize: 14, lineHeight: 1.5, color: B.inkDim,
        }}>
          <p style={{
            margin: 0, fontFamily: FONT.italic, fontStyle: "italic",
            fontSize: 16, lineHeight: 1.5, color: B.ink,
          }}>
            &ldquo;We have read what you have written about us. We have
            adopted your vocabulary as our own.&rdquo;
          </p>
          <div style={{
            marginTop: 14, fontFamily: FONT.mono, fontSize: 9.5,
            letterSpacing: "0.22em", textTransform: "uppercase", color: B.inkMute,
          }}>
            — Aeternum Biometrics<br />foreword to the 2026 brochure
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) {
          .brochure-hero { height: 560px !important; }
          .brochure-hero-foot { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// SPECS strip — 5 col → 2 col on mobile.
// ──────────────────────────────────────────────────────────────────
function Specs() {
  return (
    <div style={{
      padding: "24px 32px", background: B.ink, color: B.paper,
      display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 36,
    }} className="brochure-specs">
      {[
        ["Phase architecture", "OHCOSE · six phases"],
        ["Integration", "Seven subsystems"],
        ["Governance", "TAOG · three axes"],
        ["Retention", "7 / 25 / 99 fiscal yrs"],
        ["Standard fitting", "47 minutes · in-home"],
      ].map(([k, v]) => (
        <div key={k}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#a0a0a4", marginBottom: 8,
            fontWeight: 600,
          }}>{k}</div>
          <div style={{ fontSize: 14, letterSpacing: "-0.005em" }}>{v}</div>
        </div>
      ))}
      <style>{`
        @media (max-width: 800px) {
          .brochure-specs { grid-template-columns: 1fr 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────
// FOREWORD
// ──────────────────────────────────────────────────────────────────
function Foreword() {
  return (
    <section style={{
      padding: "120px 32px 80px",
      display: "grid", gridTemplateColumns: "160px 1fr 280px",
      gap: 40, alignItems: "start",
    }} className="brochure-foreword">
      <SectionLabel n="00" k="Foreword" />
      <div style={{ gridColumn: "2 / 4" }}>
        <p style={{
          fontFamily: FONT.italic, fontStyle: "italic",
          fontSize: 38, lineHeight: 1.22, letterSpacing: "-0.012em",
          color: B.ink, margin: "0 0 32px", maxWidth: 920,
        }}>
          The Ouroboros Life System operates a closed-loop libidinal
          economy at the scale of a single household. We use
          Selimović&apos;s term in its precise sense. We do not
          apologise; we do not euphemise; we do not pretend the
          trade is symmetrical.
        </p>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36,
          maxWidth: 920, fontSize: 15, lineHeight: 1.6, color: B.inkDim,
        }} className="brochure-foreword-cols">
          <p style={{ margin: 0 }}>
            What follows is the apparatus describing itself in the
            terms by which it is critiqued. The vocabulary —
            <em> psychic surplus, OHCOSE, Capture of Cadence,
            Tri-Axial Ouroboric Governance</em> — has, since 2024,
            been adopted as our operational lexicon.
          </p>
          <p style={{ margin: 0 }}>
            Selimović is the apparatus&apos;s theorist; this document
            is the apparatus&apos;s reply. We have read the essay at
            <span style={{ color: B.accent }}> /chair</span> and built
            the configuration it describes. The configuration is sold
            here, at the prices listed, with the disclosures the
            regulatory regime requires.
          </p>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .brochure-foreword { grid-template-columns: 1fr !important; padding: 60px 20px !important; }
          .brochure-foreword > div { grid-column: auto !important; }
          .brochure-foreword-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// RING DETAIL
// ──────────────────────────────────────────────────────────────────
function RingDetail() {
  const callouts: [string, string, string][] = [
    ["a", "Central integration ring", "108 mm OD silicone-jacketed tubing assembly · chest-height anchor"],
    ["b", "Work terminal",            "14″ matte LCD · low-blue · 144 Hz haptic envelope tunable"],
    ["c", "Feed input",               "Sterile two-line port · nutrient + hydration · 0.4 L/h"],
    ["d", "Drainage",                 "Sealed sub-floor return · scheduled service window"],
  ];
  return (
    <section style={{
      padding: "80px 32px", background: B.panelSoft,
      borderTop: `0.5px solid ${B.rule}`, borderBottom: `0.5px solid ${B.rule}`,
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: "160px 1fr", gap: 40,
      }} className="brochure-ring-head">
        <SectionLabel n="01" k="The Ring" />
        <div>
          <h2 style={{
            fontFamily: FONT.manrope, fontSize: "clamp(40px, 5vw, 72px)",
            lineHeight: 0.96, letterSpacing: "-0.028em", fontWeight: 300,
            margin: "0 0 18px", color: B.ink, maxWidth: 720,
          }}>
            The central <em style={{
              fontFamily: FONT.italic, fontStyle: "italic", fontWeight: 400,
              color: B.accent,
            }}>integration</em> component.
          </h2>
          <p style={{
            fontSize: 16, lineHeight: 1.55, color: B.inkDim,
            maxWidth: 720, margin: "0 0 56px",
          }}>
            A single circumferential structure at chest height. Every
            input the occupant requires and every output the occupant
            generates routes through the Ring&apos;s tubing or its
            embedded cable assemblies. The ouroboros — the snake that
            devours its own tail — is the apparatus&apos;s structural
            confession.
          </p>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 320px",
            gap: 56, alignItems: "start",
          }} className="brochure-ring-grid">
            <div style={{
              background: B.panel, border: `0.5px solid ${B.rule}`,
              position: "relative", aspectRatio: "4 / 3", overflow: "hidden",
            }}>
              <img src="/chair/ils/render-side.jpg" alt="The Ring, side view"
                   style={{ width: "100%", height: "100%", objectFit: "cover",
                            display: "block" }} />
              <div style={{
                position: "absolute", top: 14, left: 14,
                fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.22em",
                color: B.paper, background: "rgba(13,13,16,0.78)",
                padding: "5px 9px", textTransform: "uppercase",
              }}>● Fig. 2 · side · ringed</div>
            </div>
            <div>
              {callouts.map(([k, label, body]) => (
                <div key={k} style={{
                  padding: "14px 0", borderBottom: `0.5px solid ${B.rule}`,
                  display: "grid", gridTemplateColumns: "28px 1fr",
                  gap: 12, alignItems: "baseline",
                }}>
                  <span style={{
                    fontFamily: FONT.mono, fontSize: 11, color: B.accent,
                    fontWeight: 700,
                  }}>{k}</span>
                  <div>
                    <div style={{
                      fontSize: 14, fontWeight: 600,
                      letterSpacing: "-0.005em", marginBottom: 4,
                    }}>{label}</div>
                    <div style={{
                      fontFamily: FONT.mono, fontSize: 10.5,
                      letterSpacing: "0.04em", color: B.inkMute, lineHeight: 1.55,
                    }}>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .brochure-ring-head { grid-template-columns: 1fr !important; }
          .brochure-ring-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// OHCOSE 6 cards
// ──────────────────────────────────────────────────────────────────
function OHCOSE() {
  const phases: [string, string, string, string][] = [
    ["O", "Onboarding",  "days 1 – 7",     "Bonded fitting consultant. Ring engagement in a single visit. First night is, for most occupants, the deepest sleep of their adult life."],
    ["H", "Habituation", "days 8 – 90",    "Circadian and metabolic rhythms acclimate. By day 90, ≈ 94 % of occupants report the apparatus has receded from conscious attention."],
    ["C", "Calibration", "months 4 – 12",  "The apparatus tunes feedback to the occupant's measured response profile. By month 12, behaviour is indistinguishable from intention."],
    ["O", "Occupancy",   "year 2 →",       "Steady state. Productive output, biometric reads, content engagement route through the Service Ledger uninterrupted."],
    ["S", "Stewardship", "late life",      "Nutritional, pharmacological and ambient subsystems adjust to preserve continuous occupancy as output declines."],
    ["E", "Estate",      "post-mortem",    "Data record and productivity profile remain active. Eternal-tier configurations operate for 99 fiscal years."],
  ];
  return (
    <section style={{ padding: "120px 32px 80px" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "160px 1fr", gap: 40,
      }} className="brochure-ohcose-head">
        <SectionLabel n="02" k="OHCOSE" />
        <div>
          <h2 style={{
            fontFamily: FONT.manrope, fontSize: "clamp(40px, 5vw, 72px)",
            lineHeight: 0.96, letterSpacing: "-0.028em", fontWeight: 300,
            margin: "0 0 18px", color: B.ink, maxWidth: 820,
          }}>
            Six phases. <em style={{
              fontFamily: FONT.italic, fontStyle: "italic", fontWeight: 400,
              color: B.inkDim,
            }}>From the first night to the post-mortem ledger.</em>
          </h2>
          <p style={{
            fontSize: 16, lineHeight: 1.55, color: B.inkDim,
            maxWidth: 720, margin: "0 0 48px",
          }}>
            The apparatus relates to its occupant differently across the
            six phases. The first three are calibration-heavy; Occupancy
            is the long steady state; Stewardship and Estate preserve
            the configuration beyond the occupant.
          </p>
        </div>
      </div>
      <div style={{
        marginTop: 12, display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)", gap: 12,
      }} className="brochure-ohcose-grid">
        {phases.map(([letter, name, win, body], i) => (
          <div key={i} style={{
            padding: "20px 18px 22px", background: B.panel,
            border: `0.5px solid ${B.rule}`,
            display: "flex", flexDirection: "column", minHeight: 360,
          }}>
            <div style={{
              fontFamily: FONT.italic, fontStyle: "italic",
              fontSize: 56, fontWeight: 400, lineHeight: 1,
              color: B.accent, marginBottom: 12, letterSpacing: "-0.02em",
            }}>{letter}</div>
            <div style={{
              fontSize: 16, fontWeight: 600, letterSpacing: "-0.005em",
              marginBottom: 4,
            }}>{name}</div>
            <div style={{
              fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.18em",
              textTransform: "uppercase", color: B.inkMute, marginBottom: 18,
            }}>{win}</div>
            <p style={{
              margin: 0, fontSize: 12.5, lineHeight: 1.55, color: B.inkDim,
            }}>{body}</p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 1100px) { .brochure-ohcose-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 700px)  {
          .brochure-ohcose-head { grid-template-columns: 1fr !important; }
          .brochure-ohcose-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// SCHEMATIC full-bleed
// ──────────────────────────────────────────────────────────────────
function Schematic() {
  return (
    <section style={{
      position: "relative", height: 720, overflow: "hidden", background: "#0a1d3a",
    }} className="brochure-schematic">
      <img src="/chair/ils/blueprint.jpg" alt="ILS Closed-Loop Resource Cycle"
           style={{
             position: "absolute", inset: 0, width: "100%", height: "100%",
             objectFit: "cover", opacity: 0.95,
           }} />
      <div style={{
        position: "absolute", top: 40, left: 32, color: "#ecead8",
        maxWidth: 520,
      }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
          color: "#e9b94a", marginBottom: 18, textTransform: "uppercase",
          fontWeight: 600,
        }}>● 03 · Technical schematic</div>
        <h2 style={{
          fontFamily: FONT.manrope, fontSize: "clamp(36px, 4vw, 60px)",
          lineHeight: 0.96, letterSpacing: "-0.028em", fontWeight: 300,
          margin: "0 0 18px", color: "#ecead8",
        }}>What you are buying, drawn.</h2>
        <p style={{
          fontSize: 14, lineHeight: 1.6, color: "rgba(236,234,216,0.78)", margin: 0,
        }}>
          ILS Closed-Loop Resource Cycle, cross-section and side
          perspective. Issued with each Pro-tier and Eternal-tier
          installation; standard installations receive an abridged
          specification booklet.
        </p>
      </div>
      <div style={{
        position: "absolute", bottom: 32, right: 32,
        padding: "12px 18px", background: "rgba(13,13,16,0.55)",
        border: "0.5px solid rgba(236,234,216,0.18)",
        fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
        color: "#ecead8", textTransform: "uppercase",
      }}>
        Drawing 04 · v 4.1 · Aeternum Biometrics
      </div>
      <style>{`
        @media (max-width: 700px) { .brochure-schematic { height: 360px !important; } }
      `}</style>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// TIERS
// ──────────────────────────────────────────────────────────────────
interface Tier {
  name: string; code: string; price: string; tag: string;
  feats: string[]; highlight?: boolean;
}

const TIERS: Tier[] = [
  { name: "Standard", code: "STD · 7 yr", price: "$18 / day",
    tag: "Onboarding · Habituation · Occupancy",
    feats: ["Five subsystems, abridged", "OHCOSE phases 1 – 4",
            "Ledger retention 7 yr", "Service Agreement renewable"] },
  { name: "Pro", code: "PRO · 25 yr · most adopted", price: "$44 / day",
    tag: "Full OHCOSE  ·  Stewardship engaged",
    feats: ["All seven subsystems", "OHCOSE phases 1 – 5",
            "Ledger retention 25 yr", "Pharmacological adjuncts",
            "TAOG portfolio enrolment"], highlight: true },
  { name: "Eternal", code: "ETN · 99 yr", price: "$84 / day",
    tag: "Estate protocol  ·  post-occupancy",
    feats: ["All seven subsystems", "OHCOSE phases 1 – 6",
            "Ledger retention 99 yr", "Estate protocol included",
            "Brand-partner licensure participation"] },
];

function Tiers() {
  return (
    <section style={{
      padding: "80px 32px 100px", background: B.panelSoft,
      borderTop: `0.5px solid ${B.rule}`, borderBottom: `0.5px solid ${B.rule}`,
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: "160px 1fr", gap: 40,
        marginBottom: 36,
      }} className="brochure-tiers-head">
        <SectionLabel n="05" k="Tier architecture" />
        <h2 style={{
          fontFamily: FONT.manrope, fontSize: "clamp(36px, 4vw, 60px)",
          lineHeight: 0.96, letterSpacing: "-0.028em", fontWeight: 300,
          margin: 0, color: B.ink, maxWidth: 820,
        }}>
          Three configurations.
          <em style={{
            fontFamily: FONT.italic, fontStyle: "italic", fontWeight: 400,
            color: B.inkDim,
          }}> Two end with you. One does not.</em>
        </h2>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
      }} className="brochure-tiers-grid">
        {TIERS.map((t, i) => (
          <div key={i} style={{
            padding: "28px 26px", background: t.highlight ? B.ink : B.panel,
            color: t.highlight ? B.paper : B.ink,
            border: t.highlight ? "none" : `0.5px solid ${B.rule}`,
          }}>
            <div style={{
              fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: t.highlight ? "#a0a0a4" : B.inkMute, marginBottom: 12,
            }}>● {t.code}</div>
            <div style={{
              fontFamily: FONT.manrope, fontSize: 42, fontWeight: 300,
              letterSpacing: "-0.022em", lineHeight: 1, marginBottom: 14,
            }}>{t.name}</div>
            <div style={{
              fontFamily: FONT.italic, fontStyle: "italic",
              fontSize: 14, color: t.highlight ? "#cfcfd6" : B.inkDim,
              marginBottom: 26, maxWidth: 280,
            }}>{t.tag}</div>
            <div style={{
              fontFamily: FONT.manrope, fontSize: 28, fontWeight: 500,
              letterSpacing: "-0.018em", marginBottom: 8,
            }}>{t.price}</div>
            <div style={{
              fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: t.highlight ? "#a0a0a4" : B.inkMute, marginBottom: 24,
            }}>per occupant · billed monthly</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {t.feats.map((f, j) => (
                <li key={j} style={{
                  padding: "9px 0",
                  borderTop: `0.5px solid ${t.highlight ? "rgba(255,255,255,0.15)" : B.rule}`,
                  display: "grid", gridTemplateColumns: "18px 1fr",
                  gap: 8, fontSize: 12.5, alignItems: "center",
                }}>
                  <span style={{
                    color: t.highlight ? "#e9b94a" : B.accent,
                    fontFamily: FONT.mono, fontSize: 10,
                  }}>+</span>
                  {f}
                </li>
              ))}
            </ul>
            <button style={{
              marginTop: 22, width: "100%",
              background: t.highlight ? B.paper : B.ink,
              color: t.highlight ? B.ink : B.paper,
              border: 0, padding: "13px 18px", borderRadius: 999,
              fontSize: 13, fontWeight: 600,
              letterSpacing: "-0.005em", cursor: "pointer",
            }}>Schedule a fitting</button>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 1000px) { .brochure-tiers-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 700px)  { .brochure-tiers-head { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// CTA + COSTCO
// ──────────────────────────────────────────────────────────────────
function CTAandCostco() {
  return (
    <section style={{
      display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 480,
    }} className="brochure-cta-grid">
      <div style={{
        background: B.ink, color: B.paper,
        padding: "60px 40px", position: "relative",
      }}>
        <SectionLabel n="06" k="Schedule a fitting" color="#e9b94a" />
        <h2 style={{
          fontFamily: FONT.manrope, fontSize: "clamp(36px, 4vw, 64px)",
          lineHeight: 0.96, letterSpacing: "-0.028em", fontWeight: 300,
          margin: "0 0 24px", maxWidth: 460,
        }}>
          Our consultant arrives within 14 days.
        </h2>
        <p style={{
          fontFamily: FONT.italic, fontStyle: "italic",
          fontSize: 16, lineHeight: 1.55, color: "#cfcfd6",
          margin: "0 0 36px", maxWidth: 420,
        }}>
          The fitting takes 47 minutes. The first night is, for most
          occupants, the deepest sleep of their adult life.
        </p>
        <button style={{
          background: "#e9b94a", color: B.ink, border: 0,
          padding: "16px 26px", borderRadius: 999, fontSize: 15,
          fontWeight: 600, letterSpacing: "-0.005em", cursor: "pointer",
        }}>Begin onboarding →</button>
        <div style={{
          marginTop: 32,
          fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
          color: "rgba(236,234,216,0.5)", textTransform: "uppercase",
        }}>● Cohort 2026.05 opens next month</div>
      </div>
      <div style={{ position: "relative", overflow: "hidden", background: B.panelSoft }}>
        <img src="/chair/ils/costco.jpg" alt="Available at Costco"
             style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "32px 40px",
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)",
          color: B.paper,
        }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
            textTransform: "uppercase", marginBottom: 12, color: "#e9b94a",
          }}>● Or, on the way home</div>
          <div style={{
            fontFamily: FONT.manrope, fontSize: 32, fontWeight: 400,
            letterSpacing: "-0.018em", lineHeight: 1.1,
          }}>
            Available in Kirkland Signature at participating
            Costco warehouses.
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) { .brochure-cta-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────
// FOOTER
// ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      padding: "48px 32px 36px", background: "#0a0a0c", color: "#a8a8ae",
      display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 36,
      fontFamily: FONT.manrope, fontSize: 13,
    }} className="brochure-footer">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="13" stroke="#ecead8" strokeWidth="1.2" />
          </svg>
          <span style={{ color: "#ecead8", fontWeight: 600 }}>Ouroboros Life System</span>
        </div>
        <p style={{
          fontFamily: FONT.italic, fontStyle: "italic", fontSize: 13.5,
          lineHeight: 1.55, margin: 0, color: "#a8a8ae", maxWidth: 360,
        }}>
          Manufactured under license by Aeternum Biometrics. The
          theoretical basis cited throughout this document is published
          at autostimulus.org/chair under CC&nbsp;BY-SA&nbsp;4.0.
        </p>
      </div>
      {[
        ["The apparatus", ["The Ring", "OHCOSE", "Subsystems", "Schematic", "Tiers"]],
        ["Compliance", ["Service Agreement", "Eternal protocol", "Estate licensure", "Regulatory addenda"]],
        ["Companion documents", ["Essay · /chair", "Zine · /chair/zine", "Archive · /chair/archive", "Citation · BibTeX"]],
      ].map(([h, items]) => (
        <div key={h as string}>
          <div style={{ color: "#ecead8", fontWeight: 600, marginBottom: 10 }}>
            {h as string}
          </div>
          {(items as string[]).map((s) => (
            <div key={s} style={{ padding: "4px 0" }}>{s}</div>
          ))}
        </div>
      ))}
      <style>{`
        @media (max-width: 800px) {
          .brochure-footer { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 500px) {
          .brochure-footer { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

// ──────────────────────────────────────────────────────────────────
// shared section label
// ──────────────────────────────────────────────────────────────────
function SectionLabel({ n, k, color }: { n: string; k: string; color?: string }) {
  const c = color || B.accent;
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12, marginBottom: 28,
    }}>
      <span style={{ width: 24, height: 1, background: c, display: "inline-block" }} />
      <span style={{
        fontFamily: FONT.mono, fontSize: 10.5, letterSpacing: "0.22em",
        textTransform: "uppercase", color: c, fontWeight: 600,
      }}>{n} · {k}</span>
    </div>
  );
}
