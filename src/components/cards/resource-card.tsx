import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Resource } from '@/lib/data/learn';

export function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = resource.icon;
  return (
    <Link
      href={`/tips-resources/${resource.slug}`}
      className="card-surface grain group flex h-full flex-col p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-gold/25 hover:shadow-lift"
    >
      <div className="flex items-start justify-between">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
          <Icon className="h-5 w-5" />
        </div>
        <Badge variant="gold">{resource.type}</Badge>
      </div>
      <h3 className="mt-5 font-serif text-lg font-semibold text-ivory transition-colors group-hover:text-gold-soft">
        {resource.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-light">{resource.description}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold">
        Read guide
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
