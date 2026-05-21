import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MASTER, FONT } from "../../_components/tokens";
import { PlateHeader, PlateFooter, ChairGlyph } from "../../_components/PlateChrome";
import { LINEAGE } from "../page";

const T = MASTER;

// ──────────────────────────────────────────────────────────────────
// /chair/lineage/[slug] — single iteration's long-form treatment.
// Skeleton: brochure-claim / mechanism / verification / what-survives.
// Bodies live in BODIES keyed by slug.
// ──────────────────────────────────────────────────────────────────

interface Body {
  shipped: string;
  context: string;
  claim: string;
  verdict: string;
  blocks: { title: string; body: string }[];
}

const TAG_COLOR: Record<string, string> = {
  real: T.accent, thin: "#a06820", fabricated: "#7a3a55",
};

const BODIES: Record<string, Body> = {
  "dynamic-dynamo": {
    shipped: "≈ 110 000 units (across two manufacturers)",
    context: "Hawthorne Studies begin · Scopes trial · the Charleston",
    claim:   "'The electrified locus' — quoted from a 1928 manufacturer brochure the OLS literature cites.",
    verdict: "Documented but conflated. The two manufacturers had distinct designs the brochure flattens.",
    blocks: [
      { title: "The object",
        body: "Two manufacturers — Western Electric's Hawthorne division and Ford's River Rouge integrated-line group — independently shipped electrified workstations between 1923 and 1929. The OLS brochure treats them as one lineage; the historical record treats them as two." },
      { title: "What was shipped",
        body: "The Hawthorne unit was a stationary operator's station with built-in lighting and telephony; the Ford unit was a moving-line operator's seat with overhead power and tool integration. Both are documented in period field manuals. The chair's brochure conflates the two." },
      { title: "What survives the verification",
        body: "The morphological argument — that the seated operator was, by 1925, a locus of fully-electrified extraction — survives. The lineage claim that two distinct devices were 'the same iteration' does not." },
    ],
  },
  // …other lineage bodies follow the same shape.
};

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return LINEAGE.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const l = LINEAGE.find((x) => x.slug === slug);
  if (!l) return {};
  return {
    title: { absolute: `${l.title} — Lineage` },
    description: l.subtitle,
    alternates: { canonical: `/chair/lineage/${slug}` },
  };
}

