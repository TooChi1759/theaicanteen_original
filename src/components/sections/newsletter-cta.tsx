import { Container } from '@/components/primitives/container';
import { Reveal } from '@/components/primitives/reveal';
import { NewsletterForm } from '@/components/primitives/newsletter-form';

export function NewsletterCta() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <div className="card-surface grain relative overflow-hidden px-6 py-14 text-center sm:px-12 lg:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 rounded-full bg-ember-glow blur-2xl" />
              <div className="absolute bottom-[-30%] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gold-glow blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                Newsletter
              </span>
              <h2 className="mt-5 font-serif text-headline font-semibold text-ivory">
                Come hungry. Leave inspired.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-light sm:text-lg">
                Get practical AI inspiration, standout prompts, and creative ideas delivered
                straight to your inbox.
              </p>
              <NewsletterForm variant="stacked" className="mx-auto mt-8 max-w-lg" />
              <p className="mt-4 text-xs text-stone">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
