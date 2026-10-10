import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Bypass the root layout's "%s — autostimulus" template so the
  // title stays singular.
  title: { absolute: "Not Found — autostimulus" },
  description: "The page you requested does not exist.",
};

/**
 * 404 in the landing's xerox-zine register — its own enclosed object,
 * scheme-independent: bone stock, toner black, rubber-stamp red,
 * photocopy grain. Mirrors the cut-up wordmark and the stamped links.
 */
const PAPER = "#e9e3d3";
const INK = "#0b0b0b";
const INK_2 = "#3a3733";
const RED = "#cc1f1f";

const MONO = `var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace`;
const SERIF = `var(--font-eb-garamond), Georgia, "Times New Roman", serif`;

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const LINKS = [
  { href: "/", label: "↑ autostimulus" },
  { href: "/chair", label: "the ouroboros life system" },
  { href: "/ohcose", label: "ohcose" },
  { href: "/ouroboric-condition", label: "the ouroboric condition" },
  { href: "/closed-loop", label: "the closed-loop libidinal economy" },
  { href: "/patriotic-times", label: "patriotic times" },
  { href: "/manufacture-of-the-subject", label: "the manufacture of the subject" },
  { href: "/psychopolitics-atlas/index.html", label: "the psychopolitics of socialization" },
];

export default function NotFound() {
  return (
    <>
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
        style={{
          background: PAPER,
          color: INK,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "8vh 6vw",
          fontFamily: MONO,
          colorScheme: "light",
        }}
      >
        <div style={{ maxWidth: "46rem", width: "100%", margin: "0 auto" }}>
          <div
            style={{
              fontFamily: MONO,
              fontSize: "0.78rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              color: INK_2,
              marginBottom: "1.6rem",
            }}
          >
            HTTP 404 · NOT ON FILE
          </div>

          {/* cut-up headline */}
          <h1
            style={{
              margin: 0,
              lineHeight: 0.92,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              columnGap: "0.12em",
            }}
          >
            <span
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(3rem, 11vw, 7rem)",
                color: INK,
                textTransform: "lowercase",
              }}
            >
              not
            </span>
            <span
              style={{
                fontFamily: MONO,
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 9vw, 5.6rem)",
                background: INK,
                color: PAPER,
                padding: "0 0.12em",
                letterSpacing: "-0.03em",
                textTransform: "lowercase",
              }}
            >
              here
            </span>
            <span
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(3rem, 11vw, 7rem)",
                color: RED,
                fontWeight: 700,
              }}
            >
              .
            </span>
          </h1>

          <p
            style={{
              fontFamily: MONO,
              fontSize: "0.88rem",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: INK_2,
              marginTop: "2rem",
              lineHeight: 1.7,
              maxWidth: "34rem",
            }}
          >
            The page you requested does not exist, or has not been written yet.
          </p>

          {/* stamped routes back in */}
          <nav
            style={{
              marginTop: "3rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
            }}
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nf-link"
                style={{
                  fontFamily: MONO,
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.13em",
                  color: INK,
                  textDecoration: "none",
                  padding: "0.5rem 0.7rem",
                  border: `1.5px solid ${INK}`,
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </main>

      <style>{`
        .nf-link { transition: background-color 80ms steps(1), color 80ms steps(1); }
        .nf-link:focus-visible { background: ${INK}; color: ${PAPER}; outline-offset: 3px; }
        @media (hover: hover) and (pointer: fine) {
          .nf-link:hover { background: ${INK}; color: ${PAPER}; }
        }
      `}</style>
    </>
  );
}
