import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

/**
 * Chair project layout — the apparatus's own world.
 *
 * Single unified register: Geist + Geist Mono, warm cream paper (#f1efea),
 * true black ink, vivid red accent (#e23b2a). This is NOT the atelier
 * landing's clinical product-launch (that lives at /). It is also not
 * the closed-loop project's literary EB-Garamond cream paper, nor the
 * OHCOSE manual's federal-bureaucratic eggshell. The chair page is its
 * own enclosed object — the design-bundle register, end to end, with no
 * marketing wrapper to interrupt the altar.
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

// Design-bundle palette tokens
const BG = "#f1efea";
const INK = "#0a0a0a";
const MUTED = "#6b6b66";
const LINE = "rgba(10,10,10,0.14)";

export default function ChairLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`chair-theme ${geistSans.variable} ${geistMono.variable}`}
      style={{
        minHeight: "100vh",
        background: BG,
        color: INK,
        fontFamily: `var(--font-geist), ui-sans-serif, system-ui, -apple-system, sans-serif`,
        fontWeight: 380,
        letterSpacing: "-0.005em",
        colorScheme: "light",
        // selection color → accent
        // (applied via inline <style> below since pseudo-elements can't be inlined)
      }}
    >
      <style>{`
        .chair-theme ::selection { background: #e23b2a; color: ${BG}; }
        .chair-theme a:focus-visible { outline: 2px solid #e23b2a; outline-offset: 2px; }
      `}</style>
      {children}
      {/* Tiny atelier-back link — the only marketing chrome that survives,
          and it survives because it's a portal out, not a portal in. */}
      <div
        style={{
          padding: "4rem 5vw 3rem",
          textAlign: "center",
          fontSize: "0.7rem",
          fontFamily: `var(--font-geist-mono), ui-monospace, monospace`,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: MUTED,
          borderTop: `1px solid ${LINE}`,
        }}
      >
        <a href="/" style={{ color: "inherit", textDecoration: "none" }}>
          ↑ autostimulus
        </a>
        <span style={{ margin: "0 1rem", opacity: 0.4 }}>·</span>
        <a href="/chair/colophon" style={{ color: "inherit", textDecoration: "none" }}>
          colophon
        </a>
      </div>
    </div>
  );
}
