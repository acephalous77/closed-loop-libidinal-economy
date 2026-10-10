import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "OHCOSE — Office of Human Continuity & Social Equilibrium";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "office of human continuity & social equilibrium",
    title: "OHCOSE",
    subtitle: "a cradle-to-grave partnership for the standard consumer-citizen",
  });
}
