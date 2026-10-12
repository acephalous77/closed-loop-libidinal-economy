import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/lib/jsonld";
import { WORKS } from "@/lib/works";
import { WorkCover } from "@/components/navigation/WorkCover";
import { ChannelTally } from "@/components/home/ChannelTally";

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

/**
 * The press's console — the frontpage.
 *
 * 2026-10-10 (his word): rebuilt from the xerox flyer — new layout
 * (a channel register: one row per work, aligned instrument columns,
 * press sheets on the board) and a new register (graphite console,
 * porcelain type, prussian accent — the cream/oxblood cluster retired
 * as the standard AI-interface look). Scheme-independent: a console
 * is lit or it is not.
 */
const BG = "#17191b"; // graphite, the house's dark ground
const PANEL = "#1d2023"; // row hover
const RULE = "#2c3034"; // hairlines
const TEXT = "#e8ebe7"; // porcelain ink
const DIM = "#d3d7d2"; // secondary
const FAINT = "#8b9296"; // labels
const ACCENT = "#6ea6d4"; // signal blue

const MONO =
  'var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace';
const SERIF =
  'var(--font-eb-garamond-full), Georgia, "Times New Roman", serif';

/** Chronology — works positioned on a 2015–2026 rule (oldest first). */
const SPINE_YEARS: Record<string, number> = {
  "/manufacture-of-the-subject": 2015,
  "/ouroboric-condition": 2018,
  "/chair": 2021,
  "/ohcose": 2025,
  "/patriotic-times": 2025.5,
  "/closed-loop": 2026,
  "/psychopolitics-atlas/index.html": 2026,
};
const SPINE_SHORT: Record<string, string> = {
  "/manufacture-of-the-subject": "manufacture",
  "/ouroboric-condition": "ouroboric",
  "/chair": "chair",
  "/ohcose": "OHCOSE",
  "/patriotic-times": "patriotic times",
  "/closed-loop": "closed-loop",
  "/psychopolitics-atlas/index.html": "psychopolitics",
};
const SPINE = WORKS.map((w) => ({
  ...w,
  y: SPINE_YEARS[w.href] ?? 2026,
  short: SPINE_SHORT[w.href] ?? w.title.toLowerCase(),
})).sort((a, b) => a.y - b.y);

const COLS =
  "lg:grid lg:grid-cols-[3.5rem_2.25rem_minmax(15rem,1fr)_minmax(11rem,1.15fr)_5.5rem_4.5rem] lg:items-center lg:gap-x-md";

