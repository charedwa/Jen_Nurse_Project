# Deployment Prep — Hospice Nurse Pocket Toolkit

Status: **prep only.** Do not publish to Careberry.org or open a PR until (a) Chad gives the
go-ahead and (b) Jen has completed the clinical review (`CLINICAL_REVIEW_GUIDE.md`).

The page is intentionally **host-agnostic**: static HTML/CSS/JS, no framework, no build step, no
server code, no database, no external requests. It will run on essentially any host.

---

## What to deploy

The canonical, multi-file version (preferred for the real site):

```
hospice-nurse-toolkit/index.html      → the page (references ../assets/…)
assets/hospice-toolkit.css            → styles
assets/hospice-toolkit.js             → app logic (render + search)
assets/hospice-toolkit-data.js        → all toolkit content (source of truth for the page)
```

Recommended public URL slug: **`/hospice-nurse-toolkit`** (per CLAUDE.md).

There is also a **single-file** build at `docs/index.html` (CSS+JS+data inlined). It's for quick
previews and for GitHub Pages from the `/docs` folder. It is generated from the four files above —
**don't hand-edit it**; regenerate it after any content change (see "Regenerating" below).

> Note on paths: `hospice-nurse-toolkit/index.html` links to `../assets/…`, so keep the
> `hospice-nurse-toolkit/` and `assets/` folders as siblings. If the host serves the page at a
> different depth, adjust the two `../assets/` references or use the single-file `docs/index.html`.

---

## Options (pick once the Careberry.org host is known)

### A. Upload to the existing Careberry.org host
- Copy `hospice-nurse-toolkit/` and `assets/` to the web root so the page lives at
  `careberry.org/hospice-nurse-toolkit/`.
- No DNS change needed if Careberry.org is already live on that host; adding a page doesn't touch DNS.

### B. Embed inside an existing CMS/page (e.g., WordPress, Wix, Squarespace)
- Simplest: host the four files as static assets and link to them, **or** drop the single-file
  `docs/index.html` contents into a "custom HTML / full-width embed" block. Because it's
  self-contained, it works inside one HTML block. Watch for CMS CSS bleed; the page's styles are
  scoped under common class names but not namespaced — test in a staging page first.

### ★ Careberry.org via Wix (the chosen host) — embed an iframe

Wix can't run a multi-file static app inline, so the reliable pattern is: **host the page on a
stable URL, then embed that URL in a Wix page as an iframe.** The page already uses an anchor with
`target="_top"` for the feedback email, so the "Improve This Toolkit" mailto still works from inside
the Wix iframe.

**Step 1 — get a stable URL (GitHub Pages, free now that the repo is public):**
1. GitHub repo ▸ **Settings ▸ Pages**.
2. **Source:** Deploy from a branch ▸ **Branch:** `main` ▸ **Folder:** `/docs` ▸ **Save**.
3. After ~1 minute the page is live at **`https://charedwa.github.io/Jen_Nurse_Project/`**.

**Step 2 — build the Wix page:**
1. In the Wix Editor, **Pages ▸ + Add Page ▸ Blank**. Name it *Hospice Nurse Pocket Toolkit*.
2. **SEO (Wix page settings ▸ SEO):** URL slug `hospice-nurse-toolkit`; title
   `Hospice Nurse Pocket Toolkit | Careberry`; meta description (from CLAUDE.md):
   *"A mobile-friendly hospice nurse quick-reference guide for eligibility, assessment tools,
   symptom management, communication, documentation, IDG preparation, and field checklists."*
   (When embedded, the **Wix page's** SEO applies — not the iframe's — so set it here.)
3. **Add ▸ Embed Code ▸ Embed a Site** (the iframe element). In its settings choose **Website
   address** and paste `https://charedwa.github.io/Jen_Nurse_Project/`.
4. Stretch the element **full-width**; give it a tall height (e.g. 1400–2000px) so the toolkit has
   room — the inner page scrolls on its own. Hide the page's side margins for an app-like feel.
5. **Switch to the Wix Mobile editor** (phone icon) and confirm the embed fills the screen width and
   is set to show on mobile. This is a mobile-first tool — mobile layout is the priority.
