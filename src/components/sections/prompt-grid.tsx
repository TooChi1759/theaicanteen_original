'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PromptCard } from '@/components/cards/prompt-card';
import { prompts, promptCategories } from '@/lib/data/prompts';
import { cn } from '@/lib/utils';

export function PromptGrid() {
  const [active, setActive] = useState<string>('All');
  const filtered =
    active === 'All' ? prompts : prompts.filter((p) => p.category === active);

  return (
    <div>
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
        {promptCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
              active === cat
                ? 'border-transparent bg-amber-gradient text-ivory shadow-[0_8px_24px_-10px_rgba(196,106,45,0.7)]'
                : 'border-ivory/12 text-stone-light hover:border-ivory/30 hover:text-ivory'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((prompt) => (
            <motion.div
              key={prompt.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <PromptCard prompt={prompt} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
