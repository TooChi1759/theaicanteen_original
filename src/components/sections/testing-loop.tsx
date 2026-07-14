import { RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { testingLoop } from '@/lib/data/creative-strategy';

export function TestingLoop() {
  return (
    <div>
      <RevealGroup className="grid gap-px overflow-hidden rounded-[1.5rem] border border-ivory/[0.08] bg-ivory/[0.08] sm:grid-cols-2 lg:grid-cols-4">
        {testingLoop.map((step) => (
          <RevealItem key={step.tag}>
            <div className="h-full bg-charcoal-soft p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-soft">
                {step.tag}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-ivory">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-light">{step.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="mt-5 flex items-center gap-4 text-xs tracking-wide text-stone">
        <span className="h-px flex-1 bg-[repeating-linear-gradient(90deg,rgba(212,175,55,0.35)_0px,rgba(212,175,55,0.35)_6px,transparent_6px,transparent_12px)]" />
        loops back into Hypothesis — the work doesn&rsquo;t end at delivery
        <span className="h-px flex-1 bg-[repeating-linear-gradient(90deg,rgba(212,175,55,0.35)_0px,rgba(212,175,55,0.35)_6px,transparent_6px,transparent_12px)]" />
      </div>
    </div>
  );
}
