/** Prompt Library. Each prompt has a preview + full detail (models, negative prompt, related). CMS-ready. */

export type Prompt = {
  slug: string;
  title: string;
  category: string;
  preview: string;
  fullPrompt: string;
  models: string[];
  negativePrompt?: string;
  related: string[];
  aspect?: 'square' | 'portrait' | 'wide';
  outputImage?: string;
};

const rawPrompts: Prompt[] = [
  {
    slug: 'cinematic-golden-hour-portrait',
    title: 'Cinematic Golden Hour Portrait',
    category: 'Portrait',
    preview:
      'Warm, filmic close-up bathed in low golden-hour sun with soft rim light and shallow depth.',
    fullPrompt:
      'Cinematic close-up portrait of a woman with warm brown skin, golden hour backlight wrapping around her hair, soft directional key light from camera-left, shallow depth of field at f/1.8, 85mm lens compression, subtle film grain, muted amber and cream color grade, freckles and skin texture visible, gentle catchlights, editorial fashion mood, shot on Kodak Portra 400.',
    models: ['Midjourney v6.1', 'Flux 1.1 Pro'],
    negativePrompt: 'harsh flash, plastic skin, oversaturated, cartoonish, extra fingers, watermark',
    related: ['moody-studio-headshot', 'editorial-fashion-flatlay', 'luxury-perfume-product'],
    aspect: 'portrait',
  },
  {
    slug: 'moody-studio-headshot',
    title: 'Moody Studio Headshot',
    category: 'Portrait',
    preview:
      'Single-source Rembrandt lighting on a charcoal seamless — quiet, confident, timeless.',
    fullPrompt:
      'Studio headshot of a man in a tailored charcoal suit, Rembrandt lighting with a single large softbox at 45 degrees, deep charcoal seamless background, dramatic falloff into shadow, sharp eyes, natural skin texture, subtle warm fill, medium-format look, 105mm, refined and editorial.',
    models: ['GPT Image', 'Flux 1.1 Pro'],
    negativePrompt: 'flat lighting, blown highlights, busy background, HDR halo',
    related: ['cinematic-golden-hour-portrait', 'business-character-executive', 'editorial-fashion-flatlay'],
    aspect: 'portrait',
  },
  {
    slug: 'luxury-perfume-product',
    title: 'Luxury Perfume Product Shot',
    category: 'Product',
    preview:
      'A faceted glass bottle on wet stone, hard sculpting light, amber liquid catching the sun.',
    fullPrompt:
      'Luxury perfume bottle product photography, faceted clear glass with amber liquid, placed on wet black stone, single hard light source creating crisp reflections and long shadow, floating dust particles catching light, macro detail on the cap, warm gold accents, dark moody background, commercial advertising quality, 100mm macro.',
    models: ['Midjourney v6.1', 'GPT Image'],
    negativePrompt: 'cluttered background, cheap plastic, fingerprints, uneven exposure',
    related: ['food-editorial-plating', 'architectural-brutalist-atrium', 'cinematic-golden-hour-portrait'],
    aspect: 'square',
  },
  {
    slug: 'editorial-fashion-flatlay',
    title: 'Editorial Fashion Flat Lay',
    category: 'Fashion',
    preview:
      'Top-down couture flat lay on travertine with soft window light and considered negative space.',
    fullPrompt:
      'Overhead editorial fashion flat lay, cream silk garment, gold jewelry, leather accessories arranged on travertine stone, soft diffused window light from the left, generous negative space, muted warm palette, magazine layout composition, crisp focus, subtle shadows, styled by a creative director.',
    models: ['Flux 1.1 Pro', 'Midjourney v6.1'],
    negativePrompt: 'flat lighting, cluttered, neon colors, low resolution',
    related: ['moody-studio-headshot', 'luxury-perfume-product', 'fantasy-desert-oracle'],
    aspect: 'wide',
  },
  {
    slug: 'food-editorial-plating',
    title: 'Food Editorial Plating',
    category: 'Food',
    preview:
      'A single plated dish shot like fine art — steam, texture, and restaurant-grade light.',
    fullPrompt:
      'Fine-dining food photography, single elegant plated dish, micro-herbs and sauce dots, warm side light with soft shadow, rising steam, dark ceramic plate on aged wood, shallow depth of field, appetizing warm tones, Michelin editorial style, 90mm macro, natural and tactile.',
    models: ['GPT Image', 'Flux 1.1 Pro'],
    negativePrompt: 'plastic food, oversaturated, messy plating, harsh flash',
    related: ['luxury-perfume-product', 'architectural-brutalist-atrium', 'editorial-fashion-flatlay'],
    aspect: 'square',
  },
  {
    slug: 'architectural-brutalist-atrium',
    title: 'Brutalist Atrium at Dusk',
    category: 'Architecture',
    preview:
      'Concrete geometry, a shaft of warm light, and one lone figure for scale.',
    fullPrompt:
      'Architectural interior of a brutalist concrete atrium at dusk, dramatic shaft of warm light falling through a skylight, strong geometric shadows, a single small figure for scale, wide 24mm perspective, cinematic teal-and-amber grade, fine concrete texture, moody and monumental.',
    models: ['Midjourney v6.1', 'Flux 1.1 Pro'],
    negativePrompt: 'distorted lines, cluttered, cartoon, oversaturated sky',
    related: ['food-editorial-plating', 'fantasy-desert-oracle', 'business-character-executive'],
    aspect: 'wide',
  },
  {
    slug: 'business-character-executive',
    title: 'Consistent Business Character',
    category: 'Character',
    preview:
      'A repeatable executive persona — same face, wardrobe, and lighting across a whole campaign.',
    fullPrompt:
      'Full-body character reference sheet of a confident African businesswoman in a cream tailored suit, neutral studio backdrop, even soft light, multiple angles (front, three-quarter, profile), consistent facial features, warm skin tone, natural expression, designed for character consistency across a campaign.',
    models: ['Flux 1.1 Pro', 'Midjourney v6.1'],
    negativePrompt: 'inconsistent face, changing hairstyle, extra limbs, distorted proportions',
    related: ['moody-studio-headshot', 'cinematic-golden-hour-portrait', 'fantasy-desert-oracle'],
    aspect: 'portrait',
  },
  {
    slug: 'fantasy-desert-oracle',
    title: 'Fantasy Desert Oracle',
    category: 'Fantasy',
    preview:
      'A mythic figure in flowing amber robes against a windswept dune at last light.',
    fullPrompt:
      'Cinematic fantasy portrait of a desert oracle in flowing amber and gold robes, standing on a windswept dune at last light, blowing sand catching the sun, ornate jewelry, painterly rim light, epic scale, warm cinematic grade, detailed fabric simulation, concept-art quality.',
    models: ['Midjourney v6.1'],
    negativePrompt: 'modern clothing, low detail, flat lighting, watermark, text',
    related: ['architectural-brutalist-atrium', 'editorial-fashion-flatlay', 'business-character-executive'],
    aspect: 'portrait',
  },
];

/**
 * Each prompt gets its generated output image by convention (`/prompts/<slug>.webp`).
 * Set an explicit `outputImage` on a prompt to override.
 */
export const prompts: Prompt[] = rawPrompts.map((p) => ({
  ...p,
  outputImage: p.outputImage ?? `/prompts/${p.slug}.webp`,
}));

export const promptCategories = [
  'All',
  ...Array.from(new Set(prompts.map((p) => p.category))),
];

export function getPrompt(slug: string) {
  return prompts.find((p) => p.slug === slug);
}
