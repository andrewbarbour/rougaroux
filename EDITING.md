# Updating the Rougaroux website

> This is the help page. Please read it, but don't change it here.

You edit the site at **https://app.pagescms.org** by signing in with your GitHub account.
When you save, the website updates by itself within a couple of minutes.

## Add a show

1. Open **Shows** and choose **Add an entry**.
2. Fill in at least the date and city. Everything else is optional; empty fields just don't appear.
3. Put each supporting band on its own row under **Playing with**.
4. Add accessibility notes whenever the venue shares them (step-free entry, washrooms, seating).
5. Save.

You never need to delete old shows. Once the date passes, the show moves to the Past tab
automatically.

## After a show

To point people to a video, photos or a recap of a show:

1. Open **Shows** and choose the show.
2. Paste the link into **After-show link**.
3. Type the button label into **After-show button text**, e.g. "Watch the set" or "See photos".
   Keep it short. If you leave it blank, the button says "After the show".
4. Save.

The button only appears once the show is in the Past tab, so you can add the link ahead of time.

## Add a release

1. Open **Releases** and choose **Add an entry**.
2. Fill in the title, type and release date, and paste the release's **Bandcamp link**.
3. Add each song as a row in **Tracklist**, in order.
4. Upload square cover art (about 1200 × 1200 px).
5. Optional: add a playable Bandcamp player. Set **Bandcamp embed type** to `album` or `track`
   (leave it on `none` for no player), then fill in **Bandcamp embed ID**: on Bandcamp, open the
   release, choose **Share / Embed → Embed this album**, and copy the number after `album=`
   (or `track=` for a single track).
6. Optional: add a **Call to action button** under the summary, e.g. "Pre-order the LP" or
   "Watch the video". Pick an icon (or none), type the button text and paste the link. The button
   only appears when both the text and the link are filled in.
7. Put credits and thanks in **Credits and notes**. Leave a blank line between paragraphs.
8. Save. The newest release automatically becomes the one featured at the top of Music.

## Change the bio, lineup, links or press quotes

Open **Site settings**. Everything on the page that isn't a show or a release lives here,
including the footer's land acknowledgement and the site colours.

The wording of the top menu is under **Top menu** in Site settings. You can rename the links and
change the button's text and where it goes. Leave a field blank to go back to the default.

To change the lettering used for the band name and headings, pick a different **Heading font** in
Site settings. Each font is sized automatically so the band name still fits. To see what they look
like first, search for the name at https://fonts.google.com.

**Bandcamp player colours** in Site settings changes the look of the Bandcamp players on release
pages. Pick a background (blend with the page, dark or light) and type a colour code like
`#b49cff` for the title and link colour. Bandcamp sets the rest of the text itself.

## Change the site colours

Open **Site settings → Site colours**. Each colour is a code like `#603cba`; you can pick one at
https://htmlcolorcodes.com. Divider lines, the footer and other small shades follow your choices
automatically. Keep text colours clearly lighter (or darker) than the backgrounds so everything
stays easy to read.

To undo colour changes:

- **Everything at once:** turn on **Use the original colours** and save. Your own colours stay
  filled in, so you can turn it off again later to bring them back.
- **One colour:** clear that field and save, or paste its original code back in:

| Setting | Original |
|---|---|
| Accent | `#603cba` |
| Text on accent | `#ffffff` |
| Page background | `#0e0c10` |
| Panel background | `#16121a` |
| Main text | `#ece4d6` |
| Secondary text | `#c8c0cf` |
| Muted text | `#a79fb0` |
| Link hover | `#c9b8ff` |

## Photos

- Resize photos before uploading: about 1600 px on the long side and under 1 MB. Phone photos
  straight off the camera are usually 4–10 MB and will make the page slow on mobile data.
- Use JPG for photos and PNG only for artwork with flat colour or text.

## If something goes wrong

Every save is recorded in GitHub, so nothing is ever lost. Message [SITE ADMIN] and they can
roll back to any earlier version.
