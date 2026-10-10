import type { Metadata } from "next";
import Link from "next/link";
import { Anton, Spectral, IBM_Plex_Mono, Manrope, Source_Serif_4 } from "next/font/google";
import { MASTER } from "./_components/tokens";
import { ChairGlyph } from "./_components/PlateChrome";
import { WorksDoor } from "@/components/navigation/WorksDoor";

/**
 * /chair project layout.
 *
 * Register: forensic atlas. Warm cream paper, dark warm ink, sepia-brick
 * accent used aggressively (plate rules, marginal codes, page numbers).
 * The chair-as-glyph recurs on every page; the strip-of-middots footer
 * of the previous version is replaced by a single foot-text + route
 * map link.
 *
 * Register inversions (brochure, zine, archive) override the master
 * paper-and-ink relationship inside their own subroutes by importing
 * the BROCHURE / ZINE / ARCHIVE token records from _components/tokens.ts.
 */

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: ["400"],
  preload: false,
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: false,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "On the Chair — Notes Toward a Theory of the Closed-Loop Libidinal Economy",
    template: "%s — On the Chair",
  },
  description:
    "An essay and three appended artifacts on the chair as a figure for what the contemporary closed-loop libidinal economy has been becoming. By Adnan Selimović.",
  openGraph: {
    type: "article",
    siteName: "Closed-Loop Libidinal Economy",
    title: "On the Chair",
    description: "Notes toward a theory of the closed-loop libidinal economy.",
        locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "On the Chair",
    description: "Notes toward a theory of the closed-loop libidinal economy.",
  },
};

export default function ChairLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const T = MASTER;
  return (
    <div
      className={`chair-theme ${spectral.variable} ${plexMono.variable} ${manrope.variable} ${sourceSerif.variable} ${anton.variable}`}
      style={{
        minHeight: "100vh",
        background: T.paper,
        color: T.ink,
        fontFamily: "var(--font-spectral), Iowan Old Style, Charter, Georgia, serif",
        fontWeight: 400,
        letterSpacing: "-0.005em",
        colorScheme: "light",
        position: "relative",
        backgroundImage: `linear-gradient(180deg, ${T.paper} 0%, ${T.paper2} 100%)`,
      }}
    >
      <style>{`
        .chair-theme ::selection { background: ${T.accent}; color: ${T.paper}; }
        .chair-theme a:focus-visible { outline: 2px solid ${T.accent}; outline-offset: 2px; }

        /* Subtle paper-grain texture, ever-present */
        .chair-theme::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.08;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='5'/><feColorMatrix values='0 0 0 0 0.5  0 0 0 0 0.46  0 0 0 0 0.38  0 0 0 0.4 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>");
        }

        /* Drop cap utility — applied via className="chair-dropcap" */
        .chair-dropcap::first-letter {
          font-family: var(--font-spectral), Georgia, serif;
          font-weight: 600;
          font-size: 4.6em;
          line-height: 0.86;
          float: left;
          padding: 0.06em 0.14em 0 0;
          color: ${T.ink};
        }

        /* Mobile-pad utility — applied via className="chair-pad" to
           every chair page's outer padding container. The companion
           pages were all using 60px 80px or 60px 100px inline, which
           left almost no content width on a phone. */
        @media (max-width: 700px) {
          .chair-pad {
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-top: 32px !important;
          }
          .chair-pad-sm {
            padding: 24px 16px !important;
          }
          .chair-grid-2 { grid-template-columns: 1fr !important; gap: 24px !important; }
          .chair-grid-3 { grid-template-columns: 1fr !important; gap: 20px !important; }
          .chair-grid-4 { grid-template-columns: 1fr !important; gap: 16px !important; }
          .chair-row-collapse {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .chair-h1 { font-size: clamp(36px, 9vw, 52px) !important; }
          .chair-h2 { font-size: clamp(28px, 7vw, 40px) !important; }
        }
      `}</style>

      <main>{children}</main>

      <ChairFoot />
    </div>
  );
}

/**
 * Three-row global footer: identity row, then the route grid grouped
 * by document type, then the signature. Reachable from every page so
 * the companions (subsystems, precedents, lineage, refusal, concepts)
 * and the artifacts (brochure, zine, archive) are never more than one
 * click away.
 */
function ChairFoot() {
  const T = MASTER;
  const groups: { heading: string; items: [string, string][] }[] = [
    {
      heading: "Essay & companions",
      items: [
        ["/chair/essay", "On the Chair"],
        ["/chair/subsystems", "Subsystems"],
        ["/chair/precedents", "Precedents"],
        ["/chair/lineage", "Lineage"],
        ["/chair/refusal", "Refusal"],
        ["/chair/concepts", "Concepts"],
      ],
    },
    {
      heading: "Artifacts",
      items: [
        ["/chair", "Brochure"],
        ["/chair/zine", "Zine"],
        ["/chair/archive", "Archive"],
      ],
    },
    {
      heading: "End matter",
      items: [
        ["/chair/essay#routes", "Route map"],
        ["/chair/colophon", "Colophon"],
      ],
    },
  ];
  const mono = "var(--font-plex-mono), monospace";
  const serif = "var(--font-spectral), serif";
  return (
    <footer
      style={{
        padding: "5rem 5vw 3rem",
        borderTop: `0.75px solid ${T.rule}`,
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Identity row — chair brand. The autostimulus parent link is
          held back to the lower foot text below so the chair project
          presents itself as a single coherent volume in the footer. */}
      <Link
        href="/chair"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.9rem",
          margin: "0 auto 2.6rem",
          width: "fit-content",
          textAlign: "center",
          fontFamily: mono,
          fontSize: "0.7rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: T.ink,
          textDecoration: "none",
        }}
      >
        <ChairGlyph size={18} stroke={T.accent} />
        <span>On the Chair</span>
      </Link>

      {/* Route grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(160px, 1fr))",
          gap: "2rem",
          maxWidth: 880,
          margin: "0 auto 2.4rem",
        }}
        className="chair-foot-grid"
      >
        {groups.map((g) => (
          <div key={g.heading}>
            <div
              style={{
                fontFamily: mono,
                fontSize: "0.7rem",
                letterSpacing: "0.26em",
                color: T.accent,
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "0.7rem",
                paddingBottom: "0.4rem",
                borderBottom: `0.5px solid ${T.rule}`,
              }}
            >
              {g.heading}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {g.items.map(([href, label]) => (
                <li key={href} style={{ padding: "0.3rem 0" }}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: serif,
                      fontStyle: "italic",
                      fontSize: "0.96rem",
                      color: T.ink,
                      textDecoration: "none",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Signature + parent-site link */}
      <div
        style={{
          fontFamily: serif,
          fontStyle: "italic",
          fontSize: "0.85rem",
          color: T.inkFaint,
          textAlign: "center",
        }}
      >
        Adnan Selimović · Brooklyn · MMXXVI
      </div>
      <div
        style={{
          marginTop: "0.6rem",
          fontFamily: mono,
          fontSize: "0.7rem",
          letterSpacing: "0.24em",
          color: T.inkFaint,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        <WorksDoor style={{ color: "inherit" }} />
      </div>

      <style>{`
        @media (max-width: 700px) {
          .chair-foot-grid { grid-template-columns: 1fr !important; gap: 1.6rem !important; }
        }
      `}</style>
    </footer>
  );
}
