/**
 * "Generic vs. Engineered" — proves the value of prompt craft with an honest before/after.
 * `naivePrompt` is what a beginner would actually type — no lighting/lens/mood direction —
 * generated with the same model as the real, fully-documented prompt it's compared against.
 */

export type Comparison = {
  id: string;
  label: string;
  naiveImage: string;
  naivePrompt: string;
  engineeredImage: string;
  engineeredPromptSlug: string;
};

export const comparisons: Comparison[] = [
  {
    id: 'portrait',
    label: 'Portrait',
    naiveImage: '/comparisons/naive-portrait.webp',
    naivePrompt: 'a woman with curly hair',
    engineeredImage: '/prompts/cinematic-golden-hour-portrait.webp',
    engineeredPromptSlug: 'cinematic-golden-hour-portrait',
  },
  {
    id: 'product',
    label: 'Product',
    naiveImage: '/comparisons/naive-product.webp',
    naivePrompt: 'a perfume bottle',
    engineeredImage: '/prompts/luxury-perfume-product.webp',
    engineeredPromptSlug: 'luxury-perfume-product',
  },
  {
    id: 'fantasy',
    label: 'Fantasy Character',
    naiveImage: '/comparisons/naive-fantasy.webp',
    naivePrompt: 'a woman in a robe standing in the desert',
    engineeredImage: '/prompts/fantasy-desert-oracle.webp',
    engineeredPromptSlug: 'fantasy-desert-oracle',
  },
];
