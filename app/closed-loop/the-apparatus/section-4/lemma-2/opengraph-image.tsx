import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Lemma 2 (parametric continuity) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §4",
    title: "Lemma 2",
    subtitle:
      "parametric continuity — the smooth regularization curve that makes Mode A a continuous slider",
  });
}
