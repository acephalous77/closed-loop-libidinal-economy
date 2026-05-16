import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "the argument — The Closed-Loop Libidinal Economy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the closed-loop libidinal economy",
    title: "the argument",
    subtitle:
      "four prose pieces and a coda — the framework laid out in the registers where it is lived",
  });
}
