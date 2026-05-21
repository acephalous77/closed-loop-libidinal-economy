import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "The Seven Subsystems — On the Chair" },
  description:
    "Seven companion essays to On the Chair, each treating one of the apparatus's subsystems in depth. Desire Engines, Consent Loops, Compliance Monitors, Surplus Reservoirs, Feedback Rituals, Affective Signal Translators, Algorithmic Libido Governors.",
  alternates: { canonical: "/chair/subsystems" },
};

const BG = "#f3ecd9";
const PAPER = "#1a1814";
const PAPER_DIM = "#4a443a";
const MUTED = "#8a8478";
const RULE = "rgba(26,24,20,0.14)";
const ACCENT = "#7a2818";

const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;

/**
 * /chair/subsystems — index for the seven companion essays.
 *
 * The main essay at /chair §V lists the seven subsystems as a table.
 * Each row links here to the long-form treatment. The order is
 * the order they appear in /chair §V.
 */

export const SUBSYSTEMS = [
  {
    slug: "desire-engines",
    number: "01",
    title: "Desire Engines",
    subtitle: "The content surface that produces what it then fulfills.",
    inheritance: "Deleuze & Guattari; Baudrillard; McLuhan",
  },
  {
    slug: "consent-loops",
    number: "02",
    title: "Consent Loops",
    subtitle: "The ritualized agreement architecture.",
    inheritance: "Foucault; the legal-positivist tradition",
  },
  {
    slug: "compliance-monitors",
    number: "03",
    title: "Compliance Monitors",
    subtitle: "The panopticon at saturation.",
    inheritance: "Foucault; Bentham; Zuboff",
  },
  {
    slug: "surplus-reservoirs",
    number: "04",
    title: "Surplus Reservoirs",
    subtitle: "Where the apparatus stores what it has extracted.",
    inheritance: "Marx, transposed; Zuboff",
  },
  {
    slug: "feedback-rituals",
    number: "05",
    title: "Feedback Rituals",
    subtitle: "The variable-ratio reinforcement schedule, deployed across consumer life.",
    inheritance: "Klein; Winnicott; Skinner; the casino industry",
  },
  {
    slug: "affective-signal-translators",
    number: "06",
    title: "Affective Signal Translators",
    subtitle: "Every other subsystem's afferent nerve.",
    inheritance: "Preciado; Damasio; the affective-computing literature",
  },
  {
    slug: "algorithmic-libido-governors",
    number: "07",
    title: "Algorithmic Libido Governors",
    subtitle: "The apparatus's central nervous system.",
    inheritance: "Lyotard; Berardi; the cybernetics tradition",
  },
] as const;

export type Subsystem = (typeof SUBSYSTEMS)[number];

export default function SubsystemsIndex() {
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
          Companion Essays · § V Extended
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
          The Seven Subsystems
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
          Long-form treatments of the apparatus&apos;s seven integrated
          subsystems, in the order in which they appear in the main essay.
          The subsystems are not seven different things; they are seven
          moments of one thing: the closed loop in operation. Each essay
          treats one moment in isolation in order to make the integration
          legible.
        </p>
      </header>

      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {SUBSYSTEMS.map((s) => (
          <li
            key={s.slug}
            style={{
              padding: "1.4rem 0",
              borderBottom: `1px solid ${RULE}`,
            }}
          >
            <a
              href={`/chair/subsystems/${s.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "2.6rem 1fr",
                gap: "1rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "0.78rem",
                  letterSpacing: "0.16em",
                  color: ACCENT,
                  fontWeight: 700,
                }}
              >
                {s.number}
              </span>
              <div>
                <h2
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontWeight: 600,
                    fontSize: "1.35rem",
                    color: PAPER,
                    margin: "0 0 0.3rem",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {s.title}
                </h2>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    color: PAPER_DIM,
                    margin: "0 0 0.6rem",
                  }}
                >
                  {s.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.66rem",
                    letterSpacing: "0.16em",
                    color: MUTED,
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Inheritance: {s.inheritance}
                </p>
              </div>
            </a>
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
        Seven essays · ≈ 5,000 words total
      </p>
    </main>
  );
}
