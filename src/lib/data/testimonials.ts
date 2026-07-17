/**
 * Real audience comments from the Anita series episodes — social proof for
 * the storytelling/creative work. Powers the homepage testimonials section.
 */

export type Testimonial = {
  id: string;
  quote: string;
  author?: string;
  date: string;
  reactions?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'enjoyed-series',
    quote: 'I really enjoyed the series',
    date: '20 Jun',
  },
  {
    id: 'me-all-the-time',
    quote: '😂😂😂😂😂 me all the time',
    date: '29 Jun',
  },
  {
    id: 'keto-diet',
    quote: '😂😂😂 Remembered my Keto diet.. How weak I was at day 5..',
    date: '4 Jul',
    reactions: '1',
  },
  {
    id: 'this-is-my-husband',
    quote: 'This is my husband 😂',
    author: 'adeballero',
    date: '27 Jun',
  },
  {
    id: 'caption-on-clothes',
    quote: 'the caption on her clothes 🤣🤣🤣',
    author: 'Samuel Peter',
    date: '12 Jun',
    reactions: '2',
  },
];
