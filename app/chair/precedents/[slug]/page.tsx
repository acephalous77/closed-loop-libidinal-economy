import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MASTER, FONT } from "../../_components/tokens";
import { PlateHeader, PlateFooter, SectionMark } from "../../_components/PlateChrome";
import { PRECEDENTS } from "../page";

const T = MASTER;

// ──────────────────────────────────────────────────────────────────
// /chair/precedents/[slug] — case study layout.
// Distinct from essay-master by a 4-column evidence strip at the top,
// then wide column + right gutter (no marginalia rail).
// Bodies live in CASES keyed by slug.
// ──────────────────────────────────────────────────────────────────

interface CaseStudy {
  scope: string;            // evidence strip · "Population scope"
  jurisdiction: string;     // evidence strip · "Jurisdiction"
  status: string;           // evidence strip · "Status"
  intro: string;            // The reading
  mechanism: string;        // The mechanism
  inChair: string;          // In the chair
  note: string;             // A note
  sources: [string, string][];
  related: { slug: string; label: string }[];
}

const CASES: Record<string, CaseStudy> = {
  "tiktok-cadence": {
    scope: "1.2 b active occupants",
    jurisdiction: "Cross-jurisdictional · uneven oversight",
    status: "● live, expanding",
    intro: "TikTok's recommendation engine, as analysed by multiple researchers since 2018, infers users' subconscious preferences from their micro-gestural responses — pause, replay, dwell, scroll-velocity, return-frequency. The platform has openly partnered with neuromarketing firms that use EEG and eye-tracking to optimise content engagement. The technical stack is identical to that of an affective-computing medical device. The regulatory framing it is sold under is, by contrast, identical to that of an entertainment service. The asymmetry is the case's most useful feature.",
    mechanism: "The user produces, with every scroll-stop, replay, and dwell-pause, a continuous high-resolution signal of affective response that no earlier deployment of consumer media has had access to. The platform's model ingests the signal, fits it against the platform's content corpus, and — within roughly ninety minutes of installation — produces a content schedule calibrated to the user's response profile at sub-second resolution. The schedule does not, in any reasonable sense, conform to the user's stated preferences. It conforms to the user's measured ones. The two are routinely different.",
    inChair: "The TikTok deployment is the apparatus's Affective Signal Translator operating in distributed form. The chair concentrates the same capability into furniture: the gestural read is replaced by a multi-modal physiological read, the asymmetric regulatory framing is preserved, and the latency from read to schedule shortens by an order of magnitude. The configuration's ambition, not its mechanism, is what the chair has improved on.",
    note: "The deployment is, in the platforms' framing, fully consented to. The consent is the Service Agreement, in the chair's terms — a Consent Loop in OHCOSE's vocabulary. What the consent makes legible to the user is, in nearly every case, a strict subset of what the system is doing. The asymmetry is not an oversight. It is the configuration's primary legal alibi.",
    sources: [
      ["WSJ 2021",         "The 'For You' investigation"],
      ["Internal 2022",    "TikTok engineering disclosure"],
      ["Smith & Lin 2023", "Preference imposition (PNAS)"],
      ["EU AI Act 2024",   "Article 22 implications"],
    ],
    related: [
      { slug: "meta-emotional-contagion",      label: "01 · Meta · emotional contagion" },
      { slug: "pornhub-preference-assignment", label: "03 · Pornhub · preference assignment" },
      { slug: "social-credit-system",          label: "04 · PRC · social credit" },
    ],
  },
  // …other case bodies follow the same shape; add as needed.
};

interface PageProps { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return PRECEDENTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = PRECEDENTS.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: { absolute: `${p.title} — Precedents` },
    description: p.subtitle,
    alternates: { canonical: `/chair/precedents/${slug}` },
  };
}

