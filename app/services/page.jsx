import Link from 'next/link';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PageHero from '@/components/site/PageHero';
import Closing from '@/components/home/Closing';
import Icon from '@/components/brand/Icon';
import { IbanTile } from '@/components/brand/AccountUI';
import { SERVICE_VISUALS } from '@/components/brand/ServiceVisuals';
import { SERVICES } from '@/config/services';
import { SITE } from '@/config/site';

export const metadata = {
  title: `What we do – ${SITE.name}`,
  description:
    'Cross-border payments, card processing, on- and off-ramps, e-money accounts and IBAN accounts. Every rate and fee shown up front.',
};

const FLOW = [
  {
    title: 'Money comes in',
    items: [
      { label: 'Card payments', slug: 'card-processing' },
      { label: 'Virtual IBANs', slug: 'iban-accounts' },
      { label: 'Digital assets', slug: 'off-ramp' },
    ],
  },
  {
    title: 'It’s held in your account',
    center: true,
    items: [{ label: 'E-money accounts', slug: 'emi-accounts' }],
  },
  {
    title: 'Money goes out',
    items: [
      { label: 'Cross-border payments', slug: 'cross-border-payments' },
      { label: 'Digital assets', slug: 'on-ramp' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'What we do', href: '/services' },
          ]}
          title="Six ways to move money. One platform."
          intro="Take card payments, hold money in many currencies, send it across borders, and move between money and digital assets. Every rate and fee is shown before you confirm."
          visual={<IbanTile />}
        />

        <section className="section">
          <div className="wrap">
            <ul className="bento">
              {SERVICES.map((service) => (
                <li key={service.slug} data-reveal>
                  <Link href={`/services/${service.slug}`} className="bento__tile">
                    <div className="bento__visual" aria-hidden="true">{SERVICE_VISUALS[service.slug].hero}</div>
                    <div className="bento__copy">
                      <p className="eyebrow">{service.audience}</p>
                      <h2>{service.name}</h2>
                      <p>{service.summary}</p>
                      <span className="link-arrow">See how it works <Icon name="send" size={18} /></span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--soft">
          <div className="wrap">
            <div className="left-head" data-reveal>
              <h2>How it fits together</h2>
              <p>Money comes in, is held in your Bliss account, and goes out where it needs to be.</p>
            </div>
            <ol className="flow">
              {FLOW.map((step) => (
                <li key={step.title} className={step.center ? 'flow__step flow__step--center' : 'flow__step'} data-reveal>
                  <h3>{step.title}</h3>
                  <ul>
                    {step.items.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/services/${item.slug}`}>
                          {item.label}
                          <Icon name="arrowRight" size={18} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Closing
          title={<>Moving money,<br />in plain numbers.</>}
          text="We’re launching soon. Every service shows the rate and every fee before you confirm."
          photo="twoWomenCafe"
        />
      </main>
      <Footer />
    </>
  );
}
