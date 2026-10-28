# Bliss website (Next.js)

Landing page for Bliss, built on a Next.js port of the original WordPress theme and restyled to the Bliss brand.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Brand

The brand guidelines are in `docs/brand/BRAND.md` (with the original kit in `docs/brand/bliss-brand-kit.zip`). Follow them for any new copy or design:

- In copy the name is always **Bliss**. The legal name **Bliss Technology** is only for the footer and legal text.
- Navy for trust, mint for money in motion: one mint primary action per screen.
- Sora for headings and amounts, Inter for text, JetBrains Mono for references.
- Sentence case everywhere; numbers beat adjectives.

Brand settings (name, tagline, logos, legal details, nav) are in `config/site.js`. The favicon is `app/icon.svg` and the home-screen icon is `app/apple-icon.png`.

## Structure

- `app/page.jsx`: the homepage, built from the section components
- `app/services/`: the "What we do" overview (`/services`) and one page per service (`/services/<slug>`)
- `config/services.js`: the six services and all their page copy (steps, features, use cases, FAQs). Add or edit a service here and its page, cards, menu and footer links update
- `app/[slug]/page.jsx`: Privacy, Terms, Cookie and Account Deletion pages (add their content here)
- `components/sections/`: one component per page section
- `components/brand/`: brand graphics built from the kit: the speed band, dot globe, outline icons and example transfer cards
- `components/services/`: service sections: the homepage showcase (`ServiceShowcase.jsx`), the grouped tiles on /services (`ServiceBento.jsx`), the "More from Bliss" rows (`ServiceCards.jsx`), page hero, platform diagram and CTA band
- `components/brand/Logo.jsx`: the header lockup as inline SVG so its blocks can animate (motion lives in `bliss.css` under "Logo in motion")
- `components/brand/Portal.jsx` and `AppUI.jsx`: the web portal window (browser chrome, sidebar, page) and the UI pieces used in every service hero (`ServiceVisuals.jsx`) and "How it works" scroll story (`StepVisuals.jsx`)
- `app/compliance/` and `config/compliance.js`: the Compliance page and the credentials strip shown under each hero. List only registrations and certifications Bliss Technology actually holds
- `components/compliance/`: credentials strip, licence card and the regulatory statement (also used in the footer)
- `components/Header.jsx`: sticky header and mobile menu
- `components/SiteEffects.jsx`: scroll-in animations (anime.js) and scroll-linked parallax (`data-parallax`, `data-scroll-reveal`), all off under reduced motion
- `public/brand/`: the brand kit: tokens, component styles, fonts and logos
- `public/assets/css/bliss.css`: applies the brand to the theme; loaded after the theme CSS
- `public/assets/`: the original theme CSS and fonts
