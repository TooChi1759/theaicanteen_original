import { Hero } from '@/components/sections/hero';
import { FeaturedMonth } from '@/components/sections/featured-month';
import { HomeFeaturedWork } from '@/components/sections/home-featured-work';
import { PromptLibraryPreview } from '@/components/sections/prompt-library-preview';
import { WorkWithUsCta } from '@/components/sections/work-with-us-cta';
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
      <HomeFeaturedWork />
      <Divider />
      <PromptLibraryPreview />
      <WorkWithUsCta />
    </>
  );
}
