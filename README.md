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
| Uploaded images, including release artwork | `public/images/` |
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

## Release artwork

Each release's cover image is set with the `cover` field in its file in `src/content/releases/`:

```yaml
cover: /images/graveyard-smash.jpg
```

Put the image file in `public/images/`. The path starts with `/images/` because everything in
`public/` is served from the root of the site. In Pages CMS, band members don't type the path:
they open **Releases**, pick the release, and upload an image in the **Cover art** field. Pages CMS
saves the file to `public/images/` and fills in the path.

Use square images, around 1200 × 1200 px and under 1 MB.

How covers display (`src/components/Cover.astro`, styled in the "Covers" block of
`src/styles/global.css`):

- With artwork, the image sits under a semi-transparent overlay in the release's `tint` colour, with
  the title on top. Hovering over the cover, or tabbing onto the release card with the keyboard,
  fades the overlay and title out to reveal the artwork. To change how much of the art shows through
  at rest, adjust the `72%` in the `.cover__overlay` rule.
- Without artwork (`cover` left empty), the cover is a solid block of the `tint` colour with the
  title, and hovering does nothing.
- On touch screens there's no hover, so the title stays visible. Visitors with reduced motion
  turned on get the change without the fade.

## Bandcamp players

Each release has a `bandcamp_id`. Until it's filled in, the site shows a "Play on Bandcamp"
link instead of an embedded player. To find the ID: on the Bandcamp release page choose
Share / Embed → Embed this album, and copy the number after `album=` (or `track=` for a single;
set `bandcamp_kind` to `track`).

## Heading fonts

The band picks the heading font (band name, section titles, release titles) under Site settings →
Heading font. The dropdown only lists fonts installed in the code, so adding one is a code change:

1. Find the font on [Fontsource](https://fontsource.org) (almost every Google Font is there) and
   check it has a regular (400) weight.
2. Install it using its Fontsource ID:
   ```bash
   npm install @fontsource/rubik-glitch
   ```
3. Import it with the other heading fonts at the top of `src/layouts/Base.astro`:
   ```js
   import '@fontsource/rubik-glitch/400.css';
   ```
   Browsers only download the font that's selected, so extra imports don't slow the site down.
4. Add it to `displayFonts` in `src/lib/fonts.ts` with a fallback and a width scale:
   ```ts
   'Rubik Glitch': { family: "'Rubik Glitch', Impact, sans-serif", scale: 0.85 },
   ```
   `scale` keeps the band name the same width in every font: Pirata One's width for "Rougaroux"
   divided by the new font's width. To measure, run the site, open the browser console and run:
   ```js
   const w = (f) => { const s = document.createElement('span'); s.style.cssText = `font:100px "${f}";position:absolute`; s.textContent = 'Rougaroux'; document.body.append(s); const x = s.offsetWidth; s.remove(); return x; };
   await document.fonts.load('100px "Pirata One"'); await document.fonts.load('100px "Rubik Glitch"'); w('Pirata One') / w('Rubik Glitch');
   ```
5. Add the same name to the `display_font` options in `.pages.yml`. It must match the key in
   `fonts.ts` exactly; an unknown name falls back to Pirata One.
6. Build, select the font in `src/data/site.json`, and check the hero title fits at phone width
   (375 px) before switching it back and committing.

## Before launch

- [ ] Confirm the lineup, current names and pronouns with the band (`src/data/site.json`).
- [ ] Add a hero photo and cover art for all four releases.
- [ ] Fill in the Bandcamp embed IDs.
- [ ] Add the Instagram link and press kit link, or leave blank to hide them.
- [ ] Fill in venue and supporting acts for the 23 April 2026 show, or delete that file.
- [ ] Point the domain, turn on HTTPS (automatic on Cloudflare/Netlify), set the deploy hook secret.
- [ ] Share `EDITING.md` with whoever will update the site.
