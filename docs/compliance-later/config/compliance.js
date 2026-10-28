import { SITE } from '@/config/site';

// Compliance content for the credentials strip and the /compliance page.
//
// IMPORTANT: list only registrations, licences and certifications Bliss Technology
// actually holds today. Everything below comes from the regulatory statement already in
// the site footer (SITE.legal). Have your compliance lead confirm it before launch, and
// replace every [PLACEHOLDER].
//
// To add a credential once it is issued, add an entry to `credentials`, e.g.
//   { authority: 'PCI DSS', title: 'Level 1 service provider', detail: 'Attestation of compliance, 2026', region: 'Global', ref: 'AOC-…' }
// Use a regulator's or scheme's logo only where your agreement with them allows it.
export const COMPLIANCE = {
  credentials: [
    {
      authority: 'FINTRAC',
      title: 'Registered Money Services Business',
      detail: 'Financial Transactions and Reports Analysis Centre of Canada',
      region: 'Canada',
      ref: SITE.legal.msbRegistrationNo,
    },
    {
      authority: 'PCMLTFA',
      title: 'Anti-money-laundering obligations',
      detail: 'Proceeds of Crime (Money Laundering) and Terrorist Financing Act',
      region: 'Canada',
    },
    {
      authority: 'Licensed partners',
      title: 'Payments in the EEA and UK',
      detail: 'Facilitated by regulated partners who hold their own authorisations',
      region: 'EEA · United Kingdom',
    },
  ],

  // How we stay compliant, in plain words. Keep each point true and current.
  pillars: [
    {
      icon: 'bank',
      title: 'Registered where we operate',
      text: `${SITE.legal.companyName} is registered with FINTRAC as a Money Services Business. In the EEA and UK, we work through licensed partners.`,
    },
    {
      icon: 'users',
      title: 'We know our customers',
      text: 'We verify the identity of every customer before they can move money, and check businesses and the people who own them.',
    },
    {
      icon: 'track',
      title: 'We watch for financial crime',
      text: 'We check transfers for signs of fraud, money laundering and sanctions breaches, and report what the law requires us to report.',
    },
    {
      icon: 'shield',
      title: 'We protect your data',
      text: 'Your data is encrypted, and only people who need it to do their job can see it.',
    },
    {
      icon: 'eye',
      title: 'We show every fee',
      text: 'You see the rate and every fee before you confirm. Past exchange rates are not a guide to future rates.',
    },
    {
      icon: 'support',
      title: 'You can raise a concern',
      text: 'If something looks wrong, tell us. We look into every report and reply.',
    },
  ],

  // Where people can reach the compliance team. Replace before launch.
  contact: `compliance@${SITE.domain}`,
};
