import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';
import { Container } from '@/components/primitives/container';
import { ArticleBody } from '@/components/primitives/article-body';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/primitives/reveal';
import { NewsletterCta } from '@/components/sections/newsletter-cta';
import {
  getLearnItem,
  allLearnSlugs,
  tips,
  resources,
  type Tip,
  type Resource,
} from '@/lib/data/learn';

export function generateStaticParams() {
  return allLearnSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getLearnItem(slug);
  if (!item) return { title: 'Not found' };
  return { title: item.title, description: item.description };
}

export default async function LearnArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getLearnItem(slug);
  if (!item) notFound();

  const Icon = item.icon;
  const meta = item.kind === 'tip' ? `${item.readTime} read` : item.type;

  // "Keep reading" — a few sibling items of the same kind.
  const pool: (Tip | Resource)[] = item.kind === 'tip' ? tips : resources;
  const siblings = pool.filter((s) => s.slug !== item.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative overflow-hidden pt-36 pb-10 lg:pt-44">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[36vh] w-[70vw] -translate-x-1/2 rounded-full bg-ember-glow blur-2xl" />
          <Container className="relative">
            <Link
              href="/tips-resources"
              className="inline-flex items-center gap-2 text-sm font-medium text-stone-light transition-colors hover:text-ivory"
            >
              <ArrowLeft className="h-4 w-4" />
              Tips &amp; Resources
            </Link>

            <Reveal className="mt-8 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-amber/20 bg-amber/10 text-amber">
                  <Icon className="h-5 w-5" />
                </span>
                <Badge variant={item.kind === 'tip' ? 'amber' : 'gold'}>
                  {item.kind === 'tip' ? 'Tip' : item.type}
                </Badge>
                <span className="inline-flex items-center gap-1.5 text-xs text-stone">
                  <Clock className="h-3.5 w-3.5" />
                  {meta}
                </span>
              </div>
              <h1 className="mt-6 font-serif text-display font-semibold text-ivory">
                {item.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-stone-light sm:text-xl">
                {item.intro}
              </p>
            </Reveal>
          </Container>
        </header>

        <Container>
          <div className="hairline" />
          <Reveal className="mx-auto max-w-3xl py-14">
            <ArticleBody blocks={item.content} />
          </Reveal>
        </Container>
      </article>

      {/* Keep reading */}
      <section className="section pt-0">
        <Container>
          <h2 className="font-serif text-headline font-semibold text-ivory">Keep reading</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siblings.map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/tips-resources/${s.slug}`}
                  className="card-surface grain group flex h-full flex-col p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-amber/25 hover:shadow-lift"
                >
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-amber/20 bg-amber/10 text-amber">
                    <SIcon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ivory">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-light">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-amber">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <NewsletterCta />
    </>
  );
}
