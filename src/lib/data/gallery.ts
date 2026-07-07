/** AI Character Gallery categories + AI Photography collections. CMS-ready. */

export type GalleryCollection = {
  id: string;
  name: string;
  description: string;
  promptSlug?: string;
};

export const characterCategories: GalleryCollection[] = [
  { id: 'realistic', name: 'Realistic', description: 'Photoreal humans indistinguishable from a camera capture.' },
  { id: 'pixar', name: 'Pixar Inspired', description: 'Warm, rounded 3D characters with cinematic charm.' },
  { id: 'stylized', name: 'Stylized', description: 'Illustrative, graphic personas with bold identity.' },
  { id: 'fantasy', name: 'Fantasy', description: 'Oracles, warriors, and worlds that never were.', promptSlug: 'fantasy-desert-oracle' },
  { id: 'business', name: 'Business', description: 'Consistent corporate personas for brand campaigns.', promptSlug: 'business-character-executive' },
  { id: 'luxury', name: 'Luxury', description: 'High-fashion, high-net-worth editorial figures.' },
  { id: 'medical', name: 'Medical', description: 'Trusted clinical characters for health storytelling.' },
  { id: 'african', name: 'African', description: 'Rich, authentic representation across the diaspora.' },
  { id: 'fashion', name: 'Fashion', description: 'Runway-ready models with couture presence.' },
  { id: 'children', name: 'Children', description: 'Expressive young characters, wholesome and safe.' },
  { id: 'editorial', name: 'Editorial', description: 'Magazine-cover faces with directorial mood.' },
];

export const photographyCollections: GalleryCollection[] = [
  { id: 'studio-portraits', name: 'Studio Portraits', description: 'Controlled light, timeless faces.', promptSlug: 'moody-studio-headshot' },
  { id: 'fashion', name: 'Fashion', description: 'Couture, movement, and edge.', promptSlug: 'editorial-fashion-flatlay' },
  { id: 'luxury', name: 'Luxury', description: 'The texture of the finer things.', promptSlug: 'luxury-perfume-product' },
  { id: 'products', name: 'Products', description: 'Commercial-grade still life.', promptSlug: 'luxury-perfume-product' },
  { id: 'food', name: 'Food', description: 'Editorial plating and appetite appeal.', promptSlug: 'food-editorial-plating' },
  { id: 'architecture', name: 'Architecture', description: 'Space, geometry, and light.', promptSlug: 'architectural-brutalist-atrium' },
  { id: 'lifestyle', name: 'Lifestyle', description: 'Unhurried, human, in-the-moment.', promptSlug: 'cinematic-golden-hour-portrait' },
  { id: 'travel', name: 'Travel', description: 'Places imagined and remembered.', promptSlug: 'architectural-brutalist-atrium' },
  { id: 'editorial', name: 'Editorial', description: 'Story-driven, magazine-ready frames.', promptSlug: 'editorial-fashion-flatlay' },
];
