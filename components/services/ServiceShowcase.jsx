'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/brand/Icon';
import SpeedBand from '@/components/brand/SpeedBand';
import { ServiceScreen } from '@/components/brand/ServiceVisuals';
import { SERVICES } from '@/config/services';

// Homepage "What we do": the services as a list on the left and, on the right, the open
// service's page in the web portal. The list moves on by itself (the mint bar under the
// open item shows when) until someone picks a service, hovers or focuses it; under
// reduced motion the bar never runs, so it doesn't move on at all (see bliss.css).
export default function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  const open = (i) => {
    setActive(i);
    setAuto(false);
  };

  // The bar's fill animation ending is the cue to move on.
  const next = (e) => {
    if (e.animationName === 'blShowcaseBar') setActive((i) => (i + 1) % SERVICES.length);
  };

  return (
    <div className={`bl-showcase${auto ? ' is-auto' : ''}`}>
      <ul className="bl-showcase__list">
        {SERVICES.map((s, i) => {
          const isOpen = i === active;
          return (
            <li key={s.slug} className={`bl-showcase__item${isOpen ? ' is-open' : ''}`}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`showcase-${s.slug}`}
                  onClick={() => open(i)}
                >
                  <Icon name={s.icon} size={22} />
                  {s.name}
                </button>
              </h3>
              <div className="bl-showcase__detail" id={`showcase-${s.slug}`}>
                <div>
                  <p>{s.summary}</p>
                  <Link href={`/services/${s.slug}`} tabIndex={isOpen ? undefined : -1}>
                    Learn more
                    <Icon name="arrowRight" size={18} />
                  </Link>
                </div>
              </div>
              <span className="bl-showcase__bar" aria-hidden="true">
                {isOpen && <i onAnimationEnd={next} />}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="bl-showcase__stage" aria-hidden="true">
        <SpeedBand tone="dark" className="bl-showcase__band" />
        {SERVICES.map((s, i) => (
          <div key={s.slug} className="bl-showcase__screen" data-active={i === active || undefined}>
            <ServiceScreen slug={s.slug} />
          </div>
        ))}
        <p className="bl-showcase__caption">Example. Names and amounts are for illustration.</p>
      </div>
    </div>
  );
}
