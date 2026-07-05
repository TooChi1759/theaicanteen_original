'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CopyButton({
  text,
  label = 'Copy prompt',
  className,
  variant = 'chip',
}: {
  text: string;
  label?: string;
  className?: string;
  variant?: 'chip' | 'solid';
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className={cn(
        'inline-flex items-center gap-2 rounded-full text-sm font-medium transition-all duration-300',
        variant === 'chip'
          ? 'border border-ivory/15 px-4 py-2 text-ivory hover:border-amber/50 hover:text-amber'
          : 'bg-amber-gradient px-5 py-2.5 text-ivory hover:-translate-y-0.5 hover:shadow-glow',
        className
      )}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? 'Copied' : label}
    </button>
  );
}
