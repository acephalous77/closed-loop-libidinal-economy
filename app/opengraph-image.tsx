import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "The Closed-Loop Libidinal Economy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "a framework",
    title: "the closed-loop",
    italicTitle: "libidinal economy",
    subtitle: "a framework for the dynamics of attention under platform capture",
  });
}
