import Link from 'next/link';
import Icon from '@/components/brand/Icon';
import { SERVICES } from '@/config/services';

// A compact list of services, one row each, linking to its page. `exclude` hides the
// current service. Used for "More from Bliss" at the end of each service page.
export default function ServiceCards({ exclude }) {
  const services = SERVICES.filter((s) => s.slug !== exclude);
  return (
    <ul className="bl-service-rows" data-anime="targets: > *; opacity:[0, 1]; translateX:[-24, 0]; onview: -120; delay: anime.stagger(60);">
      {services.map((s) => (
        <li key={s.slug}>
          <Link href={`/services/${s.slug}`} className="bl-service-row">
            <span className="bl-service-row__icon">
              <Icon name={s.icon} size={22} />
            </span>
            <span className="bl-service-row__name">{s.name}</span>
            <span className="bl-service-row__summary">{s.summary}</span>
            <span className="bl-service-row__arrow">
              <Icon name="arrowRight" size={22} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
