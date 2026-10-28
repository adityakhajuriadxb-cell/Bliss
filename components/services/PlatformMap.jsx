import Link from 'next/link';
import Icon from '@/components/brand/Icon';
import { getService } from '@/config/services';

// How the services fit together: money comes in, sits in a Bliss account, and goes out.
const COLUMNS = [
  { title: 'Money in', slugs: ['card-processing', 'iban-accounts', 'off-ramp'] },
  { title: 'Held in Bliss', slugs: ['emi-accounts'], hub: true },
  { title: 'Money out', slugs: ['cross-border-payments', 'on-ramp'] },
];

export default function PlatformMap() {
  return (
    <div className="bl-platform" data-anime="targets: > *; opacity:[0, 1]; translateX:[-24, 0]; onview: -200; delay: anime.stagger(80);">
      {COLUMNS.map((col, i) => (
        <div key={col.title} className={`bl-platform__col${col.hub ? ' is-hub' : ''}`}>
          <p className="bl-platform__title">{col.title}</p>
          {col.slugs.map((slug) => {
            const s = getService(slug);
            return (
              <Link key={slug} href={`/services/${slug}`} className="bl-platform__item">
                {col.hub ? (
                  <img src="/brand/logos/bliss-mark-reversed.svg" alt="" width="32" height="32" />
                ) : (
                  <Icon name={s.icon} size={22} />
                )}
                <span>
                  <strong>{s.name}</strong>
                  {col.hub && <small>Hold balances in many currencies</small>}
                </span>
              </Link>
            );
          })}
          {i < COLUMNS.length - 1 && (
            <span className="bl-platform__arrow" aria-hidden="true">
              <Icon name="arrowRight" size={24} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
