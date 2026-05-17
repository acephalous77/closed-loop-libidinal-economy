import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-card";

export const alt = "A Note on What This Document Is — Coda";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return ogCard({
    eyebrow: "the argument · coda",
    title: "a note on",
    italicTitle: "what this document is",
    subtitle:
      "the document as Mode-B artifact · the open questions, named · the closing position",
  });
}
