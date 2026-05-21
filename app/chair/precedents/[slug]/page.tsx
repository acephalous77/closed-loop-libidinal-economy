import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRECEDENTS } from "../page";

const PAPER = "#1a1814";
const PAPER_DIM = "#4a443a";
const MUTED = "#8a8478";
const RULE = "rgba(26,24,20,0.14)";
const ACCENT = "#7a2818";

const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;

/**
 * /chair/precedents/[slug] — companion essays on the four
 * actually-existing proto-apparatuses. Same six-section skeleton as
 * the subsystem essays, adapted for empirical case material:
 * The Case → What was demonstrated → Apparatus-Theoretic Reading →
 * Published Response → Retrospective Claim → A Note.
 */

type Section = { n: string; title: string; body: (string | { quote: string })[] };
type Body = { sections: Section[] };

const BODIES: Record<string, Body> = {
  "meta-emotional-contagion": {
    sections: [
      {
        n: "I",
        title: "The Case",
        body: [
          "In June 2014, three researchers — Adam D. I. Kramer (Facebook Inc.), Jamie E. Guillory (UC San Francisco), and Jeffrey T. Hancock (Cornell) — published in the <em>Proceedings of the National Academy of Sciences</em> a paper titled &ldquo;Experimental evidence of massive-scale emotional contagion through social networks.&rdquo; The paper reported the results of a one-week experiment, conducted on Facebook in January 2012, on 689,003 randomly selected English-speaking users.",
          "The experiment had two conditions. In the first, the platform's algorithm down-weighted positively-valenced posts in users' News Feeds. In the second, the algorithm down-weighted negatively-valenced posts. The users were not informed that the experiment was running. The users were not asked for consent (the researchers later argued that Facebook's standard terms of service covered research uses). The users did not know they were inside a controlled study.",
        ],
      },
      {
        n: "II",
        title: "What was demonstrated",
        body: [
          "The result, statistically significant at high confidence, was that users in the positivity-suppressed condition produced posts that were themselves more negative than baseline; users in the negativity-suppressed condition produced posts that were more positive. The effect size was modest in absolute terms (the average user's emotional valence shifted by approximately 0.1 standard deviations) but operationally significant at scale: in the population of 689,003, the manipulation produced affective-state changes in tens of thousands of subjects.",
          "The paper's authors characterized this as evidence of &ldquo;emotional contagion.&rdquo; In the platform-economic frame, it was something more specific: evidence that the platform could, by adjusting a single algorithmic parameter, induce specified emotional states in a large fraction of its user base.",
        ],
      },
      {
        n: "III",
        title: "Apparatus-Theoretic Reading",
        body: [
          "The experiment instantiated, openly and at scale, the operation that <a href=\"/chair/subsystems/desire-engines\">Desire Engines</a> names. The platform's recommendation algorithm — the same algorithm that organized News Feed in the routine course of operation — was the instrument. The experiment did not introduce new technology; it merely held existing parameters at experimental values for a controlled period.",
          "This is the experiment's most consequential implication. The Desire Engine that was deployed for the 2014 experiment had been deployed, at non-experimental parameters, on the same users for several years before the experiment, and continued to be deployed on them for several years after. The experimental period was not categorically different from the surrounding routine; it was a moment when the routine was held at a chosen value rather than at the optimization layer's default value.",
        ],
      },
      {
        n: "IV",
        title: "The Published Response",
        body: [
          "The paper drew a moderate volume of academic criticism, principally on consent grounds. The Cornell IRB had declined to review the experiment (on the grounds that Cornell researchers had only worked with the post-collection data); Facebook's internal review had treated terms-of-service consent as sufficient. The journal (PNAS) issued an Editorial Expression of Concern noting the consent issue but did not retract the paper.",
          "What did not occur is more revealing. There was no regulatory action against Facebook. There was no class action by the affected users. There was no industry-wide reckoning. The experiment's publication had no measurable effect on the subsequent deployment of similar mechanisms by Facebook, by other platforms, or by the industry as a whole. The paper became, over the next decade, a citation rather than a precedent.",
        ],
      },
      {
        n: "V",
        title: "Retrospective Claim",
        body: [
          "The Kramer et al. paper is, on my reading, the most candid single document the platform economy has ever produced. The paper's authors openly stated what the apparatus does, on the apparatus's own data, in a peer-reviewed venue, with the apparatus's institutional approval. The reader who wishes to know whether the platform manipulates affect at population scale does not need to speculate; the platform's own researchers, with the platform's permission, demonstrated it.",
          "The paper is also, on my reading, the most reliable test of the regulatory state's capacity to engage the apparatus. The state had every opportunity to act. The state declined.",
        ],
      },
      {
        n: "VI",
        title: "A Note",
        body: [
          "The most useful experimental result, in the long run, may have been the regulatory non-response. The non-response established the apparatus's effective freedom to manipulate affect at the level of population. Everything that has been built since has built on that freedom.",
        ],
      },
    ],
  },

  "tiktok-cadence": {
    sections: [
      {
        n: "I",
        title: "The Case",
        body: [
          "TikTok (operated by ByteDance, Beijing; international product launched 2017) is, as of the time of writing, the platform whose recommendation engine has received the most direct industry and academic attention. The platform's For You feed, the principal interface, presents an algorithmically-selected sequence of short-form videos in a continuous vertical-swipe interface. The user does not, in the routine course of use, search for content. The user receives content.",
        ],
      },
      {
        n: "II",
        title: "What was demonstrated",
        body: [
          "The platform's recommendation engine operates at sub-second response resolution. Each video the user views produces a vector of micro-gestural inputs — dwell time, replay, pause, scroll-back, scroll-through, sound on/off — that the engine ingests in real time and uses to update the user's preference model. The next video is selected against the updated model. The architecture is closed-loop at a temporal resolution earlier platforms could not approach.",
          "The platform's commercial documentation, made available to advertisers, describes the engine's effectiveness in terms of &ldquo;session length&rdquo; and &ldquo;watch time.&rdquo; Internal documents leaked to the press in 2021 and 2022 described the engine's optimization objective in more direct terms: the engine is optimized to maximize the duration of the user's continuous session.",
        ],
      },
      {
        n: "III",
        title: "Apparatus-Theoretic Reading",
        body: [
          "TikTok is the closed-loop libidinal economy at the maturity all the other major platforms have, since 2020 or so, been racing to imitate. The reader who has been through this essay's <a href=\"/chair/subsystems\">subsystem treatments</a> will already recognise what TikTok is doing. The <a href=\"/chair/subsystems/desire-engines\">Desire Engine</a> generates the content. The <a href=\"/chair/subsystems/affective-signal-translators\">Affective Signal Translator</a> reads the user's micro-gestural response to it. The <a href=\"/chair/subsystems/surplus-reservoirs\">Surplus Reservoir</a> stores the read. And the <a href=\"/chair/subsystems/algorithmic-libido-governors\">Algorithmic Libido Governor</a> tunes the Engine's parameters against the platform-wide engagement objective. The four subsystems are running together, at the temporal resolution the operating system permits, and the user is inside the loop the four of them are running.",
          "The platform's neuromarketing partnerships — disclosed in late-2010s and early-2020s industry-conference materials, in which TikTok presented research conducted with Neuro-Insight (EEG) and other neuromarketing vendors — extend the Affective Signal Translator's read into direct brain-activity measurement. The platform's content recommendations are now calibrated, in part, against measured neural response to candidate content in laboratory subjects, then deployed to the global user base.",
        ],
      },
      {
        n: "IV",
        title: "The Published Response",
        body: [
          "The platform has been the subject of significant regulatory attention, principally on national-security grounds (the Chinese ownership) and child-safety grounds (the engine's effectiveness on minors). The attention has produced legislative proposals in the United States, India, the European Union, and elsewhere; most have not become operational.",
          "What has received less regulatory attention is the recommendation engine itself, considered as a libidinal-economic instrument independent of nationality. The mechanism the engine implements is not, in operational terms, distinguishable from the mechanisms implemented by domestically-owned platforms (Meta's Reels, YouTube Shorts, Snapchat Spotlight, et al.) which followed TikTok's design rather than preceding it. The regulatory attention to TikTok-as-Chinese-asset has, on balance, distracted from regulatory attention to the cadence-capture mechanism, which is at this point industry-standard.",
        ],
      },
      {
        n: "V",
        title: "Retrospective Claim",
        body: [
          "TikTok is, on my reading, the present-day operating prototype of the apparatus's <a href=\"/chair/concepts#capture-of-cadence\">Capture of Cadence</a>. The engine does not, primarily, capture content; it captures the rhythm of the user's attention. The user who has spent thirty minutes on TikTok has not, in any meaningful sense, watched thirty minutes of content; they have inhabited a thirty-minute rhythm. The content was the carrier; the cadence was the cargo.",
        ],
      },
      {
        n: "VI",
        title: "A Note",
        body: [
          "If you want to feel the Capture of Cadence operating on you in real time, open TikTok and try to leave after the first video. Note the affective resistance you encounter to leaving. The resistance is the apparatus's grip.",
        ],
      },
    ],
  },

  "pornhub-preference-assignment": {
    sections: [
      {
        n: "I",
        title: "The Case",
        body: [
          "In 2020, technology journalists working with internal sources at Pornhub — the largest pornographic-video platform then in operation — published investigations (in <em>Wired</em>, <em>The New York Times</em>, and elsewhere) examining the platform's content moderation and recommendation systems. The recommendation-system finding, less reported than the parallel content-moderation scandal of the same period, is the one I will treat here.",
          "The finding, in its most-cited phrasing, was that the platform's algorithm &ldquo;unilaterally assigns sexual preferences to each individual user without their knowledge.&rdquo; Specifically: the engine, after fewer than one hundred video views, categorized users into preference profiles that were then used to shape every subsequent recommendation. The categorization was performed without the user's awareness; the resulting profile was not visible to the user; the profile could not, in practical terms, be revised.",
        ],
      },
      {
        n: "II",
        title: "What was demonstrated",
        body: [
          "The investigation's significance, for the present project, is not the specific operation it documented — recommendation algorithms have inferred user preferences for as long as recommendation algorithms have existed — but the affective domain in which the operation was occurring. The preferences in question were sexual; the inferences were being drawn from the user's least-articulable response patterns; the resulting profile was determining, in significant measure, what the user would subsequently encounter as their own desire.",
        ],
      },
      {
        n: "III",
        title: "Apparatus-Theoretic Reading",
        body: [
          "Pornhub's recommendation engine instantiates the <a href=\"/chair/subsystems/desire-engines\">Desire Engine</a> operating on the most intimate possible variable. The mechanism is identical to the mechanism deployed by every other major recommendation platform; the variable is different.",
          "This is the case Paul B. Preciado's account of the <em>pharmacopornographic regime</em> anticipated. Preciado argued, in 2008, that contemporary capital had achieved a degree of integration with sexual and pharmacological subject-formation that no earlier regime had approached. The pornographic platform, in Preciado's frame, is not an aberration; it is the regime's clearest operational instance.",
          "The Pornhub case extends the argument in one direction. The platform is not, in the contemporary case, presenting the user with pre-existing sexual content the user has independently sought. The platform is identifying patterns in the user's micro-responses and, on the basis of those patterns, presenting content that the platform's model predicts the user will respond to. The user's experience of &ldquo;my preferences&rdquo; is, in this case, the platform's prediction of the user, fed back to the user as content.",
        ],
      },
      {
        n: "IV",
        title: "The Published Response",
        body: [
          "The 2020 reporting received significant initial press attention, principally focused on the platform's content-moderation failures (the same period saw a larger scandal regarding non-consensual content hosted on the platform). The recommendation-engine finding was incorporated into the broader content-moderation discussion; it did not, as a stand-alone finding, produce regulatory action.",
          "The 2020 reporting was followed by a sequence of operational changes at the platform — Mastercard and Visa withdrew payment processing in late 2020; the platform implemented identity verification; large portions of the content library were removed. The recommendation engine itself was not, to my knowledge, materially modified.",
        ],
      },
      {
        n: "V",
        title: "Retrospective Claim",
        body: [
          "The Pornhub case is, on my reading, the cleanest demonstration that the apparatus's Desire Engine operates in the same way regardless of the domain in which it is deployed. The mechanism the engine implements on a user's sexual response is the mechanism it implements on a user's news preference, fashion preference, political preference, and food preference. The platform-economic apologia that recommendation algorithms &ldquo;give users what they want&rdquo; survives only as long as one does not press on what <em>want</em> means when the variable being predicted is the user's least-articulable response.",
        ],
      },
      {
        n: "VI",
        title: "A Note",
        body: [
          "The least-cited finding from the investigation was probably the most damning one: users in the platform's own testing said they were satisfied with the recommendations the engine assigned them. The engine works, in the sense its operators meant it to work, and the satisfaction the engine produces is part of how we know it does. This is, on my reading, the harder thing to sit with. It is not that the apparatus is overriding the occupant's desires against the occupant's will. It is that the apparatus is producing the desires the occupant subsequently experiences as theirs, and the experience is good.",
        ],
      },
    ],
  },

  "social-credit-system": {
    sections: [
      {
        n: "I",
        title: "The Case",
        body: [
          "The Chinese Social Credit System, in its operational form, is the publicly-administered behavioral-scoring system that has been progressively deployed by Chinese national, provincial, and municipal authorities since approximately 2014. The system aggregates citizen behavioral data — financial reliability, criminal records, regulatory compliance, online speech, lifestyle indicators, and a varying further set depending on jurisdiction — into a composite score that routes into access privileges across multiple domains: high-speed rail and air travel, internet bandwidth, housing applications, school enrollments for children, credit availability.",
          "The system's operational details vary by jurisdiction. The system's basic logic does not.",
        ],
      },
      {
        n: "II",
        title: "What was demonstrated",
        body: [
          "The Social Credit System makes the apparatus's <a href=\"/chair/subsystems/compliance-monitors\">Compliance Monitor</a> legible by giving it a name and a number. The score exists; the score's effects are real; the score's basis is, by design, opaque to the citizen.",
          "The demonstration, for the present project's purposes, is twofold. First, that behavioral surveillance and correction at the scale of an entire population is not, in 2024, technically aspirational; it is operational. Second, that the regulatory frame within which such a system is deployed is not the principal constraint on whether it can be deployed; the principal constraint is the political will of the deploying body.",
        ],
      },
      {
        n: "III",
        title: "Apparatus-Theoretic Reading",
        body: [
          "The Social Credit System is the Compliance Monitor in state form. The mechanism is unsurprising. What is more revealing is the comparison with the Western implementation.",
          "The Western implementation aggregates approximately the same behavioral data — financial reliability via credit bureaus; criminal records via background-check vendors; regulatory compliance via insurance underwriters; online speech via content-moderation algorithms; lifestyle indicators via insurance and employer-wellness vendors — and routes it into approximately the same access privileges. The principal difference is that the Western implementation distributes the score across multiple private intermediaries, none of which publishes a unified number.",
          "The Western citizen is, by most operational measures, monitored more granularly than the Chinese citizen. The Western citizen simply does not see the unified score and consequently does not experience the system as a unified system. The ideology of &ldquo;private sector&rdquo; provides the cover.",
        ],
      },
      {
        n: "IV",
        title: "The Published Response",
        body: [
          "The Western press coverage of the Social Credit System has been, on average, alarmed in tone and accurate in description. The coverage has rarely extended to the comparison the present essay names. The comparison is, on my reading, not concealed; it is simply not made. The frame in which it would be made — that the apparatus is the same apparatus, deployed under different ideological flags — is not, in the contemporary press, the available frame.",
        ],
      },
      {
        n: "V",
        title: "Retrospective Claim",
        body: [
          "The Social Credit System is, on my reading, the most analytically clarifying contemporary case of the Compliance Monitor. The case clarifies because the system is named, scored, and centrally administered. The Western reader who finds the system alarming should, in honesty, conduct the same audit on themselves: assemble the multiple distributed scores that govern their access to flights, credit, employment, housing, healthcare, and internet bandwidth. The composite is the Western Social Credit Score. The composite is not, in the routine course of use, displayed.",
        ],
      },
      {
        n: "VI",
        title: "A Note",
        body: [
          "The Chinese and Western versions of the Monitor differ in which pieces are visible to the citizen and which are not. They do not, on inspection, differ much in the pieces themselves, or in what those pieces do. The visibility difference is consequential — the Chinese system is, to its citizens, addressable in a way the Western one is not — but to mistake the visibility difference for an existence difference is to mistake what one of these systems is, and which one of them one is in.",
        ],
      },
    ],
  },
};

