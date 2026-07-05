import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { TipCard } from '@/components/cards/tip-card';
import { tips } from '@/lib/data/learn';

export function TipsPreview({ limit = 6 }: { limit?: number }) {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Tips & Resources"
          title="Learn the craft"
          description="Practical, no-fluff lessons on the skills that separate ordinary output from cinematic work."
          action={{ label: 'All tips & resources', href: '/tips-resources' }}
        />

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tips.slice(0, limit).map((tip) => (
            <RevealItem key={tip.id}>
              <TipCard tip={tip} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
