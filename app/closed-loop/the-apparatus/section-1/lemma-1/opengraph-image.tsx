import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Lemma 1 (foreclosure) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §1",
    title: "Lemma 1",
    subtitle:
      "foreclosure — the closed loop drives the survival of long pauses at the reflective threshold to operational zero",
  });
}
