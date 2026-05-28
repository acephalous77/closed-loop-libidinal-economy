import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "§5 Intervention modes — the apparatus — closed-loop";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the apparatus · §5",
    title: "Intervention modes",
    subtitle:
      "the site-by-source taxonomy and the three intervention modes — reward, response, observation",
  });
}
