import type { Metadata } from 'next';
import { PageHeader } from '@/components/primitives/page-header';
import { Container } from '@/components/primitives/container';
import { PromptGrid } from '@/components/sections/prompt-grid';
import { NewsletterCta } from '@/components/sections/newsletter-cta';

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
        description="Browse by category, copy the exact prompt, and see the models behind each result. New recipes added regularly."
      />
      <section className="pb-24">
        <Container>
          <PromptGrid />
        </Container>
      </section>
      <NewsletterCta />
    </>
  );
}
