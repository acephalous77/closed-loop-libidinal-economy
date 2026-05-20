import type { Metadata } from "next";
import ZineSpread from "./_components/ZineSpread";

export const metadata: Metadata = {
  title: { absolute: "Ouroboros Life System — Because Life Should Be Effortless" },
  alternates: { canonical: "/chair" },
};

/**
 * /chair — the full samizdat zine.
 *
 * Universe: the Ouroboros Industries Life-System chair is real. Roughly
 * 248,000 fitted. Form §6 (withdrawal of consent) is undeliverable. The
 * fitting consultants are in the neighborhood. THIS PAGE is the
 * resistance pamphlet — anti-copyright, distribute, refuse the fitting.
 */
export default function ChairLanding() {
  return <ZineSpread />;
}
