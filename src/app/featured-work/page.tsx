import type { Metadata } from 'next';
import { PageHeader } from '@/components/primitives/page-header';
import { Container } from '@/components/primitives/container';
import { VideoShowcase } from '@/components/sections/video-showcase';
import { JsonLd } from '@/components/primitives/json-ld';
import { videoObjectSchema } from '@/lib/structured-data';
import { videos } from '@/lib/data/videos';

export const metadata: Metadata = {
  title: 'Featured Work',
  description:
    'Selected AI work — spec ads, brand films, and story pieces, all built with the same AI production pipeline taught across The AI Canteen.',
  alternates: { canonical: '/featured-work' },
};

export default function FeaturedWorkPage() {
  return (
    <>
      {videos.map((v) => (
        <JsonLd key={v.id} data={videoObjectSchema(v)} />
      ))}
      <PageHeader
        eyebrow="Featured Work"
        title={
          <>
            Cinematic work,
            <br />
            made with AI.
          </>
        }
        description="Spec ads, brand films, and story pieces — every frame directed, generated, and graded in-house. Tap any frame to watch."
      />
      <section className="pb-8">
        <Container>
          <VideoShowcase videos={videos} />
        </Container>
      </section>
    </>
  );
}
