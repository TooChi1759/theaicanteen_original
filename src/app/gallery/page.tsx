import type { Metadata } from 'next';
import { PageHeader } from '@/components/primitives/page-header';
import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { CollectionTile } from '@/components/cards/collection-tile';
import { RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { NewsletterCta } from '@/components/sections/newsletter-cta';
import { characterCategories, photographyCollections } from '@/lib/data/gallery';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'The AI Character Gallery and AI Photography collections — realistic, fashion, luxury, food, architecture, and more.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Enter the archive."
        description="A curated collection of AI characters and photography. Every photograph links to the prompt that made it."
      />

      {/* Characters */}
      <section className="section pt-4" id="characters">
        <Container>
          <SectionHeading
            eyebrow="AI Character Gallery"
            title="Characters with range"
            description="From photoreal to Pixar-inspired — personas built for consistency across a whole campaign."
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {characterCategories.map((c, i) => (
              <RevealItem key={c.id}>
                <CollectionTile
                  collection={c}
                  href="/prompt-library"
                  aspect="square"
                  priority={i < 4}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Photography */}
      <section className="section pt-0" id="photography">
        <Container>
          <SectionHeading
            eyebrow="AI Photography"
            title="Photography collections"
            description="Studio-grade imagery across nine disciplines. Tap any collection to open its prompt page."
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photographyCollections.map((c) => (
              <RevealItem key={c.id}>
                <CollectionTile
                  collection={c}
                  href={c.promptSlug ? `/prompt-library/${c.promptSlug}` : '/prompt-library'}
                  poster={c.promptSlug ? `/prompts/${c.promptSlug}.webp` : undefined}
                  aspect="portrait"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <NewsletterCta />
    </>
  );
}
