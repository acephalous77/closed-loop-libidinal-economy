import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Concepts — On the Chair" },
  description:
    "Working definitions of the project's named frameworks: Closed-Loop Libidinal Economy, Psychic Surplus, OHCOSE, Tri-Axial Ouroboric Governance, Integrated Gamer Loops Framework, Capture of Cadence, Libidinal Ouroboros, Satisfaction Loops.",
  alternates: { canonical: "/chair/concepts" },
};

const PAPER = "#1a1814";
const PAPER_DIM = "#4a443a";
const MUTED = "#8a8478";
const RULE = "rgba(26,24,20,0.14)";
const ACCENT = "#7a2818";

const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;

/**
 * /chair/concepts — working definitions of the project's named
 * frameworks. The essay at /chair uses these terms throughout; this
 * page makes them precise.
 *
 * Each entry follows the same shape: name, abbreviation, working
 * definition, the analytical move it enables, and where it appears
 * in the project.
 */

type Concept = {
  slug: string;
  name: string;
  abbreviation?: string;
  // Working definition. 1-3 short paragraphs.
  definition: string[];
  // The analytical move the concept enables. One paragraph.
  move: string;
  // Where it appears in the project.
  located: { href: string; label: string }[];
};

const CONCEPTS: Concept[] = [
  {
    slug: "closed-loop-libidinal-economy",
    name: "Closed-Loop Libidinal Economy",
    abbreviation: "CLLE",
    definition: [
      "An economy in which desire and its satisfaction are produced by the same apparatus, and in which every output the subject generates becomes input the apparatus uses to refine what it offers next. <em>Closed-loop</em> is meant operationally, not metaphorically: there is no point in the cycle where the subject's response leaves the system.",
      "The framing extends Lyotard's libidinal economy into the platform era. Lyotard was writing about a tendency. The contemporary apparatus has made the tendency into infrastructure. Recommendation algorithms, biometric surveillance stacks, behavioural-pricing engines — these are the technical means by which what was once a way of describing capitalism became a way of running it.",
    ],
    move:
      "The frame is what I reach for when I want to talk about platform behaviour, consumer behaviour, and labour behaviour as one thing. They are not, in practice, three different things. They are three vocabularies for the same loop, and using all three vocabularies at once is usually the only way to see the loop clearly. The platform is not a service the subject uses. It is the medium the subject's desire is being formed within. Everything that follows from this shift is what the project has been trying to work out.",
    located: [
      { href: "/chair", label: "On the Chair (the essay)" },
      { href: "/closed-loop/the-argument/the-loop", label: "The Loop (the broader argument)" },
    ],
  },
  {
    slug: "psychic-surplus",
    name: "Psychic Surplus",
    definition: [
      "What the apparatus takes. Specifically: the attention, affect, fantasy, and motivation a subject produces in excess of what they strictly need to keep functioning, and which the apparatus can divert without — at least in the short run — costing the subject anything they would notice.",
      "I built the construct as a parallel to Marx's <em>surplus labour</em>: the work performed beyond what the worker needs for their own reproduction, appropriated as profit. Surplus labour was extracted by the wage relation. Psychic surplus is extracted by the platform relation. The mechanism has changed; the basic transaction (something the subject produces becomes something the apparatus owns) has not.",
    ],
    move:
      "I find the construct most useful as a question. Platform-economic apologetics treats the apparatus as a service exchange — the user gets convenience, the platform gets data, a fair trade. Naming the surplus is what lets you ask the question the trade frame is structured to avoid: what is being extracted, and at what rate? The Marx parallel is also helpful because it makes the apparatus's commercial vulnerability legible. The platforms, like the factories they descend from, fail the moment the surplus stops flowing. This is not a small detail.",
    located: [
      { href: "/chair", label: "On the Chair, § III" },
      { href: "/chair/subsystems/surplus-reservoirs", label: "Surplus Reservoirs (the storage subsystem)" },
    ],
  },
  {
    slug: "ohcose",
    name: "OHCOSE",
    abbreviation: "Onboarding · Habituation · Calibration · Occupancy · Stewardship · Estate",
    definition: [
      "A six-phase model of how the apparatus relates to a subject over the subject's full residence with it — not a life-stage typology of the subject themselves but a lifecycle of the subject-apparatus relation. Each phase has its own extraction profile.",
      "The phases: <em>Onboarding</em> (ceremony of integration); <em>Habituation</em> (the subject's body and rhythms acclimating to the apparatus's envelope); <em>Calibration</em> (the apparatus tuning itself to the subject's measured response); <em>Occupancy</em> (sustained productive residence, the steady state); <em>Stewardship</em> (maintenance at the threshold of viability as the subject's output declines); <em>Estate</em> (the configuration after biological cessation, in which the subject's data and preference record continue to operate on behalf of brand partners under the Eternal-tier protocols).",
    ],
    move:
      "The model exists because I kept noticing that platform-economic analyses tend to treat apparatus-subject interaction as a single static condition. It isn't. The same person interacting with the same platform in week one and week three hundred is in two operationally different relationships, and the platform knows this even when the analysis doesn't. The phase frame is a way of forcing the question — which phase, which extraction profile, which integration mode — back into the analytical foreground. It is also the only frame I have found that makes the post-mortem extraction the apparatus performs (the Estate phase) easy to name without sounding hyperbolic. The Estate phase is hyperbolic. It is also operational.",
    located: [
      { href: "/chair", label: "On the Chair, § IV" },
      { href: "/ohcose", label: "OHCOSE (the broader life-stage treatment)" },
    ],
  },
  {
    slug: "tri-axial-ouroboric-governance",
    name: "Tri-Axial Ouroboric Governance",
    abbreviation: "TAOG",
    definition: [
      "The claim that the contemporary libidinal-economic apparatus captures the subject along three axes at once — <em>temporal</em>, <em>economic</em>, and <em>affective</em> — and that any analysis that engages only one of the three will miss the apparatus by exactly the margin of the other two.",
      "The temporal axis is the cadence at which desire is produced and answered. I treat it under <em>Capture of Cadence</em>. The economic axis is the metering and pricing of attention and affect. I treat it under <em>Psychic Surplus</em>. The affective axis is the modulation of which emotions the subject is permitted, or invited, to feel. I treat it in dialogue with Preciado and Marcuse, mostly.",
    ],
    move:
      "TAOG is the framework I reach for when I find myself getting an argument wrong. The wrongness is usually that I am leaning on one of the three axes and ignoring the other two. Most existing analyses of the platform economy have this problem — economists engage the economic axis, affect theorists engage the affective axis, philosophers of time engage the temporal axis, and the apparatus they each describe is, accordingly, one-third of an apparatus. The contemporary one does all three simultaneously. I have made this mistake more than once myself, and the framework is partly a way of catching myself doing it.",
    located: [
      { href: "/chair", label: "On the Chair, § VIII" },
      { href: "/closed-loop/the-mathematics", label: "The Mathematics (the formalization)" },
    ],
  },
  {
    slug: "integrated-gamer-loops-framework",
    name: "Integrated Gamer Loops Framework",
    abbreviation: "IGLF",
    definition: [
      "An applied translation of the closed-loop libidinal-economic framework into the analytical and design vocabulary of the gaming industry. IGLF maps the seven subsystems onto observable design choices — progression curves, reward schedules, social-pressure mechanics, monetisation funnels — and gives designers a vocabulary for distinguishing the mechanisms they intend to deploy from the mechanisms that have accreted into the field by industry convention.",
    ],
    move:
      "IGLF came out of the industry-facing work — the Netflix, Ubisoft, and Activision R&amp;I engagements I have done over the past few years. The thing I kept running into in those rooms was that designers do not, on the whole, want to be extractive. They want to make games people enjoy. The mechanisms that have made contemporary games extractive — the slot-machine reward schedule, the loot-box pull, the engagement-maximising daily-challenge structure — were, in many cases, not chosen by the designers sitting in front of me. They were inherited. They came with the engine. The framework is, in practice, a way of helping designers see which choices are choices and which have stopped feeling like choices. Sometimes that's enough.",
    located: [
      { href: "/closed-loop/instrumentation", label: "Instrumentation (the operational adaptation)" },
    ],
  },
  {
    slug: "capture-of-cadence",
    name: "Capture of Cadence",
    definition: [
      "The claim that the apparatus's most consequential capture is not of <em>content</em> (what the subject does) but of <em>cadence</em> (the rhythm at which the subject does it). The notification schedule, the autoplay envelope, the algorithmically-paced reveal — not content, tempo. The temporal axis is what the subject loses first and notices last.",
      "Earlier forms of extraction worked on quanta — hours worked, units produced, transactions completed — and quanta are auditable. You can know how many hours you worked last week. Cadence is not auditable in the same way. You cannot, in the routine course of using the apparatus, tell me the rhythm at which your dopamine peaks have been entrained, or at what interval your attention has been trained to expect its next prompt. The capture happens at a temporal resolution your conscious experience has no instruments to register.",
    ],
    move:
      "Capture of Cadence is the construct that changed the most about how I think about refusal. Before I had the construct, my own anti-extractive practices were content-focused — pick what to read, pick what not to scroll. Content-focused refusal turns out to be approximately worthless, because the apparatus does not care, much, what you are reading. It cares at what cadence you are reading. Once the construct was in place, the question shifted: what rhythm am I letting the apparatus set, and what would it cost me to set a different one? Most of <em>On the Chair</em> § IX is downstream of this question.",
    located: [
      { href: "/chair", label: "On the Chair, § V (introduced) and § IX (politicized)" },
      { href: "/closed-loop/the-dynamics", label: "The Dynamics (the broader treatment)" },
    ],
  },
  {
    slug: "libidinal-ouroboros",
    name: "Libidinal Ouroboros",
    definition: [
      "The figure of the self-consuming desire loop — the apparatus that produces the desire it then fulfills, and uses the fulfillment to produce the next desire. The image is the snake eating its own tail, with the addendum that the snake is also being fed.",
      "The figure does two jobs in the project. It anchors the central image (the Ouroboros Life System; the chair). It also names the operational claim: that contemporary platform capitalism functions as a recursive satisfaction engine in which extraction and reproduction are not separable operations. Calling it a metaphor undersells what has happened. The metaphor has become an architectural specification — the apparatus is now physically constructed around the figure the figure used to describe.",
    ],
    move:
      "The Libidinal Ouroboros is what I use when I need to hand someone the whole project in one image. It does for the closed-loop libidinal economy what the panopticon did for Foucault — gives the reader something they can keep in their head after the argument has faded. I have, over the years, tried other images (the centrifuge; the still; the heart-lung machine). The ouroboros has worked best, partly because the apparatus itself uses it. The chair's brochure is built around the figure. That the brochure and this essay are using the same picture for opposite ends is, on my view, the most honest piece of evidence we have about what the apparatus is.",
    located: [
      { href: "/chair", label: "On the Chair, § II" },
      { href: "/chair/the-system", label: "The brochure (the apparatus's own use of the figure)" },
    ],
  },
  {
    slug: "satisfaction-loops",
    name: "Satisfaction Loops",
    definition: [
      "The micro-cycles of desire &rarr; gratification &rarr; renewed desire that the apparatus engineers into its interfaces. Each cycle is short (seconds to minutes); the cycles stack at high frequency; the subject's attention and affective state come to be organised around the cycle's return.",
      "Satisfaction Loops are the operational unit at which Capture of Cadence is implemented. The cycle's variable-ratio reinforcement schedule — Skinner's pigeons, then the casino industry's house economists, then the platform industry — is the technical instrument. The subject experiences each cycle as a small win or a near-miss. The apparatus experiences each cycle as a unit of engagement, scored and stored.",
    ],
    move:
      "I started using the Loop construct because the existing vocabulary — engagement, stickiness, flow — was not telling me anything. Engagement was a marketing word. Stickiness was an industry word. Flow had been a useful psychological construct before it was conscripted into UX presentations. None of them was countable. The Loop is countable: you can ask, of a given interface, how many of them it fires per minute and what each Loop's expected affective yield is. Once you have those two numbers, you can start to compare designs in a way that is not a question of taste. Most of the most extractive contemporary interfaces fire more Loops per minute than I would have expected before I started counting.",
    located: [
      { href: "/chair/subsystems/feedback-rituals", label: "Feedback Rituals (the subsystem)" },
    ],
  },
];

