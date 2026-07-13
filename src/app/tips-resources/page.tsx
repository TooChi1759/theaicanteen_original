import type { Metadata } from 'next';
import { PageHeader } from '@/components/primitives/page-header';
import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { TipCard } from '@/components/cards/tip-card';
import { ResourceCard } from '@/components/cards/resource-card';
import { tips, resources } from '@/lib/data/learn';

export const metadata: Metadata = {
  title: 'Tips & Resources',
  description:
    'Educational tips on prompt writing, lighting, camera movement, and color grading — plus downloadable creative resources.',
  alternates: { canonical: '/tips-resources' },
};

export default function TipsResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tips & Resources"
        title="Come hungry, leave smarter."
        description="Everything we&rsquo;ve learned about making cinematic work with AI — distilled into practical lessons and ready-to-use resources."
      />

      {/* Tips */}
      <section className="section pt-4">
        <Container>
          <SectionHeading
            eyebrow="Educational"
            title="Tips"
            description="Short, practical lessons on the craft behind standout AI work."
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip) => (
              <RevealItem key={tip.id}>
                <TipCard tip={tip} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Creative Resources */}
      <section className="section pt-0">
        <Container>
          <SectionHeading
            eyebrow="Creative Resources"
            title="Toolkits & templates"
            description="Downloadable frameworks and references to accelerate your workflow."
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <RevealItem key={r.id}>
                <ResourceCard resource={r} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
