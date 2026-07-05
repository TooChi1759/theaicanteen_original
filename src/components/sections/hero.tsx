'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Copy, Sparkles } from 'lucide-react';
import { HoverMedia } from '@/components/primitives/hover-media';
import { site } from '@/lib/data/site';
import { cn } from '@/lib/utils';

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

type Card = {
  label: string;
  seed: string;
  kind: 'image' | 'video';
  aspect: 'square' | 'portrait' | 'video';
  className: string;
  float: string;
};

const cards: Card[] = [
  { label: 'AI Film', seed: 'hero-film', kind: 'video', aspect: 'video', className: 'left-0 top-4 w-[58%]', float: 'animate-float-slow' },
  { label: 'Studio Portrait', seed: 'hero-portrait', kind: 'image', aspect: 'portrait', className: 'right-0 top-0 w-[38%]', float: 'animate-float-slower' },
  { label: 'AI Character', seed: 'hero-character', kind: 'image', aspect: 'square', className: 'left-[6%] bottom-2 w-[40%]', float: 'animate-float-slower' },
  { label: 'Storytelling', seed: 'hero-story', kind: 'video', aspect: 'video', className: 'right-1 bottom-6 w-[52%]', float: 'animate-float-slow' },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 lg:pt-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-ember-glow blur-2xl" />
        <div className="absolute right-[-10%] top-[20%] h-[40vh] w-[40vw] rounded-full bg-gold-glow blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4] mask-fade-b"
          style={{
            backgroundImage:
              'linear-gradient(rgba(248,245,240,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(248,245,240,0.03) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              AI Video · Photography · Prompts
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-display-lg font-semibold text-ivory"
          >
            Feed Your <span className="text-gradient-amber italic">Creativity.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-stone-light"
          >
            Discover AI-powered storytelling, stunning visuals, prompt engineering, and creative
            resources designed for creators who refuse ordinary.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/featured-work"
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-amber-gradient px-8 text-base font-semibold text-ivory shadow-[0_14px_40px_-12px_rgba(196,106,45,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              Explore Featured Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/prompt-library"
              className="inline-flex h-14 items-center gap-2 rounded-full border border-ivory/20 bg-ivory/[0.02] px-8 text-base font-medium text-ivory backdrop-blur-sm transition-all duration-300 hover:border-ivory/40 hover:bg-ivory/[0.06]"
            >
              Browse Prompt Library
            </Link>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 flex items-center gap-3 font-serif text-sm italic text-stone"
          >
            <span className="h-px w-8 bg-amber/60" />
            {site.tagline}.
          </motion.p>
        </motion.div>

        {/* Right — floating card collage (desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            {/* decorative ring */}
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ivory/[0.06] animate-pulse-ring" />

            {cards.map((c) => (
              <div
                key={c.label}
                className={cn('absolute', c.className, c.float)}
                style={{ animationDelay: `${(c.seed.length % 5) * 0.4}s` }}
              >
                <div className="card-surface grain overflow-hidden p-2 shadow-lift">
                  <HoverMedia
                    seed={c.seed}
                    label={c.label}
                    kind={c.kind}
                    aspect={c.aspect}
                    rounded="rounded-2xl"
                    sizes="300px"
                  />
                </div>
              </div>
            ))}

            {/* Floating prompt UI card (QClay-style peeking card) */}
            <div className="absolute left-[24%] top-[38%] w-[46%] animate-float-slow" style={{ animationDelay: '1.2s' }}>
              <div className="glass grain rounded-2xl p-4 shadow-lift">
                <div className="flex items-center justify-between">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-widest text-amber">
                    Prompt
                  </span>
                  <Copy className="h-3.5 w-3.5 text-stone" />
                </div>
                <p className="mt-2 font-serif text-sm leading-snug text-ivory/90">
                  &ldquo;Cinematic golden-hour portrait, 85mm, warm amber grade…&rdquo;
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="h-1.5 w-8 rounded-full bg-ivory/15" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — mobile / tablet grid */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {cards.map((c) => (
            <div key={c.label} className="card-surface grain overflow-hidden p-1.5">
              <HoverMedia
                seed={c.seed}
                label={c.label}
                kind={c.kind}
                aspect="square"
                rounded="rounded-xl"
                sizes="45vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* scroll hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-stone lg:flex">
        <span className="text-[0.62rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-amber/60 to-transparent" />
      </div>
    </section>
  );
}
