---
name: autostimulus
description: The atelier of A. Selimović — one press, seven registers.
colors:
  ink: "#1a1612"
  ink-90: "#2b2520"
  ink-70: "#5a514a"
  ink-50: "#6f665b"
  paper: "#f4ede0"
  paper-95: "#ebe3d3"
  paper-85: "#ddd2bd"
  oxblood: "#7a1f1f"
  oxblood-dark: "#5e1818"
  fog: "#b8aea0"
  slate: "#3c4a52"
  moss: "#5a6b3c"
  formal-bg: "#ede6d7"
typography:
  display:
    fontFamily: "EB Garamond, Georgia, serif"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "EB Garamond, Georgia, serif"
    fontWeight: 400
    fontSize: "1.125rem"
    lineHeight: 1.55
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, monospace"
    fontWeight: 400
    fontSize: "0.781rem"
    letterSpacing: "0.2em"
spacing:
  xs: "0.75rem"
  sm: "1.5rem"
  md: "3rem"
  lg: "6rem"
  xl: "9rem"
  "2xl": "15rem"
components:
  rule-heading:
    textColor: "{colors.oxblood}"
    padding: "0 0 0.5rem"
  register-chip:
    textColor: "{colors.ink-70}"
    padding: "0.35rem 0.55rem"
  footnote-asterisk:
    textColor: "{colors.oxblood}"
  breadcrumb:
    textColor: "{colors.ink-70}"
---

# Design System: autostimulus

## Overview

**Creative North Star: "The Atelier of Registers"**

One press, seven registers. autostimulus is built like a small print shop: a
shared substrate of cream paper, warm off-black ink, and one oxblood accent —
and then each work pulls from its own drawer of papers, inks and faces, and
speaks in it without apology. The shell is austere because the works are not:
the atelier index is a xerox flyer, the framework is an academic octavo, the
agency manual is a federal form, the coloring book is a riso pamphlet, the
chair is a clinical brochure and a protest zine in the same envelope.
The frontpage is the press's console: a graphite channel register, one row
per work, session-aware — the machine's own face.

The system's discipline is in what it refuses: no third-party requests, no
analytics, no tracking, no engagement loops, no SaaS-aesthetic chrome. Every
font, script and image is served from the house. Motion is an authored moment,
never an ambient effect. The browser's own surfaces — selection, focus rings,
print — are themed as part of the design, not left at defaults.

**Key Characteristics:**

- One shell palette (cream/ink/oxblood) + per-work register token files as the
  only sanctioned overrides.
- Two faces carry the whole house: EB Garamond (the lived) and JetBrains Mono
  (the rendered). Works may add their own; the shell never uses a system face
  for display.
- Structural device: the hairline rule. Squares, rules, registers — no rounded
  SaaS chrome anywhere in the shell.
- Legibility is a floor, not a style choice: functional text ≥ 11px, body
  contrast ≥ 4.5:1 in every register, light or dark.
- **The machine layer** (2026-10-10, his lock): the atelier carries the
  Observing Machine — press sheets, plate marks, the door, and the
  reader's apparatus — the site as a declared instance of the loop it
  theorizes. Control remains the house's; each work's register owns how the
  machine looks inside it.

## Colors

The palette is warm paper and warm ink with a single deep accent, plus four
semantic colors reserved for the closed-loop rebuild's formal surfaces.

### Primary

