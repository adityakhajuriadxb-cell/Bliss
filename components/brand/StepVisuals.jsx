import { Panel, Field, Amount, Line, Check, Head, FakeButton, Progress } from '@/components/brand/AppUI';

// The app screen for each "How it works" step, keyed by service slug. Each shows what
// you would see at that step, using the same example numbers as the service's hero,
// so a page tells one story from start to finish.
export const STEP_SCREENS = {
  'cross-border-payments': [
    {
      title: 'Send money',
      body: (
        <>
          <Panel>
            <Field label="Send to" value="Amara Okafor" />
            <Field label="You send" value="$500.00" code="USD" />
          </Panel>
          <FakeButton>Continue</FakeButton>
        </>
      ),
    },
    {
      title: 'Check and send',
      body: (
        <>
          <Panel>
            <Amount label="You send" value="$500.00" code="USD" />
            <Line label="Fee" value="$2.40 USD" />
            <Line label="Rate" value="1 USD = 0.92104 EUR" />
            <Line label="Amara gets" value="€458.31 EUR" strong />
          </Panel>
          <Progress value={92} label="Rate locked · 27:40 left" />
          <FakeButton>Send money</FakeButton>
        </>
      ),
    },
    {
      title: 'Transfer',
      body: (
        <>
          <Panel>
            <Head title="To Amara Okafor" badge="Sent" />
            <Amount label="Amara got" value="€458.31" code="EUR" />
            <Progress value={100} label="Arrived" />
          </Panel>
          <Panel>
            <Check label="You sent $500.00 USD" time="14:02:08" />
            <Check label="Converted to EUR" time="14:02:09" />
            <Check label="Amara got €458.31 EUR" time="14:02:14" />
          </Panel>
        </>
      ),
    },
  ],
  'card-processing': [
    {
      title: 'Checkout',
      body: (
        <>
          <Panel>
            <Head title="Order 1042" />
            <Amount label="Total" value="€84.00" code="EUR" />
            <Field label="Card" value="•••• 4821" mono />
          </Panel>
          <FakeButton>Pay €84.00</FakeButton>
        </>
      ),
    },
    {
      title: 'Payment',
      body: (
        <Panel>
          <Head title="Order 1042" badge="Approved" />
          <Check label="Card details valid" />
          <Check label="Fraud checks passed" />
          <Check label="Card bank approved" />
          <Progress value={100} label="Approved" />
        </Panel>
      ),
    },
    {
      title: 'Payouts',
      body: (
        <Panel>
          <Head title="Payout" badge="Paid" />
          <Line label="Payment" value="€84.00 EUR" />
          <Line label="Fee" value="€1.26 EUR" />
          <Line label="You get" value="€82.74 EUR" strong />
        </Panel>
      ),
    },
  ],
  'on-ramp': [
    {
      title: 'Buy USDC',
      body: (
        <>
          <Panel>
            <Field label="You pay" value="€500.00" code="EUR" />
            <Field label="You get" value="USDC" />
          </Panel>
          <FakeButton>See the rate</FakeButton>
        </>
      ),
    },
    {
      title: 'Check the rate',
      body: (
        <>
          <Panel>
            <Line label="Fee" value="€2.50 EUR" />
            <Line label="Rate" value="1 EUR = 1.0812 USDC" />
            <Line label="You get" value="537.90 USDC" strong />
          </Panel>
          <Progress value={70} label="Rate locked · 1:24 left" />
          <FakeButton>Buy USDC</FakeButton>
        </>
      ),
    },
    {
      title: 'Sent',
      body: (
        <Panel>
          <Head title="537.90 USDC" badge="Sent" />
          <Field label="To wallet" value="0x8F2A…91C4" mono />
          <Check label="Address checked" />
          <Check label="Sent to your wallet" />
        </Panel>
      ),
    },
  ],
  'off-ramp': [
    {
      title: 'Sell USDC',
      body: (
        <>
          <Panel>
            <Field label="Send USDC to" value="0x4C1D…7E20" mono />
            <Field label="Amount" value="1,000.00" code="USDC" />
          </Panel>
          <p className="bl-mini-note">Only send USDC to this address.</p>
        </>
      ),
    },
    {
      title: 'Converting',
      body: (
        <Panel>
          <Check label="Received 1,000.00 USDC" />
          <Check label="Network confirmed" />
          <Line label="Fee" value="2.00 USDC" />
          <Line label="Rate" value="1 USDC = 0.9241 EUR" />
          <Line label="You get" value="€922.25 EUR" strong />
        </Panel>
      ),
    },
    {
      title: 'Paid',
      body: (
        <Panel>
          <Head title="€922.25 EUR" badge="Paid" />
          <Field label="To IBAN" value="DE89 •••• •••• 3000" mono />
          <Progress value={100} label="In your bank" />
        </Panel>
      ),
    },
  ],
  'emi-accounts': [
    {
      title: 'Open account',
      body: (
        <Panel>
          <Head title="Your account" badge="Ready" />
          <Check label="Business details" />
          <Check label="Identity verified" />
          <Field label="Account" value="ACC 4471-2290-0815" mono />
        </Panel>
      ),
    },
    {
      title: 'Add money',
      body: (
        <Panel>
          <Head title="Money in" badge="Received" />
          <Amount label="Bank transfer" value="€5,000.00" code="EUR" />
          <Line label="From" value="Lumen Studio Ltd" />
          <Line label="New balance" value="€12,480.00 EUR" strong />
        </Panel>
      ),
    },
    {
      title: 'Accounts',
      body: (
        <>
          <div className="bl-mini-chips">
            <span>€12,480.00 EUR</span>
            <span>£3,205.50 GBP</span>
            <span>$8,940.10 USD</span>
          </div>
          <Panel>
            <Head title="Paid supplier" badge="Sent" />
            <Line label="Northfield GmbH" value="£1,200.00 GBP" strong />
          </Panel>
        </>
      ),
    },
  ],
  'iban-accounts': [
    {
      title: 'New IBAN',
      body: (
        <Panel>
          <Head title="New IBAN" badge="Active" />
          <Field label="For customer" value="Harbor & Co." />
          <Field label="IBAN" value="DE89 3704 0044 0532 0130 00" mono />
        </Panel>
      ),
    },
    {
      title: 'Invoice',
      body: (
        <Panel>
          <Head title="Invoice INV-2041" />
          <Field label="Pay to IBAN" value="DE89 3704 0044 0532 0130 00" mono />
          <Line label="Amount" value="€1,250.00 EUR" strong />
          <Line label="Reference" value="INV-2041" />
        </Panel>
      ),
    },
    {
      title: 'Incoming',
      body: (
        <Panel>
          <Head title="Harbor & Co." badge="Received" />
          <Amount label="Amount" value="€1,250.00" code="EUR" />
          <Check label="Matched to INV-2041" />
          <Check label="In your Bliss account" />
        </Panel>
      ),
    },
  ],
};
