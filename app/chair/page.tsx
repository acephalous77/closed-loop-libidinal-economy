import type { Metadata } from "next";
import OuroborosPortal from "./_components/OuroborosPortal";

export const metadata: Metadata = {
  title: { absolute: "Ouroboros Life System — Because Life Should Be Effortless" },
  alternates: { canonical: "/chair" },
};

/**
 * /chair — the apparatus, end to end.
 *
 * No masthead. No hero text. No marketing wrapper. The chair is the page
 * from first paint. The harvest strip is the chrome. The six phases are
 * the only structure. The product-launch elements (tiers, pricing,
 * testimonial, fitting inquiry) are folded into the phases where they
 * belong — Habitualization, Obsolescence, Exit.
 */
export default function ChairLanding() {
  return <OuroborosPortal />;
}
