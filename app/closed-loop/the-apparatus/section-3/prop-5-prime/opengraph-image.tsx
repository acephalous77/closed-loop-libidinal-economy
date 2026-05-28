import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Proposition 5' (metric superego) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §3.2",
    title: "Proposition 5'",
    subtitle:
      "the metric superego — the user's behavioral distribution drifts to the platform-induced target",
  });
}
