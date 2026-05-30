import OuroboricAtlas from "./_components/OuroboricAtlas";

/**
 * The Ouroboric Condition — An Atlas of Capture.
 *
 * A self-contained, full-viewport interactive atlas. The default export of
 * Atlas.tsx is a client mount-gate: this server page renders it, and the
 * atlas itself boots only on the client (it relies on window, localStorage,
 * pointer events and requestAnimationFrame). Page-level metadata + fonts are
 * supplied by layout.tsx.
 */
export default function OuroboricConditionPage() {
  return <OuroboricAtlas />;
}
