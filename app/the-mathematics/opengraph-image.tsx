import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "the mathematics — The Closed-Loop Libidinal Economy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the closed-loop libidinal economy",
    title: "the mathematics",
    subtitle:
      "the full mathematical apparatus — equations, instruments, the foreclosure lemma, the reclamation theorem, the three modes",
  });
}
