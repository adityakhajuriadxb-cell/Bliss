import Link from 'next/link';
import { SITE } from '@/config/site';
import { SERVICES } from '@/config/services';

const LEGAL_LINKS = [
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Terms and conditions', href: '/terms-and-conditions' },
  { label: 'Cookie policy', href: '/cookie-policy' },
  { label: 'Request account deletion', href: '/request-account-deletion' },
];

const COMPANY_LINKS = [
  { label: 'All products', href: '/services' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Accounts', href: '/#accounts' },
  { label: 'FAQ', href: '/#faq' },
];

const SOCIAL_ICONS = {
  facebook: 'M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h2.5l.5-3h-3V9a1 1 0 0 1 1-1Z',
  instagram: 'M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4ZM15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM17 7h.01',
  x: 'M5 5l14 14M19 5 5 19',
};

export default function Footer() {
  const socials = Object.entries(SITE.social).filter(([, url]) => url);
  const { email, phone } = SITE.contact;

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__top">
          <div className="site-footer__about">
            <Link href="/" aria-label={`${SITE.name} home`}>
              <img src={SITE.logo} alt="" height="32" />
            </Link>
            <p>Bliss moves money across borders for people and businesses. See the rate and every fee before you send.</p>
          </div>
          <div className="site-footer__news">
            {SITE.newsletterUrl ? (
              <form action={SITE.newsletterUrl} method="post">
                <label htmlFor="newsletter-email">Get launch news</label>
                <div className="site-footer__field">
                  <input id="newsletter-email" name="email" type="email" required placeholder="Enter your email" autoComplete="email" />
                  <button type="submit" className="btn btn-white">Subscribe</button>
                </div>
              </form>
            ) : (
              <>
                <p className="site-footer__label">We’re launching soon</p>
                <p className="site-footer__note">See what you’ll be able to do with Bliss.</p>
                <Link href={SITE.cta.href} className="btn btn-white">{SITE.cta.label}</Link>
              </>
            )}
          </div>
        </div>

        <div className="site-footer__cols">
          <nav aria-label="Products">
            <p className="site-footer__label">Products</p>
            <ul>
              {SERVICES.slice(0, 3).map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Accounts">
            <p className="site-footer__label">Accounts</p>
            <ul>
              {SERVICES.slice(3).map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company">
            <p className="site-footer__label">Company</p>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="site-footer__label">{email || phone ? 'Connect' : 'Good to know'}</p>
            <ul>
              {email && <li><a href={`mailto:${email}`}>{email}</a></li>}
              {phone && <li><a href={`tel:${phone}`}>{phone}</a></li>}
              {!email && !phone && <li className="site-footer__muted">Bliss is not a bank. Account details and amounts shown on this site are examples.</li>}
            </ul>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <ul>
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
          {socials.length > 0 && (
            <ul className="site-footer__social">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} aria-label={name}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d={SOCIAL_ICONS[name]} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <img className="site-footer__giant" src={SITE.logo} alt="" />
      </div>
    </footer>
  );
}