export function generateStaticParams() {
  return PRECEDENTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = PRECEDENTS.find((p) => p.slug === slug);
  if (!entry) return {};
  return {
    title: { absolute: `${entry.title} — On the Chair` },
    description: entry.subtitle,
    alternates: { canonical: `/chair/precedents/${slug}` },
  };
}

export default async function PrecedentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = PRECEDENTS.find((p) => p.slug === slug);
  const body = BODIES[slug];
  if (!entry || !body) notFound();

  const idx = PRECEDENTS.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? PRECEDENTS[idx - 1] : null;
  const next = idx < PRECEDENTS.length - 1 ? PRECEDENTS[idx + 1] : null;

  return (
    <article
      style={{
        maxWidth: "44rem",
        margin: "0 auto",
        padding: "5rem 1.5rem 6rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2.5rem",
          fontFamily: MONO,
          fontSize: "0.72rem",
          letterSpacing: "0.22em",
          color: MUTED,
          textTransform: "uppercase",
        }}
      >
        <a href="/chair/precedents" style={{ color: "inherit", textDecoration: "none" }}>
          ← Precedents
        </a>
        <a href="/chair" style={{ color: "inherit", textDecoration: "none" }}>
          On the Chair
        </a>
      </nav>

      <header
        style={{
          borderBottom: `1px solid ${RULE}`,
          paddingBottom: "2.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.7rem",
            letterSpacing: "0.28em",
            color: ACCENT,
            textTransform: "uppercase",
            margin: 0,
            fontWeight: 600,
          }}
        >
          Precedent {entry.number} · {entry.year}
        </p>
        <h1
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.2rem, 5.4vw, 3.4rem)",
            lineHeight: 1.08,
            color: PAPER,
            margin: "1rem 0 0.8rem",
            letterSpacing: "-0.012em",
          }}
        >
          {entry.title}
        </h1>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "1.1rem",
            lineHeight: 1.5,
            color: PAPER_DIM,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          {entry.subtitle}
        </p>
        <p
          style={{
            marginTop: "1.2rem",
            fontFamily: MONO,
            fontSize: "0.66rem",
            letterSpacing: "0.18em",
            color: MUTED,
            textTransform: "uppercase",
          }}
        >
          Maps to · {entry.maps_to}
        </p>
      </header>

      {body.sections.map((s) => (
        <section key={s.n} style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 600,
              fontSize: "1.2rem",
              letterSpacing: "-0.005em",
              color: PAPER,
              margin: "2.4rem 0 1.2rem",
              paddingTop: "0.9rem",
              borderTop: `1px solid ${RULE}`,
              display: "grid",
              gridTemplateColumns: "3.5rem 1fr",
              gap: "1rem",
              alignItems: "baseline",
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: "0.72rem",
                color: ACCENT,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              § {s.n}
            </span>
            <span style={{ fontStyle: "italic" }}>{s.title}</span>
          </h2>
          {s.body.map((p, i) => {
            if (typeof p === "string") {
              return (
                <p
                  key={i}
                  style={{
                    fontFamily: SERIF,
                    fontSize: "1.07rem",
                    lineHeight: 1.72,
                    color: PAPER,
                    margin: "0 0 1.2rem",
                    textWrap: "pretty" as const,
                  }}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              );
            }
            return (
              <blockquote
                key={i}
                style={{
                  margin: "1.8rem 0",
                  padding: "0 0 0 1.4rem",
                  borderLeft: `2px solid ${ACCENT}`,
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "1.25rem",
                  lineHeight: 1.5,
                  color: PAPER,
                }}
              >
                {p.quote}
              </blockquote>
            );
          })}
        </section>
      ))}

      <div
        style={{
          marginTop: "2.5rem",
          paddingTop: "1.5rem",
          borderTop: `1px solid ${RULE}`,
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: "0.95rem",
          color: PAPER_DIM,
          textAlign: "right",
        }}
      >
        &mdash; Selimović, May 2026 · Precedent {entry.number} of 4
      </div>

      <nav
        style={{
          marginTop: "3rem",
          paddingTop: "1.6rem",
          borderTop: `1px solid ${RULE}`,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.4rem",
        }}
      >
        {prev ? (
          <a
            href={`/chair/precedents/${prev.slug}`}
            style={{
              padding: "0.9rem 1rem",
              border: `1px solid ${RULE}`,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: "0.66rem",
                letterSpacing: "0.2em",
                color: MUTED,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              ← Precedent {prev.number}
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: PAPER,
              }}
            >
              {prev.title}
            </div>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a
            href={`/chair/precedents/${next.slug}`}
            style={{
              padding: "0.9rem 1rem",
              border: `1px solid ${RULE}`,
              textDecoration: "none",
              color: "inherit",
              textAlign: "right",
            }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: "0.66rem",
                letterSpacing: "0.2em",
                color: MUTED,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              Precedent {next.number} →
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: PAPER,
              }}
            >
              {next.title}
            </div>
          </a>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
