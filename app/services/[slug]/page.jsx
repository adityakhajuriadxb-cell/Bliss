import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PageHero from '@/components/site/PageHero';
import ScrollStory from '@/components/site/ScrollStory';
import Accordion from '@/components/site/Accordion';
import Closing from '@/components/home/Closing';
import Icon from '@/components/brand/Icon';
import { SERVICE_VISUALS } from '@/components/brand/ServiceVisuals';
import { SERVICES, getService } from '@/config/services';
import { SITE } from '@/config/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  return { title: `${service?.name} – ${SITE.name}`, description: service?.summary };
}

const CLOSING_PHOTO = {
  'cross-border-payments': 'pairStreet',
  'card-processing': 'workshopOwner',
  'on-ramp': 'twoMenLaptop',
  'off-ramp': 'manPhoneHills',
  'emi-accounts': 'teamLaptop',
  'iban-accounts': 'teamDashboard',
};

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const visuals = SERVICE_VISUALS[service.slug];

  const stories = service.steps.map((step, i) => ({
    id: step.title,
    label: step.title,
    title: step.title,
    text: step.text,
    visualClass: 'story__visual--center',
    visual: visuals.steps[i],
  }));

  return (
    <>
      <Header />
      <main>
        <PageHero
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'What we do', href: '/services' },
            { label: service.name, href: `/services/${service.slug}` },
          ]}
          eyebrow={service.tag ? `${service.audience} · ${service.tag}` : service.audience}
          title={service.headline}
          intro={service.intro}
          actions={
            <>
              <a href="#how-it-works" className="btn btn-mint btn-lg">See how it works</a>
              <span className="btn btn-lg btn-line btn-static">Launching soon</span>
            </>
          }
          visual={visuals.hero}
        />

        <section className="section" id="how-it-works">
          <div className="wrap">
            <div className="offset-head" data-reveal>
              <h2>Three steps.<br />Every number shown.</h2>
            </div>
            <ScrollStory items={stories} />
          </div>
        </section>

        <section className="section section--soft">
          <div className="wrap">
            <h2 className="left-head" data-reveal>What you get</h2>
            <ul className="features">
              {service.features.map((feature) => (
                <li key={feature.title} data-reveal>
                  <span className="ui-round ui-round--mint"><Icon name={feature.icon} size={20} /></span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="wrap faq">
            <div data-reveal>
              <h2>Who it’s for</h2>
              <ul className="uses">
                {service.useCases.map((use) => (
                  <li key={use.title}>
                    <span className="plan__tick"><Icon name="check" size={14} /></span>
                    <div>
                      <h3>{use.title}</h3>
                      <p>{use.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="faq__main" data-reveal>
              <h2>Questions</h2>
              <Accordion items={service.faqs} />
            </div>
          </div>
        </section>

        <section className="section section--soft">
          <div className="wrap">
            <div className="left-head" data-reveal>
              <h2>More from Bliss</h2>
              <p>Every service runs on the same account.</p>
            </div>
            <ul className="more">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <li key={s.slug} data-reveal>
                  <Link href={`/services/${s.slug}`}>
                    <span className="ui-round ui-round--white"><Icon name={s.icon} size={20} /></span>
                    <h3>{s.name}</h3>
                    <p>{s.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Closing title={`${service.name}, launching soon.`} text={service.summary} photo={CLOSING_PHOTO[service.slug]} />
      </main>
      <Footer />
    </>
  );
}
