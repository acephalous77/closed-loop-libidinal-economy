import type { Metadata } from "next";
import Link from "next/link";
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
  "meta-emotional-contagion": {
    scope: "689 003 users · 1 week",
    jurisdiction: "Facebook Inc. · PNAS 2014",
    status: "● published · no regulatory action",
    intro: "In June 2014, three researchers — Adam D. I. Kramer (Facebook), Jamie E. Guillory (UC San Francisco), and Jeffrey T. Hancock (Cornell) — published in PNAS a paper reporting the results of a one-week experiment conducted on Facebook in January 2012 across 689 003 randomly selected users. Two conditions: the platform's algorithm down-weighted positively-valenced posts in one cohort's news feed, negatively-valenced in the other. The users were not informed. The users were not asked for consent. The result, statistically significant at high confidence, was that users in the positivity-suppressed condition produced posts more negative than baseline; users in the negativity-suppressed condition produced posts more positive. The effect size was modest — about 0.1 standard deviations — but operationally significant at scale: in a population of nearly 700 000, the manipulation produced affective-state changes in tens of thousands of subjects.",
    mechanism: "The experiment instantiated, openly and at scale, the operation the Desire Engine names. The platform's recommendation algorithm — the same algorithm that organized News Feed in the routine course of operation — was the instrument. The experiment introduced no new technology; it held existing parameters at experimental values for a controlled period. The Desire Engine that was deployed for the experiment had been deployed, at non-experimental parameters, on the same users for several years before and after. The experimental week was a moment when the routine was held at a chosen value in place of the optimization layer's default; it differed from the surrounding routine only in that.",
    inChair: "The Meta experiment is what the apparatus's Desire Engine looked like in a distributed, low-resolution deployment — affect modulated at the level of a single content variable, on a one-week schedule, with the results published in a peer-reviewed venue. The chair concentrates the same operation into furniture: the modulation is continuous where the experiment's was occasional, the resolution sub-second where its was weekly, the publication a brochure where its was PNAS. The mechanism is identical. Only the discretion has changed.",
    note: "The most useful experimental result, in the long run, may have been the regulatory non-response. There was no regulatory action against Facebook. There was no class action by the affected users. There was no industry-wide reckoning. The experiment's publication had no measurable effect on the subsequent deployment of similar mechanisms by Facebook, by other platforms, or by the industry as a whole. The paper became, over the next decade, a citation — never a precedent. The state had every opportunity to act; the state declined. Everything that has been built since has built on that freedom.",
    sources: [
      ["Kramer et al. 2014",  "PNAS 111(24): 8788–8790"],
      ["PNAS 2014",           "Editorial Expression of Concern"],
      ["Cornell IRB 2014",    "Decision not to review"],
      ["Goel 2014",           "NYT coverage on consent"],
    ],
    related: [
      { slug: "tiktok-cadence",                label: "02 · TikTok · cadence engine" },
      { slug: "pornhub-preference-assignment", label: "03 · Pornhub · preference assignment" },
      { slug: "social-credit-system",          label: "04 · PRC · social credit" },
    ],
  },

  "tiktok-cadence": {
    scope: "1.2 b active occupants",
    jurisdiction: "Cross-jurisdictional · uneven oversight",
    status: "● live, expanding",
    intro: "TikTok (operated by ByteDance, Beijing; international product launched 2017) is, as of the time of writing, the platform whose recommendation engine has received the most direct industry and academic attention. The For You feed presents an algorithmically-selected sequence of short-form videos in a continuous vertical-swipe interface. The user does not, in the routine course of use, search for content. The user receives content. Each video produces a vector of micro-gestural inputs — dwell time, replay, pause, scroll-back, scroll-through, sound on/off — that the engine ingests in real time and uses to update the user's preference model. The architecture is closed-loop at a temporal resolution earlier platforms could not approach. Internal documents leaked to the press in 2021 and 2022 described the engine's optimization objective in direct terms: maximize the duration of the user's continuous session.",
    mechanism: "TikTok is the closed-loop libidinal economy at the maturity all the other major platforms have, since 2020 or so, been racing to imitate. The Desire Engine generates the content. The Affective Signal Translator reads the user's micro-gestural response. The Surplus Reservoir stores the read. The Algorithmic Libido Governor tunes the Engine's parameters against the platform-wide engagement objective. The four subsystems run together, at the temporal resolution the operating system permits, and the user is inside the loop the four of them are running. The platform's neuromarketing partnerships — disclosed in late-2010s and early-2020s industry-conference materials, in which TikTok presented research conducted with Neuro-Insight (EEG) and other vendors — extend the Translator's read into direct brain-activity measurement. Content recommendations are now calibrated against measured neural response to candidate content in laboratory subjects, then deployed to the global user base.",
    inChair: "The TikTok deployment is the apparatus's Affective Signal Translator operating in distributed form. The chair concentrates the same capability into furniture: the gestural read is replaced by a multi-modal physiological read, the asymmetric regulatory framing is preserved, and the latency from read to schedule shortens by an order of magnitude. What the chair has improved on is the configuration's ambition; the mechanism is unchanged. The platform has been the subject of significant regulatory attention, principally on national-security grounds (the Chinese ownership) and child-safety grounds. What has received less regulatory attention is the recommendation engine itself, considered as a libidinal-economic instrument independent of nationality. In operational terms the mechanism is identical to Meta's Reels, YouTube Shorts, and Snapchat Spotlight — all of which followed TikTok's design. The regulatory attention to TikTok-as-Chinese-asset has, on balance, distracted from regulatory attention to the cadence-capture mechanism, which is at this point industry-standard.",
    note: "TikTok is the present-day operating prototype of the apparatus's Capture of Cadence. The engine does not, primarily, capture content; it captures the rhythm of the user's attention. The user who has spent thirty minutes on TikTok has not, in any meaningful sense, watched thirty minutes of content; they have inhabited a thirty-minute rhythm. The content was the carrier; the cadence was the cargo. If you want to feel the Capture of Cadence operating on you in real time, open TikTok and try to leave after the first video. Note the affective resistance you encounter to leaving. The resistance is the apparatus's grip.",
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

  "pornhub-preference-assignment": {
    scope: "≈ 130 m daily visitors (2020)",
    jurisdiction: "MindGeek · Luxembourg",
    status: "● mechanism intact post-payment-processor pullout",
    intro: "In 2020, technology journalists working with internal sources at Pornhub — the largest pornographic-video platform then in operation — published investigations (in Wired, the New York Times, and elsewhere) examining the platform's content moderation and recommendation systems. The recommendation-system finding, less reported than the parallel content-moderation scandal of the same period, is the one this case treats. The finding, in its most-cited phrasing, was that the platform's algorithm \"unilaterally assigns sexual preferences to each individual user without their knowledge.\" Specifically: the engine, after fewer than one hundred video views, categorized users into preference profiles that were then used to shape every subsequent recommendation. The categorization was performed without the user's awareness; the resulting profile was not visible to the user; the profile could not, in practical terms, be revised.",
    mechanism: "The investigation's significance is the affective domain in which the operation was occurring. The specific operation it documented was old news — recommendation algorithms have inferred user preferences for as long as they have existed. The preferences in question were sexual; the inferences were being drawn from the user's least-articulable response patterns; the resulting profile was determining, in significant measure, what the user would subsequently encounter as their own desire. Pornhub's recommendation engine instantiates the Desire Engine operating on the most intimate possible variable. The mechanism is identical to the mechanism deployed by every other major recommendation platform; the variable is different. This is the case Preciado's pharmacopornographic regime anticipated. Preciado argued, in 2008, that contemporary capital had achieved a degree of integration with sexual and pharmacological subject-formation that no earlier regime had approached. The pornographic platform, in Preciado's frame, is the regime's clearest operational instance.",
    inChair: "Strip the case back to its mechanism and it is plain: the platform reads patterns in the user's micro-responses and, on the strength of them, serves content its model predicts the user will respond to. The content is predicted, and the user never independently sought it. The user's experience of \"my preferences\" is, in this case, the platform's prediction of the user, fed back to the user as content. The Pornhub case is the cleanest demonstration that the apparatus's Desire Engine operates in the same way regardless of the domain in which it is deployed. The mechanism the engine implements on a user's sexual response is the mechanism it implements on a user's news preference, fashion preference, political preference, and food preference. The platform-economic apologia that recommendation algorithms \"give users what they want\" survives only as long as one does not press on what want means when the variable being predicted is the user's least-articulable response.",
    note: "The least-cited finding from the investigation was probably the most damning one: users in the platform's own testing said they were satisfied with the recommendations the engine assigned them. The engine works, in the sense its operators meant it to work, and the satisfaction the engine produces is part of how we know it does. This is the harder thing to sit with. There is no overriding of the occupant's desires against their will: the apparatus produces the desires the occupant subsequently experiences as theirs, and the experience is good.",
    sources: [
      ["Kristof 2020",        "NYT · 'The Children of Pornhub'"],
      ["Cole 2020",           "Wired · recommendation-engine reporting"],
      ["Mastercard/Visa 2020", "Payment processor pullout"],
      ["Preciado 2008",       "Testo Junkie · pharmacopornographic regime"],
    ],
    related: [
      { slug: "meta-emotional-contagion", label: "01 · Meta · emotional contagion" },
      { slug: "tiktok-cadence",           label: "02 · TikTok · cadence engine" },
      { slug: "social-credit-system",     label: "04 · PRC · social credit" },
    ],
  },

  "social-credit-system": {
    scope: "≈ 1.4 bn citizens",
    jurisdiction: "People's Republic of China · multi-jurisdictional",
    status: "● operational since 2014 · ongoing rollout",
    intro: "The Chinese Social Credit System, in its operational form, is the publicly-administered behavioral-scoring system that has been progressively deployed by Chinese national, provincial, and municipal authorities since approximately 2014. The system aggregates citizen behavioral data — financial reliability, criminal records, regulatory compliance, online speech, lifestyle indicators, and a varying further set depending on jurisdiction — into a composite score that routes into access privileges across multiple domains: high-speed rail and air travel, internet bandwidth, housing applications, school enrolments for children, credit availability. The system's operational details vary by jurisdiction. The system's basic logic does not.",
    mechanism: "The Social Credit System makes the apparatus's Compliance Monitor legible by giving it a name and a number. The score exists; the score's effects are real; the score's basis is, by design, opaque to the citizen. The demonstration is twofold. First, that behavioral surveillance and correction at the scale of an entire population is, in 2024, operational. Second, that the principal constraint on whether such a system can be deployed is the political will of the deploying body; the regulatory frame imposes none.",
    inChair: "The Social Credit System is the Compliance Monitor in state form. The mechanism is unsurprising. The comparison with the Western implementation is more revealing. The Western implementation aggregates approximately the same behavioral data — financial reliability via credit bureaus; criminal records via background-check vendors; regulatory compliance via insurance underwriters; online speech via content-moderation algorithms; lifestyle indicators via insurance and employer-wellness vendors — and routes it into approximately the same access privileges. The principal difference is that the Western implementation distributes the score across multiple private intermediaries, none of which publishes a unified number. The Western citizen is, by most operational measures, monitored more granularly than the Chinese citizen. The Western citizen simply does not see the unified score and consequently does not experience the system as a unified system. The ideology of \"private sector\" provides the cover.",
    note: "The Chinese and Western versions of the Monitor differ in which pieces are visible to the citizen and which are not. They do not, on inspection, differ much in the pieces themselves, or in what those pieces do. The visibility difference is consequential — the Chinese system is, to its citizens, addressable in a way the Western one is not — but to mistake the visibility difference for an existence difference is to mistake what one of these systems is, and which one of them one is in. The Western reader who finds the system alarming should, in honesty, conduct the same audit on themselves: assemble the multiple distributed scores that govern their access to flights, credit, employment, housing, healthcare, and internet bandwidth. The composite is the Western Social Credit Score. The composite is not, in the routine course of use, displayed.",
    sources: [
      ["State Council 2014",  "Planning Outline for Social Credit System"],
      ["Creemers 2018",       "China's Social Credit System — translation and analysis"],
      ["Zuboff 2019",         "Surveillance Capitalism (Western parallel)"],
      ["Liang et al. 2018",   "Policy Studies Journal · empirical assessment"],
    ],
    related: [
      { slug: "meta-emotional-contagion",      label: "01 · Meta · emotional contagion" },
      { slug: "tiktok-cadence",                label: "02 · TikTok · cadence engine" },
      { slug: "pornhub-preference-assignment", label: "03 · Pornhub · preference assignment" },
    ],
  },
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

      <div className="chair-pad" style={{ padding: "52px 100px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
          textTransform: "uppercase", color: T.inkMute, marginBottom: 30,
        }}>
          <Link href="/chair/essay" style={{ color: "inherit", textDecoration: "none" }}>← On the Chair</Link>
          <span style={{ margin: "0 12px", color: T.inkFaint }}>/</span>
          <Link href="/chair/precedents" style={{ color: "inherit", textDecoration: "none" }}>Precedents</Link>
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
                fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
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
                  fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
                  color: T.accent, fontWeight: 600,
                  textTransform: "uppercase", marginBottom: 14,
                }}>Source chain</div>
                {body.sources.map(([code, label]) => (
                  <div key={code} style={{
                    padding: "10px 0", borderTop: `0.5px solid ${T.rule}`,
                  }}>
                    <div style={{
                      fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.16em",
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
                  fontFamily: FONT.mono, fontSize: 11, letterSpacing: "0.22em",
                  color: T.accent, fontWeight: 600,
                  textTransform: "uppercase", marginBottom: 14,
                }}>Related precedents</div>
                <ul style={{
                  listStyle: "none", padding: 0, margin: 0,
                  fontFamily: FONT.serif, fontSize: 13, lineHeight: 1.7, color: T.ink,
                }}>
                  {body.related.map((r) => (
                    <li key={r.slug} style={{ fontStyle: "italic" }}>
                      <Link href={`/chair/precedents/${r.slug}`} style={{
                        color: "inherit", textDecoration: "none",
                      }}>→ {r.label}</Link>
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
          .prec-evid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; padding: 16px 18px !important; }
          .prec-body { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 500px) {
          .prec-evid { grid-template-columns: 1fr !important; }
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
