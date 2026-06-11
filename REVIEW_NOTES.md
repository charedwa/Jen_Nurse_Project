# REVIEW_NOTES.md — Prototype vs. PDF Cross-Check (Session 1)

This file lists every place where the HTML prototype (`Prior_data/luminary_pocket_toolkit.htm`)
**diverges from the source-of-truth PDF** (`Prior_data/toolkit to print.pdf`, "Hospice Clinician
Pocket Tool Kit", 82 pp). Per `CLAUDE.md`, nothing here is published in
`assets/hospice-toolkit-data.js` unless it is traceable to the PDF. Items flagged **EXCLUDED**
are not in the data file and need Chad/Jen approval before they could be added. Items flagged
**RESOLVED** were investigated and confirmed traceable to the PDF (so they are included).

Page numbers refer to the PDF.

---

## A. Content in the prototype that is NOT in the PDF — EXCLUDED pending review

### A1. Interactive Opioid Conversion Calculator — EXCLUDED
- **Prototype:** Home screen has a live "Opioid Conversion Calculator" (number input + drug
  dropdown + "Calculate OME" button) using hard-coded multiplication factors.
- **PDF:** Contains only a **static equianalgesic table** (pp. 32–33). There is no calculator,
  no OME multiplier logic, and no instruction to compute a running total.
- **Why excluded:** It generates dose math the PDF never provides — outside the "no new clinical
  content/doses" constraint. **It also contains a calculation error:** the dropdown lists
  *"Hydromorphone PO (÷7.5 → ×1)"* with factor `0.133`. To express PO hydromorphone as oral
  morphine equivalent the factor should be ~`4` (30 mg morphine ÷ 7.5 mg hydromorphone), not
  `0.133`. As written it under-reports hydromorphone potency by ~30×, which is a patient-safety
  concern.
- **In the data file instead:** the full static equianalgesic table from pp. 32–33 (card
  `sym-pain`), including the PDF's own caution to "reduce by 25–50% when switching opioids."
- **Decision needed:** Do you want a calculator at all? If yes, Jen should supply/approve the
  exact conversion logic and a corrected hydromorphone factor before it ships.

### A2. ESAS total-score interpretation bands ("/90", "Mild-Moderate / Moderate-High / High symptom burden") — EXCLUDED
- **Prototype:** ESAS widget sums 9 sliders to a total out of **90** and labels it
  `≤30 Mild-Moderate`, `≤60 Moderate-High`, else `High symptom burden`.
- **PDF (pp. 23–24):** Gives **per-symptom** bands only (0–3 mild, 4–6 moderate, 7–10 severe)
  and states the total score is **max 100** (9 core + optional 10th "Other"). The "/90" max and
  the three total-score burden bands are **not in the PDF**.
- **In the data file instead:** card `assess-esas` keeps only the PDF's per-symptom bands and the
  "max 100 / trends over time" wording.
- **Decision needed:** If a scored ESAS widget is wanted later, Jen should approve the total
  denominator and any burden bands.

### A3. Interactive scoring widgets (Fall Risk calculator, ESAS sliders, checkbox checklists) — UX ONLY, no new clinical content
- **Prototype:** Renders the Fall Risk tool, ESAS, and discipline checklists as tappable,
  self-scoring widgets.
- **PDF:** Presents these as printed tables/checklists (Fall Risk pp. 25–26; checklists pp. 69–71).
- **Status:** The *content* (criteria and point values) matches the PDF and is included as static
  tables/lists. The *interactivity* is a Session 2 UX decision, not a content issue — noted here
  only so Jen knows the live scoring behavior is a build choice, not something from the source.

---

## B. Items `PROJECT_PLAN.md` pre-flagged as "not yet traced" — RESOLVED (they ARE in the PDF)

`PROJECT_PLAN.md` listed these as "Known prototype content NOT yet traced to the PDF." On full
extraction they **are** present in the PDF, so they have been **included** (with source pages):

### B1. TUG (Timed Up and Go) scale — RESOLVED, traceable to pp. 21–22
The PDF has a full "TUG Test – Timed Up and Go" entry: what it measures, how to perform, the
scoring guide (`<10s` … `≥30s`), and a sample documentation line. Included as card `assess-tug`.

### B2. NYHA detail table — RESOLVED, traceable to p. 28
The PDF has "NYHA (New York Heart Association) Classification, Class I–IV" with the same
descriptions the prototype shows (Class IV = symptoms at rest, meets hospice CHF LCD). Included
as card `assess-nyha`.

> Recommend updating the "Known prototype content NOT yet traced" note in `PROJECT_PLAN.md` to
> drop TUG and NYHA, since both are confirmed in the source.

---

## C. Wording / de-identification differences — minor, flagged for awareness

These are not new clinical content, but the prototype altered the PDF text. The data file follows
the PDF wording except where noted; please confirm the de-identifications are acceptable.

| # | PDF (source) | Prototype | Handling in data file |
|---|---|---|---|
| C1 | SBAR example names "Mrs. Taylor" (p. 65) | "[Patient A]" | Used a neutral "[patient]" placeholder (avoids a sample PHI-style name; no clinical change). |
| C2 | Med-order example: "End-stage metastatic **breast** cancer"; "Dr. **J. Smith, MD**" (pp. 77–78) | "metastatic cancer"; "Dr. [Name], MD" | Kept the **PDF wording verbatim** (breast cancer; Dr. J. Smith, MD) since it is the source of truth and contains no real PHI. Flag if you'd prefer the de-identified version. |
| C3 | Wong-Baker FACES described by text only (p. 18); glyphs did not extract cleanly | Prototype substitutes emoji faces (😀🙂😐😟😢😭) | Data file uses the PDF's **text descriptions + 0–10 ratings**; no emoji relied on for clinical meaning. |

---

## D. Content the prototype OMITTED from the PDF — restored in the data file (informational)

The prototype's tables dropped some PDF rows. These were **added back** from the PDF (source of
truth); listed so Jen can confirm they should stay:

- **Equianalgesic table (pp. 32–33):** prototype omitted **Oxymorphone IV (1 mg)**,
  **Methadone PO (6–20 mg — variable, use with caution)**, and **Tapentadol PO (~100 mg, not
  commonly used in hospice)**. All three restored in card `sym-pain`.
- **Emergency "Terminal Secretions" row:** prototype appended "Scopolamine patch 1.5 mg q72h"
  to the emergency quick-reference table. In the PDF, scopolamine appears in the **secretions
  symptom card (p. 39)**, not the emergency dosing table (pp. 61–62). The data file keeps the
  emergency table exactly as p. 61–62 and keeps scopolamine in card `sym-secretions`.

---

## E. Branding — to be handled in Session 2 (build)

- The prototype is branded **"Luminary Hospice"** throughout (title, header, app icon, footer).
  Per `PROJECT_PLAN.md` confirmed decisions, all "Luminary Hospice" branding must be replaced
  with **Careberry**. The data file is brand-neutral (content only); rebranding happens when the
  page shell is built in Session 2.

---

## F. Summary for Jen (clinical reviewer)

Quick list of the only spots where the prototype added or altered clinical meaning:

1. **Opioid calculator** — invented dose math, contains a hydromorphone factor error. Excluded.
2. **ESAS "/90" burden bands** — not in the PDF. Excluded; per-symptom bands kept.
3. **Med-order example wording** (breast cancer / Dr. J. Smith) — kept verbatim per PDF; confirm
   you're OK leaving the sample prescriber name, or we de-identify it.

Everything else in the data file is a faithful reorganization of the PDF, with each card tagged by
its source page(s) for audit.
