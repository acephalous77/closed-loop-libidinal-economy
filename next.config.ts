import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-math", {}]],
    rehypePlugins: [
      ["rehype-slug", {}],
      ["rehype-katex", { strict: false, trust: true }],
    ],
  },
});

export default withMDX(nextConfig);
