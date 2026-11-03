import { SERVICES } from '@/config/services';

// Brand settings for the whole website. Change the name here and it updates everywhere.
// Brand rules live in docs/brand/BRAND.md: in copy the name is always "Bliss";
// the legal name "Bliss Technology LLC" is only for the footer and legal text.
export const SITE = {
  name: 'Bliss',
  legalName: 'Bliss Technology LLC',
  tagline: 'Money, in motion.',
  domain: 'yourbrand.com',
  url: 'https://yourbrand.com',
  description:
    'Bliss moves money across borders to 160+ countries. See the rate and every fee before you send. Most transfers arrive in seconds.',

  // The one logo used across the site: white and green, always on navy.
  logo: '/brand/logos/bliss-lockup-reversed.svg',

  // The main call to action everywhere on the site. Point it at sign-up once accounts open.
  cta: { label: 'See what we do', href: '/services' },

  // Fill these in when they exist. While a value is null the site shows
  // "Launching soon" or leaves the item out, so nothing on the page is a dead end.
  signInUrl: null,
  newsletterUrl: null, // form POST target
  contact: { email: null, phone: null },

  // `children` become a dropdown on desktop and an expandable list in the mobile menu.
  nav: [
    { label: 'Products', href: '/services', children: SERVICES.map((s) => ({ label: s.name, href: `/services/${s.slug}` })) },
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Accounts', href: '/#accounts' },
    { label: 'Who it’s for', href: '/#who-its-for' },
    { label: 'FAQ', href: '/#faq' },
  ],

  // Links with a real URL show in the footer. Leave null to hide one.
  social: {
    facebook: null,
    instagram: null,
    x: null,
  },
};
