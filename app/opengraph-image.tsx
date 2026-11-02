import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "autostimulus — A. Selimović";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const serif = await readFile(
    join(process.cwd(), "public/fonts/og/SourceSerif4-Regular.ttf")
  );
  const italic = await readFile(
    join(process.cwd(), "public/fonts/og/SourceSerif4-Italic.ttf")
  );

  const PAPER = "#f1f2ef";
  const INK = "#191b1e";
  const MUTED = "#4b5258";
  const ACCENT = "#174a77";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: PAPER,
          color: INK,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          fontFamily: "Source Serif 4",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontSize: 24,
            borderBottom: `1px solid #d4d8d1`,
            paddingBottom: 24,
          }}
        >
          <div>autostimulus</div>
          <div style={{ color: MUTED }}>A. Selimović</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            The loop is closed.
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.35,
              color: MUTED,
              maxWidth: 760,
            }}
          >
            A press on attention, capture, and the institutions that produce a
            subject.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontSize: 22,
            color: MUTED,
            borderTop: `1px solid #d4d8d1`,
            paddingTop: 22,
          }}
        >
          <div style={{ color: ACCENT }}>autostimulus.org</div>
          <div style={{ fontStyle: "italic" }}>2015—2026</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Source Serif 4", data: serif, weight: 400, style: "normal" },
        { name: "Source Serif 4", data: italic, weight: 400, style: "italic" },
      ],
    }
  );
}
