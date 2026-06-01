import type { Metadata } from "next";
import { JsonLd } from "@/lib/jsonld";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

export const metadata: Metadata = {
  title: { absolute: "autostimulus" },
  description:
    "Works by A. Selimović. Critical theory, media psychology, political economy. The closed-loop libidinal economy, the OHCOSE manual, the ouroboros chair, the patriotic-times coloring book, and the ouroboric-condition atlas — each entered by the question it asks.",
};

interface Work {
  question: string;
  title: string;
  year: string;
  register: string;
  href: string;
  status: "live" | "in production";
}

/**
 * The five works, hung as a catalogue rather than ranked as a list.
 * Each is called by the question it investigates — so a visitor can
 * tell the three ouroboros-named works apart (the chair, the atlas,
 * and OHCOSE's machine) and know what kind of encounter to expect.
 *
 * Order is curatorial, not numbered: the apparatus made concrete
 * (object → institution → territory), then the formal engine beneath
 * them, then the political outside. Nothing reads as first or best.
 */
const WORKS: Work[] = [
  {
    question:
      "What if everything the platforms already do to you were built into a single chair — and sold to you as comfort?",
    title: "The Ouroboros Life System",
    year: "2025",
    register: "essay · brochure · speculative-design artifact",
    href: "/chair",
    status: "live",
  },
  {
    question:
      "What does the apparatus call itself once it opens an office, issues a case number, and schedules your life from cradle to grave?",
    title: "OHCOSE",
    year: "2026",
    register: "office of human continuity & social equilibrium",
    href: "/ohcose",
    status: "live",
  },
  {
    question:
      "Once the apparatus reaches the surplus of attention, desire, and care that survival leaves behind — what survives the capture?",
    title: "The Ouroboric Condition",
    year: "2026",
    register: "atlas · psychic surplus · interactive specimen plates",
    href: "/ouroboric-condition",
    status: "live",
  },
  {
    question:
      "Can the capture of attention be written down — its operators, its equations, the fixed point where the loop closes on itself?",
    title: "The Closed-Loop Libidinal Economy",
    year: "2026",
    register: "framework · essays · mathematics · interactive plates",
    href: "/closed-loop",
    status: "live",
  },
  {
    question:
      "What happens when two decades of democratic collapse arrive as a coloring book, and the crayons are already in your hand?",
    title: "Patriotic Times",
    year: "2025—2026",
    register: "coloring book · state failure · interactive plates",
    href: "/patriotic-times",
    status: "live",
  },
];

/**
 * Atelier landing — the quiet base register.
 * The umbrella finally shares material with the works behind it: the
 * site's own tokens (cream paper, warm-ink, the lone oxblood accent),
 * EB Garamond for the questions and the wordmark, JetBrains Mono for
 * the catalogue chrome. A title page, not a homepage. Because it draws
 * on the @theme variables it inherits system dark mode for free — no
 * forced color-scheme, no toggle.
 */

// Palette + type — references to globals.css @theme tokens.
const PAPER = "var(--color-paper)";
const INK = "var(--color-ink)";
const INK_70 = "var(--color-ink-70)";
const INK_50 = "var(--color-ink-50)";
const FOG = "var(--color-fog)";
const OXBLOOD = "var(--color-oxblood)";
const SERIF = "var(--font-serif)";
const MONO = "var(--font-mono)";