6. **Publish.** Confirm it loads at `careberry.org/hospice-nurse-toolkit` (custom domain requires a
   paid Wix plan, which careberry.org presumably already has).

**Notes / gotchas:**
- **Feedback email:** after publishing, tap *Improve This Toolkit ▸ Send to Careberry* on a phone and
  confirm your mail app opens addressed to `support@careberry.org`. If Wix's iframe sandbox blocks the
  mailto, the on-screen note still tells the user to email `support@careberry.org` directly. (If you'd
  prefer a no-mail-app submission later, we can swap the mailto for a hosted form endpoint — e.g.
  Formspree or a Wix Form placed next to the embed — that POSTs straight to your inbox.)
- **Updates:** edit the source, push to `main`, and GitHub Pages + the Wix embed update automatically
  (no Wix change needed).
- Alternative to GitHub Pages for Step 1: any static host (Netlify/Vercel/Cloudflare Pages) or even
  uploading `docs/index.html` to your own web space — anything that yields an `https://…/index.html`
  URL works in the Wix iframe.

### C. GitHub Pages (good for a staging/preview URL or a subdomain)
- Repo ▸ **Settings ▸ Pages** ▸ Deploy from branch ▸ folder **`/docs`** → serves only the toolkit
  page (keeps `Prior_data/` PDFs unexposed).
- Works on the free plan only if the repo is public; private-repo Pages needs a paid plan.
- A custom subdomain (e.g., `toolkit.careberry.org`) can be set via a `CNAME` + DNS record later.

### D. Netlify / Vercel / Cloudflare Pages (drag-and-drop static hosting)
- Point at the repo (or drag the folder). Build command: none. Publish directory: repo root
  (page at `/hospice-nurse-toolkit/`) or `/docs` (single-file at `/`).

---

## Pre-launch gate (must all be true)

- [ ] Jen's clinical sign-off complete (`CLINICAL_REVIEW_GUIDE.md` §5).
- [ ] §4 decisions answered (calculator, ESAS bands, order-example wording).
- [ ] `REVIEW_NOTES.md` items still excluded unless explicitly approved.
- [ ] Final spot-check on a real phone (iPhone ~390px and a narrow ~360px Android).
- [ ] Decide robots/visibility: leave indexable, or add `<meta name="robots" content="noindex">`
      for a soft launch (currently **indexable** — no robots restriction set).
- [ ] Chad's explicit go-ahead to publish / open a PR.

## Post-launch (after Chad approves)
- [ ] Add a nav link from an appropriate Careberry page (Resources / Clinician Resources).
- [ ] Confirm the final URL loads at careberry.org and renders on mobile.

---

## Regenerating the single-file `docs/index.html`

After editing any of the four canonical files, rebuild the inlined PWA copy so the preview / Pages /
installable app stays in sync:

```bash
node build-docs.js
```

`build-docs.js` inlines the CSS + data + app JS into `docs/index.html` **and** wires the PWA bits
(web-manifest link, real `apple-touch-icon`, and the service-worker registration). Do not hand-edit
`docs/index.html`. (Function-form replacements are used on purpose — a `$&` inside the JS would
otherwise be treated as a special replacement token and corrupt the bundle.)

## Offline / install-to-home-screen (PWA)

The Pages build is an installable, offline-capable web app. Files (all in `docs/`):

- `manifest.webmanifest` — app name, icons, standalone display, theme color.
- `sw.js` — service worker; caches the self-contained `index.html` + icons so the toolkit opens
  with no signal (network-first for the page, cache fallback offline).
- `icon-192.png`, `icon-512.png`, `icon-180.png` — app icons (Careberry stethoscope mark).

**Install (each nurse, once, ~10 s):** open the toolkit URL in **Safari** → **Share** →
**Add to Home Screen** → **Add**. It then launches full-screen like an app and works offline.

> Install the **direct toolkit URL** (the GitHub Pages URL, or a branded subdomain like
> `toolkit.careberry.org` pointed at Pages) — NOT the Wix-embedded page. Add-to-Home-Screen and
> offline only work on the direct page; the Wix iframe is for website browsing.

**Updating the app:** bump `CACHE` in `sw.js` (e.g. `-v2`) and run `node build-docs.js` before
pushing, so installed phones pull the new version on next online launch.


