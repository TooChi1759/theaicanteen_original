import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarClock, Quote } from 'lucide-react';
import { PageHeader } from '@/components/primitives/page-header';
import { Container } from '@/components/primitives/container';
import { HoverMedia } from '@/components/primitives/hover-media';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { CreativeStack } from '@/components/sections/creative-stack';
import { site } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The AI Canteen is a premium creative platform founded by Chioma Onwumere, exploring AI-powered storytelling and craft.',
};

const philosophy = [
  {
    title: 'Craft over volume',
    body: 'We would rather ship one unforgettable frame than a hundred forgettable ones. Every piece is curated, not churned.',
  },
  {
    title: 'AI as a brush',
    body: 'The tools are extraordinary, but taste is still the differentiator. We direct the machine the way a filmmaker directs a set.',
  },
  {
    title: 'Teach as we go',
    body: 'Everything we learn becomes a prompt, a tip, or a resource. The canteen is a table, not a gate.',
  },
];

const stats = [
  { value: '20+', label: 'Personal projects shipped' },
  { value: '0→13K', label: 'TikTok followers in 3 months' },
  { value: '13', label: 'Tools in the creative stack' },
  { value: '9', label: 'Photography disciplines' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A canteen for the creatively hungry."
        description="The AI Canteen is where cutting-edge AI meets editorial craft — a place to taste what's possible and leave knowing how it was made."
      />

      <section className="section pt-4">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Portrait */}
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <div className="card-surface grain overflow-hidden p-2">
                <div className="relative">
                  <HoverMedia
                    seed="chioma-portrait"
                    title={site.ceo}
                    kind="image"
                    poster="/brand/chioma-portrait.webp"
                    aspect="portrait"
                    rounded="rounded-[1.25rem]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-b-[1.25rem] bg-gradient-to-t from-charcoal-deep/90 to-transparent p-5">
                    <p className="font-serif text-xl font-semibold text-ivory">{site.ceo}</p>
                    <p className="text-sm text-stone-light">Founder & Creative Director</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Story */}
            <div>
              <Reveal>
                <span className="eyebrow">The Philosophy</span>
                <div className="mt-6 space-y-6 text-lg leading-relaxed text-stone-light">
                  <p>
                    The AI Canteen began with a simple conviction: that generative tools, in the
                    right hands, could produce work with real soul — cinematic, editorial, and
                    unmistakably intentional.
                  </p>
                  <p>
                    Founded by{' '}
                    <span className="font-medium text-ivory">{site.ceo}</span>, the studio blends
                    the instincts of a director with the fluency of a prompt engineer. The result is
                    a body of work — films, photography, and characters — that feels handcrafted,
                    even when a machine held the brush.
                  </p>
                  <p>
                    But a canteen is meant to be shared. Alongside the work, we publish the prompts,
                    the frameworks, and the hard-won lessons — so you can pull up a chair and make
                    something remarkable of your own.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="mt-10">
                <figure className="card-surface grain relative p-8">
                  <Quote className="absolute -top-3 left-6 h-8 w-8 text-amber" />
                  <blockquote className="font-serif text-2xl italic leading-snug text-ivory">
                    Come hungry, leave smarter. That isn&rsquo;t a tagline — it&rsquo;s the whole
                    idea.
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-stone">— {site.ceo}</figcaption>
                </figure>
              </Reveal>
            </div>
          </div>

          {/* Philosophy grid */}
          <RevealGroup className="mt-20 grid gap-6 md:grid-cols-3">
            {philosophy.map((p) => (
              <RevealItem key={p.title}>
                <div className="card-surface h-full p-7">
                  <h3 className="font-serif text-xl font-semibold text-ivory">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-light">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Stats */}
          <RevealGroup className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-ivory/[0.08] bg-charcoal-soft/40 p-8 md:grid-cols-4">
            {stats.map((s) => (
              <RevealItem key={s.label} className="text-center">
                <div className="font-serif text-4xl font-bold text-gold">{s.value}</div>
                <div className="mt-2 text-sm text-stone-light">{s.label}</div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-14 flex justify-center">
            <Link
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-amber-gradient px-8 text-base font-semibold text-ivory shadow-[0_14px_40px_-12px_rgba(196,106,45,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              <CalendarClock className="h-5 w-5" />
              Book a Call
            </Link>
          </Reveal>
        </Container>
      </section>

      <CreativeStack />
    </>
  );
}
