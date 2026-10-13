# Josh Bryant-Gainer

Personal site for [joshbg.com](https://www.joshbg.com) — Creative Director & Performance Strategist.

Migrated from Squarespace to a self-hosted Next.js site for Netlify.

## Pages

- `/` — Home (bio, portrait, See the Work, contact accordion)
- `/portfolio` — Project grid
- `/portfolio/[slug]` — Case studies (Truebill, Aspiration, MoneyLion, Milk Bar, Zarbee's, Flamingo, Candid, Burt's Bees, Milk Street, Harry's)
- `/contact` — Contact details

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Netlify)

Connected GitHub → Netlify. Build uses `@netlify/plugin-nextjs` via `netlify.toml`.

- Build command: `npm run build`
- Node: 20

## Content source

Copy and images were taken from the live Squarespace site / WordPress XML export. Project pages that were empty on Squarespace (Burt's Bees, Milk Street, Harry's) remain title/cover-only here.
