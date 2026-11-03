import Link from 'next/link';
import Icon from '@/components/brand/Icon';

// Prices aren't confirmed, so each plan shows the fee promise. When they are, add `price`
// and `period` to a plan and they appear in its place.
const PLANS = [
  {
    name: 'People',
    text: 'For sending money to family and friends.',
    href: '/services/cross-border-payments',
    cta: 'Send money',
    listTitle: 'What you get',
    features: ['Send to 160+ countries', 'Every fee shown up front', 'Track every transfer', 'Buy and sell digital assets'],
  },
  {
    name: 'Businesses',
    text: 'For paying and getting paid across borders.',
    href: '/services/emi-accounts',
    cta: 'Open an account',
    listTitle: 'Everything for people, plus',
    features: ['Virtual IBANs for euro payments', 'Accounts in many currencies', 'Card payments into your account', 'Every fee on one statement'],
    featured: true,
  },
  {
    name: 'Platforms',
    text: 'For offering accounts inside your own product.',
    href: '/services/iban-accounts',
    cta: 'Create IBANs',
    listTitle: 'Everything for businesses, plus',
    features: ['An IBAN per customer', 'Accounts under your brand', 'API access', 'Payments matched to customers'],
  },
];

export default function Plans() {
  return (
    <section className="section section--tight-top" id="plans">
      <div className="wrap">
        <div className="left-head" data-reveal>
          <h2>Moving money<br />at any scale</h2>
          <p>Choose what fits. You see the rate and every fee before you confirm, on every plan.</p>
        </div>
        <div className="plans">
          {PLANS.map((plan) => (
            <article key={plan.name} className={`plan${plan.featured ? ' plan--featured' : ''}`} data-reveal>
              <h3>{plan.name}</h3>
              {plan.price ? (
                <p className="plan__price">{plan.price}{plan.period && <small>{plan.period}</small>}</p>
              ) : (
                <p className="plan__price plan__price--promise">Fees shown before you confirm</p>
              )}
              <p className="plan__text">{plan.text}</p>
              <Link href={plan.href} className={`btn btn-block ${plan.featured ? 'btn-mint' : 'btn-navy'}`}>{plan.cta}</Link>
              <p className="plan__list-title">{plan.listTitle}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="plan__tick"><Icon name="check" size={14} /></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
