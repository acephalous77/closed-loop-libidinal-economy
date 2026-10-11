import type { Metadata } from "next";
import Link from "next/link";
import { WorksDoor } from "@/components/navigation/WorksDoor";

/**
 * OHCOSE project layout. Sets the institutional grayscale register
 * for everything inside /ohcose/* via the .ohcose-theme class on a
 * wrapper div (which scopes the CSS variable overrides in
 * globals.css). The atelier's cream/EB-Garamond register does not
 * leak in here.
 *
 * Page chrome (gray frame, OHCOSE word-mark top-right, barcode +
 * page number + doc-code stamp bottom) lives in <PageFrame> and is
 * applied per-page so each page declares its own page number. The
 * layout is otherwise minimal — just the theme wrapper and a tiny
 * atelier-back link.
 */

export const metadata: Metadata = {
  title: {
    default: "OHCOSE — Public Intake Portal",
    template: "%s — OHCOSE",
  },
  description:
    "Office of Human Continuity and Social Equilibrium. Public Intake Portal. A cradle-to-grave partnership for the Standard Consumer-Citizen (Gen C Model).",
  openGraph: {
    type: "website",
    siteName: "OHCOSE",
    title: "OHCOSE — Public Intake Portal",
    description:
      "Office of Human Continuity and Social Equilibrium. Public Intake Portal.",
        locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHCOSE — Public Intake Portal",
    description:
      "Office of Human Continuity and Social Equilibrium.",
  },
};

export default function OhcoseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="ohcose-theme min-h-screen pb-md">
      {children}
      {/* Atelier-back link + colophon — tiny, easy to miss;
          preserves the performance for casual visitors. The reader
          who tracks them down still gets out, and the colophon is
          where the meta-frame lives. */}
      <div
        className="mx-auto text-center pt-md flex items-baseline justify-center gap-md"
        style={{ maxWidth: "880px" }}
      >
        <Link
          href="/ohcose/colophon"
          className="font-mono uppercase hover:underline"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            color: "var(--color-ink-50)",
          }}
        >
          colophon
        </Link>
        <span style={{ color: "var(--color-ink-50)", fontSize: "0.55rem" }}>·</span>
        <WorksDoor
            className="font-mono uppercase hover:underline"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "var(--color-ink-50)",
            }}
          />
      </div>
    </div>
  );
}
