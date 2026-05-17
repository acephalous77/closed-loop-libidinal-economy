import type { Metadata } from "next";

/**
 * OHCOSE project layout. Sets the institutional grayscale register
 * for everything inside /ohcose/* via the .ohcose-theme class on a
 * wrapper div (which scopes the CSS variable overrides in
 * globals.css). The atelier's cream/EB-Garamond register does not
 * leak in here.
 *
 * Performance-piece logic: the visitor lands on what reads as the
 * actual public-intake portal of the Office. The closed-loop site's
 * literary register is set aside entirely. No author surfacing; the
 * Office speaks.
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

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
    url: `${SITE_URL}/ohcose`,
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
    <div className="ohcose-theme min-h-screen">
      {children}
      <OhcoseFooter />
    </div>
  );
}

/**
 * Project footer — in-character. Document number, classification
 * stamp, mock-jurisdiction boilerplate. Atelier-back link is a tiny
 * monospaced glyph at the very bottom, easy to miss — the performance
 * piece stays unbroken for readers who don't look for the exit.
 */
function OhcoseFooter() {
  return (
    <footer className="print-hide w-full mt-2xl pt-md pb-md border-t-2 border-paper-85">
      <div className="mx-auto max-w-[var(--container-page)] px-sm">
        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-sm">
          <div className="ohcose-docnum">
            OHCOSE / REG / PSCC / 2026.05 — for public intake
          </div>
          <div className="ohcose-stamp">restricted distribution</div>
        </div>
        <p
          className="font-mono text-xs mt-sm leading-snug"
          style={{ color: "var(--color-ink-50)" }}
        >
          Property of the Office of Human Continuity and Social Equilibrium.
          Reproduction without authorization is prohibited under Title 7,
          Subtitle C, Sections 14–28. Submit FOIA inquiries via Form 9-B
          (paper only). The Office does not respond to electronic
          correspondence regarding Standard Consumer-Citizen status.
        </p>
        <div className="mt-md text-right">
          <a
            href="/"
            className="font-mono text-xs transition-colors duration-100"
            style={{ color: "var(--color-ink-50)" }}
          >
            ↑ exit portal
          </a>
        </div>
      </div>
    </footer>
  );
}
