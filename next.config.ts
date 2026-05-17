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
