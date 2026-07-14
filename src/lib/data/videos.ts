/**
 * Real Vimeo videos. `id` is the Vimeo id (plays via player.vimeo.com).
 * Thumbnails are pulled from Vimeo and stored locally under /public/videos.
 * To add a video: append an entry and drop its thumbnail at /videos/<id>.webp.
 */

export type Video = {
  id: string;
  title: string;
  description: string;
  duration: string;
  orientation: 'landscape' | 'portrait' | 'square';
  width: number;
  height: number;
  thumbnail: string;
  /** Upload date on Vimeo, from the oEmbed API (`upload_date`), YYYY-MM-DD. */
  uploadDate: string;
};

export const videos: Video[] = [
  {
    id: '1200921503',
    title: 'Between Us, a Series',
    description:
      'A narrative series following Klint and Omah through the deep, unspoken matters of a relationship.',
    duration: '0:58',
    orientation: 'landscape',
    width: 1280,
    height: 729,
    thumbnail: '/videos/1200921503.webp',
    uploadDate: '2026-06-12',
  },
  {
    id: '1199161422',
    title: 'Move 32, Checkmate',
    description: 'A tense, story-driven short — a glimpse of a film that could be.',
    duration: '0:17',
    orientation: 'landscape',
    width: 1280,
    height: 729,
    thumbnail: '/videos/1199161422.webp',
    uploadDate: '2026-06-07',
  },
  {
    id: '1199161270',
    title: 'Mercedes-Benz Spec Ad',
    description: 'A spec ad concept built for Mercedes-Benz.',
    duration: '0:26',
    orientation: 'landscape',
    width: 1280,
    height: 720,
    thumbnail: '/videos/1199161270.webp',
    uploadDate: '2026-06-07',
  },
  {
    id: '1200921700',
    title: 'World Cup 2026 Concept Clip',
    description: 'A World Cup 2026 concept built with Kling 3.0 on Higgsfield.',
    duration: '0:38',
    orientation: 'landscape',
    width: 1280,
    height: 707,
    thumbnail: '/videos/1200921700.webp',
    uploadDate: '2026-06-12',
  },
  {
    id: '1195468878',
    title: 'Still Hours Candles Spec Ad',
    description: 'A short advert for the scented candle brand Still Hours.',
    duration: '0:19',
    orientation: 'square',
    width: 1280,
    height: 1280,
    thumbnail: '/videos/1195468878.webp',
    uploadDate: '2026-05-25',
  },
  {
    id: '1195473531',
    title: 'Optimum Nutrition Spec Ad',
    description: 'A protein spec ad — designed and crafted for gym buddies.',
    duration: '0:35',
    orientation: 'square',
    width: 1280,
    height: 1280,
    thumbnail: '/videos/1195473531.webp',
    uploadDate: '2026-05-25',
  },
  {
    id: '1195827468',
    title: 'DJI Microphone Spec Ad',
    description: 'A vertical spec ad built for the DJI microphone.',
    duration: '0:22',
    orientation: 'portrait',
    width: 720,
    height: 1280,
    thumbnail: '/videos/1195827468.webp',
    uploadDate: '2026-05-26',
  },
  {
    id: '1200922019',
    title: 'Motivational Piece with HeyGen',
    description: 'A motivational short made with HeyGen, using a consistent voice.',
    duration: '1:00',
    orientation: 'portrait',
    width: 720,
    height: 1280,
    thumbnail: '/videos/1200922019.webp',
    uploadDate: '2026-06-12',
  },
  {
    id: '1199160959',
    title: 'A Brief',
    description: 'A short, cinematic brand story piece.',
    duration: '0:32',
    orientation: 'landscape',
    width: 1280,
    height: 704,
    thumbnail: '/videos/1199160959.webp',
    uploadDate: '2026-06-07',
  },
];
