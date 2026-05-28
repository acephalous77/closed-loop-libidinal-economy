import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Proposition 8 (cohort gradient) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §6",
    title: "Proposition 8",
    subtitle:
      "the cohort gradient — developmental exposure drives behavioral distance to the platform target down exponentially",
  });
}
