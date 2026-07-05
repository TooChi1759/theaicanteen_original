'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Newsletter capture. No backend wired yet — replace `onSubmit` with a real
 * endpoint / CMS action. Structure and states are production-ready.
 */
export function NewsletterForm({
  variant = 'stacked',
  className,
}: {
  variant?: 'stacked' | 'inline';
  className?: string;
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'done'>('idle');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: POST to newsletter provider (Beehiiv/Mailchimp/ConvertKit).
    setStatus('done');
  };

  if (status === 'done') {
    return (
      <div
        className={cn(
          'flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-5 py-3 text-sm text-gold-soft',
          className
        )}
        role="status"
      >
        <Check className="h-4 w-4" />
        You&rsquo;re on the list. Watch your inbox.
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className={cn(
        'group relative flex w-full items-center',
        variant === 'stacked' ? 'flex-col gap-3 sm:flex-row' : '',
        className
      )}
    >
      <label htmlFor={`nl-${variant}`} className="sr-only">
        Email address
      </label>
      <input
        id={`nl-${variant}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@studio.com"
        className="h-12 w-full flex-1 rounded-full border border-ivory/12 bg-charcoal-deep/60 px-5 text-sm text-ivory placeholder:text-stone focus:border-amber/50 focus:outline-none focus:ring-2 focus:ring-amber/30"
      />
      <button
        type="submit"
        className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-amber-gradient px-6 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
      >
        Subscribe
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
