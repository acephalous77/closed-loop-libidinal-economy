import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Open questions — The Closed-Loop Libidinal Economy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "research targets · open commitments",
    title: "open",
    italicTitle: "questions",
    subtitle:
      "ten open questions named explicitly — three formal mathematical, two structural-empirical, five where the empirical record is thin",
  });
}
