import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "The Manufacture of the Subject — A Political Economy of the Human Lifecycle";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "an interactive descent",
    title: "the manufacture",
    italicTitle: "of the subject",
    subtitle: "a political economy of the human lifecycle — crib to deathbed",
    footerRight: "2015",
  });
}
