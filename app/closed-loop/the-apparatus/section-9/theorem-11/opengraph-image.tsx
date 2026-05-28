import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Theorem 11 (rate-of-foreclosure refinement) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §9",
    title: "Theorem 11",
    subtitle:
      "stretched-exponential survival bounds in the intermediate tail regime most engagement data sits in",
  });
}
