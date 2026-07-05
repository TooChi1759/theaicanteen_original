/** Featured AI Films + Storytelling showcase. `poster`/`videoSrc` are optional and CMS-ready. */

export type Film = {
  id: string;
  title: string;
  description: string;
  category: string;
  watchUrl: string;
  poster?: string;
  videoSrc?: string;
};

export const featuredFilms: Film[] = [
  {
    id: 'aurelia-commercial',
    title: 'Aurelia',
    description: 'A 30-second luxury fragrance spot with liquid-gold light and impossible camera moves.',
    category: 'Commercial',
    watchUrl: '#',
  },
  {
    id: 'midnight-motors',
    title: 'Midnight Motors',
    description: 'A high-gloss automotive advertisement built entirely from generative footage.',
    category: 'Advertisement',
    watchUrl: '#',
  },
  {
    id: 'atelier-noir',
    title: 'Atelier Noir',
    description: 'An editorial fashion film blending couture silhouettes with surreal set design.',
    category: 'Fashion',
    watchUrl: '#',
  },
  {
    id: 'edges-of-elsewhere',
    title: 'Edges of Elsewhere',
    description: 'A travel reel drifting through cities that never existed, rendered frame by frame.',
    category: 'Travel',
    watchUrl: '#',
  },
  {
    id: 'the-warm-house',
    title: 'The Warm House',
    description: 'A brand concept piece exploring belonging, memory, and the smell of home.',
    category: 'Brand Concept',
    watchUrl: '#',
  },
  {
    id: 'slow-mornings',
    title: 'Slow Mornings',
    description: 'A lifestyle vignette — soft light, ceramic coffee, and unhurried motion.',
    category: 'Lifestyle',
    watchUrl: '#',
  },
  {
    id: 'chromatica',
    title: 'Chromatica',
    description: 'A creative experiment in color grading, motion blur, and painterly transitions.',
    category: 'Experiment',
    watchUrl: '#',
  },
  {
    id: 'the-lighthouse-keeper',
    title: 'The Lighthouse Keeper',
    description: 'A short film about solitude, told in three minutes of cinematic AI storytelling.',
    category: 'Short Film',
    watchUrl: '#',
  },
];

export const storytellingShowcase: Film[] = [
  {
    id: 'anita-the-arrival',
    title: 'The Arrival',
    description: 'Anita steps off the bus into a city that promises everything and warns of nothing.',
    category: 'Storytelling',
    watchUrl: '#',
  },
  {
    id: 'anita-the-offer',
    title: 'The Offer',
    description: 'A dinner, a proposition, and a decision that reshapes the season ahead.',
    category: 'Storytelling',
    watchUrl: '#',
  },
  {
    id: 'anita-the-fallout',
    title: 'The Fallout',
    description: 'Consequences arrive quietly, then all at once, in the most-watched chapter yet.',
    category: 'Storytelling',
    watchUrl: '#',
  },
  {
    id: 'anita-the-reckoning',
    title: 'The Reckoning',
    description: 'Old loyalties are tested as Anita confronts the person she used to be.',
    category: 'Storytelling',
    watchUrl: '#',
  },
  {
    id: 'anita-the-turn',
    title: 'The Turn',
    description: 'A single choice rewrites the ending everyone thought they saw coming.',
    category: 'Storytelling',
    watchUrl: '#',
  },
];
