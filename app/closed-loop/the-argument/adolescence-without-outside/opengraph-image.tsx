import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Adolescence Without Outside — Piece III";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the argument · piece III",
    title: "adolescence",
    italicTitle: "without outside",
    subtitle:
      "the native cohort · the inheritance that vanished · the open question of Mode C",
  });
}
