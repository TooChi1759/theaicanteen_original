import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { TikTokIcon } from '@/components/primitives/icons';
import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { Reveal } from '@/components/primitives/reveal';
import { VideoShowcase } from './video-showcase';
import { TikTokShowcase } from './tiktok-showcase';
import { videos } from '@/lib/data/videos';
import { tiktoks } from '@/lib/data/tiktoks';

/**
 * The home page's single "real work" section — spec ads/brand films (Vimeo)
 * plus the Anita TikTok series, under one heading instead of two stacked sections.
 */
export function HomeFeaturedWork() {
  return (
    <section className="section" id="featured-work">
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected work"
          description="Real spec ads, brand films, and story pieces — shot, edited, and shipped. Tap any frame to watch."
          action={{ label: 'View all work', href: '/featured-work' }}
        />

        <div className="mt-12">
          <VideoShowcase videos={videos.slice(0, 6)} />
        </div>

        <Reveal className="mt-16">
          <div className="flex items-center justify-between gap-4 border-t border-ivory/[0.07] pt-8">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ivory">
              <TikTokIcon className="h-4 w-4 text-amber" />
              On TikTok — the Anita series
            </span>
            <Link
              href="/tiktok"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-stone-light transition-colors hover:text-ivory"
            >
              See all
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="mt-6">
            <TikTokShowcase items={tiktoks} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
