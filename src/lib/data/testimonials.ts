/**
 * Real audience screenshots from the Anita series episodes — social proof for
 * the storytelling/creative work. Powers the homepage testimonials section.
 * Images are used exactly as provided (cropped by Chioma for privacy).
 */

export type Testimonial = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-01',
    src: '/testimonials/testimonial-01.jpg',
    width: 1144,
    height: 723,
    alt: 'Viewer DM reacting to the Anita series',
  },
  {
    id: 'testimonial-02',
    src: '/testimonials/testimonial-02.jpg',
    width: 914,
    height: 184,
    alt: 'Viewer comment on the Anita series',
  },
  {
    id: 'testimonial-03',
    src: '/testimonials/testimonial-03.jpg',
    width: 1153,
    height: 234,
    alt: 'Viewer comment on the Anita series',
  },
  {
    id: 'testimonial-04',
    src: '/testimonials/testimonial-04.jpg',
    width: 966,
    height: 190,
    alt: 'Viewer comment on the Anita series',
  },
  {
    id: 'testimonial-05',
    src: '/testimonials/testimonial-05.jpg',
    width: 1140,
    height: 201,
    alt: 'Viewer comment on the Anita series',
  },
  {
    id: 'testimonial-06',
    src: '/testimonials/testimonial-06.jpg',
    width: 1141,
    height: 225,
    alt: 'Viewer comment on the Anita series',
  },
  {
    id: 'testimonial-07',
    src: '/testimonials/testimonial-07.jpg',
    width: 1152,
    height: 533,
    alt: 'Viewer comment on the Anita series',
  },
  {
    id: 'testimonial-08',
    src: '/testimonials/testimonial-08.jpg',
    width: 1142,
    height: 239,
    alt: 'Viewer comment on the Anita series',
  },
];
