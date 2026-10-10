import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "The Ouroboros Life System";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the ouroboros life system",
    title: "on the",
    italicTitle: "chair",
    subtitle: "the chair as a figure for the closed-loop libidinal economy",
    footerRight: "2021",
  });
}