export default async function PrecedentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const p = PRECEDENTS.find((x) => x.slug === slug);
  if (!p) return notFound();
  const body = CASES[slug];

  return (
    <article>
      <PlateHeader plate={`VI.${p.num}`} route={`/chair/precedents/${slug}`}
                   code={`DOSS · OLS · PRECEDENT · ${p.num}`} />

      <div style={{ padding: "52px 100px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
          textTransform: "uppercase", color: T.inkMute, marginBottom: 30,
        }}>
          <a href="/chair" style={{ color: "inherit", textDecoration: "none" }}>← On the Chair</a>
          <span style={{ margin: "0 12px", color: T.inkFaint }}>/</span>
          <a href="/chair/precedents" style={{ color: "inherit", textDecoration: "none" }}>Precedents</a>
          <span style={{ margin: "0 12px", color: T.inkFaint }}>/</span>
          <span style={{ color: T.accent }}>{p.num} · {p.title.toLowerCase()}</span>
        </div>

        <div style={{
          fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.28em",
          color: T.accent, textTransform: "uppercase", fontWeight: 600,
          marginBottom: 14,
        }}>● Precedent · {p.num} of 04 · {p.subsystem} (deployed)</div>

        <h1 style={{
          fontFamily: FONT.serif, fontSize: "clamp(56px, 8vw, 84px)",
          lineHeight: 0.96, letterSpacing: "-0.024em",
          fontStyle: "italic", fontWeight: 400, margin: "0 0 20px", color: T.ink,
        }}>{p.title}</h1>
        <p style={{
          fontFamily: FONT.serif, fontSize: 21, lineHeight: 1.45,
          color: T.inkDim, fontStyle: "italic",
          margin: "0 0 36px", maxWidth: 880,
        }}>{p.subtitle}</p>

        {/* EVIDENCE STRIP */}
        <div style={{
          padding: "20px 22px", border: `0.5px solid ${T.rule}`,
          background: "rgba(255,253,245,0.5)", marginBottom: 50,
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28,
        }} className="prec-evid">
          {[
            ["Operational from", p.year],
            ["Population scope", body?.scope         || "—"],
            ["Jurisdiction",     body?.jurisdiction  || "—"],
            ["Status",           body?.status        || "—"],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{
                fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.22em",
                color: T.accent, fontWeight: 600,
                textTransform: "uppercase", marginBottom: 8,
              }}>{k}</div>
              <div style={{
                fontFamily: FONT.serif, fontSize: 15.5, fontStyle: "italic",
                color: T.ink, letterSpacing: "-0.005em",
              }}>{v}</div>
            </div>
          ))}
        </div>

        {body ? (
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 280px", gap: 56,
          }} className="prec-body">
            <div>
              <SectionMark n="A" title="The reading" />
              <BodyP>{body.intro}</BodyP>
              <SectionMark n="B" title="The mechanism" />
              <BodyP>{body.mechanism}</BodyP>
              <SectionMark n="C" title="In the chair" />
              <BodyP>{body.inChair}</BodyP>
              <SectionMark n="D" title="A note on consent" />
              <BodyP>{body.note}</BodyP>
            </div>
            <div>
              <div style={{
                padding: "20px 22px", border: `0.5px solid ${T.rule}`,
                background: "rgba(255,253,245,0.5)", marginBottom: 24,
              }}>
                <div style={{
                  fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
                  color: T.accent, fontWeight: 600,
                  textTransform: "uppercase", marginBottom: 14,
                }}>Source chain</div>
                {body.sources.map(([code, label]) => (
                  <div key={code} style={{
                    padding: "10px 0", borderTop: `0.5px solid ${T.rule}`,
                  }}>
                    <div style={{
                      fontFamily: FONT.mono, fontSize: 9, letterSpacing: "0.16em",
                      color: T.inkMute, marginBottom: 3, fontWeight: 600,
                      textTransform: "uppercase",
                    }}>{code}</div>
                    <div style={{
                      fontFamily: FONT.serif, fontSize: 13, fontStyle: "italic",
                      color: T.ink, lineHeight: 1.4,
                    }}>{label}</div>
                  </div>
                ))}
              </div>
              <div style={{
                padding: "20px 22px", border: `0.5px solid ${T.rule}`,
                background: "rgba(255,253,245,0.5)",
              }}>
                <div style={{
                  fontFamily: FONT.mono, fontSize: 10, letterSpacing: "0.22em",
                  color: T.accent, fontWeight: 600,
                  textTransform: "uppercase", marginBottom: 14,
                }}>Related precedents</div>
                <ul style={{
                  listStyle: "none", padding: 0, margin: 0,
                  fontFamily: FONT.serif, fontSize: 13, lineHeight: 1.7, color: T.ink,
                }}>
                  {body.related.map((r) => (
                    <li key={r.slug} style={{ fontStyle: "italic" }}>
                      <a href={`/chair/precedents/${r.slug}`} style={{
                        color: "inherit", textDecoration: "none",
                      }}>→ {r.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <p style={{
            padding: "24px", border: `0.5px dashed ${T.rule}`,
            fontFamily: FONT.serif, fontStyle: "italic", color: T.inkDim,
          }}>
            Long-form treatment in progress. The four-block skeleton —
            the reading, the mechanism, in the chair, a note on
            consent — is filled out per precedent in{" "}
            <code>app/chair/precedents/[slug]/page.tsx</code>&apos;s{" "}
            <code>CASES</code> record.
          </p>
        )}
      </div>

      <PlateFooter folio={`${30 + Number(p.num)}`} total="42"
                   section={`Precedent · ${p.num} · ${p.title.split(" ")[0]}`} />

      <style>{`
        @media (max-width: 800px) {
          .prec-evid { grid-template-columns: 1fr 1fr !important; }
          .prec-body { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </article>
  );
}

function BodyP({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: FONT.serif, fontSize: 16, lineHeight: 1.72,
      color: T.ink, margin: "0 0 14px", textWrap: "pretty",
    }}>{children}</p>
  );
}
