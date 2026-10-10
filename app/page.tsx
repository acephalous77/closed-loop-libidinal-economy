import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/lib/jsonld";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

export const metadata: Metadata = {
  title: { absolute: "autostimulus" },
  description:
    "Works by A. Selimović. Critical theory, media psychology, political economy. The ouroboros chair, the OHCOSE manual, the ouroboric-condition atlas, the closed-loop libidinal economy, the patriotic-times coloring book, the manufacture of the subject, and the psychopolitics atlas.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "autostimulus",
    title: "autostimulus",
    description:
      "Works by A. Selimović. Critical theory, media psychology, political economy.",
    url: "/",
    locale: "en_US",
  },
};

interface Work {
  mark: string; // riso press-mark glyph — the work's cut-out symbol
  stamp: string; // terse focus-hit — the work called by what it asks
  title: string; // the work's real name, kept as the identifier
  year: string;
  register: string;
  href: string;
  status: "live" | "in production";
}

/**
 * Works hung as a cut-and-paste flyer. Each is called by a terse
 * stamped hit (what it focuses on), with its real title kept
 * underneath as the identifier — so the three ouroboros-named works
 * read apart at a glance. Ordered reverse-chronologically by year —
 * newest at the top, oldest at the foot (a 2025—2026 span sorts by
 * its close).
 *
 * The stamp lines are drafts in Adnan's terse register — flagged for
 * his vetting, anchored by the real titles so the page reads right
 * even before he tunes the wording.
 */
