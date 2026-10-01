# Little John

Website for **Little John** — the Boston-born, Bay Area–reborn rock band fronted by Seth Freeman
(who later signed with EMI and earned a Boston Music Awards nod for Best New Artist). This project
rebuilds the current WordPress site (littlejohnrocks.com) as a modern Next.js app, mirroring the
architecture of the Still Spark / sethfreemanmusic.com sites.

## Status

✅ **Scaffolded and building.** All 9 pages exist with real content (bio, streaming/social links,
images, tip-jar handles, YouTube videos) and `npm run build` passes. It is not a blank start —
do not re-scaffold.

👉 **Start here:** [`HANDOFF.md`](./HANDOFF.md) — current state, what's done, and the exact
remaining placeholders (Formspree form ID, tour dates, accent color, GitHub remote, Vercel).

The full architecture/build plan is in
[`LITTLEJOHN-BUILD-INSTRUCTIONS.md`](./LITTLEJOHN-BUILD-INSTRUCTIONS.md) (real content and links
in §1). The original littlejohnrocks.com was a single page (bio + music links + socials); this
rebuild splits that across the standard page set (Home, Music, Video, Photos, Bio, Tour, Press
Kit, Tip Jar, Contact).

## Tech stack

- Next.js 14 (App Router, JavaScript)
- React 18, per-route CSS, dark theme
- Static export (`output: 'export'`) — no server/API needed for the public marketing site
- Vercel hosting (root directory: `frontend`)

## Quick start

```bash
cd frontend
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to frontend/out
```

See the build instructions for the page list and deployment steps.
