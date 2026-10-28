# Website (Next.js)

Next.js version of the original WordPress landing page.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Change the brand

Everything brand-related is in `config/site.js`:

- `name`, `domain`, `url`, `description`: site name, browser title, footer copyright
- `logo`: logo image paths (the current files still show the old logo, so replace them in `public/assets/images/`)
- `legal`: company name and registration numbers in the footer disclaimer
- `nav`, `social`: menu and social links

The favicon is `app/icon.png` (and `app/apple-icon.png`).

## Structure

- `app/page.jsx`: the homepage, built from the section components
- `app/[slug]/page.jsx`: Privacy, Terms, Cookie and Account Deletion pages (add their content here)
- `components/sections/`: one component per page section
- `components/Header.jsx`: sticky header and mobile menu
- `components/SiteEffects.jsx`: scroll-in animations (anime.js) and the image slider (Swiper)
- `public/assets/`: the original theme CSS, fonts and images
