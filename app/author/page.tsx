import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { JsonLd } from "@/lib/jsonld";
import { WORKS } from "@/lib/works";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

const AUTHOR_URL = `${SITE_URL}/author`;
const AUTHOR_ID = `${AUTHOR_URL}#person`;

export const metadata: Metadata = {
  title: { absolute: "Adnan Selimović — author" },
  description:
    "Adnan Selimović is a critical theorist and writer in Blacksburg, Virginia. Research, selected works, and the citation record for the autostimulus corpus.",
  alternates: { canonical: "/author" },
  openGraph: {
    type: "website",
    siteName: "autostimulus",
    title: "Adnan Selimović — author",
    description:
      "Critical theory, media psychology, political economy. Research and selected works.",
    url: "/author",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnan Selimović — author",
    description:
      "Critical theory, media psychology, political economy. Research and selected works.",
  },
};

const BG = "#17191b";
const RULE = "#2c3034";
const TEXT = "#e8ebe7";
const DIM = "#d3d7d2";
const FAINT = "#8b9296";
const ACCENT = "#6ea6d4";

const MONO =
  'var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace';
const SERIF =
  'var(--font-eb-garamond-full), Georgia, "Times New Roman", serif';

const LABEL: CSSProperties = {
  margin: 0,
  fontFamily: MONO,
  fontSize: "0.8125rem",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: FAINT,
};

const BODY: CSSProperties = {
  margin: 0,
  fontFamily: SERIF,
  fontSize: "1.25rem",
  lineHeight: 1.6,
  color: DIM,
};

const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": AUTHOR_ID,
  name: "Adnan Selimović",
  alternateName: "A. Selimović",
  url: AUTHOR_URL,
  jobTitle: "Critical theorist and writer",
  description:
    "Adnan Selimović is a critical theorist and writer in Blacksburg, Virginia. His work concerns libidinal economy, platform capture, socialization, and speculative design.",
  knowsAbout: [
    "critical theory",
    "media psychology",
    "political economy",
    "libidinal economy",
    "platform capitalism",
    "attention economy",
    "speculative design",
  ],
  mainEntityOfPage: AUTHOR_URL,
  sameAs: ["https://orcid.org/0000-0003-0193-5214"],
};

const PROFILE_PAGE = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: AUTHOR_URL,
  name: "Adnan Selimović — author",
  description:
    "Author page for Adnan Selimović: research, selected works, and citation record.",
  inLanguage: "en",
  mainEntity: { "@id": AUTHOR_ID },
  isPartOf: {
    "@type": "WebSite",
    name: "autostimulus",
    url: SITE_URL,
  },
};

const PAPERS = [
  {
    id: "WP-2026-02",
    title:
      "Recovering Churn Structure When the Answer Is Known: A Method Demonstration",
    doi: "10.5281/zenodo.23372497",
  },
  {
    id: "WP-2026-03",
    title:
      "Compositional Governance: The Matchmaking Roster as an Instrument of Capture, and Its Inverse",
    doi: "10.5281/zenodo.23345029",
  },
  {
    id: "WP-2026-01",
    title:
      "The Matchmaker’s Fixed Point: Engagement-Optimized Matchmaking as Performative Prediction",
    doi: "10.5281/zenodo.23189843",
  },
];

const RESEARCH = [
  {
    title: "Libidinal economy and platform capture",
    body:
      "The Closed-Loop Libidinal Economy sets out the loop, the foreclosure lemma, the reclamation theorem, and three modes of intervention. The framework follows psychic surplus through the feed, the metric, and the habit that outlasts the session.",
    href: "/closed-loop",
  },
  {
    title: "Socialization and the apparatus",
    body:
      "The Psychopolitics of Socialization, OHCOSE, and The Manufacture of the Subject trace the institutions that produce a subject station by station, from the cradle to the exit interview.",
    href: "/psychopolitics-atlas/index.html",
  },
  {
    title: "Speculative design and the public record",
    body:
      "The Ouroboros Life System, Patriotic Times, and The Ouroboric Condition work in the registers of the product brochure, the coloring book, and the specimen atlas. Each stages the same loop in its own paper and ink.",
    href: "/chair",
  },
];

