"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { WORKS } from "@/lib/works";

const SERIF =
  'var(--font-eb-garamond-full), Georgia, "Times New Roman", serif';
const MONO =
  'var(--font-jetbrains-mono), ui-monospace, "SF Mono", Menlo, monospace';

/**
 * The atelier door — one shape at every work's exit (critique P2,
 * ruled 2026-10-10): the way out ("↑ autostimulus") beside the shelf
 * ("the seven works"), which opens the catalog as an overlay. The
 * door inherits the register's typography through `className` /
 * `style`; the overlay owns the shell palette, so stepping through
 * shows the atelier's face, not the work's.
 */
export function WorksDoor({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const [open, setOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    openerRef.current?.focus();
  };

  return (
    <span style={{ display: "inline" }}>
      <Link
        href="/"
        className={className}
        style={{ color: "inherit", textDecoration: "none", ...style }}
      >
        ↑ autostimulus
      </Link>
      <span aria-hidden="true" style={{ margin: "0 0.6em" }}>
        ·
      </span>
      <button
        ref={openerRef}
        type="button"
        className={"worksdoor-btn" + (className ? " " + className : "")}
        style={{
          color: "inherit",
          background: "none",
          border: 0,
          padding: 0,
          font: "inherit",
          letterSpacing: "inherit",
          textTransform: "inherit",
          cursor: "pointer",
          ...style,
        }}
        onClick={() => setOpen(true)}
      >
        the seven works
      </button>

      {open && (
        <div
          className="worksdoor-scrim"
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 300,
            background: "rgba(26, 22, 18, 0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            fontFamily: SERIF,
            fontStyle: "normal",
            fontWeight: 400,
            textTransform: "none",
            letterSpacing: "normal",
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="the seven works"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#f4ede0",
              color: "#1a1612",
              width: "100%",
              maxWidth: "46rem",
              maxHeight: "85vh",
              overflowY: "auto",
              border: "1px solid #ddd2bd",
              padding: "2rem 2rem 1.4rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: MONO,
                  fontSize: "0.78rem",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#5a514a",
                  margin: 0,
                }}
              >
                autostimulus — the shelf
              </p>
              <button
                ref={closeRef}
                type="button"
                aria-label="close"
                onClick={close}
                style={{
                  fontFamily: MONO,
                  fontSize: "1.1rem",
                  lineHeight: 1,
                  background: "none",
                  border: 0,
                  color: "#5a514a",
                  cursor: "pointer",
                  padding: "0.2rem 0.4rem",
                }}
              >
                ×
              </button>
            </div>
            <ol style={{ listStyle: "none", padding: 0, margin: "1.2rem 0 0" }}>
              {WORKS.map((w) => (
                <li key={w.href} style={{ borderTop: "1px solid #ddd2bd" }}>
                  <Link
                    href={w.href}
                    onClick={close}
                    style={{
                      display: "block",
                      padding: "0.9rem 0",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <span style={{ fontStyle: "italic", fontSize: "1.15rem" }}>
                      {w.title}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.98rem",
                        color: "#5a514a",
                        marginTop: "0.15rem",
                        lineHeight: 1.45,
                      }}
                    >
                      {w.plain}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontFamily: MONO,
                        fontSize: "0.7rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#6f665b",
                        marginTop: "0.4rem",
                      }}
                    >
                      {w.year}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </span>
  );
}
