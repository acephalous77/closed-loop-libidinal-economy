import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Adnan Selimović — author — autostimulus";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "autostimulus",
    title: "Adnan Selimović",
    subtitle:
      "A critical theorist and writer on attention, capture, and the institutions that produce a subject.",
    footerLeft: "autostimulus.org",
    footerRight: "2026",
  });
}
