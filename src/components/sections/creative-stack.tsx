import { Container } from '@/components/primitives/container';
import { SectionHeading } from '@/components/primitives/section-heading';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/reveal';
import { stack } from '@/lib/data/stack';

export function CreativeStack() {
  return (
    <section className="section relative overflow-hidden" id="creative-stack">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-ivory/10 to-transparent" />
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Creative Stack"
          title="The tools behind the work"
          description="A working toolkit refined over hundreds of projects — with the exact job each tool does best."
        />

        <div className="mt-16 space-y-14">
          {stack.map((group) => (
            <div key={group.id}>
              <Reveal className="flex flex-col gap-1 border-b border-ivory/[0.07] pb-5 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="font-serif text-2xl font-semibold text-ivory">{group.category}</h3>
                <p className="max-w-md text-sm text-stone-light sm:text-right">{group.blurb}</p>
              </Reveal>

              <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.tools.map((tool) => (
                  <RevealItem key={tool.name}>
                    <div className="card-surface group h-full p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-amber/25">
                      <div className="flex items-center justify-between">
                        <h4 className="flex items-center gap-2.5 font-serif text-lg font-semibold text-ivory">
                          <span className="h-2 w-2 rounded-full bg-amber-gradient" />
                          {tool.name}
                        </h4>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-stone-light">
                        {tool.description}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/[0.07] px-3 py-1.5 text-xs font-medium text-gold-soft">
                        Best for: {tool.bestFor}
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
