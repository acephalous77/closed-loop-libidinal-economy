import { ImageResponse } from "next/og";

export const alt = "autostimulus — works by A. Selimović";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Atelier-level OG card. Mirrors the landing's design language:
 * pure white paper, near-black ink, neon-green accent on the period.
 * System sans for the wordmark. Mono for the meta strip.
 *
 * Built with @vercel/og (next/og) — no external font files needed;
 * uses the OS default sans which is fine at OG resolution.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top mono strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            textTransform: "uppercase",
            letterSpacing: "0.28em",
            color: "#5a5a5a",
            fontWeight: 700,
          }}
        >
          <div>a. selimović</div>
          <div style={{ color: "#9a9a9a" }}>works · 2026</div>
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: 220,
            fontWeight: 900,
            color: "#0a0a0a",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            marginTop: "auto",
          }}
        >
          autostimulus
          <span style={{ color: "#00ff5f" }}>.</span>
        </div>

        {/* Subtitle strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontSize: 24,
            color: "#3a3a3a",
            fontWeight: 500,
            marginTop: 36,
            paddingTop: 18,
            borderTop: "2px solid #0a0a0a",
          }}
        >
          <div style={{ maxWidth: 760 }}>
            Critical theory · media psychology · political economy
          </div>
          <div
            style={{
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "#5a5a5a",
              fontWeight: 700,
              fontFamily: "ui-monospace, monospace",
            }}
          >
            autostimulus.org
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
