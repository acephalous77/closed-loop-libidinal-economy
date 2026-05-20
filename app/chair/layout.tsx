import type { Metadata } from "next";

/**
 * Chair project layout — clinical product-launch register.
 *
 * Distinct from both the closed-loop project (literary, cream paper,
 * EB Garamond) and OHCOSE (federal-bureaucratic eggshell, system sans).
 * The chair reads as the product page of a luxury medical / consumer
 * device — Apple / Peloton / Tesla / IKEA spec-sheet aesthetic, but
 * for a coffin. Pure white, hairline borders, color-coded subsystems,
 * clinical sans throughout.
 *
 * The horror is carried by the gap between the marketing voice and
 * what the product DOES. The page does not break character.
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

export const metadata: Metadata = {
  title: {
    default: "Ouroboros Life System — Because Life Should Be Effortless",
    template: "%s — Ouroboros Life System",
  },
  description:
    "The Ouroboros Life System™. A fully-enclosed integrated life-support apparatus. Total automation for work, play, and survival.",
  openGraph: {
    type: "website",
    siteName: "Ouroboros Life System",
    title: "Ouroboros Life System — Because Life Should Be Effortless",
    description:
      "A fully-enclosed integrated life-support apparatus. Total automation for work, play, and survival.",
    url: `${SITE_URL}/chair`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ouroboros Life System",
    description:
      "A fully-enclosed integrated life-support apparatus.",
  },
};

export default function ChairLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className="chair-theme"
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        color: "#0a0a0a",
        fontFamily: `-apple-system, "Inter", "SF Pro Display", "Helvetica Neue", system-ui, sans-serif`,
        letterSpacing: "-0.01em",
        colorScheme: "light",
      }}
    >
      {children}
      {/* Tiny atelier-back link in product-page register — easy to miss */}
      <div
        style={{
          padding: "3rem 5vw 2rem",
          textAlign: "center",
          fontSize: "0.7rem",
          fontFamily: `var(--font-jetbrains-mono), ui-monospace, monospace`,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#9a9a9a",
          borderTop: "1px solid #e6e6e6",
        }}
      >
        <a href="/" style={{ color: "#9a9a9a", textDecoration: "none" }}>
          ↑ autostimulus
        </a>
        <span style={{ margin: "0 1rem", color: "#cccccc" }}>·</span>
        <a href="/chair/colophon" style={{ color: "#9a9a9a", textDecoration: "none" }}>
          colophon
        </a>
      </div>
    </div>
  );
}
