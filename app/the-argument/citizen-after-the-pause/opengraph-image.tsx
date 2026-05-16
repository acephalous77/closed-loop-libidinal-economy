import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "The Citizen After the Pause — Piece II";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the argument · piece II",
    title: "the citizen",
    italicTitle: "after the pause",
    subtitle:
      "adolescence-as-class · the foreclosure of democratic substrate · the political form already present",
  });
}
