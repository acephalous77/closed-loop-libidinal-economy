import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { WORKS } from "@/lib/works";

export const metadata: Metadata = {
  title: "the colophon",
  description:
    "autostimulus is the press of A. Selimović — one concern in seven registers.",
  alternates: { canonical: "/colophon" },
};

/**
 * The press colophon — /colophon.
 *
 * 2026-10-12 (his ruling): the atelier-level colophon, on the approved
 * copy, in the console register — graphite ground, porcelain ink,
 * prussian accent (the frontpage's room). The seven founding registers
 * number in shelf order, Nº 01–07, as WORKS orders them; the list
 * renders inline from lib/works.ts so the shelf cannot drift.
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

const LABEL: CSSProperties = {
  margin: 0,
  fontSize: "0.7rem",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  color: FAINT,
};

const BODY: CSSProperties = {
  fontFamily: SERIF,
  fontSize: "1rem",
  lineHeight: 1.5,
  color: DIM,
  maxWidth: "44rem",
};

const POSTURE = [
  "self-hosted everything — fonts, scripts, imagery",
  "no third-party requests",
  "no analytics, no tracking",
  "one cookie sitewide — the thinkroom's passphrase gate",
  "every readout carries its plain definition",
];

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section aria-label={label} className="pb-md">
      <div
        className="flex items-baseline justify-between gap-sm pb-xs"
        style={{ borderBottom: `1px solid ${RULE}` }}
      >
        <p style={LABEL}>{label}</p>
      </div>
      <div className="pt-sm">{children}</div>
    </section>
  );
}

export default function Colophon() {
  return (
    <>
      <style>{`
        .colophon-row:hover { background: ${PANEL}; }
        .colophon-row:focus-visible {
          outline: 2px solid ${ACCENT};
          outline-offset: 2px;
        }
        .colophon-link { transition: color 100ms, text-decoration-color 100ms; }
        .colophon-link:hover { text-decoration: underline; text-underline-offset: 3px; }
        .colophon-link:focus-visible {
          outline: 2px solid ${ACCENT};
          outline-offset: 3px;
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
        <div className="mx-auto max-w-[48rem] px-sm pb-xl md:px-md">
          {/* ============ MASTHEAD ============ */}
          <header className="pt-xl pb-md">
            <nav aria-label="Breadcrumb" className="pb-sm">
              <p
                style={{
                  margin: 0,
                  fontFamily: MONO,
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: FAINT,
                }}
              >
                <Link
                  href="/"
                  className="colophon-link"
                  style={{ color: FAINT, textDecoration: "none" }}
                >
                  autostimulus
                </Link>
                <span style={{ margin: "0 0.7em" }}>·</span>
                <span style={{ color: DIM }}>the colophon</span>
              </p>
            </nav>
            <h1
              className="m-0"
              style={{
                fontFamily: SERIF,
                fontWeight: 500,
                fontStyle: "italic",
                fontSize: "clamp(2.2rem, 6vw, 3.4rem)",
                lineHeight: 1,
                color: TEXT,
                textTransform: "lowercase",
              }}
            >
              the colophon
              <span
                style={{ color: ACCENT, fontStyle: "normal", fontWeight: 700 }}
              >
                .
              </span>
            </h1>
          </header>

          {/* ============ STATEMENT ============ */}
          <Block label="Statement">
            <p
              className="m-0"
              style={{
                fontFamily: SERIF,
                fontSize: "1.08rem",
                lineHeight: 1.65,
                color: TEXT,
                opacity: 0.92,
                maxWidth: "44rem",
              }}
            >
              autostimulus is the press of A. Selimović — one concern in seven
              registers. each institution stages the same loop in its own paper
              and ink. this colophon documents the press: the register series,
              the posture, the license, the sign.
            </p>
          </Block>

          {/* ============ SERIES · the numbered register ============ */}
          <Block label="Series">
            <p className="m-0 pb-sm" style={BODY}>
              the seven works are the founding registers, numbered. companion
              registers from the notes lane follow, numbered in turn — the
              series is in progress.
            </p>
            <ol
              className="m-0 list-none p-0"
              style={{ borderBottom: `1px solid ${RULE}` }}
            >
              {WORKS.map((w, i) => (
                <li key={w.href} style={{ borderTop: `1px solid ${RULE}` }}>
                  <Link
                    href={w.href}
                    className="colophon-row block no-underline transition-colors duration-150"
                    style={{ color: "inherit" }}
                  >
                    <div className="flex flex-col gap-xs py-sm sm:flex-row sm:items-baseline sm:justify-between sm:gap-sm">
                      <span className="flex items-baseline gap-sm">
                        <span
                          style={{
                            fontFamily: MONO,
                            fontSize: "0.72rem",
                            color: FAINT,
                            fontVariantNumeric: "tabular-nums",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Nº {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          style={{
                            fontFamily: SERIF,
                            fontStyle: "italic",
                            fontSize: "1.06rem",
                            color: TEXT,
                          }}
                        >
                          {w.title}
                        </span>
                      </span>
                      <span
                        style={{
                          fontFamily: MONO,
                          fontSize: "0.7rem",
                          letterSpacing: "0.08em",
                          color: FAINT,
                          fontVariantNumeric: "tabular-nums",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {w.year}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </Block>

          {/* ============ POSTURE ============ */}
          <Block label="Posture">
            <ul className="m-0 flex list-none flex-col gap-xs p-0">
              {POSTURE.map((line) => (
                <li key={line} className="flex items-baseline gap-sm">
                  <span
                    aria-hidden="true"
                    style={{ fontFamily: MONO, fontSize: "0.8rem", color: ACCENT }}
                  >
                    ·
                  </span>
                  <span style={BODY}>{line}</span>
                </li>
              ))}
            </ul>
            <p className="m-0 pt-sm" style={BODY}>
              the full refusals list, each refusal with its apparatus citation,
              sits at{" "}
              <Link
                href="/closed-loop/the-colophon"
                className="colophon-link"
                style={{ color: ACCENT, textDecoration: "none" }}
              >
                /closed-loop/the-colophon
              </Link>
              .
            </p>
          </Block>

          {/* ============ HOUSE ============ */}
          <Block label="House">
            <p className="m-0" style={BODY}>
              text · cc by-sa 4.0 · code · mit. each register keeps its own
              faces; the shell serves them — the Register Rule. the source
              repository is public —{" "}
              <a
                href="https://github.com/acephalous77/closed-loop-libidinal-economy"
                className="colophon-link"
                style={{ color: ACCENT, textDecoration: "none" }}
              >
                github.com/acephalous77/closed-loop-libidinal-economy
              </a>
              .
            </p>
          </Block>

          {/* ============ SIGN ============ */}
          <Block label="Sign">
            <p
              className="m-0"
              style={{
                fontFamily: MONO,
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: FAINT,
              }}
            >
              A. Selimović, Ph.D. — Blacksburg, Virginia — 2026.
            </p>
          </Block>
        </div>
      </main>
    </>
  );
}
