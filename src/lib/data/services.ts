/** Work With Us — professional collaboration services. */

import type { LucideIcon } from 'lucide-react';
import {
  Clapperboard,
  Megaphone,
  Camera,
  Wand2,
  Compass,
  Mic,
  GraduationCap,
  Handshake,
  Target,
} from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** If set, the whole card links out to more detail (e.g. a dedicated page). */
  href?: string;
};

export const services: Service[] = [
  { id: 'strategy', title: 'Performance Creative Strategy', description: 'Platform-specific testing, psychology, and metrics — decided before production starts.', icon: Target, href: '/method' },
  { id: 'commercial', title: 'AI Commercial Production', description: 'End-to-end generative commercials — concept, direction, and delivery.', icon: Clapperboard },
  { id: 'campaigns', title: 'Creative Campaigns', description: 'Multi-asset campaigns with a consistent, ownable visual world.', icon: Megaphone },
  { id: 'photography', title: 'AI Photography', description: 'Studio-grade imagery for products, people, and brands.', icon: Camera },
  { id: 'prompt-engineering', title: 'Prompt Engineering', description: 'Reusable prompt systems tuned to your look and your tools.', icon: Wand2 },
  { id: 'consulting', title: 'Creative Consulting', description: 'Build an AI creative pipeline that actually ships.', icon: Compass },
  { id: 'speaking', title: 'Speaking', description: 'Keynotes on AI storytelling, craft, and the future of creation.', icon: Mic },
  { id: 'workshops', title: 'Workshops', description: 'Hands-on training for teams ready to create with AI.', icon: GraduationCap },
  { id: 'partnerships', title: 'Brand Partnerships', description: 'Collaborations that pair your brand with standout AI craft.', icon: Handshake },
];
