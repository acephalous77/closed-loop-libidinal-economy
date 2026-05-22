import type { Metadata } from "next";
import { JsonLd } from "@/lib/jsonld";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

export const metadata: Metadata = {
  title: { absolute: "autostimulus" },
  description:
    "Works by A. Selimović. Critical theory, media psychology, political economy. The closed-loop libidinal economy, OHCOSE, the ouroboros chair, the patriotic-times coloring book, and the work to come.",
};

interface Work {
  no: string;
  title: string;
  year: string;
  register: string;
  href: string;
  status: "live" | "in production";
}

const WORKS: Work[] = [
  {
    no: "01",
    title: "The Closed-Loop Libidinal Economy",
    year: "2026",
    register: "framework · essays · mathematics · interactive plates",
    href: "/closed-loop",
    status: "live",
  },
  {
    no: "02",
    title: "OHCOSE",
    year: "2026",
    register: "office of human continuity & social equilibrium",
    href: "/ohcose",
    status: "live",
  },
  {
    no: "03",
    title: "The Ouroboros Life System",
    year: "2025",
    register: "fully-enclosed integrated life-support chair",
    href: "/chair",
    status: "live",
  },
  {
    no: "04",
    title: "Patriotic Times",
    year: "2025—2026",
    register: "coloring book · state failure · interactive plates",
    href: "/patriotic-times",
    status: "live",
  },
];

/**
 * Atelier landing — direction C: anti-design clinical maximalism.
 * Pure white, system clinical sans, neon-green accent, asymmetric grid,
 * no chrome, no decoration. Deliberately out-of-place against the
 * literary register of the project pages below. The visitor lands and
 * there are no clues this site has interior worlds until they click.
 *
 * Inlines its own typography + palette overriding the atelier root
 * layout's theme tokens — the page is its own enclosed object.
 */

// Palette
const PAPER = "#ffffff";
const INK = "#0a0a0a";
const INK_70 = "#5a5a5a";
const INK_40 = "#9a9a9a";
const ACCENT = "#00ff5f"; // neon green — the jolt

// Typography
const DISPLAY = `-apple-system, "Inter", "Helvetica Neue", "Arial Black", system-ui, sans-serif`;
const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;

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
              url: `${SITE_URL}/closed-loop/colophon`,
              sameAs: [],
            },
          },
          // Catalog of works — improves how search / LLM agents
          // understand the homepage's structure and what it indexes.
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "autostimulus — works",
            url: SITE_URL,
            description:
              "Catalog of works by A. Selimović. Four live projects spanning critical-theory framework, performance-fiction manual, speculative-design artifact, and interactive coloring book.",
            inLanguage: "en",
            hasPart: WORKS.map((w, idx) => ({
              "@type": "CreativeWork",
              position: idx + 1,
              name: w.title,
              url: `${SITE_URL}${w.href}`,
              dateCreated: w.year,
              creativeWorkStatus: w.status === "live" ? "Published" : "InProduction",
              creator: {
                "@type": "Person",
                name: "Adnan Selimović",
              },
            })),
          },
        ]}
      />
      <main
        style={{
          background: PAPER,
          color: INK,
          minHeight: "100vh",
          fontFamily: DISPLAY,
          letterSpacing: "-0.01em",
          padding: "5vw 6vw",
          colorScheme: "light",
        }}
      >
        {/* ============ MASTHEAD ============ */}
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "end",
            gap: "2rem",
            marginBottom: "12vh",
          }}
        >
          <h1
            style={{
              fontFamily: DISPLAY,
              fontWeight: 900,
              fontSize: "clamp(3rem, 11vw, 11rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
              color: INK,
              margin: 0,
              textTransform: "lowercase",
            }}
          >
            autostimulus<span style={{ color: ACCENT }}>.</span>
          </h1>
          <div
            style={{
              fontFamily: MONO,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: INK_70,
              textAlign: "right",
              lineHeight: 1.6,
            }}
          >
            a. selimović
            <br />
            <span style={{ color: INK_40 }}>works 2025—</span>
          </div>
        </header>

        {/* ============ WORKS LIST ============ */}
        <section
          style={{
            maxWidth: "1080px",
            margin: "0 0 0 auto", /* asymmetric: pushed right */
            paddingLeft: "8vw",   /* indented from the masthead */
          }}
        >
          <div
            style={{
              fontFamily: MONO,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: INK_40,
              marginBottom: "3rem",
              paddingBottom: "0.75rem",
              borderBottom: `1px solid ${INK}`,
            }}
          >
            ── works
          </div>

          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {WORKS.map((w, i) => {
              const live = w.status === "live";
              const Inner = (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "5rem 1fr auto",
                    columnGap: "2.5rem",
                    rowGap: "0.5rem",
                    alignItems: "baseline",
                    padding: "2rem 0",
                    borderBottom: `1px solid ${INK}`,
                  }}
                >
                  {/* number */}
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: "1rem",
                      color: live ? ACCENT : INK_40,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {w.no}
                  </span>
                  {/* title block */}
                  <div>
                    <div
                      style={{
                        fontFamily: DISPLAY,
                        fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: "-0.02em",
                        color: live ? INK : INK_70,
                      }}
                    >
                      {w.title}
                    </div>
                    <div
                      style={{
                        marginTop: "0.6rem",
                        fontFamily: MONO,
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: INK_70,
                      }}
                    >
                      {w.register}
                    </div>
                  </div>
                  {/* meta column */}
                  <div
                    style={{
                      textAlign: "right",
                      fontFamily: MONO,
                      fontSize: "0.8rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    <div
                      style={{
                        textTransform: "uppercase",
                        color: live ? INK : INK_40,
                        fontWeight: 700,
                      }}
                    >
                      {w.year}
                    </div>
                    <div
                      style={{
                        marginTop: "0.4rem",
                        color: live ? ACCENT : INK_40,
                        textTransform: "uppercase",
                        fontSize: "0.7rem",
                        letterSpacing: "0.2em",
                      }}
                    >
                      {live ? "● enter" : "in production"}
                    </div>
                  </div>
                </div>
              );
              return (
                <li key={w.no}>
                  {live ? (
                    <a
                      href={w.href}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                      }}
                      className="atelier-work-link"
                    >
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </li>
              );
            })}
          </ol>
        </section>

        {/* ============ COLOPHON FOOTER ============ */}
        <footer
          style={{
            marginTop: "20vh",
            paddingTop: "2rem",
            borderTop: `1px solid ${INK}`,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2rem",
            fontFamily: MONO,
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: INK_70,
          }}
        >
          <div>
            <div style={{ color: INK_40, fontSize: "0.65rem" }}>SITE</div>
            <div style={{ marginTop: "0.4rem" }}>autostimulus.org</div>
          </div>
          <div>
            <div style={{ color: INK_40, fontSize: "0.65rem" }}>LICENSE</div>
            <div style={{ marginTop: "0.4rem" }}>
              text · cc by-sa 4.0
              <br />
              code · mit
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: INK_40, fontSize: "0.65rem" }}>YEAR</div>
            <div style={{ marginTop: "0.4rem", color: ACCENT, fontWeight: 700 }}>
              2026
            </div>
          </div>
        </footer>
      </main>

      {/* hover state: invert title color → accent */}
      <style>{`
        .atelier-work-link:hover [data-title="true"] {
          color: ${ACCENT};
        }
      `}</style>
    </>
  );
}
