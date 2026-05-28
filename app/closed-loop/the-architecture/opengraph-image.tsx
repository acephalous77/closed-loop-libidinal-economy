import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "the architecture — The Closed-Loop Libidinal Economy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the closed-loop libidinal economy",
    title: "the architecture",
    subtitle:
      "the closed loop as interactive schematic — ten parts, two annotations, the closure operator Φ at the center",
  });
}
