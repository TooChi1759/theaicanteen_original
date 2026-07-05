import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes with conditional logic, de-duplicating conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Deterministic 0..1 pseudo-random value from a string seed.
 * Used to give placeholder media stable, varied gradients without hydration drift.
 */
export function seededUnit(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  // map to 0..1
  return ((h >>> 0) % 100000) / 100000;
}
