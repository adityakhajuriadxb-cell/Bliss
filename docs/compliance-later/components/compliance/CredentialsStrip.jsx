import Link from 'next/link';
import Icon from '@/components/brand/Icon';
import { COMPLIANCE } from '@/config/compliance';

// The trust strip under a hero: who Bliss is registered with, and a link to the details.
export default function CredentialsStrip() {
  return (
    <section className="bl-trust" aria-label="Registration and compliance">
      <div className="container">
        <div className="bl-trust__inner">
          <p className="bl-trust__label">Registered and regulated</p>
          <ul className="bl-trust__list">
            {COMPLIANCE.credentials.map((c) => (
              <li key={c.authority}>
                <span className="bl-trust__mark">
                  <Icon name="shield" size={20} />
                </span>
                <span>
                  <strong>{c.authority}</strong>
                  <small>{c.title}</small>
                </span>
              </li>
            ))}
          </ul>
          <Link href="/compliance" className="bl-trust__link">
            How we stay compliant
            <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
