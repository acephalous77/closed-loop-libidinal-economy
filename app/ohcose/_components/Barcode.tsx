/**
 * Decorative barcode — does not encode anything. Visual reference to
 * the published-report's bottom-left chrome. Generated once from a
 * fixed seed so it's stable across pages (the same barcode appears
 * on every leaf, like a binder code) but irregular enough to read
 * as a real barcode rather than a placeholder pattern.
 */

// Pre-computed widths array (mix of thin/medium/thick bars and gaps),
// seeded once to look organic but stable.
const BARS = [
  2, 1, 3, 1, 1, 2, 1, 1, 3, 2, 1, 1, 2, 3, 1, 1, 2, 1, 3, 1, 2, 1, 1, 2,
  1, 3, 1, 1, 2, 1, 1, 3, 1, 2, 1, 1,
];

export function Barcode() {
  // Convert bar widths to x-positions + bar elements
  const bars: { x: number; w: number; isBar: boolean }[] = [];
  let x = 0;
  BARS.forEach((w, i) => {
    bars.push({ x, w, isBar: i % 2 === 0 });
    x += w;
  });
  const totalWidth = x;

  return (
    <svg
      viewBox={`0 0 ${totalWidth} 36`}
      role="img"
      aria-label="OHCOSE document barcode"
      style={{
        width: "8rem",
        height: "auto",
        display: "block",
      }}
    >
      {bars
        .filter((b) => b.isBar)
        .map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={0}
            width={b.w}
            height={28}
            fill="var(--color-ink)"
          />
        ))}
    </svg>
  );
}
