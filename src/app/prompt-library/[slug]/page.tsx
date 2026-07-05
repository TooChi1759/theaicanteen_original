import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Cpu, Ban } from 'lucide-react';
import { Container } from '@/components/primitives/container';
import { HoverMedia } from '@/components/primitives/hover-media';
import { CopyButton } from '@/components/primitives/copy-button';
import { PromptCard } from '@/components/cards/prompt-card';
import { Badge } from '@/components/ui/badge';
import { RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { prompts, getPrompt } from '@/lib/data/prompts';

export function generateStaticParams() {
  return prompts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prompt = getPrompt(slug);
  if (!prompt) return { title: 'Prompt not found' };
  return {
    title: prompt.title,
    description: prompt.preview,
  };
}

export default async function PromptDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prompt = getPrompt(slug);
  if (!prompt) notFound();

  const related = prompt.related
    .map((s) => getPrompt(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <section className="pt-32 lg:pt-40">
        <Container>
          <Link
            href="/prompt-library"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-light transition-colors hover:text-ivory"
          >
            <ArrowLeft className="h-4 w-4" />
            Prompt Library
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
            {/* Output */}
            <div className="card-surface grain overflow-hidden p-2 lg:sticky lg:top-28 lg:self-start">
              <HoverMedia
                seed={prompt.slug}
                label={prompt.category}
                title={prompt.title}
                kind="image"
                poster={prompt.outputImage}
                aspect={prompt.aspect ?? 'square'}
                rounded="rounded-[1.25rem]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Details */}
            <div>
              <Badge variant="amber">{prompt.category}</Badge>
              <h1 className="mt-4 font-serif text-display font-semibold text-ivory">
                {prompt.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-stone-light">{prompt.preview}</p>

              {/* Full prompt */}
              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone">
                    Full Prompt
                  </h2>
                  <CopyButton text={prompt.fullPrompt} label="Copy prompt" />
                </div>
                <div className="card-surface p-5">
                  <p className="font-serif text-base leading-relaxed text-ivory/90">
                    {prompt.fullPrompt}
                  </p>
                </div>
              </div>

              {/* Models */}
              <div className="mt-8">
                <h2 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone">
                  <Cpu className="h-3.5 w-3.5" />
                  AI Models Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {prompt.models.map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-ivory/12 bg-ivory/[0.03] px-4 py-2 text-sm text-ivory"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Negative prompt */}
              {prompt.negativePrompt && (
                <div className="mt-8">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone">
                      <Ban className="h-3.5 w-3.5" />
                      Negative Prompt
                    </h2>
                    <CopyButton text={prompt.negativePrompt} label="Copy" />
                  </div>
                  <div className="rounded-2xl border border-ivory/[0.08] bg-charcoal-deep/50 p-5">
                    <p className="text-sm leading-relaxed text-stone-light">
                      {prompt.negativePrompt}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section">
          <Container>
            <h2 className="font-serif text-headline font-semibold text-ivory">Related prompts</h2>
            <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <RevealItem key={p.slug}>
                  <PromptCard prompt={p} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}
    </>
  );
}
