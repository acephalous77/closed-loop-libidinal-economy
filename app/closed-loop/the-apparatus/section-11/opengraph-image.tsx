import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "§11 Synthesis — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §11",
    title: "Synthesis",
    subtitle:
      "the fifteen results, the three load-bearing claims, the open research-frontier questions",
  });
}
