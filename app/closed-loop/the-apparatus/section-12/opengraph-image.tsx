import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "§12 Empirical calibration — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §12",
    title: "Empirical calibration",
    subtitle:
      "per-result calibration hooks and the reflexive measurement problem",
  });
}
