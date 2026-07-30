# TODO: finalize the validation thresholds — BLOCKS DEPLOY

The interview / paying-commitment numbers are **not settled**, and the
`combined-2027` branch is currently **inconsistent** between the two candidates.
This must be resolved before deploying, because these numbers are a business
rule (fast-track eligibility), not just copy.

## The two candidates

| | Interviews | Paying commitments | Where it came from |
|---|---|---|---|
| **A** | `15+` / `15-20` | `5+` / `5-10` | The shipped pricing overhaul (currently on `main`) |
| **B** | `20+` | `5–10` | Joey's VS Code edits, standardizing on one pair |

Candidate B is arguably the better of the two: it uses a single consistent pair
everywhere, whereas A says `15+` in the fast-track rule but `15-20` in the
checklist, and `5+` in the rule but `5-10` in the checklist.

## Current state of the branch — MIXED

| Location | Currently says | Candidate |
|---|---|---|
| `FAQData.tsx:14` — Q1 fast-track rule | `15+` interviews, `5+` commitments | A |
| `FAQData.tsx:27` — Q3 checklist | `15-20` people, `5-10` committed | A |
| `Process.tsx:33` — Real Customer Evidence step | `15-20` interviews, `5-10` commitments | A |
| `Process.tsx:130` — fast-track branch callout | `15+` interviews, `5+` commitments | A |
| `WhatIDo.tsx:108` — "Already validated?" note | `15+` interviews, `5+` commitments | A |
| `GetStartedModal.tsx:234` — qualifier radio label | `20+` interviews, `5–10` commitments | **B** |
| `GetStartedModal.tsx:240` — qualifier radio label | `20+` interviews | **B** |
| `src/assets/visuals/validation-checklist.svg:20` | `20+` people | **B** |
| `src/assets/visuals/validation-checklist.svg:23` | `5–10` people committed | **B** |
| `src/assets/visuals/process-timeline.svg:30` | `5–10` | **B** |

Anything not listed here does not carry a threshold number.

## Two things to watch when applying the decision

1. **The SVGs have the numbers baked into `<text>` nodes.** A threshold change is
   not a TSX-only edit — `validation-checklist.svg` and `process-timeline.svg`
   must be edited too, or the graphics will contradict the prose sitting next to
   them. This is the most likely thing to be missed.
2. **Use one pair, not two.** Whichever candidate wins, the fast-track rule and
   the checklist should quote the *same* numbers. The current A-side split
   (`15+` rule vs `15-20` checklist) reads like an inconsistency to a founder
   doing the maths, and it is the reason Joey standardized in the first place.

## Not a threshold

`FAQData.tsx:62` contains `20+ hours/week` — that is a time commitment, not an
interview count. Leave it alone.
