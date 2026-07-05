import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { site } from '@/lib/data/site';

/**
 * Brand logo. Uses the locked official mark (never redrawn):
 * - `mark`  → the icon tile (cropped from the official logo) on an ivory plaque, paired with the wordmark. For the navbar.
 * - `full`  → the complete official lockup on an ivory plaque. For the footer.
 */
export function Logo({
  variant = 'mark',
  className,
  href = '/',
}: {
  variant?: 'mark' | 'full';
  className?: string;
  href?: string | null;
}) {
  const content =
    variant === 'full' ? (
      <span className="logo-plaque grain relative inline-flex overflow-hidden rounded-2xl px-5 py-4">
        <Image
          src="/brand/logo-lockup.png"
          alt={`${site.name} — ${site.tagline}`}
          width={861}
          height={578}
          className="h-24 w-auto"
          priority
        />
      </span>
    ) : (
      <span className="inline-flex items-center gap-3">
        <span className="logo-plaque grain relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl">
          <Image
            src="/brand/logo-mark.png"
            alt=""
            aria-hidden
            width={420}
            height={363}
            className="h-7 w-auto"
            priority
          />
        </span>
        <span className="flex flex-col leading-none">
          <span className="text-[0.95rem] font-bold uppercase tracking-[0.16em] text-ivory">
            The <span className="text-amber">AI</span> Canteen
          </span>
          <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-stone">
            {site.tagline}
          </span>
        </span>
      </span>
    );

  if (href === null) {
    return <span className={cn('inline-flex', className)}>{content}</span>;
  }

  return (
    <Link
      href={href}
      aria-label={`${site.name} home`}
      className={cn('inline-flex rounded-2xl transition-opacity hover:opacity-90', className)}
    >
      {content}
    </Link>
  );
}
