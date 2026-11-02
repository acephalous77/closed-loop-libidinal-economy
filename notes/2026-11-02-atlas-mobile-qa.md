# 2026-11-02 — atlas mobile QA

Status: local QA complete. The atlas is live at `9b91d5d`; one CSS change is
uncommitted and production still serves `9b91d5d`.

## What was checked

The rebuilt atlas was served on port 4174 from `public/` at
`http://127.0.0.1:4174/psychopolitics-atlas/` and exercised in Chromium at
1440×900 and 390×844.

Views checked: intro, field, paths, path reader, index, domains, timeline,
matrix, command palette, node record, and mobile field/paths.

The final pass reported:

- no console errors, page errors, failed requests, or non-local origins;
- `654 nodes · 1139 relations` in the field; 654 index rows;
- 28 domains, 654 timeline marks, 62 matrix marks;
- self-hosted Source Serif 4 and IBM Plex Mono loaded;
- no horizontal document overflow at either viewport.

## Fixes in the landed atlas (`d199e1c`, `9b91d5d`)

- domain labels resized to screen-relative units, placed with collision
  avoidance, and checked against circles and other labels;
- field labels collision-checked and culled when they leave the stage;
- minimap dots scaled to remain visible at the full-field view;
- path and current-node labels protected while background labels recede;
- node pointer capture moved off the stage so a click does not clear the
  record it just opened;
- path reader survives its own re-render (detached-click guard).

## Uncommitted

`public/psychopolitics-atlas/atlas.css`: hide the status-bar evidence legend
below 560px. At 390px the three legend items previously clipped; the status
line now reads cleanly. Production still serves `9b91d5d`, so this fix is local
only until committed and deployed.

## Vision checks

`heretic-prose/local/vision-describe.sh` returned PASS on:

- desktop field;
- desktop path reader;
- desktop index;
- desktop domains;
- desktop timeline;
- desktop matrix;
- mobile field;
- mobile intro;
- mobile paths.

The mobile intro is taller than the viewport by design and scrolls inside the
overlay; the close control is fixed and visible.

## Open

- Commit and deploy the mobile status-bar CSS change when ruled.
- The atlas backup `public/psychopolitics-atlas/index-2026-11-02.html` remains
  untracked and is not part of the build.
