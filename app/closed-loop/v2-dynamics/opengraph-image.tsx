import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "the dynamics — The Closed-Loop Libidinal Economy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the closed-loop libidinal economy",
    title: "the dynamics",
    subtitle:
      "twelve interactive plates — each operates an apparatus result against a parameter so the reader sees the mechanism behave",
  });
}
