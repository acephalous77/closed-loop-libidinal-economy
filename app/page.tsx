import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/lib/jsonld";
import { WORKS } from "@/lib/works";
import { WorkCover } from "@/components/navigation/WorkCover";
import { ChannelTally } from "@/components/home/ChannelTally";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

const FEATURED = WORKS.find((work) => work.href === "/closed-loop")!;

export const metadata: Metadata = {
  title: { absolute: "autostimulus" },
  description:
    "autostimulus is the press of A. Selimović: seven works on attention, capture, and the institutions that produce a subject. Start with The Closed-Loop Libidinal Economy.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "autostimulus",
    title: "autostimulus",
    description:
      "Seven works on attention, capture, and the institutions that produce a subject.",
    url: "/",
    locale: "en_US",
  },
};

const SERIF =
  'var(--font-source-serif), Georgia, "Times New Roman", serif';
const MONO =
  'var(--font-plex-mono), ui-monospace, "SF Mono", Menlo, monospace';

function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        lineHeight: 0.9,
        letterSpacing: "-0.03em",
      }}
    >
      <span
        style={{
          fontFamily: SERIF,
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: "1.7rem",
          color: inverse ? "#e8ebe7" : "var(--color-ink)",
        }}
      >
        auto
      </span>
      <span
        style={{
          fontFamily: MONO,
          fontWeight: 600,
          fontSize: "1.45rem",
          color: inverse ? "#17191b" : "var(--color-paper)",
          background: inverse ? "#e8ebe7" : "var(--color-ink)",
          padding: "0.02em 0.12em",
          letterSpacing: "-0.05em",
          textTransform: "lowercase",
        }}
      >
        stimulus
      </span>
      <span
        style={{
          fontFamily: SERIF,
          fontWeight: 700,
          fontSize: "1.7rem",
          color: "#6ea6d4",
        }}
      >
        .
      </span>
    </span>
  );
}

