import ElementorSection from '@/components/ElementorSection';
import { SITE } from '@/config/site';
import { SERVICES } from '@/config/services';

const LEGAL_LINKS = [
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Terms and conditions', href: '/terms-and-conditions' },
  { label: 'Cookie policy', href: '/cookie-policy' },
  { label: 'Request account deletion', href: '/request-account-deletion' },
];

export default function Footer() {
  return (
    <ElementorSection sectionId="a1a4c99" columnId="624e515" widgetId="a77086b" widget="tp-footer" settings='{"background_background":"classic"}'>
      <footer className="footer-area section-py-80">
        <div className="container">
          <div className="footer__wrapper">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="footer__info text-center">
                  <div className="footer-logo">
                    <a href="/">
                      <img decoding="async" src={SITE.logo.footer} height="48" alt={SITE.legalName} />
                    </a>
                  </div>
                  <ul className="list-wrap footer__social">
                    <li>
                      <a href={SITE.social.twitter}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9027 8.46864L19.3482 0H17.5839L11.119 7.3532L5.95548 0H0L7.80821 11.1193L0 20H1.76443L8.59153 12.2347L14.0446 20H20L11.9027 8.46864ZM9.4861 11.2173L8.69497 10.1101L2.40018 1.29967H5.11026L10.1902 8.40995L10.9813 9.51717L17.5847 18.7595H14.8747L9.4861 11.2173Z" fill="currentColor" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={SITE.social.discord}><i className="fab fa-discord" /></a>
                    </li>
                    <li>
                      <a href={SITE.social.instagram}><i className="fab fa-instagram" /></a>
                    </li>
                    <li>
                      <a href={SITE.social.telegram}><i className="fab fa-telegram-plane" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <nav className="bl-footer-nav" aria-label="What we do">
              <a href="/services" className="bl-footer-nav__title">What we do</a>
              <ul className="list-wrap">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <a href={`/services/${s.slug}`}>{s.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="copyright__wrapper">
              <div className="row">
                <div className="col-md-6">
                  <div className="copyright__text">
                    <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="copyright__menu">
                    <ul className="list-wrap">
                      {LEGAL_LINKS.map((link) => (
                        <li key={link.href}>
                          <a href={link.href}>{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ElementorSection>
  );
}
