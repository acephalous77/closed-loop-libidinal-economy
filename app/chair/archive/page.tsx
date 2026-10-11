import Link from "next/link";
import type { Metadata } from "next";
import { ARCHIVE, FONT } from "../_components/tokens";
import { PlateHeader, PlateFooter } from "../_components/PlateChrome";

export const metadata: Metadata = {
  title: { absolute: "Imperial Archive — Ouroboros Life System" },
  alternates: { canonical: "/chair/archive" },
  robots: { index: false }, // hidden from search — discoverable only by clicking through
};

const A = ARCHIVE;

// ──────────────────────────────────────────────────────────────────
// /chair/archive — catalog of 2197 entries.
// REGISTER INVERSION: scholarly slate-blue cream.
// ──────────────────────────────────────────────────────────────────

export const ENTRIES = [
  { num: "04", slug: "ouroboros-ring",       code: "2197.04",
    title: "On the Ouroboros Ring",
    summary: "The apparatus's central design conceit, retrospectively considered.",
    topic: "Design" },
  { num: "07", slug: "period-typography",    code: "2197.07",
    title: "The 'Goming Screen' & Period Typography",
    summary: "On the irregular type in the marketing materials, framed as evidence of machine production.",
    topic: "Material" },
  { num: "11", slug: "pro-tier-moratorium",  code: "2197.11",
    title: "The Pro-Tier Moratorium of 2049",
    summary: "A regulatory event that briefly suspended the apparatus's most successful configuration.",
    topic: "Regulation" },
  { num: "14", slug: "proto-apparatuses",    code: "2197.14",
    title: "Proto-Apparatuses · Social Media Ancestry",
    summary: "On platform-era systems that prefigured the apparatus.",
    topic: "Lineage" },
  { num: "18", slug: "lineage-claim",        code: "2197.18",
    title: "The Lineage Claim",
    summary: "Six predecessor devices the apparatus claimed as its tradition. The retcon and its work.",
    topic: "Lineage" },
  { num: "22", slug: "eternal-tier",         code: "2197.22",
    title: "On the Eternal Tier · Post-mortem",
    summary: "The configuration that promised inheritance beyond cessation.",
    topic: "Configuration" },
  { num: "26", slug: "testimonial-analysis", code: "2197.26",
    title: "The Testimonial Voice",
    summary: "On the period's conflation of confinement and gratitude.",
    topic: "Material" },
  { num: "29", slug: "sensor-stack",         code: "2197.29",
    title: "Sensor Stack · Class III Reading",
    summary: "The multi-modal sensor array cataloged against contemporary medical-device taxonomy.",
    topic: "Design" },
  { num: "33", slug: "cohort-2049-cataloging", code: "2197.33",
    title: "Cohort 2049 Cataloging Operation",
    summary: "The state action by which the surviving devices were defaced and sealed.",
    topic: "Regulation" },
] as const;

