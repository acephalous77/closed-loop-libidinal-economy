/**
 * IntakeHeader — the phase hub read as an Office intake form:
 * double-fielded header plate in the agency's document register
 * (Form OHCOSE-P{N}/S, the schedule-of-sub-protocols series).
 */

interface IntakeHeaderProps {
  phase: number;
  roman: string;
  name: string;
  span: string;
  protocols: number;
}

export function IntakeHeader({ phase, roman, name, span, protocols }: IntakeHeaderProps) {
  const mono = "var(--font-jetbrains-mono), ui-monospace, Menlo, monospace";
  const label: React.CSSProperties = {
    fontFamily: mono,
    fontSize: "0.7rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--color-ink-50)",
  };
  const pair: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "baseline",
    gap: "0.5rem",
    minWidth: 0,
    flexWrap: "wrap",
  };
  const value: React.CSSProperties = {
    fontFamily: mono,
    fontSize: "0.78rem",
    letterSpacing: "0.05em",
    color: "var(--color-ink)",
  };
  return (
    <div
      className="mt-lg max-w-[var(--measure)] mx-auto"
      style={{ border: "1px solid var(--color-ink)", padding: "0.9rem 1.1rem 1rem" }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: "1.5rem",
          rowGap: "0.5rem",
          paddingBottom: "0.65rem",
          borderBottom: "1px solid var(--color-paper-85)",
        }}
      >
        <span style={pair}>
          <span style={label}>Form</span>
          <span style={value}>OHCOSE-P{phase}/S</span>
        </span>
        <span style={pair}>
          <span style={label}>Edition</span>
          <span style={value}>2025 · rev. 11</span>
        </span>
        <span style={pair}>
          <span style={label}>Status</span>
          <span style={{ ...value, color: "var(--color-oxblood)" }}>open · filing mandatory</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: "1.5rem",
          rowGap: "0.5rem",
          paddingTop: "0.65rem",
        }}
      >
        <span style={pair}>
          <span style={label}>Subject</span>
          <span style={value}>Phase {roman} — {name}</span>
        </span>
        <span style={pair}>
          <span style={label}>Span</span>
          <span style={value}>{span}</span>
        </span>
        <span style={pair}>
          <span style={label}>Schedule</span>
          <span style={value}>{protocols} sub-protocols · series {phase}.1–{phase}.{protocols}</span>
        </span>
      </div>
    </div>
  );
}