export default function Console() {
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

      <style>{`
        .console-row:hover { background: ${PANEL}; }
        .console-row:focus-visible {
          outline: 2px solid ${ACCENT};
          outline-offset: 2px;
        }
      `}</style>

      <main
        style={{
          background: BG,
          color: TEXT,
          minHeight: "100vh",
          fontFamily: MONO,
          colorScheme: "dark",
        }}
      >
        <div className="mx-auto max-w-[76rem] px-sm md:px-md">
          {/* ============ MASTHEAD ============ */}
          <header className="pt-xl pb-md">
            <div className="flex flex-wrap items-baseline justify-between gap-sm">
              <h1
                className="m-0 flex flex-wrap items-baseline"
                style={{ lineHeight: 0.9, letterSpacing: "-0.02em" }}
              >
                <span
                  style={{
                    fontFamily: SERIF,
                    fontWeight: 500,
                    fontStyle: "italic",
                    fontSize: "clamp(2.6rem, 8vw, 6rem)",
                    color: TEXT,
                    textTransform: "lowercase",
                  }}
                >
                  auto
                </span>
                <span
                  style={{
                    fontFamily: MONO,
                    fontWeight: 700,
                    fontSize: "clamp(2.1rem, 6.6vw, 5rem)",
                    background: TEXT,
                    color: BG,
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
                    fontSize: "clamp(2.6rem, 8vw, 6rem)",
                    color: ACCENT,
                    fontWeight: 700,
                  }}
                >
                  .
                </span>
              </h1>
              <p
                style={{
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: FAINT,
                  margin: 0,
                }}
              >
                A. SELIMOVIĆ — WORKS 2015—2026
              </p>
            </div>

            <p
              style={{
                fontFamily: SERIF,
                fontSize: "1.08rem",
                lineHeight: 1.65,
                color: TEXT,
                opacity: 0.92,
                maxWidth: "44rem",
                marginTop: "2rem",
              }}
            >
              autostimulus is the press of A. Selimović — one concern in seven
              registers: a framework, an agency, a product line, a coloring
              book, two atlases, a descent. each institution stages the same
              loop in its own paper and ink. start where it catches, and{" "}
              <span style={{ color: ACCENT }}>read sideways</span>.
            </p>
          </header>

          {/* ============ THE CHANNEL REGISTER ============ */}
          <section aria-label="Works" className="pb-lg">
            <div
              className="flex items-baseline justify-between gap-sm pb-xs"
              style={{ borderBottom: `1px solid ${RULE}` }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: FAINT,
                }}
              >
                Channel register · seven works
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: FAINT,
                }}
              >
                entered — this tab only
              </p>
            </div>

            <div
              className={`hidden ${COLS} pt-sm pb-xs`}
              aria-hidden="true"
            >
              {["Nº", "Mark", "The work", "What it asks", "Sheet", ""].map(
                (h, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      color: FAINT,
                    }}
                  >
                    {h}
                  </span>
                )
              )}
            </div>

            <ol className="m-0 list-none p-0">
              {WORKS.map((w, i) => {
                const head = w.stamp.slice(0, -1);
                const tail = w.stamp.slice(-1);
                return (
                  <li key={w.href} style={{ borderTop: `1px solid ${RULE}` }}>
                    <Link
                      href={w.href}
                      className="console-row group block no-underline transition-colors duration-150"
                      style={{ color: "inherit" }}
                    >
                      <div className={`flex flex-col gap-sm py-md ${COLS}`}>
                        <div className="flex items-center gap-sm lg:contents">
                          <span
                            style={{
                              fontSize: "0.72rem",
                              color: FAINT,
                              fontVariantNumeric: "tabular-nums",
                            }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            style={{
                              fontSize: "1.15rem",
                              lineHeight: 1,
                              color: w.cover.accent,
                            }}
                          >
                            {w.mark}
                          </span>
                        </div>

                        <div className="flex flex-col gap-xs">
                          <h2
                            className="m-0"
                            style={{
                              fontFamily: MONO,
                              fontWeight: 700,
                              fontSize: "clamp(1.05rem, 1.9vw, 1.5rem)",
                              lineHeight: 1.1,
                              letterSpacing: "-0.01em",
                              textTransform: "uppercase",
                              color: TEXT,
                            }}
                          >
                            {head}
                            <span style={{ color: w.cover.accent }}>{tail}</span>
                          </h2>
                          <p
                            className="m-0"
                            style={{
                              fontFamily: SERIF,
                              fontStyle: "italic",
                              fontSize: "1.02rem",
                              color: DIM,
                            }}
                          >
                            {w.title}
                          </p>
                          <p
                            className="m-0"
                            style={{
                              fontSize: "0.7rem",
                              textTransform: "uppercase",
                              letterSpacing: "0.16em",
                              color: FAINT,
                            }}
                          >
                            {w.year} · {w.register}
                          </p>
                        </div>

                        <p
                          className="m-0"
                          style={{
                            fontFamily: SERIF,
                            fontSize: "1rem",
                            lineHeight: 1.5,
                            color: DIM,
                          }}
                        >
                          {w.plain}
                        </p>

                        <div className="flex items-center justify-between gap-sm lg:contents">
                          <span className="lg:justify-self-start">
                            <WorkCover work={w} w={56} h={76} />
                          </span>
                          <span className="lg:justify-self-start">
                            <ChannelTally href={w.href} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* ============ CHRONOLOGY ============ */}
          <nav
            aria-label="Works by year"
            className="pt-sm pb-md"
            style={{ borderTop: `1px solid ${RULE}` }}
          >
            <p
              style={{
                margin: "0 0 0.9rem",
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: FAINT,
              }}
            >
              Chronology · 2015 → 2026
            </p>
            <div className="flex flex-wrap items-baseline justify-between gap-sm">
              {SPINE.map((w) => (
                <Link
                  key={w.href}
                  href={w.href}
                  className="no-underline"
                  style={{ color: FAINT }}
                >
                  <span style={{ color: w.cover.accent }}>{w.mark}</span>{" "}
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.08em" }}>
                    {w.short} · {w.year}
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          {/* ============ FOOT ============ */}
          <footer
            className="flex flex-wrap items-baseline justify-between gap-sm pt-sm pb-xl"
            style={{
              borderTop: `1px solid ${RULE}`,
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: FAINT,
            }}
          >
            <span>
              <Link
                href="/colophon"
                style={{ color: DIM, textDecoration: "none" }}
              >
                colophon →
              </Link>
              <span style={{ margin: "0 0.9em" }}>·</span>
              text · cc by-sa 4.0 · code · mit
            </span>
            <span style={{ color: FAINT }}>
              A. Selimović, Ph.D. — Blacksburg, Virginia — 2026
            </span>
          </footer>
        </div>
      </main>
    </>
  );
}
