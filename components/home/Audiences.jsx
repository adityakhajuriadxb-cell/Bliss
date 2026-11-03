'use client';

import { useState } from 'react';
import Link from 'next/link';
import Photo from '@/components/site/Photo';
import { BalancePanel } from '@/components/brand/AccountUI';

const TABS = [
  {
    label: 'People',
    text: 'Send money home every month, and follow each transfer until it lands.',
    photo: 'womanCafe',
    href: '/services/cross-border-payments',
    cta: 'Send money',
    panel: { currency: 'USD', currencyName: 'US dollar', symbol: '$', amount: '1,240.00', reference: '•••• 2589' },
  },
  {
    label: 'Businesses',
    text: 'Pay staff and suppliers abroad, and hold money in the currencies you trade in.',
    photo: 'teamLaptop',
    href: '/services/emi-accounts',
    cta: 'Open an account',
    panel: { currency: 'EUR', currencyName: 'Euro account', symbol: '€', amount: '48,902.15', reference: '•••• 2616' },
  },
  {
    label: 'Platforms',
    text: 'Give your users accounts and virtual IBANs through our API, under your brand.',
    photo: 'teamDashboard',
    href: '/services/iban-accounts',
    cta: 'Create IBANs',
    panel: { currency: 'EUR', currencyName: 'Customer IBAN', symbol: '€', amount: '3,118.40', reference: '•••• 7731' },
  },
  {
    label: 'Marketplaces',
    text: 'Collect payments, match each one to the right seller, and pay out on time.',
    photo: 'twoWomenCafe',
    href: '/services/card-processing',
    cta: 'Take payments',
    panel: { currency: 'GBP', currencyName: 'Pound account', symbol: '£', amount: '12,660.72', reference: '•••• 5120' },
  },
];

export default function Audiences() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="section section--tight-top" id="who-its-for">
      <div className="wrap">
        <h2 className="left-head" data-reveal>Built for how<br />you move money</h2>
        <div className="tabs" data-reveal>
          <div className="tabs__side">
            <div className="tabs__list" role="tablist" aria-label="Who Bliss is for">
              {TABS.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  role="tab"
                  id={`audience-tab-${i}`}
                  aria-controls="audience-panel"
                  aria-selected={i === active}
                  className={i === active ? 'is-active' : ''}
                  onClick={() => setActive(i)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="tabs__copy" key={tab.label}>
              <p>{tab.text}</p>
              <Link href={tab.href} className="btn btn-mint">{tab.cta}</Link>
            </div>
          </div>
          <div className="tabs__media" role="tabpanel" id="audience-panel" aria-labelledby={`audience-tab-${active}`}>
            {TABS.map((item, i) => (
              <div key={item.photo} className={`tabs__photo${i === active ? ' is-active' : ''}`}>
                <Photo name={item.photo} sizes="(max-width: 900px) 100vw, 820px" decorative={i !== active} />
              </div>
            ))}
            <BalancePanel {...tab.panel} className="tabs__panel" key={tab.label} />
          </div>
        </div>
      </div>
    </section>
  );
}
