import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "the argument — The Closed-Loop Libidinal Economy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the closed-loop libidinal economy",
    title: "the argument",
    subtitle:
      "eight load-bearing moves — the framework in prose, each move cross-linking to the apparatus result that authorizes it",
  });
}
