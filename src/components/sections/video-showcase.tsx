'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import type { Video } from '@/lib/data/videos';
import { cn } from '@/lib/utils';

const ease = [0.16, 1, 0.3, 1] as const;

const modalMaxWidth: Record<Video['orientation'], string> = {
  landscape: 'max-w-5xl',
  square: 'max-w-2xl',
  portrait: 'max-w-[420px]',
};

function VideoCard({ video, onOpen }: { video: Video; onOpen: () => void }) {
  const cover = video.orientation === 'landscape';
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }}
      className="group flex flex-col"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Play ${video.title}`}
        className="card-surface grain relative block aspect-video w-full overflow-hidden p-0 text-left transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift"
      >
        {/* Blurred backdrop (fills the frame for non-landscape thumbnails) */}
        <Image
          src={video.thumbnail}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="scale-110 object-cover opacity-60 blur-xl"
        />
        {/* Foreground thumbnail */}
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className={cn(
            'transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]',
            cover ? 'object-cover' : 'object-contain'
          )}
        />
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_45%,rgba(0,0,0,0.5)_100%)]" />

        {/* Play affordance */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-ivory/25 bg-charcoal-deep/40 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-amber/60 group-hover:bg-amber/20">
            <Play className="h-5 w-5 translate-x-[1px] fill-ivory text-ivory" />
          </span>
        </span>

        {/* Duration */}
        <span className="absolute bottom-3 right-3 rounded-full bg-charcoal-deep/70 px-2.5 py-1 text-xs font-medium text-ivory/90 backdrop-blur-md">
          {video.duration}
        </span>
      </button>

      <div className="px-1 pt-5">
        <h3 className="font-serif text-xl font-semibold text-ivory transition-colors group-hover:text-amber-soft">
          {video.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-light">{video.description}</p>
      </div>
    </motion.article>
  );
}

export function VideoShowcase({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState<Video | null>(null);

  // Lock scroll + close on Escape while the lightbox is open.
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
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onOpen={() => setActive(video)} />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-deep/85 p-4 backdrop-blur-xl sm:p-8"
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
              className={cn('w-full', modalMaxWidth[active.orientation])}
            >
              <div
                className="relative w-full overflow-hidden rounded-2xl border border-ivory/10 bg-black shadow-lift"
                style={{ aspectRatio: `${active.width} / ${active.height}`, maxHeight: '82vh' }}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${active.id}?autoplay=1&title=0&byline=0&portrait=0&dnt=1&badge=0`}
                  title={active.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-serif text-lg font-semibold text-ivory">{active.title}</h3>
                <p className="mt-1 text-sm text-stone-light">{active.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
