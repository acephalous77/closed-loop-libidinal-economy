import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "autostimulus — works by A. Selimović";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Atelier-level OG card — xerox-zine register matching the landing:
 * bone stock, toner-black ink, a cut-up wordmark with the inverted
 * "stimulus" block and a rubber-stamp red period.
 *
 * JetBrains Mono only: Satori (next/og) caps the bundle at 500KB and
 * each EB Garamond file is ~590KB, so the serif can't ride along here.
 * The inverted block and the red period carry the cut-up instead.
 */
export default async function Image() {
  const mono = await readFile(
    join(process.cwd(), "public/fonts/JetBrainsMono-Bold.ttf")
  );

  const PAPER = "#e9e3d3";
  const INK = "#0b0b0b";
  const INK_2 = "#3a3733";
  const RED = "#cc1f1f";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: PAPER,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          fontFamily: "JetBrains Mono",
          color: INK,
        }}
      >
        {/* top strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 21,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            fontWeight: 700,
          }}
        >
          <div>A. SELIMOVIĆ</div>
          <div style={{ color: INK_2 }}>WORKS 2015—2026</div>
        </div>

        {/* cut-up wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "auto",
            lineHeight: 1,
          }}
        >
          <div style={{ fontSize: 120, fontWeight: 700 }}>auto</div>
          <div
            style={{
              fontSize: 120,
              fontWeight: 700,
              background: INK,
              color: PAPER,
              padding: "0 16px",
            }}
          >
            stimulus
          </div>
          <div style={{ fontSize: 120, fontWeight: 700, color: RED }}>.</div>
        </div>

        {/* bottom strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginTop: 40,
            paddingTop: 20,
            borderTop: `3px solid ${INK}`,
          }}
        >
          <div style={{ maxWidth: 820 }}>
            Critical theory · media psychology · political economy
          </div>
          <div style={{ fontSize: 17, color: INK_2, letterSpacing: "0.16em" }}>
            autostimulus.org
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "JetBrains Mono", data: mono, weight: 700, style: "normal" },
      ],
    }
  );
}
