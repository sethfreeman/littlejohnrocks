# Build Instructions: LittleJohnRocks.com (Next.js rebuild)

Rebuild **littlejohnrocks.com** as a modern Next.js app, mirroring the architecture of the
Still Spark / sethfreemanmusic.com projects. The current Little John site is a single WordPress
page (Audioman theme by Catch Themes) containing the bio, music-platform links, and social
icons. This project splits that content across the standard page set and leaves room to expand.

Give this file to Kiro (or any agent) in a fresh workspace and build out the project.

---

## 1. About Little John (content reference)

Little John is a rock band fronted by **Seth Freeman**. It began on the Boston scene of the early
1990s and was later reborn on the West Coast. Key facts (pulled from the live site + public
sources — treat as untrusted until verified):

- **Boston era lineup**: Seth Freeman (vocals/guitar) and founding bassist John Bosco (friends
  from Teaneck, NJ), with drummer Brendan Taylor. First release: the *Scared* vinyl single.
  Stefano Capobianco later took over on bass.
- **Albums**: *Derailer* (debut full-length; "Shoelace" single), *We'll Always Have Ohio*
  (final Boston-era release), then *Too Much Fun* (West Coast reinvention).
- **West Coast era lineup**: bassist Chris Greacen and drummer Steve Bell (James Wilding played
  drums for a time after Brendan). Seth relocated to San Francisco.
- Seth later signed with EMI Records (with Little John) and earned a Boston Music Awards nod for
  Best New Artist; a standout WBCN Rumble appearance.

### Real links from the current site

- **Apple Music**: https://music.apple.com/us/artist/little-john/1793937398
- **Spotify**: https://open.spotify.com/artist/3upQ5sOxzOV5xltRzCtEkt
- **YouTube Music**: https://music.youtube.com/channel/UCZsrsW8KMvMCMElBcHHaQaA
- **Amazon Music** (was commented out on the live site): https://music.amazon.com/artists/B000QJSEH6/little-john
- **Instagram**: https://www.instagram.com/littlejohnband/
- **YouTube**: https://www.youtube.com/@littlejohn5329
- **Facebook**: https://www.facebook.com/littlejohnband
- **X**: https://x.com/littlejohnmusic

### Images pulled into `frontend/public/images/`

- `headshot.jpg` — band headshot (640×640), used as the hero/primary image
- `sticker-road-case.jpg` — "Little John" sticker on a road case (1360×504), good as a banner/accent

---

## 2. Tech stack

- **Framework**: Next.js 14 (App Router, JavaScript)
- **UI**: React 18, plain per-route CSS, dark theme
- **Build**: static export (`output: 'export'`) — the public marketing site needs no server
- **Analytics**: `@vercel/speed-insights` + `@vercel/analytics` (optional, add on Vercel)
- **Hosting**: Vercel (root directory set to `frontend`)
- **Node**: 18+

If a fan portal is ever wanted (auth/members/newsletter), follow the Still Spark build guide's
§6 (Supabase + Resend) — not included here.

---

## 3. Project structure

```
/littlejohnrocks
  README.md
  LITTLEJOHN-BUILD-INSTRUCTIONS.md
  /frontend
    package.json
    next.config.js        (output: 'export', images.unoptimized, @ alias)
    jsconfig.json
    .eslintrc.json
    .env.local.example
    /public
      /images             (headshot, sticker, gallery)
    /app
      layout.js
      globals.css
      base.css
      page.js             (Home)
      home.css
      icon.png / favicon.ico
      /components
        Navbar.js + Navbar.css   (hamburger menu on mobile)
      /music   /video   /photos   /about   /tour   /epk   /tips   /contact
        (each: page.js + <name>.css)
```

---

## 4. Pages (public marketing site)

Mirror the Still Spark page set. Split the single-page WordPress content across these:

- **Home** — hero (headshot), short band blurb, streaming buttons (Apple/Spotify/YouTube Music/
  Amazon), social icons. Stacked, equal-width buttons.
- **Bio** — the full multi-paragraph Little John story (Boston era → West Coast reinvention).
- **Music** — streaming-platform links + release list (*Scared* single, *Derailer*,
  *We'll Always Have Ohio*, *Too Much Fun*).
- **Video** — YouTube embeds (collect IDs when available).
- **Photos** — gallery (headshot, sticker/road-case, more as supplied).
- **Tour** — Songkick/Bandsintown widget or static list (none known yet; placeholder).
- **Press Kit (EPK)** — bio, hi-res photos, music links, contact.
- **Tip Jar** — payment-app links (confirm Little John's own handles before publishing).
- **Contact** — Formspree-backed AJAX form + honeypot + social icons.

Keep styling consistent with the dark theme; pick an accent color (the Still Spark site uses a
logo-derived gold — choose Little John's own once a logo/palette is settled).

---

## 5. Deploy to Vercel

1. Push the repo to GitHub.
2. Import into Vercel. Set **Root Directory = `frontend`** (Next.js auto-detected).
3. No required env vars for the static marketing site. Add analytics on Vercel if desired.
4. Point `littlejohnrocks.com` at Vercel once the preview looks right.

---

## 6. Verification

- `npm run build` with no errors before deploying.
- Click through every page locally (`npm run dev`); confirm links, images, embeds, responsive
  layout (hamburger menu on mobile).
- Replace all placeholder content (tip-jar handles, tour dates, video IDs, contact form ID) with
  real values before the DNS switch.
