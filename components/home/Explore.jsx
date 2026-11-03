import Link from 'next/link';
import Photo from '@/components/site/Photo';
import { SERVICES } from '@/config/services';
import { SITE } from '@/config/site';

// The reference's article carousel, pointed at Bliss's products until there are articles to show.
const PHOTO_BY_SERVICE = {
  'cross-border-payments': 'friendsPhoneCafe',
  'card-processing': 'manSuitLaptop',
  'on-ramp': 'twoMenLaptop',
  'off-ramp': 'manLaptop',
  'emi-accounts': 'teamLaptop',
  'iban-accounts': 'teamDashboard',
};

export default function Explore() {
  return (
    <section className="section section--tight-top">
      <div className="wrap">
        <div className="between-head" data-reveal>
          <h2>Explore what Bliss does</h2>
          <Link href="/services" className="btn btn-navy">View all products</Link>
        </div>
      </div>
      <ul className="explore" tabIndex={0} aria-label={`${SITE.name} products`}>
        {SERVICES.map((service) => (
          <li key={service.slug}>
            <Link href={`/services/${service.slug}`} className="explore__tile">
              <Photo name={PHOTO_BY_SERVICE[service.slug]} sizes="470px" decorative />
              <span className="explore__meta">{service.audience}</span>
              <span className="explore__title">{service.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
