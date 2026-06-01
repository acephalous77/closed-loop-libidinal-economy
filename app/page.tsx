import type { Metadata } from "next";
import { JsonLd } from "@/lib/jsonld";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

export const metadata: Metadata = {
  title: { absolute: "autostimulus" },
  description:
    "Works by A. Selimović. Critical theory, media psychology, political economy. The ouroboros chair, the OHCOSE manual, the ouroboric-condition atlas, the closed-loop libidinal economy, and the patriotic-times coloring book.",
};

interface Work {
  stamp: string; // terse focus-hit — the work called by what it asks
  title: string; // the work's real name, kept as the identifier
  year: string;
  register: string;
  href: string;
  status: "live" | "in production";
}

/**
 * Works hung as a cut-and-paste flyer, not a ranked list. Each is
 * called by a terse stamped hit (what it focuses on), with its real
 * title kept underneath as the identifier — so the three ouroboros-
 * named works read apart at a glance. Curatorial order, un-numbered:
 * object -> institution -> territory -> formal engine -> outside.
 *
 * The stamp lines are drafts in Adnan's terse register — flagged for
 * his vetting, anchored by the real titles so the page reads right
 * even before he tunes the wording.
 */
const WORKS: Work[] = [
  {
    stamp: "SIT. BE HELD. BE HARVESTED.",
    title: "The Ouroboros Life System",
    year: "2025",
    register: "essay · brochure · speculative-design artifact",
    href: "/chair",
    status: "live",
  },
  {
    stamp: "YOUR LIFE, ON FILE.",
    title: "OHCOSE",
    year: "2026",
    register: "office of human continuity & social equilibrium",
    href: "/ohcose",
    status: "live",
  },
  {
    stamp: "WHAT SURVIVES CAPTURE?",
    title: "The Ouroboric Condition",
    year: "2026",
    register: "atlas · psychic surplus · interactive specimen plates",
    href: "/ouroboric-condition",
    status: "live",
  },
  {
    stamp: "THE LOOP, WRITTEN DOWN.",
    title: "The Closed-Loop Libidinal Economy",
    year: "2026",
    register: "framework · essays · mathematics · interactive plates",
    href: "/closed-loop",
    status: "live",
  },
  {
    stamp: "COLOR THE COLLAPSE.",
    title: "Patriotic Times",
    year: "2025—2026",
    register: "coloring book · state failure · interactive plates",
    href: "/patriotic-times",
    status: "live",
  },
];

/**
 * Atelier landing — xerox-zine / ransom-note register.
 * The umbrella is its own enclosed object: a high-contrast bone-and-
 * black flyer with photocopy grit, cut-up type, and a rubber-stamp
 * red. Scheme-independent (a printed flyer has no dark mode), so it
 * forces its own palette and never touches the site theme tokens —
 * the interior works keep their own looks.
 */

// Palette — printed-flyer stock, toner black, rubber-stamp red.
const PAPER = "#e9e3d3"; // bone / photocopy stock
const INK = "#0b0b0b"; // toner black
const INK_2 = "#3a3733"; // secondary
const RED = "#cc1f1f"; // rubber-stamp red

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const SERIF = `var(--font-eb-garamond), Georgia, "Times New Roman", serif`;

