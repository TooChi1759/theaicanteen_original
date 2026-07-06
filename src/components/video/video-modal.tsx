'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Video } from '@/lib/data/videos';
import { cn } from '@/lib/utils';

const ease = [0.16, 1, 0.3, 1] as const;

const modalMaxWidth: Record<Video['orientation'], string> = {
  landscape: 'max-w-5xl',
  square: 'max-w-2xl',
  portrait: 'max-w-[420px]',
};

type VideoModalContextValue = {
  openVideo: (video: Video) => void;
  closeVideo: () => void;
};

const VideoModalContext = createContext<VideoModalContextValue | null>(null);

export function useVideoModal() {
  const ctx = useContext(VideoModalContext);
  if (!ctx) throw new Error('useVideoModal must be used within a VideoModalProvider');
  return ctx;
}

/**
 * App-wide Vimeo lightbox. Any client component can call `useVideoModal().openVideo(video)`
 * to play a video at its true aspect ratio. Escape / backdrop / the close button dismiss it.
 */
export function VideoModalProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<Video | null>(null);

  const openVideo = useCallback((video: Video) => setActive(video), []);
  const closeVideo = useCallback(() => setActive(null), []);

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
    <VideoModalContext.Provider value={{ openVideo, closeVideo }}>
      {children}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeVideo}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-deep/85 p-4 backdrop-blur-xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              type="button"
              onClick={closeVideo}
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
    </VideoModalContext.Provider>
  );
}
