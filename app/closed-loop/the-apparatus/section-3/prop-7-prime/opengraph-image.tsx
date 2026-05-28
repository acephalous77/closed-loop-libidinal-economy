import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Proposition 7' (libidinal routing) — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §3.4",
    title: "Proposition 7'",
    subtitle:
      "libidinal routing — the four registers become dependently distributed under closed-loop joint observation",
  });
}
