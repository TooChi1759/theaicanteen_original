import { Check, Lightbulb } from 'lucide-react';
import { CopyButton } from './copy-button';
import type { Block } from '@/lib/data/learn';

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h':
            return (
              <h2
                key={i}
                className="pt-4 font-serif text-2xl font-semibold text-ivory sm:text-[1.75rem]"
              >
                {block.text}
              </h2>
            );
          case 'p':
            return (
              <p key={i} className="text-base leading-relaxed text-stone-light sm:text-lg">
                {block.text}
              </p>
            );
          case 'list':
            return (
              <ul key={i} className="space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base leading-relaxed text-stone-light">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-amber" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case 'steps':
            return (
              <ol key={i} className="space-y-4">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber/30 bg-amber/10 font-serif text-sm font-semibold text-amber">
                      {j + 1}
                    </span>
                    <span className="pt-1 text-base leading-relaxed text-stone-light">{item}</span>
                  </li>
                ))}
              </ol>
            );
          case 'callout':
            return (
              <div
                key={i}
                className="flex gap-3 rounded-2xl border border-gold/25 bg-gold/[0.06] p-5"
              >
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-base leading-relaxed text-ivory/90">{block.text}</p>
              </div>
            );
          case 'example':
            return (
              <div key={i} className="card-surface p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
                    {block.label}
                  </span>
                  <CopyButton text={block.prompt} label="Copy" />
                </div>
                <p className="font-serif text-base leading-relaxed text-ivory/90">{block.prompt}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
