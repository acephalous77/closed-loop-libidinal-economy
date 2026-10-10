import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Patriotic Times — A Coloring Book";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "a coloring book",
    title: "patriotic",
    italicTitle: "times",
    subtitle: "US democratic state failures and the emergence of fascism · 63 plates",
    footerRight: "2025—2026",
  });
}
