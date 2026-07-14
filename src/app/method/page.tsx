import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarClock } from 'lucide-react';
import { PageHeader } from '@/components/primitives/page-header';
import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { CreativeStrategyBreakdown } from '@/components/sections/creative-strategy-breakdown';
import { TestingLoop } from '@/components/sections/testing-loop';
import { JsonLd } from '@/components/primitives/json-ld';
import { breadcrumbSchema } from '@/lib/structured-data';
import { strategyChannels } from '@/lib/data/creative-strategy';
import { site } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'The Method',
  description:
    'How The AI Canteen approaches performance creative strategy — the platform psychology and testing method behind every video, before a single frame is produced.',
  alternates: { canonical: '/method' },
};

const principles = [
  {
    title: 'Platform first, prompt second',
    body: 'Meta rewards a different first second than TikTok. The channel decides the creative brief before a model ever gets a prompt.',
  },
  {
    title: 'Every frame serves a lever',
    body: 'Urgency, proof, novelty, trust — each variant is built to isolate one psychological lever, not just look different.',
  },
  {
    title: 'Judged by conversion, not craft alone',
    body: 'A beautiful cut that doesn’t convert on its platform is a miss. We test for revenue, not for admiration.',
  },
];

export default function MethodPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'The Method', path: '/method' },
        ])}
      />

      <PageHeader
        eyebrow="The Method"
        title="Every video is engineered before it's ever generated."
        description="Most AI studios open a prompt box and start generating. We start with a question: what is this asset supposed to make someone do, and on which platform? The psychology, the channel, and the metric get decided first — production is the last step, not the first."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-amber-gradient px-8 text-base font-semibold text-ivory shadow-[0_14px_40px_-12px_rgba(196,106,45,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            <CalendarClock className="h-5 w-5" />
            Book a Strategy Call
          </Link>
        </div>
      </PageHeader>

      <section className="section pt-4">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <RevealItem key={p.title}>
                <div className="card-surface h-full p-7">
                  <h3 className="font-serif text-xl font-semibold text-ivory">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-light">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="section pt-0">
        <Container>
          <SectionHeading
            eyebrow="By Channel"
            title="What we test, why it works, what we measure."
            description="Six platforms, six different psychologies. Pick one to see how the reasoning changes."
          />
          <div className="mt-10">
            <CreativeStrategyBreakdown channels={strategyChannels} />
          </div>
        </Container>
      </section>

      <section className="section pt-0">
        <Container>
          <SectionHeading
            eyebrow="Creative Variations"
            title="The testing loop behind every creative"
            description="Not one-and-done production. A standing system that keeps compounding what works into the next brief."
          />
          <div className="mt-10">
            <TestingLoop />
          </div>
        </Container>
      </section>

      <section className="section pt-0">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-ivory/[0.08] bg-gradient-to-br from-charcoal-soft to-charcoal-deep p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember-glow blur-2xl" />
            <h2 className="relative font-serif text-headline font-semibold text-ivory">
              Want this applied to your brand?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-light">
              Performance Creative Strategy is one of the services we offer directly — see how it
              fits alongside production, campaigns, and consulting.
            </p>
            <Link
              href="/work-with-us"
              className="relative mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-amber-gradient px-8 text-base font-semibold text-ivory shadow-[0_14px_40px_-12px_rgba(196,106,45,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              See What We Offer
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
