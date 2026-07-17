import { Heart } from 'lucide-react';
import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { testimonials } from '@/lib/data/testimonials';

export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="From The Comments"
          title="See what people are saying."
          description="Real reactions from the Anita series — the kind of comment section that tells you a story landed."
        />

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.id} as="article">
              <figure className="card-surface grain flex h-full flex-col justify-between p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-amber/25 hover:shadow-lift">
                <blockquote className="font-serif text-lg leading-snug text-ivory">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-ivory/[0.07] pt-4 text-xs text-stone">
                  <span>
                    {t.author ? <span className="text-stone-light">{t.author}</span> : 'Anita series'}
                    {' · '}
                    {t.date}
                  </span>
                  {t.reactions && (
                    <span className="inline-flex items-center gap-1 text-amber">
                      <Heart className="h-3.5 w-3.5 fill-current" />
                      {t.reactions}
                    </span>
                  )}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
