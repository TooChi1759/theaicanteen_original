import type { Metadata } from 'next';
import { PageHeader } from '@/components/primitives/page-header';
import { Container } from '@/components/primitives/container';
import { PromptGrid } from '@/components/sections/prompt-grid';

export const metadata: Metadata = {
  title: 'Prompt Library',
  description:
    'Copy-ready prompts behind our best AI images — with the exact models, negative prompts, and related recipes.',
};

export default function PromptLibraryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Prompt Library"
        title="Every look, fully documented."
        description="Every image here is AI-generated — hands-on demonstrations of prompt engineering, not client deliverables. Browse by category, copy the exact prompt, and see the models behind each result."
      />
      <section className="pb-24">
        <Container>
          <PromptGrid />
        </Container>
      </section>
    </>
  );
}