// Photocopy grain — fractal-noise SVG multiplied over the page.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function AtelierIndex() {
  return (
    <>
      <JsonLd
        data={[
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
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "autostimulus — works",
            url: SITE_URL,
            description:
              "Catalog of works by A. Selimović. Five live projects: a speculative-design artifact, a bureaucratic manual, an explorable atlas of capture, a critical-theory framework, and an interactive coloring book.",
            inLanguage: "en",
            hasPart: WORKS.map((w, idx) => ({
              "@type": "CreativeWork",
              position: idx + 1,
              name: w.title,
              url: `${SITE_URL}${w.href}`,
              dateCreated: w.year,
              creativeWorkStatus:
                w.status === "live" ? "Published" : "InProduction",
              creator: { "@type": "Person", name: "Adnan Selimović" },
            })),
          },
        ]}
      />

      {/* photocopy grain */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: GRAIN,
          backgroundSize: "160px 160px",
          opacity: 0.16,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          zIndex: 60,
        }}
      />

      <main
        className="zine-main"
        style={{
          background: PAPER,
          color: INK,
          minHeight: "100vh",
          fontFamily: MONO,
          padding: "5vw 6vw 0",
          colorScheme: "light",
        }}
      >
        {/* ============ MASTHEAD ============ */}
        <header
          className="zine-masthead"
          style={{ marginBottom: "9vh" }}
        >
          <div
            style={{
              fontFamily: MONO,
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              color: INK,
              marginBottom: "1.4rem",
            }}
          >
            A. SELIMOVIĆ — WORKS 2025—
          </div>

          {/* cut-up wordmark */}
          <h1
            className="zine-wordmark"
            style={{
              margin: "0",
              lineHeight: 0.86,
              letterSpacing: "-0.02em",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
            }}
          >
            <span
              style={{
                fontFamily: SERIF,
                fontWeight: 500,
                fontStyle: "italic",
                fontSize: "clamp(3rem, 11vw, 8.5rem)",
                color: INK,
                textTransform: "lowercase",
              }}
            >
              auto
            </span>
            <span
              style={{
                fontFamily: MONO,
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 9vw, 7rem)",
                background: INK,
                color: PAPER,
                padding: "0 0.12em",
                textTransform: "lowercase",
                letterSpacing: "-0.04em",
              }}
            >
              stimulus
            </span>
            <span
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(3rem, 11vw, 8.5rem)",
                color: RED,
                fontWeight: 700,
              }}
            >
              .
            </span>
          </h1>
        </header>

        {/* ============ WORKS — cut flyer ============ */}
        <section
          className="zine-works"
          style={{ maxWidth: "48rem" }}
          aria-label="Works"
        >
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {WORKS.map((w) => {
              const live = w.status === "live";
              const head = w.stamp.slice(0, -1);
              const tail = w.stamp.slice(-1);
              const body = (
                <div className="zine-entry" style={{ padding: "2.2rem 1rem" }}>
                  <div
                    className="zine-year"
                    style={{
                      fontFamily: MONO,
                      fontSize: "0.74rem",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      color: live ? INK_2 : RED,
                      marginBottom: "0.9rem",
                    }}
                  >
                    {live ? w.year : `${w.year} · IN PRODUCTION`}
                  </div>
                  <h2
                    className="zine-stamp"
                    style={{
                      fontFamily: MONO,
                      fontWeight: 700,
                      fontSize: "clamp(1.5rem, 4.6vw, 2.7rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.01em",
                      textTransform: "uppercase",
                      color: INK,
                      margin: 0,
                    }}
                  >
                    {head}
                    <span className="stamp-dot" style={{ color: RED }}>
                      {tail}
                    </span>
                  </h2>
                  <div
                    className="zine-ident"
                    style={{
                      fontFamily: SERIF,
                      fontStyle: "italic",
                      fontSize: "1.15rem",
                      color: INK_2,
                      marginTop: "0.9rem",
                    }}
                  >
                    {w.title}
                  </div>
                  <div
                    className="zine-reg"
                    style={{
                      display: "inline-block",
                      fontFamily: MONO,
                      fontSize: "0.68rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.13em",
                      color: INK,
                      border: `1px solid ${INK}`,
                      padding: "0.3rem 0.5rem",
                      marginTop: "1rem",
                    }}
                  >
                    {w.register}
                  </div>
                </div>
              );
              return (
                <li
                  key={w.href}
                  style={{ borderTop: `2px solid ${INK}` }}
                >
                  {live ? (
                    <a
                      href={w.href}
                      className="zine-link"
                      aria-label={`${w.title} — ${w.stamp}`}
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {body}
                    </a>
                  ) : (
                    body
                  )}
                </li>
              );
            })}
          </ol>
        </section>

        {/* ============ COLOPHON FOOTER ============ */}
        <footer
          className="zine-footer"
          style={{
            marginTop: "14vh",
            paddingTop: "1.5rem",
            paddingBottom: "6vh",
            borderTop: `4px solid ${INK}`,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1.5rem",
            fontFamily: MONO,
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.13em",
            color: INK,
          }}
        >
          <div>
            <div style={{ color: INK_2 }}>SITE</div>
            <div style={{ marginTop: "0.5rem" }}>autostimulus.org</div>
            <div style={{ marginTop: "0.5rem" }}>
              <a
                href="/closed-loop/the-colophon"
                className="zine-footlink"
                style={{ color: INK, textDecoration: "none" }}
              >
                COLOPHON →
              </a>
            </div>
          </div>
          <div>
            <div style={{ color: INK_2 }}>LICENSE</div>
            <div
              style={{
                marginTop: "0.5rem",
                textTransform: "none",
                letterSpacing: "0.04em",
              }}
            >
              text · cc by-sa 4.0
              <br />
              code · mit
            </div>
          </div>
          <div className="col-right" style={{ textAlign: "right" }}>
            <div style={{ color: INK_2 }}>YEAR</div>
            <div
              style={{
                marginTop: "0.5rem",
                color: RED,
                fontWeight: 700,
              }}
            >
              2026
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        /* Hard, snapping invert on hover/focus — a stamped press, no fade. */
        .zine-entry { transition: background-color 80ms steps(1), color 80ms steps(1); }
        .zine-link:hover .zine-entry,
        .zine-link:focus-visible .zine-entry { background: ${INK}; color: ${PAPER}; }
        .zine-link:hover .zine-stamp,
        .zine-link:focus-visible .zine-stamp { color: ${PAPER}; }
        .zine-link:hover .zine-ident,
        .zine-link:focus-visible .zine-ident { color: ${PAPER}; }
        .zine-link:hover .zine-year,
        .zine-link:focus-visible .zine-year { color: ${PAPER}; }
        .zine-link:hover .zine-reg,
        .zine-link:focus-visible .zine-reg { color: ${PAPER}; border-color: ${PAPER}; }
        .zine-footlink:hover { color: ${RED} !important; }

        /* ── Mobile (≤ 640px) ────────────────────────────────────── */
        @media (max-width: 640px) {
          .zine-main { padding: 9vw 6vw 0 !important; }
          .zine-masthead { margin-bottom: 3.5rem !important; }
          .zine-entry { padding-left: 0 !important; padding-right: 0 !important; }
          .zine-footer {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.25rem !important;
            margin-top: 5rem !important;
          }
          .zine-footer .col-right { text-align: left !important; }
        }
      `}</style>
    </>
  );
}
