import Link from 'next/link';
import { Clock, ArrowUpRight } from 'lucide-react';
import type { Tip } from '@/lib/data/learn';

export function TipCard({ tip }: { tip: Tip }) {
  const Icon = tip.icon;
  return (
    <Link
      href={`/tips-resources/${tip.slug}`}
      className="card-surface grain group flex h-full flex-col p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-amber/25 hover:shadow-lift"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-amber/20 bg-amber/10 text-amber transition-colors group-hover:bg-amber/20">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-serif text-lg font-semibold text-ivory transition-colors group-hover:text-amber-soft">
        {tip.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-light">{tip.description}</p>
      <div className="mt-5 flex items-center justify-between border-t border-ivory/[0.07] pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-stone">
          <Clock className="h-3.5 w-3.5" />
          {tip.readTime} read
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-amber">
          Read
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
