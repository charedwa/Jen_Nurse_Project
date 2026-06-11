# Clinical Review Guide — Hospice Nurse Pocket Toolkit

**For:** Jen (hospice nurse / administrator) and any qualified clinical/admin reviewer
**From:** Toolkit build (Careberry)
**Goal:** Confirm the page is clinically accurate, agency-policy-aligned, and audit-safe **before**
it is published anywhere. Nothing launches without your sign-off.

The page content was taken **only** from the provided source PDF (`Prior_data/toolkit to print.pdf`,
"Hospice Clinician Pocket Tool Kit"). No outside clinical content, doses, or resources were added.
Every card on the page shows its **source PDF page(s)** so you can check it against the original.

---

## 1. How to view it (5 minutes)

Easiest, fully private, from a computer:

1. Download the repo (GitHub ▸ **Code ▸ Download ZIP**, branch
   `claude/session-1-roadmap-setup-tm59v4`) and unzip.
2. **Double-click `docs/index.html`** — it opens in your browser; search, tiles, and the
   expand/collapse cards all work. (Or open `hospice-nurse-toolkit/index.html`.)

On a phone, the cleanest way is a hosted preview link (Chad can set this up); the raw file by itself
won't run on an iPhone's file preview.

As you review, tap a card open and look at the **"Source: PDF p. X"** line at the bottom of each
card — that's the page to compare against.

---

## 2. Please focus on these first (highest clinical risk)

| Priority | What to check | Where on the page | PDF pages |
|---|---|---|---|
| 1 | **Emergency dosing quick reference** — drug, dose, route for each crisis | Emergency ▸ *Emergency Dosing Quick Reference* | 61–62 |
| 2 | **Comfort kits** (General / Cardiac / Seizure) — meds, doses, routes | Emergency ▸ *Comfort Kit* cards | 56–59 |
| 3 | **Opioid equianalgesic table** + cross-tolerance caution | Symptom Management ▸ *Pain Management* | 32–33 |
| 4 | **Symptom dosing** (dyspnea, secretions, agitation, N/V, constipation, fever, terminal bleed) | Symptom Management cards | 36–55 |
| 5 | **Eligibility / recert wording** by diagnosis | Eligibility & Recertification | 2–15 |
| 6 | **Charting phrases** (decline, imminent death, symptom mgmt) | Communication & Documentation | 65–68 |
| 7 | **Compliance / audit** (POC every 14 days, complete-order examples, hand hygiene) | Compliance & Best Practices | 73–81 |

---

## 3. Section-by-section checklist

Tick each once you've confirmed it matches the source and is safe to publish.

### Emergency Quick Reference (p. 53–64)
- [ ] Emergency dosing table — every dose/route correct for field use (p. 61–62)
- [ ] General Comfort Kit doses/routes (p. 56)
- [ ] Cardiac Comfort Kit — incl. Furosemide, Nitroglycerin, Oxygen (p. 57)
- [ ] Seizure Comfort Kit + caregiver instructions (p. 58–59)
- [ ] Seizure safety precautions (p. 59–60)
- [ ] Terminal bleed / massive hemorrhage response (p. 53–54)
- [ ] SC injection sites / needle gauge (p. 62–63)

### Eligibility & Recertification (p. 2–15)
- [ ] General decline criteria (p. 2–3)
- [ ] Dementia/FAST 7C, CHF/NYHA IV, COPD, Cancer, Stroke/Coma, ALS, HIV, Liver, Parkinson's
- [ ] Lab thresholds correct (albumin <2.5, EF <20%, pO₂ <55, CD4 <25, INR >1.5, etc.)

### Assessment Tools (p. 16–31)
- [ ] PPS and KPS tables (p. 29–31)
- [ ] Pain scales: NRS, Wong-Baker FACES, FLACC, PAINAD (p. 17–21)
- [ ] Fall Risk (Morse-based) point values + bands (p. 25–26)
- [ ] Braden risk bands (p. 26–28); ESAS (p. 23–24); TUG (p. 21–22); NYHA (p. 28); MUAC/BMI (p. 16–17)

### Symptom Management (p. 32–55)
- [ ] Pain (WHO ladder + equianalgesic table + 25–50% cross-tolerance reduction)
- [ ] Dyspnea, Secretions, Delirium/Agitation, N/V, Constipation, Fever, Skin, Terminal Bleed
- [ ] All bedside reassurance scripts read appropriately for families

### Communication & Documentation (p. 65–68)
- [ ] SBAR and SOAP examples
- [ ] Charting phrases (decline / imminent death / symptom management)

### IDG & Team Tools (p. 69–72)
- [ ] RN / Aide / SW / Chaplain focus lists; IDG case-review tips

### Compliance & Best Practices (p. 73–81)
- [ ] Hand hygiene; bag technique; infection control
- [ ] Aide POC compliance (RN-written, updated every 14 days, per CMS 418.76)
- [ ] Complete medication & wound order examples (42 CFR §418.56(c))
- [ ] Vital signs ranges; visit frequency grid

### Supplies, Family Conversation Starters, Sources
- [ ] Supply checklists (p. 63–64); family conversation starters (p. 66–67)
- [ ] Sources list matches the references printed in the PDF (no extras added)

---

## 4. Decisions only you can make (please answer these)

These are flagged in `REVIEW_NOTES.md`. They're the only spots where the original prototype added or
altered clinical meaning — handled conservatively, but your call:

1. **Opioid conversion calculator — currently EXCLUDED.** The old prototype had an interactive
   calculator that the PDF does not contain, and it had a math error (under-stated hydromorphone
   potency ~30×). We kept only the **static** equianalgesic table from the PDF.
   → *Do you want a calculator at all? If so, you'd need to supply/approve the exact conversion
   logic before it ships.*

2. **ESAS scoring — total-score "burden bands" EXCLUDED.** The PDF gives per-symptom bands (0–3/4–6/
   7–10) and says max 100; the prototype invented total-score bands out of 90. We kept only the
   PDF's wording.
   → *OK to leave as-is?*

3. **Complete medication-order example wording.** The PDF's example literally says *"End-stage
   metastatic **breast** cancer"* and *"Dr. **J. Smith, MD**."* We kept the PDF wording verbatim.
   → *Keep verbatim, or de-identify (e.g., "metastatic cancer," "Dr. [Name]")?*

4. **Anything to remove or restrict?** If any dose, eligibility statement, or phrase shouldn't be
   on a public-facing clinician tool for liability/agency reasons, mark it and we'll pull or reword it.

---

## 5. Sign-off

| Item | Reviewer | Date | OK / Changes needed |
|---|---|---|---|
| Emergency dosing & comfort kits | | | |
| Opioid table & symptom dosing | | | |
| Eligibility / recert wording | | | |
| Assessment tools & scoring | | | |
| Charting phrases | | | |
| Compliance / audit content | | | |
| Decisions in §4 answered | | | |
| **Approved for launch** | | | |

> Reminder: this toolkit is a **clinician quick-reference**, not medical advice for patients/families,
> and it does not replace agency policy, physician orders, the current MAR, individualized clinical
> judgment, or hospice medical direction. That framing appears on the page (home banner, emergency
> reminders, footer, and the "About" card).
