import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { JsonLd } from "@/lib/jsonld";

/**
 * /ouroboric-condition project layout.
 *
 * Register: an explorable specimen atlas. The piece is a full-viewport,
 * self-running React canvas (its own two registers — paper "Anatomy" light
 * and sodium "Apparatus" dark — performed inside the work), so this layout
 * adds no site chrome or footer; the atelier back-link lives in the atlas's
 * own top bar. It supplies the two typefaces the work depends on as CSS
 * variables: EB Garamond (the lived) and IBM Plex Mono (the rendered), both
 * self-hosted by next/font at build (no runtime font CDN request).
 */

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--atlas-mono",
  display: "swap",
  weight: ["400", "500"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.autostimulus.org";

export const metadata: Metadata = {
  title: {
    default: "The Ouroboric Condition — An Atlas of Capture",
    template: "%s — The Ouroboric Condition",
  },
  description:
    "An explorable atlas of the apparatus that captures psychic surplus: the ouroboric circuit, tri-axial capture (time, body, bond), the satisfaction loop, the repair commodity, the cultic value-form — and what survives the capture: holding, the face, the custodial remainder. A visual companion to the manuscript by Adnan Selimović.",
  keywords: [
    "psychic surplus",
    "the ouroboric condition",
    "ouroboros",
    "libidinal economy",
    "platform capitalism",
    "attention economy",
    "capture of desire",
    "satisfaction loop",
    "repair commodity",
    "parasocial bond",
    "cultic value-form",
    "holding",
    "the face",
    "custodial remainder",
    "Marx",
    "Stiegler",
    "Klein",
    "Winnicott",
    "Levinas",
    "Adnan Selimović",
  ],
  alternates: { canonical: "/ouroboric-condition" },
  openGraph: {
    type: "article",
    siteName: "autostimulus",
    title: "The Ouroboric Condition — An Atlas of Capture",
    description:
      "An explorable atlas of the apparatus that captures psychic surplus — and of what survives the capture.",
    url: `${SITE_URL}/ouroboric-condition`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ouroboric Condition — An Atlas of Capture",
    description:
      "An explorable atlas of the apparatus that captures psychic surplus — and of what survives the capture.",
  },
};

// The atlas provides its own pinch/drag zoom; disable the browser's page-zoom
// on this route so the two don't fight (faithful to the prototype's intent).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function OuroboricConditionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${plexMono.variable}`}
      style={{
      ["--atlas-serif" as string]: "var(--font-eb-garamond-full), Georgia, serif",
      minHeight: "100vh",
      background: "#cdc7b8",
      colorScheme: "light",
    } as React.CSSProperties}
    >
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "The Ouroboric Condition — An Atlas of Capture",
            alternateName: "The Ouroboric Condition",
            url: `${SITE_URL}/ouroboric-condition`,
            description:
              "An explorable atlas of the apparatus that captures psychic surplus across the platform, the satisfaction loop, the parasocial bond, the wellness commodity and the cultic formation — and of what survives the capture: holding, the face, and the custodial remainder.",
            inLanguage: "en",
            license: "https://creativecommons.org/licenses/by-sa/4.0/",
            isAccessibleForFree: true,
            keywords:
              "psychic surplus, the ouroboric condition, libidinal economy, platform capitalism, capture of desire, holding, the face",
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