function Block({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section aria-label={label} className="pb-md">
      <div
        className="flex items-baseline justify-between gap-sm pb-xs"
        style={{ borderBottom: `1px solid ${RULE}` }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: SERIF,
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "1.5rem",
            lineHeight: 1.2,
            color: TEXT,
          }}
        >
          {label}
        </h2>
      </div>
      <div className="pt-sm">{children}</div>
    </section>
  );
}

export default function AuthorPage() {
  return (
    <>
      <JsonLd data={[PERSON, PROFILE_PAGE]} />
      <style>{`
        .author-link { transition: color 100ms, text-decoration-color 100ms; }
        .author-link:hover { color: ${ACCENT}; text-decoration: underline; text-underline-offset: 3px; }
        .author-link:focus-visible { outline: 2px solid ${ACCENT}; outline-offset: 3px; }
        .author-row:hover { background: #1d2023; }
        .author-row:focus-visible { outline: 2px solid ${ACCENT}; outline-offset: 2px; }
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
        <div className="mx-auto max-w-[56rem] px-sm pb-xl md:px-md">
          <header className="pt-xl pb-lg">
            <nav aria-label="Breadcrumb" className="pb-sm">
              <p
                style={{
                  margin: 0,
                  fontFamily: MONO,
                  fontSize: "0.8125rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: FAINT,
                }}
              >
                <Link
                  href="/"
                  className="author-link"
                  style={{ color: FAINT, textDecoration: "none" }}
                >
                  autostimulus
                </Link>
                <span style={{ margin: "0 0.7em" }}>·</span>
                <span style={{ color: DIM }}>author</span>
              </p>
            </nav>

            <p style={{ ...LABEL, paddingBottom: "0.85rem" }}>
              A. Selimović — critical theory · media psychology · political
              economy
            </p>
            <h1
              className="m-0"
              style={{
                fontFamily: SERIF,
                fontWeight: 500,
                fontSize: "clamp(3rem, 8vw, 6rem)",
                lineHeight: 0.94,
                letterSpacing: "-0.025em",
                color: TEXT,
              }}
            >
              Adnan Selimović
              <span
                style={{
                  color: ACCENT,
                  fontWeight: 700,
                  fontStyle: "italic",
                }}
              >
                .
              </span>
            </h1>
            <p
              className="m-0 pt-sm"
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "clamp(1.35rem, 2.4vw, 1.65rem)",
                lineHeight: 1.4,
                color: DIM,
                maxWidth: "40rem",
              }}
            >
              A press of one concern in seven works: the framework, the
              agency, the chair, the file, the coloring book, two atlases,
              the descent.
            </p>
          </header>

          <Block label="Author">
            <div className="grid gap-lg lg:grid-cols-[minmax(0,1fr)_15rem]">
              <div className="flex flex-col gap-sm" style={{ maxWidth: "42rem" }}>
                <p style={BODY}>
                  Adnan Selimović is a critical theorist and writer in
                  Blacksburg, Virginia. His work follows the apparatus that
                  captures psychic surplus — in the feed, the school, the
                  workplace, the chair — and asks what remains outside the loop.
                </p>
                <p style={BODY}>
                  His current framework,{" "}
                  <Link
                    href="/closed-loop"
                    className="author-link"
                    style={{
                      color: ACCENT,
                      textDecoration: "underline",
                      textDecorationColor: ACCENT,
                      textUnderlineOffset: "0.16em",
                    }}
                  >
                    The Closed-Loop Libidinal Economy
                  </Link>
                  , gives a formal account of attention under platform capture
                  and a set of operable instruments for reading it. The
                  companion works run the argument through the socialization
                  apparatus, the life course, and speculative product design.
                </p>
                <p style={BODY}>
                  This page is the citation record for the corpus. The works
                  below are the press&apos;s founding series. The framework
                  begins at{" "}
                  <Link
                    href="/closed-loop"
                    className="author-link"
                    style={{
                      color: ACCENT,
                      textDecoration: "underline",
                      textDecorationColor: ACCENT,
                      textUnderlineOffset: "0.16em",
                    }}
                  >
                    /closed-loop
                  </Link>
                  ; the prose begins with{" "}
                  <Link
                    href="/closed-loop/v2-argument"
                    className="author-link"
                    style={{
                      color: ACCENT,
                      textDecoration: "underline",
                      textDecorationColor: ACCENT,
                      textUnderlineOffset: "0.16em",
                    }}
                  >
                    the argument
                  </Link>
                  .
                </p>
              </div>

              <aside
                aria-label="At a glance"
                className="h-fit border-t pt-sm lg:border-l lg:border-t-0 lg:pl-sm"
                style={{ borderColor: RULE }}
              >
                <dl className="m-0 flex flex-col gap-sm">
                  {[
                    ["Based", "Blacksburg, Virginia"],
                    ["Works", "2015—2026"],
                    ["Fields", "critical theory · media psychology · political economy"],
                    ["Press", "autostimulus"],
                  ].map(([term, value]) => (
                    <div key={term}>
                      <dt style={{ ...LABEL, paddingBottom: "0.35rem" }}>
                        {term}
                      </dt>
                      <dd
                        className="m-0"
                        style={{
                          fontFamily: SERIF,
                          fontSize: "1.125rem",
                          lineHeight: 1.5,
                          color: TEXT,
                        }}
                      >
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p
                  className="m-0 pt-md"
                  style={{
                    fontFamily: MONO,
                    fontSize: "0.8125rem",
                    lineHeight: 1.6,
                    color: FAINT,
                  }}
                >
                  <Link
                    href="/colophon"
                    className="author-link"
                    style={{ color: DIM, textDecoration: "none" }}
                  >
                    colophon
                  </Link>
                </p>
              </aside>
            </div>
          </Block>

          <Block label="Research">
            <ol className="m-0 flex list-none flex-col gap-md p-0">
              {RESEARCH.map((item, index) => (
                <li key={item.title} className="grid grid-cols-[2rem_1fr] gap-sm">
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: MONO,
                      fontSize: "0.8125rem",
                      color: ACCENT,
                      fontVariantNumeric: "tabular-nums",
                      paddingTop: "0.28rem",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="m-0"
                      style={{
                        fontFamily: SERIF,
                        fontWeight: 500,
                        fontSize: "1.5rem",
                        lineHeight: 1.2,
                        color: TEXT,
                      }}
                    >
                      {item.href.endsWith(".html") ? (
                        <a
                          href={item.href}
                          className="author-link"
                          style={{ color: TEXT, textDecoration: "none" }}
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="author-link"
                          style={{ color: TEXT, textDecoration: "none" }}
                        >
                          {item.title}
                        </Link>
                      )}
                    </h3>
                    <p
                      className="m-0 pt-xs"
                      style={{ ...BODY, maxWidth: "42rem" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Block>

          <Block label="Working papers">
            <ol
              className="m-0 list-none p-0"
              style={{ borderBottom: `1px solid ${RULE}` }}
            >
              {PAPERS.map((paper) => (
                <li
                  key={paper.doi}
                  className="grid grid-cols-[6.5rem_1fr] items-baseline gap-sm py-sm"
                  style={{ borderTop: `1px solid ${RULE}` }}
                >
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: "0.8125rem",
                      letterSpacing: "0.06em",
                      color: FAINT,
                    }}
                  >
                    {paper.id}
                  </span>
                  <span>
                    <span
                      className="block"
                      style={{
                        fontFamily: SERIF,
                        fontSize: "1.2rem",
                        lineHeight: 1.35,
                        color: TEXT,
                      }}
                    >
                      {paper.title}
                    </span>
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      className="author-link"
                      style={{
                        display: "inline-block",
                        marginTop: "0.35rem",
                        fontFamily: MONO,
                        fontSize: "0.8125rem",
                        color: ACCENT,
                        textDecoration: "underline",
                        textDecorationColor: ACCENT,
                        textUnderlineOffset: "0.16em",
                      }}
                    >
                      {paper.doi}
                    </a>
                  </span>
                </li>
              ))}
            </ol>
          </Block>

          <Block label="Selected works">
            <ol
              className="m-0 list-none p-0"
              style={{ borderBottom: `1px solid ${RULE}` }}
            >
              {WORKS.map((work, index) => (
                <li key={work.href} style={{ borderTop: `1px solid ${RULE}` }}>
                  {(() => {
                    const Href = work.href.endsWith(".html") ? "a" : Link;
                    return (
                  <Href
                    href={work.href}
                    className="author-row block no-underline transition-colors duration-150"
                    style={{ color: "inherit" }}
                  >
                    <div className="grid grid-cols-[2.35rem_1fr] items-baseline gap-sm py-sm sm:grid-cols-[2.35rem_1fr_5rem]">
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: "0.8125rem",
                          color: FAINT,
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span
                          className="block"
                          style={{
                            fontFamily: SERIF,
                            fontStyle: "italic",
                            fontSize: "1.35rem",
                            lineHeight: 1.25,
                            color: TEXT,
                          }}
                        >
                          {work.title}
                        </span>
                        <span
                          className="block pt-xs"
                          style={{
                            fontFamily: SERIF,
                            fontSize: "1.0625rem",
                            lineHeight: 1.45,
                            color: FAINT,
                          }}
                        >
                          {work.plain}
                        </span>
                      </span>
                      <span
                        className="hidden sm:block"
                        style={{
                          fontFamily: MONO,
                          fontSize: "0.8125rem",
                          letterSpacing: "0.06em",
                          color: FAINT,
                          fontVariantNumeric: "tabular-nums",
                          textAlign: "right",
                        }}
                      >
                        {work.year}
                      </span>
                    </div>
                  </Href>
                    );
                  })()}
                </li>
              ))}
            </ol>
          </Block>

          <Block label="Citation">
            <p style={{ ...BODY, maxWidth: "42rem" }}>
              Selimović, Adnan. “Selected Works and Citation Record.”{" "}
              <span style={{ fontStyle: "italic" }}>autostimulus</span>, 2026,{" "}
              <span style={{ color: TEXT }}>https://www.autostimulus.org/author</span>.
            </p>
            <p style={{ ...BODY, maxWidth: "42rem", marginTop: "0.75rem" }}>
              ORCID:{" "}
              <a
                href="https://orcid.org/0000-0003-0193-5214"
                className="author-link"
                style={{
                  color: ACCENT,
                  textDecoration: "underline",
                  textDecorationColor: ACCENT,
                  textUnderlineOffset: "0.16em",
                }}
              >
                0000-0003-0193-5214
              </a>
            </p>
          </Block>

          <footer
            className="flex flex-wrap items-baseline justify-between gap-sm pt-sm pb-xl"
            style={{
              borderTop: `1px solid ${RULE}`,
              fontFamily: MONO,
              fontSize: "0.8125rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: FAINT,
            }}
          >
            <span>
              <Link
                href="/"
                className="author-link"
                style={{ color: DIM, textDecoration: "none" }}
              >
                ↑ autostimulus
              </Link>
              <span style={{ margin: "0 0.9em" }}>·</span>
              <Link
                href="/closed-loop"
                className="author-link"
                style={{ color: DIM, textDecoration: "none" }}
              >
                the closed-loop
              </Link>
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
