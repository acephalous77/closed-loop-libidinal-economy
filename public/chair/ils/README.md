# ILS images

Drop these six product images into this directory under the filenames the brochure and essay expect:

## Product photography (referenced in `/chair/the-system`)

- `render-ring.jpg` — the white-bg ring render. Used as the brochure hero (Fig. 1).
- `render-side.jpg` — the side-view render with tubing. Held in reserve.
- `blueprint.jpg` — the technical blueprint (paired cross-section + side perspective). Used as the brochure's full-bleed schematic plate.
- `costco.jpg` — the Costco floor shot with the Kirkland Signature price card. Used as the brochure's closing distribution-channel tile.

## Occupant gallery (referenced in `/chair/the-system`)

- `occupant-sophia.jpg` — first portrait for the occupants-in-residence gallery.
- `occupant-research.jpg` — second portrait for the occupants-in-residence gallery.

All six are referenced via plain `<img>` tags (not `next/image`) so the layout degrades gracefully if any file is missing — the page still renders, just with broken-image icons until the files land.
