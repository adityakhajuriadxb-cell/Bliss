import ScrollStory from '@/components/site/ScrollStory';
import {
  IbanTile,
  LineChart,
  ConvertPanel,
  SummaryPanel,
  TxList,
  Gauge,
  BalancePanel,
  GrowthChart,
} from '@/components/brand/AccountUI';

const ITEMS = [
  {
    id: 'virtual-ibans',
    label: 'Virtual IBANs',
    title: 'Your own IBAN for every euro payment',
    text: 'Get a virtual IBAN for your business, or one for each customer. See every payment the moment it lands.',
    cta: { label: 'Get an IBAN', href: '/services/iban-accounts' },
    visualClass: 'story__visual--overlap',
    visual: (
      <>
        <IbanTile />
        <LineChart />
      </>
    ),
  },
  {
    id: 'real-rate',
    label: 'Real rates',
    title: 'See the rate before you send',
    text: 'Send to 160+ countries in dozens of currencies. The rate and every fee show before you confirm.',
    cta: { label: 'Send money', href: '/services/cross-border-payments' },
    visualClass: 'story__visual--pair',
    visual: (
      <>
        <ConvertPanel />
        <div className="story__column">
          <SummaryPanel
            title="Sent to Amara"
            badge="Sent"
            lines={[
              ['Amara gets', '€458.31 EUR'],
              ['Account', 'DE00 •••• 7731 42'],
            ]}
          />
          <TxList rows={[
            { name: 'Sent to Julian T.', meta: 'Just now', amount: '−€85.50', state: 'pending', status: 'Pending' },
            { name: 'Received from Sloane M.', meta: 'Today', amount: '+€1,280.00', state: 'sent', status: 'Received' },
          ]} />
        </div>
      </>
    ),
  },
  {
    id: 'statements',
    label: 'Clear statements',
    title: 'Every payment on one statement',
    text: 'Every transaction, fee and rate sits in one place, so your numbers always add up.',
    cta: { label: 'Open an account', href: '/services/emi-accounts' },
    visualClass: 'story__visual--center',
    visual: <Gauge />,
  },
  {
    id: 'many-currencies',
    label: 'Many currencies',
    title: 'Hold many currencies in one account',
    text: 'Hold balances in the currencies you work in, and convert between them when the rate suits you.',
    cta: { label: 'See e-money accounts', href: '/services/emi-accounts' },
    visualClass: 'story__visual--pair',
    visual: (
      <>
        <BalancePanel currency="USD" currencyName="US dollar" symbol="$" amount="20,900.20" reference="•••• 2589" actions={false} />
        <GrowthChart />
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="section section--tight-top" id="how-it-works">
      <div className="wrap">
        <div className="offset-head" data-reveal>
          <h2>Accounts that keep<br />your money moving</h2>
          <p>Receive, hold and send from one place. Every rate and fee is shown before you confirm.</p>
        </div>
        <ScrollStory items={ITEMS} />
      </div>
    </section>
  );
}
