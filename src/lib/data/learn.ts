/** Tips & Resources content — educational cards + downloadable creative resources. */

import type { LucideIcon } from 'lucide-react';
import {
  PenLine,
  UserRoundCheck,
  Sun,
  Video,
  Palette,
  Smile,
  LayoutGrid,
  Clapperboard,
  Workflow,
  FileText,
  Lightbulb,
  Camera,
  Boxes,
  Ratio,
  Sparkles,
} from 'lucide-react';

export type Tip = {
  id: string;
  title: string;
  description: string;
  readTime: string;
  icon: LucideIcon;
};

export const tips: Tip[] = [
  { id: 'prompt-writing', title: 'Prompt Writing', description: 'Structure a prompt like a director’s brief — subject, light, lens, mood, grade.', readTime: '6 min', icon: PenLine },
  { id: 'character-consistency', title: 'Character Consistency', description: 'Lock a face, wardrobe, and vibe across dozens of shots with reference workflows.', readTime: '5 min', icon: UserRoundCheck },
  { id: 'lighting', title: 'Lighting', description: 'Name your light source and quality to control mood before you touch a grade.', readTime: '7 min', icon: Sun },
  { id: 'camera-movement', title: 'Camera Movement', description: 'Push-ins, orbits, and cranes — the motion vocabulary that reads as cinematic.', readTime: '8 min', icon: Video },
  { id: 'color-grading', title: 'Color Grading', description: 'Build a signature palette and carry it across every frame you publish.', readTime: '5 min', icon: Palette },
  { id: 'facial-expressions', title: 'Facial Expressions', description: 'Direct micro-expressions so your characters actually feel something.', readTime: '4 min', icon: Smile },
  { id: 'composition', title: 'Composition', description: 'Negative space, leading lines, and the editorial eye that elevates a frame.', readTime: '6 min', icon: LayoutGrid },
  { id: 'ai-video-tips', title: 'AI Video Tips', description: 'Get clean motion, stable characters, and usable takes from generative video.', readTime: '9 min', icon: Clapperboard },
  { id: 'creative-workflows', title: 'Creative Workflows', description: 'The end-to-end pipeline from idea to finished, publishable piece.', readTime: '7 min', icon: Workflow },
];

export type Resource = {
  id: string;
  title: string;
  description: string;
  type: string;
  icon: LucideIcon;
};

export const resources: Resource[] = [
  { id: 'prompt-templates', title: 'Prompt Templates', description: 'Copy-paste starting points for portraits, products, and film scenes.', type: 'Template Pack', icon: FileText },
  { id: 'lighting-guides', title: 'Lighting Guides', description: 'A visual cheat sheet of setups from Rembrandt to butterfly to backlit.', type: 'Guide', icon: Lightbulb },
  { id: 'camera-references', title: 'Camera References', description: 'Lenses, focal lengths, and moves — with the words that trigger them.', type: 'Reference', icon: Camera },
  { id: 'prompt-frameworks', title: 'Prompt Frameworks', description: 'Repeatable mental models for consistent, controllable results.', type: 'Framework', icon: Boxes },
  { id: 'aspect-ratio-guides', title: 'Aspect Ratio Guides', description: 'Pick the right frame for TikTok, cinema, print, and everything between.', type: 'Guide', icon: Ratio },
  { id: 'creative-inspiration', title: 'Creative Inspiration', description: 'Curated moodboards to break a block and spark the next idea.', type: 'Moodboard', icon: Sparkles },
];
