import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "The Ouroboric Condition — An Atlas of Capture";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "an atlas of capture",
    title: "the ouroboric",
    italicTitle: "condition",
    subtitle: "on psychic surplus & the capture of desire",
  });
}
