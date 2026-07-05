import Link from 'next/link';
import { Play } from 'lucide-react';
import { HoverMedia } from '@/components/primitives/hover-media';
import type { Film } from '@/lib/data/films';

export function FilmCard({ film, priority }: { film: Film; priority?: boolean }) {
  return (
    <article className="group flex flex-col">
      <Link
        href={film.watchUrl}
        className="card-surface grain block overflow-hidden p-2 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift"
        aria-label={`Watch ${film.title}`}
      >
        <HoverMedia
          seed={film.id}
          label={film.category}
          title={film.title}
          kind="video"
          poster={film.poster}
          videoSrc={film.videoSrc}
          aspect="video"
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </Link>
      <div className="px-1 pt-5">
        <h3 className="font-serif text-xl font-semibold text-ivory transition-colors group-hover:text-amber-soft">
          {film.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-stone-light">{film.description}</p>
        <Link
          href={film.watchUrl}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber transition-colors hover:text-amber-soft"
        >
          <Play className="h-3.5 w-3.5 fill-current" />
          Watch
        </Link>
      </div>
    </article>
  );
}
