# Bliss website (Next.js)

Marketing site for Bliss. The layout follows the agreed reference (floating header, isometric hero, bento cards, pinned scroll story), restyled to the Bliss brand. Wherever a reference design would show a payment card, this site shows a virtual IBAN or account view.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Brand

The brand guidelines are in `docs/brand/BRAND.md` (with the original kit in `docs/brand/bliss-brand-kit.zip`). Follow them for any new copy or design:

- In copy the name is always **Bliss**. The legal name **Bliss Technology LLC** is only for the footer and legal text.
- Navy for trust, mint for money in motion: one mint primary action per screen.
- Sora for headings and amounts, Inter for text, JetBrains Mono for references.
- Sentence case everywhere; numbers beat adjectives.
- Never rotate, skew or circle the logo mark. The angled tiles in the design carry no logo for this reason.
- The site uses one logo everywhere: the white and green lockup (`SITE.logo` in `config/site.js`, or `components/brand/Logo.jsx`), always on navy. This is a deliberate choice over the guidelines' navy primary lockup, so anywhere a logo appears needs a navy background.

## Structure

- `app/page.jsx`: the homepage, built from `components/home/`
- `app/services/`: the "What we do" overview (`/services`) and one page per service (`/services/<slug>`)
- `app/[slug]/page.jsx`: Privacy, Terms, Cookie and Account Deletion pages (add their content here)
- `app/globals.css`: all site styles, built on the tokens in `public/brand/tokens.css`
- `config/site.js`: name, nav, main call to action, and the links that don't exist yet
- `config/services.js`: the six services and all their page copy. Add or edit a service here and its page, tiles, menu and footer links update
- `config/photos.js`: every photo, with alt text, photographer credit and source
- `components/brand/AccountUI.jsx`: the virtual IBAN tile, balance, convert, transaction and chart panels
- `components/brand/ServiceVisuals.jsx`: which of those panels each service page shows
- `components/site/`: header, footer, page hero, scroll story, accordion, scroll-in effect
- `public/photos/`: photos from Unsplash, under the Unsplash License
- `public/brand/`: the brand kit: tokens, component styles, fonts and logos
- `docs/compliance-later/`: compliance content taken off the site while licences are pending. See its README to restore it

## Before launch

These use honest placeholders until the real thing exists:

- **Links:** `signInUrl`, `newsletterUrl`, `contact` and `social` in `config/site.js`. While empty, the site shows "Launching soon" or hides the item. Also set `url` and `domain`, and point `cta` at sign-up.
- **Prices:** `components/home/Plans.jsx` shows the fee promise. Add `price` and `period` to a plan to show a price.
- **Customer quotes:** `components/home/PromiseBand.jsx` shows Bliss's promises, as there are no approved quotes yet.
- **Articles:** `components/home/Explore.jsx` links to products, as there is no blog yet.
- **Legal pages:** the text in `app/[slug]/page.jsx`.
- **Example data:** IBANs use check digits of 00, which are never valid, so they can't belong to anyone. Names and amounts are made up, and the footer says so.
