import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Definition 1.1 (chrono-debt spectrum) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §1.4",
    title: "Definition 1.1",
    subtitle:
      "the chrono-debt spectrum — foreclosed pause-time at every scale, measured against a pre-closure baseline",
  });
}
