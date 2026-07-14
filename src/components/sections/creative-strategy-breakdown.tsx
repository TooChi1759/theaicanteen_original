'use client';

import { useState } from 'react';
import { Reveal } from '@/components/primitives/reveal';
import { type StrategyChannel } from '@/lib/data/creative-strategy';
import { cn } from '@/lib/utils';

export function CreativeStrategyBreakdown({ channels }: { channels: StrategyChannel[] }) {
  const [activeId, setActiveId] = useState(channels[0].id);
  const active = channels.find((c) => c.id === activeId) ?? channels[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {channels.map((c) => (
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

      <Reveal key={active.id} className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_1.3fr] lg:items-stretch">
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-ivory/[0.08] bg-gradient-to-br from-charcoal-soft to-charcoal-deep p-8">
          <div className="pointer-events-none absolute bottom-[-40%] left-[-20%] h-64 w-64 rounded-full bg-gold-glow blur-2xl" />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
              The Psychology — {active.label}
            </span>
            <p className="mt-4 font-serif text-xl italic leading-snug text-ivory/90">
              &ldquo;{active.quote}&rdquo;
            </p>
          </div>
          <p className="relative mt-8 border-t border-ivory/[0.08] pt-6 text-sm leading-relaxed text-stone-light">
            {active.foot}
          </p>
        </div>

        <div className="flex flex-col gap-6 rounded-[2rem] border border-ivory/[0.08] bg-ivory/[0.02] p-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
              What we test
            </span>
            <ul className="mt-3 space-y-2.5">
              {active.whatWeTest.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ivory/90">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">
              What we measure
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {active.metrics.map((metric) => (
                <span
                  key={metric}
                  className="inline-flex items-center rounded-full border border-gold/25 bg-gold/[0.07] px-3 py-1.5 text-xs font-medium text-gold-soft"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
