import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "§8 Network coupling — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §8",
    title: "Network coupling",
    subtitle:
      "mean-field convergence, the engagement cascade, and the percolation threshold across a social graph",
  });
}
