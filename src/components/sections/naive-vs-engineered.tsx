'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { Reveal } from '@/components/primitives/reveal';
import { BeforeAfterSlider } from '@/components/primitives/before-after-slider';
import { comparisons } from '@/lib/data/comparisons';
import { cn } from '@/lib/utils';

export function NaiveVsEngineered() {
  const [activeId, setActiveId] = useState(comparisons[0].id);
  const active = comparisons.find((c) => c.id === activeId) ?? comparisons[0];

  return (
    <section className="section" id="prompt-craft">
      <Container>
        <SectionHeading
          eyebrow="Why Prompt Craft Matters"
          title="Same idea. Same model. Very different result."
          description="Drag the slider. One side is a prompt a beginner would type — the other is the fully engineered recipe from our library."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {comparisons.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveId(c.id)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
                activeId === c.id
                  ? 'border-transparent bg-amber-gradient text-ivory shadow-[0_8px_24px_-10px_rgba(196,106,45,0.7)]'
                  : 'border-ivory/12 text-stone-light hover:border-ivory/30 hover:text-ivory'
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <Reveal key={active.id} className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <BeforeAfterSlider
            naiveImage={active.naiveImage}
            engineeredImage={active.engineeredImage}
          />

          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
                The naive prompt
              </span>
              <p className="mt-2 font-serif text-lg italic leading-snug text-ivory/80">
                &ldquo;{active.naivePrompt}&rdquo;
              </p>
            </div>

            <div className="hairline" />

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
                The engineered prompt
              </span>
              <p className="mt-2 text-sm leading-relaxed text-stone-light">
                Full lighting, lens, mood, and grade direction — the difference between describing
                a subject and directing a shot.
              </p>
              <Link
                href={`/prompt-library/${active.engineeredPromptSlug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber transition-colors hover:text-amber-soft"
              >
                See the full recipe
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
