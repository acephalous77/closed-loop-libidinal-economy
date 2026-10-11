import type { Metadata } from "next";
import { Offprint } from "./Offprint";

export const metadata: Metadata = {
  title: "the reader's apparatus",
  description:
    "The offprint: one session of the reader's apparatus, measured in memory and nowhere else.",
  alternates: { canonical: "/reader" },
  robots: { index: false, follow: false },
};

export default function ReaderPage() {
  return <Offprint />;
}
