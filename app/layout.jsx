import { SITE } from '@/config/site';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} – ${SITE.tagline}`,
  description: SITE.description,
  robots: { 'max-image-preview': 'large' },
};

export const viewport = {
  themeColor: '#0B1F3A',
};

// Theme stylesheets, in the same order the original WordPress page loaded them.
const STYLESHEETS = [
  'wp-early',
  'subscription',
  'wp-global',
  'styles',
  'nerko-custom',
  'nerko-custom-inline',
  'bootstrap.min',
  'animate.min',
  'fontawesome-all.min',
  'default-icons',
  'unicons',
  'fonts',
  'spacing',
  'nerko-core',
  'nerko-unit',
  'style',
  'frontend.min',
  'post-6',
  'post-24',
  'google-roboto',
  'google-roboto-slab',
  'unicons-icons',
  'wp-custom',
];

// Bliss brand kit (public/brand/) and the overrides that apply it to the theme. Loaded last so they win.
const BRAND_STYLESHEETS = ['/brand/tokens.css', '/brand/components.css', '/assets/css/bliss.css'];

const BODY_CLASSES =
  'home page-template page-template-elementor_header_footer page wp-custom-logo wp-embed-responsive ' +
  'no-sidebar elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-24';

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" tg-theme="light" data-theme="light">
      <head>
        {STYLESHEETS.map((name) => (
          <link key={name} rel="stylesheet" href={`/assets/css/${name}.css`} />
        ))}
        {BRAND_STYLESHEETS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body className={BODY_CLASSES}>{children}</body>
    </html>
  );
}
