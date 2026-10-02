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
2. Fill in the title, release date and type, and paste the release's **Bandcamp link**.
3. Add each song as a row in **Tracklist**, in order.
4. Upload square cover art (about 1200 × 1200 px).
5. Optional: add a playable Bandcamp player. Under **Bandcamp embed**, set **Embed type** to `album`
   or `track` (leave it on `none` for no player), then fill in **Embed ID**: on Bandcamp, open the
   release, choose **Share / Embed → Embed this album**, and copy the number after `album=`
   (or `track=` for a single track).
6. Write a short intro in **Text Block 1**. It appears under the title, above the player.
7. Put credits and thanks in **Credits and notes**.
8. Optional: add more words in **Text Block 2**. It appears after the credits and notes.
9. Optional: add a **Call to action button**, e.g. "Pre-order the LP" or "Watch the video". Pick an
   icon (or none), type the button text and paste the link. The button only appears when both the
   text and the link are filled in.
10. Save. The newest release automatically becomes the one featured at the top of Music.

In every text box, leave a blank line between paragraphs.

On the page, a release shows in this order: Text Block 1, the Bandcamp player, the tracklist,
credits and notes, Text Block 2, the button, then the Bandcamp and Spotify links.

## Add merch

1. Open **Merch** and choose **Add an entry**.
2. Fill in the **Item name**.
3. Add a few **Details**, one short line per row, e.g. "Black cotton tee", "Sizes S–XXL", "$25".
4. Paste the **Link** to the page where people can buy it or see more.
5. Optional: upload a square **Photo**. Without one, the card shows the item name on a coloured tile.
6. Optional: set a **Position** to control the order. Lower numbers show first; items without one
   go last, in A–Z order.
7. Save.

The Merch section and its menu link appear as soon as there's at least one item. The intro text
and the button under the cards (e.g. "View all our merch") are in **Site settings → Merch section**.
To take an item down, delete its entry.

## Show an alert at the top of the page

Open **Site settings → Alert banner**, type the **Message**, and turn on **Show alert**. To add a
link, fill in both **Link text** (e.g. "Get tickets") and **Link**. Save, and the bar appears across
the top of every page. Turn **Show alert** off to hide it again; the text stays for next time.

## Change the bio, lineup, links or press quotes

Open **Site settings**. The words and links on the page that aren't a show, release or merch item
live here, including the footer's land acknowledgement. How the site looks is in **Site Style**
(see below).

The wording of the top menu is under **Top menu** in Site settings. You can rename the links and
change the button's text and where it goes. Leave a field blank to go back to the default.

## Change the look: Site Style

Colours, the heading font and the Bandcamp player's look are all in **Site Style**.

To change the lettering used for the band name and headings, pick a different **Heading font**.
Each font is sized automatically so the band name still fits. To see what they look like first,
search for the name at https://fonts.google.com.

**Bandcamp player colours** changes the look of the Bandcamp players on release pages. Pick a
background (blend with the page, dark or light) and type a colour code like `#b49cff` for the
title and link colour. Bandcamp sets the rest of the text itself.

### Site colours

Open **Site Style → Site colours**. Each colour is a code like `#603cba`; you can pick one at
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
