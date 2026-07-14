/**
 * Performance creative strategy — the reasoning applied to a video before it's
 * ever produced. Powers /method and its homepage teaser.
 */

export type StrategyChannel = {
  id: string;
  label: string;
  psychologyLabel: string;
  quote: string;
  foot: string;
  whatWeTest: string[];
  metrics: string[];
};

export const strategyChannels: StrategyChannel[] = [
  {
    id: 'meta',
    label: 'Meta Ads',
    psychologyLabel: 'Scroll-interruption & trust cues',
    quote:
      'A Feed or Reels ad has under a second to earn a thumb-stop before it becomes background noise in someone’s scroll.',
    foot: 'We build against scroll-blindness first — a pattern interrupt in the opening frame, and a promise stated before the logo appears.',
    whatWeTest: [
      'Hook variants in the first 1–2 seconds (static vs. motion open)',
      'Thumbnail-stop framing for feed placement',
      'Text-overlay claim vs. no overlay',
      'UGC-style cut vs. polished brand cut, same offer',
    ],
    metrics: ['Hook rate (3s)', 'Thumb-stop ratio', 'CTR', 'CPA', 'ROAS'],
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    psychologyLabel: 'Authenticity bias over polish',
    quote:
      'On TikTok, the audience trusts "one of us" more than a brand talking at them — polish can read as an ad and get skipped.',
    foot: 'We test for native pacing and sound-on hooks that mirror what’s already winning in-feed, not a shrunk-down TV ad.',
    whatWeTest: [
      'Native vs. studio-polished cut',
      'Sound-on hook vs. silent caption-led hook',
      'Trend-aligned pacing vs. brand pacing',
      'Caption placement and timing',
    ],
    metrics: ['Average watch time', 'Completion rate', 'Shares', 'Comment sentiment'],
  },
  {
    id: 'website',
    label: 'Website',
    psychologyLabel: 'Cognitive fluency over cleverness',
    quote:
      'On your own site, a visitor already chose to be there — the job shifts from stopping a scroll to earning trust in three seconds.',
    foot: 'We test how much motion, and how much clarity, a first-time visitor needs before they believe the brand is real.',
    whatWeTest: [
      'Motion hero vs. static hero',
      'Value-proposition framing above the fold',
      'Contrast and pacing against the rest of the page',
    ],
    metrics: ['Bounce rate', 'Scroll depth', 'Time-to-first-click'],
  },
  {
    id: 'landing-pages',
    label: 'Landing Pages',
    psychologyLabel: 'Message match & decision fatigue',
    quote:
      'If the ad promised one thing and the landing page opens with something else, trust breaks before the visitor has read a word.',
    foot: 'We test whether the page’s opening asset repeats the ad’s exact promise, and how fast it removes reasons to hesitate.',
    whatWeTest: [
      'Hero video vs. hero image, matched to the referring ad',
      'Proof placement (reviews, results) relative to the fold',
      'CTA copy and urgency framing',
    ],
    metrics: ['CVR', 'Form completion rate', 'Drop-off point'],
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    psychologyLabel: 'Reducing purchase anxiety',
    quote:
      'On a product page, the creative’s job isn’t to excite — it’s to remove the last doubt between "interested" and "in cart."',
    foot: 'We test whether a demonstration, a fit clip, or a review-style cut closes that gap fastest for a given product.',
    whatWeTest: [
      'Product-in-context vs. studio shot',
      'Size, fit, or use demonstration',
      'Review-style UGC vs. brand-produced clip',
    ],
    metrics: ['Add-to-cart rate', 'Conversion rate', 'Return-rate correlation'],
  },
  {
    id: 'ugc',
    label: 'UGC',
    psychologyLabel: 'Parasocial trust over aspiration',
    quote:
      'People don’t trust an ad. They trust someone who looks like they’d give the same opinion with the camera off.',
    foot: 'We test creator archetype and delivery style against a brand-produced control to see which one the platform rewards.',
    whatWeTest: [
      'Creator archetype — peer, expert, or everyday user',
      'Scripted vs. unscripted delivery',
      'Testimonial framing vs. demonstration framing',
    ],
    metrics: ['CTR', 'Engagement rate', 'Lift vs. brand-produced control'],
  },
];

export type LoopStep = {
  tag: string;
  title: string;
  body: string;
};

export const testingLoop: LoopStep[] = [
  {
    tag: 'Hypothesis',
    title: 'Name the lever',
    body: 'Every variant tests one psychological lever — urgency, proof, novelty — not a random remix of the same idea.',
  },
  {
    tag: 'Variants',
    title: 'Build the set',
    body: 'A small, deliberate spread of cuts built to isolate that one lever from everything else in the frame.',
  },
  {
    tag: 'Signal',
    title: 'Read the platform',
    body: 'Hook rate, CTR, CVR, ROAS — whichever metric is native to where the asset actually lives.',
  },
  {
    tag: 'Compound',
    title: 'Fold it back in',
    body: 'The winning lever becomes house knowledge, carried into the next channel and the next brief.',
  },
];
