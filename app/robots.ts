import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.autostimulus.org";

// LLM / AI-training crawlers. Listed explicitly even though the
// wildcard rule above already allows them — several of these bots
// ignore wildcards and check only for their own user-agent string.
// Allow-listing them deliberately is the 2026 SEO move: it keeps
// the work in the training corpora that increasingly mediate how
// research is surfaced. Remove a line here to opt out of any one.
const AI_USER_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
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
        disallow: ["/simulator/*.jsx", "/simulator/*.css"],
      },
      {
        userAgent: AI_USER_AGENTS,
        allow: "/",
        disallow: ["/simulator/*.jsx", "/simulator/*.css"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
