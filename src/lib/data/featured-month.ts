/** "Featured This Month" — four rotating spotlight cards. */

export type Spotlight = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  meta: string;
  href: string;
  kind: 'video' | 'image';
  accent: 'amber' | 'gold';
};

export const featuredThisMonth: Spotlight[] = [
  {
    id: 'film-of-the-month',
    kicker: 'AI Film of the Month',
    title: 'Aurelia',
    description: 'A liquid-gold fragrance spot that redefined what a solo creator can direct.',
    meta: 'Commercial · 0:32',
    href: '/featured-work',
    kind: 'video',
    accent: 'amber',
  },
  {
    id: 'image-of-the-month',
    kicker: 'Image of the Month',
    title: 'Saffron Study',
    description: 'A studio portrait lit like a Renaissance painting, generated end to end.',
    meta: 'Studio Portrait',
    href: '/gallery',
    kind: 'image',
    accent: 'gold',
  },
  {
    id: 'prompt-of-the-month',
    kicker: 'Prompt of the Month',
    title: 'Cinematic Golden Hour',
    description: 'The exact recipe behind our most-copied warm, filmic portrait look.',
    meta: 'Portrait · Lighting',
    href: '/prompt-library',
    kind: 'image',
    accent: 'amber',
  },
  {
    id: 'tip-of-the-month',
    kicker: 'Creator Tip of the Month',
    title: 'Character Consistency',
    description: 'Keep a face identical across a hundred shots with one reference workflow.',
    meta: 'Workflow · 4 min read',
    href: '/tips-resources',
    kind: 'image',
    accent: 'gold',
  },
];
