import type { Metadata } from "next";
import ZineSpread from "../_components/ZineSpread";

export const metadata: Metadata = {
  title: { absolute: "The Zine — Ouroboros Resistance Pamphlet" },
  description:
    "Anti-copyright resistance pamphlet documenting the Ouroboros Life System. An artifact appended to the essay /chair.",
  alternates: { canonical: "/chair/zine" },
};

/**
 * /chair/zine — the resistance pamphlet, preserved as an artifact.
 *
 * The essay at /chair treats this document as one of three appended
 * artifacts (along with /chair/the-system and /chair/archive).
 */
export default function ZinePage() {
  return <ZineSpread />;
}
