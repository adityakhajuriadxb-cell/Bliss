import { SITE } from '@/config/site';
import Effects from '@/components/site/Effects';
import './globals.css';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} – ${SITE.tagline}`,
  description: SITE.description,
  robots: { 'max-image-preview': 'large' },
};

export const viewport = {
  themeColor: '#0B1F3A',
};

// Runs before first paint so scroll-in content is only hidden when the script that reveals it can run.
const JS_FLAG = "document.documentElement.classList.add('js')";

export default function RootLayout({ children }) {
  return (
    // data-scroll-behavior: page changes jump straight to the top; only same-page links scroll smoothly.
    <html lang="en-US" data-theme="light" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/brand/tokens.css" />
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </head>
      <body>
        {children}
        <Effects />
      </body>
    </html>
  );
}
