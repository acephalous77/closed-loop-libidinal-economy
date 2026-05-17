import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "The Sincere Captives — Piece IV";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the argument · piece IV",
    title: "the sincere",
    italicTitle: "captives",
    subtitle:
      "the LinkedIn fanatic · the post-cynical professional · the foreclosure of Mode C at the limit",
  });
}