- **Prussian** (#174a77, token name `oxblood`, historic): the house accent —
  links, active states, the stamped moments. Dark-mode variant #6ea6d4. Used
  sparingly; its rarity is the emphasis. *(2026-10-10, his word: the palette
  re-tuned — the cream ground + serif + red accent cluster read as the
  standard AI-interface theme; the house now runs porcelain/graphite/prussian.
  Token names are historic; the values are the register.)*

### Neutral

- **Ink** (#191b1e): display text and rules.
- **Ink-90 / Ink-70 / Ink-50** (#24272b / #4b5258 / #5c646b): the text
  hierarchy. Ink-50 is the AA floor for small muted text; do not ship values
  lighter than it for functional copy.
- **Paper / Paper-95 / Paper-85** (#f1f2ef / #e8eae4 / #d4d8d1): page,
  inset blocks, and hairline rules respectively.
- **Fog / Slate / Moss / Formal-bg** (#a9adb0 / #3c4a52 / #5a6b3c / #e7eae5):
  semantic colors for the closed-loop v2 surfaces, each carrying theoretical
  meaning across the apparatus and prose.

### Named Rules

**The Register Rule.** A work never edits the shell palette; it imports its
own token record (the chair's `_components/tokens.ts` is the model) and
overrides inside its own subtree. The registers on the shelf: chair —
MASTER sepia, BROCHURE clinical white/blueprint, ZINE riso black/cream,
ARCHIVE slate; OHCOSE — cool institutional white + form red (#9c1818);
Patriotic Times — ivory/ink + four chapter inks (red #b8222a, blue #1e4f8f,
green #1d7a45, ochre #8a6000); Manufacture — near-black + bone + arterial
(#ff2e00, reserved for the balance); Ouroboric — cool paper Anatomy / sodium
Apparatus; Psychopolitics — slate field guide.

**The AA Floor Rule.** Muted tiers are contrast-audited per register on their
own paper. The ink-50 family exists at exactly the 4.5:1 boundary on the
shell's papers in both schemes; work tokens follow the same bar (chair remaps
its faint tiers, ohcose darkened ink-50 to #6f6a60 for panel tones).

## Typography

**Display Font:** EB Garamond (with Georgia, serif) — self-hosted; Regular +
Italic preload, 500/700 load on first use.
**Body Font:** EB Garamond.
**Label/Mono Font:** JetBrains Mono (with ui-monospace, Menlo) — the
apparatus/measurement voice; self-hosted, Regular preload.
**Math Font:** Garamond Math — never preloaded; loads only where KaTeX runs.

**Character:** Garamond for everything the reader lives in; mono for
everything the machine says — numbers, codes, form fields, registers. Works
add display faces in their own registers (Anton for the zine/brochure
posters, Manrope for the clinical chrome) but the shell holds the two.

### Hierarchy

- **Display** (500, italic as the register allows, clamp to 4.7rem): work covers and mastheads.
- **Headline** (500, 1.94–2.81rem, lh 1.1–1.2): page titles.
- **Title** (500–700, 1.35–1.62rem, lh 1.35): section heads, serif.
- **Body** (400, 1.125rem, lh 1.55; measure 32rem ≈ 65–75ch): prose.
- **Label** (400–700, ≥0.7rem (11.2px), letter-spacing 0.13–0.25em,
  uppercase): nav, registers, footnotes, form fields.

### Named Rules

**The Floor Rule.** Functional text never falls below 11px (0.7rem);
body prose runs 1.125rem. Audit-tested: the house's micro-labels are the
place this drifts.

**The Two Voices Rule.** Serif is the lived, mono is the rendered. A string
speaks in mono when a machine filed it — codes, counts, keys, registers —
and in serif when a person did.

## Layout

A 1280px page container with two standing measures: 38rem (container-prose)
for centered prose, 32rem (measure) for the tightest column. The spacing
rhythm is 24px-based: 0.75 / 1.5 / 3 / 6 / 9 / 15rem. Works set their own
breakpoints but the observed practice is 640 / 700 / 1100 / 1300px — the
latter two for the flyer's three-column sheet and the essay's margin-note
gutter. Density is high by choice: registers, tables and dashboards pack;
prose breathes.

## Elevation & Depth

Flat by default. Depth is tonal (paper-95 insets, paper-85 hairlines) and
typographic (rule systems), not shadowed. Shadows appear only where a work
stages a physical object — the chair's zine spreads and brochure renders, the
manufacture receipt — and there they follow print logic (long soft offsets,
a single authored direction), never ambient UI glow. One authored exception
lives in the shell: the laboratory grid behind the apparatus's formal blocks
(a 24px hairline SVG pattern, theme-aware).

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. A shell component
that "needs" a drop shadow is a component in the wrong register.

**The Session Rule.** The machine measures a session in memory only —
no storage, no cookie, no network — and every readout ships with its
plain definition beside it. A quantity the instrument cannot honestly
measure does not ship; the disclosure names what it does.

## Shapes

Square. The radius inventory is one token: 1px on the keyboard focus ring.
Structure is drawn with 1px–3px rules — under headings, between register
rows, as section dividers in work ink. Borders are hairlines (paper-85 in the
shell, the local rule color in a register). The recurring silhouette is the
register plate: a bordered, letterspaced mono block that stamps information
(codes, states, editions). Clipping appears only as authored collage (the
zine's torn-edge masks) or designed scrollers (the blueprint pan frame).
Register-level radii exist where a genre demands them — the chair
brochure's pill CTAs, the psychopolitics atlas's vendor chrome — and stay
inside the register; the shell itself stays square.

## Components

### Links
- **Primary:** ink or ink-90; hover shifts to oxblood with a 100ms
  color/decoration transition. Underline offset 2–3px where underlined.
- **Quiet nav:** mono, uppercase, letterspaced; hover oxblood.

### Register plate (signature)
- **Style:** 1px border in the local rule color or the work ink; mono,
  uppercase, 0.68–0.74rem with 0.13–0.25em tracking; padding 0.3–0.55rem.
- **Use:** work stamps, edition lines, filing states, figure captions
  (with a hairline top rule and the number in the work's accent).

### Rule heading (signature)
- **Style:** flex baseline: the letter/number in oxblood or work accent,
  a hairline (1px paper-85) extending to the margin; body 0 0 0.5rem.
- **Use:** glossary letters, register sections, results scan-lines.

### Footnote
- **Style:** serif italic, ink-70, a leading asterisk in the work's chapter
  or accent ink; sits on the mount (plate pages, registers), not in the flow.

### Breadcrumb
- **Style:** mono, xs, uppercase, letterspacing 0.1–0.16em, ink-70;
  segments separated by " · "; the current segment in ink-90.

### Print
- **Style:** every work styles its own print face; the standing pattern is
  isolation (print only the artifact — the receipt, the plate, the atlas
  plate) on white with the interactive chrome suppressed.

### Press sheet (signature, the machine layer)
- **Style:** each work's tiny cover composed from its own register tokens
  (`lib/works.ts` `cover`: ground, ink, accent): year · riso mark · italic
  title · register kind. 64×84 in the shelf; 56×76 in the console's sheet
  column (the frontpage, rebuilt 2026-10-10 as the press's channel
  register on a graphite ground).

### Plate mark (signature, the machine layer)
- **Style:** the twelve mechanism glyphs one stroke weight on a 28-grid,
  at figure scale (56px in the index cards, 80px over a hairline on each
  plate page), drawn in on entry (DrawOnView, `pathLength={1}`), collapsed
  under reduced-motion.

### The closure figure
- **Style:** the argument's opening plate, 760×360, loop arc in oxblood,
  the stable point marked, the barred no-exogenous-channel stub; widened
  past the prose column at lg; drawn in on entry.

### The door & the shelf (signature, the machine layer)
- **Style:** "↑ autostimulus · the seven works" in each work's exit line,
  inheriting the register; the shelf overlay (shell palette: paper/ink/
  mono) opens with a scrim fade + sheet rise, carries press sheets, and
  tags visited works "arrived ×N" in oxblood.
- **Coverage:** every work's exit — closed-loop, chair, patriotic,
  manufacture, ouroboric, and OHCOSE (layout + colophon); the static atlas
  footer carries the plain line instead (no overlay machinery there).
  Manufacture's birth curtain covers all chrome until the reader is born;
  the interlude is authored, and the instrument emerges with the page.

### The reader's apparatus (signature, the machine layer)
- **Style:** the corner instrument, worn in the room's register via
  `registerFor(pathname)` (a work's cover tokens; house on the press,
  /reader, /thinkroom). Collapsed: one mono line. Expanded: five readouts,
  each with its plain definition, the honesty note, "file the offprint".
  Session-only by construction: in memory, no storage, no cookie, no
  network; the disclosure at /instrumentation names it, and the offprint
  at /reader (noindex) draws the reading path over the eight marks.

## Do's and Don'ts

### Do:

- **Do** keep each work's token file as its single color source; override
  in the register, never in the shell.
- **Do** hold the Floor Rule (11px functional, 1.125rem body) and the AA
  Floor Rule on every register's own paper, light and dark.
- **Do** draw structure with rules and registers before reaching for cards,
  shadows or radii.
- **Do** serve every asset from the house; a third-party request is a
  design failure on this site, not a shortcut.
- **Do** theme the browser's surfaces in a work's register: selection,
  focus rings, scrollbars where authored, print.
- **Do** verify interactive pages with a console capture, not only visuals:
  a silent script error is invisible in a screenshot.
- **Do** let the machine wear the room: `registerFor` resolves the work's
  cover tokens for the instrument, the sheets, and the door.
- **Do** keep the record honest and mortal: in-memory, tab-scoped, and
  stated where it ends (the panel, the offprint, the atlas footer).

### Don't:

- **Don't** introduce rounded, shadowed, or gradient SaaS chrome; the radius
  inventory is 1px and the floor is flat.
- **Don't** use system faces as a work's display voice (the Arial Black and
  Iowan stacks are retired); self-host or don't ship it.
- **Don't** let functional text live below 11px, ink-50 below its audited
  value, or muted tiers drift from their register's paper.
- **Don't** preload what the route doesn't paint: Garamond Math stays off
  every preload; secondary faces load on first use.
- **Don't** edit any work's published handle on the shell's tokens — the
  registers exist so the works stay themselves.
- **Don't** give the machine storage, a cookie, or a network call; it dies
  with the tab, and the disclosure says so.
- **Don't** show a readout without its definition, or a lit state without
  its count.

## Keepers registry

Detector findings deliberately kept, with the reason. A finding leaves this
list only when a fix lands — an entry here is a ruling, not a backlog.
Established across the 2026-10-11 program (Q1/Q2) and the 2026-10-12 Q3
pass; scores then stood at manufacture 14, chair/zine 48, atlas 1.

- **Authored overlap geometry** (chair/zine): the doubled cover title and
  heading word-marks (text-occlusion ×4, oversized h1, the ~19 box-overflow
  spans) are the print-plate offset effect; the walkthrough verifies there
  is no page-level horizontal overflow at 390/1440.
- **Torn edges and cuts** (chair/zine ×7): clip-path polygons, repeating
  gradient stripes — the xerox-collage register.
- **Xerox caps blocks** (chair/zine ×7): uppercase runs of 99–266 chars are
  the pamphlet's typographic texture.
- **11px microcopy** (chair/zine ×3; manufacture instrument labels): the
  Floor Rule admits 11px functional text; these are stamps and chips, not
  reading text.
- **The Photocopied ghost** (chair/zine): the 1.1:1 watermark is
  show-through texture, the medium's artifact, not content.
- **Marker scrawl leading** (chair/zine ×2): 1.2 on 18–22px Caveat margin
  notes is the hand-scrawl register.
- **Em-dash density** (site-wide advisories, 42–57): native voice, judged
  by density across a passage, never by count alone.
- **Numbered section labels** (manufacture ×4): the descent is a lifecycle
  sequence 01→05; the numbers carry it.
- **The drifting band** (manufacture): an authored motion moment;
  `prefers-reduced-motion` stops it in CSS, no JS.
- **Decorative field backgrounds** (manufacture codex grid, stripes): the
  instrument-panel register.
- **Line-length residuals on Newsreader** (manufacture ×3): the detector
  overcounts this face's narrow average glyph — the 52ch cap renders ≈ 62
  real characters, verified live at 577px.
- **content-hidden-at-rest** (atlas): collision-staged map labels and
  closed drawers are the atlas's interaction model; labels release on zoom,
  drawers on selection, and the disclosure line names the behavior.
