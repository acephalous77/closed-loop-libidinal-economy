import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

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
   * Deliberately NOT a Content-Security-Policy: the preserved simulator
   * at /simulator/index.html loads React + Babel-standalone from unpkg
   * and compiles JSX in the browser (needs script-src 'unsafe-eval' and
   * the CDN origin), so an enforced CSP would break it. A report-only
   * CSP can be layered on later to observe before enforcing.
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
