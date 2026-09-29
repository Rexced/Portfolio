@AGENTS.md

# Saim Wajid's portfolio

A fully static Next.js 16 (App Router) + React 19 + Tailwind v4 site, exported to `out/` and served by GitHub Pages at https://rexced.github.io/Portfolio/ (repo `Rexced/Portfolio`). There is no server, API or database at runtime. Full stack details are in `TECH_STACK.md`; keep it in sync when the stack changes.

## Commands

```bash
npm install          # after every pull; this repo is also worked on from Windows
npm run dev          # http://localhost:3000/Portfolio/ on 0.0.0.0 (LAN devices allowed via next.config.mjs)
npm run build        # static export -> out/
npm start            # scripts/preview.mjs: serves out/ at http://localhost:4321/Portfolio/
npm run typecheck    # tsc --noEmit
```

There are no tests or linter. Run `npm run typecheck` and `npm run build` to verify a change.

## Where things live

- `data/content.ts` holds all site copy (profile, projects, skills). Content edits go here, not in components.
- `lib/region.ts` defines the three resume versions (PK, US, UK/IE), their PDFs in `public/cv/`, and the timezone-based `guessRegion()`.
- `components/region-provider.tsx` is the region context. `/pk/`, `/us/` and `/uk/` pin a region; `/` guesses it after mount.
- `components/home.tsx` composes the page sections, and each route's `page.tsx` renders `<Home region=... />`.
- `app/globals.css` holds the theme tokens under `@theme inline`. Light is the default, dark lives under `:root[data-theme="dark"]`, and `.terminal` re-declares the tokens (macOS-Terminal light by default, dark under the dark theme). There's no `tailwind.config`.

## Constraints

- **Static export only** (`output: "export"`). Don't add route handlers, server actions, middleware, ISR, `next/image` optimisation or anything else that needs a running server.
- Keep `trailingSlash: true`, since GitHub Pages serves `/us/` as `/us/index.html`.
- `basePath: "/Portfolio"` must match the GitHub repo name. Next adds it to `<Link>`, `next/font` and `_next` assets, but not to plain `<a href>` or string paths, which is why the PDF paths in `lib/region.ts` hard-code `/Portfolio/cv/...`. If the repo is renamed, update both places.
- Locally the site only exists under `/Portfolio/`. Don't preview with `npx serve out`: the pages' `/Portfolio/_next/...` assets 404 and the site looks broken.
- Never put the owner's phone number or WhatsApp on the site. The résumé PDFs contain them, and that's intended.
- All motion must respect reduced motion (`MotionConfig reducedMotion="user"` plus CSS `prefers-reduced-motion`).
- The inline theme script in `app/layout.tsx` prevents a theme flash before first paint. Keep it, and keep `suppressHydrationWarning` on `<html>`.
- Pushing to `main` deploys to production through `.github/workflows/deploy.yml`.

## Code style

- TypeScript, no semicolons, double quotes, 2-space indent.
- Import through the `@/` alias. Merge classes with `cn()` from `lib/utils.ts`.
- Interactive components start with `"use client"`.
- Comments are short and explain *why*.
