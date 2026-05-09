# kob-site

Personal site — `kob` (adisak), pharmacist who codes.

Sister project to [DrugBox Care](https://drugboxcare.com).

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- TH/EN client-side toggle (localStorage)
- Vercel-ready (no server-side state)

## Local development

```bash
cd ~/dev/kob-site
npm install
npm run dev      # http://localhost:3000
```

## Pages

- `/`           Hero + section overview
- `/about`      About me — pharmacy → dev journey
- `/pharmacy`   Pharmacy thoughts (blog-ish, starts with one post)
- `/projects`   Projects list (DrugBox featured + future)
- `/drugbox`    DrugBox usage guide with diagrams
- `/tech`       Architecture overview for fellow devs
- `/contact`    Email + GitHub

## Diagrams

The DrugBox SVG diagrams in `public/diagrams/` are the same files used
in the pilot deck (`~/Documents/DrugBox-Pilot/diagrams/`). When the
deck updates, run:

```bash
cp ~/Documents/DrugBox-Pilot/diagrams/*.svg ~/dev/kob-site/public/diagrams/
```

(close Preview/Quick Look first if files appear locked.)

## Deploy to Vercel

1. Push this repo to GitHub
2. Open https://vercel.com → Sign up with GitHub
3. Import the `kob-site` repo
4. Vercel auto-detects Next.js — no config needed
5. Click Deploy
6. Site goes live at `kob-site-<hash>.vercel.app`
7. (optional) Settings → Domains → Add custom subdomain

Auto-deploy on every `git push`.

## Editing content

All content is inline in the `app/*/page.tsx` files. Each user-facing
string uses the `t({ th: '...', en: '...' })` helper from
`lib/lang.ts`. Add an `EN` value alongside every `TH` string to keep
the toggle complete.

## License

MIT — fork it, take what you like, the structure is meant to be reused.
