import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { FilmCard } from '@/components/cards/film-card';
import { featuredFilms } from '@/lib/data/films';

export function FeaturedFilms({
  limit,
  showHeading = true,
  action,
}: {
  limit?: number;
  showHeading?: boolean;
  action?: { label: string; href: string };
}) {
  const films = limit ? featuredFilms.slice(0, limit) : featuredFilms;

  return (
    <section className="section" id="featured-films">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Featured AI Films"
            title="Films made frame by frame"
            description="Commercials, fashion, travel, and short films — each one directed, generated, and graded in-house."
            action={action}
          />
        )}

        <RevealGroup className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {films.map((film, i) => (
            <RevealItem key={film.id}>
              <FilmCard film={film} priority={i < 4} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
