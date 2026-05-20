import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Imperial Archive — Ouroboros Life System" },
  alternates: { canonical: "/chair/archive" },
  robots: { index: false }, // Hidden from search; discoverable only by clicking through
};

const INK = "#0a0a0a";
const INK_70 = "#5a5a5a";
const INK_40 = "#9a9a9a";
const INK_20 = "#e6e6e6";
const ACCENT = "#7a3a14"; // archive-period sepia, distinct from product-page palette

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const DISPLAY = `-apple-system, "Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif`;
const SERIF = `"Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`;

/**
 * Encyclopedia entries written from a future-historical vantage (the
 * "Imperial Archive"), looking back at the Ouroboros Life System as
 * a 21st-century artifact. The frame is Dune-like — encyclopedia
 * entries that ground the world in time while staying dispassionate.
 *
 * The archive is hidden from search (robots: noindex) and the only
 * surface paths to it are discreet markers scattered across the
 * product page itself.
 */

export const ENTRIES = [
  {
    slug: "ouroboros-ring",
    code: "2197.04",
    title: "On the Ouroboros Ring",
    summary:
      "The apparatus's central design conceit, retrospectively considered.",
  },
  {
    slug: "period-typography",
    code: "2197.07",
    title: "The 'Goming Screen' & Other Period Typographic Errors",
    summary:
      "On the irregular type in the marketing materials, framed as evidence of late-period machine production.",
  },
  {
    slug: "pro-tier-moratorium",
    code: "2197.11",
    title: "The Pro-tier Moratorium of 2049",
    summary:
      "A regulatory event that briefly suspended the apparatus's most successful configuration.",
  },
  {
    slug: "proto-apparatuses",
    code: "2197.14",
    title: "Proto-Apparatuses: The Social-Media Ancestry",
    summary:
      "On the platform-era systems that prefigured the apparatus and made its conception inevitable.",
  },
  {
    slug: "eternal-tier",
    code: "2197.22",
    title: "On the Eternal Tier: Post-mortem Continuity",
    summary:
      "The configuration that promised inheritance of the occupant's data and obligations beyond biological cessation.",
  },
  {
    slug: "testimonial-analysis",
    code: "2197.26",
    title: "The Testimonial Voice",
    summary:
      'On the period\'s characteristic conflation of confinement and gratitude. With reference to the canonical "I haven\'t had to stand up in nine months" specimen.',
  },
  {
    slug: "fitting-ritual",
    code: "2197.30",
    title: "On the Fitting Ritual",
    summary:
      "The home-visit calibration procedure by which the apparatus was sized to the occupant. Read as a domesticated inversion of the medical intake.",
  },
  {
    slug: "waste-subsystem",
    code: "2197.34",
    title: "The Waste-Extraction Subsystem",
    summary:
      "On the system whose disclosure the marketing apparatus most carefully managed. The euphemism trail traced through the surviving copy.",
  },
  {
    slug: "refurbished-aftermarket",
    code: "2197.41",
    title: "The Refurbished Aftermarket",
    summary:
      "The black-market trade in proscribed units that persisted for forty years after the OLS's withdrawal from licit sale.",
  },
  {
    slug: "successor-systems",
    code: "2197.48",
    title: "Successor Systems: From Furniture to Implant",
    summary:
      "What replaced the chair after the chair. The progression from external apparatus to embedded protocol, and the change in the period's commercial vocabulary that accompanied it.",
  },
];

export default function ImperialArchiveIndex() {
  return (
    <main
      style={{
        maxWidth: "44rem",
        margin: "0 auto",
        padding: "5rem 5vw 6rem",
      }}
    >
      {/* Top nav */}
      <nav style={{ marginBottom: "3rem" }}>
        <a
          href="/chair"
          style={{
            fontFamily: MONO,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: INK_70,
            textDecoration: "none",
          }}
        >
          ← Ouroboros Life System
        </a>
      </nav>

      {/* Masthead */}
      <header style={{ borderBottom: `2px solid ${INK}`, paddingBottom: "1.5rem", marginBottom: "3rem" }}>
        <p
          style={{
            fontFamily: MONO,
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.28em",
            color: ACCENT,
            margin: 0,
          }}
        >
          Imperial Archive · accession 2197
        </p>
        <h1
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.05,
            margin: "0.6rem 0 0",
            color: INK,
          }}
        >
          On the Ouroboros Life System
        </h1>
        <p
          style={{
            marginTop: "0.8rem",
            fontFamily: SERIF,
            fontSize: "1.05rem",
            color: INK_70,
            lineHeight: 1.55,
          }}
        >
          A retrospective on a 21st-century consumer apparatus, compiled
          from the period&apos;s preserved marketing materials, regulatory
          filings, and the small surviving body of occupant correspondence.
        </p>
      </header>

      {/* Editor's preface */}
      <section
        style={{
          fontFamily: SERIF,
          fontSize: "1rem",
          lineHeight: 1.65,
          color: "#1a1a1a",
          marginBottom: "3rem",
          fontStyle: "italic",
        }}
      >
        <p>
          The Ouroboros Life System (OLS), introduced into the consumer
          market of the late North-Atlantic capitalist period, was sold
          to its occupants as a luxury life-support apparatus &mdash;
          a chair-form enclosure that promised the elimination of the
          friction between living, working, and consuming. By the
          mid-22nd century the OLS had been formally proscribed in most
          Tier-2 sovereignties, though refurbished units continued to
          circulate on the black market into the late period. The
          present archive collects the surviving record.
        </p>
      </section>

      {/* Entries list */}
      <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {ENTRIES.map((e) => (
          <li
            key={e.slug}
            style={{
              padding: "1.5rem 0",
              borderBottom: `1px solid ${INK_20}`,
            }}
          >
            <a
              href={`/chair/archive/${e.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "5rem 1fr",
                columnGap: "1.5rem",
                textDecoration: "none",
                color: "inherit",
              }}
              className="archive-entry"
            >
              <span
                style={{
                  fontFamily: MONO,
                  fontSize: "0.8rem",
                  color: ACCENT,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                }}
              >
                {e.code}
              </span>
              <div>
                <h2
                  style={{
                    fontFamily: SERIF,
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                    margin: 0,
                    color: INK,
                  }}
                >
                  {e.title}
                </h2>
                <p
                  style={{
                    marginTop: "0.4rem",
                    fontFamily: SERIF,
                    fontSize: "0.95rem",
                    color: INK_70,
                    lineHeight: 1.5,
                    fontStyle: "italic",
                  }}
                >
                  {e.summary}
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
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: INK_40,
          textAlign: "center",
        }}
      >
        end of accession · 2197.26
      </p>

      <style>{`
        .archive-entry h2 { transition: color 80ms; }
        .archive-entry:hover h2 { color: ${ACCENT}; }
      `}</style>
    </main>
  );
}
