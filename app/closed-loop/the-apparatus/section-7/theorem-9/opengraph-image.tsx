import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Theorem 9 (causal sensitivity) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §7",
    title: "Theorem 9",
    subtitle:
      "causal sensitivity — the N-fold asymmetry between architectural and individual-scale intervention",
  });
}
