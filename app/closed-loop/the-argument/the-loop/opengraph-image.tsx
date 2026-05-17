import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "The Closed-Loop Libidinal Economy — Piece I";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the argument · piece I",
    title: "the closed-loop",
    italicTitle: "libidinal economy",
    subtitle:
      "the framework laid out in prose — closure, foreclosure, the three modes of intervention",
  });
}
