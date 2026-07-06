/** Creative Stack — the tools Chioma uses, grouped, each with its current model and best-use case. */

export type Tool = {
  name: string;
  description: string;
  bestFor: string;
  /** The underlying model the tool runs on today (shown as a badge). */
  model?: string;
  /** Official site. */
  href?: string;
  /** Concrete creative jobs this tool is reached for. */
  useFor?: string[];
};

export type ToolGroup = {
  id: string;
  category: string;
  blurb: string;
  /** Grid columns on large screens. Defaults to 3. */
  columns?: 2 | 3;
  tools: Tool[];
};

export const stack: ToolGroup[] = [
  {
    id: 'assistants',
    category: 'AI Assistants',
    blurb: 'Thinking partners for scripts, research, and prompt refinement — each with the model it runs on today.',
    columns: 2,
    tools: [
      {
        name: 'ChatGPT',
        model: 'GPT-5.5',
        description:
          'The studio’s default writing partner. GPT-5.5 reasons carefully, follows a brief closely, and handles scripts, structure, and prompt refinement — with native image generation, voice mode, and custom GPTs for workflows you run again and again.',
        useFor: [
          'Scriptwriting & story beats',
          'Prompt engineering & refinement',
          'Concept brainstorming',
          'Tightening & rewriting copy',
        ],
        bestFor: 'Scripts & prompt craft',
        href: 'https://chatgpt.com',
      },
      {
        name: 'Claude',
        model: 'Claude Opus 4.8',
        description:
          'Anthropic’s assistant, prized for natural, human writing and its faithfulness to a detailed brief. The Claude 5 family — led by Opus 4.8 — excels at long-form structure, nuanced tone, and careful editing, for copy that reads written, not generated.',
        useFor: [
          'Nuanced scriptwriting & tone',
          'Long-form structure & editing',
          'Following complex briefs',
          'Polishing copy until it sings',
        ],
        bestFor: 'Writing & tone',
        href: 'https://claude.ai',
      },
      {
        name: 'Grok',
        model: 'Grok 4.3',
        description:
          'Built into X with a live pulse on what’s trending right now. Fast, current, and candid — ideal for catching the cultural moment, drafting scroll-stopping hooks, and pressure-testing ideas, now with native video input and a 1M-token context.',
        useFor: [
          'Trend-aware ideation',
          'Real-time cultural references',
          'Punchy hooks & captions',
          'Fast first drafts',
        ],
        bestFor: 'Trend-aware ideation',
        href: 'https://grok.com',
      },
      {
        name: 'Gemini',
        model: 'Gemini 3.5',
        description:
          'Google’s multimodal flagship with a huge 1M-token context and native understanding of images, video, and audio. Best for deep research, analysing reference material, and Search-grounded fact-checking — and it plugs straight into Google’s creative stack.',
        useFor: [
          'Long-context research',
          'Analysing image & video references',
          'Search-grounded fact-checking',
          'Multimodal reasoning',
        ],
        bestFor: 'Research & analysis',
        href: 'https://gemini.google.com',
      },
    ],
  },
  {
    id: 'image',
    category: 'Image',
    blurb: 'Where a still frame becomes a signature look.',
    tools: [
      {
        name: 'GPT Image',
        model: 'GPT Image 2',
        description:
          'OpenAI’s reasoning-powered image model. It plans a shot before it draws it — near-perfect in-image text, reliable composition, and up to 4K output.',
        useFor: ['Text-in-image & logos', 'Accurate, on-brief composition', 'Fast, editable iterations'],
        bestFor: 'Accurate composition',
        href: 'https://chatgpt.com',
      },
      {
        name: 'Midjourney',
        model: 'V8.1',
        description:
          'The mood-maker. Painterly, art-directed aesthetics with gorgeous light — now faster, with HD 2K renders and sharper small-detail retention.',
        useFor: ['Cinematic mood & lighting', 'Painterly, art-directed looks', 'HD 2K hero frames'],
        bestFor: 'Cinematic beauty',
        href: 'https://www.midjourney.com',
      },
      {
        name: 'Flux',
        model: 'FLUX.2',
        description:
          'Black Forest Labs’ photoreal workhorse. Best-in-class realism for people, products, and editorial covers, with dependable multi-reference character consistency.',
        useFor: ['Photoreal humans & products', 'Consistent character work', 'Editorial covers with text'],
        bestFor: 'Realism & consistency',
        href: 'https://bfl.ai',
      },
    ],
  },
  {
    id: 'video',
    category: 'Video',
    blurb: 'Motion, camera, and performance — generated.',
    tools: [
      {
        name: 'Kling',
        model: 'Kling 3.0',
        description:
          'Kuaishou’s cinematic model with native 4K, up to 15-second clips, and an AI Director that composes multiple shots in one generation while holding continuity.',
        useFor: ['Human movement & physics', 'Native 4K, up to 15s', 'Multi-shot AI Director'],
        bestFor: 'Human movement',
        href: 'https://klingai.com',
      },
      {
        name: 'Runway',
        model: 'Gen-4.5',
        description:
          'The director’s toolkit. Top-rated fidelity with consistent characters and locations across scenes, native audio, and precise creative control.',
        useFor: ['Director-grade control', 'Consistent characters & scenes', 'Native audio tracks'],
        bestFor: 'Creative control',
        href: 'https://runwayml.com',
      },
      {
        name: 'Veo',
        model: 'Veo 3.1',
        description:
          'Google DeepMind’s premium model. High-fidelity, coherent cinematic shots with synchronised dialogue and sound, up to 4K.',
        useFor: ['Premium cinematic shots', 'Synced dialogue & sound', 'Up to 4K delivery'],
        bestFor: 'Premium film looks',
        href: 'https://deepmind.google/models/veo',
      },
      {
        name: 'Seedance',
        model: 'Seedance 2.0',
        description:
          'ByteDance’s expressive motion model. Strong on stylised movement and performance, and able to blend many image, video, and audio references in a single pass.',
        useFor: ['Expressive, stylised motion', 'Multi-reference generation', 'Dynamic performance'],
        bestFor: 'Dynamic performance',
        href: 'https://seed.bytedance.com',
      },
    ],
  },
  {
    id: 'audio',
    category: 'Audio',
    blurb: 'Voice and sound that carry the story.',
    tools: [
      {
        name: 'ElevenLabs',
        model: 'Eleven v3',
        description:
          'The most expressive voice model. Natural voiceover, narration, and character voices in 70+ languages, with emotion, direction, and multi-speaker dialogue via inline audio tags.',
        useFor: ['Natural voiceover & narration', 'Emotion via audio tags', 'Multi-speaker dialogue'],
        bestFor: 'Voice & narration',
        href: 'https://elevenlabs.io',
      },
    ],
  },
  {
    id: 'editing',
    category: 'Editing',
    blurb: 'Where everything is assembled and finished.',
    tools: [
      {
        name: 'CapCut',
        description:
          'Fast, capable editing where it all comes together — assembly, captions, sound, and export tuned for every platform.',
        useFor: ['Editing & assembly', 'Captions & subtitles', 'Per-platform delivery'],
        bestFor: 'Edit & publish',
        href: 'https://www.capcut.com',
      },
    ],
  },
];
