import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Precedents — On the Chair" },
  description:
    "Four companion essays to On the Chair §VI, treating the actually-existing proto-apparatuses: Meta's 2014 emotional-contagion experiment, TikTok's cadence engine, Pornhub's preference-assignment recommendation engine, and the Chinese Social Credit System.",
  alternates: { canonical: "/chair/precedents" },
};

const PAPER = "#f0ebe2";
const PAPER_DIM = "#bdb8ae";
const MUTED = "#6b6760";
const RULE = "rgba(240,235,226,0.14)";
const ACCENT = "#9a3322";

const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;

/**
 * /chair/precedents — index for the four companion essays on the
 * actually-existing proto-apparatuses.
 *
 * The main essay at /chair §VI argues that the chair is not predicted
 * but described — that every subsystem already exists, distributed
 * across the platforms and state systems we already inhabit. The four
 * essays here are the cases that argument rests on.
 */

export const PRECEDENTS = [
  {
    slug: "meta-emotional-contagion",
    number: "01",
    year: "2014",
    title: "Meta — The Emotional Contagion Experiment",
    subtitle:
      "The most candid single document the platform economy has ever produced.",
    maps_to: "Desire Engine; Affective Signal Translator",
  },
  {
    slug: "tiktok-cadence",
    number: "02",
    year: "2017—",
    title: "TikTok — The Cadence Engine",
    subtitle:
      "The closed-loop libidinal economy at its most mature operational implementation.",
    maps_to: "Desire Engine; Affective Signal Translator; Algorithmic Libido Governor",
  },
  {
    slug: "pornhub-preference-assignment",
    number: "03",
    year: "2020",
    title: "Pornhub — Preference Assignment",
    subtitle:
      "The Desire Engine operating on the most intimate possible variable.",
    maps_to: "Desire Engine; Pharmacopornographic Regime (Preciado)",
  },
  {
    slug: "social-credit-system",
    number: "04",
    year: "2014—",
    title: "The Chinese Social Credit System — The State-Form",
    subtitle:
      "The Compliance Monitor, named and centrally administered.",
    maps_to: "Compliance Monitor; Surplus Reservoir",
  },
] as const;

export type Precedent = (typeof PRECEDENTS)[number];

export default function PrecedentsIndex() {
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
          Companion Essays · § VI Extended
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
          Precedents
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
          Four actually-existing proto-apparatuses, each treated as the
          documented case that the chair&apos;s corresponding subsystem
          rests on. The argument of <a href="/chair" style={{ color: PAPER, textDecorationColor: ACCENT }}>On the Chair</a>{" "}
          § VI is that the chair is not predicted but described.
          These are the four cases that the description rests on. They
          are the easiest to verify and the hardest to dismiss.
        </p>
      </header>

      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {PRECEDENTS.map((p) => (
          <li
            key={p.slug}
            style={{
              padding: "1.4rem 0",
              borderBottom: `1px solid ${RULE}`,
            }}
          >
            <a
              href={`/chair/precedents/${p.slug}`}
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
                {p.number}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    color: MUTED,
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {p.year}
                </div>
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
                  {p.title}
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
                  {p.subtitle}
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
                  Maps to: {p.maps_to}
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
        Four cases · ≈ 3,000 words total
      </p>
    </main>
  );
}
