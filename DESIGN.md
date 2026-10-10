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

## Colors

The palette is warm paper and warm ink with a single deep accent, plus four
semantic colors reserved for the closed-loop rebuild's formal surfaces.

### Primary

- **Oxblood** (#7a1f1f): the house accent — links, active states, the
  rubber-stamp moments. Dark-mode variant #b04a4a. Used sparingly; its rarity
  is the emphasis.

### Neutral

- **Ink** (#1a1612): display text and rules.
- **Ink-90 / Ink-70 / Ink-50** (#2b2520 / #5a514a / #6f665b): the text
  hierarchy. Ink-50 is the AA floor for small muted text; do not ship values
  lighter than it for functional copy.
- **Paper / Paper-95 / Paper-85** (#f4ede0 / #ebe3d3 / #ddd2bd): page,
  inset blocks, and hairline rules respectively.
- **Fog / Slate / Moss / Formal-bg** (#b8aea0 / #3c4a52 / #5a6b3c / #ede6d7):
  semantic colors for the closed-loop v2 surfaces, each carrying theoretical
  meaning across the apparatus and prose.

### Named Rules

**The Register Rule.** A work never edits the shell palette; it imports its
own token record (the chair's `_components/tokens.ts` is the model) and
overrides inside its own subtree. The registers on the shelf: chair —
MASTER sepia, BROCHURE clinical white/blueprint, ZINE riso black/cream,
ARCHIVE slate; OHCOSE — institutional grayscale + form red (#9c1818);
Patriotic Times — ivory/ink + four chapter inks (red #b8222a, blue #1e4f8f,
green #1d7a45, ochre #8a6000); Manufacture — near-black + bone + arterial
(#ff2e00, reserved for the balance); Ouroboric — paper Anatomy / sodium
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
