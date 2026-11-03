import {
  BalancePanel,
  ConvertPanel,
  IbanTile,
  SummaryPanel,
  TxList,
  EXAMPLE_IBAN_2,
} from '@/components/brand/AccountUI';

// Product UI for each service page: one hero visual and one visual per "how it works" step.
// Everything is an account or IBAN view. Card processing shows payments landing in an account,
// rather than the cards themselves.

const PAYMENTS = [
  { name: 'Payment from Nia K.', meta: 'Just now', amount: '+€120.00', state: 'sent', status: 'Approved' },
  { name: 'Payment from Tomas R.', meta: '2 min ago', amount: '+€64.50', state: 'pending', status: 'Pending' },
  { name: 'Payment from Lena F.', meta: '5 min ago', amount: '+€210.00', state: 'sent', status: 'Approved' },
];

const INCOMING = [
  { name: 'Received from Sloane M.', meta: 'Reference INV-2041', amount: '+€1,280.00', state: 'sent', status: 'Received' },
  { name: 'Received from Harbour Trading', meta: 'Reference INV-2040', amount: '+€4,300.00', state: 'sent', status: 'Received' },
];

export const SERVICE_VISUALS = {
  'cross-border-payments': {
    hero: <ConvertPanel />,
    steps: [
      <SummaryPanel key="1" title="Send money" lines={[['To', 'Amara Okafor'], ['Account', 'DE00 •••• 7731 42'], ['You send', '$500.00 USD']]} action="Continue" />,
      <ConvertPanel key="2" />,
      <SummaryPanel key="3" title="Sent. Amara will have it in seconds." badge="Sent" lines={[['Amara gets', '€458.31 EUR'], ['Fee', '$2.40 USD'], ['Rate', '1 USD = 0.92104 EUR']]} />,
    ],
  },
  'card-processing': {
    hero: <TxList title="Payments today" rows={PAYMENTS} />,
    steps: [
      <TxList key="1" title="Payments today" rows={PAYMENTS.slice(0, 2)} />,
      <SummaryPanel key="2" title="Payment check" badge="Approved" lines={[['Customer', 'Nia K.'], ['Amount', '€120.00 EUR'], ['Fraud check', 'Passed']]} />,
      <BalancePanel key="3" amount="3,942.60" actions={false} />,
    ],
  },
  'on-ramp': {
    hero: <SummaryPanel title="Buy digital assets" badge="Rate locked" lines={[['You pay', '€500.00 EUR'], ['Fee', '€3.50 EUR'], ['You get', '538.10 USDC'], ['Send to', '0x91f2 •••• 42ab']]} action="Confirm" />,
    steps: [
      <SummaryPanel key="1" title="Choose an amount" lines={[['Pay from', 'Euro account •••• 2616'], ['Amount', '€500.00 EUR'], ['Asset', 'USDC']]} action="Continue" />,
      <SummaryPanel key="2" title="Check the rate and fee" badge="Rate locked" lines={[['Rate', '1 EUR = 1.0836 USDC'], ['Fee', '€3.50 EUR'], ['You get', '538.10 USDC']]} action="Confirm" />,
      <SummaryPanel key="3" title="Sent to your wallet" badge="Sent" lines={[['Amount', '538.10 USDC'], ['Wallet', '0x91f2 •••• 42ab']]} />,
    ],
  },
  'off-ramp': {
    hero: <SummaryPanel title="Get paid to your account" badge="Pending" badgeState="pending" lines={[['You send', '1,000.00 USDC'], ['Fee', '€4.00 EUR'], ['You get', '€918.20 EUR'], ['Pay to', 'DE00 •••• 2616 00']]} />,
    steps: [
      <SummaryPanel key="1" title="Send from your wallet" lines={[['Asset', 'USDC'], ['Amount', '1,000.00 USDC'], ['Send to', '0x7ac0 •••• 19de']]} />,
      <SummaryPanel key="2" title="We confirm and convert" badge="Pending" badgeState="pending" lines={[['Network', 'Confirming'], ['Rate', '1 USDC = 0.92220 EUR'], ['Fee', '€4.00 EUR']]} />,
      <BalancePanel key="3" amount="918.20" actions={false} />,
    ],
  },
  'emi-accounts': {
    hero: <BalancePanel />,
    steps: [
      <SummaryPanel key="1" title="Open an account" badge="Active" lines={[['Business', 'Okafor Studio'], ['Account', '•••• 2616'], ['Currency', 'EUR']]} />,
      <TxList key="2" title="Add money" rows={INCOMING.slice(0, 1)} />,
      <BalancePanel key="3" currency="USD" currencyName="US dollar" symbol="$" amount="20,900.20" reference="•••• 2589" />,
    ],
  },
  'iban-accounts': {
    hero: <IbanTile />,
    steps: [
      <IbanTile key="1" name="Okafor Studio" />,
      <IbanTile key="2" name="Customer 4821" iban={EXAMPLE_IBAN_2} label="Share this IBAN" />,
      <TxList key="3" title="Incoming payments" rows={INCOMING} />,
    ],
  },
};

