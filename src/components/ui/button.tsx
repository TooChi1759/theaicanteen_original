import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-amber-gradient text-ivory shadow-[0_10px_30px_-10px_rgba(196,106,45,0.6)] hover:shadow-glow hover:-translate-y-0.5',
        solid: 'bg-amber text-ivory hover:bg-amber-soft hover:-translate-y-0.5',
        outline:
          'border border-ivory/20 bg-ivory/[0.02] text-ivory backdrop-blur-sm hover:border-ivory/40 hover:bg-ivory/[0.06]',
        ghost: 'text-ivory/80 hover:bg-ivory/[0.06] hover:text-ivory',
        gold: 'bg-gold text-charcoal-deep hover:bg-gold-soft hover:-translate-y-0.5',
        link: 'text-amber underline-offset-4 hover:text-amber-soft hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        default: 'h-11 px-6 text-sm',
        lg: 'h-14 px-8 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = 'Button';
