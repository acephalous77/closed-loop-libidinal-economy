import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "§0 The spine — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §0",
    title: "the spine",
    subtitle:
      "the performative setup, the closure as a fixed point, the three axiom groups",
  });
}
