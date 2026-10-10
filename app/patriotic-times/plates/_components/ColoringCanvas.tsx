"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Interactive coloring canvas for a single plate.
 *
 * Loads the source line-art PNG into a canvas; on click, runs an
 * iterative scan-line flood-fill from the click point in the
 * currently selected color. Strokes (black lines, ~ #000000 to ~ #333)
 * are not crossed because the tolerance is low; closed regions of the
 * line art fill cleanly.
 *
 * Controls:
 *   - 12-color crayon palette
 *   - reset → reloads the original image
 *   - print → window.print(); a print stylesheet hides everything
 *     except the canvas so the user's colored version comes out clean
 *
 * Performance: ~1500×1000 PNGs flood-fill in <200ms on a modern device.
 * No undo stack (keeps memory small); reset restores the original.
 */

interface ColoringCanvasProps {
  src: string;
  alt: string;
}

// Crayon-box palette. Twelve colors plus the eraser (white).
const PALETTE: { name: string; hex: string }[] = [
  { name: "crimson", hex: "#b8222a" },
  { name: "orange", hex: "#d96d3c" },
  { name: "yellow", hex: "#f2c84b" },
  { name: "olive", hex: "#7d8c3a" },
  { name: "green", hex: "#3a7d4a" },
  { name: "teal", hex: "#2a7d8c" },
  { name: "navy", hex: "#2a3a7d" },
  { name: "purple", hex: "#6b3a7d" },
  { name: "brown", hex: "#6b4a2a" },
  { name: "pink", hex: "#d96d8c" },
  { name: "graphite", hex: "#4a4a4a" },
  { name: "skin", hex: "#e8c8a8" },
];
const ERASER = "#ffffff";

export function ColoringCanvas({ src, alt }: ColoringCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [color, setColor] = useState<string>(PALETTE[0].hex);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Natural pixel size of the loaded plate — drives the wrapper's
  // aspect ratio (state, not a render-time ref read, so the box reserves
  // the right height from the first paint after load).
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);

  /** Load the source image into the canvas. */
  const loadImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      imgRef.current = img;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      setNatural({ w: img.naturalWidth, h: img.naturalHeight });
      setReady(true);
    };
    img.onerror = () => {
      setError("Could not load plate.");
    };
    img.src = src;
  }, [src]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

  /** Reset to the original line art. */
  const handleReset = () => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };

  /** Print the colored canvas (print stylesheet shows only the canvas). */
  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  /** Handle click on canvas — flood-fill from the click point. */
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    // Translate CSS pixel coords to canvas pixel coords (accounts for
    // any CSS scaling — the canvas is rendered larger than displayed)
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);
    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) return;
    floodFill(canvas, x, y, hexToRgb(color));
  };

  if (error) {
    return (
      <div
        style={{
          padding: "3rem",
          textAlign: "center",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          color: "#b8222a",
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <div className="coloring-canvas-root">
      {/* Canvas — wrapped so we can scale it responsively in CSS */}
      <div
        className="canvas-wrap"
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          background: "#fff",
          border: "1px solid #0a0a0a",
          aspectRatio: natural
            ? `${natural.w} / ${natural.h}`
            : "3 / 2",
        }}
      >
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          role="img"
          aria-label={alt}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            cursor: ready ? "crosshair" : "wait",
            background: "#fff",
          }}
        />
      </div>

      {/* Controls — palette + reset + print. Hidden in print stylesheet. */}
      <div
        className="canvas-controls print-hide"
        style={{
          marginTop: "1.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Color palette */}
        <div
          role="radiogroup"
          aria-label="Color palette"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: "0.4rem",
            maxWidth: "26rem",
          }}
        >
          {PALETTE.map((c) => (
            <button
              key={c.hex}
              type="button"
              role="radio"
              aria-checked={color === c.hex}
              aria-label={c.name}
              onClick={() => setColor(c.hex)}
              style={{
                width: "2.75rem",
                height: "2.75rem",
                background: c.hex,
                border: color === c.hex ? "3px solid #0a0a0a" : "1px solid #0a0a0a",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
          <button
            type="button"
            role="radio"
            aria-checked={color === ERASER}
            aria-label="eraser"
            onClick={() => setColor(ERASER)}
            style={{
              width: "2.75rem",
              height: "2.75rem",
              background: ERASER,
              border: color === ERASER ? "3px solid #0a0a0a" : "1px solid #0a0a0a",
              cursor: "pointer",
              padding: 0,
              backgroundImage:
                "linear-gradient(45deg, #b8222a 25%, transparent 25%, transparent 75%, #b8222a 75%, #b8222a), linear-gradient(45deg, #b8222a 25%, #fff 25%, #fff 75%, #b8222a 75%, #b8222a)",
              backgroundSize: "10px 10px",
              backgroundPosition: "0 0, 5px 5px",
            }}
            title="Erase (paint white)"
          />
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "0.6rem" }}>
          <button
            type="button"
            onClick={handleReset}
            style={controlButton}
          >
            ↺ Reset
          </button>
          <button
            type="button"
            onClick={handlePrint}
            style={{ ...controlButton, background: "#0a0a0a", color: "#f4ecdc" }}
          >
            ⎙ Print your version
          </button>
        </div>
      </div>

      {/* Hint */}
      <p
        className="print-hide"
        style={{
          marginTop: "1rem",
          textAlign: "center",
          fontSize: "0.85rem",
          fontFamily:
            "var(--font-jetbrains-mono), ui-monospace, monospace",
          color: "#6b5e4d",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
        }}
      >
        Click any white region to fill it. Choose a color above.
      </p>

      {/* Print stylesheet — show only the canvas, kill everything else */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .canvas-wrap, .canvas-wrap * { visibility: visible; }
          .canvas-wrap {
            position: absolute;
            top: 0; left: 0;
            width: 100%;
            border: none !important;
          }
          .print-hide { display: none !important; }
        }
      `}</style>
    </div>
  );
}

const controlButton: React.CSSProperties = {
  padding: "0.75rem 1.25rem",
  fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
  fontSize: "0.78rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  background: "#f4ecdc",
  color: "#0a0a0a",
  border: "2px solid #0a0a0a",
  cursor: "pointer",
};

/** Parse "#RRGGBB" → [r, g, b]. */
function hexToRgb(hex: string): [number, number, number] {
  const m = hex.replace("#", "");
  return [
    parseInt(m.slice(0, 2), 16),
    parseInt(m.slice(2, 4), 16),
    parseInt(m.slice(4, 6), 16),
  ];
}

/**
 * Scan-line flood fill from (sx, sy) with the given RGB color.
 * Uses an iterative stack + visited bitmap; tolerance compares to the
 * pixel originally at (sx, sy) so that anti-aliased edges of regions
 * (lighter gray pixels around line strokes) fill smoothly while solid
 * black strokes (low value, high contrast to start) are NOT crossed.
 */
function floodFill(
  canvas: HTMLCanvasElement,
  sx: number,
  sy: number,
  fillRgb: [number, number, number]
) {
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return;
  const w = canvas.width;
  const h = canvas.height;
  const imageData = ctx.getImageData(0, 0, w, h);
  const data = imageData.data;
  const startIdx = (sy * w + sx) * 4;
  const sr = data[startIdx];
  const sg = data[startIdx + 1];
  const sb = data[startIdx + 2];
  const [fr, fg, fb] = fillRgb;

  // If start pixel is already very close to the fill color, no-op
  if (
    Math.abs(sr - fr) < 8 &&
    Math.abs(sg - fg) < 8 &&
    Math.abs(sb - fb) < 8
  ) {
    return;
  }

  // Don't allow fill from dark line-stroke pixels (avoids paint
  // bleeding when user clicks on a line)
  if (sr + sg + sb < 240) {
    // dark area — likely a line; ignore
    return;
  }

  const tolerance = 96; // generous enough to flow through anti-aliased
  //                     edges, strict enough to stop at black strokes

  const visited = new Uint8Array(w * h);
  const stack: number[] = [sx, sy];

  while (stack.length) {
    const y = stack.pop()!;
    const x = stack.pop()!;
    if (x < 0 || x >= w || y < 0 || y >= h) continue;
    const linearIdx = y * w + x;
    if (visited[linearIdx]) continue;
    const idx = linearIdx * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    // Tolerance check: manhattan distance from start pixel
    const dr = Math.abs(r - sr);
    const dg = Math.abs(g - sg);
    const db = Math.abs(b - sb);
    if (dr + dg + db > tolerance) continue;
    visited[linearIdx] = 1;
    // Blend strength scales by closeness to start (so anti-aliased
    // edges get a partial fill — keeps line edges crisp)
    const closeness =
      1 - Math.min(1, (dr + dg + db) / tolerance);
    data[idx] = Math.round(r * (1 - closeness) + fr * closeness);
    data[idx + 1] = Math.round(g * (1 - closeness) + fg * closeness);
    data[idx + 2] = Math.round(b * (1 - closeness) + fb * closeness);
    data[idx + 3] = 255;
    stack.push(x + 1, y);
    stack.push(x - 1, y);
    stack.push(x, y + 1);
    stack.push(x, y - 1);
  }

  ctx.putImageData(imageData, 0, 0);
}
