import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Theorem 12 (crisis-boundary classification) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §10",
    title: "Theorem 12",
    subtitle:
      "the crisis boundary — four bifurcation regimes where contractivity fails and the platform itself destabilizes",
  });
}
