import type { Metadata } from "next";
import ZineSpread from "../_components/ZineSpread";
import { PlateHeader, PlateFooter } from "../_components/PlateChrome";
import { ZINE } from "../_components/tokens";

export const metadata: Metadata = {
  title: { absolute: "The Zine — Ouroboros Resistance Pamphlet" },
  description:
    "Anti-copyright resistance pamphlet documenting the Ouroboros Life System. An artifact appended to the brochure at /chair.",
  alternates: { canonical: "/chair/zine" },
};

/**
 * /chair/zine — the resistance pamphlet, preserved as an artifact.
 *
 * Wrapped with PlateHeader / PlateFooter using ZINE tokens so the
 * global navigation appears at the top in dark mode and the volume's
 * other routes are reachable from inside the zine.
 */
export default function ZinePage() {
  return (
    <div style={{ background: "#0a0908", color: "#f3e7c8", minHeight: "100vh" }}>
      <PlateHeader
        plate="III"
        route="/chair/zine"
        code="OLS · ARTIFACT · ZINE"
        tokens={ZINE}
      />
      <ZineSpread />
      <PlateFooter
        folio="III"
        total="XLII"
        section="Zine · resistance pamphlet"
        tokens={ZINE}
      />
    </div>
  );
}
