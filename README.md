# DataQube Analytics — Website

Static marketing site built with [Eleventy (11ty)](https://www.11ty.dev/). Plain HTML/CSS/JS output, Markdown-authored blog, no server or database required.

## Requirements

- Node.js 20 (see `.nvmrc`)

## Local development

```
npm install
npm run serve
```

This starts a local dev server (with live reload) at `http://localhost:8080`.

## Production build

```
npm run build
```

Outputs the static site to `_site/`.

## Deploying

- **Netlify**: connect the repo — `netlify.toml` already sets the build command (`npm run build`) and publish directory (`_site`). Netlify automatically serves `_site/404.html` as the custom 404 page.
- **Vercel**: set the framework preset to "Other", build command `npm run build`, output directory `_site`.

## Project structure

- `src/_data/` — site-wide content: `site.js` (name/contact/nav — the single source of truth for NAP and the canonical company description), `services.js`, `industries.js`, `faq.js`, `testimonials.js`, `logos.js`, `differentiators.js`.
- `src/_includes/layouts/` — page templates (`base`, `page`, `service`, `blog-post`, `blog-index`).
- `src/_includes/partials/` — reusable page fragments (nav, footer, JSON-LD, FAQ blocks, etc).
- `src/_includes/icons/` — inline SVG icon macros (no stock images/icon fonts used anywhere on the site).
- `src/assets/css/` — plain CSS split into token/reset/base/layout/component/utility files, concatenated into `main.css` automatically at build time.
- `src/blog/posts/` — blog posts as Markdown files. Add a new post by creating a new `.md` file here with `title`, `description`, `date`, and `tags` front matter.
- `src/services/`, `src/legal/` — individual pages.

## SEO / AEO / GEO notes

- Every page sets its own `title`/`description` in front matter, rendered into `<title>`, meta description, canonical URL, Open Graph, and Twitter Card tags.
- JSON-LD structured data (Organization, Service, FAQPage, BreadcrumbList, Article) is emitted automatically per page type — see `src/_includes/partials/json-ld.njk`.
- `robots.txt`, `sitemap.xml`, and `/blog/feed.xml` are generated automatically.
- `llms.txt` at the site root gives AI/LLM crawlers a structured summary of the company and its services (generative engine optimization).

## Before launch checklist

Several things in this build are **clearly-marked placeholders** — search the codebase for `PLACEHOLDER` to find them all:

- [ ] Replace placeholder contact info (email, phone, address) in `src/_data/site.js`.
- [ ] Replace placeholder testimonials in `src/_data/testimonials.js` with real, approved client quotes.
- [ ] Replace placeholder client names/logos in `src/_data/logos.js` with real client logos (with permission).
- [ ] Add real team bios/photos to `src/about.njk` if desired.
- [ ] Have a lawyer review the legal pages (`src/legal/`) before publishing — they currently contain template boilerplate.
- [ ] Wire up the contact form: it's built for [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) (`data-netlify="true"`) — if not hosting on Netlify, connect it to a form backend of your choice (e.g. Formspree).
- [ ] Confirm `site.url` in `src/_data/site.js` matches the final production domain.
- [ ] Add a real Google/Bing Search Console verification and submit `/sitemap.xml` once live.
