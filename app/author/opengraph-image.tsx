import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Adnan Selimović — author — autostimulus";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "autostimulus · author",
    title: "Adnan Selimović",
    subtitle:
      "critical theory · media psychology · political economy — the citation record for the corpus",
    footerLeft: "A. Selimović, Ph.D.",
    footerRight: "2026",
  });
}
