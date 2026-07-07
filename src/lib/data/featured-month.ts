/**
 * "Featured This Month" — four rotating spotlight cards, each pointing at a real,
 * live piece of content on the site (a real video, a real generated prompt, or a real tip).
 */

export type Spotlight = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  meta: string;
  href: string;
  kind: 'video' | 'image';
  accent: 'amber' | 'gold';
  /** Real Vimeo id — if set, the card opens the on-site lightbox instead of navigating. */
  videoId?: string;
  /** Real generated image, if this spotlight is a prompt/photo. */
  poster?: string;
};

export const featuredThisMonth: Spotlight[] = [
  {
    id: 'film-of-the-month',
    kicker: 'Film of the Month',
    title: 'Between Us, a Series',
    description: 'A narrative series following Klint and Omah through the deep, unspoken matters of a relationship.',
    meta: 'Series · 0:58',
    href: '/featured-work',
    kind: 'video',
    accent: 'amber',
    videoId: '1200921503',
  },
  {
    id: 'image-of-the-month',
    kicker: 'Image of the Month',
    title: 'Fantasy Desert Oracle',
    description: 'A mythic figure in flowing amber robes against a windswept dune at last light.',
    meta: 'Fantasy · Generated',
    href: '/prompt-library/fantasy-desert-oracle',
    kind: 'image',
    accent: 'gold',
    poster: '/prompts/fantasy-desert-oracle.webp',
  },
  {
    id: 'prompt-of-the-month',
    kicker: 'Prompt of the Month',
    title: 'Cinematic Golden Hour Portrait',
    description: 'The exact recipe behind our most-copied warm, filmic portrait look.',
    meta: 'Portrait · Lighting',
    href: '/prompt-library/cinematic-golden-hour-portrait',
    kind: 'image',
    accent: 'amber',
    poster: '/prompts/cinematic-golden-hour-portrait.webp',
  },
  {
    id: 'tip-of-the-month',
    kicker: 'Creator Tip of the Month',
    title: 'Character Consistency',
    description: 'Keep a face identical across a hundred shots with one reference workflow.',
    meta: 'Workflow · 5 min read',
    href: '/tips-resources/character-consistency',
    kind: 'image',
    accent: 'gold',
  },
];