export default function ArchiveIndex() {
  return (
    <article style={{
      background: A.paper, color: A.ink,
      fontFamily: "var(--font-spectral), Georgia, serif",
      minHeight: "100vh",
    }}>
      <PlateHeader plate="VIII.0" route="/chair/archive"
                   code="ARCHIVE · INDEX · 2197" tokens={A} />

      <div className="chair-pad" style={{ padding: "60px 100px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 360px",
          gap: 64, alignItems: "end", marginBottom: 36,
        }} className="arc-head">
          <div>
            <h1 style={{
              fontFamily: FONT.serif, fontSize: "clamp(56px, 9vw, 80px)",
              lineHeight: 0.94, letterSpacing: "-0.022em",
              fontStyle: "italic", fontWeight: 400, margin: 0, color: A.ink,
            }}>Catalog.</h1>
            <div style={{
              fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
              color: A.accent, textTransform: "uppercase", fontWeight: 600,
              marginTop: 14,
            }}>● Imperial Archive · Dossier 2197</div>
          </div>
          <p style={{
            margin: 0, fontFamily: FONT.serif, fontSize: 15, lineHeight: 1.55,
            color: A.inkDim, fontStyle: "italic",
          }}>
            Encyclopedia entries written c. 2197, looking back at the
            Ouroboros Life System as a 21st-century artifact. The
            archive is hidden from search; the only surface paths in
            are discreet markers scattered through the brochure.
          </p>
        </div>

        <div style={{
          display: "flex", gap: 24, padding: "12px 0",
          borderTop: `0.5px solid ${A.rule}`,
          borderBottom: `0.5px solid ${A.rule}`,
          marginBottom: 12, alignItems: "baseline",
        }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
            color: A.inkMute, textTransform: "uppercase",
          }}>Sort</div>
          <span style={{
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", color: A.accent, fontWeight: 700,
            borderBottom: `1px solid ${A.accent}`, paddingBottom: 2,
          }}>By code</span>
          <div style={{
            marginLeft: "auto",
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
            color: A.inkMute, textTransform: "uppercase",
          }}>{ENTRIES.length} entries · further filings in compilation</div>
        </div>

        <table style={{
          width: "100%", borderCollapse: "collapse", tableLayout: "fixed",
        }} className="arc-table">
          <thead>
            <tr style={{ borderBottom: `0.75px solid ${A.rule}` }}>
              <th style={{ ...th, width: 50 }}>#</th>
              <th style={{ ...th, width: 110 }}>Code</th>
              <th style={th}>Title</th>
              <th style={{ ...th, width: 150 }}>Topic</th>
              <th style={{ ...th, width: 60, textAlign: "right" }}>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {ENTRIES.map((e) => (
              <tr key={e.code} style={{ borderBottom: `0.5px solid ${A.ruleSoft}` }}>
                <td style={{
                  ...td,
                  fontFamily: FONT.mono, fontSize: 11, color: A.inkMute,
                  letterSpacing: "0.06em",
                }}>{e.num}</td>
                <td style={{
                  ...td,
                  fontFamily: FONT.mono, fontSize: 11.5, color: A.accent,
                  fontWeight: 600, letterSpacing: "0.06em",
                }}>{e.code}</td>
                <td style={td}>
                  <Link href={`/chair/archive/${e.slug}`} style={{
                    color: "inherit", textDecoration: "none", display: "block",
                  }}>
                    <div style={{
                      fontFamily: FONT.serif, fontSize: 17, fontStyle: "italic",
                      fontWeight: 500, color: A.ink, marginBottom: 4,
                      lineHeight: 1.2,
                    }}>{e.title}</div>
                    <div style={{
                      fontFamily: FONT.serif, fontSize: 13, color: A.inkDim,
                      lineHeight: 1.55,
                    }}>{e.summary}</div>
                  </Link>
                </td>
                <td style={{
                  ...td,
                  fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: A.inkMute,
                }}>{e.topic}</td>
                <td style={{ ...td, textAlign: "right",
                              fontFamily: FONT.mono, fontSize: 12, color: A.accent }}>→</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p style={{
          marginTop: 32, maxWidth: 760,
          fontFamily: FONT.serif, fontSize: 13, lineHeight: 1.6,
          color: A.inkDim, fontStyle: "italic",
        }}>
          Compiled under the standing brief of Dossier 2197. Entries
          are cataloged by the Office of Apparatus Studies, Imperial
          Archive.
        </p>
      </div>

      <PlateFooter folio="VIII" total="XLII" section="Archive · catalog" tokens={A} />

      <style>{`
        @media (max-width: 800px) {
          .arc-head { grid-template-columns: 1fr !important; gap: 18px !important; margin-bottom: 24px !important; }
          .arc-table th:nth-child(4), .arc-table td:nth-child(4) { display: none; }
        }
        @media (max-width: 560px) {
          .arc-table th:nth-child(1), .arc-table td:nth-child(1) { display: none; }
          .arc-table th:nth-child(5), .arc-table td:nth-child(5) { display: none; }
          .arc-table th:nth-child(2), .arc-table td:nth-child(2) { width: 78px !important; }
        }
      `}</style>
    </article>
  );
}

const th: React.CSSProperties = {
  fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.18em",
  textTransform: "uppercase", color: A.inkMute, textAlign: "left",
  padding: "12px 16px 14px 0", fontWeight: 600,
};
const td: React.CSSProperties = {
  padding: "18px 16px 18px 0", verticalAlign: "top",
};
