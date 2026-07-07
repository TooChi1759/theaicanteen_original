import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { PromptCard } from '@/components/cards/prompt-card';
import { prompts } from '@/lib/data/prompts';

export function PromptLibraryPreview({ limit = 3 }: { limit?: number }) {
  return (
    <section className="section relative overflow-hidden" id="prompt-library">
      <Container>
        <SectionHeading
          eyebrow="Prompt Library"
          title="Steal our recipes"
          description="Every image below is AI-generated — a transparent teardown of the exact prompt, model, and settings behind it. Copy, remix, and make it yours."
          action={{ label: 'Browse all prompts', href: '/prompt-library' }}
        />

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prompts.slice(0, limit).map((prompt, i) => (
            <RevealItem key={prompt.slug}>
              <PromptCard prompt={prompt} priority={i < 3} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
