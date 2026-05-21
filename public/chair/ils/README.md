# ILS images

Drop the four product images into this directory under the
filenames the brochure expects:

- `render-ring.jpg` — Image 2: the white-bg ring render. Used as the
  brochure hero (Fig. 1).

- `blueprint.jpg` — Image 1: the technical blueprint (paired
  cross-section + side perspective). Used as Fig. 2, full-bleed
  against blueprint-navy backdrop, between §01 and §02.

- `render-side.jpg` — Image 3: the side-view render with tubing.
  Available for use; not yet placed in the brochure flow.

- `costco.jpg` — Image 4: the Costco floor shot with the Kirkland
  Signature price card. Used as the brochure's closing section
  ("Or pick one up on the way home"), after the fitting CTA.

All four are referenced via plain `<img>` tags in
`/app/chair/the-system/page.tsx`. They degrade gracefully (no build
failure) if missing.
