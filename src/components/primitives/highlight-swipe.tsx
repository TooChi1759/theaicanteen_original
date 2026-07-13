import { cn } from '@/lib/utils';

const fills: Record<'amber' | 'gold', string> = {
  amber: '#C46A2D',
  gold: '#D4AF37',
};

/**
 * A hand-drawn marker swipe behind a word — like circling today's special on a menu,
 * rather than another gradient-fill text treatment. Reserved for rare, high-impact
 * moments; loses its power if used everywhere.
 */
export function HighlightSwipe({
  children,
  color = 'amber',
  className,
}: {
  children: React.ReactNode;
  color?: 'amber' | 'gold';
  className?: string;
}) {
  return (
    <span className={cn('relative inline-block px-2 py-0.5', className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 36"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      >
        <path
          d="M-3,27 C15,32 35,23 50,27 C65,31 82,22 103,27 L102,6 C85,11 65,2 48,7 C32,12 12,3 -3,8 Z"
          fill={fills[color]}
          fillOpacity="0.28"
        />
      </svg>
      {children}
    </span>
  );
}
