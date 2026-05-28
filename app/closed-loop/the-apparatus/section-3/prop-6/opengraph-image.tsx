import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Proposition 6 (Kuramoto phase-locking) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §3.3",
    title: "Proposition 6",
    subtitle:
      "captured resonance — somatic phase-locking when media coupling exceeds the body-media frequency gap",
  });
}
