import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Permanent_Marker, Caveat } from "next/font/google";

/**
 * Chair project layout — cinematic dark, slow horror register.
 *
 * Deep black ground, warm off-white type, blood-red accent. The chair
 * page lives in this register end-to-end: there's no marketing wrapper
 * and no design-bundle cream-paper interlude. The page is one slow
 * descent through six scenes, an art-object posing as a product page.
 */

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: "400",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
  weight: "400",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "500", "700"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

export const metadata: Metadata = {
  title: {
    default: "Ouroboros Life System — Because Life Should Be Effortless",
    template: "%s — Ouroboros Life System",
  },
  description:
    "The Ouroboros Life System. An apparatus in six phases. A closed-loop integrated life-support enclosure for uninterrupted living.",
  openGraph: {
    type: "website",
    siteName: "Ouroboros Life System",
    title: "Ouroboros Life System — Because Life Should Be Effortless",
    description:
      "An apparatus in six phases. A closed-loop integrated life-support enclosure.",
    url: `${SITE_URL}/chair`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ouroboros Life System",
    description: "An apparatus in six phases.",
  },
};

// Cinematic dark palette
const BG = "#0a0908";
const INK = "#f0ebe2";
const MUTED = "#6b6760";
const LINE = "rgba(240,235,226,0.10)";
const ACCENT = "#ff3a25";

export default function ChairLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`chair-theme ${geistSans.variable} ${geistMono.variable} ${anton.variable} ${permanentMarker.variable} ${caveat.variable}`}
      style={{
        minHeight: "100vh",
        background: BG,
        color: INK,
        fontFamily: `var(--font-geist), ui-sans-serif, system-ui, -apple-system, sans-serif`,
        fontWeight: 380,
        letterSpacing: "-0.005em",
        colorScheme: "dark",
        position: "relative",
      }}
    >
      <style>{`
        .chair-theme ::selection { background: ${ACCENT}; color: ${BG}; }
        .chair-theme a:focus-visible { outline: 2px solid ${ACCENT}; outline-offset: 2px; }

        /* Film-grain overlay — subtle, ever-present */
        .chair-theme::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.06;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>");
        }

        /* Subtle vignette to deepen the edges of the viewport */
        .chair-theme::after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 99;
          background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%);
        }
      `}</style>

      {children}

      {/* Foot — faint, ceremonial */}
      <div
        style={{
          padding: "5rem 5vw 4rem",
          textAlign: "center",
          fontSize: "0.7rem",
          fontFamily: `var(--font-geist-mono), ui-monospace, monospace`,
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: MUTED,
          borderTop: `1px solid ${LINE}`,
          position: "relative",
          zIndex: 1,
        }}
      >
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
          ↑ autostimulus
        </a>
        <span style={{ margin: "0 1.5rem", opacity: 0.35 }}>·</span>
        <a href="/chair/colophon" style={{ color: "inherit", textDecoration: "none" }}>
          colophon
        </a>
      </div>
    </div>
  );
}
