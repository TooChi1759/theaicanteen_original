'use client';

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

const ease = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
};

/** Fades + lifts children into view once, respecting reduced-motion via Framer. */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const MotionTag = motion[as] as React.ElementType;
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay } },
      }}
    >
      {children}
    </MotionTag>
  );
}

/** Staggered container — pair with <RevealItem> children. */
export function RevealGroup({
  children,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'ul';
}) {
  const MotionTag = motion[as] as React.ElementType;
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerParent}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article';
}) {
  const MotionTag = motion[as] as React.ElementType;
  return (
    <MotionTag className={cn(className)} variants={fadeUp}>
      {children}
    </MotionTag>
  );
}
