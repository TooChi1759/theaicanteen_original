'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { HoverMedia } from '@/components/primitives/hover-media';
import { RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { useVideoModal } from '@/components/video/video-modal';
import { featuredThisMonth } from '@/lib/data/featured-month';
import { videos } from '@/lib/data/videos';

export function FeaturedMonth() {
  const { openVideo } = useVideoModal();

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Featured This Month"
          title="This month's standouts"
          description="A curated four — the film, image, prompt, and tip worth your attention right now."
        />

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredThisMonth.map((s) => {
            const video = s.videoId ? videos.find((v) => v.id === s.videoId) : undefined;

            const content = (
              <>
                <HoverMedia
                  seed={s.id}
                  title={s.title}
                  poster={video?.thumbnail ?? s.poster}
                  kind={s.kind}
                  aspect="video"
                  rounded="rounded-2xl"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="flex flex-1 flex-col p-4">
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                      s.accent === 'gold' ? 'text-gold' : 'text-amber'
                    }`}
                  >
                    {s.kicker}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-ivory">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-light">
                    {s.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-ivory/[0.07] pt-3">
                    <span className="text-xs text-stone">{s.meta}</span>
                    <ArrowUpRight className="h-4 w-4 text-stone transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber" />
                  </div>
                </div>
              </>
            );

            const cardClass =
              'card-surface grain group flex h-full w-full flex-col overflow-hidden p-2 text-left transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift';

            return (
              <RevealItem key={s.id}>
                {video ? (
                  <button
                    type="button"
                    onClick={() => openVideo(video)}
                    aria-label={`Play ${video.title}`}
                    className={cardClass}
                  >
                    {content}
                  </button>
                ) : (
                  <Link href={s.href} className={cardClass}>
                    {content}
                  </Link>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
