import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal } from './reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  action?: { label: string; href: string };
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        centered
          ? 'items-center text-center'
          : 'items-start md:flex-row md:items-end md:justify-between',
        className
      )}
    >
      <Reveal className={cn('max-w-2xl', centered && 'mx-auto')}>
        {eyebrow && (
          <span className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            {eyebrow}
          </span>
        )}
        <h2 className="text-headline font-semibold text-ivory">{title}</h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-stone-light sm:text-lg">
            {description}
          </p>
        )}
      </Reveal>

      {action && (
        <Reveal delay={0.1}>
          <Link
            href={action.href}
            className="group inline-flex items-center gap-2 rounded-full border border-ivory/15 px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:border-amber/50 hover:text-amber"
          >
            {action.label}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      )}
    </div>
  );
}
