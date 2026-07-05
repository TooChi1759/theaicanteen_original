import Link from 'next/link';
import { Play, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { HoverMedia } from '@/components/primitives/hover-media';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { storytellingShowcase } from '@/lib/data/films';

export function Storytelling() {
  const [lead, ...rest] = storytellingShowcase;

  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute right-[-15%] top-1/3 h-[50vh] w-[50vw] rounded-full bg-ember-glow blur-3xl" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Storytelling Showcase"
          title={<>The Anita stories</>}
          description="Serial storytelling that keeps audiences coming back — our best-performing narrative work."
        />

        {/* Lead story */}
        <Reveal className="mt-12">
          <Link
            href={lead.watchUrl}
            className="card-surface grain group grid gap-2 overflow-hidden p-2 transition-all duration-500 ease-out-expo hover:shadow-lift lg:grid-cols-[1.5fr_1fr]"
          >
            <HoverMedia
              seed={lead.id}
              label={lead.category}
              title={lead.title}
              kind="video"
              aspect="wide"
              rounded="rounded-[1.25rem]"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="flex flex-col justify-center p-6 lg:p-10">
              <span className="eyebrow">Featured Story</span>
              <h3 className="mt-4 font-serif text-3xl font-semibold text-ivory lg:text-4xl">
                {lead.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-stone-light">{lead.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber">
                <Play className="h-4 w-4 fill-current" />
                Watch the story
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Supporting stories */}
        <RevealGroup className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((story) => (
            <RevealItem key={story.id}>
              <article className="group flex flex-col">
                <Link
                  href={story.watchUrl}
                  className="card-surface grain block overflow-hidden p-2 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift"
                  aria-label={`Watch ${story.title}`}
                >
                  <HoverMedia
                    seed={story.id}
                    title={story.title}
                    kind="video"
                    aspect="video"
                    rounded="rounded-2xl"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </Link>
                <div className="px-1 pt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold text-ivory transition-colors group-hover:text-amber-soft">
                      {story.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-stone transition-colors group-hover:text-amber" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone-light">
                    {story.description}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
