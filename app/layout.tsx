import Link from "next/link";
import { ApparatusProvider } from "@/components/reader-apparatus/ApparatusProvider";
import { ApparatusInstrument } from "@/components/reader-apparatus/ApparatusInstrument";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "katex/dist/katex.min.css";

const garamondMath = localFont({
  src: "../public/fonts/Garamond-Math.otf",
  variable: "--font-garamond-math",
  display: "swap",
  // 536 KB, used only where KaTeX renders math — never preload it site-wide.
  preload: false,
});

const DEFAULT_SITE_URL = "https://www.autostimulus.org";

// Defensive URL parsing — if NEXT_PUBLIC_SITE_URL is unset or contains
// malformed input (e.g. an entire instruction block pasted into Vercel),
// fall back to the default so the build doesn't crash.
function resolveSiteUrl(): string {
  const candidate = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim();
  if (!candidate) return DEFAULT_SITE_URL;
  try {
    return new URL(candidate).toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

const SITE_URL = resolveSiteUrl();

/**
 * Atelier-level metadata. Applies to the root index and is overridden
 * by per-project layouts (e.g. app/closed-loop/layout.tsx) and per-page
 * metadata further down. Project-specific chrome — footers, math
 * tooltip handlers, project-specific JSON-LD — lives inside the
 * project's own layout, not here.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "autostimulus",
    template: "%s — autostimulus",
  },
  description:
    "autostimulus publishes A. Selimović's work on attention, capture, and the institutions that produce a subject.",
  keywords: [
    "Adnan Selimović",
    "A. Selimović",
    "autostimulus",
    "critical theory",
    "media psychology",
    "political economy",
    "libidinal economy",
    "platform capitalism",
    "attention economy",
    "closed-loop libidinal economy",
    "OHCOSE",
    "Office of Human Continuity and Social Equilibrium",
    "ouroboros chair",
    "integrated life system",
    "patriotic times",
    "coloring book",
    "US democratic failure",
    "fascism",
    "performance fiction",
    "speculative design",
    "psychic surplus",
    "metric superego",
    "Foucault",
    "Stiegler",
    "Han",
    "Berardi",
    "Deleuze",
    "Preciado",
    "Lyotard",
  ],
  authors: [{ name: "Adnan Selimović" }],
  creator: "Adnan Selimović",
  publisher: "Adnan Selimović",
  /**
   * No `alternates.canonical` here. A canonical set at the root is
   * inherited by every route that doesn't override it, which told
   * Google that 18 pages were duplicates of the homepage. Each route
   * sets its own canonical; the landing page sets "/".
   */
  openGraph: {
    type: "website",
    siteName: "autostimulus",
    title: "autostimulus",
    description:
      "A press on attention, capture, and the institutions that produce a subject.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "autostimulus",
    description:
      "A press on attention, capture, and the institutions that produce a subject.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "3MwJUALUUZcD__h7Ptv-a8hB_H9-m5_tyosUp5dfR7A",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${garamondMath.variable}`}
    >
      <body>
      {/* Font preloads — the three faces every route needs. */}
        <link rel="preload" href="/fonts/SourceSerif4-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/SourceSerif4-Italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/IBMPlexMono-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
        <Link href="#main-content" className="skip-to-content">
          skip to content
        </Link>
        <div className="min-h-screen flex flex-col">
          <div id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </div>
        </div>
        <ApparatusProvider />
        <ApparatusInstrument />
      </body>
    </html>
  );
}
