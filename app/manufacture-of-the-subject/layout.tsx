import type { Metadata } from "next";
import localFont from "next/font/local";
import { JsonLd } from "@/lib/jsonld";
import "./manufacture.css";

/**
 * /manufacture-of-the-subject project layout.
 *
 * Register: a self-contained brutalist/punk vertical-scroll "descent" — a
 * human life metered for profit, crib to deathbed. Like /ouroboric-condition
 * it is a full-viewport, self-running React canvas, so this layout adds no
 * site chrome or footer; the atelier back-link lives in the piece's own
 * conclusion. It forces its own dark palette and never touches the site theme
 * tokens (everything is scoped under `.mos` in manufacture.css).
 *
 * It supplies the four typefaces the work depends on as CSS variables, all
 * self-hosted by next/font at build (no runtime font CDN request): Space
 * Grotesk (structure), Newsreader (the argument / human voice), Space Mono
 * (the apparatus), Anton (poster display). The human-voice / machine type
 * split is the thesis.
 */

const anton = localFont({
  src: "../_fonts/Anton-400.woff2",
  variable: "--font-anton-mos",
  display: "swap",
  weight: "400",
});

const newsreader = localFont({
  src: [
    { path: "../_fonts/Newsreader-normal.woff2", weight: "400 600", style: "normal" },
    { path: "../_fonts/Newsreader-italic.woff2", weight: "400 600", style: "italic" },
  ],
  variable: "--font-newsreader",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "../_fonts/SpaceGrotesk-normal.woff2",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "400 700",
});

const spaceMono = localFont({
  src: [
    { path: "../_fonts/SpaceMono-400.woff2", weight: "400", style: "normal" },
    { path: "../_fonts/SpaceMono-400i.woff2", weight: "400", style: "italic" },
    { path: "../_fonts/SpaceMono-700.woff2", weight: "700", style: "normal" },
    { path: "../_fonts/SpaceMono-700i.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-space-mono",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.autostimulus.org";

export const metadata: Metadata = {
  title: {
    default:
      "The Manufacture of the Subject — A Political Economy of the Human Lifecycle",
    template: "%s — The Manufacture of the Subject",
  },
  description:
    "The industrialization of socialization — how a human subject is produced, station by station, on a line that runs from crib to deathbed. An interactive descent through a life metered for profit: desire, attention and affect harvested at every life stage. By Adnan Selimović.",
  alternates: { canonical: "/manufacture-of-the-subject" },
  keywords: [
    "the manufacture of the subject",
    "psychic surplus",
    "behavioral surplus",
    "life-time value",
    "libidinal economy",
    "platform capitalism",
    "attention economy",
    "socialization",
    "lifecycle",
    "repressive desublimation",
    "pharmacopornographic",
    "playbor",
    "Stiegler",
    "Zuboff",
    "Marcuse",
    "Preciado",
    "Han",
    "Lyotard",
    "Adnan Selimović",
  ],
  openGraph: {
    type: "article",
    siteName: "autostimulus",
    title: "The Manufacture of the Subject",
    description:
      "A political economy of the human lifecycle — socialization as industry, crib to deathbed. An interactive descent.",
    url: `${SITE_URL}/manufacture-of-the-subject`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Manufacture of the Subject",
    description:
      "A political economy of the human lifecycle — socialization as industry, crib to deathbed.",
  },
};

export default function ManufactureLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`mos ${anton.variable} ${newsreader.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
      id="mos-root"
      data-type="editorial"
      data-motion="medium"
      data-implicate="on"
      style={{ minHeight: "100vh", background: "#0a0a0a", colorScheme: "dark" }}
    >
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "The Manufacture of the Subject",
            alternateName:
              "The Manufacture of the Subject — A Political Economy of the Human Lifecycle",
            url: `${SITE_URL}/manufacture-of-the-subject`,
            description:
              "A political economy of the human lifecycle: how a human subject is produced, station by station, on a line that runs from crib to deathbed. An interactive descent through a life metered for profit.",
            inLanguage: "en",
            dateCreated: "2015",
            license: "https://creativecommons.org/licenses/by-sa/4.0/",
            isAccessibleForFree: true,
            keywords:
              "psychic surplus, behavioral surplus, life-time value, libidinal economy, socialization, lifecycle, platform capitalism",
            author: {
              "@type": "Person",
              name: "Adnan Selimović",
              alternateName: "A. Selimović",
              url: `${SITE_URL}/closed-loop/the-colophon`,
            },
            publisher: {
              "@type": "Organization",
              name: "autostimulus",
              url: SITE_URL,
            },
            isPartOf: {
              "@type": "CollectionPage",
              name: "autostimulus — works",
              url: SITE_URL,
            },
          },
        ]}
      />
      {children}
    </div>
  );
}
