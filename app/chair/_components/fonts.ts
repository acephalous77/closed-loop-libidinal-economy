import localFont from "next/font/local";

/**
 * Brochure-scoped face. Manrope paints only on the brochure route
 * (/chair and the components it mounts), so its instance lives here
 * rather than in the chair layout: next/font emits the preload links
 * only where the instance's variable is applied, which keeps the five
 * faces off the ten other chair routes' critical path (audit P2,
 * addressed 2026-10-10). The variable name is unchanged, so
 * FONT.manrope (tokens.ts) resolves identically inside the wrapper.
 */
export const manrope = localFont({
  src: "../../_fonts/Manrope-normal.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "300 700",
});
