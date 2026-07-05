import type { Metadata } from 'next';
import { PageHeader } from '@/components/primitives/page-header';
import { FeaturedFilms } from '@/components/sections/featured-films';
import { Storytelling } from '@/components/sections/storytelling';
import { NewsletterCta } from '@/components/sections/newsletter-cta';

export const metadata: Metadata = {
  title: 'Featured Work',
  description:
    'Featured AI films and serial storytelling — commercials, fashion, travel, short films, and the Anita stories.',
};

export default function FeaturedWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Featured Work"
        title={
          <>
            Cinematic work,
            <br />
            made with AI.
          </>
        }
        description="A gallery of films and stories — every frame directed, generated, and graded in-house. Hover any card for a preview."
      />
      <FeaturedFilms showHeading />
      <Storytelling />
      <NewsletterCta />
    </>
  );
}
