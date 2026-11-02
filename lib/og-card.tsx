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
  return fs.readFileSync(path.join(process.cwd(), "public/fonts/og", name));
}

/**
 * Generates the typographic 1200×630 OG card for a given page.
 * The composition follows the cover-page register: mono eyebrow,
 * 100–120pt Source Serif 4 title (with optional italic second line),
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
  const serif = readFont("SourceSerif4-Regular.ttf");
  const serifItalic = readFont("SourceSerif4-Italic.ttf");
  const mono = readFont("IBMPlexMono-Regular.ttf");

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
          background: "#f1f2ef",
          padding: "84px 92px",
          justifyContent: "space-between",
          fontFamily: "Source Serif 4",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "IBM Plex Mono",
              fontSize: 22,
              color: "#6b7277",
              letterSpacing: "0.04em",
              marginBottom: 36,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontFamily: "Source Serif 4",
              fontSize: titleSize,
              color: "#191b1e",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          {italicTitle && (
            <div
              style={{
                fontFamily: "Source Serif 4",
                fontStyle: "italic",
                fontSize: titleSize,
                color: "#191b1e",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {italicTitle}
            </div>
          )}
          <div
            style={{
              fontFamily: "Source Serif 4",
              fontStyle: "italic",
              fontSize: 42,
              color: "#4b5258",
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
            fontFamily: "IBM Plex Mono",
            fontSize: 20,
            color: "#6b7277",
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
        { name: "Source Serif 4", data: serif, style: "normal", weight: 400 },
        { name: "Source Serif 4", data: serifItalic, style: "italic", weight: 400 },
        { name: "IBM Plex Mono", data: mono, style: "normal", weight: 400 },
      ],
    }
  );
}