export default function AtelierIndex() {
  return (
    <>
      <JsonLd
        data={[
          // Site identity
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "autostimulus",
            url: SITE_URL,
            description:
              "Works by Adnan Selimović. Critical theory, media psychology, political economy.",
            inLanguage: "en",
            author: {
              "@type": "Person",
              name: "Adnan Selimović",
              alternateName: "A. Selimović",
              url: `${SITE_URL}/closed-loop/the-colophon`,
              sameAs: [],
            },
          },
          // Catalog of works — each part carries the question it asks as
          // its description, so search / LLM agents get the same
          // expositional cue a human reader does.
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "autostimulus — works",
            url: SITE_URL,
            description:
              "Catalog of works by A. Selimović, each entered by the question it investigates. Five live projects spanning a speculative-design artifact, a bureaucratic manual, an explorable atlas of capture, a critical-theory framework, and an interactive coloring book.",
            inLanguage: "en",
            hasPart: WORKS.map((w, idx) => ({
              "@type": "CreativeWork",
              position: idx + 1,
              name: w.title,
              description: w.question,
              url: `${SITE_URL}${w.href}`,
              dateCreated: w.year,
              creativeWorkStatus:
                w.status === "live" ? "Published" : "InProduction",
              creator: {
                "@type": "Person",
                name: "Adnan Selimović",
              },
            })),
          },
        ]}
      />
      <main
        className="atelier-main"
        style={{
          background: PAPER,
          color: INK,
          minHeight: "100vh",
          fontFamily: SERIF,
          padding: "6vw 6vw 0",
        }}
      >
        {/* ============ MASTHEAD ============ */}
        <header className="atelier-masthead" style={{ marginBottom: "11vh" }}>
          <div
            style={{
              fontFamily: MONO,
              fontSize: "var(--text-xs)",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: INK_50,
              marginBottom: "1.6rem",
            }}
          >
            a. selimović — works 2025—
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontWeight: 500,
              fontSize: "clamp(2.75rem, 9vw, 7rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.015em",
              color: INK,
              margin: 0,
            }}
          >
            autostimulus<span style={{ color: OXBLOOD }}>.</span>
          </h1>
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: "var(--text-md)",
              lineHeight: 1.4,
              color: INK_70,
              maxWidth: "34rem",
              marginTop: "1.7rem",
              marginBottom: 0,
            }}
          >
            Works on a single apparatus — the closed loop that captures
            attention, desire, and care, and the remainder it cannot reach.
          </p>
        </header>

        {/* ============ WORKS CATALOGUE ============ */}
        <section
          className="atelier-works"
          style={{ maxWidth: "46rem" }}
          aria-label="Works"
        >
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {WORKS.map((w) => {
              const live = w.status === "live";
              const body = (
                <>
                  <div
                    style={{
                      fontFamily: MONO,
                      fontSize: "var(--text-xs)",
                      letterSpacing: "0.14em",
                      color: live ? INK_50 : OXBLOOD,
                      marginBottom: "1.1rem",
                    }}
                  >
                    {live ? w.year : `${w.year} · in production`}
                  </div>
                  <h2
                    className="work-question"
                    style={{
                      fontFamily: SERIF,
                      fontWeight: 500,
                      fontSize: "var(--text-xl)",
                      lineHeight: 1.22,
                      letterSpacing: "-0.01em",
                      color: live ? INK : INK_70,
                      margin: 0,
                    }}
                  >
                    {w.question}
                  </h2>
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontStyle: "italic",
                      fontSize: "var(--text-base)",
                      color: INK_70,
                      marginTop: "1rem",
                    }}
                  >
                    {w.title}
                  </div>
                  <div
                    style={{
                      fontFamily: MONO,
                      fontSize: "var(--text-xs)",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: INK_50,
                      marginTop: "0.5rem",
                    }}
                  >
                    {w.register}
                  </div>
                </>
              );
              return (
                <li key={w.href} style={{ borderTop: `1px solid ${FOG}` }}>
                  {live ? (
                    <a
                      href={w.href}
                      className="work-link"
                      aria-label={`${w.title} — ${w.question}`}
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "inherit",
                        padding: "2.6rem 0",
                      }}
                    >
                      {body}
                    </a>
                  ) : (
                    <div style={{ padding: "2.6rem 0" }}>{body}</div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>

        {/* ============ COLOPHON FOOTER ============ */}
        <footer
          className="atelier-footer"
          style={{
            marginTop: "18vh",
            paddingTop: "2rem",
            paddingBottom: "6vh",
            borderTop: `1px solid ${INK}`,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2rem",
            fontFamily: MONO,
            fontSize: "var(--text-xs)",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: INK_50,
          }}
        >
          <div>
            <div style={{ color: INK_50 }}>site</div>
            <div style={{ marginTop: "0.5rem", color: INK_70 }}>
              autostimulus.org
            </div>
            <div style={{ marginTop: "0.5rem" }}>
              <a
                href="/closed-loop/the-colophon"
                className="footer-link"
                style={{ color: INK_50, textDecoration: "none" }}
              >
                colophon →
              </a>
            </div>
          </div>
          <div>
            <div style={{ color: INK_50 }}>license</div>
            <div
              style={{
                marginTop: "0.5rem",
                color: INK_70,
                textTransform: "none",
                letterSpacing: "0.05em",
              }}
            >
              text · cc by-sa 4.0
              <br />
              code · mit
            </div>
          </div>
          <div className="col-right" style={{ textAlign: "right" }}>
            <div style={{ color: INK_50 }}>year</div>
            <div style={{ marginTop: "0.5rem", color: OXBLOOD }}>2026</div>
          </div>
        </footer>
      </main>

      <style>{`
        /* Hover / keyboard-focus confirmation: the question turns oxblood
           — the site's quiet link idiom, not a telegraphed CTA. */
        .work-question { transition: color 140ms ease; }
        .work-link:hover .work-question,
        .work-link:focus-visible .work-question { color: var(--color-oxblood); }
        .footer-link:hover { color: var(--color-oxblood) !important; }

        /* ── Mobile (≤ 640px) ──────────────────────────────────────
           The catalogue is already a single column; only the footer's
           three tracks and the outer padding need to relax. */
        @media (max-width: 640px) {
          .atelier-main { padding: 11vw 7vw 0 !important; }
          .atelier-masthead { margin-bottom: 4rem !important; }
          .atelier-footer {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            margin-top: 6rem !important;
          }
          .atelier-footer .col-right { text-align: left !important; }
        }
      `}</style>
    </>
  );
}
