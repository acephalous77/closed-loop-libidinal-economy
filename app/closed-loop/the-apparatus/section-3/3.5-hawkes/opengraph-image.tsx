import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Somatic optimization (Hawkes instrument) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §3.5",
    title: "Somatic optimization",
    subtitle:
      "the Hawkes instrument — self-exciting engagement intensity across the four registers, with cross-register coupling",
  });
}
