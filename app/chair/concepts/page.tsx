import Link from "next/link";
import type { Metadata } from "next";
import { MASTER, FONT } from "../_components/tokens";
import { PlateHeader, PlateFooter } from "../_components/PlateChrome";

export const metadata: Metadata = {
  title: { absolute: "Concepts — On the Chair" },
  description:
    "Working definitions of the project's named frameworks: Closed-Loop Libidinal Economy, Psychic Surplus, OHCOSE, TAOG, Capture of Cadence, IGLF, Libidinal Ouroboros, Satisfaction Loops.",
  alternates: { canonical: "/chair/concepts" },
};

const T = MASTER;

// ──────────────────────────────────────────────────────────────────
// /chair/concepts — card-index glossary surface.
// Distinct from essay form: 4-up grid of cards, no prose column.
// ──────────────────────────────────────────────────────────────────

interface Concept {
  id: string; title: string; tag: string;
  def: string; inh: string;
}

const CONCEPTS: Concept[] = [
  { id: "CLLE", title: "Closed-Loop Libidinal Economy", tag: "Master framework",
    def: "The economic-and-psychic system in which desire is captured and re-circulated by the same apparatus that produces it. Has no outside; satisfaction-seeking but never satiating.",
    inh: "Lyotard · Baudrillard" },
  { id: "PSY-SUR", title: "Psychic Surplus", tag: "Extracted commodity",
    def: "The portion of attention, affect, fantasy and motivation that exceeds what is strictly required for biological survival and that can be captured and re-routed without (short-term) compromise of function.",
    inh: "Marx, transposed · Berardi · Preciado" },
  { id: "OHCOSE", title: "OHCOSE", tag: "Service architecture",
    def: "Six-phase apparatus-occupant lifecycle: Onboarding · Habituation · Calibration · Occupancy · Stewardship · Estate. Each phase has its own extraction profile.",
    inh: "Selimović, own" },
  { id: "TAOG", title: "Tri-Axial Ouroboric Governance", tag: "Governance framework",
    def: "Three simultaneous axes — temporal (cadence), economic (metering, price), affective (modulation) — along which contemporary capture operates. Any analysis engaging only one axis misses the apparatus by the margin of the other two.",
    inh: "Stiegler · Berardi · Preciado · Marcuse" },
  { id: "CAD", title: "Capture of Cadence", tag: "Temporal mechanism",
    def: "Earlier extraction worked on quanta (hours, units). Contemporary extraction works on cadence — the rhythm at which the occupant's life proceeds. Cadence is not legible to the occupant the way labor-hours are.",
    inh: "Stiegler · Berardi" },
  { id: "IGLF", title: "Integrated Global Libidinal Frontier", tag: "Geopolitical scope",
    def: "The configuration's planetary extension — the apparatus's portfolio-level optimization across cohorts, operating on the population's aggregate response profile, above the level of any individual occupant.",
    inh: "Lyotard · cybernetics tradition" },
  { id: "L-OURO", title: "Libidinal Ouroboros", tag: "Structural figure",
    def: "The figure of the snake devouring its own tail — the apparatus's structural confession. Every output the occupant generates routes back as input.",
    inh: "Iconographic" },
  { id: "SAT-LP", title: "Satisfaction Loops", tag: "Operational unit",
    def: "Baudrillard's 'perpetual cycle of mild satisfaction and renewed longing,' made architectural. The apparatus's atomic operating unit.",
    inh: "Baudrillard · Marcuse" },
];

export default function ConceptsPage() {
  return (
    <article>
      <PlateHeader plate="R.0" route="/chair/concepts" code="DOSS · OLS · GLOSSARY" />

      <div className="chair-pad" style={{ padding: "60px 80px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <Link href="/chair/essay" style={{
          fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
          color: T.inkMute, textTransform: "uppercase",
          textDecoration: "none", display: "inline-block", marginBottom: 28,
        }}>← On the Chair · index</Link>

        <div style={{
          fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
          color: T.accent, textTransform: "uppercase", fontWeight: 600,
          marginBottom: 14,
        }}>Reference · Glossary</div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 360px", gap: 60,
          alignItems: "end", marginBottom: 48,
        }} className="concepts-head">
          <h1 style={{
            fontFamily: FONT.serif, fontSize: "clamp(56px, 9vw, 84px)",
            lineHeight: 0.94, letterSpacing: "-0.024em",
            fontStyle: "italic", fontWeight: 400, margin: 0, color: T.ink,
          }}>Concepts.</h1>
          <p style={{
            margin: 0, fontFamily: FONT.serif, fontSize: 15,
            lineHeight: 1.55, color: T.inkDim, fontStyle: "italic",
          }}>
            Working definitions of the project&apos;s named frameworks.
            Each is provisional; each is in active use across the
            essay, the subsystems, and the precedents. Refer back as
            needed.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16,
          borderTop: `0.75px solid ${T.rule}`, paddingTop: 16,
        }} className="concepts-grid">
          {CONCEPTS.map((it) => (
            <div key={it.id} style={{
              padding: "22px 22px 24px", border: `0.5px solid ${T.rule}`,
              background: "rgba(255,253,245,0.45)",
              display: "flex", flexDirection: "column", minHeight: 360,
            }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
                color: T.accent, textTransform: "uppercase",
                fontWeight: 700, marginBottom: 10,
              }}>{it.id}</div>
              <h3 style={{
                fontFamily: FONT.serif, fontSize: 22, fontStyle: "italic",
                fontWeight: 500, letterSpacing: "-0.005em", color: T.ink,
                margin: "0 0 8px", lineHeight: 1.1,
              }}>{it.title}</h3>
              <div style={{
                fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.16em",
                color: T.inkMute, textTransform: "uppercase", marginBottom: 14,
              }}>{it.tag}</div>
              <p style={{
                fontFamily: FONT.serif, fontSize: 13, lineHeight: 1.55,
                color: T.ink, margin: 0, flex: 1,
              }}>{it.def}</p>
              <div style={{
                marginTop: 16, paddingTop: 12,
                borderTop: `0.5px solid ${T.rule}`,
                fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.16em",
                textTransform: "uppercase", color: T.inkMute, lineHeight: 1.5,
              }}>
                <div style={{ color: T.inkMute, marginBottom: 4 }}>Inheritance</div>
                <div style={{
                  color: T.inkDim, letterSpacing: "0.1em", fontWeight: 500,
                }}>{it.inh}</div>
              </div>
            </div>
          ))}
        </div>

        <p style={{
          marginTop: 36, maxWidth: 720,
          fontFamily: FONT.serif, fontSize: 13.5, lineHeight: 1.6,
          color: T.inkDim, fontStyle: "italic",
        }}>
          The concepts here are working definitions, provisional and
          open to revision; revisions are tracked in{" "}
          <Link href="/chair/colophon" style={{
            color: T.ink, textDecorationColor: T.accent,
          }}>/chair/colophon</Link>.
        </p>
      </div>

      <PlateFooter folio="38" total="42" section="Concepts · glossary" />

      <style>{`
        @media (max-width: 1100px) { .concepts-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 700px)  {
          .concepts-head { grid-template-columns: 1fr !important; gap: 18px !important; }
          .concepts-grid { grid-template-columns: 1fr !important; }
          .concepts-grid > div { min-height: 0 !important; padding: 18px 18px 20px !important; }
        }
      `}</style>
    </article>
  );
}
