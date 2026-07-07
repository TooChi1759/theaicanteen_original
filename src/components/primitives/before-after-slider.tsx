'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeftRight } from 'lucide-react';

export function BeforeAfterSlider({
  naiveImage,
  naiveLabel = 'Generic prompt',
  engineeredImage,
  engineeredLabel = 'Engineered prompt',
}: {
  naiveImage: string;
  naiveLabel?: string;
  engineeredImage: string;
  engineeredLabel?: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <div className="card-surface grain relative aspect-[4/5] w-full select-none overflow-hidden p-0 sm:aspect-[16/10]">
      {/* Engineered — full-size base layer */}
      <Image
        src={engineeredImage}
        alt={engineeredLabel}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority
      />

      {/* Naive — same size, revealed via clip-path so nothing ever squishes */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={naiveImage}
          alt={naiveLabel}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Divider + handle (decorative) */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-ivory/70"
        style={{ left: `${position}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/40 bg-charcoal-deep/70 text-ivory shadow-lift backdrop-blur-md"
        style={{ left: `${position}%` }}
      >
        <ArrowLeftRight className="h-4 w-4" />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-ivory/15 bg-charcoal-deep/60 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wider text-ivory/85 backdrop-blur-md">
        {naiveLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full border border-amber/30 bg-amber/15 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wider text-amber-soft backdrop-blur-md">
        {engineeredLabel}
      </span>

      {/* Accessible drag/click/keyboard control — invisible, full-area */}
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label={`Drag to compare ${naiveLabel} against ${engineeredLabel}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0 [&::-webkit-slider-thumb]:h-full [&::-webkit-slider-thumb]:w-11 [&::-webkit-slider-thumb]:appearance-none"
      />
    </div>
  );
}
