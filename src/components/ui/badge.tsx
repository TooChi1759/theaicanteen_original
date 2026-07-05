import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors',
  {
    variants: {
      variant: {
        default: 'border-ivory/12 bg-ivory/[0.04] text-stone-light',
        amber: 'border-amber/30 bg-amber/10 text-amber-soft',
        gold: 'border-gold/30 bg-gold/10 text-gold-soft',
        solid: 'border-transparent bg-amber text-ivory',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