export default function PressFront() {
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
              "autostimulus is the press of A. Selimović: seven works on attention, capture, and the institutions that produce a subject.",
            inLanguage: "en",
            author: {
              "@type": "Person",
              name: "Adnan Selimović",
              alternateName: "A. Selimović",
              url: `${SITE_URL}/author`,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "autostimulus — works",
            url: SITE_URL,
            description:
              "The seven works of autostimulus: a relational atlas of the socialization apparatus, a critical-theory framework, an interactive coloring book, a bureaucratic manual, a speculative-design artifact, an explorable atlas of capture, and an interactive descent through a life metered for profit.",
            inLanguage: "en",
            hasPart: WORKS.map((work, index) => ({
              "@type": "CreativeWork",
              position: index + 1,
              name: work.title,
              url: `${SITE_URL}${work.href}`,
              dateCreated: work.year,
              creativeWorkStatus:
                work.status === "live" ? "Published" : "InProduction",
              creator: { "@type": "Person", name: "Adnan Selimović" },
            })),
          },
        ]}
      />

      <style>{`
        .front-link { transition: color 100ms, text-decoration-color 100ms; }
        .front-link:hover { color: var(--color-oxblood); text-decoration: underline; text-underline-offset: 3px; }
        .front-link:focus-visible { outline: 2px solid var(--color-oxblood); outline-offset: 3px; }
        .shelf-row:hover { background: var(--color-paper-95); }
        .shelf-row:focus-visible { outline: 2px solid var(--color-oxblood); outline-offset: 2px; }
      `}</style>

      <header style={{ background: "#17191b", color: "#e8ebe7" }}>
        <div className="mx-auto flex max-w-[76rem] flex-wrap items-baseline justify-between gap-x-sm gap-y-xs px-sm py-sm md:px-md">
          <Link
            href="/"
            aria-label="autostimulus home"
            className="front-link no-underline"
          >
            <Wordmark inverse />
          </Link>
          <nav
            aria-label="Site"
            className="flex flex-wrap items-baseline gap-x-sm gap-y-xs"
            style={{
              fontFamily: MONO,
              fontSize: "0.8125rem",
              textTransform: "lowercase",
              color: "#d3d7d2",
            }}
          >
            <a href="#shelf" className="front-link" style={{ color: "inherit" }}>
              the shelf
            </a>
            <Link
              href="/author"
              className="front-link"
              style={{ color: "inherit" }}
            >
              the author
            </Link>
            <Link
              href="/colophon"
              className="front-link"
              style={{ color: "inherit" }}
            >
              colophon
            </Link>
          </nav>
        </div>
      </header>

      <main
        style={{
          background: "var(--color-paper)",
          color: "var(--color-ink)",
          minHeight: "100vh",
        }}
      >
        <div className="mx-auto max-w-[76rem] px-sm pb-lg md:px-md">
          <section className="grid gap-md border-b border-paper-85 pt-md pb-md lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end">
            <div>
              <h1
                style={{
                  fontFamily: SERIF,
                  fontWeight: 500,
                  fontSize: "clamp(3.25rem, 8vw, 7rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.035em",
                  maxWidth: "11ch",
                  margin: 0,
                }}
              >
                Seven works,
                <br />
                one loop.
              </h1>
              <p
                style={{
                  fontFamily: SERIF,
                  fontSize: "1.5rem",
                  lineHeight: 1.4,
                  color: "var(--color-ink-90)",
                  maxWidth: "38rem",
                  marginTop: "2rem",
                }}
              >
                The press of A. Selimović. A framework, an agency, a product
                line, a coloring book, two atlases, a descent. Each institution
                stages the same loop in its own paper and ink.
              </p>
              <div className="mt-md flex flex-wrap items-baseline gap-x-md gap-y-xs">
                <Link
                  href="/closed-loop/v2-argument"
                  className="front-link"
                  style={{
                    fontFamily: SERIF,
                    fontSize: "1.25rem",
                    color: "var(--color-oxblood)",
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                    textUnderlineOffset: "0.18em",
                  }}
                >
                  Start with the argument →
                </Link>
                <a
                  href="#shelf"
                  className="front-link"
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.8125rem",
                    color: "var(--color-ink-70)",
                    textDecoration: "none",
                  }}
                >
                  or take the shelf
                </a>
              </div>
            </div>

            <Link
              href={FEATURED.href}
              className="front-link group block no-underline"
              style={{ color: "inherit", justifySelf: "start" }}
              aria-label={`Start here: ${FEATURED.title} — ${FEATURED.plain}`}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "0.55rem",
                  background: "var(--color-paper-95)",
                  border: "1px solid var(--color-ink)",
                }}
              >
                <WorkCover work={FEATURED} w={240} h={320} />
              </span>
              <span
                className="block pt-sm"
                style={{
                  fontFamily: MONO,
                  fontSize: "0.8125rem",
                  letterSpacing: "0.08em",
                  color: "var(--color-oxblood)",
                  textTransform: "uppercase",
                }}
              >
                Start here · {FEATURED.year}
              </span>
              <span
                className="block pt-xs"
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "1.35rem",
                  lineHeight: 1.25,
                  color: "var(--color-ink)",
                }}
              >
                {FEATURED.title}
              </span>
              <span
                className="block pt-xs"
                style={{
                  fontFamily: SERIF,
                  fontSize: "1rem",
                  lineHeight: 1.45,
                  color: "var(--color-ink-70)",
                }}
              >
                {FEATURED.plain}
              </span>
            </Link>
          </section>

          <section
            id="shelf"
            aria-labelledby="shelf-heading"
            className="pt-md"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-sm border-b border-paper-85 pb-sm">
              <h2
                id="shelf-heading"
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: "2.25rem",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                the shelf
              </h2>
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: "0.8125rem",
                  letterSpacing: "0.08em",
                  color: "var(--color-ink-70)",
                  margin: 0,
                }}
              >
                seven works · 2015—2026 · entries this tab · reset on reload
              </p>
            </div>

            <ol className="m-0 list-none p-0">
              {WORKS.map((work, index) => (
                <li key={work.href} className="border-b border-paper-85">
                  <Link
                    href={work.href}
                    className="shelf-row group grid grid-cols-[1.75rem_5rem_minmax(0,1fr)] items-center gap-sm py-sm no-underline transition-colors duration-150 sm:grid-cols-[2.25rem_6rem_minmax(0,1fr)_7rem]"
                    style={{ color: "inherit" }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: MONO,
                        fontSize: "0.8125rem",
                        color: "var(--color-ink-50)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <WorkCover work={work} w={88} h={117} />

                    <span className="min-w-0">
                      <span
                        className="block"
                        style={{
                          fontFamily: SERIF,
                          fontStyle: "italic",
                          fontWeight: 500,
                          fontSize: "1.5rem",
                          lineHeight: 1.15,
                          color: "var(--color-ink)",
                        }}
                      >
                        {work.title}
                      </span>
                      <span
                        className="block pt-xs"
                        style={{
                          fontFamily: MONO,
                          fontSize: "0.8125rem",
                          lineHeight: 1.45,
                          letterSpacing: "0.04em",
                          color: "var(--color-ink-70)",
                        }}
                      >
                        {work.year} · {work.register}
                      </span>
                      <span
                        className="block pt-xs"
                        style={{
                          fontFamily: SERIF,
                          fontSize: "1.0625rem",
                          lineHeight: 1.45,
                          color: "var(--color-ink-70)",
                          maxWidth: "42rem",
                        }}
                      >
                        {work.plain}
                      </span>
                    </span>

                    <span className="col-start-2 flex items-baseline gap-sm pt-xs sm:col-start-auto sm:justify-self-end sm:pt-0">
                      <ChannelTally href={work.href} />
                      <span
                        aria-hidden="true"
                        style={{
                          fontFamily: MONO,
                          fontSize: "0.8125rem",
                          color: "var(--color-oxblood)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        enter →
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <footer className="mt-lg flex flex-wrap items-baseline justify-between gap-sm border-t border-paper-85 pt-sm">
            <span
              style={{
                fontFamily: MONO,
                fontSize: "0.8125rem",
                lineHeight: 1.6,
                color: "var(--color-ink-70)",
              }}
            >
              <Link
                href="/author"
                className="front-link"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                the author
              </Link>
              <span style={{ margin: "0 0.8em" }}>·</span>
              <Link
                href="/colophon"
                className="front-link"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                colophon
              </Link>
              <span style={{ margin: "0 0.8em" }}>·</span>
              licenses vary by work · see colophon
            </span>
            <span
              style={{
                fontFamily: MONO,
                fontSize: "0.8125rem",
                color: "var(--color-ink-50)",
              }}
            >
              A. Selimović, Ph.D. — Blacksburg, Virginia — 2026
            </span>
          </footer>
        </div>
      </main>
    </>
  );
}
