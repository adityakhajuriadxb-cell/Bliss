import DotGlobe, { ROUTES } from '@/components/brand/DotGlobe';
import Portal from '@/components/brand/Portal';
import SpeedBand from '@/components/brand/SpeedBand';
import { Panel, Field, Amount, Line, Head, FakeButton, Progress, AppList, Chip } from '@/components/brand/AppUI';

// Each service's hero: its page in the Bliss web portal, two cards floating at different
// depths and a backdrop, all moving at their own speed on scroll (see SiteEffects).
// Every name and amount is an example, and every quote adds up.

function PayCard() {
  return (
    <div className="bl-paycard">
      <img src="/brand/logos/bliss-mark.svg" alt="" width="28" height="28" />
      <span className="bl-paycard__chip" />
      <p className="bl-paycard__number">•••• •••• •••• 4821</p>
      <div className="bl-paycard__foot">
        <span>Card payment</span>
        <span>12/29</span>
      </div>
      <SpeedBand variant="small" tone="light" className="bl-paycard__band" />
    </div>
  );
}

// Which portal section each service lives in (highlighted in the portal sidebar).
export const PORTAL_SECTION = {
  'cross-border-payments': 'Payments',
  'card-processing': 'Cards',
  'on-ramp': 'Digital assets',
  'off-ramp': 'Digital assets',
  'emi-accounts': 'Accounts',
  'iban-accounts': 'Accounts',
};

