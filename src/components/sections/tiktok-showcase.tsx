'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Play, X, ExternalLink } from 'lucide-react';
import { TikTokIcon } from '@/components/primitives/icons';
import type { TikTok } from '@/lib/data/tiktoks';

const ease = [0.16, 1, 0.3, 1] as const;

function TikTokCard({ item, onOpen }: { item: TikTok; onOpen: () => void }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }}
      className="group"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Play ${item.title}`}
        className="card-surface grain relative block aspect-[9/16] w-full overflow-hidden p-0 text-left transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift"
      >
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-transparent to-charcoal-deep/20" />

        {/* TikTok badge */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-ivory/15 bg-charcoal-deep/55 px-2.5 py-1 text-[0.62rem] font-medium text-ivory/85 backdrop-blur-md">
          <TikTokIcon className="h-3 w-3" />
          TikTok
        </span>

        {/* Play affordance */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory/25 bg-charcoal-deep/40 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-amber/60 group-hover:bg-amber/20">
            <Play className="h-4 w-4 translate-x-[1px] fill-ivory text-ivory" />
          </span>
        </span>

        {/* Caption */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-serif text-base font-semibold leading-tight text-ivory">
            {item.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-light">
            {item.description}
          </p>
        </div>
      </button>
    </motion.article>
  );
}

export function TikTokShowcase({ items }: { items: TikTok[] }) {
  const [active, setActive] = useState<TikTok | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
      >
        {items.map((item) => (
          <TikTokCard key={item.id} item={item} onOpen={() => setActive(item)} />
        ))}
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-deep/85 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 bg-charcoal-soft/70 text-ivory transition-colors hover:border-amber/50 hover:text-amber"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.35, ease }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[min(420px,92vw)]"
            >
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-ivory/10 bg-black shadow-lift"
                style={{ aspectRatio: '9 / 16', maxHeight: '80vh' }}
              >
                <iframe
                  src={`https://www.tiktok.com/player/v1/${active.id}?autoplay=1&description=0&music_info=0&rel=0`}
                  title={active.title}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate font-serif text-lg font-semibold text-ivory">
                    {active.title}
                  </h3>
                  <p className="truncate text-sm text-stone-light">{active.description}</p>
                </div>
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ivory/15 px-3.5 py-2 text-xs font-medium text-ivory transition-colors hover:border-amber/50 hover:text-amber"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  TikTok
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
