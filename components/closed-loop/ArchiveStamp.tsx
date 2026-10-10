import Link from "next/link";

/**
 * The 2026 archive register — marks the v1 dynamics subtree
 * (noindexed, kept on file) and points to the v2 framework.
 * The mathematics carries its own terse first-version stamp; this
 * covers the dynamics index and its mechanism pages.
 */
export function ArchiveStamp({
  kind = "dynamics",
}: {
  kind?: "dynamics" | "mathematics";
}) {
  return (
    <div className="mb-md">
      <p className="inline-block border border-paper-85 px-xs py-[0.35rem] font-mono text-xs uppercase tracking-[0.18em] text-ink-70">
        2026 archive · v1
      </p>
      <p className="mt-xs font-serif italic text-sm text-ink-70 max-w-[38rem] leading-snug">
        The first {kind === "dynamics" ? "dynamics" : "mathematics"}, kept on
        file. The current framework is v2:{" "}
        <Link
          href="/closed-loop/v2-argument"
          className="underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
        >
          the argument
        </Link>
        {" · "}
        <Link
          href="/closed-loop/the-apparatus"
          className="underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
        >
          the apparatus
        </Link>
        {" · "}
        <Link
          href="/closed-loop/v2-dynamics"
          className="underline decoration-ink-50 underline-offset-2 hover:text-oxblood hover:decoration-oxblood transition-colors duration-100"
        >
          the dynamics
        </Link>
        .
      </p>
    </div>
  );
}
