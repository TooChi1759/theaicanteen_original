'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, CalendarClock } from 'lucide-react';
import { Logo } from '@/components/primitives/logo';
import { navItems, site } from '@/lib/data/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-500 ease-out-expo',
          scrolled
            ? 'border-b border-ivory/[0.07] bg-charcoal/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <nav className="container flex h-[4.5rem] items-center justify-between gap-4">
          <Logo variant="mark" />

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const activePath =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
                      activePath ? 'text-ivory' : 'text-stone-light hover:text-ivory'
                    )}
                  >
                    {activePath && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full border border-ivory/10 bg-ivory/[0.06]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-amber-gradient px-5 py-2.5 text-sm font-semibold text-ivory shadow-[0_10px_30px_-10px_rgba(196,106,45,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex"
            >
              <CalendarClock className="h-4 w-4" />
              Book a Call
            </Link>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory transition-colors hover:bg-ivory/[0.06] lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[4.5rem] z-40 bg-charcoal/95 backdrop-blur-2xl lg:hidden"
          >
            <motion.ul
              className="container flex flex-col gap-1 pt-8"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between border-b border-ivory/[0.07] py-5 font-serif text-2xl text-ivory"
                  >
                    {item.label}
                    <span className="text-amber">→</span>
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="pt-8"
              >
                <Link
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-gradient px-6 py-4 text-base font-semibold text-ivory"
                >
                  <CalendarClock className="h-5 w-5" />
                  Book a Call
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
