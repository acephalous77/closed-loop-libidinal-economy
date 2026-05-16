import type { MetadataRoute } from "next";

const BASE =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://closed-loop-libidinal-economy.vercel.app";

const ROUTES = [
  "/",
  "/the-argument",
  "/the-argument/the-loop",
  "/the-argument/citizen-after-the-pause",
  "/the-argument/adolescence-without-outside",
  "/the-argument/sincere-captives",
  "/the-argument/note",
  "/the-mathematics",
  "/the-dynamics",
  "/the-dynamics/foreclosure-clock",
  "/the-dynamics/reclamation-trajectories",
  "/the-dynamics/closed-loop",
  "/the-dynamics/libidinal-routing",
  "/the-dynamics/chrono-debt",
  "/the-dynamics/captured-resonance",
  "/the-dynamics/somatic-optimization",
  "/the-dynamics/surplus",
  "/the-dynamics/metric-superego",
  "/the-dynamics/causal-chain",
  "/the-dynamics/intervention",
  "/the-dynamics/cohort-gradient",
  "/the-dynamics/mode-space",
  "/the-dynamics/tiktok",
  "/reading-list",
  "/open-questions",
  "/instrumentation",
  "/colophon",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1.0 : path.startsWith("/the-") ? 0.8 : 0.5,
  }));
}
