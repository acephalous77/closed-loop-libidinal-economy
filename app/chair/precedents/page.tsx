import type { Metadata } from "next";
import { MASTER, FONT } from "../_components/tokens";
import { PlateHeader, PlateFooter } from "../_components/PlateChrome";

export const metadata: Metadata = {
  title: { absolute: "Precedents — On the Chair" },
  description: "Four well-documented cases the chair essay's §VI names: Meta · TikTok · Pornhub · Social Credit.",
  alternates: { canonical: "/chair/precedents" },
};

const T = MASTER;

export const PRECEDENTS = [
  { slug: "meta-emotional-contagion", num: "01",
    title: "Meta · Emotional Contagion (2014)",
    subtitle: "The Desire Engine, operating at population scale, openly.",
    subsystem: "Desire Engine", year: "2014" },
  { slug: "tiktok-cadence", num: "02",
    title: "TikTok · Cadence Engine",
    subtitle: "The Affective Signal Translator, deployed at population scale.",
    subsystem: "Affective Signal Translator", year: "2017 →" },
  { slug: "pornhub-preference-assignment", num: "03",
    title: "Pornhub · Preference Assignment",
    subtitle: "The Desire Engine, on the most intimate possible variable.",
    subsystem: "Desire Engine", year: "≈ 2018 →" },
  { slug: "social-credit-system", num: "04",
    title: "China · Social Credit System",
    subtitle: "The Compliance Monitor, in state form.",
    subsystem: "Compliance Monitor", year: "2014 →" },
] as const;

export default function PrecedentsIndex() {
  return (
    <article>
      <PlateHeader plate="VI.0" route="/chair/precedents" code="DOSS · OLS · INDEX" />

      <div style={{ padding: "60px 80px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <a href="/chair" style={{
          fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
          color: T.inkMute, textTransform: "uppercase",
          textDecoration: "none", display: "inline-block", marginBottom: 36,
        }}>← On the Chair · § VI</a>

        <div style={{
          fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
          color: T.accent, textTransform: "uppercase", fontWeight: 600,
          marginBottom: 12,
        }}>Companion · § VI Extended</div>

        <h1 style={{
          fontFamily: FONT.serif, fontSize: "clamp(56px, 8vw, 76px)",
          lineHeight: 0.96, letterSpacing: "-0.022em",
          fontStyle: "italic", fontWeight: 400,
          margin: "0 0 22px", color: T.ink,
        }}>Precedents.</h1>

        <p style={{
          maxWidth: 620, marginTop: 0, marginBottom: 48,
          fontFamily: FONT.serif, fontSize: 17, lineHeight: 1.55,
          fontStyle: "italic", color: T.inkDim,
        }}>
          The chair is a figure; the apparatus is not. These are the
          four well-documented cases the main essay&apos;s § VI names.
          Each is a deployment, today, of a subsystem the chair
          integrates.
        </p>

        <ol style={{
          listStyle: "none", padding: 0, margin: 0,
          borderTop: `0.75px solid ${T.rule}`,
        }}>
          {PRECEDENTS.map((row) => (
            <li key={row.slug} style={{ borderBottom: `0.75px solid ${T.rule}` }}>
              <a href={`/chair/precedents/${row.slug}`} style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr 280px 60px",
                gap: 24, alignItems: "center",
                padding: "22px 0", textDecoration: "none", color: "inherit",
              }} className="prec-row">
                <span style={{
                  fontFamily: FONT.mono, fontSize: 12, color: T.accent,
                  fontWeight: 700, letterSpacing: "0.1em",
                }}>{row.num}</span>
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
                }}>{row.subsystem} · {row.year}</div>
                <span style={{
                  fontFamily: FONT.mono, fontSize: 14, color: T.accent,
                  textAlign: "right",
                }}>→</span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      <PlateFooter folio="30" total="42" section="Precedents · Index" />

      <style>{`
        @media (max-width: 800px) {
          .prec-row { grid-template-columns: 40px 1fr !important; row-gap: 8px; }
          .prec-row > :nth-child(3), .prec-row > :nth-child(4) { display: none; }
        }
      `}</style>
    </article>
  );
}
