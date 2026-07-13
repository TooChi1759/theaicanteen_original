import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { HoverMedia } from '@/components/primitives/hover-media';
import { CopyButton } from '@/components/primitives/copy-button';
import { Badge } from '@/components/ui/badge';
import type { Prompt } from '@/lib/data/prompts';

export function PromptCard({ prompt, priority }: { prompt: Prompt; priority?: boolean }) {
  return (
    <article className="card-surface grain group flex flex-col overflow-hidden transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift">
      <Link href={`/prompt-library/${prompt.slug}`} aria-label={`Open ${prompt.title}`}>
        <HoverMedia
          seed={prompt.slug}
          label={prompt.category}
          title={prompt.title}
          kind="image"
          poster={prompt.outputImage}
          aspect={prompt.aspect ?? 'square'}
          rounded="rounded-none"
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="gold">{prompt.category}</Badge>
          <span className="text-[0.68rem] uppercase tracking-wider text-stone">
            {prompt.models[0]}
          </span>
        </div>
        <Link href={`/prompt-library/${prompt.slug}`}>
          <h3 className="mt-4 font-serif text-lg font-semibold text-ivory transition-colors group-hover:text-amber-soft">
            {prompt.title}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-light">{prompt.preview}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <CopyButton text={prompt.fullPrompt} label="Copy prompt" />
          <Link
            href={`/prompt-library/${prompt.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-stone-light transition-colors hover:text-ivory"
          >
            Open
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
