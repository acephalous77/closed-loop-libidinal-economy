"use client";

/**
 * A small "↓ print / save as PDF" affordance for long-form pages. On
 * click, triggers the browser's print dialog; the print stylesheet in
 * globals.css strips chrome and reflows the prose for clean printing.
 *
 * Sits in a discreet font-mono register; carries .print-hide so the
 * print stylesheet drops it from the printed output (no "print"
 * button on the printed page).
 *
 * Usage: <PrintButton label="↓ print / save as PDF" />
 */
export function PrintButton({
  label = "↓ print / save as PDF",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={
        "print-hide font-mono text-xs text-ink-50 hover:text-oxblood transition-colors duration-100 cursor-pointer " +
        className
      }
      aria-label="Print this page or save as PDF"
    >
      {label}
    </button>
  );
}
