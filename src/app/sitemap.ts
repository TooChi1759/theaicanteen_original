import type { MetadataRoute } from 'next';
import { site } from '@/lib/data/site';
import { prompts } from '@/lib/data/prompts';
import { allLearnSlugs } from '@/lib/data/learn';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    '',
    '/featured-work',
    '/prompt-library',
    '/gallery',
    '/tips-resources',
    '/tiktok',
    '/about',
    '/work-with-us',
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const promptRoutes = prompts.map((p) => ({
    url: `${site.url}/prompt-library/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const learnRoutes = allLearnSlugs.map((slug) => ({
    url: `${site.url}/tips-resources/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...promptRoutes, ...learnRoutes];
}
