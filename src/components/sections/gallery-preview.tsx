import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { CollectionTile } from '@/components/cards/collection-tile';
import { photographyCollections } from '@/lib/data/gallery';

export function GalleryPreview({ limit = 6 }: { limit?: number }) {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="A curated visual archive"
          description="AI characters and photography collections — studio portraits, fashion, food, architecture, and more."
          action={{ label: 'Enter the gallery', href: '/gallery' }}
        />

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photographyCollections.slice(0, limit).map((c, i) => (
            <RevealItem key={c.id}>
              <CollectionTile
                collection={c}
                href={c.promptSlug ? `/prompt-library/${c.promptSlug}` : '/gallery'}
                poster={c.promptSlug ? `/prompts/${c.promptSlug}.webp` : undefined}
                priority={i < 3}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
