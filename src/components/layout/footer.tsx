import Link from 'next/link';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/primitives/logo';
import { TikTokIcon } from '@/components/primitives/icons';
import { footerNav, site } from '@/lib/data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 overflow-hidden border-t border-ivory/[0.07] bg-charcoal-deep">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-ember-glow blur-2xl" />

      <div className="container relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Logo variant="full" href="/" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone-light">
              A premium creative platform for AI-powered storytelling, photography, and prompt
              engineering.
            </p>
            <a
              href={site.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-ivory/12 bg-ivory/[0.02] px-4 py-2.5 text-sm text-stone-light transition-colors hover:border-amber/40 hover:text-ivory"
            >
              <TikTokIcon className="h-4 w-4 text-amber" />
              13K+ followers in 3 months — follow the journey
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </div>

          {/* Quick links */}
          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-stone">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => {
                  const external = link.href.startsWith('http');
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="group inline-flex items-center gap-1.5 text-sm text-stone-light transition-colors hover:text-ivory"
                      >
                        {link.label}
                        {external && (
                          <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-stone">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email.general}`}
                  className="inline-flex items-center gap-2 text-stone-light transition-colors hover:text-ivory"
                >
                  <Mail className="h-4 w-4 text-amber" />
                  {site.email.general}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email.partnerships}`}
                  className="inline-flex items-center gap-2 text-stone-light transition-colors hover:text-ivory"
                >
                  <Mail className="h-4 w-4 text-amber" />
                  {site.email.partnerships}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The AI Canteen on TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/12 text-ivory/80 transition-all hover:border-amber/50 hover:text-amber"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.ceo} on LinkedIn`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/12 text-ivory/80 transition-all hover:border-amber/50 hover:text-amber"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/[0.07] pt-8 text-sm text-stone sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-serif italic text-stone-light">{site.tagline}.</p>
        </div>
      </div>
    </footer>
  );
}
