# 2026-11-02 — atlas field v2 (engraved map)

**Approval:** “fine go” after the phase-1 review found the field visually
unchanged. This is a field-only pass; data, counts, routes, evidence tiers,
and the mobile text alternatives are unchanged.

## What changed

- **Graticule.** A faint two-weight grid sits behind the territories, with
  major and minor lines in world coordinates.
- **Territory plates.** Each of the 28 clusters now has three layers: a low
  tinted plate, an inset contour, and a dashed outer contour. Labels carry a
  stable `T01–T28` code before the territory name.
- **Curved arcs.** Every relation is a quadratic path rather than a straight
  line. Bend direction follows the relation family (money / knowledge /
  transfer one way, power / conflict the other) and magnitude is deterministic
  from the pair. Relation family still supplies the stroke colour; evidence
  dashes still apply.
- **Engraved nodes.** Each mark now carries a small core dot inside the shape
  and its evidence ring outside it. Hover/selection halos remain.
- **Cartouche.** A map-style title block at the upper left: plate number,
  field title, 654 / 1,139 / 1903–2026, and the territory/ties key. It is
  hidden below 980px where the status bar carries the counts.
- **Vignette.** A radial stage falloff focuses the centre; no ambient motion
  was added. Motion remains interaction-only (focus, path, pan).

## Verification

- `npm run verify:atlas-mobile` — PASS at 390px; 84 territory plate paths,
  1,139 relation path elements, graticule present, cartouche hidden, no
  overflow, no console errors.
- `node scripts/verify/atlas-consistency.mjs` — PASS; field seams and cartouche
  markup/CSS checked.
- Local vision at 1440: PASS — the curving arcs read as a network; territories,
  labels, cartouche and vignette hold; no clipping.
- Local vision at 390: PASS — arcs and territory contours remain legible; the
  cartouche is correctly absent.
- Local vision on a selected node at 1440: PASS — focus dims the field while
  the selected node, evidence ring, ties, curved arcs and dossier stay legible.

## Open

A4 (triage the 112 untriaged nodes) remains the next evidence lane. The
authorship-restoration workstream remains proposed only.

- `npm run build` — 282 static pages, TypeScript clean.
- `npm run verify` — font-preload invariant, walkthrough, 249 same-origin links,
  404, atlas consistency and contrast all PASS.

## Deployed

`57c0b62` — “Give the atlas field the engraved-map treatment.” GitHub Actions
`41526572765` passed. Production `verify:atlas-prod` PASS; the production
browser sees 84 territory paths, 1,139 relation paths, the cartouche with
654 / 1,139 / 1903–2026, no external requests, and no console errors.
