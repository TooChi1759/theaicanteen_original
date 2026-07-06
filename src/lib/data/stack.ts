/** Creative Stack — the tools Chioma uses, grouped, each with a best-use case. */

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
  tools: Tool[];
};

export const stack: ToolGroup[] = [
  {
    id: 'assistants',
    category: 'AI Assistants',
    blurb: 'Thinking partners for scripts, research, and prompt refinement — each with the model it runs on today.',
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
      { name: 'GPT Image', description: 'Precise, instruction-following image generation.', bestFor: 'Accurate composition', href: 'https://chatgpt.com' },
      { name: 'Midjourney', description: 'Painterly, art-directed aesthetics with mood.', bestFor: 'Cinematic beauty', href: 'https://www.midjourney.com' },
      { name: 'Flux', description: 'Photoreal detail and dependable character work.', bestFor: 'Realism & consistency', href: 'https://blackforestlabs.ai' },
    ],
  },
  {
    id: 'video',
    category: 'Video',
    blurb: 'Motion, camera, and performance — generated.',
    tools: [
      { name: 'Kling', description: 'Fluid motion and strong physical realism.', bestFor: 'Human movement', href: 'https://klingai.com' },
      { name: 'Runway', description: 'Director-grade control and editing tools.', bestFor: 'Creative control', href: 'https://runwayml.com' },
      { name: 'Veo', description: 'High-fidelity, coherent cinematic shots.', bestFor: 'Premium film looks', href: 'https://deepmind.google/models/veo' },
      { name: 'Seedance', description: 'Expressive, stylized motion and dance.', bestFor: 'Dynamic performance' },
    ],
  },
  {
    id: 'audio',
    category: 'Audio',
    blurb: 'Voice and sound that carry the story.',
    tools: [
      { name: 'ElevenLabs', description: 'Natural voiceover, narration, and character voices.', bestFor: 'Voice & narration', href: 'https://elevenlabs.io' },
    ],
  },
  {
    id: 'editing',
    category: 'Editing',
    blurb: 'Where everything is assembled and finished.',
    tools: [
      { name: 'CapCut', description: 'Fast, capable editing, captions, and delivery.', bestFor: 'Edit & publish', href: 'https://www.capcut.com' },
    ],
  },
];
