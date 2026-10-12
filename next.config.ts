import type { NextConfig } from "next";
import { execSync } from "node:child_process";
import createMDX from "@next/mdx";

/**
 * Build provenance — the short commit hash rendered in the citation unit.
 * Vercel sets VERCEL_GIT_COMMIT_SHA; local and CI builds read it from git.
 * Empty when neither is available; the citation line then omits the stamp.
 */
const BUILD_SHA = (() => {
  const fromEnv = process.env.VERCEL_GIT_COMMIT_SHA;
  if (fromEnv) return fromEnv.slice(0, 7);
  try {
    return execSync("git rev-parse --short HEAD", {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
  } catch {
    return "";
  }
})();

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  env: {
    BUILD_SHA,
  },

  /**
   * 301 redirects for the closed-loop project URL migration. The
   * project moved from the site root (/the-argument, /the-mathematics,
   * etc.) to /closed-loop/* when autostimulus.org became the atelier
   * index for multiple works. The :slug* wildcard preserves sub-paths
   * and fragments. Permanent: true emits 308 Permanent Redirect (the
   * modern equivalent of 301); Google honors both equivalently and
   * passes authority through to the destination.
   *
   * Keep these in place indefinitely. Deep-linked URLs from existing
   * citations, syndication, and external indexes still resolve.
   */
  async redirects() {
    const TOP_PATHS = [
      "the-argument",
      "the-mathematics",
      "the-dynamics",
      "reading-list",
      "open-questions",
      "colophon",
      "instrumentation",
    ];
    return TOP_PATHS.flatMap((p) => [
      {
        source: `/${p}`,
        destination: `/closed-loop/${p}`,
        permanent: true,
      },
      {
        source: `/${p}/:slug*`,
        destination: `/closed-loop/${p}/:slug*`,
        permanent: true,
      },
    ]);
  },

  /**
   * Baseline security response headers, applied to every route.
   *
   * There is still no Content-Security-Policy here, but the reason has
   * changed and the old one no longer applies. It used to be that the
   * preserved simulator pulled React + Babel-standalone from unpkg and
   * compiled its JSX in the browser, which needed script-src
   * 'unsafe-eval' plus the CDN origin. As of 2026-07-31 that is gone:
   * React is vendored locally and the JSX is compiled ahead of time by
   * public/simulator/build.sh, so no route needs 'unsafe-eval' and no
   * route loads script from a third-party origin.
   *
   * What remains before a CSP can be enforced is Next's own inline
   * bootstrap and the inline <style> blocks the static instruments use —
   * both want either a nonce or 'unsafe-inline', which is a per-route
   * exercise across 205 routes rather than a header edit. Worth doing;
   * start report-only and observe before enforcing.
   *
   * X-Frame-Options is SAMEORIGIN (not DENY) so same-origin embedding of
   * the simulator keeps working. The site sets no cookies for tracking
   * and uses no device APIs, so Permissions-Policy denies them outright.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      ["remark-gfm", {}],
      ["remark-math", {}],
    ],
    rehypePlugins: [
      ["rehype-slug", {}],
      ["rehype-katex", { strict: false, trust: true }],
    ],
  },
});

export default withMDX(nextConfig);
