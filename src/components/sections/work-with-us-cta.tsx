import Link from 'next/link';
import { CalendarClock, Mail } from 'lucide-react';
import { Container } from '@/components/primitives/container';
import { Reveal } from '@/components/primitives/reveal';
import { services } from '@/lib/data/services';
import { site } from '@/lib/data/site';

export function WorkWithUsCta() {
  return (
    <section className="section">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-ivory/[0.08] bg-gradient-to-br from-charcoal-soft to-charcoal-deep p-8 shadow-card sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute right-[-10%] top-[-30%] h-72 w-72 rounded-full bg-ember-glow blur-2xl" />
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="eyebrow">Work With Us</span>
                <h2 className="mt-5 font-serif text-headline font-semibold text-ivory">
                  Let&rsquo;s make something unforgettable.
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-stone-light sm:text-lg">
                  From AI commercials to brand partnerships, we bring cinematic craft to ambitious
                  ideas. Tell us what you&rsquo;re building.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-14 items-center gap-2 rounded-full bg-amber-gradient px-8 text-base font-semibold text-ivory shadow-[0_14px_40px_-12px_rgba(196,106,45,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    <CalendarClock className="h-5 w-5" />
                    Book a Discovery Call
                  </Link>
                  <a
                    href={`mailto:${site.email.general}`}
                    className="inline-flex h-14 items-center gap-2 rounded-full border border-ivory/20 px-8 text-base font-medium text-ivory transition-all duration-300 hover:border-ivory/40 hover:bg-ivory/[0.06]"
                  >
                    <Mail className="h-5 w-5" />
                    Email Us
                  </a>
                </div>
              </div>

              <ul className="grid grid-cols-2 gap-3">
                {services.slice(0, 6).map((s) => (
                  <li
                    key={s.id}
                    className="rounded-2xl border border-ivory/[0.08] bg-ivory/[0.02] px-4 py-3 text-sm font-medium text-ivory/85"
                  >
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
