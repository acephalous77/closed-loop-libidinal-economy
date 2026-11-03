# Atlas — colour, presentation, explorability

2026-11-02. The field-v2 map was reading as a rainbow with several colour
channels competing: 28 territory hues, type fills, evidence rings, and edge
families. This pass gives each channel one job.

## Color system

- **Territory / zone** — the 28 domains now inherit **nine curated macro-zone
  hues** (`ZONES`), not 28 independent hues. The field plates, minimap,
  domains graph, timeline, matrix, node fills, rail dots, and cartouche strip
  all use the same nine.
- **Node kind** — shape does the work. The type palette is gone from the
  field; the intro and kind filters show the same paper-filled glyphs.
- **Evidence** — the ring keeps the four tiers and their dash patterns.
- **Relation family** — edges keep the five family colours.
- **Labels** — node and territory labels are paper, with a screen-constant
  dark halo; territory labels no longer take a zone hue.

The intro now carries a real colour key: nine zone swatches and five edge
family lines, above the node/evidence key. The cartouche carries a nine-band
zone strip and says `9 MACRO-ZONES · T01–T28 · TIES BY FAMILY`.

## Explorability

- Hovering a node now dims the rest of the edge field and foregrounds its
  immediate ties (`0.82` incident, `0.06` other); the resting field is dimmer
  (`0.26` / `0.40` hub) so structure, labels, and territory read first.
- The tooltip carries the node kind, evidence tier, degree, and the click
  instruction; it is width/height-clamped inside the stage instead of clipping
  into the rail.
- `?` in the masthead opens the field guide; `?` also works as a shortcut.
- The status hint names click, double-click, and the key.
- On screens at or below `700px`, the atlas opens on the **Index**; the
  intro CTA says `Enter the index`. `Field`, `Paths`, and the other views stay
  one tap away.
- The `1180px` masthead breakpoint keeps the title on its own row and puts
  tools and modes on one line; the `1024px` header is no longer a tall stack.

## Other fixes

- Node shapes, rings, halos, grid, hulls, edges, and path-reader strokes use
  `vector-effect: non-scaling-stroke`.
- Node and territory halos scale inversely with the viewport.
- Minimap is `196×126`, with zone hulls beneath the dots and a tinted/stroked
  viewport.
- Domains view: stronger ties, bigger count type, wider label gaps, and
  collision fallback; 26 labels remain visible without overlaps at 1440px.
- Mobile index cards gain an arrow affordance and larger metadata type.

## Verification

- `npm run build` — 282 pages.
- `npm run verify` — font preloads, walkthrough, 248 links, atlas consistency,
  contrast PASS.
- `npm run verify:atlas-mobile` — PASS, including the new index default.
- Local vision: resting field PASS; hover/tooltip PASS; intro colour key PASS.
- Production verification follows the deploy.
