import type { Metadata } from "next";
import { MASTER, FONT } from "../_components/tokens";
import { PlateHeader, PlateFooter } from "../_components/PlateChrome";

export const metadata: Metadata = {
  title: { absolute: "Colophon — On the Chair" },
  description: "Acknowledgments, typography, citation, version log and license for the chair project.",
  alternates: { canonical: "/chair/colophon" },
};

const T = MASTER;

// ──────────────────────────────────────────────────────────────────
// /chair/colophon — back cover of the volume.
// Production credits, typography, citation block, version log, license.
// ──────────────────────────────────────────────────────────────────

export default function ColophonPage() {
  return (
    <article>
      <PlateHeader plate="XLII" route="/chair/colophon" code="DOSS · OLS · COLOPHON" />

      <div style={{ padding: "70px 100px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
          color: T.accent, textTransform: "uppercase", fontWeight: 600,
          marginBottom: 14,
        }}>● End matter</div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 64, alignItems: "end", marginBottom: 56,
        }} className="col-head">
          <h1 style={{
            fontFamily: FONT.serif, fontSize: "clamp(56px, 9vw, 96px)",
            lineHeight: 0.94, letterSpacing: "-0.024em",
            fontStyle: "italic", fontWeight: 400, margin: 0, color: T.ink,
          }}>Colophon.</h1>
          <p style={{
            margin: 0, fontFamily: FONT.serif, fontSize: 16, lineHeight: 1.55,
            color: T.inkDim, fontStyle: "italic",
          }}>
            The book the apparatus would not let me write, written
            instead about the apparatus that would not let me write
            the book.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48,
        }} className="col-grid">
          <div>
            <ColHead>Production</ColHead>
            <ColLine k="Author">Adnan Selimović</ColLine>
            <ColLine k="Place">Brooklyn, NY</ColLine>
            <ColLine k="Period">2024 — 2026</ColLine>
            <ColLine k="Words">≈ 14 200 across 11 surfaces</ColLine>
            <ColLine k="Plates">42, this volume</ColLine>
            <ColLine k="Software">Next.js · React · MDX<br />KaTeX · remark-math</ColLine>
          </div>

          <div>
            <ColHead>Typography</ColHead>
            <ColLine k="Display + body">
              <span style={{ fontStyle: "italic" }}>Spectral</span>
              <br /><span style={{
                fontFamily: FONT.mono, fontSize: 9.5,
                color: T.inkMute, letterSpacing: "0.1em",
              }}>Production Type · OFL</span>
            </ColLine>
            <ColLine k="Codes + labels">
              IBM Plex Mono
              <br /><span style={{
                fontFamily: FONT.mono, fontSize: 9.5,
                color: T.inkMute, letterSpacing: "0.1em",
              }}>IBM · OFL</span>
            </ColLine>
            <ColLine k="Brochure">
              Manrope · grotesk
              <br /><span style={{
                fontFamily: FONT.mono, fontSize: 9.5,
                color: T.inkMute, letterSpacing: "0.1em",
              }}>Mikhail Sharanda · OFL</span>
            </ColLine>
            <ColLine k="Mathematics">Garamond Math · KaTeX default</ColLine>
          </div>

          <div>
            <ColHead>Citation</ColHead>
            <div style={{
              padding: 16, background: "rgba(255,253,245,0.5)",
              border: `0.5px solid ${T.rule}`,
              fontFamily: FONT.mono, fontSize: 11, lineHeight: 1.55,
              color: T.ink, letterSpacing: "0.02em",
            }}>
              <div style={{ color: T.accent, marginBottom: 8 }}>
                {"@article{selimovic2026chair,"}
              </div>
              <div style={{ paddingLeft: 12, color: T.inkDim }}>
                title = {"{On the Chair}"},<br />
                author = {"{Selimović, Adnan}"},<br />
                journal = {"{autostimulus}"},<br />
                year = {"{2026}"},<br />
                url = {"{autostimulus.org/chair}"},<br />
              </div>
              <div style={{ color: T.accent, marginTop: 8 }}>{"}"}</div>
            </div>
            <button style={{
              marginTop: 14, padding: "9px 14px",
              border: `0.5px solid ${T.ink}`, background: "transparent",
              fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
              textTransform: "uppercase", color: T.ink, cursor: "pointer",
              fontWeight: 600, width: "100%",
            }}>Copy BibTeX →</button>
          </div>
        </div>

        <div style={{ marginTop: 50 }}>
          <ColHead>Version log</ColHead>
          <table style={{
            width: "100%", borderCollapse: "collapse",
            fontFamily: FONT.serif, fontSize: 13,
          }}>
            <thead>
              <tr style={{ borderBottom: `0.75px solid ${T.rule}` }}>
                <th style={th}>v</th>
                <th style={th}>date</th>
                <th style={{ ...th, textAlign: "left" }}>what changed</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["0.1",   "2024 · 03", "First draft of the essay (3 sections, 1 800 w)."],
                ["0.3",   "2024 · 11", "Added subsystem 04 (Surplus Reservoirs); restructured § V."],
                ["0.5",   "2025 · 06", "Brochure artifact added at /chair (later promoted to landing)."],
                ["0.6",   "2025 · 11", "Lineage essays drafted; verification against historical record."],
                ["0.7",   "2026 · 02", "Zine and archive artifacts added."],
                ["0.7.2", "2026 · 05", "Brochure rebuilt in the apparatus's self-constituted voice."],
                ["1.0",   "—",         "Pending refusal essay (working title: § IX extended)."],
              ].map(([v, d, w]) => (
                <tr key={v} style={{ borderBottom: `0.5px solid ${T.ruleSoft}` }}>
                  <td style={{
                    ...td, color: T.accent, fontWeight: 600,
                    fontFamily: FONT.mono, letterSpacing: "0.04em",
                  }}>{v}</td>
                  <td style={{
                    ...td, color: T.inkMute,
                    fontFamily: FONT.mono, letterSpacing: "0.04em",
                  }}>{d}</td>
                  <td style={{ ...td, fontStyle: "italic" }}>{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: 40, display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", gap: 36,
        }} className="col-licenses">
          {[
            ["License · text", "CC BY-SA 4.0",
             "All textual content here may be reproduced, adapted, and re-circulated under the share-alike provisions of the license."],
            ["License · code", "MIT",
             "The site code is under MIT. The fonts are under their respective Open Font Licenses."],
            ["Disclosure", "Instrumentation",
             "This site logs nothing beyond seven-day HTTP server logs. The full disclosure is at /closed-loop/instrumentation."],
          ].map(([k, v, body]) => (
            <div key={k}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.22em",
                color: T.accent, fontWeight: 600,
                textTransform: "uppercase", marginBottom: 8,
              }}>{k}</div>
              <div style={{
                fontFamily: FONT.serif, fontStyle: "italic", fontSize: 18,
                color: T.ink, marginBottom: 8, letterSpacing: "-0.005em",
              }}>{v}</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: 13, lineHeight: 1.55,
                color: T.inkDim,
              }}>{body}</div>
            </div>
          ))}
        </div>
      </div>

      <PlateFooter folio="XLII" total="XLII" section="Colophon · end matter" />

      <style>{`
        @media (max-width: 800px) {
          .col-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .col-grid, .col-licenses { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </article>
  );
}

function ColHead({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
      color: T.accent, textTransform: "uppercase", fontWeight: 600,
      marginBottom: 16, paddingBottom: 10,
      borderBottom: `0.5px solid ${T.rule}`,
    }}>{children}</div>
  );
}

function ColLine({ k, children }: { k: string; children: React.ReactNode }) {
  return (
    <div style={{
      padding: "10px 0", borderBottom: `0.5px solid ${T.ruleSoft}`,
      display: "grid", gridTemplateColumns: "118px 1fr", gap: 14,
      alignItems: "baseline",
    }}>
      <span style={{
        fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.16em",
        textTransform: "uppercase", color: T.inkMute,
      }}>{k}</span>
      <span style={{
        fontFamily: FONT.serif, fontSize: 13.5, color: T.ink, lineHeight: 1.5,
      }}>{children}</span>
    </div>
  );
}

const th: React.CSSProperties = {
  fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.18em",
  color: T.inkMute, textTransform: "uppercase", textAlign: "left",
  fontWeight: 600, padding: "8px 14px 10px 0",
};
const td: React.CSSProperties = {
  padding: "10px 14px 10px 0", verticalAlign: "top",
};
