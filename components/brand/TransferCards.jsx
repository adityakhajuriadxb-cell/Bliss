import Icon from '@/components/brand/Icon';

// Example transfers shown on the homepage, built from the brand kit's card and badge styles.
// The numbers follow BRAND.md's own example and add up: (500.00 − 2.40) × 0.92104 = 458.31.

const STEPS = [
  { label: 'You sent $500.00 USD', time: '14:02:08' },
  { label: 'Converted at 1 USD = 0.92104 EUR', time: '14:02:09' },
  { label: 'Amara received €458.31 EUR', time: '14:02:14' },
];

export function TransferTimeline() {
  return (
    <div className="bl-card bl-timeline">
      <div className="bl-timeline__head">
        <p className="bl-timeline__title">Transfer to Amara Okafor</p>
        <span className="bl-badge bl-badge-sent">Sent</span>
      </div>
      <p className="bl-amount">
        €458.31<small>EUR</small>
      </p>
      <p className="bl-ref">TXN 8F2A-91C4-0D77</p>
      <ol className="bl-timeline__steps">
        {STEPS.map((step) => (
          <li key={step.label}>
            <Icon name="check" size={20} className="bl-icon--done" />
            <span>{step.label}</span>
            <time>{step.time}</time>
          </li>
        ))}
      </ol>
    </div>
  );
}

const RECENT = [
  { name: 'Amara Okafor', amount: '€458.31', currency: 'EUR', state: 'sent' },
  { name: 'Diego Ramos', amount: 'R$1,240.00', currency: 'BRL', state: 'sent' },
  { name: 'Wanjiru Kamau', amount: 'KSh 12,500.00', currency: 'KES', state: 'pending' },
  { name: 'Maria Santos', amount: '₱5,600.00', currency: 'PHP', state: 'sent' },
];

const STATE_LABEL = { sent: 'Sent', pending: 'Pending', failed: 'Failed' };

export function RecentTransfers() {
  return (
    <div className="bl-card bl-recent">
      <p className="bl-recent__title">Recent transfers</p>
      <ul>
        {RECENT.map((t) => (
          <li key={t.name}>
            <span className="bl-recent__avatar" aria-hidden="true">
              {t.name.split(' ').map((part) => part[0]).join('')}
            </span>
            <span className="bl-recent__name">{t.name}</span>
            <span className="bl-recent__amount">
              {t.amount} <small>{t.currency}</small>
            </span>
            <span className={`bl-badge bl-badge-${t.state}`}>{STATE_LABEL[t.state]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
