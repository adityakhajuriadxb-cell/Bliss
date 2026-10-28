import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import SiteEffects from '@/components/SiteEffects';
import Footer from '@/components/sections/Footer';
import PageHero from '@/components/services/PageHero';
import ServiceCards from '@/components/services/ServiceCards';
import CtaBand from '@/components/services/CtaBand';
import ServiceVisual, { PORTAL_SECTION } from '@/components/brand/ServiceVisuals';
import Portal from '@/components/brand/Portal';
import { STEP_SCREENS } from '@/components/brand/StepVisuals';
import Icon from '@/components/brand/Icon';
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

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const screens = STEP_SCREENS[service.slug] ?? [];

  return (
    <>
      <Header />
      <main className="fix">
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
              <a href="#how-it-works" className="bl-btn bl-btn-primary bl-btn-lg">
                See how it works
                <Icon name="arrowRight" size={20} />
              </a>
              <span className="bl-pill">Launching soon</span>
            </>
          }
          visual={<ServiceVisual slug={service.slug} />}
        />

        <section className="bl-section" id="how-it-works">
          <div className="container">
            {/* Scroll story: the portal stays pinned while its page follows the step in view. */}
            <div className="row bl-scrolly" data-scrolly data-active="0">
              <div className="col-lg-5">
                <div className="bl-section__head bl-section__head--start">
                  <p className="bl-eyebrow bl-eyebrow--ink">How it works</p>
                  <h2>Three steps. Every number shown.</h2>
                </div>
                <div className="bl-scrolly__device">
                  <Portal section={PORTAL_SECTION[service.slug]}>
                    <div className="bl-scrolly__screens">
                      {screens.map((screen) => (
                        <div className="bl-scrolly__screen" key={screen.title}>
                          <p className="bl-portal__title">{screen.title}</p>
                          <div className="bl-portal__stack">{screen.body}</div>
                          <div className="bl-skeleton">
                            <span />
                            <span />
                            <span />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Portal>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <ol className="bl-scrolly__steps">
                  {service.steps.map((step, i) => (
                    <li className="bl-scrolly__step" data-step={i} key={step.title}>
                      {screens[i] && (
                        <Portal title={screens[i].title} section={PORTAL_SECTION[service.slug]} className="bl-scrolly__inline">
                          {screens[i].body}
                        </Portal>
                      )}
                      <span className="bl-scrolly__num">{String(i + 1).padStart(2, '0')}</span>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bl-section bl-section--raised">
          <div className="container">
            <div className="bl-section__head">
              <h2>What you get</h2>
            </div>
            <div className="row" data-anime="targets: > *; opacity:[0, 1]; translateX:[-24, 0]; onview: -200; delay: anime.stagger(60);">
              {service.features.map((f) => (
                <div className="col-lg-3 col-sm-6" key={f.title}>
                  <div className="bl-feature">
                    <span className="bl-feature__icon">
                      <Icon name={f.icon} size={26} />
                    </span>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bl-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="bl-section__head bl-section__head--start">
                  <h2>Who it's for</h2>
                </div>
                <ul className="bl-uses">
                  {service.useCases.map((u) => (
                    <li key={u.title}>
                      <Icon name="check" size={20} className="bl-icon--done" />
                      <div>
                        <h3>{u.title}</h3>
                        <p>{u.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="bl-section__head bl-section__head--start">
                  <h2>Questions</h2>
                </div>
                <div className="bl-faq">
                  {service.faqs.map((f) => (
                    <details key={f.q}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bl-section bl-section--raised">
          <div className="container">
            <div className="bl-section__head bl-section__head--start">
              <h2>More from Bliss</h2>
              <p>Every service runs on the same account.</p>
            </div>
            <ServiceCards exclude={service.slug} />
          </div>
        </section>

        <CtaBand title={`${service.name}, launching soon`} text={service.summary} />
        <Footer />
      </main>
      <SiteEffects />
    </>
  );
}
