import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Lineage — On the Chair" },
  description:
    "Six companion essays to On the Chair §VII, taking the brochure's claimed 160-year design lineage seriously enough to verify it. What was real, what wasn't, and what survives the verification.",
  alternates: { canonical: "/chair/lineage" },
};

const PAPER = "#f0ebe2";
const PAPER_DIM = "#bdb8ae";
const MUTED = "#6b6760";
const RULE = "rgba(240,235,226,0.14)";
const ACCENT = "#9a3322";

const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;
const MONO = `var(--font-geist-mono), ui-monospace, monospace`;

export const LINEAGE = [
  {
    slug: "labor-compensator",
    number: "01",
    year: "1865",
    title: "The Labor Compensator",
    subtitle:
      "Half real and half marketing. The half that is real is real enough.",
  },
  {
    slug: "efficiency-enhancer",
    number: "02",
    year: "1900",
    title: "The Efficiency Enhancer",
    subtitle:
      "The seat as productive locus, the operator as bottleneck, the apparatus as the thing that maintains the configuration.",
  },
  {
    slug: "dynamic-dynamo",
    number: "03",
    year: "1925",
    title: "The Dynamic Dynamo",
    subtitle:
      "Western Electric's Hawthorne stations and the Ford River Rouge floor. A configuration that captured the whole operator at once.",
  },
  {
    slug: "knowledge-chair",
    number: "04",
    year: "1955",
    title: "The Knowledge Chair",
    subtitle:
      "Hartman's Integrated Office Workstation. Eighty-three units shipped. The chair's mid-century cognitive turn.",
  },
  {
    slug: "virtual-ouroboros",
    number: "05",
    year: "1985",
    title: "The Virtual Ouroboros",
    subtitle:
      "The brochure backdates by twenty years. The phenomenon the brochure is reaching for is real; the date isn't.",
  },
  {
    slug: "ouroboros-life-system",
    number: "06",
    year: "2024",
    title: "The Ouroboros Life System",
    subtitle:
      "The seventh seat. The only iteration I have not had to verify against historical records.",
  },
] as const;

export type LineageEntry = (typeof LINEAGE)[number];

export default function LineageIndex() {
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
          Companion Essays · § VII Extended
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
          Lineage
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
          The brochure at <a href="/chair/the-system" style={{ color: PAPER, textDecorationColor: ACCENT }}>/chair/the-system</a>{" "}
          claims six predecessor devices going back to 1865. I have
          checked each. The verification is what these essays are. I
          have allowed the brochure to be wrong where it is wrong and
          to be more right than I expected where it is.
        </p>
      </header>

      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {LINEAGE.map((l) => (
          <li
            key={l.slug}
            style={{
              padding: "1.4rem 0",
              borderBottom: `1px solid ${RULE}`,
            }}
          >
            <a
              href={`/chair/lineage/${l.slug}`}
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
                {l.number}
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
                  {l.year}
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
                  {l.title}
                </h2>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    color: PAPER_DIM,
                    margin: 0,
                  }}
                >
                  {l.subtitle}
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
        Six iterations · ≈ 4,500 words total
      </p>
    </main>
  );
}
