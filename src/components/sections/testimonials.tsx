import Image from 'next/image';
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

        <RevealGroup className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <RevealItem key={t.id} as="div" className="mb-5 break-inside-avoid">
              <div className="overflow-hidden rounded-2xl border border-ivory/[0.08] bg-ivory shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-amber/25 hover:shadow-lift">
                <Image
                  src={t.src}
                  alt={t.alt}
                  width={t.width}
                  height={t.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
