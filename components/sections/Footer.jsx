import ElementorSection from '@/components/ElementorSection';
import { SITE } from '@/config/site';

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms and Conditions', href: '/terms-and-conditions' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Request Account Deletion', href: '/request-account-deletion' },
];

export default function Footer() {
  const { legal } = SITE;

  return (
    <ElementorSection sectionId="a1a4c99" columnId="624e515" widgetId="a77086b" widget="tp-footer" settings='{"background_background":"classic"}'>
      <footer className="footer-area section-py-80">
        <div className="container">
          <div className="footer__wrapper">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
                <div className="footer__info text-center">
                  <div className="footer-logo">
                    <a href="/">
                      <img decoding="async" src={SITE.logo.footer} width="200" alt={SITE.name} />
                    </a>
                  </div>
                  <p>
                    {legal.companyName} is incorporated in {legal.jurisdiction} (Corporation No. {legal.corporationNo}) and
                    is registered as a Money Services Business (MSB) with the Financial Transactions and Reports Analysis
                    Centre of Canada (FINTRAC), Registration No. {legal.msbRegistrationNo}, under the Proceeds of Crime
                    (Money Laundering) and Terrorist Financing Act (PCMLTFA). {legal.companyName} is not authorised or
                    registered by the Financial Conduct Authority (FCA) and is not a licensed payment service provider in
                    the European Economic Area. Money transfer services in the EEA and United Kingdom are facilitated
                    through regulated Licensed Partners who hold their own applicable authorisations. {SITE.name} does not
                    hold customer funds. Past exchange rates are not indicative of future rates. {SITE.name} is intended
                    for personal remittance use only; commercial transactions are not permitted.
                  </p>
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
            <div className="copyright__wrapper">
              <div className="row">
                <div className="col-md-6">
                  <div className="copyright__text">
                    <p>Copyright © {new Date().getFullYear()} {SITE.name} – All Rights Reserved</p>
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
