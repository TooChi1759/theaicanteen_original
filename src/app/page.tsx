import { Hero } from '@/components/sections/hero';
import { FeaturedMonth } from '@/components/sections/featured-month';
import { FeaturedVideos } from '@/components/sections/featured-videos';
import { FeaturedTikToks } from '@/components/sections/featured-tiktoks';
import { PromptLibraryPreview } from '@/components/sections/prompt-library-preview';
import { GalleryPreview } from '@/components/sections/gallery-preview';
import { TipsPreview } from '@/components/sections/tips-preview';
import { CreativeStack } from '@/components/sections/creative-stack';
import { WorkWithUsCta } from '@/components/sections/work-with-us-cta';
import { NewsletterCta } from '@/components/sections/newsletter-cta';
import { Container } from '@/components/primitives/container';

function Divider() {
  return (
    <Container>
      <div className="hairline" />
    </Container>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedMonth />
      <Divider />
      <FeaturedVideos limit={6} action={{ label: 'View all work', href: '/featured-work' }} />
      <FeaturedTikToks action={{ label: 'See all on TikTok', href: '/tiktok' }} />
      <Divider />
      <PromptLibraryPreview />
      <GalleryPreview />
      <Divider />
      <TipsPreview />
      <CreativeStack />
      <WorkWithUsCta />
      <NewsletterCta />
    </>
  );
}
