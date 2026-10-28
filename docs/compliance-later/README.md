# Compliance content (not on the site)

Taken off the site on 2026-10-29: Bliss Technology's licences are still being processed in several countries, so the site makes no claims about registrations, licences or regulators until they are granted.

What's here, at the paths it had in the app:

- `app/compliance/page.jsx`: the /compliance page
- `components/compliance/`: the credentials strip shown under each hero, the licence card, and the regulatory statement that was in the footer
- `config/compliance.js`: the credentials, the "how we stay compliant" points and the compliance email
- `compliance.css`: their styles, cut from `public/assets/css/bliss.css`

To bring them back once licences are granted and your compliance lead has signed off the wording:

1. Move the files back to the same paths, and paste `compliance.css` back into `bliss.css` (the small-screen rules go inside its `@media (max-width: 991.98px)` block).
2. Restore `SITE.legal` in `config/site.js` (`companyName`, `jurisdiction`, `corporationNo`, `msbRegistrationNo`), which these files read.
3. Add back `<CredentialsStrip />` under the hero on the homepage, /services and each service page; `<RegulatoryStatement />` in the footer; and the Compliance links in the nav and footer.
4. Rewrite every credential to match the licences actually granted. The current text names FINTRAC, PCMLTFA and EEA/UK licensed partners.
