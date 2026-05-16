/**
 * JSON-LD structured-data helpers. Schema.org markup makes the
 * site's content classifiable by search engines and academic
 * indexers (Google Scholar, library systems, etc.).
 *
 * Inject via <JsonLd data={...} /> inside a page's <main>. Multiple
 * JSON-LD blocks are fine and additive.
 */

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://autostimulus.org";

const AUTHOR = {
  "@type": "Person",
  name: "A.S.",
  alternateName: "A.S.",
};

const PUBLISHER = {
  "@type": "Organization",
  name: "The Closed-Loop Libidinal Economy",
  url: SITE_URL,
};

/** WebSite schema — goes at the root layout / cover. Helps Google
 *  generate site-wide search box and recognize the site identity. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Closed-Loop Libidinal Economy",
    alternateName: "Closed-Loop Libidinal Economy",
    url: SITE_URL,
    description:
      "A framework for the dynamics of attention under platform capture. Four prose pieces, a mathematical exposition, interactive visualizations.",
    inLanguage: "en",
    author: AUTHOR,
    publisher: PUBLISHER,
  };
}

interface ArticleArgs {
  /** Headline / title of the article. */
  headline: string;
  /** One-sentence description. */
  description: string;
  /** Pathname (e.g. "/the-mathematics"). The site URL is prepended. */
  path: string;
  /** ISO date string for first publication; defaults to 2026-05-15. */
  datePublished?: string;
  /** ISO date string for last modification. */
  dateModified?: string;
  /** Whether this is a scholarly piece (math doc); maps to ScholarlyArticle. */
  scholarly?: boolean;
  /** Optional URL of the OG image. Auto-derived from the path if absent. */
  image?: string;
}

/** Article (or ScholarlyArticle) schema for long-form pages. */
export function articleJsonLd(args: ArticleArgs) {
  const {
    headline,
    description,
    path,
    datePublished = "2026-05-15",
    dateModified,
    scholarly = false,
    image,
  } = args;
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}${path}/opengraph-image`;

  return {
    "@context": "https://schema.org",
    "@type": scholarly ? "ScholarlyArticle" : "Article",
    headline,
    description,
    url,
    image: ogImage,
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    author: AUTHOR,
    publisher: PUBLISHER,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en",
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
  };
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

/** BreadcrumbList schema — produces rich-result breadcrumbs in search. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}
