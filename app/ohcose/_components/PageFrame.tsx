import type { ReactNode } from "react";
import { Barcode } from "./Barcode";

/**
 * Universal OHCOSE page chrome — wraps every leaf in the /ohcose
 * project. Mirrors the canonical published-report visual language:
 *
 *   ┌──────────────────────────────── OHCOSE  (word-mark, top-right)
 *   │
 *   │       [ page body — caller's children ]
 *   │
 *   │  barcode      page-num             OHCOSE-LR · SCC · GENC
 *   └──────  (bottom-left)  (bottom-center red)  (bottom-right red)
 *
 * The frame is a real bordered box, not a background — it gives the
 * leaf-of-a-bound-document feel that the published version uses.
 *
 * Pass `pageNum` for the leaf number (string so phase pages can use
 * sub-codes like "I.1" rather than integers).
 *
 * Optional `secCode` overrides the default doc-code triplet for
 * section-specific marking (e.g. "PHASE-I", "SP-1.1").
 */

interface PageFrameProps {
  children: ReactNode;
  pageNum: string;
  /** Optional section code shown small above the page number,
   *  e.g. "OHCOSE / PHASE-I / SP-1.1 / 2026.05". */
  secCode?: string;
}

export function PageFrame({ children, pageNum, secCode }: PageFrameProps) {
  return (
    <div
      className="mx-auto"
      style={{
        maxWidth: "var(--container-page)",
        minHeight: "100vh",
        padding: "0 1rem",
      }}
    >
      <div
        className="relative"
        style={{
          // The "scanned report leaf" frame
          border: "1px solid var(--color-paper-85)",
          outline: "6px solid var(--color-paper-95)",
          outlineOffset: "-6px",
          background: "var(--color-paper)",
          minHeight: "calc(100vh - 2rem)",
          padding: "2rem 2rem 5rem 2rem",
        }}
      >
        {/* ============== TOP-RIGHT WORD-MARK ============== */}
        <div
          className="absolute"
          style={{
            top: "1.25rem",
            right: "1.75rem",
            fontFamily: "var(--font-serif)",
            fontWeight: 800,
            fontSize: "1.5rem",
            letterSpacing: "0.06em",
            color: "var(--color-ink)",
          }}
        >
          OHCOSE
        </div>

        {/* ============== BODY (caller content) ============== */}
        <div className="pt-md">{children}</div>

        {/* ============== BOTTOM CHROME ============== */}
        <div
          className="absolute"
          style={{
            bottom: "1.25rem",
            left: "1.75rem",
            right: "1.75rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "end",
            gap: "1rem",
          }}
        >
          {/* Barcode bottom-left */}
          <div>
            <Barcode />
          </div>

          {/* Page number bottom-center */}
          <div className="text-center">
            <div
              className="font-mono font-bold tabular-nums"
              style={{
                color: "var(--color-oxblood)",
                fontSize: "1.1rem",
                letterSpacing: "0.04em",
              }}
            >
              {pageNum}
            </div>
            {secCode && (
              <div
                className="font-mono mt-xs uppercase"
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.15em",
                  color: "var(--color-ink-50)",
                }}
              >
                {secCode}
              </div>
            )}
          </div>

          {/* Document code stamp bottom-right */}
          <div className="text-right">
            <div
              className="font-mono uppercase mb-xs"
              style={{
                fontSize: "0.55rem",
                letterSpacing: "0.18em",
                color: "var(--color-ink-50)",
              }}
            >
              document code
            </div>
            <div className="flex gap-xs justify-end">
              {["OHCOSE-LR", "SCC", "GEN-C"].map((c) => (
                <span
                  key={c}
                  className="font-mono"
                  style={{
                    background: "var(--color-oxblood)",
                    color: "var(--color-paper)",
                    fontSize: "0.55rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "0.15rem 0.35rem",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
