'use client';

import { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { services } from '@/lib/data/services';
import { site } from '@/lib/data/site';
import { cn } from '@/lib/utils';

const inputClass =
  'w-full rounded-2xl border border-ivory/12 bg-charcoal-deep/60 px-4 py-3 text-sm text-ivory placeholder:text-stone focus:border-amber/50 focus:outline-none focus:ring-2 focus:ring-amber/30';

/**
 * Collects a project inquiry and hands it off via `mailto:` — there's no backend yet,
 * so this opens the visitor's email client with the message pre-filled rather than
 * silently "succeeding" with nowhere for the data to go.
 */
export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(services[0]?.title ?? '');
  const [message, setMessage] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const subject = `Project inquiry: ${projectType} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      '',
      message,
    ].join('\n');

    window.location.href = `mailto:${site.email.general}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus('sent');
  };

  if (status === 'sent') {
    return (
      <div
        className={cn(
          'flex flex-col items-start gap-3 rounded-2xl border border-gold/30 bg-gold/10 p-6',
          className
        )}
        role="status"
      >
        <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-soft">
          <Check className="h-4 w-4" />
          Your message is ready
        </span>
        <p className="text-sm leading-relaxed text-stone-light">
          We&rsquo;ve opened your email app with everything pre-filled — just hit send to reach
          us. Didn&rsquo;t open?{' '}
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="font-medium text-gold underline-offset-2 hover:underline"
          >
            Edit and try again
          </button>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={cn('flex flex-col gap-4', className)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@studio.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-project" className="sr-only">
          Project type
        </label>
        <select
          id="contact-project"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className={cn(inputClass, 'appearance-none')}
        >
          {services.map((s) => (
            <option key={s.id} value={s.title} className="bg-charcoal-deep">
              {s.title}
            </option>
          ))}
          <option value="Other" className="bg-charcoal-deep">
            Other
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project…"
          className={cn(inputClass, 'resize-none')}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex h-12 items-center justify-center gap-2 self-start rounded-full bg-amber-gradient px-7 text-sm font-semibold text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
      >
        Send message
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
