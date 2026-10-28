import Header from '@/components/Header';
import SiteEffects from '@/components/SiteEffects';
import Footer from '@/components/sections/Footer';
import PageHero from '@/components/services/PageHero';
import CtaBand from '@/components/services/CtaBand';
import Icon from '@/components/brand/Icon';
import LicenceCard from '@/components/compliance/LicenceCard';
import RegulatoryStatement from '@/components/compliance/RegulatoryStatement';
import { COMPLIANCE } from '@/config/compliance';
import { SITE } from '@/config/site';

export const metadata = {
  title: `Compliance – ${SITE.name}`,
  description: `How ${SITE.legalName} is registered, how we verify customers and watch for financial crime, and how we protect your data.`,
};

// Hero visual: the credentials as a stack of cards, each at its own depth.
function CredentialStack() {
  const speeds = ['0.02', '0.1', '0.18'];
  return (
    <div className="bl-licence-stack">
      {COMPLIANCE.credentials.map((c, i) => (
        <div className="bl-licence-stack__item" key={c.authority} data-parallax={speeds[i] ?? '0.1'}>
          <LicenceCard credential={c} light />
        </div>
      ))}
    </div>
  );
}

export default function CompliancePage() {
  return (
    <>
      <Header />
      <main className="fix">
        <PageHero
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Compliance', href: '/compliance' },
          ]}
          eyebrow="Compliance and security"
          title="Registered, checked and protected."
          intro={`Moving money comes with rules. Here is who ${SITE.legalName} is registered with, how we check who we work with, and how we protect your money and data.`}
          visual={<CredentialStack />}
        />

        <section className="bl-section">
          <div className="container">
            <div className="bl-section__head">
              <h2>Our registrations</h2>
              <p>Where we are registered, and who we work with to serve each market.</p>
            </div>
            <div className="row justify-content-center" data-anime="targets: > *; opacity:[0, 1]; translateX:[-24, 0]; onview: -200; delay: anime.stagger(80);">
              {COMPLIANCE.credentials.map((c) => (
                <div className="col-lg-4 col-md-6" key={c.authority}>
                  <LicenceCard credential={c} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bl-section bl-section--raised">
          <div className="container">
            <div className="bl-section__head">
              <h2>How we stay compliant</h2>
              <p>The checks behind every account and every transfer.</p>
            </div>
            <div className="row" data-anime="targets: > *; opacity:[0, 1]; translateX:[-24, 0]; onview: -200; delay: anime.stagger(60);">
              {COMPLIANCE.pillars.map((p) => (
                <div className="col-lg-4 col-md-6" key={p.title}>
                  <div className="bl-feature">
                    <span className="bl-feature__icon">
                      <Icon name={p.icon} size={26} />
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bl-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="bl-section__head bl-section__head--start">
                  <h2>Regulatory statement</h2>
                </div>
                <RegulatoryStatement className="bl-legal-text" />
              </div>
              <div className="col-lg-4 offset-lg-1">
                <aside className="bl-concern">
                  <span className="bl-feature__icon">
                    <Icon name="support" size={26} />
                  </span>
                  <h3>Report a concern</h3>
                  <p>Seen something that looks like fraud, or have a question about how we handle your data? Write to our compliance team.</p>
                  <a href={`mailto:${COMPLIANCE.contact}`} className="bl-concern__mail">
                    {COMPLIANCE.contact}
                  </a>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <CtaBand title="Moving money, by the rules" text="Every account is verified. Every transfer is checked. Every fee is shown." />
        <Footer />
      </main>
      <SiteEffects />
    </>
  );
}
