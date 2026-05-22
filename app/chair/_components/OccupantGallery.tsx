import { FONT } from "./tokens";

// ──────────────────────────────────────────────────────────────────
// OccupantGallery — the brochure's testimonial spine, rebuilt around
// the two occupant photographs (with HUDs preserved). Two-up gallery,
// each card: image with corner stamps preserved, name + tier + verified
// badge, italic quote.
//
// Expects two images at public/chair/ils/occupant-{sophia|research}.jpg.
// ──────────────────────────────────────────────────────────────────

interface Tokens {
  paper: string;
  panel: string;
  ink: string;
  inkDim: string;
  inkMute: string;
  rule: string;
  accent: string;
}

interface OccupantGalleryProps {
  tokens: Tokens;
}

export function OccupantGallery({ tokens: B }: OccupantGalleryProps) {
  const occupants = [
    {
      src: "/chair/ils/occupant-sophia.jpg",
      name: "Sophia",
      tier: "Pro · Cohort 2026.04",
      phase: "OCCUPANCY · month 7",
      quote: '"I had been afraid the chair would close me in. It opened the day. The plants have done better since I stopped getting up to water them — the apparatus does the watering."',
    },
    {
      src: "/chair/ils/occupant-research.jpg",
      name: "M.K.",
      tier: "Pro · Research-tier · Cohort 2026.03",
      phase: "CALIBRATION · month 14",
      quote: '"I asked for research access; the Service Agreement gave me operator access. The distinction was, in retrospect, never clarified to me."',
    },
  ];

  return (
    <section className="brochure-occupants-section" style={{
      padding: "120px 32px 110px", background: B.paper,
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: "160px 1fr", gap: 40,
        marginBottom: 48,
      }} className="brochure-section-head">
        <SectionLabel n="04" k="Occupants in residence" tokens={B} />
        <div>
          <h2 style={{
            fontFamily: FONT.manrope, fontSize: "clamp(34px, 6vw, 64px)", lineHeight: 0.96,
            letterSpacing: "-0.028em", fontWeight: 300, margin: "0 0 18px",
            color: B.ink, maxWidth: 880,
          }}>
            Selected from the
            <em style={{
              fontFamily: FONT.italic, fontStyle: "italic", fontWeight: 400,
              color: B.accent,
            }}> 2026.04 cohort.</em>
          </h2>
          <p style={{
            fontSize: 16, lineHeight: 1.55, color: B.inkDim,
            maxWidth: 720, margin: 0,
          }}>
            Two of the 2 144 occupants currently in residence under
            the 2026.04 cohort agreement. Both are shown with their
            real-time HUDs unredacted. The HUDs are the apparatus&apos;s
            own — what the occupant sees is what we see.
          </p>
        </div>
      </div>

      <div className="brochure-occupants" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,
        marginBottom: 36,
      }}>
        {occupants.map((o, i) => (
          <div key={i} style={{
            border: `0.5px solid ${B.rule}`, background: B.panel,
            overflow: "hidden",
          }}>
            <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden" }}>
              <img src={o.src} alt={o.name}
                   style={{ width: "100%", height: "100%", objectFit: "cover",
                            display: "block" }} />
              <div style={{
                position: "absolute", top: 12, left: 12,
                fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.22em",
                color: "#fff", background: "rgba(13,13,16,0.78)",
                padding: "5px 9px", textTransform: "uppercase",
              }}>● Cohort {2026 - (i % 2)}.0{4 - i}</div>
              <div style={{
                position: "absolute", top: 12, right: 12,
                fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.22em",
                color: "#fff", background: "rgba(21,53,108,0.85)",
                padding: "5px 9px", textTransform: "uppercase",
              }}>{o.phase}</div>
            </div>
            <div style={{ padding: "26px 28px" }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "baseline", marginBottom: 16,
              }}>
                <div>
                  <div style={{
                    fontFamily: FONT.manrope, fontSize: 26, fontWeight: 500,
                    letterSpacing: "-0.018em", lineHeight: 1, color: B.ink,
                  }}>{o.name}</div>
                  <div style={{
                    marginTop: 6, fontFamily: FONT.mono, fontSize: 9.5,
                    letterSpacing: "0.22em", textTransform: "uppercase",
                    color: B.inkMute,
                  }}>{o.tier}</div>
                </div>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.22em",
                  textTransform: "uppercase", color: B.accent, fontWeight: 600,
                  padding: "4px 9px", border: `0.5px solid ${B.accent}`,
                }}>verified</span>
              </div>
              <p style={{
                margin: 0, fontFamily: FONT.italic, fontStyle: "italic",
                fontSize: 20, lineHeight: 1.4, color: B.ink,
                letterSpacing: "-0.008em",
              }}>{o.quote}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        padding: "36px 0 0", borderTop: `0.5px solid ${B.rule}`,
        textAlign: "center",
      }}>
        <p style={{
          margin: "0 auto", maxWidth: 900,
          fontFamily: FONT.italic, fontStyle: "italic", fontWeight: 400,
          fontSize: "clamp(20px, 3.4vw, 28px)", lineHeight: 1.32, letterSpacing: "-0.012em",
          color: B.inkDim,
        }}>
          &ldquo;I am not, on the whole, less happy. I am less sure what I
          would do with the chair turned off.&rdquo;
        </p>
        <div style={{
          marginTop: 22, fontFamily: FONT.mono, fontSize: 10,
          letterSpacing: "0.22em", textTransform: "uppercase",
          color: B.inkMute,
        }}>
          — selected occupant testimony,
          edited for length and consistency by Aeternum Editorial
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .brochure-section-head { grid-template-columns: 1fr !important; gap: 18px !important; margin-bottom: 28px !important; }
          .brochure-occupants { grid-template-columns: 1fr !important; }
          .brochure-occupants > div > div:last-child { padding: 20px 18px !important; }
        }
        @media (max-width: 700px) {
          .brochure-occupants-section { padding: 56px 16px 56px !important; }
        }
      `}</style>
    </section>
  );
}

function SectionLabel({ n, k, tokens: B, color }: {
  n: string; k: string; tokens: Tokens; color?: string;
}) {
  const c = color || B.accent;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
      <span style={{ width: 24, height: 1, background: c, display: "inline-block" }} />
      <span style={{
        fontFamily: FONT.mono, fontSize: 10.5, letterSpacing: "0.22em",
        textTransform: "uppercase", color: c, fontWeight: 600,
      }}>{n} · {k}</span>
    </div>
  );
}
