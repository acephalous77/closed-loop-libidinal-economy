# 2026-11-02 — atlas evidence triage A4

**Status:** applied conservatively on the instruction “continue”; node evidence
tiers only. No node/link counts, edges, dates, routes, sources, or source notes
changed; the evidence-tier counts change as below. No training, no publication,
nothing sends.

## Rule used

- **Documented** — the record carries a source note naming a dossier, filing,
  book, archive, or peer-reviewed work, and its claim is descriptive rather
  than an unresolved causal or efficacy assertion.
- **Contested** — the source supports the proximity, while the interpretive or
  efficacy claim is flagged or unproven.
- **Speculative** — no source support. None were added in this pass; ambiguous
  records were left untriaged rather than promoted.
- **Untriaged** — no source note, or the note is only a name list or a vague
  attribution.

## Result

Before: documented 501 · contested 35 · speculative 6 · untriaged 112.

After: documented 599 · contested 37 · speculative 6 · untriaged 12.

- 98 records with an explicit source note moved to **documented**.
- Two moved to **contested**:
  - `manosphere` — the recode is sourced, but the source is flagged and the
    normative reading is unproven.
  - `blackpill` — the Ramsden citation is real; the “verdict” is interpretive.
- Twelve remain **untriaged** because the record has no source note or only a
  name list:
  `christian`, `selye`, `nimh`, `space_cadets`, `hall`, `reagan`,
  `copypasta`, `fremont_smith`, `notestein`, `jdr3`, `draper_w`, `gaither`.
- No record was moved directly to **speculative**; the remaining untriaged
  records need source work (A3) before a tier can be assigned honestly.

The field and index read the new tiers from the same `NODES` array; the
evidence filters, key, and counts follow automatically.

## Verify

- `npm run build` — 282 static pages.
- `npm run verify` — atlas consistency now expects 599 / 37 / 6 / 12; links,
  contrast, and walkthrough pass.
- `npm run verify:atlas-mobile` — PASS.

## Deployed

`a4cb70e` — “Triage the atlas evidence, conservatively.” GitHub Actions
`41556417217` passed; `verify:atlas-prod` PASS. Production serves 599
documented / 37 contested / 6 speculative / 12 untriaged.

## Follow-up

2026-11-02 — A3 sourced 11 of these 12; see
`notes/2026-11-02-atlas-source-a3.md`. `copypasta` remains untriaged.
