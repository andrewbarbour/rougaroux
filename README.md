# rougaroux.ca

The Rougaroux band website: a static Astro site that band members edit through Pages CMS.
There is no server or database. Content lives in the repo as YAML, Markdown and JSON files.

## Local development

Requires Node 22 or newer.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serves dist/
```

## Where things live

| What | File(s) |
| --- | --- |
| Shows (one file per show) | `src/content/shows/*.yaml` |
| Releases (one file per release; body = credits) | `src/content/releases/*.md` |
| Bio, lineup, press quotes, links, email, accent colour | `src/data/site.json` |
| Uploaded images | `public/images/` |
| Content schema (validates every build) | `src/content.config.ts` |
| CMS form definitions | `.pages.yml` |
| Page templates | `src/pages/`, `src/layouts/`, `src/components/` |
| Styles and design tokens | `src/styles/global.css` |

Pages built: `/` (single page with Music, Shows, About, Contact), `/music/<slug>/` for each
release (shareable links; the release cards on the home page link here and swap in place when
JavaScript is on), and `404.html`.

Shows sort themselves: anything dated before today is listed under Past. The split happens
at build time and again in the visitor's browser, so a show moves to Past on time even if
nobody rebuilds. The daily rebuild workflow keeps the "Next up" banner current too.

## Deploying (Cloudflare Pages)

1. Push this repo to GitHub, ideally under a band-owned GitHub organisation.
2. In Cloudflare, create a Pages project connected to the repo.
   Build command `npm run build`, output directory `dist`, environment variable `NODE_VERSION=22`.
3. Add the custom domain `rougaroux.ca` (and `www`) in the Pages project. Easiest if the
   domain's DNS is on Cloudflare; otherwise add the CNAME records it shows you at the registrar.
4. Create a deploy hook (Pages project → Settings → Builds → Deploy hooks) and save its URL as
   the GitHub repository secret `DEPLOY_HOOK_URL`. This powers `.github/workflows/daily-rebuild.yml`.

Netlify works the same way with the same build settings; `public/_headers` is honoured by both.

## Setting up the CMS (Pages CMS)

1. Go to https://app.pagescms.org and sign in with GitHub.
2. Open this repository. It reads `.pages.yml` and shows Shows, Releases and Site settings.
3. Give each band member who will edit a GitHub account with write access to the repo
   (or collaborator access through Pages CMS). Every save is a commit, so any mistake can be
   reverted from the GitHub history.

If you'd rather self-host the editor, Decap CMS can use the same files, but it needs a small
GitHub OAuth handler (for example a Cloudflare Worker).

## Bandcamp players

Each release has a `bandcamp_id`. Until it's filled in, the site shows a "Play on Bandcamp"
link instead of an embedded player. To find the ID: on the Bandcamp release page choose
Share / Embed → Embed this album, and copy the number after `album=` (or `track=` for a single;
set `bandcamp_kind` to `track`).

## Before launch

- [ ] Confirm the lineup, current names and pronouns with the band (`src/data/site.json`).
- [ ] Add a hero photo and cover art for all four releases.
- [ ] Fill in the Bandcamp embed IDs.
- [ ] Add the Instagram link and press kit link, or leave blank to hide them.
- [ ] Fill in venue and supporting acts for the 23 April 2026 show, or delete that file.
- [ ] Point the domain, turn on HTTPS (automatic on Cloudflare/Netlify), set the deploy hook secret.
- [ ] Share `EDITING.md` with whoever will update the site.
