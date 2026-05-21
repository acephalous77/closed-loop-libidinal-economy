import type { Metadata } from "next";
import { MASTER, FONT } from "../_components/tokens";
import { PlateHeader, PlateFooter, ChairGlyph } from "../_components/PlateChrome";

export const metadata: Metadata = {
  title: { absolute: "The Seven Subsystems — On the Chair" },
  description:
    "Seven companion essays to On the Chair § V, each treating one of the apparatus's subsystems in depth.",
  alternates: { canonical: "/chair/subsystems" },
};

const T = MASTER;

// ──────────────────────────────────────────────────────────────────
// /chair/subsystems — index of 7.
// Each row: plate code, glyph, name, blurb, lineage column.
// ──────────────────────────────────────────────────────────────────

export const SUBSYSTEMS = [
  { slug: "desire-engines",              num: "01", title: "Desire Engines",
    subtitle: "Content surface producing what it then fulfills.",
    inheritance: "Deleuze & Guattari · Baudrillard · McLuhan", key: "a" },
  { slug: "consent-loops",               num: "02", title: "Consent Loops",
    subtitle: "Ritualised agreement architecture.",
    inheritance: "Foucault · legal-positivist tradition", key: "b" },
  { slug: "compliance-monitors",         num: "03", title: "Compliance Monitors",
    subtitle: "The panopticon at saturation.",
    inheritance: "Foucault · Bentham · Zuboff", key: "c" },
  { slug: "surplus-reservoirs",          num: "04", title: "Surplus Reservoirs",
    subtitle: "Where the apparatus stores what it has extracted.",
    inheritance: "Marx, transposed · Zuboff", key: "d" },
  { slug: "feedback-rituals",            num: "05", title: "Feedback Rituals",
    subtitle: "Variable-ratio reinforcement, deployed across consumer life.",
    inheritance: "Klein · Winnicott · Skinner · casino industry", key: "e" },
  { slug: "affective-signal-translators", num: "06", title: "Affective Signal Translators",
    subtitle: "Every other subsystem's afferent nerve.",
    inheritance: "Preciado · Damasio · affective computing", key: "f" },
  { slug: "algorithmic-libido-governors", num: "07", title: "Algorithmic Libido Governors",
    subtitle: "The apparatus's central nervous system.",
    inheritance: "Lyotard · Berardi · cybernetics tradition", key: "g" },
] as const;

export default function SubsystemsIndex() {
  return (
    <article>
      <PlateHeader plate="V.0" route="/chair/subsystems" code="DOSS · OLS · INDEX" />

      <div style={{ padding: "60px 80px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <a href="/chair" style={{
          fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
          color: T.inkMute, textTransform: "uppercase",
          textDecoration: "none", display: "inline-block", marginBottom: 36,
        }}>← On the Chair · § V</a>

        <div style={{
          fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
          color: T.accent, textTransform: "uppercase", fontWeight: 600,
          marginBottom: 12,
        }}>Companion · § V Extended</div>

        <h1 style={{
          fontFamily: FONT.serif, fontSize: "clamp(56px, 8vw, 76px)",
          lineHeight: 0.96, letterSpacing: "-0.022em",
          fontStyle: "italic", fontWeight: 400,
          margin: "0 0 22px", color: T.ink,
        }}>The Seven<br />Subsystems</h1>

        <p style={{
          maxWidth: 620, marginTop: 0, marginBottom: 48,
          fontFamily: FONT.serif, fontSize: 17, lineHeight: 1.55,
          fontStyle: "italic", color: T.inkDim,
        }}>
          Seven companion essays, treating each of the apparatus&apos;s
          subsystems in depth. The order is the order they appear in
          the main essay&apos;s § V. Each follows a common skeleton —
          figure, definition, mechanism, inheritance, in the chair, a
          note — so the seven read as a series.
        </p>

        <ol style={{
          listStyle: "none", padding: 0, margin: 0,
          borderTop: `0.75px solid ${T.rule}`,
        }}>
          {SUBSYSTEMS.map((row) => (
            <li key={row.slug} style={{
              borderBottom: `0.75px solid ${T.rule}`,
            }}>
              <a href={`/chair/subsystems/${row.slug}`} style={{
                display: "grid",
                gridTemplateColumns: "60px 70px 1fr 280px 60px",
                gap: 24, alignItems: "center",
                padding: "22px 0", textDecoration: "none", color: "inherit",
              }} className="sub-row">
                <span style={{
                  fontFamily: FONT.mono, fontSize: 12, color: T.accent,
                  fontWeight: 700, letterSpacing: "0.1em",
                }}>{row.num}</span>
                <ChairGlyph size={42} stroke={T.inkDim} phase={row.key} />
                <div>
                  <div style={{
                    fontFamily: FONT.serif, fontSize: 24, fontStyle: "italic",
                    fontWeight: 500, letterSpacing: "-0.005em",
                    color: T.ink, marginBottom: 6,
                  }}>{row.title}</div>
                  <div style={{
                    fontFamily: FONT.serif, fontSize: 14, lineHeight: 1.5,
                    color: T.inkDim,
                  }}>{row.subtitle}</div>
                </div>
                <div style={{
                  fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.16em",
                  textTransform: "uppercase", color: T.inkMute, lineHeight: 1.55,
                }}>{row.inheritance}</div>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 14, color: T.accent,
                  textAlign: "right",
                }}>→</span>
              </a>
            </li>
          ))}
        </ol>

        <p style={{
          marginTop: 36, maxWidth: 720,
          fontFamily: FONT.serif, fontSize: 13.5, lineHeight: 1.6,
          color: T.inkDim, fontStyle: "italic",
        }}>
          The list of seven is misleading if read as a list of seven
          separate things. The subsystems are facets of one operation —
          the closed loop running — and the analytic question is rarely{" "}
          <em>which subsystem</em> but <em>which moment of the loop the
          occupant is currently inside</em>.
        </p>
      </div>

      <PlateFooter folio="22" total="42" section="Subsystems · Index" />

      <style>{`
        @media (max-width: 900px) {
          .sub-row {
            grid-template-columns: 40px 1fr !important;
            row-gap: 8px;
          }
          .sub-row > :nth-child(2),
          .sub-row > :nth-child(4),
          .sub-row > :nth-child(5) { display: none; }
        }
      `}</style>
    </article>
  );
}
