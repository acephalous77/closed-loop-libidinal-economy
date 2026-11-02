"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { WORKS } from "@/lib/works";
import { WorkCover } from "@/components/navigation/WorkCover";
import { apparatus } from "@/components/reader-apparatus/engine";

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
  const scrimRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);
  const snap = useSyncExternalStore(
    apparatus.subscribe,
    apparatus.getSnapshot,
    apparatus.getSnapshot
  );
  const arrivals = new Map<string, number>();
  for (const a of snap.arrivals) {
    arrivals.set(a.key, (arrivals.get(a.key) ?? 0) + 1);
  }

  useEffect(() => {
    if (!open) return;

    const scrim = scrimRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // The dialog is portalled to <body>, so every other body child can be
    // made inert while it is open. This removes the background from the
    // tab order and from the accessibility tree, not just visually.
    const siblings = Array.from(document.body.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement && el !== scrim
    );
    const previousInert = siblings.map((el) => el.inert);
    siblings.forEach((el) => {
      el.inert = true;
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !scrim) return;

      const focusables = Array.from(
        scrim.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.getClientRects().length > 0);

      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      siblings.forEach((el, i) => {
        el.inert = previousInert[i];
      });
    };
  }, [open]);

  useEffect(() => {
    if (!open && wasOpen.current) {
      openerRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  const close = () => setOpen(false);

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

      {open && typeof document !== "undefined" && createPortal(
        <div
          ref={scrimRef}
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
              background: "#f1f2ef",
              color: "#191b1e",
              width: "100%",
              maxWidth: "46rem",
              maxHeight: "85vh",
              overflowY: "auto",
              border: "1px solid #d4d8d1",
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
                  fontSize: "0.8125rem",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#4b5258",
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
                  color: "#4b5258",
                  cursor: "pointer",
                  padding: "0.2rem 0.4rem",
                }}
              >
                ×
              </button>
            </div>
            <ol style={{ listStyle: "none", padding: 0, margin: "1.2rem 0 0" }}>
              {WORKS.map((w) => (
                <li key={w.href} style={{ borderTop: "1px solid #d4d8d1" }}>
                  <Link
                    href={w.href}
                    onClick={close}
                    style={{
                      display: "flex",
                      gap: "1.1rem",
                      alignItems: "center",
                      padding: "0.9rem 0",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <WorkCover work={w} w={64} h={84} />
                    <span style={{ display: "block" }}>
                      <span
                        style={{ fontStyle: "italic", fontSize: "1.15rem" }}
                      >
                        {w.title}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: "0.98rem",
                          color: "#4b5258",
                          marginTop: "0.15rem",
                          lineHeight: 1.45,
                        }}
                      >
                        {w.plain}
                      </span>
                    </span>
                    {arrivals.get(w.href) ? (
                      <span
                        style={{
                          marginLeft: "auto",
                          flexShrink: 0,
                          fontFamily: MONO,
                          fontSize: "0.8125rem",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "#174a77",
                        }}
                      >
                        arrived ×{arrivals.get(w.href)}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>,
        document.body
      )}
    </span>
  );
}
