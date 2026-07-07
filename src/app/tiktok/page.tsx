import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { PageHeader } from '@/components/primitives/page-header';
import { Container } from '@/components/primitives/container';
import { TikTokShowcase } from '@/components/sections/tiktok-showcase';
import { TikTokIcon } from '@/components/primitives/icons';
import { tiktoks } from '@/lib/data/tiktoks';
import { site } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'TikTok Showcase',
  description:
    'The @theaicanteen Anita series — serial AI animation, straight from TikTok. Watch every episode on-site.',
};

export default function TikTokPage() {
  return (
    <>
      <PageHeader
        eyebrow="TikTok Showcase"
        title="Anita, on TikTok."
        description="A serial AI animation following Anita — pregnancy, labor, and everything after. Tap any clip to watch it right here."
      >
        <a
          href={site.socials.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-12 items-center gap-2 rounded-full border border-ivory/20 px-6 text-sm font-semibold text-ivory transition-all duration-300 hover:border-amber/50 hover:bg-ivory/[0.04]"
        >
          <TikTokIcon className="h-4 w-4" />
          Follow @theaicanteen
          <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-opacity group-hover:opacity-100" />
        </a>
      </PageHeader>

      <section className="pb-8">
        <Container>
          <TikTokShowcase items={tiktoks} />
        </Container>
      </section>
    </>
  );
}
