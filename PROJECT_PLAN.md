# PROJECT_PLAN.md — Hospice Nurse Pocket Toolkit Build Roadmap

This file is the working roadmap for building the Careberry **Hospice Nurse Pocket Toolkit**
page. It is designed to be completed across three Claude Code sessions. Each session should
read `CLAUDE.md` (project constraints) and this file, do its session's work, check off
items below, commit, and push.

## Confirmed decisions (Chad, June 2026)

- **Branding:** Careberry. Remove all "Luminary Hospice" branding from anything derived
  from the prototype.
- **Hosting:** Careberry.org hosting method is not yet decided. Build the page as a fully
  self-contained, portable static HTML page (no framework, no build step) so it can be
  deployed to any host or subdomain later.
- **Source of truth:** `Prior_data/toolkit to print.pdf` (82 pages; text extracts cleanly
  with pypdf; page 82 is blank). `Prior_data/luminary_pocket_toolkit.htm` is layout
  inspiration only — its content must be verified against the PDF before use.

## Source map (verified)

PDF structure:

| PDF section | Pages | Contents |
|---|---|---|
| 1. Eligibility & Recertification | 2–15 | General decline criteria; diagnosis-specific: dementia (FAST), CHF (NYHA), COPD, cancer, stroke, ALS, HIV, liver, Parkinson's |
| 2. Assessment Tools | 16–31 | MAC, BMI, Wong-Baker FACES, FLACC, PAINAD, ESAS, Fall Risk, Braden, PPS, KPS |
| 3. Symptom Management | 32–64 | Pain (equianalgesic table p33), dyspnea, secretions, delirium/terminal agitation, nausea, constipation, fever, imminent death, comfort kits A/B/C (p56–58), seizure, emergency dosing quick reference (p61–62), SC injection sites/supplies |
| 4. Communication & Documentation | 65–68 | SBAR, SOAP, family phrases, decline/imminent-death charting language |
| 5. IDG & Interdisciplinary Tools | 69–72 | RN/aide/SW focus areas, IDG presentation tips |
| 6. Field Compliance & Best Practices | 73–81 | Hand hygiene, bag technique, POC requirements, complete med-order example (42 CFR), vital signs table, visit frequency table |

The page itself uses the 10-section architecture from CLAUDE.md (emergency reference,
supplies, and family conversation starters are promoted to their own top-level sections).

Known prototype content NOT yet traced to the PDF (exclude until approved, list in
`REVIEW_NOTES.md` during Session 1): interactive opioid conversion calculator (PDF has a
static equianalgesic table only), TUG (Timed Up and Go) scale, NYHA detail table, and any
dose values that differ from the PDF.

---

## Session 1 — Content extraction & verification

- [ ] Extract all PDF text (pypdf). Flag any pages where extraction is garbled for manual
      transcription.
- [ ] Build `assets/hospice-toolkit-data.js`: one structured data file, 10 sections →
      cards with `id`, `title`, `tags` (search synonyms of existing terms only),
      `contentHtml`, and `sourcePages` (PDF page numbers for traceability).
- [ ] Content rules: PDF wording preserved; reorganization/heading-shortening allowed;
      NO new clinical content, doses, links, or resources.
- [ ] Cross-check every prototype card against the PDF. Write `REVIEW_NOTES.md` listing
      every item that is not traceable, plus any dose discrepancies, for Chad/Jen review.
- [ ] Commit and push.

## Session 2 — Build the mobile page

- [ ] Create `hospice-nurse-toolkit/index.html`, `assets/hospice-toolkit.css`,
      `assets/hospice-toolkit.js`. Static, no framework, system font stack.
- [ ] Header: Careberry branding, title "Hospice Nurse Pocket Toolkit", subtitle
      "Mobile quick reference for hospice field care", sticky on scroll.
- [ ] Safety note near top: "For clinician reference only. Follow agency policy,
      physician orders, current MAR, and clinical judgment." Repeat in emergency and
      medication sections.
- [ ] Working instant client-side search: indexes section names, card titles, tags, body
      text; shows section + card + preview; tap to jump; match highlighting; clear button.
- [ ] Home grid of 10 quick-access tiles; emergency section styled with muted red and
      easiest to reach.
- [ ] Accordion cards: ARIA (`aria-expanded`, `aria-controls`), keyboard accessible,
      ≥44px tap targets.
- [ ] Tables mobile-safe (stacked cards or horizontal scroll with visible cue).
- [ ] SEO: title "Hospice Nurse Pocket Toolkit | Careberry" + meta description from
      CLAUDE.md. No PHI fields anywhere.
- [ ] Render content ONLY from `assets/hospice-toolkit-data.js`. Items in
      `REVIEW_NOTES.md` stay excluded unless Chad has approved them.
- [ ] Commit and push.

## Session 3 — QA & launch prep

- [ ] Internal review checklist (CLAUDE.md Step 6): test at 360px and 390px widths;
      search spot checks ("dyspnea", "morphine", "FAST", "SBAR", "recert", "comfort kit");
      accordions open/close; disclaimer visible; meta tags present.
- [ ] Traceability audit: every card's `sourcePages` checked against the PDF.
- [ ] Write `CLINICAL_REVIEW_GUIDE.md` for Jen: doses/equianalgesic table, eligibility
      wording, emergency quick reference, charting phrases, anything to remove or restrict.
- [ ] Deployment prep once Chad identifies the Careberry.org host (page is host-agnostic;
      options: existing host upload/embed, GitHub Pages on a subdomain, Netlify/Vercel).
- [ ] Do NOT publish or open a PR without Chad's go-ahead. Clinical review by Jen is
      required before launch.

---

## Status log

- 2026-06-11 — Repo organized: source documents moved to `Prior_data/`, roadmap created.
