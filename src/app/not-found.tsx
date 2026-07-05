import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/primitives/container';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[40vh] w-[60vw] -translate-x-1/2 rounded-full bg-ember-glow blur-3xl" />
      <Container className="relative text-center">
        <p className="eyebrow justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          404
        </p>
        <h1 className="mt-6 font-serif text-display-lg font-semibold text-gradient-amber">
          Off the menu.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-stone-light">
          This page isn&rsquo;t being served today. Let&rsquo;s get you back to something delicious.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex h-14 items-center gap-2 rounded-full bg-amber-gradient px-8 text-base font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </Container>
    </section>
  );
}
