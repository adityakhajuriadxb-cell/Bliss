import Link from 'next/link';

// The reference's card tiers, as tall virtual account tiles. Only what config/services.js offers.
const TYPES = [
  {
    name: 'Business IBAN',
    text: 'A virtual IBAN in your business name, for euro payments.',
    tone: 'navy',
    code: 'EUR',
    reference: 'DE00 1000 0000 0000 2616 00',
    holder: 'Okafor Studio',
    href: '/services/iban-accounts',
  },
  {
    name: 'Customer IBANs',
    text: 'One virtual IBAN per customer, so payments match themselves.',
    tone: 'green',
    code: 'EUR',
    reference: 'DE00 1000 0000 0000 7731 42',
    holder: 'Customer 4821',
    href: '/services/iban-accounts',
  },
  {
    name: 'Multi-currency',
    text: 'Hold, send and receive in the currencies you work in.',
    tone: 'slate',
    code: 'USD',
    reference: 'Account •••• 2589',
    holder: 'Harbour Trading',
    href: '/services/emi-accounts',
  },
  {
    name: 'Your brand',
    text: 'Offer accounts to your customers inside your own product.',
    tone: 'mist',
    code: 'API',
    reference: 'Account •••• 5120',
    holder: 'Your customer',
    href: '/services/emi-accounts',
  },
];

export default function AccountTypes() {
  return (
    <section className="section section--tight-top" id="accounts">
      <div className="wrap">
        <h2 className="left-head" data-reveal>Bliss account types</h2>
        <ul className="tiers">
          {TYPES.map((type) => (
            <li key={type.name} data-reveal>
              <Link href={type.href} className="tier">
                <div className={`tier__tile tier__tile--${type.tone}`}>
                  <span className="tier__code">{type.code}</span>
                  <div className="tier__lines">
                    <span className="tier__ref">{type.reference}</span>
                    <span className="tier__holder">{type.holder}</span>
                  </div>
                </div>
                <h3>{type.name}</h3>
                <p>{type.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
