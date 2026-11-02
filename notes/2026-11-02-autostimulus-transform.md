# 2026-11-02 — autostimulus, prose-first shell

**Ruling:** Adnan: the live site was “meh” — hard to read, odd fonts, clunky
graphics, and “all the listings and the named listings like you have in the
very title of the author page.” The press front is an essay, not a catalog.

## What changed

- **Home.** The seven-work shelf, numbered rows, cover thumbnails, cover card,
  `ChannelTally`, and boxed wordmark are gone. The page opens on one claim, a
  standing first paragraph, a margin quotation from the framework, and four
  prose paragraphs that link every work inside sentences.
- **Author.** The named-list kicker, “At a glance” definition list, Research
  roster, working-paper rows, selected-works rows, and numbered counters are
  gone. The page is one prose essay on graphite, with the three DOIs and ORCID
  inline.
- **Colophon.** The numbered series row and posture list are gone; the press,
  registers, posture, license, and sign are prose.
- **Type.** Source Serif 4 carries the shell's prose and display. IBM Plex Mono
  is reserved for DOI strings, codes, and instrument readouts. No uppercase
  tracking in the shell. The body is 20px/1.65 on a 36rem measure.
- **Graphics.** The shell keeps the graphite masthead, hairlines, and the margin
  quotation. Work covers no longer appear in navigation. The `WorksDoor` overlay
  is a plain “works” link back to the prose index.
- **Reader's apparatus.** The collapsed corner control is now a quiet serif
  line, not a boxed chip that read as an audio player.
- **OG cards.** The home card is a serif title and one prose line; the author
  card drops the field list.
- **Rules.** `── No listings in prose ──` is canonical in
  `~/.claude/skills/de-ai/SKILL.md`, mirrored in `~/.claude/CLAUDE.md` and
  `overseer/prompts/voice_draft.md`, with a `voice-check` triage row and
  voice-engine notes.

## Verification

- `npm run build` — 282 static pages, TypeScript clean.
- `npm run verify` — font-preload invariant, walkthrough, 248 same-origin links,
  404, atlas consistency and contrast all clean.
- Render check at 390 and 1440: no horizontal overflow; zero `ol`/`ul`/`dl` in
  the main of `/`, `/author`, `/colophon`.
- `deai.py --style-scan` on the rendered text: home 0 reliable tells (409 words),
  author 0 (433), colophon 0 (211).
- Local vision: home PASS; author PASS; mobile home flagged only the viewport
  crop at the bottom, not a layout break.
- `prose_check.py` — PASS (29 pass, 1 warn, 0 fail); the WARN is the known
  absent Cowork mirror.

## Deployed

`6b59899` is live. Production checks at 390 and 1440: `/`, `/author`, and
`/colophon` hold without horizontal overflow; each main has zero `ol`, `ul`,
and `dl`. The atlas production check also passes (CSP, counts, no beacon,
current assets). CI `41532846598` passed.

## Not touched

The atlas `atlas.js`/`index.html` changes in the worktree belong to the atlas
pass and are not part of this commit. `lib/works.ts` is read-only here.
