import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Proposition 4' (dividual condition) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §3.1",
    title: "Proposition 4'",
    subtitle:
      "the dividual — the platform's filtering posterior contracts on the user state at the parametric rate",
  });
}
