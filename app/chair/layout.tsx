import type { Metadata } from "next";
import { Spectral, IBM_Plex_Mono, Manrope, Source_Serif_4 } from "next/font/google";
import { MASTER } from "./_components/tokens";
import { ChairGlyph } from "./_components/PlateChrome";

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

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

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
    url: `${SITE_URL}/chair`,
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
      className={`chair-theme ${spectral.variable} ${plexMono.variable} ${manrope.variable} ${sourceSerif.variable}`}
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
      `}</style>

      {children}

      <ChairFoot />
    </div>
  );
}

/**
 * Replaces the previous 11-link strip-of-middots footer. Just the
 * essential anchor + the project's mark + a single link to the route
 * map (which lives at /chair#routes or its own page in batch 2).
 */
function ChairFoot() {
  const T = MASTER;
  return (
    <footer
      style={{
        padding: "6rem 5vw 4rem",
        textAlign: "center",
        borderTop: `0.75px solid ${T.rule}`,
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "1.4rem",
          fontFamily: "var(--font-plex-mono), monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: T.inkMute,
        }}
      >
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
          ↑ autostimulus
        </a>
        <ChairGlyph size={18} stroke={T.accent} />
        <a href="/chair" style={{ color: "inherit", textDecoration: "none" }}>
          /chair
        </a>
        <span style={{ color: T.inkFaint }}>·</span>
        <a href="/chair#routes" style={{ color: "inherit", textDecoration: "none" }}>
          route map
        </a>
        <span style={{ color: T.inkFaint }}>·</span>
        <a href="/chair/colophon" style={{ color: "inherit", textDecoration: "none" }}>
          colophon
        </a>
      </div>
      <div
        style={{
          marginTop: "1.6rem",
          fontFamily: "var(--font-spectral), serif",
          fontStyle: "italic",
          fontSize: "0.85rem",
          color: T.inkFaint,
        }}
      >
        Adnan Selimović · Brooklyn · MMXXVI
      </div>
    </footer>
  );
}
