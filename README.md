# Little John

Website for **Little John** — the Boston-born, Bay Area–reborn rock band fronted by Seth Freeman
(who later signed with EMI and earned a Boston Music Awards nod for Best New Artist). This project
rebuilds the current WordPress site (littlejohnrocks.com) as a modern Next.js app, mirroring the
architecture of the Still Spark / sethfreemanmusic.com sites.

## Status

🚧 Kickstarting. The full build plan lives in
[`LITTLEJOHN-BUILD-INSTRUCTIONS.md`](./LITTLEJOHN-BUILD-INSTRUCTIONS.md).

The current littlejohnrocks.com is a single page (bio + music links + socials). This rebuild
splits that content across the standard page set (Home, Music, Video, Photos, Bio, Tour, Press
Kit, Tip Jar, Contact), populated minimally from the existing content and expanded later.

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
