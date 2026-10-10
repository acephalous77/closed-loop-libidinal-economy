/**
 * LifecycleStrip — the eight-phase arc as one continuous rule, the
 * current phase inked. Rendered by phase hubs under the banner; reads
 * the Office's own schedule language.
 */
const PHASES = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"] as const;

export function LifecycleStrip({ current }: { current: number }) {
  const mono = "var(--font-jetbrains-mono), ui-monospace, Menlo, monospace";
  return (
    <div
      className="mt-lg mb-lg max-w-[var(--measure)] mx-auto"
      role="img"
      aria-label={`Lifecycle position: Phase ${current} of VIII`}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {PHASES.map((p, i) => {
          const n = i + 1;
          const here = n === current;
          const past = n < current;
          return (
            <div key={p} style={{ flex: n === 8 ? "0 0 auto" : 1, display: "flex", alignItems: "center" }}>
              <span
                aria-hidden
                style={{
                  fontFamily: mono,
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  color: here
                    ? "var(--color-oxblood)"
                    : past
                    ? "var(--color-ink-70)"
                    : "var(--color-ink-50)",
                  fontWeight: here ? 700 : 400,
                  flexShrink: 0,
                }}
              >
                {p}
              </span>
              {n < 8 && (
                <span
                  aria-hidden
                  style={{
                    flex: 1,
                    height: 1,
                    background: past ? "var(--color-ink-70)" : "var(--color-paper-85)",
                    margin: "0 0.55rem",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <div
        style={{
          marginTop: "0.4rem",
          fontFamily: mono,
          fontSize: "0.72rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-ink-50)",
        }}
      >
        the standard consumer-citizen lifecycle · phase {current} of VIII
      </div>
    </div>
  );
}
