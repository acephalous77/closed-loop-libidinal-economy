import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "the glossary — The Closed-Loop Libidinal Economy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the closed-loop libidinal economy",
    title: "the glossary",
    subtitle:
      "the framework's defined terms — alphabetical index of formal objects, hyphenated compounds, and the operating vocabulary",
  });
}
