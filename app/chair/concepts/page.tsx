import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Concepts — On the Chair" },
  description:
    "Working definitions of the project's named frameworks: Closed-Loop Libidinal Economy, Psychic Surplus, OHCOSE, Tri-Axial Ouroboric Governance, Integrated Gamer Loops Framework, Capture of Cadence, Libidinal Ouroboros, Satisfaction Loops.",
  alternates: { canonical: "/chair/concepts" },
};

const PAPER = "#f0ebe2";
const PAPER_DIM = "#bdb8ae";
const MUTED = "#6b6760";
const RULE = "rgba(240,235,226,0.14)";
const ACCENT = "#9a3322";

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
      "The economic and psychic system in which desire is captured and re-circulated by the same apparatus that produces it. The qualifier <em>closed-loop</em> is operational: every output the subject generates is fed back as input to the apparatus, which uses it to refine the next desire-object it presents.",
      "The construction extends Lyotard's libidinal-economic framing into the platform era, in which the capture and re-circulation of desire is no longer a metaphor for political economy but its principal technical mechanism. The closed-loop libidinal economy is what political economy has become when its principal extractive instrument is the recommendation algorithm.",
    ],
    move:
      "The frame allows the analyst to treat platform behavior, consumer behavior, and labor behavior as a single phenomenon under different headings. The platform is not, in this frame, a service the subject uses; it is the technical medium within which the subject's desire forms. The shift from <em>uses</em> to <em>within which</em> is the analytical move the concept enables.",
    located: [
      { href: "/chair", label: "On the Chair (the essay)" },
      { href: "/closed-loop/the-argument/the-loop", label: "The Loop (the broader argument)" },
    ],
  },
  {
    slug: "psychic-surplus",
    name: "Psychic Surplus",
    definition: [
      "The portion of a subject's attention, affect, fantasy, and motivation that exceeds what is strictly required for biological survival and basic social function, and that can be captured and re-routed by the apparatus without (in the short term) compromising the subject's continued functioning.",
      "The construct is parallel to the Marxian <em>surplus labor</em> &mdash; the work performed beyond the worker's own reproductive needs, appropriated as profit &mdash; but transposed to the libidinal register. Where surplus labor was extracted by the wage relation, psychic surplus is extracted by the platform relation: continuous engagement with apparatus-mediated content surfaces that convert affective response into commercial input.",
    ],
    move:
      "Naming the surplus permits the question that platform-economic apologetics is structured to forestall: <em>what, precisely, is being extracted, and at what rate?</em> The Marxian-transposition framing also clarifies that the contemporary apparatus is not a neutral provider; it is an extractive instrument whose business model fails the moment the surplus stops flowing.",
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
      "The six-phase developmental lifecycle through which the apparatus relates to a given subject over the course of that subject's residence. Each phase corresponds to a different configuration of psychic-surplus extraction and a different mode of subject-apparatus integration.",
      "The phases are <em>Onboarding</em> (ceremony of integration), <em>Habituation</em> (acclimation to the apparatus's circadian envelope), <em>Calibration</em> (parameter-tuning to the subject's response profile), <em>Occupancy</em> (sustained productive residence), <em>Stewardship</em> (maintenance at the threshold of viability as productive output declines), and <em>Estate</em> (post-mortem persistence of the subject's productivity profile and preference record).",
    ],
    move:
      "OHCOSE permits the analyst to ask which phase a given subject is currently in, rather than treating apparatus-subject interaction as a single static condition. The phase frame also clarifies that the apparatus's value extraction continues beyond the subject's biological cessation &mdash; a feature easily missed when the subject is treated as a discrete event.",
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
      "The proposition that the contemporary libidinal-economic apparatus operates by simultaneously capturing the subject along three axes &mdash; <em>temporal</em>, <em>economic</em>, and <em>affective</em> &mdash; and that any analysis engaging only one will miss the apparatus by exactly the margin of the other two.",
      "The temporal axis is the cadence at which desire is produced and answered (developed under <em>Capture of Cadence</em>). The economic axis is the metering and pricing of attention and affect (developed under <em>Psychic Surplus</em>). The affective axis is the modulation of which emotions the subject is permitted, or invited, to feel (developed in dialogue with Preciado and Marcuse).",
    ],
    move:
      "TAOG is the project's most synthetic framework. It is intended to discipline analyses of the platform economy that engage one axis at a time and consequently miss the operational integration. The contemporary apparatus does all three at once; an adequate analysis must follow.",
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
      "An applied translation of the closed-loop libidinal-economic framework into the analytical and design vocabulary of the gaming industry. IGLF maps the apparatus's seven subsystems onto observable design choices in contemporary game systems &mdash; progression curves, reward schedules, social-pressure mechanics, monetization funnels &mdash; and provides a vocabulary for evaluating which design choices intensify libidinal capture and which permit relief.",
    ],
    move:
      "IGLF was developed as part of the project's industry-facing work (Netflix, Ubisoft, Activision R&amp;I engagements). The framework permits a designer or analyst to identify the libidinal-economic mechanism a given game system is implementing and to ask whether that mechanism is one the studio intends to deploy or one that has accreted by industry convention. Many of the most extractive game systems were not, in the original design intent, extractive; they have become so through unreflective convergence.",
    located: [
      { href: "/closed-loop/instrumentation", label: "Instrumentation (the operational adaptation)" },
    ],
  },
  {
    slug: "capture-of-cadence",
    name: "Capture of Cadence",
    definition: [
      "The proposition that the contemporary apparatus's most consequential capture is not of <em>content</em> (what the subject does) but of <em>cadence</em> (the rhythm at which the subject does it). The notification schedule, the autoplay envelope, the algorithmically-paced reveal &mdash; these are not content; they are tempo. The temporal axis is what the subject loses first and notices last.",
      "Earlier forms of labor and consumer extraction worked on quanta: hours worked, units produced, transactions completed. The contemporary form works on cadence: the underlying rhythm at which the subject's life proceeds. The shift is consequential because cadence is not legible to the subject in the way quanta are. The subject can audit their hours; they cannot, generally, audit the rhythm at which their dopamine peaks have been entrained.",
    ],
    move:
      "The frame moves the analytical question from <em>what is the subject doing?</em> to <em>at what rhythm?</em>. It also reframes the politics: the most effective form of refusal, in the contemporary apparatus, is not refusal of content but refusal of cadence &mdash; to be slow when speed is demanded, silent when noise is rewarded, inattentive when engagement is metered. The apparatus has a long history of pathologizing the practice. The rebranding is the apparatus's tribute to the practice's effectiveness.",
    located: [
      { href: "/chair", label: "On the Chair, § V (introduced) and § IX (politicized)" },
      { href: "/closed-loop/the-dynamics", label: "The Dynamics (the broader treatment)" },
    ],
  },
  {
    slug: "libidinal-ouroboros",
    name: "Libidinal Ouroboros",
    definition: [
      "The figure of the self-consuming desire loop: the apparatus that produces the desire it then fulfills, then uses the fulfillment to produce the next desire. The image is the snake that devours its own tail, with the qualification that the snake is also being fed.",
      "The figure organizes the project's central image (the Ouroboros Life System, the chair) and the project's central operational claim (that contemporary platform capitalism functions as a recursive satisfaction engine in which extraction and reproduction are the same operation). The figure is, importantly, not a metaphor &mdash; or rather, it is a metaphor that has become an architectural specification.",
    ],
    move:
      "The Libidinal Ouroboros is the project's most concentrated single image. It is intended to do, for the closed-loop libidinal economy, what the panopticon did for Foucault's disciplinary society: render a complex operational logic visible in a single picture. The figure is, by design, easier to remember than the theory it summarizes &mdash; which is itself the analytical move.",
    located: [
      { href: "/chair", label: "On the Chair, § II" },
      { href: "/chair/the-system", label: "The brochure (the apparatus's own use of the figure)" },
    ],
  },
  {
    slug: "satisfaction-loops",
    name: "Satisfaction Loops",
    definition: [
      "The micro-cycles of desire &rarr; gratification &rarr; renewed desire that the contemporary apparatus engineers into its user-experience designs. Each cycle is brief (seconds to minutes); the cycles are stacked at high frequency; the subject's attention and affective state are organized around the cycle's return.",
      "Satisfaction Loops are the operational unit at which the Capture of Cadence is implemented. The cycle's variable-ratio reinforcement schedule (Skinner's pigeon work, adapted by the casino industry, then by the platform industry) is the principal technical instrument. The subject experiences each cycle as a small win or a near-miss; the apparatus experiences each cycle as a unit of engagement.",
    ],
    move:
      "Naming the Loop permits the analyst to ask, of a given UX, how many Loops it contains per minute and what each Loop's expected affective yield is. The analytical move converts what is usually described in vague terms (&ldquo;engagement,&rdquo; &ldquo;stickiness,&rdquo; &ldquo;flow&rdquo;) into a counted, structured thing.",
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
          Working definitions of the project&apos;s named frameworks. The
          essay at <a href="/chair" style={{ color: PAPER, textDecorationColor: ACCENT }}>On the Chair</a>{" "}
          uses these terms throughout; this page makes them precise.
          Each entry states the construct, the analytical move it enables,
          and where it appears in the broader project.
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
