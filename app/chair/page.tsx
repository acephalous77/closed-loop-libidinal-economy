import type { Metadata } from "next";
import ZineSpread from "./_components/ZineSpread";
import OuroborosPortal from "./_components/OuroborosPortal";

export const metadata: Metadata = {
  title: { absolute: "Ouroboros Life System — Because Life Should Be Effortless" },
  alternates: { canonical: "/chair" },
};

/**
 * /chair — demo state.
 *
 * The top of the page is the new SAMIZDAT PUNK ZINE register: cover +
 * Phase 01 Ontogenesis spread. Original drawn assets (Ω-serpent logotype,
 * chair stencil, distressed rubber stamps, hand-drawn arrows) + the Dec
 * 2025 Substack illustrations (the better batch). Broken grid, halftone,
 * neon palette, stencil/marker typography.
 *
 * Below it the existing cinematic-dark portal continues from Phase 02
 * onward — that's the comparison surface. If the zine register lands,
 * the rest of the page follows.
 */
export default function ChairLanding() {
  return (
    <>
      <ZineSpread />
      <OuroborosPortal />
    </>
  );
}
