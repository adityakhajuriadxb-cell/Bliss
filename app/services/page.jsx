import Header from '@/components/Header';
import SiteEffects from '@/components/SiteEffects';
import Footer from '@/components/sections/Footer';
import PageHero from '@/components/services/PageHero';
import ServiceBento from '@/components/services/ServiceBento';
import PlatformMap from '@/components/services/PlatformMap';
import CtaBand from '@/components/services/CtaBand';
import SpeedBand from '@/components/brand/SpeedBand';
import { SITE } from '@/config/site';

export const metadata = {
  title: `What we do – ${SITE.name}`,
  description:
    'Cross-border payments, card processing, on- and off-ramps, e-money accounts and IBAN accounts. Every rate and fee shown up front.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="fix">
        <PageHero
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'What we do', href: '/services' },
          ]}
          eyebrow="What we do"
          title="Six ways to move money. One platform."
          intro="Take card payments, hold money in many currencies, send it across borders, and move between money and digital assets. Every rate and fee is shown before you confirm."
          visual={<SpeedBand tone="dark" className="bl-page-hero__band" data-parallax="0.12" data-parallax-axis="x" />}
        />

        <section className="bl-section">
          <div className="container">
            <ServiceBento />
          </div>
        </section>

        <section className="bl-section bl-section--raised">
          <div className="container">
            <div className="bl-section__head">
              <h2>How it fits together</h2>
              <p>Money comes in, is held in your Bliss account, and goes out where it needs to be.</p>
            </div>
            <PlatformMap />
          </div>
        </section>

        <CtaBand
          title="Moving money, in plain numbers"
          text="We're launching soon. Every service shows the rate and every fee before you confirm."
        />
        <Footer />
      </main>
      <SiteEffects />
    </>
  );
}
