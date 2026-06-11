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

After editing any of the four canonical files, rebuild the inlined copy so the preview/Pages
version stays in sync:

```bash
node -e '
const fs=require("fs");
let h=fs.readFileSync("hospice-nurse-toolkit/index.html","utf8");
const css=fs.readFileSync("assets/hospice-toolkit.css","utf8");
const data=fs.readFileSync("assets/hospice-toolkit-data.js","utf8");
const app=fs.readFileSync("assets/hospice-toolkit.js","utf8");
h=h.replace(/<link rel="stylesheet" href="\.\.\/assets\/hospice-toolkit\.css">/,()=>"<style>\n"+css+"\n</style>");
h=h.replace(/<script src="\.\.\/assets\/hospice-toolkit-data\.js"><\/script>/,()=>"<script>\n"+data+"\n</script>");
h=h.replace(/<script src="\.\.\/assets\/hospice-toolkit\.js"><\/script>/,()=>"<script>\n"+app+"\n</script>");
fs.writeFileSync("docs/index.html",h);
'
```

(Function-form replacements are used on purpose — a `$&` inside the JS would otherwise be treated as
a special replacement token and corrupt the bundle.)
