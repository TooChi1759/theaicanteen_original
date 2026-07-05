/** AI Character Gallery categories + AI Photography collections. CMS-ready. */

export type GalleryCollection = {
  id: string;
  name: string;
  description: string;
  count: number;
  promptSlug?: string;
};

export const characterCategories: GalleryCollection[] = [
  { id: 'realistic', name: 'Realistic', description: 'Photoreal humans indistinguishable from a camera capture.', count: 42 },
  { id: 'pixar', name: 'Pixar Inspired', description: 'Warm, rounded 3D characters with cinematic charm.', count: 28 },
  { id: 'stylized', name: 'Stylized', description: 'Illustrative, graphic personas with bold identity.', count: 24 },
  { id: 'fantasy', name: 'Fantasy', description: 'Oracles, warriors, and worlds that never were.', count: 31 },
  { id: 'business', name: 'Business', description: 'Consistent corporate personas for brand campaigns.', count: 26 },
  { id: 'luxury', name: 'Luxury', description: 'High-fashion, high-net-worth editorial figures.', count: 19 },
  { id: 'medical', name: 'Medical', description: 'Trusted clinical characters for health storytelling.', count: 14 },
  { id: 'african', name: 'African', description: 'Rich, authentic representation across the diaspora.', count: 37 },
  { id: 'fashion', name: 'Fashion', description: 'Runway-ready models with couture presence.', count: 33 },
  { id: 'children', name: 'Children', description: 'Expressive young characters, wholesome and safe.', count: 17 },
  { id: 'editorial', name: 'Editorial', description: 'Magazine-cover faces with directorial mood.', count: 22 },
];

export const photographyCollections: GalleryCollection[] = [
  { id: 'studio-portraits', name: 'Studio Portraits', description: 'Controlled light, timeless faces.', count: 40, promptSlug: 'moody-studio-headshot' },
  { id: 'fashion', name: 'Fashion', description: 'Couture, movement, and edge.', count: 35, promptSlug: 'editorial-fashion-flatlay' },
  { id: 'luxury', name: 'Luxury', description: 'The texture of the finer things.', count: 28, promptSlug: 'luxury-perfume-product' },
  { id: 'products', name: 'Products', description: 'Commercial-grade still life.', count: 44, promptSlug: 'luxury-perfume-product' },
  { id: 'food', name: 'Food', description: 'Editorial plating and appetite appeal.', count: 30, promptSlug: 'food-editorial-plating' },
  { id: 'architecture', name: 'Architecture', description: 'Space, geometry, and light.', count: 26, promptSlug: 'architectural-brutalist-atrium' },
  { id: 'lifestyle', name: 'Lifestyle', description: 'Unhurried, human, in-the-moment.', count: 38, promptSlug: 'cinematic-golden-hour-portrait' },
  { id: 'travel', name: 'Travel', description: 'Places imagined and remembered.', count: 33, promptSlug: 'architectural-brutalist-atrium' },
  { id: 'editorial', name: 'Editorial', description: 'Story-driven, magazine-ready frames.', count: 29, promptSlug: 'editorial-fashion-flatlay' },
];
