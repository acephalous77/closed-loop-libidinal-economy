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

## Closed-loop cover, same day

`141d05d` and `0689aa8` carry the prose treatment into the framework's front
matter. The three paths now run in a paragraph under “where to begin”; the
byline is the author alone; the first-version heading is serif italic; the
floating apparatus is removed from the cover. Production at 390 and 1440: zero
`ol`/`ul`/`dl` in the main, no horizontal overflow, no instrument. `deai.py`
reports 0 reliable tells (229 words); local vision PASS. CI `41539826741`
passed.

## Voice pass, after the shell

The rendered shell prose was rescanned and then rewritten. The home no longer
walks the works one by one; it opens on the feed, the school record, and the
chair, and lets the works arrive through the argument. The author page opens on
the instruments that keep a file on a person; the colophon no longer re-lists
the corpus. The short “The” opener chain is gone.

- `deai.py --style-scan` — home 0 reliable tells (372 words), author 0 (394),
  colophon 0 (194).
- `voice-engine/run.py --scan` — 0 triage candidates, no density thresholds
  breached; the engine reports the prose within tolerance.
- `architecture.py --register A` — review only: mean 23.5 / 21.7 / 20.4 words,
  short sentences deliberate, staccato runs 0. The cadence tool notes the short
  sentence share; the voice wants those beats.
- `npm run build` — 282 pages, TypeScript clean; `npm run verify` clean.

The work-cover prose was scanned across all five covers and the closed-loop
front matter: 0 reliable tells throughout. The work registers were not
rewritten.

## The argument reading surface

The full v2 argument was extracted and scanned: 0 reliable tells across 1,987
words. Its prose was not rewritten. The top eight-item table of contents was
navigation, but it opened the essay as a list; it is replaced by one orienting
sentence, and the eight numbered section headings carry the sequence. The intro
is now set at 20px/1.65, and the line-broken `engagement- monetization` was
rejoined. The bottom apparatus links remain as navigation. Local vision PASS;
390 and 1440 hold without overflow.

## The argument, fresh eyes

The reading-surface pass left the prose as it was; this pass rewrites the page.
Every paragraph was reread and line-edited against its claims: the theorem
labels, citations, links, and mathematics are unchanged. Flat closes and
repeated sentence openers were replaced with longer turns; the two short
sentences that carry a designed contrast stay, and the closing “Read the prose
alone / read the apparatus alone / read both” triad stays. The eyebrow no longer
runs a middot row: “Eight moves through the framework, version 2, 2026.”

- Final rendered prose: 1,926 words, 120 sentences; the main holds one
  navigation list at the bottom.
- `deai.py --style-scan` — 0 reliable tells; 12 cadence flags (texture, not
  scored): 12 flat closes, 2 tricolons, and the remaining short-copula beats.
- `voice-engine/run.py --scan` — 0 triage candidates. Its remaining opener
  alert is the anaphoric “Read” triad; the coordination-colon alerts clear.
- `architecture.py --register A` — review only: mean 14.1 words, short-sentence
  share 27.5 %, staccato 3.48/100 on the rendered paragraph text. The technical
  definitions carry the short beats; the page was not flattened to raise the
  mean.
- `npm run build` — 282 static pages, TypeScript clean; `npm run verify` clean;
  390/1440 overflow 0.

