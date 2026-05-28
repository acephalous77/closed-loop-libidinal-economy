import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Theorem 1' (reclamation impossibility) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §2",
    title: "Theorem 1'",
    subtitle:
      "reclamation as sample-complexity divergence — recovering pre-platform interiority has unbounded sample cost",
  });
}
