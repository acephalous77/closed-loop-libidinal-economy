import Link from "next/link";
import type { CSSProperties } from "react";

/**
 * The atelier door at a work's exit: the way back to the press and the
 * prose index. The shelf overlay is retired; the shell is a press essay,
 * not a catalog.
 */
export function WorksDoor({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
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
      <Link
        href="/#works"
        className={className}
        style={{ color: "inherit", textDecoration: "none", ...style }}
      >
        works
      </Link>
    </span>
  );
}