export default async function LineageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const l = LINEAGE.find((x) => x.slug === slug);
  if (!l) return notFound();
  const body = BODIES[slug];
  const verdictColor = TAG_COLOR[l.tag];
  const idx = LINEAGE.findIndex((x) => x.slug === slug);
  const prev = LINEAGE[idx - 1];
  const next = LINEAGE[idx + 1];

  return (
    <article>
      <PlateHeader plate={`VII.${l.num}`} route={`/chair/lineage/${slug}`}
                   code={`DOSS · OLS · LINEAGE · ${l.num}`} />

      <div style={{ padding: "60px 100px 0", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
          textTransform: "uppercase", color: T.inkMute, marginBottom: 36,
        }}>
          <a href="/chair" style={{ color: "inherit", textDecoration: "none" }}>← On the Chair</a>
          <span style={{ margin: "0 12px", color: T.inkFaint }}>/</span>
          <a href="/chair/lineage" style={{ color: "inherit", textDecoration: "none" }}>Lineage</a>
          <span style={{ margin: "0 12px", color: T.inkFaint }}>/</span>
          <span style={{ color: T.accent }}>{l.num} · {l.title.replace(/^The /, "").toLowerCase()}</span>
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 16,
                        marginBottom: 14, flexWrap: "wrap" }}>
          <span style={{
            fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
            color: T.accent, fontWeight: 700, textTransform: "uppercase",
          }}>ITER {l.num}  ·  {l.year}</span>
          <span style={{
            padding: "2px 10px", background: verdictColor, color: T.paper,
            fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.18em",
            textTransform: "uppercase", fontWeight: 600, borderRadius: 2,
          }}>
            {l.tag === "real" ? "● verified" :
             l.tag === "thin" ? "◐ thinly documented" :
                                "○ partly fabricated"}
          </span>
        </div>

        <h1 style={{
          fontFamily: FONT.serif, fontSize: "clamp(48px, 7vw, 76px)",
          lineHeight: 0.96, letterSpacing: "-0.022em",
          fontStyle: "italic", fontWeight: 400,
          margin: "0 0 16px", color: T.ink,
        }}>{l.title}.</h1>
        <p style={{
          fontFamily: FONT.serif, fontSize: 18, lineHeight: 1.5,
          color: T.inkDim, fontStyle: "italic",
          margin: "0 0 40px", maxWidth: 760,
        }}>{l.subtitle}</p>

        {body ? (
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 280px", gap: 56,
            paddingTop: 24, borderTop: `0.75px solid ${T.rule}`,
          }} className="lin-detail">
            <div>
              {body.blocks.map((b, i) => (
                <section key={i} style={{ marginBottom: 24 }}>
                  <div style={{
                    fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
                    color: T.accent, textTransform: "uppercase", fontWeight: 600,
                    marginBottom: 10,
                  }}>{String(i + 1).padStart(2, "0")} · {b.title}</div>
                  <p style={{
                    fontFamily: FONT.serif, fontSize: 15, lineHeight: 1.72,
                    color: T.ink, margin: 0,
                  }}>{b.body}</p>
                </section>
              ))}
              <div style={{
                marginTop: 24, padding: "16px 18px",
                borderLeft: `2px solid ${verdictColor}`,
                background: "rgba(255,253,245,0.7)",
              }}>
                <div style={{
                  fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.22em",
                  color: verdictColor, fontWeight: 700,
                  textTransform: "uppercase", marginBottom: 6,
                }}>Brochure claim · vs. historical record</div>
                <div style={{
                  fontFamily: FONT.serif, fontSize: 13.5, fontStyle: "italic",
                  lineHeight: 1.5, color: T.inkDim, marginBottom: 8,
                }}>{body.claim}</div>
                <div style={{
                  fontFamily: FONT.serif, fontSize: 13.5, lineHeight: 1.5, color: T.ink,
                }}><strong style={{ fontWeight: 600 }}>Verdict.</strong> {body.verdict}</div>
              </div>
            </div>
            <aside>
              <Field k="Year">{l.year}</Field>
              <Field k="Shipped">{body.shipped}</Field>
              <Field k={`World, in ${l.year}`}>{body.context}</Field>
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: `0.5px solid ${T.rule}` }}>
                <ChairGlyph size={56} stroke={T.accent} />
              </div>
            </aside>
          </div>
        ) : (
          <p style={{
            padding: "24px", border: `0.5px dashed ${T.rule}`,
            fontFamily: FONT.serif, fontStyle: "italic", color: T.inkDim,
          }}>
            Long-form treatment in progress. Fill out the{" "}
            <code>BODIES</code> record in{" "}
            <code>app/chair/lineage/[slug]/page.tsx</code>.
          </p>
        )}

        {/* siblings */}
        <div style={{
          marginTop: 40, paddingTop: 22,
          borderTop: `0.75px solid ${T.rule}`,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
        }} className="lin-nav">
          {prev ? (
            <a href={`/chair/lineage/${prev.slug}`} style={navStyle()}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
                color: T.accent, textTransform: "uppercase", marginBottom: 6,
              }}>← Iter {prev.num} · {prev.year}</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: 20, fontStyle: "italic",
                fontWeight: 500, color: T.ink,
              }}>{prev.title}</div>
            </a>
          ) : <div />}
          {next ? (
            <a href={`/chair/lineage/${next.slug}`}
               style={{ ...navStyle(), textAlign: "right" }}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9.5, letterSpacing: "0.22em",
                color: T.accent, textTransform: "uppercase", marginBottom: 6,
              }}>Iter {next.num} · {next.year} →</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: 20, fontStyle: "italic",
                fontWeight: 500, color: T.ink,
              }}>{next.title}</div>
            </a>
          ) : <div />}
        </div>

        <div style={{ height: 80 }} />
      </div>

      <PlateFooter folio={l.num} total="42"
                   section={`Lineage · ${l.num} · ${l.year}`} />

      <style>{`
        @media (max-width: 800px) {
          .lin-detail, .lin-nav { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </article>
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

function navStyle(): React.CSSProperties {
  return {
    padding: "18px 20px", border: `0.5px solid ${T.rule}`,
    textDecoration: "none", color: "inherit",
    background: "rgba(255,253,245,0.4)",
  };
}
