import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { CreativeStrategyBreakdown } from '@/components/sections/creative-strategy-breakdown';
import { strategyChannels } from '@/lib/data/creative-strategy';

export function CreativeStrategyTeaser() {
  return (
    <section className="section" id="method">
      <Container>
        <SectionHeading
          eyebrow="Before Any Camera Rolls"
          title="Every video is engineered for the platform it has to perform on."
          description="We don’t ship one cut everywhere. Meta rewards a different first second than TikTok; a product page needs different proof than a landing page. This is the reasoning behind the shot — not just the shot."
          action={{ label: 'See the full method', href: '/method' }}
        />

        <div className="mt-10">
          <CreativeStrategyBreakdown channels={strategyChannels.slice(0, 3)} />
        </div>
      </Container>
    </section>
  );
}
