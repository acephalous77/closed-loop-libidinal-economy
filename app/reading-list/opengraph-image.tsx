import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "Reading list — The Closed-Loop Libidinal Economy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "references · lineage",
    title: "reading",
    italicTitle: "list",
    subtitle:
      "works the framework draws on, works it argues against, and the works that did the formal heavy lifting",
  });
}
