'use client';

import { useState } from 'react';
import Icon from '@/components/brand/Icon';
import Photo from '@/components/site/Photo';

// The reference has customer quotes here. Bliss has no published customers yet, so this slider
// carries its own promises instead. Swap in real quotes once they are approved for use.
const PROMISES = [
  { title: 'Your money arrives.', text: 'On time, in full, with nothing hidden.', photo: 'manLaptop' },
  { title: 'Sent in seconds.', text: 'Most transfers arrive in seconds. If one takes longer, we tell you why and when to expect it.', photo: 'womanLaptop' },
  { title: 'Seen to the cent.', text: 'You see the rate, the fee and exactly what arrives before you confirm. Nothing is added after.', photo: 'manSuitLaptop' },
];

const STATS = [
  { value: '160+', label: 'Countries you can send to' },
  { value: 'Seconds', label: 'How long most transfers take' },
  { value: 'Dozens', label: 'Of currencies from one account' },
];

export default function PromiseBand() {
  const [active, setActive] = useState(0);
  const count = PROMISES.length;
  const item = PROMISES[active];

  return (
    <section className="section section--tight-top" id="promise">
      <div className="wrap">
        <div className="promise" data-reveal>
          <div className="promise__media">
            {PROMISES.map((promise, i) => (
              <div key={promise.photo} className={`promise__photo${i === active ? ' is-active' : ''}`}>
                <Photo name={promise.photo} sizes="(max-width: 900px) 100vw, 440px" decorative={i !== active} />
              </div>
            ))}
          </div>
          <div className="promise__copy">
            <h2>Plain numbers.<br />Nothing hidden.</h2>
            <p className="promise__intro">Fast is easy. Safe is the work. Here’s what we promise every time you send.</p>
            <div className="promise__quote" aria-live="polite" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
            <div className="promise__nav">
              <button type="button" aria-label="Previous promise" onClick={() => setActive((active + count - 1) % count)}>
                <Icon name="arrowLeft" size={22} />
              </button>
              <button type="button" aria-label="Next promise" onClick={() => setActive((active + 1) % count)}>
                <Icon name="arrowRight" size={22} />
              </button>
            </div>
          </div>
        </div>

        <div className="promise__bar" aria-hidden="true">
          <span style={{ width: `${((active + 1) / count) * 100}%` }} />
        </div>

        <dl className="stats">
          {STATS.map((stat) => (
            <div key={stat.label} data-reveal>
              <dd>{stat.value}</dd>
              <dt>{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