export default function ConceptsPage() {
  return (
    <main
      style={{
        maxWidth: "44rem",
        margin: "0 auto",
        padding: "5rem 1.5rem 6rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <nav style={{ marginBottom: "2.5rem" }}>
        <a
          href="/chair"
          style={{
            fontFamily: MONO,
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            color: MUTED,
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          ← On the Chair
        </a>
      </nav>

      <header
        style={{
          borderBottom: `1px solid ${RULE}`,
          paddingBottom: "2.5rem",
          marginBottom: "3rem",
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
          Working Definitions
        </p>
        <h1
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            lineHeight: 1.08,
            color: PAPER,
            margin: "1rem 0 0.8rem",
            letterSpacing: "-0.01em",
          }}
        >
          Concepts
        </h1>
        <p
          style={{
            fontFamily: SERIF,
            fontSize: "1.1rem",
            lineHeight: 1.6,
            color: PAPER_DIM,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          Eight constructs I keep using across the project, set out at
          the length someone running into one of them for the first
          time would need. Each entry gives the working definition,
          says something about how I came to it and what I do with it,
          and points back to where it appears in the rest of the work.
          The page is meant to be skimmable: it is not the place to
          read the project from. The essay at{" "}
          <a href="/chair" style={{ color: PAPER, textDecorationColor: ACCENT }}>On the Chair</a>{" "}
          is.
        </p>
      </header>

      {/* Quick index */}
      <nav
        style={{
          marginBottom: "3rem",
          padding: "1rem 1.2rem",
          border: `1px solid ${RULE}`,
        }}
        aria-label="Concept index"
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: "0.66rem",
            letterSpacing: "0.22em",
            color: MUTED,
            textTransform: "uppercase",
            marginBottom: "0.7rem",
            fontWeight: 600,
          }}
        >
          In this page
        </div>
        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            columnCount: 2,
            columnGap: "1.6rem",
          }}
          className="ole-concepts-index"
        >
          {CONCEPTS.map((c) => (
            <li
              key={c.slug}
              style={{
                padding: "0.25rem 0",
                breakInside: "avoid",
              }}
            >
              <a
                href={`#${c.slug}`}
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "1rem",
                  color: PAPER,
                  textDecoration: "none",
                }}
              >
                {c.name}
                {c.abbreviation && c.abbreviation.length <= 6 && (
                  <span style={{ color: MUTED, fontStyle: "normal", fontFamily: MONO, fontSize: "0.74rem", marginLeft: 6 }}>
                    ({c.abbreviation})
                  </span>
                )}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Entries */}
      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {CONCEPTS.map((c, i) => (
          <li
            key={c.slug}
            id={c.slug}
            style={{
              marginBottom: "3rem",
              paddingTop: "1.6rem",
              borderTop: i === 0 ? "none" : `1px solid ${RULE}`,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2.4rem 1fr",
                gap: "1rem",
                alignItems: "baseline",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "0.72rem",
                  letterSpacing: "0.16em",
                  color: ACCENT,
                  fontWeight: 700,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "1.6rem",
                    color: PAPER,
                    margin: "0 0 0.3rem",
                    letterSpacing: "-0.008em",
                    lineHeight: 1.15,
                  }}
                >
                  {c.name}
                </h2>
                {c.abbreviation && (
                  <p
                    style={{
                      fontFamily: MONO,
                      fontSize: "0.76rem",
                      letterSpacing: "0.14em",
                      color: MUTED,
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    {c.abbreviation}
                  </p>
                )}
              </div>
            </div>

            {/* Definition */}
            {c.definition.map((p, j) => (
              <p
                key={j}
                style={{
                  fontFamily: SERIF,
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: PAPER,
                  margin: "0 0 1rem",
                }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}

            {/* The move */}
            <div
              style={{
                marginTop: "1.2rem",
                padding: "0.9rem 1.1rem",
                background: "rgba(154,51,34,0.06)",
                borderLeft: `2px solid ${ACCENT}`,
              }}
            >
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: "0.66rem",
                  letterSpacing: "0.22em",
                  color: ACCENT,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                The analytical move
              </div>
              <p
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: PAPER_DIM,
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{ __html: c.move }}
              />
            </div>

            {/* Where it appears */}
            <div
              style={{
                marginTop: "1rem",
                fontFamily: MONO,
                fontSize: "0.7rem",
                letterSpacing: "0.16em",
                color: MUTED,
                textTransform: "uppercase",
                lineHeight: 1.7,
              }}
            >
              <span style={{ marginRight: "0.6rem" }}>Located:</span>
              {c.located.map((l, j) => (
                <span key={j}>
                  <a
                    href={l.href}
                    style={{
                      color: PAPER_DIM,
                      textDecoration: "underline",
                      textDecorationColor: ACCENT,
                      textDecorationThickness: 1,
                      textUnderlineOffset: 2,
                    }}
                  >
                    {l.label}
                  </a>
                  {j < c.located.length - 1 && (
                    <span style={{ color: MUTED, margin: "0 0.5rem" }}>·</span>
                  )}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <p
        style={{
          marginTop: "3rem",
          fontFamily: MONO,
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          color: MUTED,
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Eight concepts · this page evolves with the project
      </p>

      <style>{`
        @media (max-width: 600px) {
          .ole-concepts-index { column-count: 1 !important; }
        }
      `}</style>
    </main>
  );
}
