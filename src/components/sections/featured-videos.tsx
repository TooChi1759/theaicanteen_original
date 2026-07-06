import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { VideoShowcase } from './video-showcase';
import { videos } from '@/lib/data/videos';

export function FeaturedVideos({
  limit,
  eyebrow = 'Featured Work',
  title = 'Selected work',
  description = 'Spec ads, brand films, and story pieces — all built with the same AI production pipeline taught across this site. Tap any frame to watch.',
  action,
}: {
  limit?: number;
  eyebrow?: string;
  title?: string;
  description?: string;
  action?: { label: string; href: string };
}) {
  const list = limit ? videos.slice(0, limit) : videos;

  return (
    <section className="section" id="featured-work">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          action={action}
        />
        <div className="mt-12">
          <VideoShowcase videos={list} />
        </div>
      </Container>
    </section>
  );
}