const WORKS: Work[] = [
  {
    stamp: "FOLLOW THE WIRES.",
    title: "The Psychopolitics of Socialization",
    mark: "◉",
    year: "2026",
    register: "relational atlas · ~600 nodes · crowding science → the population present",
    href: "/psychopolitics-atlas/index.html",
    status: "live",
  },
  {
    stamp: "THE LOOP, ON THE RECORD.",
    title: "The Closed-Loop Libidinal Economy",
    mark: "◆",
    year: "2026",
    register: "framework · essays · mathematics · interactive plates",
    href: "/closed-loop",
    status: "live",
  },
  {
    stamp: "COLOR THE COLLAPSE.",
    title: "Patriotic Times",
    mark: "✱",
    year: "2025—2026",
    register: "coloring book · state failure · interactive plates",
    href: "/patriotic-times",
    status: "live",
  },
  {
    stamp: "YOUR LIFE, ON FILE.",
    title: "OHCOSE",
    mark: "▣",
    year: "2025",
    register: "office of human continuity & social equilibrium",
    href: "/ohcose",
    status: "live",
  },
  {
    stamp: "SIT. BE HELD. BE HARVESTED.",
    title: "The Ouroboros Life System",
    mark: "●",
    year: "2021",
    register: "essay · brochure · speculative-design artifact",
    href: "/chair",
    status: "live",
  },
  {
    stamp: "WHAT SURVIVES CAPTURE?",
    title: "The Ouroboric Condition",
    mark: "○",
    year: "2018",
    register: "atlas · psychic surplus · interactive specimen plates",
    href: "/ouroboric-condition",
    status: "live",
  },
  {
    // stamp is a draft in Adnan's terse register — flagged for his vetting.
    stamp: "A LIFE, ON THE METER.",
    title: "The Manufacture of the Subject",
    mark: "■",
    year: "2015",
    register: "essay · interactive descent · crib → deathbed",
    href: "/manufacture-of-the-subject",
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
const RED = "#c71e1e"; // rubber-stamp red

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const SERIF = `var(--font-eb-garamond), Georgia, "Times New Roman", serif`;

// Photocopy grain — fractal-noise SVG multiplied over the page.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// One work-row's contents, rendered twice per entry: a base (ink on paper)
// and an inverted copy (paper on ink) that the ink-press wipes in on hover.
function entryBody(w: Work, inv: boolean) {
  const live = w.status === "live";
  const head = w.stamp.slice(0, -1);
  const tail = w.stamp.slice(-1);
  const cText = inv ? PAPER : INK;
  const cYear = inv ? PAPER : live ? INK_2 : RED;
  const cIdent = inv ? PAPER : INK_2;
  const cReg = inv ? PAPER : INK;
  /* Laid across the whole sheet rather than stacked in a 48rem column —
     year hanging in the left gutter, the stamp on the main measure, the
     register stamped into the right margin. The old single column left the
     right third of a wide screen empty, so the flyer read as a narrow list
     pasted on a large sheet. Collapses back to the stack below 1100px. */
  return (
    <div className="zine-row">
      <div
        className="zine-year"
        style={{ fontFamily: MONO, fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", color: cYear }}
      >
        <span style={{ color: RED }}>{w.mark}</span>{" "}
        {live ? w.year : `${w.year} · IN PRODUCTION`}
      </div>

      <div className="zine-body">
        <h2
          className="zine-stamp"
          style={{ fontFamily: MONO, fontWeight: 700, fontSize: "clamp(1.5rem, 3.1vw, 2.4rem)", lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: cText, margin: 0 }}
        >
          {head}
          <span style={{ color: RED }}>{tail}</span>
        </h2>
        <div
          className="zine-ident"
          style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "1.15rem", color: cIdent, marginTop: "0.9rem" }}
        >
          {w.title}
        </div>
      </div>

      <div className="zine-regwrap">
        <div
          className="zine-reg"
          style={{ display: "inline-block", fontFamily: MONO, fontSize: "0.7rem", lineHeight: 1.5, textTransform: "uppercase", letterSpacing: "0.13em", color: cReg, border: `1px solid ${cReg}`, padding: "0.35rem 0.55rem", textAlign: "left" }}
        >
          {w.register}
        </div>
      </div>
    </div>
  );
}

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
              "Catalog of works by A. Selimović. Seven live projects: a relational atlas of the socialization apparatus, a critical-theory framework, an interactive coloring book, a bureaucratic manual, a speculative-design artifact, an explorable atlas of capture, and an interactive descent through a life metered for profit.",
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
            A. SELIMOVIĆ — WORKS 2015—2026
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
        <section className="zine-works" aria-label="Works">
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {WORKS.map((w) => {
              const live = w.status === "live";
              return (
                <li key={w.href} style={{ borderTop: `2px solid ${INK}` }}>
                  {live ? (
                    <Link
                      href={w.href}
                      className="zine-link"
                      aria-label={`${w.title} — ${w.stamp}`}
                      style={{ display: "block", position: "relative", textDecoration: "none", color: "inherit" }}
                    >
                      <div
                        className="zine-entry"
                        style={{ padding: "2.2rem 1rem", position: "relative", zIndex: 0 }}
                      >
                        {entryBody(w, false)}
                      </div>
                      {/* inverted copy — the ink-press wipes this in on hover */}
                      <div
                        className="zine-press"
                        aria-hidden="true"
                        style={{ position: "absolute", inset: 0, background: INK, padding: "2.2rem 1rem", zIndex: 1, pointerEvents: "none" }}
                      >
                        {entryBody(w, true)}
                      </div>
                    </Link>
                  ) : (
                    <div className="zine-entry" style={{ padding: "2.2rem 1rem" }}>
                      {entryBody(w, false)}
                    </div>
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
              <Link
                href="/closed-loop/the-colophon"
                className="zine-footlink"
                style={{ color: INK, textDecoration: "none" }}
              >
                COLOPHON →
              </Link>
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
        /* Full ink-press on hover/focus: the inverted copy (.zine-press)
           wipes in left→right like an ink roller, fully covering the row —
           a committed press, never a half-state color crossfade. Pointer
           hover is gated to real hover devices so a touch tap can't leave
           it stuck; keyboard focus keeps it. Reduced-motion (globals.css)
           collapses the wipe to an instant, clean flip. */
        .zine-press {
          clip-path: inset(0 100% 0 0);
          transition: clip-path 340ms cubic-bezier(.72, 0, .24, 1);
        }
        .zine-link:focus-visible .zine-press { clip-path: inset(0 0 0 0); }
        @media (hover: hover) and (pointer: fine) {
          .zine-link:hover .zine-press { clip-path: inset(0 0 0 0); }
        }

        .zine-footlink:hover { color: ${RED} !important; }

        /* ── The flyer row ───────────────────────────────────────── */
        .zine-row {
          display: grid;
          /* The register column was 21rem, which squeezed the main measure
             enough that the three longest stamps wrapped with an orphan
             ("…WRITTEN / DOWN."). At 17rem the register wraps instead — it
             is a stamped block and reads fine over three lines — and every
             stamp sets on one line at 1280 and up. */
          grid-template-columns: 7rem minmax(0, 1fr) minmax(0, 17rem);
          column-gap: 2.5rem;
          align-items: start;
        }
        /* Optical alignment: the year and the register both sit to the
           cap-height of the stamp rather than its line box. */
        .zine-year { padding-top: 0.55rem; }
        .zine-regwrap { justify-self: end; padding-top: 0.35rem; }

        /* ── Below the three-column sheet (≤ 1100px) ─────────────── */
        /* The sheet needs ~630px of main measure for the longest stamp to
           set on one line. Below 1100px the three columns squeeze it past
           that, so the flyer falls back to the stack rather than breaking
           every stamp across two lines. */
        @media (max-width: 1100px) {
          .zine-row {
            grid-template-columns: 1fr;
            row-gap: 0.9rem;
          }
          .zine-year { padding-top: 0; }
          .zine-regwrap { justify-self: start; padding-top: 0; }
        }

        /* ── Mobile (≤ 640px) ────────────────────────────────────── */
        @media (max-width: 640px) {
          .zine-main { padding: 9vw 6vw 0 !important; }
          .zine-masthead { margin-bottom: 3.5rem !important; }
          .zine-entry, .zine-press { padding-left: 0 !important; padding-right: 0 !important; }
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
