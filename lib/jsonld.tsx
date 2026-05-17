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
  "https://www.autostimulus.org";

// Identity-verification URLs for the author. Each entry strengthens
// the E-E-A-T signal Google/Bing/LLMs use to weight authority. Add
// URLs here as they exist — they propagate to every page's JSON-LD.
const AUTHOR_SAME_AS: string[] = [
  // "https://orcid.org/0000-0000-0000-0000",
  // "https://scholar.google.com/citations?user=XXXXXXXXXXX",
  // "https://philpapers.org/profile/XXXXX",
  // "https://www.researchgate.net/profile/Adnan-Selimovic",
];

const AUTHOR = {
  "@type": "Person",
  name: "Adnan Selimović",
  alternateName: "A. Selimović",
  url: `${SITE_URL}/closed-loop/colophon`,
  ...(AUTHOR_SAME_AS.length ? { sameAs: AUTHOR_SAME_AS } : {}),
};

const PUBLISHER = {
  "@type": "Organization",
  name: "The Closed-Loop Libidinal Economy",
  url: SITE_URL,
};

/** The framework as a CreativeWork — used as isPartOf on every
 *  child article so search engines understand the corpus structure.
 *  Now lives at /closed-loop within the autostimulus atelier. */
const FRAMEWORK_PART_OF = {
  "@type": "CreativeWork",
  name: "The Closed-Loop Libidinal Economy",
  url: `${SITE_URL}/closed-loop`,
};

/** WebSite schema for the closed-loop project — mounted from the
 *  project layout (app/closed-loop/layout.tsx), not the atelier root.
 *  The atelier root has its own minimal WebSite schema in page.tsx. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Closed-Loop Libidinal Economy",
    alternateName: "Closed-Loop Libidinal Economy",
    url: `${SITE_URL}/closed-loop`,
    description:
      "A framework for the dynamics of attention under platform capture. Prose, mathematics, interactive instruments.",
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
  /** Pathname (e.g. "/closed-loop/the-mathematics"). The site URL is prepended. */
  path: string;
  /** ISO date string for first publication; defaults to 2026-05-15. */
  datePublished?: string;
  /** ISO date string for last modification. */
  dateModified?: string;
  /** Whether this is a scholarly piece (math doc); maps to ScholarlyArticle. */
  scholarly?: boolean;
  /** Optional URL of the OG image. Auto-derived from the path if absent. */
  image?: string;
  /** Approximate word count; signals content depth to crawlers. */
  wordCount?: number;
  /** Article section label (e.g. "Mathematics", "Essay"). */
  articleSection?: string;
  /** Keywords / subject tags. */
  keywords?: string[];
  /** Estimated reading time in minutes. */
  timeRequired?: number;
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
    wordCount,
    articleSection,
    keywords,
    timeRequired,
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
    isPartOf: FRAMEWORK_PART_OF,
    inLanguage: "en",
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
    isAccessibleForFree: true,
    ...(wordCount ? { wordCount } : {}),
    ...(articleSection ? { articleSection } : {}),
    ...(keywords && keywords.length ? { keywords: keywords.join(", ") } : {}),
    ...(timeRequired ? { timeRequired: `PT${timeRequired}M` } : {}),
  };
}

interface ItemListEntry {
  name: string;
  url: string;
  description?: string;
}

/** ItemList schema — for index pages like reading-list, open-questions. */
export function itemListJsonLd(name: string, items: ItemListEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

/** CreativeWork schema for the framework as a whole (homepage). */
export function frameworkJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "The Closed-Loop Libidinal Economy",
    alternateName: "Closed-Loop Libidinal Economy Framework",
    description:
      "A formal framework for the dynamics of attention under platform capture. The mathematics is the spine; the prose is the body; the dynamics is the operable instrument. Explicit lemmas, named theorems, four essays, fourteen plates.",
    url: `${SITE_URL}/closed-loop`,
    author: AUTHOR,
    publisher: PUBLISHER,
    inLanguage: "en",
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
    datePublished: "2026-05-15",
    keywords: [
      "libidinal economy",
      "platform capitalism",
      "attention economy",
      "closed-loop dynamics",
      "Hawkes process",
      "Kuramoto coupling",
      "foreclosure lemma",
      "reclamation theorem",
      "metric superego",
      "cohort gradient",
    ].join(", "),
    hasPart: [
      { "@type": "ScholarlyArticle", name: "The Mathematics", url: `${SITE_URL}/closed-loop/the-mathematics` },
      { "@type": "Article", name: "The Argument", url: `${SITE_URL}/closed-loop/the-argument` },
      { "@type": "CollectionPage", name: "The Dynamics", url: `${SITE_URL}/closed-loop/the-dynamics` },
      { "@type": "Article", name: "Reading List", url: `${SITE_URL}/closed-loop/reading-list` },
      { "@type": "Article", name: "Open Questions", url: `${SITE_URL}/closed-loop/open-questions` },
    ],
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
