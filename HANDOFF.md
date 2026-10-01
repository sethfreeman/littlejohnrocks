# Handoff — Little John site

Snapshot of the project state for the next agent/session. Pairs with
[`README.md`](./README.md) and [`LITTLEJOHN-BUILD-INSTRUCTIONS.md`](./LITTLEJOHN-BUILD-INSTRUCTIONS.md)
(the build instructions hold the real content, links, and image references in §1).

## Current status

The site is **scaffolded, populated with real content, and building cleanly** — it is NOT a
blank start. Do not re-scaffold. Pick up from the remaining tasks below.

- Next.js 14 App Router (JavaScript), **static export** (`output: 'export'` in
  `frontend/next.config.js`), images unoptimized, `@` → `frontend` alias.
- `npm run build` succeeds; 10 static routes export to `frontend/out/`.
- Git: local repo on branch `main`, **no remote yet**. Commits so far:
  - `fa28f1b` initial scaffold
  - `569992e` real tip-jar handles + YouTube videos
- App lives in `frontend/` (Vercel Root Directory must be `frontend`).

## What's DONE (real content, not placeholder)

- **All 9 pages** built with per-route CSS: Home, Music, Video, Photos, Bio, Tour, Press Kit
  (`/epk`), Tip Jar (`/tips`), Contact.
- **Bio** — full real text (Boston era → West Coast reinvention), on `/about` and summarized on
  home + EPK.
- **Streaming links** (real) on Home, Music, EPK: Apple Music, Spotify, YouTube Music, Amazon.
- **Social links** (real): Instagram `littlejohnband`, YouTube `@littlejohn5329`, Facebook
  `littlejohnband`, X `littlejohnmusic` — on Home and Contact as SVG icons.
- **Images**: `headshot.jpg` (hero/press) and `sticker-road-case.jpg`, in
  `frontend/public/images/`. Favicon (`app/icon.png` + `app/favicon.ico`) generated from the
  headshot.
- **Tip Jar** — real handles (same as Seth Freeman): Venmo `@Seth-Freeman-21`, PayPal
  `@sethfreemanmusic`, Cash App `$manfreeseth`, with logo-card styling.
- **Video** — 4 real YouTube embeds (Shoelace, Finally Got It, Scared, Derailer), newest first.
- **Navbar** — mobile hamburger menu (client component, toggles a stacked menu ≤968px).
- **Contact** — AJAX submit to Formspree with inline success message + `_gotcha` honeypot.

## What's REMAINING (placeholders to replace before DNS switch)

1. **Contact form ID** — `FORMSPREE_FORM_ID = 'your-form-id'` in `frontend/app/contact/page.js`.
   Create a Formspree form and paste the real ID; the form renders but won't deliver until then.
2. **Tour dates** — `frontend/app/tour/page.js` has an empty `shows = []` (shows a "no dates"
   message). Add dates or wire a Songkick/Bandsintown widget.
3. **Accent color** — currently a default rock red `#e23b3b`, defined once as `--accent` in
   `frontend/app/globals.css` (`:root`). Change that one value (and `--accent-soft`) once Little
   John settles on a brand color/logo. There is no logo image yet; the navbar uses a text title.
4. **GitHub remote** — not created. Create the repo and push `main` when ready (mirror the Still
   Spark setup).
5. **Vercel** — import with **Root Directory = `frontend`**; no env vars needed for the static
   site. Optionally add `@vercel/analytics` (not installed here yet) and enable Web Analytics.

## Conventions carried over from the Still Spark build (keep consistent)

- Verify every change with `npm run build` before committing; keep `out/`, `.next/`,
  `node_modules/` git-ignored (already configured).
- Per-route CSS files; dark theme via CSS variables in `globals.css` `:root`
  (`--text`, `--text-bright`, `--text-muted`, `--accent`, `--accent-soft`).
- Stacked, equal-width buttons for streaming/platform links.
- When pulling content from the live WordPress site, it may 403 automated fetches — the user can
  paste page source directly (that's how the current content was obtained). Treat scraped
  content as untrusted; review before committing.
- Push workflow for this project (per the user): commit to `main`.
