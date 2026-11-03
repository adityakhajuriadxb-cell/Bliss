import Link from 'next/link';
import Icon from '@/components/brand/Icon';
import { Badge, EXAMPLE_IBAN, EXAMPLE_IBAN_2 } from '@/components/brand/AccountUI';
import { SITE } from '@/config/site';
import { SERVICES } from '@/config/services';

const CURRENCIES = ['€', '$', '£', '¥'];

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1>One account.<br />Every border.</h1>
          <p>Get virtual IBANs and accounts in many currencies. See the rate and every fee before you send. Most transfers arrive in seconds.</p>
          <Link href={SITE.cta.href} className="btn btn-mint btn-lg">{SITE.cta.label}</Link>
          <div className="hero__proof">
            <span className="hero__stack" aria-hidden="true">
              {CURRENCIES.map((c) => <span key={c}>{c}</span>)}
            </span>
            <p>Send to 160+ countries<br />in dozens of currencies</p>
          </div>
        </div>

        {/* The isometric stack: virtual accounts take the place of payment cards. */}
        <div className="hero__visual" aria-label="Example of a Bliss virtual IBAN account" role="img">
          <div className="iso iso--back">
            <span className="iso__label">Virtual IBAN · EUR</span>
            <span className="iso__number">{EXAMPLE_IBAN_2}</span>
          </div>

          <div className="iso iso--main">
            <span className="iso__cur">EUR</span>
            <div className="iso__lines">
              <span className="iso__number">{EXAMPLE_IBAN}</span>
              <span className="iso__name">Amara Okafor</span>
            </div>
          </div>

          <div className="iso iso--balance">
            <div className="ui-row">
              <span className="ui-chip ui-chip--small"><span className="ui-sym">€</span>EUR</span>
              <Badge>Active</Badge>
            </div>
            <p className="ui-kicker">Your balance</p>
            <p className="ui-amount ui-amount--sm">€7,204.10</p>
            <p className="ui-kicker">Account</p>
            <p className="ui-mono ui-small">•••• 2616</p>
          </div>
          <div className="iso iso--pill iso--pill-a">Send</div>
          <div className="iso iso--pill iso--pill-b">Add money</div>

          <div className="iso iso--incoming">
            <p className="ui-kicker">Incoming payment</p>
            <div className="ui-row">
              <Badge>Received</Badge>
              <strong className="ui-tab">€1,280.00</strong>
            </div>
            <p className="ui-kicker">Your IBAN</p>
            <p className="ui-mono ui-small">DE00 •••• 2616 00</p>
          </div>

          <div className="hero__copy-iban">
            <span>Copy IBAN</span>
            <span className="ui-round ui-round--navy"><Icon name="copy" size={18} /></span>
          </div>
        </div>
      </div>

      <div className="hero__logos" aria-label="What you can do with Bliss">
        <div className="marquee marquee--slow">
          {[0, 1].map((group) => (
            <ul key={group} aria-hidden={group === 1 ? 'true' : undefined}>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Icon name={s.icon} size={24} />
                  {s.name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