const STAGES = {
  'cross-border-payments': {
    backdrop: <DotGlobe routes={ROUTES} className="bl-dot-globe--dark" />,
    title: 'Send money',
    screen: (
      <>
        <Panel className="bl-app-recipient">
          <span className="bl-app-avatar">AO</span>
          <span>
            <strong>Amara Okafor</strong>
            <small>EUR account · Lisbon</small>
          </span>
        </Panel>
        <Panel>
          <Amount label="You send" value="$500.00" code="USD" />
          <Line label="Fee" value="$2.40 USD" />
          <Line label="Rate" value="1 USD = 0.92104 EUR" />
          <Line label="Amara gets" value="€458.31 EUR" strong />
        </Panel>
        <FakeButton>Send money</FakeButton>
      </>
    ),
    floatA: <Chip badge="Sent" text="Amara will have it in seconds." sub="TXN 8F2A-91C4-0D77" />,
    floatB: (
      <Chip text="Rate locked" sub="27:40 left">
        <Progress value={92} />
      </Chip>
    ),
  },
  'card-processing': {
    backdrop: <SpeedBand tone="dark" />,
    title: 'Payments',
    screen: (
      <>
        <Panel>
          <Amount label="Today" value="€1,862.40" code="EUR" />
          <Progress value={64} label="64 payments · 3 pending" />
        </Panel>
        <Panel>
          <AppList
            rows={[
              { name: 'Order 1042', ref: 'PAY 7C21', amount: '€84.00', code: 'EUR', state: 'sent', label: 'Approved' },
              { name: 'Order 1043', ref: 'PAY 7C22', amount: '£120.00', code: 'GBP', state: 'sent', label: 'Approved' },
              { name: 'Order 1044', ref: 'PAY 7C23', amount: '$45.90', code: 'USD', state: 'pending', label: 'Pending' },
              { name: 'Order 1045', ref: 'PAY 7C24', amount: '€19.99', code: 'EUR', state: 'failed', label: 'Declined' },
            ]}
          />
        </Panel>
      </>
    ),
    floatA: <PayCard />,
    floatB: <Chip badge="Approved" text="Order 1042 · €84.00 EUR" sub="Fee €1.26 EUR" />,
  },
  // 497.50 EUR × 1.0812 = 537.90 USDC
  'on-ramp': {
    backdrop: <SpeedBand tone="dark" />,
    title: 'Buy USDC',
    screen: (
      <>
        <Panel>
          <Amount label="You pay" value="€500.00" code="EUR" />
          <Line label="Fee" value="€2.50 EUR" />
          <Line label="Rate" value="1 EUR = 1.0812 USDC" />
          <Line label="You get" value="537.90 USDC" strong />
        </Panel>
        <Panel>
          <Field label="To wallet" value="0x8F2A…91C4" mono />
        </Panel>
        <FakeButton>Buy USDC</FakeButton>
      </>
    ),
    floatA: (
      <Chip text="Rate locked" sub="1:24 left">
        <Progress value={70} />
      </Chip>
    ),
    floatB: <Chip badge="Sent" text="537.90 USDC to your wallet" sub="0x8F2A…91C4" />,
  },
  // 998.00 USDC × 0.9241 = 922.25 EUR
  'off-ramp': {
    backdrop: <SpeedBand tone="dark" />,
    title: 'Sell USDC',
    screen: (
      <>
        <Panel>
          <Amount label="You sell" value="1,000.00" code="USDC" />
          <Line label="Fee" value="2.00 USDC" />
          <Line label="Rate" value="1 USDC = 0.9241 EUR" />
          <Line label="You get" value="€922.25 EUR" strong />
        </Panel>
        <Panel>
          <Field label="Pay out to" value="DE89 •••• •••• 3000" mono />
        </Panel>
        <FakeButton>Show deposit address</FakeButton>
      </>
    ),
    floatA: <Chip badge="Confirmed" text="1,000.00 USDC received" sub="Network confirmed" />,
    floatB: <Chip badge="Paid" text="€922.25 EUR to your bank" sub="DE89 •••• •••• 3000" />,
  },
  // (500.00 − 1.50) GBP × 1.1482 = 572.38 EUR
  'emi-accounts': {
    backdrop: <SpeedBand tone="dark" />,
    title: 'Accounts',
    screen: (
      <>
        <Panel>
          <Head title="Balances" />
          <ul className="bl-app-balances">
            {[
              ['EUR', 'Euro', '€12,480.00'],
              ['GBP', 'British pound', '£3,205.50'],
              ['USD', 'US dollar', '$8,940.10'],
            ].map(([code, name, amount]) => (
              <li key={code}>
                <span className="bl-app-balances__code">{code}</span>
                <span className="bl-app-balances__name">{name}</span>
                <span className="bl-app-balances__amount">{amount}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <Field label="Account" value="ACC 4471-2290-0815" mono />
        </Panel>
        <FakeButton>Convert</FakeButton>
      </>
    ),
    floatA: <Chip badge="Converted" text="£500.00 GBP → €572.38 EUR" sub="Fee £1.50 GBP · 1 GBP = 1.1482 EUR" />,
    floatB: <Chip badge="Received" text="€5,000.00 EUR" sub="From Lumen Studio Ltd" />,
  },
  'iban-accounts': {
    backdrop: <SpeedBand tone="dark" />,
    title: 'Account details',
    screen: (
      <>
        <Panel>
          <Field label="Account name" value="Lumen Studio Ltd" />
          <Field label="IBAN · EUR" value="DE89 3704 0044 0532 0130 00" mono />
        </Panel>
        <Panel>
          <AppList
            rows={[
              { name: 'Harbor & Co.', ref: 'INV-2041', amount: '€1,250.00', code: 'EUR', state: 'sent', label: 'Received' },
              { name: 'Okafor Design', ref: 'INV-2043', amount: '€2,100.00', code: 'EUR', state: 'pending', label: 'Pending' },
            ]}
          />
        </Panel>
        <FakeButton>Share IBAN</FakeButton>
      </>
    ),
    floatA: <Chip badge="Received" text="€1,250.00 EUR from Harbor & Co." sub="INV-2041" />,
    floatB: <Chip badge="Matched" text="Paid to the right invoice" sub="INV-2041 · Harbor & Co." />,
  },
};

// A service's page in the portal on its own, for the homepage showcase and /services tiles.
export function ServiceScreen({ slug }) {
  const stage = STAGES[slug];
  return (
    <Portal title={stage.title} section={PORTAL_SECTION[slug]}>
      {stage.screen}
    </Portal>
  );
}

// The second floating card on its own: the moment the service lands (sent, paid, received).
export function ServiceChip({ slug, which = 'floatB' }) {
  return STAGES[slug][which];
}

// `backdrop={false}` when the page draws its own backdrop (the homepage hero's globe).
export default function ServiceVisual({ slug, backdrop = true }) {
  const stage = STAGES[slug];
  return (
    <div className="bl-stage">
      {backdrop && (
        <div className="bl-stage__backdrop" data-parallax="-0.06">
          {stage.backdrop}
        </div>
      )}
      <div className="bl-stage__window" data-parallax="0.04">
        <ServiceScreen slug={slug} />
      </div>
      <div className="bl-stage__float bl-stage__float--a" data-parallax="0.16">
        {stage.floatA}
      </div>
      <div className="bl-stage__float bl-stage__float--b" data-parallax="0.26">
        {stage.floatB}
      </div>
      <p className="bl-stage__caption">Example. Names and amounts are for illustration.</p>
    </div>
  );
}
