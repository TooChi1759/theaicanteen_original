import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { TikTokShowcase } from './tiktok-showcase';
import { tiktoks } from '@/lib/data/tiktoks';

export function FeaturedTikToks({
  limit,
  eyebrow = 'On TikTok',
  title = 'The Anita series',
  description = 'Our serial AI animation, straight from TikTok — follow Anita’s story episode by episode. Tap any clip to watch.',
  action,
}: {
  limit?: number;
  eyebrow?: string;
  title?: string;
  description?: string;
  action?: { label: string; href: string };
}) {
  const list = limit ? tiktoks.slice(0, limit) : tiktoks;

  return (
    <section className="section" id="tiktok">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          action={action}
        />
        <div className="mt-12">
          <TikTokShowcase items={list} />
        </div>
      </Container>
    </section>
  );
}
