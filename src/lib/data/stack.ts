/** Creative Stack — the tools Chioma uses, grouped, each with a best-use case. */

export type Tool = {
  name: string;
  description: string;
  bestFor: string;
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
    blurb: 'Thinking partners for scripts, concepts, and prompt refinement.',
    tools: [
      { name: 'ChatGPT', description: 'Scriptwriting, ideation, and prompt engineering.', bestFor: 'Story structure & copy' },
      { name: 'Grok', description: 'Fast, current takes and punchy social angles.', bestFor: 'Trend-aware ideation' },
      { name: 'Gemini', description: 'Long-context research and multi-modal reasoning.', bestFor: 'Research & analysis' },
    ],
  },
  {
    id: 'image',
    category: 'Image',
    blurb: 'Where a still frame becomes a signature look.',
    tools: [
      { name: 'GPT Image', description: 'Precise, instruction-following image generation.', bestFor: 'Accurate composition' },
      { name: 'Midjourney', description: 'Painterly, art-directed aesthetics with mood.', bestFor: 'Cinematic beauty' },
      { name: 'Flux', description: 'Photoreal detail and dependable character work.', bestFor: 'Realism & consistency' },
    ],
  },
  {
    id: 'video',
    category: 'Video',
    blurb: 'Motion, camera, and performance — generated.',
    tools: [
      { name: 'Kling', description: 'Fluid motion and strong physical realism.', bestFor: 'Human movement' },
      { name: 'Runway', description: 'Director-grade control and editing tools.', bestFor: 'Creative control' },
      { name: 'Veo', description: 'High-fidelity, coherent cinematic shots.', bestFor: 'Premium film looks' },
      { name: 'Seedance', description: 'Expressive, stylized motion and dance.', bestFor: 'Dynamic performance' },
    ],
  },
  {
    id: 'audio',
    category: 'Audio',
    blurb: 'Voice and sound that carry the story.',
    tools: [
      { name: 'ElevenLabs', description: 'Natural voiceover, narration, and character voices.', bestFor: 'Voice & narration' },
    ],
  },
  {
    id: 'editing',
    category: 'Editing',
    blurb: 'Where everything is assembled and finished.',
    tools: [
      { name: 'CapCut', description: 'Fast, capable editing, captions, and delivery.', bestFor: 'Edit & publish' },
    ],
  },
];
