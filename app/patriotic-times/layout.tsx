import type { Metadata } from "next";
import Link from "next/link";
import { Anton, Source_Serif_4 } from "next/font/google";
import { WorksDoor } from "@/components/navigation/WorksDoor";

/**
 * Patriotic Times project layout — samizdat zine register.
 *
 * Distinct from:
 *   /closed-loop  (literary cream paper, EB Garamond, Adornian)
 *   /ohcose       (federal-bureaucratic eggshell, institutional sans)
 *   /chair        (clinical product, pure white, color-coded subsystems)
 *
 * Here: ivory paper, deep ink, riso-red as the only accent, newspaper
 * headline type. Reads as a museum-shop political comics zine — Sue
 * Coe, Eric Drooker, World War 3 Illustrated. The plates do the
 * affective work; the typography stays out of their way.
 */

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Patriotic Times — A Coloring Book",
    template: "%s — Patriotic Times",
  },
  description:
    "A coloring book of US democratic state failures and the emergence of fascism. Four chapters, 63 plates, 2000–2026.",
  openGraph: {
    type: "website",
    siteName: "Patriotic Times",
    title: "Patriotic Times — A Coloring Book",
    description:
      "A coloring book of US democratic state failures and the emergence of fascism. 2000–2026.",
        locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patriotic Times — A Coloring Book",
    description:
      "Four chapters, 63 plates, 2000–2026.",
  },
};

export default function PatrioticTimesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`patriotic-theme ${anton.variable} ${sourceSerif.variable}`}
      style={{
        minHeight: "100vh",
        background: "#f4ecdc",
        color: "#0a0a0a",
        fontFamily: `-apple-system, "Inter", "Helvetica Neue", system-ui, sans-serif`,
        letterSpacing: "-0.005em",
        colorScheme: "light",
      }}
    >
      <main>{children}</main>
      {/* Tiny atelier-back link */}
      <div
        style={{
          padding: "3rem 5vw 2rem",
          textAlign: "center",
          fontSize: "0.7rem",
          fontFamily: `var(--font-jetbrains-mono), ui-monospace, monospace`,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#736a5d",
          borderTop: "1px solid #d8caa3",
        }}
      >
        <WorksDoor style={{ color: "#736a5d" }} />
        <span style={{ margin: "0 1rem", color: "#c5b694" }}>·</span>
        <Link href="/patriotic-times/colophon" style={{ color: "#736a5d", textDecoration: "none" }}>
          colophon
        </Link>
      </div>
    </div>
  );
}
