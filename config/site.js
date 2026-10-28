// Brand settings for the whole website. Change the name here and it updates everywhere.
export const SITE = {
  name: 'BlissTechnology',
  domain: 'yourbrand.com',
  url: 'https://yourbrand.com',
  description: 'Send money without limits. Fast, secure, and low-cost transfers worldwide.',

  // Replace these image files in public/assets/images/ with your own logos (or point to new files).
  logo: {
    header: '/assets/images/swift-logo-1.png',
    mobileLight: '/assets/images/swift99-logo-black-1.png',
    mobileDark: '/assets/images/cropped-swift-logo-1.png',
    footer: '/assets/images/cropped-swift-logo-1.png',
  },

  // Regulatory details shown in the footer. Fill in your own registered company details.
  legal: {
    companyName: '[COMPANY LEGAL NAME]',
    jurisdiction: '[PROVINCE/STATE, COUNTRY]',
    corporationNo: '[CORPORATION NO.]',
    msbRegistrationNo: '[FINTRAC MSB REGISTRATION NO.]',
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Features', href: '/#features' },
    { label: 'Contact', href: '/#contact' },
  ],

  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    discord: '#',
    telegram: '#',
  },
};
