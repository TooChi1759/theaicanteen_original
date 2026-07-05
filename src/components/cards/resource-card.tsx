import { Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Resource } from '@/lib/data/learn';

export function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = resource.icon;
  return (
    <article className="card-surface grain group flex h-full flex-col p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-gold/25 hover:shadow-lift">
      <div className="flex items-start justify-between">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
          <Icon className="h-5 w-5" />
        </div>
        <Badge variant="gold">{resource.type}</Badge>
      </div>
      <h3 className="mt-5 font-serif text-lg font-semibold text-ivory">{resource.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-light">{resource.description}</p>
      <button
        type="button"
        className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-gold transition-colors hover:text-gold-soft"
      >
        <Download className="h-4 w-4" />
        Get resource
      </button>
    </article>
  );
}
