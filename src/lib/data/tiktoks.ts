/**
 * TikTok videos (the @theaicanteen "Anita" mini-series). `id` is the TikTok video id,
 * which plays via TikTok's iframe player. Thumbnails are stored locally under /public/tiktok.
 * To add a video: resolve the share link to its numeric id, append an entry, and drop its
 * thumbnail at /tiktok/<id>.webp.
 */

export type TikTok = {
  id: string;
  url: string;
  handle: string;
  title: string;
  description: string;
  thumbnail: string;
};

export const tiktokHandle = '@theaicanteen';

export const tiktoks: TikTok[] = [
  {
    id: '7644853628779400468',
    url: 'https://www.tiktok.com/@theaicanteen/video/7644853628779400468',
    handle: tiktokHandle,
    title: 'A Stroll Into Chaos',
    description: 'Preggy Anita heads to the shops — and still finds trouble in the line.',
    thumbnail: '/tiktok/7644853628779400468.webp',
  },
  {
    id: '7650449618228071700',
    url: 'https://www.tiktok.com/@theaicanteen/video/7650449618228071700',
    handle: tiktokHandle,
    title: 'Waiting on Labor',
    description: 'Anita can’t wait for labor to begin. Did it start? Watch till the end.',
    thumbnail: '/tiktok/7650449618228071700.webp',
  },
  {
    id: '7653072576503123221',
    url: 'https://www.tiktok.com/@theaicanteen/video/7653072576503123221',
    handle: tiktokHandle,
    title: 'The Labor Journey',
    description: 'Anita’s labor journey — with many more episodes still to come.',
    thumbnail: '/tiktok/7653072576503123221.webp',
  },
  {
    id: '7652631219909397781',
    url: 'https://www.tiktok.com/@theaicanteen/video/7652631219909397781',
    handle: tiktokHandle,
    title: 'The D-Day Is Here',
    description: 'Anita’s moment finally arrives. Watch till the very end.',
    thumbnail: '/tiktok/7652631219909397781.webp',
  },
  {
    id: '7653844826311445781',
    url: 'https://www.tiktok.com/@theaicanteen/video/7653844826311445781',
    handle: tiktokHandle,
    title: 'The Postpartum Journey',
    description: 'Anita’s postpartum chapter continues. Stay tuned for more.',
    thumbnail: '/tiktok/7653844826311445781.webp',
  },
];
