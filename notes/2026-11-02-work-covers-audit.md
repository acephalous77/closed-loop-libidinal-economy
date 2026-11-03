# Work covers — the first audit and repair pass

2026-11-02. Five covers were read at 390 and 1440, with local vision and a
DOM pass. The point was to keep five registers and repair only the furniture
that had drifted toward a dashboard.

## Verdicts

- **The Ouroboros Life System / chair.** The brochure register is right; the
  six-phase block was the dashboard remnant. The cards are now one continuous
  phase row: a single rule, six columns, one phase per column, no boxes. Mobile
  stacks the same sequence. The tier table and the product CTA stay; they are
  the brochure's form.
- **OHCOSE.** The agency-manual register is right. The cover now defines Gen-C
  as the cohort entering intake, carries a revision stamp (`Rev. 2031.05`), and
  labels the barcode `scan at intake`. The schedule of phases is the document;
  it stays a list.
- **Patriotic Times.** The book register is right. The apparent blank plates in
  the first audit were lazy-loaded images below the fold, not missing assets:
  all five chapter images report complete at full width. No code change.
- **The Ouroboric Condition.** The specimen-atlas register is right; vision
  passes it. No code change.
- **The Manufacture of the Subject.** The descent is the form; the masthead and
  closing credit rows were name lists. Both now read as prose. The six-station
  index stays; it is the lifecycle, not a card grid.

## Shared boundary

The floating reader's apparatus was breaking the fourth wall on every work
cover. It is now hidden on `/`, `/closed-loop`, `/chair`, `/ohcose`,
`/patriotic-times`, `/manufacture-of-the-subject`, and
`/ouroboric-condition`. It remains on the reading and apparatus surfaces.

## Verification

- `npm run build` — 282 static pages, TypeScript clean.
- `npm run verify` — walkthrough clean, internal-link crawl clean (248
  same-origin URLs), atlas consistency and contrast pass.
- DOM at 390 and 1440: no horizontal overflow; the apparatus is absent on all
  five covers.
- Local vision: chair PASS; OHCOSE PASS; Ouroboric PASS. The Manufacture
  screenshot opens on the birth overlay, so its verdict is a code and DOM
  check, not a vision claim.

## Deployed

`403a0e8` is live. Production at 390 and 1440: no horizontal overflow on the
five covers, and the reader's apparatus is absent from all of them. The
manufacture credit rows now read as prose; OHCOSE carries the Gen-C gloss, the
revision stamp, and the barcode label. CI `41551184808` passed. The atlas
session's `e6df810` landed after this pass; it is not part of the cover work.
