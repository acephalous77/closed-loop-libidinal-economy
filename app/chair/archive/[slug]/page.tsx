import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARCHIVE, FONT } from "../../_components/tokens";
import { PlateHeader, PlateFooter } from "../../_components/PlateChrome";
import { ENTRIES } from "../page";

const A = ARCHIVE;

// ──────────────────────────────────────────────────────────────────
// /chair/archive/[slug] — single archive entry.
// REGISTER INVERSION: scholarly slate-blue cream. Future-historian
// voice. Left rail = classification metadata; main = body + cross-refs.
// ──────────────────────────────────────────────────────────────────

interface EntryBody {
  classification: string;
  status: string;
  compiler: string;
  body: string[];          // paragraphs
  crossRefs: [string, string][];  // [code, label]
}

const BODIES: Record<string, EntryBody> = {
  "ouroboros-ring": {
    classification: "21st-century integration apparatus",
    status:         "Proscribed, 2099 (Geneva)",
    compiler:       "Tan, Y.; Müller, A.",
    body: [
      "The Ring — the apparatus's central integration component — was, in retrospect, the configuration's most economical design decision. A single circumferential structure routed every input the occupant required and every output the occupant produced, eliminating the architectural ambiguity earlier integration devices had preserved between the operator and the machine.",
      "The Ring's iconographic candor — the apparatus naming itself an ouroboros, citing the serpent in its own marketing copy — was, by the standards of the period, unusual. Earlier integration devices preferred metaphorical concealment. The OLS's manufacturers appear to have calculated that explicit confession was, in their late-period market, an asset.",
      "Our period's verification of the Ring's actual operation is partial; the surviving devices were defaced by the cohort-2049 cataloguing operation, and the device's operational logs were sealed under the Eternal-tier contracts until the proscription of 2099.",
    ],
    crossRefs: [
      ["2197.07", "Period typography"],
      ["2197.18", "Lineage claim"],
      ["2197.22", "Eternal tier"],
      ["2197.26", "Testimonial voice"],
    ],
  },
  // …other archive bodies follow the same shape.
};

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return ENTRIES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const e = ENTRIES.find((x) => x.slug === slug);
  if (!e) return {};
  return {
    title: { absolute: `${e.title} — Imperial Archive` },
    description: e.summary,
    alternates: { canonical: `/chair/archive/${slug}` },
    robots: { index: false },
  };
}

export default async function ArchiveEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const e = ENTRIES.find((x) => x.slug === slug);
  if (!e) return notFound();
  const body = BODIES[slug];

  return (
    <article style={{
      background: A.paper, color: A.ink,
      fontFamily: "var(--font-spectral), Georgia, serif",
      minHeight: "100vh",
    }}>
      <PlateHeader plate={`VIII.${e.num}`} route={`/chair/archive/${slug}`}
                   code={`ARCHIVE · ${e.code}`} tokens={A} />

      <div style={{
        padding: "60px 100px", display: "grid",
        gridTemplateColumns: "180px 1fr", gap: 50,
        maxWidth: 1200, margin: "0 auto",
      }} className="arc-entry">
        {/* left rail */}
        <div style={{ borderRight: `0.5px solid ${A.rule}`, paddingRight: 36 }}>
          <div style={{
            fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
            color: A.inkMute, textTransform: "uppercase", lineHeight: 1.7,
          }}>
            <div style={{ color: A.accent, fontWeight: 600 }}>Entry {e.num}</div>
            <div>Dossier 2197</div>
            <div style={{ marginTop: 18 }}>Classification</div>
            <div style={{
              color: A.ink, fontFamily: FONT.serif, fontStyle: "italic",
              letterSpacing: 0, textTransform: "none",
              fontSize: 13, marginTop: 4,
            }}>{body?.classification || "—"}</div>
            <div style={{ marginTop: 18 }}>Status</div>
            <div style={{
              color: A.ink, fontFamily: FONT.serif, fontStyle: "italic",
              letterSpacing: 0, textTransform: "none",
              fontSize: 13, marginTop: 4,
            }}>{body?.status || "—"}</div>
            <div style={{ marginTop: 18 }}>Compiler</div>
            <div style={{
              color: A.ink, fontFamily: FONT.serif, fontStyle: "italic",
              letterSpacing: 0, textTransform: "none",
              fontSize: 13, marginTop: 4,
            }}>{body?.compiler || "—"}</div>
          </div>
        </div>

        {/* main */}
        <div>
          <a href="/chair/archive" style={{
            fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
            color: A.inkMute, textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-block", marginBottom: 28,
          }}>← Imperial Archive · index</a>

          <div style={{
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
            color: A.accent, textTransform: "uppercase", fontWeight: 600,
            marginBottom: 14,
          }}>● Archive · {e.code}</div>

          <h1 style={{
            fontFamily: FONT.serif, fontSize: "clamp(40px, 6vw, 56px)",
            lineHeight: 1, letterSpacing: "-0.018em",
            fontStyle: "italic", fontWeight: 400, margin: "0 0 16px", color: A.ink,
          }}>{e.title}</h1>
          <p style={{
            fontFamily: FONT.serif, fontSize: 17, lineHeight: 1.5,
            fontStyle: "italic", color: A.inkDim,
            margin: "0 0 32px", maxWidth: 620,
          }}>{e.summary}</p>

          {body ? (
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 220px", gap: 36,
            }} className="arc-entry-body">
              <div>
                {body.body.map((p, i) => (
                  <p key={i} style={{
                    fontFamily: FONT.serif, fontSize: 14.5, lineHeight: 1.72,
                    color: A.ink, margin: "0 0 14px", textWrap: "pretty",
                  }}>{p}</p>
                ))}
              </div>
              <aside style={{
                padding: 16, border: `0.5px solid ${A.rule}`,
                background: "rgba(255,253,245,0.4)", alignSelf: "start",
              }}>
                <div style={{
                  fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.22em",
                  color: A.accent, textTransform: "uppercase",
                  fontWeight: 600, marginBottom: 10,
                }}>Cross-refs · this entry</div>
                <ul style={{
                  listStyle: "none", padding: 0, margin: 0,
                  fontFamily: FONT.serif, fontSize: 12, lineHeight: 1.7, color: A.ink,
                }}>
                  {body.crossRefs.map(([code, label]) => (
                    <li key={code} style={{ fontStyle: "italic" }}>
                      → {code} {label}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          ) : (
            <p style={{
              padding: "24px", border: `0.5px dashed ${A.rule}`,
              fontFamily: FONT.serif, fontStyle: "italic", color: A.inkDim,
            }}>
              Entry body in compilation. Fill out the{" "}
              <code>BODIES</code> record in{" "}
              <code>app/chair/archive/[slug]/page.tsx</code>.
            </p>
          )}
        </div>
      </div>

      <PlateFooter folio={e.num} total="XLII"
                   section={`Archive · ${e.code}`} tokens={A} />

      <style>{`
        @media (max-width: 800px) {
          .arc-entry { grid-template-columns: 1fr !important; gap: 30px !important; }
          .arc-entry > div:first-child { border-right: none !important; padding-right: 0 !important; }
          .arc-entry-body { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </article>
  );
}
