import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "katex/dist/katex.min.css";
import { MdxMathTooltips } from "@/components/ui/MdxMathTooltips";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { JsonLd, websiteJsonLd } from "@/lib/jsonld";

const ebGaramond = localFont({
  src: [
    { path: "../public/fonts/EBGaramond-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/EBGaramond-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/EBGaramond-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/EBGaramond-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-eb-garamond",
  display: "swap",
});

const jetBrainsMono = localFont({
  src: [
    { path: "../public/fonts/JetBrainsMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/JetBrainsMono-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/JetBrainsMono-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const garamondMath = localFont({
  src: "../public/fonts/Garamond-Math.otf",
  variable: "--font-garamond-math",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  authors: [{ name: "Adnan Selimović" }],
  creator: "Adnan Selimović",
  publisher: "Adnan Selimović",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "The Closed-Loop Libidinal Economy",
    title: "The Closed-Loop Libidinal Economy",
    description:
      "A framework for the dynamics of attention under platform capture. Prose, mathematics, dynamics.",
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Closed-Loop Libidinal Economy",
    description:
      "A framework for the dynamics of attention under platform capture. Prose, mathematics, dynamics.",
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
      className={`${ebGaramond.variable} ${jetBrainsMono.variable} ${garamondMath.variable}`}
    >
      <body>
        <JsonLd data={websiteJsonLd()} />
        <a href="#main-content" className="skip-to-content">
          skip to content
        </a>
        <div className="min-h-screen flex flex-col">
          <div id="main-content" className="flex-1">
            {children}
          </div>
          <SiteFooter />
        </div>
        <MdxMathTooltips />
      </body>
    </html>
  );
}
