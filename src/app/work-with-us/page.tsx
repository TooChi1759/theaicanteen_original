import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarClock, Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { PageHeader } from '@/components/primitives/page-header';
import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { TikTokIcon } from '@/components/primitives/icons';
import { services } from '@/lib/data/services';
import { site } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Work With Us',
  description:
    'Collaborate with The AI Canteen — AI commercial production, creative campaigns, photography, prompt engineering, consulting, speaking, and workshops.',
};

const process = [
  { step: '01', title: 'Discovery', body: 'A short call to understand the brief, the brand, and the outcome you need.' },
  { step: '02', title: 'Direction', body: 'We shape the concept, visual world, and prompt system before a frame is made.' },
  { step: '03', title: 'Production', body: 'Generation, editing, and grading — refined until it feels effortless.' },
  { step: '04', title: 'Delivery', body: 'Polished, on-brand assets ready to publish, plus the recipes behind them.' },
];

export default function WorkWithUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work With Us"
        title="Bring cinematic AI to your brand."
        description="From a single spot to a full campaign, we partner with brands and creators who want work that stands apart."
      >
        <div className="flex flex-wrap items-center gap-3">
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
            href={`mailto:${site.email.partnerships}`}
            className="inline-flex h-14 items-center gap-2 rounded-full border border-ivory/20 px-8 text-base font-medium text-ivory transition-all duration-300 hover:border-ivory/40 hover:bg-ivory/[0.06]"
          >
            <Mail className="h-5 w-5" />
            Email Us
          </a>
        </div>
      </PageHeader>

      {/* Services */}
      <section className="section pt-4">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="What we do"
            description="A full-service AI creative studio — strategy, production, and everything between."
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <RevealItem key={s.id}>
                  <div className="card-surface grain group h-full p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-amber/25 hover:shadow-lift">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-amber/20 bg-amber/10 text-amber transition-colors group-hover:bg-amber/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-ivory">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-light">{s.description}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      {/* Process */}
      <section className="section pt-0">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="How It Works"
            title="A calm, deliberate process"
            description="Four steps from first call to final delivery — no chaos, no guesswork."
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <RevealItem key={p.step}>
                <div className="relative h-full rounded-3xl border border-ivory/[0.08] bg-charcoal-soft/40 p-7">
                  <span className="font-serif text-5xl font-bold text-ivory/10">{p.step}</span>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-ivory">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-light">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Contact */}
      <section className="section pt-0">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-ivory/[0.08] bg-gradient-to-br from-charcoal-soft to-charcoal-deep p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute left-[-10%] bottom-[-40%] h-72 w-72 rounded-full bg-gold-glow blur-2xl" />
              <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="font-serif text-headline font-semibold text-ivory">
                    Let&rsquo;s talk.
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-stone-light">
                    Reach out for collaborations, partnerships, speaking, or workshops. We reply to
                    every serious inquiry.
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <a
                      href={site.socials.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="The AI Canteen on TikTok"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/12 text-ivory/80 transition-all hover:border-amber/50 hover:text-amber"
                    >
                      <TikTokIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={site.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.ceo} on LinkedIn`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/12 text-ivory/80 transition-all hover:border-amber/50 hover:text-amber"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`mailto:${site.email.general}`}
                    className="group flex items-center justify-between rounded-2xl border border-ivory/[0.08] bg-ivory/[0.02] p-5 transition-colors hover:border-amber/30"
                  >
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-stone">
                        General
                      </span>
                      <span className="mt-1 block text-ivory">{site.email.general}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-stone transition-colors group-hover:text-amber" />
                  </a>
                  <a
                    href={`mailto:${site.email.partnerships}`}
                    className="group flex items-center justify-between rounded-2xl border border-ivory/[0.08] bg-ivory/[0.02] p-5 transition-colors hover:border-amber/30"
                  >
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-stone">
                        Partnerships
                      </span>
                      <span className="mt-1 block text-ivory">{site.email.partnerships}</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-stone transition-colors group-hover:text-amber" />
                  </a>
                  <Link
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl bg-amber-gradient p-5 text-ivory transition-all hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-ivory/70">
                        Book
                      </span>
                      <span className="mt-1 block font-semibold">A Discovery Call</span>
                    </span>
                    <CalendarClock className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
