import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

// Search and user-initiated retrieval stay open: they bring readers to the
// work and cite it. Bulk training crawlers are opted out explicitly; several
// check only their own user-agent string, so the names have to be present.
// robots.txt is advisory, not a technical control — this is a stated posture,
// with the colophon as its public record.
const SEARCH_AND_RETRIEVAL = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
];

const TRAINING_CRAWLERS = [
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
  "Bytespider",
  "DiffBot",
  "FacebookBot",
  "Meta-ExternalAgent",
  "Amazonbot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/simulator/*.jsx", "/simulator/*.css", "/thinkroom"],
      },
      {
        userAgent: SEARCH_AND_RETRIEVAL,
        allow: "/",
        disallow: ["/simulator/*.jsx", "/simulator/*.css", "/thinkroom"],
      },
      {
        userAgent: TRAINING_CRAWLERS,
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
