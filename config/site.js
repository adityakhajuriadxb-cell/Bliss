import { SERVICES } from '@/config/services';

// Brand settings for the whole website. Change the name here and it updates everywhere.
// Brand rules live in docs/brand/BRAND.md: in copy the name is always "Bliss";
// the legal name "Bliss Technology" is only for the footer and legal text.
export const SITE = {
  name: 'Bliss',
  legalName: 'Bliss Technology',
  tagline: 'Money, in motion.',
  domain: 'yourbrand.com',
  url: 'https://yourbrand.com',
  description:
    'Bliss moves money across borders to 160+ countries. See the rate and every fee before you send. Most transfers arrive in seconds.',

  // Outlined SVG logos from the brand kit (public/brand/logos/). Never re-type the logo.
  // The header draws the lockup inline (components/brand/Logo.jsx) so it can animate.
  logo: {
    footer: '/brand/logos/bliss-technology-lockup-reversed.svg', // corporate lockup next to the legal text
  },

  // Regulatory details shown in the footer. Fill in your own registered company details.
  legal: {
    companyName: 'Bliss Technology',
    jurisdiction: '[PROVINCE/STATE, COUNTRY]',
    corporationNo: '[CORPORATION NO.]',
    msbRegistrationNo: '[FINTRAC MSB REGISTRATION NO.]',
  },

  // `children` become a dropdown on desktop and an expandable list in the mobile menu.
  nav: [
    { label: 'Home', href: '/' },
    { label: 'What we do', href: '/services', children: SERVICES.map((s) => ({ label: s.name, href: `/services/${s.slug}` })) },
    { label: 'About', href: '/#about' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'FAQ', href: '/#faq' },
  ],

  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    discord: '#',
    telegram: '#',
  },
};
