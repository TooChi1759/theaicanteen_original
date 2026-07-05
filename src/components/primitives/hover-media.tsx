'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { cn, seededUnit } from '@/lib/utils';

/**
 * Cinematic media frame. Renders a deterministic, brand-tinted gradient placeholder
 * today; swap in real media later via `poster` (image) and/or `videoSrc` (hover-autoplay video)
 * with zero layout change — the data structures are already CMS-shaped.
 */
export type HoverMediaProps = {
  seed: string;
  label?: string;
  title?: string;
  kind?: 'image' | 'video';
  poster?: string;
  videoSrc?: string;
  aspect?: 'video' | 'square' | 'portrait' | 'wide';
  rounded?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const aspectClass: Record<NonNullable<HoverMediaProps['aspect']>, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  wide: 'aspect-[16/7]',
};

// Curated dark, warm gradient bases — kept within the charcoal/amber/gold family (no neon).
const bases: [string, string][] = [
  ['#2c1c10', '#0e0e0e'],
  ['#33261a', '#141210'],
  ['#2a2413', '#121110'],
  ['#241a10', '#1b1b1b'],
  ['#3a2917', '#131010'],
  ['#20180f', '#0d0d0d'],
  ['#2e2018', '#151313'],
  ['#38301c', '#14120e'],
];

function frame(seed: string) {
  const a = seededUnit(seed);
  const b = seededUnit(seed + 'x');
  const c = seededUnit(seed + 'yy');
  const [c1, c2] = bases[Math.floor(a * bases.length) % bases.length];
  const angle = Math.round(90 + b * 120);
  const gx = Math.round(20 + b * 60);
  const gy = Math.round(15 + c * 45);
  const gx2 = Math.round(50 + a * 45);
  const gy2 = Math.round(55 + b * 40);
  const accent = c > 0.5 ? '212,175,55' : '196,106,45';
  const accent2 = c > 0.5 ? '196,106,45' : '212,175,55';
  return {
    background: `linear-gradient(${angle}deg, ${c1} 0%, ${c2} 100%)`,
    glow: `radial-gradient(40% 40% at ${gx}% ${gy}%, rgba(${accent},0.42) 0%, rgba(${accent},0) 70%), radial-gradient(45% 45% at ${gx2}% ${gy2}%, rgba(${accent2},0.2) 0%, rgba(${accent2},0) 72%)`,
  };
}

export function HoverMedia({
  seed,
  label,
  title,
  kind = 'image',
  poster,
  videoSrc,
  aspect = 'video',
  rounded = 'rounded-2xl',
  className,
  priority,
  sizes = '(max-width: 768px) 100vw, 33vw',
}: HoverMediaProps) {
  const f = frame(seed);
  const initial = (title ?? label ?? 'A').trim().charAt(0).toUpperCase();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  const onEnter = () => {
    setActive(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };
  const onLeave = () => {
    setActive(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={cn(
        'group/media relative isolate overflow-hidden',
        aspectClass[aspect],
        rounded,
        className
      )}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Base gradient */}
      <div
        className="absolute inset-0 transition-transform duration-[900ms] ease-out-expo group-hover/media:scale-[1.06]"
        style={{ background: f.background }}
      >
        <div className="absolute inset-0" style={{ background: f.glow }} />
        <div className="grain absolute inset-0" />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      {/* Real poster image (optional, CMS) */}
      {poster && (
        <Image
          src={poster}
          alt={title ?? label ?? ''}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[900ms] ease-out-expo group-hover/media:scale-[1.06]"
        />
      )}

      {/* Real video (optional, CMS) — hover autoplay */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
            active ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}

      {/* Editorial watermark initial */}
      {!poster && !videoSrc && (
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-6 left-3 select-none font-serif text-[7rem] font-black leading-none text-ivory/[0.06] transition-all duration-700 group-hover/media:text-ivory/[0.1]"
        >
          {initial}
        </span>
      )}

      {/* Light sweep on hover */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-ivory/10 to-transparent transition-transform duration-[1100ms] ease-out-expo group-hover/media:translate-x-full" />

      {/* Category label */}
      {label && (
        <span className="absolute left-3 top-3 z-10 rounded-full border border-ivory/15 bg-charcoal-deep/55 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wider text-ivory/85 backdrop-blur-md">
          {label}
        </span>
      )}

      {/* Play affordance for video */}
      {kind === 'video' && (
        <>
          <span className="absolute inset-0 z-10 flex items-center justify-center">
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-ivory/25 bg-charcoal-deep/40 backdrop-blur-md transition-all duration-500 group-hover/media:scale-110 group-hover/media:border-amber/60 group-hover/media:bg-amber/20">
              <span className="absolute inset-0 rounded-full ring-1 ring-ivory/10 group-hover/media:animate-pulse-ring" />
              <Play className="h-5 w-5 translate-x-[1px] fill-ivory text-ivory" />
            </span>
          </span>
          <span className="absolute bottom-3 right-3 z-10 rounded-full bg-charcoal-deep/60 px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-wider text-ivory/70 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover/media:opacity-100">
            Preview
          </span>
        </>
      )}
    </div>
  );
}
