/**
 * Central, CMS-ready site configuration.
 * Swap these values (or hydrate them from a CMS) without touching components.
 */

export const site = {
  name: 'The AI Canteen',
  tagline: 'Come Hungry, Leave Smarter',
  heroHeadline: 'Feed Your Creativity.',
  description:
    'A premium creative platform showcasing AI-generated video, AI photography, prompt engineering, and creative resources for creators who refuse ordinary.',
  url: 'https://theaicanteen.com',
  ceo: 'Chioma Onwumere',
  email: {
    general: 'hello@theaicanteen.com',
    partnerships: 'partnerships@theaicanteen.com',
  },
  bookingUrl: 'https://calendar.app.google/iPaHXH1g1uN7WKQP6',
  socials: {
    tiktok: 'https://www.tiktok.com/@theaicanteen',
    linkedin: 'https://www.linkedin.com/in/chioma-onwumere',
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'Featured Work', href: '/featured-work' },
  { label: 'Prompt Library', href: '/prompt-library' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Tips & Resources', href: '/tips-resources' },
  { label: 'About', href: '/about' },
  { label: 'Work With Us', href: '/work-with-us' },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Featured Work', href: '/featured-work' },
      { label: 'Prompt Library', href: '/prompt-library' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Tips & Resources', href: '/tips-resources' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Work With Us', href: '/work-with-us' },
      { label: 'Creative Stack', href: '/#creative-stack' },
      { label: 'Book a Call', href: site.bookingUrl },
    ],
  },
];
