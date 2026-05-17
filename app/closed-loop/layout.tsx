import type { Metadata } from "next";
import { MdxMathTooltips } from "@/components/ui/MdxMathTooltips";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd, websiteJsonLd } from "@/lib/jsonld";

/**
 * Layout for the closed-loop project. Mounts the project-scoped
 * footer (with wayfinding into the project's surfaces) and the MDX
 * math-tooltip post-processor (only needed where math actually
 * lives). Atelier root and other projects don't pick up either.
 *
 * Project-level metadata defaults — title template, OG name — live
 * here so they apply to every page inside /closed-loop/* without
 * leaking to the atelier root or sibling projects.
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

export const metadata: Metadata = {
  title: {
    default: "The Closed-Loop Libidinal Economy",
    template: "%s — The Closed-Loop Libidinal Economy",
  },
  description:
    "A framework for the dynamics of attention under platform capture. The closed-loop architecture, the foreclosure lemma, the reclamation theorem, the three modes of intervention. Mathematics, prose, and operable instruments.",
  keywords: [
    "libidinal economy",
    "attention economy",
    "platform capitalism",
    "closed-loop dynamics",
    "metric superego",
    "captured resonance",
    "chrono-debt",
    "cohort gradient",
    "Mode A intervention",
    "Mode B intervention",
    "Mode C intervention",
    "Adorno",
    "Marcuse",
    "Stiegler",
    "Han",
    "Crary",
    "Lyotard",
    "Deleuze",
    "Mannheim",
    "Sloterdijk",
    "Burroughs",
  ],
  openGraph: {
    type: "website",
    siteName: "The Closed-Loop Libidinal Economy",
    title: "The Closed-Loop Libidinal Economy",
    description:
      "A framework for the dynamics of attention under platform capture. Prose, mathematics, dynamics.",
    url: `${SITE_URL}/closed-loop`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Closed-Loop Libidinal Economy",
    description:
      "A framework for the dynamics of attention under platform capture. Prose, mathematics, dynamics.",
  },
};

export default function ClosedLoopLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      {children}
      <SiteFooter />
      <MdxMathTooltips />
    </>
  );
}
