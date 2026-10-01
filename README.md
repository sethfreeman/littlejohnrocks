# Little John

Website for **EMI recording artist Little John** — the Boston-born, Bay Area–reborn rock band who
earned a Boston Music Awards nod for Best New Artist. This project rebuilds the current WordPress
site (littlejohnrocks.com) as a modern Next.js app, mirroring the architecture of the Still Spark
/ sethfreemanmusic.com sites.

## Status

🚀 **Live.** Deployed to Vercel, connected to GitHub, and serving on `littlejohnrocks.com`. All 9
pages are up with real content (bio, streaming/social links, images, tip-jar handles, YouTube
videos) and `npm run build` passes.

Done:

- **GitHub remote** — pushed to [`sethfreeman/littlejohnrocks`](https://github.com/sethfreeman/littlejohnrocks).
- **Typography** — site-wide **Courier Prime** typewriter font via `next/font/google` (self-hosted),
  with crisp (non-antialiased) smoothing.
- **Contact form** — live Formspree form (`xeaowddy`) with honeypot + AJAX submit.
- **Tip Jar** — tightened card layout with monochrome payment icons and the red accent hover.
- **Analytics** — `@vercel/analytics` + `@vercel/speed-insights` wired in; Web Analytics enabled
  in the Vercel dashboard.
- **Accent color** — the default rock red `#e23b3b` (`--accent` in `frontend/app/globals.css`) is
  the final brand color.
- **DNS** — `littlejohnrocks.com` points at Vercel; the site is live.

Remaining:

- **Tour dates** — `frontend/app/tour/page.js` has an empty `shows = []` (shows a "no dates"
  message). Add dates or wire a Songkick/Bandsintown widget.

The full architecture/build plan is in
[`LITTLEJOHN-BUILD-INSTRUCTIONS.md`](./LITTLEJOHN-BUILD-INSTRUCTIONS.md) (real content and links
in §1). The original littlejohnrocks.com was a single page (bio + music links + socials); this
rebuild splits that across the standard page set (Home, Music, Video, Photos, Bio, Tour, Press
Kit, Tip Jar, Contact).

## Tech stack

- Next.js 14 (App Router, JavaScript)
- React 18, per-route CSS, dark theme
- Courier Prime typeface via `next/font/google` (self-hosted)
- Static export (`output: 'export'`) — no server/API needed for the public marketing site
- Vercel hosting (root directory: `frontend`), with Analytics + Speed Insights

## Quick start

```bash
cd frontend
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to frontend/out
```

See the build instructions for the page list and deployment steps.
