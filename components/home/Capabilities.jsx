import Link from 'next/link';
import Icon from '@/components/brand/Icon';
import Photo from '@/components/site/Photo';
import { Rings, Message, EXAMPLE_IBAN, EXAMPLE_IBAN_2 } from '@/components/brand/AccountUI';
import { SERVICES } from '@/config/services';

// Each node sits on the hub diagram: x and y are percentages of the diagram.
const NODE_POSITIONS = [
  { x: 15, y: 14 },
  { x: 5, y: 50 },
  { x: 15, y: 86 },
  { x: 85, y: 14 },
  { x: 95, y: 50 },
  { x: 85, y: 86 },
];

const CHECKS = [
  { label: 'Fraud checks built in', tone: 'mint' },
  { label: 'Identity checks', tone: 'white' },
  { label: 'Every transfer tracked', tone: 'navy' },
];

export default function Capabilities() {
  return (
    <section className="section section--tight-top">
      <div className="wrap">
        <h2 className="center-head" data-reveal>What you can count on</h2>
        <div className="caps">
          <article className="cap cap--photo" data-reveal>
            <h3>Know the moment<br />money lands</h3>
            <p>We message you as soon as a payment arrives.</p>
            <div className="cap__photo"><Photo name="manPhoneCloseup" sizes="(max-width: 900px) 70vw, 400px" /></div>
            <div className="cap__msgs">
              <Message name="Amara">Has my payment arrived?</Message>
              <Message name="Bliss" tone="us">Received. €458.31 EUR landed in your account just now.</Message>
            </div>
          </article>

          <article className="cap cap--checks" data-reveal>
            <h3>Checks on every payment</h3>
            <p>We check each payment before it is approved, to protect you and the people you pay.</p>
            <div className="cap__rings">
              <Rings />
              <ul className="cap__chips">
                {CHECKS.map((check) => (
                  <li key={check.label} className={`cap__chip cap__chip--${check.tone}`}>
                    <Icon name="check" size={16} />
                    {check.label}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="cap cap--hub" data-reveal>
            <h3>Six ways to move money</h3>
            <p>Every service runs on the same account.</p>
            <div className="hub">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {NODE_POSITIONS.map((node) => (
                  <path
                    key={`${node.x}${node.y}`}
                    d={node.y === 50 ? `M${node.x} 50H50` : `M${node.x} ${node.y}H${node.x < 50 ? 34 : 66}V50H50`}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>
              <span className="hub__center"><img src="/brand/logos/bliss-mark-reversed.svg" alt="" /></span>
              {SERVICES.map((service, i) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="hub__node"
                  style={{ left: `${NODE_POSITIONS[i].x}%`, top: `${NODE_POSITIONS[i].y}%` }}
                >
                  <Icon name={service.icon} size={22} />
                  <span className="hub__label">{service.name}</span>
                </Link>
              ))}
            </div>
          </article>

          <article className="cap cap--deck" data-reveal>
            <h3>An IBAN for every customer</h3>
            <p>Give each customer their own virtual IBAN, so every payment is easy to match.</p>
            <div className="deck" aria-hidden="true">
              <div className="deck__tile deck__tile--c" />
              <div className="deck__tile deck__tile--b" />
              <div className="deck__tile deck__tile--a">
                <span className="deck__label">Customer 4821</span>
                <div>
                  <span className="deck__kicker">Virtual IBAN</span>
                  <span className="deck__iban">{EXAMPLE_IBAN_2}</span>
                </div>
                <div>
                  <span className="deck__kicker">Next customer</span>
                  <span className="deck__iban">{EXAMPLE_IBAN}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
