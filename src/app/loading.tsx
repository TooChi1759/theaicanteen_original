import { Container } from '@/components/primitives/container';

function Shimmer({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-charcoal-soft/60 ${className ?? ''}`}>
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-ivory/[0.06] to-transparent" />
    </div>
  );
}

export default function Loading() {
  return (
    <div className="pt-36 lg:pt-44" aria-busy="true" aria-label="Loading">
      <Container>
        <Shimmer className="h-5 w-40" />
        <Shimmer className="mt-6 h-14 w-3/4 max-w-2xl" />
        <Shimmer className="mt-4 h-5 w-2/3 max-w-xl" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card-surface p-2">
              <Shimmer className="aspect-video w-full" />
              <div className="p-4">
                <Shimmer className="h-5 w-1/2" />
                <Shimmer className="mt-3 h-4 w-full" />
                <Shimmer className="mt-2 h-4 w-4/5" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
