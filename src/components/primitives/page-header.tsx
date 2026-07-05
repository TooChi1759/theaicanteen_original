import { Container } from './container';
import { Reveal } from './reveal';

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden pt-36 pb-14 lg:pt-44 lg:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40vh] w-[70vw] -translate-x-1/2 rounded-full bg-ember-glow blur-2xl" />
        <div
          className="absolute inset-0 opacity-30 mask-fade-b"
          style={{
            backgroundImage:
              'linear-gradient(rgba(248,245,240,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(248,245,240,0.03) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>
      <Container>
        <Reveal className="max-w-3xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            {eyebrow}
          </span>
          <h1 className="mt-5 font-serif text-display font-semibold text-ivory">{title}</h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-light">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </header>
  );
}
