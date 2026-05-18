/**
 * Numbered section heading — "1.1.1 — Window of Enrollment" style.
 * Red mono code + serif title + single-rule underline.
 *
 * Shared by every sub-protocol page across all Phases. Previously
 * defined inline in each page; centralized here so size adjustments
 * propagate.
 */

export function SectionHead({ code, title }: { code: string; title: string }) {
  return (
    <div
      className="mb-md flex items-baseline gap-sm pb-xs"
      style={{ borderBottom: "1px solid var(--color-ink)" }}
    >
      <span
        className="font-mono font-bold tabular-nums"
        style={{ fontSize: "1.05rem", color: "var(--color-oxblood)" }}
      >
        {code}
      </span>
      <span
        className="font-serif font-bold"
        style={{ fontSize: "1.25rem", color: "var(--color-ink)", letterSpacing: "0.02em" }}
      >
        {title}
      </span>
    </div>
  );
}
