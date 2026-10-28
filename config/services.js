// What Bliss does. Each entry becomes a page at /services/<slug>, an item in the homepage
// showcase and a tile on /services. Copy follows docs/brand/BRAND.md: plain words, sentence case,
// no claims we can't back up (add real fees, times and country lists when confirmed).
// Illustrations live in components/brand/ (ServiceVisuals, StepVisuals), keyed by slug.
export const SERVICES = [
  {
    slug: 'cross-border-payments',
    name: 'Cross-border payments',
    icon: 'globe',
    audience: 'For people and businesses',
    summary: 'Send money to 160+ countries. Most transfers arrive in seconds.',
    headline: 'Send money across borders, in seconds.',
    intro:
      'Send money to family, friends, staff or suppliers in 160+ countries. See the real rate and every fee before you send. Most transfers arrive in seconds.',
    steps: [
      { title: 'Enter the amount', text: "Choose who you're sending to and how much." },
      { title: 'See exactly what arrives', text: 'We show the rate, the fee and the amount your recipient gets.' },
      { title: 'Send', text: 'Most transfers arrive in seconds. We tell you the moment yours lands.' },
    ],
    features: [
      { icon: 'send', title: 'Arrives in seconds', text: 'Most transfers arrive in seconds, not days.' },
      { icon: 'fee', title: 'Every fee, up front', text: 'See the rate and the fee before you confirm. What you see is what you pay.' },
      { icon: 'globe', title: '160+ countries', text: 'Send in dozens of currencies from one account.' },
      { icon: 'track', title: 'Track every transfer', text: 'Follow each transfer from the moment you send to the moment it lands.' },
    ],
    useCases: [
      { title: 'Family support', text: 'Send money home every month, with no surprises.' },
      { title: 'Paying people abroad', text: 'Pay freelancers and staff in their own currency.' },
      { title: 'Paying suppliers', text: 'Pay invoices in other countries from one account.' },
    ],
    faqs: [
      {
        q: 'How long does a transfer take?',
        a: 'Most transfers arrive in seconds. Some take longer, depending on the country and the receiving bank. If yours does, we tell you why and when to expect it.',
      },
      {
        q: 'How much does it cost?',
        a: 'The fee depends on the amount and the country. You always see it, with the rate, before you send.',
      },
      {
        q: 'What does my recipient need?',
        a: 'Their name and their bank account details. What we need depends on the country, and we ask for it before you send.',
      },
    ],
  },
  {
    slug: 'card-processing',
    name: 'Card processing',
    icon: 'card',
    audience: 'For businesses',
    summary: 'Accept card payments and get paid into your Bliss account.',
    headline: 'Take card payments. Get paid in your currency.',
    intro:
      'Accept card payments from customers around the world. Every payment, fee and payout shows in one place, so you always know what you will receive.',
    steps: [
      { title: 'Your customer pays by card', text: 'They pay on your website or in your app, in their own currency.' },
      { title: 'We check and approve it', text: 'Each payment is checked for fraud before it is approved.' },
      { title: 'You get paid', text: 'The money lands in your Bliss account, with the fee shown on every payment.' },
    ],
    features: [
      { icon: 'card', title: 'Cards from many countries', text: 'Accept payments from cards issued around the world.' },
      { icon: 'fee', title: 'Fee shown on each payment', text: 'See the fee on every transaction, not just on your monthly statement.' },
      { icon: 'shield', title: 'Fraud checks built in', text: 'We check every payment before it is approved, to protect you and your customers.' },
      { icon: 'track', title: 'Live payment status', text: 'See each payment as approved, pending or declined, with the reason.' },
    ],
    useCases: [
      { title: 'Online shops', text: 'Take payments at checkout from customers in other countries.' },
      { title: 'Apps and subscriptions', text: 'Charge cards for subscriptions and in-app purchases.' },
      { title: 'Marketplaces', text: 'Collect payments, then pay sellers from one account.' },
    ],
    faqs: [
      {
        q: 'Which cards can I accept?',
        a: 'You can accept the major card networks. The exact list depends on your country and business type, and we confirm it before you start.',
      },
      {
        q: 'When do I get paid?',
        a: 'Payouts go to your Bliss account on a set schedule. We show the date of each payout before it arrives.',
      },
      {
        q: 'What does it cost?',
        a: 'You pay a fee on each payment. We show it before you sign up and on every transaction after.',
      },
    ],
  },
  {
    slug: 'on-ramp',
    name: 'On-ramp',
    icon: 'onRamp',
    audience: 'For people and businesses',
    summary: 'Turn money into digital assets, with the rate shown before you confirm.',
    headline: 'From money to digital assets, in one step.',
    intro:
      'Use money in your account to buy digital assets such as stablecoins. You see the rate and every fee before you confirm, and the assets go straight to your wallet.',
    steps: [
      { title: 'Choose an amount', text: 'Enter how much to convert and which asset you want.' },
      { title: 'Check the rate and fee', text: 'We show the rate, the fee and exactly what you get before you confirm.' },
      { title: 'Receive in your wallet', text: 'The assets are sent to the wallet address you choose.' },
    ],
    features: [
      { icon: 'lock', title: 'Rate locked before you confirm', text: 'The rate you see is the rate you get, for a set time.' },
      { icon: 'fee', title: 'Every fee, up front', text: 'Every fee is shown on its own line, before you confirm.' },
      { icon: 'shield', title: 'Identity checks', text: 'We verify every customer, as the rules for digital assets require.' },
      { icon: 'send', title: 'Send to your own wallet', text: 'Choose the wallet address. We check it before anything is sent.' },
    ],
    useCases: [
      { title: 'People', text: 'Buy stablecoins with money from your account.' },
      { title: 'Businesses', text: 'Fund a treasury, or pay partners who accept digital assets.' },
      { title: 'Platforms', text: 'Let your own users buy digital assets inside your product.' },
    ],
    faqs: [
      {
        q: 'Which assets can I buy?',
        a: 'The assets available depend on your country. We show the full list before you start.',
      },
      {
        q: 'How do you protect me?',
        a: "We verify each customer and check every wallet address before sending. Check the address yourself too: transfers of digital assets can't be reversed.",
      },
      {
        q: 'What does it cost?',
        a: 'You see the rate and every fee before you confirm. Nothing is added after.',
      },
    ],
  },
  {
    slug: 'off-ramp',
    name: 'Off-ramp',
    icon: 'offRamp',
    audience: 'For people and businesses',
    summary: 'Turn digital assets back into money in your account or at your bank.',
    headline: 'From digital assets back to money.',
    intro:
      'Sell digital assets such as stablecoins and receive money in your currency. See the rate and every fee before you confirm, then get paid to your account or IBAN.',
    steps: [
      { title: 'Send from your wallet', text: 'Send the assets to the address we give you for this transfer.' },
      { title: 'We confirm and convert', text: 'Once the network confirms it, we convert at the rate you saw.' },
      { title: 'Get paid', text: 'The money arrives in your Bliss account or at your bank, in your currency.' },
    ],
    features: [
      { icon: 'eye', title: 'Rate shown first', text: 'See the rate and what you will receive before you send anything.' },
      { icon: 'bank', title: 'Pay out to an IBAN', text: 'Get paid to your Bliss account or straight to a bank account.' },
      { icon: 'track', title: 'Every transfer tracked', text: 'Follow each step, from network confirmation to money in your account.' },
      { icon: 'shield', title: 'Checks on every transfer', text: 'We check where funds come from, as the rules for digital assets require.' },
    ],
    useCases: [
      { title: 'Freelancers', text: 'Get paid in digital assets, spend in your local currency.' },
      { title: 'Businesses', text: 'Turn digital-asset revenue into money for payroll and suppliers.' },
      { title: 'Platforms', text: 'Let your users cash out to their own bank account.' },
    ],
    faqs: [
      {
        q: 'How long does it take?',
        a: 'Most payouts arrive soon after the network confirms your transfer. If one takes longer, we tell you why.',
      },
      {
        q: 'Where can I get paid?',
        a: 'To your Bliss account, or to your bank account by IBAN.',
      },
      {
        q: 'What if I send the wrong asset?',
        a: 'Only send the assets we list for your transfer. If something goes wrong, contact support straight away and we will help.',
      },
    ],
  },
  {
    slug: 'emi-accounts',
    name: 'E-money accounts',
    tag: 'EMI solution',
    icon: 'wallet',
    audience: 'For businesses and platforms',
    summary: 'Hold, send and receive money in multiple currencies from one account.',
    headline: 'One account. Many currencies.',
    intro:
      'Open e-money accounts for your business, or offer them to your own customers under your brand. Hold, send and receive money in multiple currencies, all from one account.',
    steps: [
      { title: 'Open an account', text: 'Sign up and verify your business online.' },
      { title: 'Add money', text: 'Top up by bank transfer, card or incoming payments.' },
      { title: 'Use it everywhere', text: 'Hold balances, convert between currencies and pay out from one place.' },
    ],
    features: [
      { icon: 'globe', title: 'Many currencies, one account', text: 'Hold and convert balances in the currencies you work in.' },
      { icon: 'layers', title: 'Your brand, our accounts', text: 'Offer accounts to your customers inside your own product.' },
      { icon: 'code', title: 'Built for developers', text: 'Open accounts and move money through our API.' },
      { icon: 'fee', title: 'Clear statements', text: 'Every transaction, fee and rate on one statement.' },
    ],
    useCases: [
      { title: 'Businesses', text: 'Hold and manage money in the currencies you trade in.' },
      { title: 'Fintechs and platforms', text: 'Give your users accounts without building a bank.' },
      { title: 'Marketplaces', text: 'Hold funds for buyers and sellers, and pay out on time.' },
    ],
    faqs: [
      {
        q: 'Is Bliss a bank?',
        a: 'No. Bliss is not a bank. We provide e-money accounts for holding, sending and receiving money.',
      },
      {
        q: 'Which currencies can I hold?',
        a: 'The currencies available depend on your country. We show them before you open an account.',
      },
      {
        q: 'Can I offer accounts under my own brand?',
        a: 'Yes. Platforms can offer accounts to their own customers through our API. We agree the details with each platform.',
      },
    ],
  },
  {
    slug: 'iban-accounts',
    name: 'IBAN accounts',
    tag: 'IBAN solution',
    icon: 'bank',
    audience: 'For businesses and platforms',
    summary: 'Get dedicated IBANs to receive and send euro payments.',
    headline: 'Your own IBAN for euro payments.',
    intro:
      'Get dedicated IBANs for your business or for each of your customers. Receive and send euro payments, and see every incoming payment the moment it lands.',
    steps: [
      { title: 'Request an IBAN', text: 'Open one for your business, or one for each customer.' },
      { title: 'Share it', text: 'Customers and partners pay it like any local bank account.' },
      { title: 'Get paid', text: 'Money lands in your Bliss account, matched to the right IBAN.' },
    ],
    features: [
      { icon: 'users', title: 'An IBAN per customer', text: 'Give each customer their own IBAN, so every payment is easy to match.' },
      { icon: 'send', title: 'Euro payments', text: 'Receive and send euro bank transfers.' },
      { icon: 'track', title: 'Incoming payments, live', text: 'See each payment the moment it lands, with the sender and reference.' },
      { icon: 'code', title: 'API access', text: 'Create IBANs and track payments through our API.' },
    ],
    useCases: [
      { title: 'Businesses', text: 'Receive euro payments from customers and partners.' },
      { title: 'Platforms', text: 'Give each user an IBAN to top up their balance.' },
      { title: 'Marketplaces', text: 'Match each incoming payment to the right seller.' },
    ],
    faqs: [
      {
        q: 'What is an IBAN?',
        a: 'An International Bank Account Number. It identifies an account so people can pay it by bank transfer.',
      },
      {
        q: 'Whose name is on the IBAN?',
        a: 'It depends on the setup. We confirm the account name before you share an IBAN.',
      },
      {
        q: 'Which payments can I receive?',
        a: 'Euro bank transfers. Other currencies depend on your country.',
      },
    ],
  },
];

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
