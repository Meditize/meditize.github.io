# meditize.app

Static site for [meditize.app](https://meditize.app), built with [Astro](https://astro.build) and
deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output → dist/
npm run preview  # serve the built site
```

## Structure

| Path                   | What's there                                                  |
| ---------------------- | ------------------------------------------------------------- |
| `src/pages/`           | One file per URL (`about.astro` → `/about/`)                   |
| `src/layouts/Base.astro` | Shared `<head>`, header, footer; pages fill the `hero` slot  |
| `src/components/`      | `Header.astro`, `Footer.astro` — edit navigation here          |
| `src/styles/global.css`| All styling; colours and fonts live in the `:root` tokens      |
| `src/data/posts.js`    | Blog post list (title, date, excerpt) used by `/blog/` and `/insights/` |
| `public/`              | Copied verbatim to the site root — `CNAME`, `price.json`, images |

## Adding a blog post

1. Create `src/pages/blog/<slug>.astro` (copy an existing post as a starting point).
2. Add an entry to `src/data/posts.js` so it shows up in the listings.

## Deployment

Two repositories:

| Repo                          | Visibility | Contents                |
| ----------------------------- | ---------- | ----------------------- |
| `Meditize/meditize-src`       | private    | these sources           |
| `Meditize/meditize.github.io` | public     | the built site (`dist/`) |

Publish with:

```bash
npm run deploy
```

That builds the site and force-pushes `dist/` to the `main` branch of the public repo.
Sources are never pushed there — commit them to the private repo as usual.

GitHub Pages setting on the public repo: **Settings → Pages → Source = Deploy from a branch**,
branch `main`, folder `/ (root)`.

## Notes

- `public/price.json` stays at `https://meditize.app/price.json` — the extension reads it.
- `public/.nojekyll` must stay. Branch-based Pages runs Jekyll, which skips folders starting
  with `_` — without this file Astro's `_astro/` assets 404 and the site loses all styling.
- Old WordPress URLs (`/category/blog/`, the dated post permalink) redirect via `astro.config.mjs`.
- The contact form posts to FormSubmit; the first submission needs email confirmation.
