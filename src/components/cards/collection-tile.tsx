import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { HoverMedia, type HoverMediaProps } from '@/components/primitives/hover-media';
import type { GalleryCollection } from '@/lib/data/gallery';

export function CollectionTile({
  collection,
  href,
  aspect = 'portrait',
  priority,
  poster,
}: {
  collection: GalleryCollection;
  href: string;
  aspect?: HoverMediaProps['aspect'];
  priority?: boolean;
  poster?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-3xl border border-ivory/[0.08] shadow-card transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift"
    >
      <HoverMedia
        seed={`collection-${collection.id}`}
        title={collection.name}
        kind="image"
        poster={poster}
        aspect={aspect}
        rounded="rounded-3xl"
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal-deep/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3 className="font-serif text-xl font-semibold text-ivory">{collection.name}</h3>
            <p className="mt-1 max-h-0 overflow-hidden text-sm text-stone-light opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100">
              {collection.description}
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-ivory/15 bg-charcoal-deep/50 px-2.5 py-1 text-xs text-ivory/80 backdrop-blur-md">
            {collection.count}
          </span>
        </div>
      </div>
      <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 bg-charcoal-deep/40 text-ivory opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
