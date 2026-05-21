import type { Metadata } from "next";
import { MASTER, FONT } from "../_components/tokens";
import { PlateHeader, PlateFooter, ChairGlyph } from "../_components/PlateChrome";

export const metadata: Metadata = {
  title: { absolute: "Lineage — On the Chair" },
  description:
    "Six companion essays to On the Chair § VII, taking the brochure's claimed 160-year design lineage seriously enough to verify it.",
  alternates: { canonical: "/chair/lineage" },
};

const T = MASTER;

export const LINEAGE = [
  { slug: "labor-compensator",     num: "01", year: 1865, title: "The Labor Compensator",
    subtitle: "Half real and half marketing. The half that is real is real enough.",
    tag: "real" },
  { slug: "efficiency-enhancer",   num: "02", year: 1900, title: "The Efficiency Enhancer",
    subtitle: "The seat as productive locus, the operator as bottleneck.",
    tag: "real" },
  { slug: "dynamic-dynamo",        num: "03", year: 1925, title: "The Dynamic Dynamo",
    subtitle: "Western Electric's Hawthorne stations and the Ford River Rouge floor.",
    tag: "real" },
  { slug: "knowledge-chair",       num: "04", year: 1955, title: "The Knowledge Chair",
    subtitle: "Hartman's Integrated Office Workstation. Eighty-three units shipped.",
    tag: "thin" },
  { slug: "virtual-ouroboros",     num: "05", year: 1985, title: "The Virtual Ouroboros",
    subtitle: "The brochure backdates by twenty years. The phenomenon is real; the date isn't.",
    tag: "fabricated" },
  { slug: "ouroboros-life-system", num: "06", year: 2024, title: "The Ouroboros Life System",
    subtitle: "The seventh seat. The only iteration I have not had to verify against historical records.",
    tag: "real" },
] as const;

const TAG_COLOR: Record<string, string> = {
  real: T.accent, thin: "#a06820", fabricated: "#7a3a55",
};

export default function LineageIndex() {
  const minY = 1865;
  const maxY = 2025;

  return (
    <article>
      <PlateHeader plate="VII.0" route="/chair/lineage" code="DOSS · OLS · LINEAGE" />

      <div style={{ padding: "60px 80px 0", maxWidth: 1200, margin: "0 auto" }}>
        <a href="/chair" style={{
          fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
          color: T.inkMute, textTransform: "uppercase",
          textDecoration: "none", display: "inline-block", marginBottom: 36,
        }}>← On the Chair · § VII</a>

        <div style={{
          fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
          color: T.accent, textTransform: "uppercase", fontWeight: 600,
          marginBottom: 12,
        }}>Companion · § VII Extended</div>

        <h1 style={{
          fontFamily: FONT.serif, fontSize: "clamp(48px, 7vw, 64px)",
          lineHeight: 0.96, letterSpacing: "-0.022em",
          fontStyle: "italic", fontWeight: 400, margin: "0 0 16px", color: T.ink,
        }}>The 160-Year Lineage</h1>

        <p style={{
          maxWidth: 760, marginBottom: 50,
          fontFamily: FONT.serif, fontSize: 17, lineHeight: 1.55,
          fontStyle: "italic", color: T.inkDim,
        }}>
          Six iterations, with the brochure&apos;s claims checked
          against the historical record. What was real, what
          wasn&apos;t, and what survives the verification. The
          interactive scrubber lives on the essay page; this is the
          full catalogue.
        </p>

        {/* horizontal timeline */}
        <div style={{
          position: "relative", height: 80, marginBottom: 24,
        }} className="lin-timeline">
          <div style={{
            position: "absolute", left: 0, right: 0, top: 40,
            height: 1, background: T.ink, opacity: 0.55,
          }} />
          {LINEAGE.map((d) => {
            const pct = ((d.year - minY) / (maxY - minY)) * 100;
            const c = TAG_COLOR[d.tag];
            return (
              <div key={d.slug} style={{
                position: "absolute", top: 0, left: `${pct}%`,
                transform: "translateX(-50%)", textAlign: "center", width: 100,
              }}>
                <div style={{
                  fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.06em",
                  color: T.inkDim, marginBottom: 4,
                }}>{d.year}</div>
                <div style={{
                  width: 10, height: 10, borderRadius: "50%", margin: "26px auto 0",
                  background: T.paper, border: `1.5px solid ${c}`,
                }} />
              </div>
            );
          })}
        </div>

        <ol style={{
          listStyle: "none", padding: 0, margin: 0,
          borderTop: `0.75px solid ${T.rule}`,
        }}>
          {LINEAGE.map((row) => {
            const c = TAG_COLOR[row.tag];
            return (
              <li key={row.slug} style={{
                borderBottom: `0.75px solid ${T.rule}`,
              }}>
                <a href={`/chair/lineage/${row.slug}`} style={{
                  display: "grid",
                  gridTemplateColumns: "60px 70px 110px 1fr 180px 60px",
                  gap: 20, alignItems: "center",
                  padding: "22px 0", textDecoration: "none", color: "inherit",
                }} className="lin-row">
                  <span style={{
                    fontFamily: FONT.mono, fontSize: 12, color: T.accent,
                    fontWeight: 700, letterSpacing: "0.1em",
                  }}>{row.num}</span>
                  <ChairGlyph size={42} stroke={T.inkDim} />
                  <span style={{
                    fontFamily: FONT.mono, fontSize: 12, color: T.ink,
                    fontWeight: 600, letterSpacing: "0.06em",
                  }}>{row.year}</span>
                  <div>
                    <div style={{
                      fontFamily: FONT.serif, fontSize: 22, fontStyle: "italic",
                      fontWeight: 500, letterSpacing: "-0.005em",
                      color: T.ink, marginBottom: 5,
                    }}>{row.title}</div>
                    <div style={{
                      fontFamily: FONT.serif, fontSize: 13, lineHeight: 1.5,
                      color: T.inkDim,
                    }}>{row.subtitle}</div>
                  </div>
                  <span style={{
                    padding: "2px 9px", background: c, color: T.paper,
                    fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.18em",
                    textTransform: "uppercase", fontWeight: 600, borderRadius: 2,
                    width: "fit-content",
                  }}>
                    {row.tag === "real" ? "● verified" :
                     row.tag === "thin" ? "◐ thinly documented" :
                                          "○ partly fabricated"}
                  </span>
                  <span style={{
                    fontFamily: FONT.mono, fontSize: 14, color: T.accent,
                    textAlign: "right",
                  }}>→</span>
                </a>
              </li>
            );
          })}
        </ol>

        <p style={{
          margin: "40px 0 80px", maxWidth: 760,
          fontFamily: FONT.serif, fontSize: 13.5, lineHeight: 1.6,
          color: T.inkDim, fontStyle: "italic",
        }}>
          The lineage is partial. Two of the named devices shipped only
          in tiny quantities; the connections between iterations are
          reconstructed retrospectively. The morphological argument is
          independent of the contemporaneous-development one.
        </p>
      </div>

      <PlateFooter folio="33" total="42" section="Lineage · index" />

      <style>{`
        @media (max-width: 900px) {
          .lin-row { grid-template-columns: 40px 80px 1fr !important; row-gap: 8px; }
          .lin-row > :nth-child(2), .lin-row > :nth-child(5), .lin-row > :nth-child(6) { display: none; }
          .lin-timeline { display: none; }
        }
      `}</style>
    </article>
  );
}
