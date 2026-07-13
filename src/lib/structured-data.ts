/**
 * JSON-LD structured data builders (schema.org). Pure functions — render with
 * <JsonLd data={...} /> from '@/components/primitives/json-ld'.
 *
 * Deliberately omit fields we don't have real values for (e.g. publish dates)
 * rather than fabricate them — Google treats invented structured data as spam risk.
 */
import { site } from '@/lib/data/site';
import type { Video } from '@/lib/data/videos';
import type { Prompt } from '@/lib/data/prompts';

const abs = (path: string) => `${site.url}${path.startsWith('/') ? '' : '/'}${path}`;

/** "0:58" / "1:00" -> "PT0M58S" / "PT1M0S" (ISO 8601 duration, required by VideoObject). */
export function durationToISO8601(duration: string): string {
  const [minutes, seconds] = duration.split(':').map(Number);
  return `PT${minutes}M${seconds}S`;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: abs('/brand/logo-mark.png'),
    description: site.description,
    founder: {
      '@type': 'Person',
      name: site.ceo,
    },
    email: site.email.general,
    sameAs: [site.socials.tiktok, site.socials.linkedin],
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.ceo,
    jobTitle: 'Founder & Creative Director',
    url: abs('/about'),
    worksFor: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    sameAs: [site.socials.linkedin, site.socials.tiktok],
  };
}

export function videoObjectSchema(video: Video) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: [abs(video.thumbnail)],
    embedUrl: `https://player.vimeo.com/video/${video.id}`,
    duration: durationToISO8601(video.duration),
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: { '@type': 'ImageObject', url: abs('/brand/logo-mark.png') },
    },
  };
}

export function imageObjectSchema(prompt: Prompt) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    name: prompt.title,
    description: prompt.preview,
    contentUrl: abs(prompt.outputImage ?? `/prompts/${prompt.slug}.webp`),
    url: abs(`/prompt-library/${prompt.slug}`),
    creator: { '@type': 'Person', name: site.ceo },
    creditText: site.name,
  };
}

export function articleSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: abs(path),
    author: { '@type': 'Person', name: site.ceo },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: { '@type': 'ImageObject', url: abs('/brand/logo-mark.png') },
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}
