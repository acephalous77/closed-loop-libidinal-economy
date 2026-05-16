import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png" as const;

interface OGCardProps {
  eyebrow: string;
  title: string;
  italicTitle?: string;
  subtitle: string;
  footerLeft?: string;
  footerRight?: string;
}

function readFont(name: string): Buffer {
  return fs.readFileSync(path.join(process.cwd(), "public/fonts", name));
}

/**
 * Generates the typographic 1200×630 OG card for a given page.
 * The composition follows the cover-page register: mono eyebrow,
 * 100–120pt EB Garamond title (with optional italic second line),
 * italic subtitle in ink-70, mono footer with author + year.
 */
export async function ogCard({
  eyebrow,
  title,
  italicTitle,
  subtitle,
  footerLeft = "A. Selimović, Ph.D.",
  footerRight = "2026",
}: OGCardProps): Promise<ImageResponse> {
  const ebSerif = readFont("EBGaramond-Regular.ttf");
  const ebItalic = readFont("EBGaramond-Italic.ttf");
  const mono = readFont("JetBrainsMono-Regular.ttf");

  // If both title lines provided, use 100pt; if single line, allow 120pt.
  const titleSize = italicTitle ? 100 : 116;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#f4ede0",
          padding: "84px 92px",
          justifyContent: "space-between",
          fontFamily: "EB Garamond",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 22,
              color: "#8a7f74",
              letterSpacing: "0.04em",
              marginBottom: 36,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontFamily: "EB Garamond",
              fontSize: titleSize,
              color: "#1a1612",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          {italicTitle && (
            <div
              style={{
                fontFamily: "EB Garamond",
                fontStyle: "italic",
                fontSize: titleSize,
                color: "#1a1612",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {italicTitle}
            </div>
          )}
          <div
            style={{
              fontFamily: "EB Garamond",
              fontStyle: "italic",
              fontSize: 42,
              color: "#5a514a",
              marginTop: 44,
              lineHeight: 1.2,
              maxWidth: 920,
            }}
          >
            {subtitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontFamily: "JetBrains Mono",
            fontSize: 20,
            color: "#8a7f74",
            letterSpacing: "0.02em",
          }}
        >
          <span>{footerLeft}</span>
          <span>{footerRight}</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "EB Garamond", data: ebSerif, style: "normal", weight: 400 },
        { name: "EB Garamond", data: ebItalic, style: "italic", weight: 400 },
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 400 },
      ],
    }
  );
}
