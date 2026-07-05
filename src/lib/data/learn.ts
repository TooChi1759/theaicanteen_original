/** Tips & Resources — educational cards + readable articles. CMS-ready. */

import type { LucideIcon } from 'lucide-react';
import {
  PenLine,
  UserRoundCheck,
  Sun,
  Video,
  Palette,
  Smile,
  LayoutGrid,
  Clapperboard,
  Workflow,
  FileText,
  Lightbulb,
  Camera,
  Boxes,
  Ratio,
  Sparkles,
} from 'lucide-react';

/** A block of readable article content. */
export type Block =
  | { type: 'h'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'steps'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'example'; label: string; prompt: string };

export type Tip = {
  id: string;
  slug: string;
  title: string;
  description: string;
  readTime: string;
  icon: LucideIcon;
  intro: string;
  content: Block[];
};

export const tips: Tip[] = [
  {
    id: 'prompt-writing',
    slug: 'prompt-writing',
    title: 'Prompt Writing',
    description: 'Structure a prompt like a director’s brief — subject, light, lens, mood, grade.',
    readTime: '6 min',
    icon: PenLine,
    intro:
      'The difference between a generic image and a cinematic one is rarely the model — it’s the brief. Write your prompt the way a director briefs a crew: specific, ordered, and visual.',
    content: [
      { type: 'h', text: 'The anatomy of a strong prompt' },
      {
        type: 'p',
        text: 'Every controllable image lives on five layers. Name each one explicitly and you leave far less to chance.',
      },
      {
        type: 'list',
        items: [
          'Subject & wardrobe — who or what, and how they’re styled.',
          'Light — the source, its quality (hard or soft), and its direction.',
          'Lens & framing — focal length, aperture, and shot size.',
          'Color & film — the grade or film stock that sets the palette.',
          'Mood & atmosphere — the feeling the frame should carry.',
        ],
      },
      { type: 'h', text: 'Order matters' },
      {
        type: 'p',
        text: 'Front-load the elements you care about most. Models weight the beginning of a prompt more heavily, so lead with subject and light before you reach for adjectives.',
      },
      {
        type: 'example',
        label: 'Portrait starter',
        prompt:
          'Cinematic close-up portrait of [subject], soft [key light] from camera-left, 85mm lens, shallow depth of field at f/1.8, warm amber and cream grade, subtle film grain, editorial mood.',
      },
      {
        type: 'callout',
        text: 'Rule of thumb: if you can’t picture the shot from your own words, the model can’t either. Add one concrete detail and try again.',
      },
    ],
  },
  {
    id: 'character-consistency',
    slug: 'character-consistency',
    title: 'Character Consistency',
    description: 'Lock a face, wardrobe, and vibe across dozens of shots with reference workflows.',
    readTime: '5 min',
    icon: UserRoundCheck,
    intro:
      'The fastest way to break the illusion of a story is a character whose face changes shot to shot. Consistency is a workflow, not a lucky seed.',
    content: [
      { type: 'h', text: 'Build a reference, not just a prompt' },
      {
        type: 'p',
        text: 'Generate one hero image you love, then reuse it as a reference for every subsequent shot. A locked reference carries the face, skin tone, and styling far better than words alone.',
      },
      {
        type: 'steps',
        items: [
          'Generate a clean, well-lit “hero” portrait of the character.',
          'Save it as your reference image for the whole set.',
          'Describe only what changes — pose, location, wardrobe, lighting.',
          'Keep identity words identical every time (age, features, hair).',
          'For long projects, train a reusable character model from 5–20 shots.',
        ],
      },
      {
        type: 'callout',
        text: 'Change one variable per generation. If both lighting and angle move at once, drift is hard to diagnose.',
      },
    ],
  },
  {
    id: 'lighting',
    slug: 'lighting',
    title: 'Lighting',
    description: 'Name your light source and quality to control mood before you touch a grade.',
    readTime: '7 min',
    icon: Sun,
    intro:
      'Lighting is 80% of mood. Before you reach for a color grade, decide where the light comes from and how hard it is — that single choice sets the whole tone.',
    content: [
      { type: 'h', text: 'Quality: hard vs soft' },
      {
        type: 'p',
        text: 'Hard light (small or distant source) gives crisp shadows and drama. Soft light (large or diffused source) gives gentle, flattering falloff. Name which one you want.',
      },
      { type: 'h', text: 'Setups worth memorizing' },
      {
        type: 'list',
        items: [
          'Rembrandt — key at 45°, a small triangle of light under the eye. Timeless, moody.',
          'Butterfly — key above and in front, soft shadow under the nose. Glamour.',
          'Backlit / rim — source behind the subject, glowing edge. Cinematic separation.',
          'Golden hour — low, warm sun. Instant nostalgia and depth.',
          'Chiaroscuro — a single hard source in near-darkness. High drama.',
        ],
      },
      {
        type: 'example',
        label: 'Moody key light',
        prompt:
          'Rembrandt lighting with a single large softbox at 45 degrees, deep charcoal background, dramatic falloff into shadow, subtle warm fill.',
      },
      {
        type: 'callout',
        text: 'State the direction (“from camera-left”) and the source size (“large softbox”). Those two words do most of the work.',
      },
    ],
  },
  {
    id: 'camera-movement',
    slug: 'camera-movement',
    title: 'Camera Movement',
    description: 'Push-ins, orbits, and cranes — the motion vocabulary that reads as cinematic.',
    readTime: '8 min',
    icon: Video,
    intro:
      'In AI video, the camera move is a prompt of its own. The right motion turns a moving image into a directed shot.',
    content: [
      { type: 'h', text: 'The core moves' },
      {
        type: 'list',
        items: [
          'Push-in — slow move toward the subject. Builds intensity and intimacy.',
          'Pull-out — reveal the wider world. Great for endings.',
          'Orbit — circle the subject. Shows off product and space.',
          'Crane / boom — vertical reveal. Feels grand.',
          'Handheld — subtle shake. Adds realism and tension.',
          'Dolly / tracking — follow alongside motion. Keeps energy.',
        ],
      },
      { type: 'h', text: 'Pair the move with the feeling' },
      {
        type: 'p',
        text: 'A slow push-in on a face reads as revelation. A fast orbit reads as energy. Choose the move for the emotion, not just the look.',
      },
      {
        type: 'example',
        label: 'Cinematic motion',
        prompt:
          'Slow cinematic push-in on the subject, subtle handheld motion, shallow depth of field, 35mm, natural parallax, film-like motion blur.',
      },
      {
        type: 'callout',
        text: 'Keep it to one clear move per clip. Two competing moves confuse the model and the viewer.',
      },
    ],
  },
  {
    id: 'color-grading',
    slug: 'color-grading',
    title: 'Color Grading',
    description: 'Build a signature palette and carry it across every frame you publish.',
    readTime: '5 min',
    icon: Palette,
    intro:
      'A consistent grade is what makes a body of work feel like yours. Pick a palette and defend it across every piece.',
    content: [
      { type: 'h', text: 'Name your palette' },
      {
        type: 'p',
        text: 'Describe the grade in words the model understands: the dominant hue, the shadow tone, and the reference stock or film if you have one.',
      },
      {
        type: 'list',
        items: [
          'Warm amber & cream — inviting, editorial, our house look.',
          'Teal & amber — the classic cinematic contrast for scenes.',
          'Muted earth tones — calm, premium, timeless.',
          'High-contrast monochrome — bold and graphic.',
        ],
      },
      {
        type: 'example',
        label: 'House grade',
        prompt:
          'Muted amber and cream color grade, gentle film grain, soft highlight rolloff, shot on Kodak Portra 400.',
      },
      {
        type: 'callout',
        text: 'Reuse the exact same grade phrase across a series. Consistency is a brand asset.',
      },
    ],
  },
  {
    id: 'facial-expressions',
    slug: 'facial-expressions',
    title: 'Facial Expressions',
    description: 'Direct micro-expressions so your characters actually feel something.',
    readTime: '4 min',
    icon: Smile,
    intro:
      'A neutral face is a wasted frame. Direct the exact emotion — and the small physical tells that sell it.',
    content: [
      { type: 'h', text: 'Describe the tell, not just the emotion' },
      {
        type: 'p',
        text: '“Happy” is vague. “A soft, closed-mouth smile with warmth reaching the eyes” is directable. Name the muscles, not the mood.',
      },
      {
        type: 'list',
        items: [
          'Eyes — “warmth reaching the eyes”, “a distant, unfocused gaze”.',
          'Mouth — “a restrained smile”, “lips parted mid-thought”.',
          'Brow — “a faint furrow of concern”, “relaxed and open”.',
          'Head — “chin slightly lowered”, “looking just past the lens”.',
        ],
      },
      {
        type: 'callout',
        text: 'Understated beats exaggerated almost every time. Subtlety reads as real.',
      },
    ],
  },
  {
    id: 'composition',
    slug: 'composition',
    title: 'Composition',
    description: 'Negative space, leading lines, and the editorial eye that elevates a frame.',
    readTime: '6 min',
    icon: LayoutGrid,
    intro:
      'Composition is where taste shows. The same subject can look like a snapshot or a cover — the difference is where you put it.',
    content: [
      { type: 'h', text: 'Tools that always work' },
      {
        type: 'list',
        items: [
          'Negative space — give the subject room to breathe; it reads as premium.',
          'Leading lines — guide the eye toward the subject.',
          'Rule of thirds — place the subject off-center for tension.',
          'Symmetry — center it deliberately for calm and authority.',
          'Framing — use foreground elements to frame the subject.',
        ],
      },
      {
        type: 'example',
        label: 'Editorial framing',
        prompt:
          'Off-center composition with generous negative space to the right, subject on the left third, clean background, magazine-cover framing.',
      },
      {
        type: 'callout',
        text: 'When in doubt, subtract. An empty corner is often the most powerful part of the frame.',
      },
    ],
  },
  {
    id: 'ai-video-tips',
    slug: 'ai-video-tips',
    title: 'AI Video Tips',
    description: 'Get clean motion, stable characters, and usable takes from generative video.',
    readTime: '9 min',
    icon: Clapperboard,
    intro:
      'Generative video rewards patience and constraints. A few habits turn a pile of glitchy takes into a clean, cuttable sequence.',
    content: [
      { type: 'h', text: 'Habits that raise your hit rate' },
      {
        type: 'list',
        items: [
          'Start from a strong still, then animate it — you control the first frame.',
          'Keep clips short (3–5s). Longer generations drift and warp.',
          'Describe one motion clearly instead of stacking three.',
          'Generate extra takes; treat it like coverage, then cut the best.',
          'Match lighting and grade across clips so they edit together.',
        ],
      },
      { type: 'h', text: 'Fixing common problems' },
      {
        type: 'p',
        text: 'Warping hands or faces usually mean the shot is too busy or too long. Simplify the action, shorten the clip, and frame a little wider.',
      },
      {
        type: 'callout',
        text: 'Edit like a filmmaker: your best 4 seconds beat a shaky 12. Cut ruthlessly.',
      },
    ],
  },
  {
    id: 'creative-workflows',
    slug: 'creative-workflows',
    title: 'Creative Workflows',
    description: 'The end-to-end pipeline from idea to finished, publishable piece.',
    readTime: '7 min',
    icon: Workflow,
    intro:
      'Great AI work is a pipeline, not a single click. Here’s the path we use from a blank page to a finished, on-brand piece.',
    content: [
      { type: 'h', text: 'The pipeline' },
      {
        type: 'steps',
        items: [
          'Concept — write the idea in one sentence and the feeling in one word.',
          'Reference — build a small moodboard and lock a hero look.',
          'Prompt system — turn the look into a reusable prompt with your grade.',
          'Generate — produce stills, then animate the ones that sing.',
          'Assemble — edit, sound design, and grade to a consistent finish.',
          'Publish — export per platform and document the recipe for next time.',
        ],
      },
      {
        type: 'callout',
        text: 'Save every winning prompt. Your library of recipes is the real compounding asset.',
      },
    ],
  },
];

export type Resource = {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: string;
  icon: LucideIcon;
  intro: string;
  content: Block[];
};

export const resources: Resource[] = [
  {
    id: 'prompt-templates',
    slug: 'prompt-templates',
    title: 'Prompt Templates',
    description: 'Copy-paste starting points for portraits, products, and film scenes.',
    type: 'Template Pack',
    icon: FileText,
    intro:
      'Reliable starting points you can adapt in seconds. Fill in the brackets, keep the structure, and tune from there.',
    content: [
      { type: 'h', text: 'Portrait' },
      {
        type: 'example',
        label: 'Cinematic portrait',
        prompt:
          'Cinematic portrait of [subject], soft [light] from [direction], 85mm, shallow depth of field, [color grade], subtle film grain, editorial mood.',
      },
      { type: 'h', text: 'Product' },
      {
        type: 'example',
        label: 'Hero product shot',
        prompt:
          '[Product] product photography on [surface], single hard light, crisp reflections and long shadow, dark moody background, macro detail, commercial advertising quality, 100mm macro.',
      },
      { type: 'h', text: 'Film scene' },
      {
        type: 'example',
        label: 'Establishing shot',
        prompt:
          'Wide establishing shot of [location] at [time of day], [weather], cinematic teal-and-amber grade, 24mm, a lone figure for scale, moody and atmospheric.',
      },
    ],
  },
  {
    id: 'lighting-guides',
    slug: 'lighting-guides',
    title: 'Lighting Guides',
    description: 'A visual cheat sheet of setups from Rembrandt to butterfly to backlit.',
    type: 'Guide',
    icon: Lightbulb,
    intro:
      'A quick reference for the lighting setups that do the most work. Say the name and the model knows the look.',
    content: [
      {
        type: 'list',
        items: [
          'Rembrandt — key at 45°, small triangle of light on the shadow cheek. Moody, classic.',
          'Butterfly (Paramount) — key high and frontal, symmetrical under-nose shadow. Glamour.',
          'Loop — key slightly off-axis, small nose-shadow loop. Natural, flattering.',
          'Split — key at 90°, half the face in shadow. Dramatic, tense.',
          'Backlit / rim — source behind, glowing outline. Cinematic separation.',
          'Golden hour — low warm sun, long shadows. Nostalgic and rich.',
        ],
      },
      {
        type: 'callout',
        text: 'Pair any setup with a source size (“large softbox” vs “bare bulb”) to control how soft the shadows fall.',
      },
    ],
  },
  {
    id: 'camera-references',
    slug: 'camera-references',
    title: 'Camera References',
    description: 'Lenses, focal lengths, and moves — with the words that trigger them.',
    type: 'Reference',
    icon: Camera,
    intro:
      'Focal length changes the whole feeling of a shot. Here’s what each range says, and the moves that pair with them.',
    content: [
      { type: 'h', text: 'Focal lengths' },
      {
        type: 'list',
        items: [
          '24mm — wide, immersive, environmental. Great for architecture and scenes.',
          '35mm — natural, documentary. The everyday storyteller.',
          '50mm — the “normal” eye. Honest and versatile.',
          '85mm — flattering compression and creamy blur. The portrait lens.',
          '100mm macro — extreme detail. Product and texture.',
        ],
      },
      { type: 'h', text: 'Depth & motion' },
      {
        type: 'list',
        items: [
          'f/1.8 — shallow depth, dreamy background separation.',
          'f/8 — sharp front to back for landscapes and interiors.',
          'Push-in, orbit, crane, handheld — name one move per shot.',
        ],
      },
    ],
  },
  {
    id: 'prompt-frameworks',
    slug: 'prompt-frameworks',
    title: 'Prompt Frameworks',
    description: 'Repeatable mental models for consistent, controllable results.',
    type: 'Framework',
    icon: Boxes,
    intro:
      'Frameworks turn guesswork into a checklist. Use one so you never forget the layer that makes a shot work.',
    content: [
      { type: 'h', text: 'The S·L·L·M·G checklist' },
      {
        type: 'list',
        items: [
          'S — Subject: who/what and wardrobe.',
          'L — Light: source, quality, direction.',
          'L — Lens: focal length and aperture.',
          'M — Mood: the feeling in one or two words.',
          'G — Grade: color palette or film stock.',
        ],
      },
      {
        type: 'p',
        text: 'Run every prompt through the five letters. If a layer is missing, that’s usually where the model is guessing — and where results wander.',
      },
      {
        type: 'callout',
        text: 'Turn your favourite finished look into a fill-in-the-blank template. That’s your personal framework.',
      },
    ],
  },
  {
    id: 'aspect-ratio-guides',
    slug: 'aspect-ratio-guides',
    title: 'Aspect Ratio Guides',
    description: 'Pick the right frame for TikTok, cinema, print, and everything between.',
    type: 'Guide',
    icon: Ratio,
    intro:
      'Shoot for the frame it will live in. The right ratio saves you from awkward crops later.',
    content: [
      {
        type: 'list',
        items: [
          '9:16 — TikTok, Reels, Shorts. Vertical, full-screen mobile.',
          '4:5 — Instagram feed portraits. Maximum feed real estate.',
          '1:1 — Square. Safe, symmetrical, grid-friendly.',
          '16:9 — YouTube, web heroes, presentations.',
          '2.39:1 — Anamorphic cinema. Instantly filmic.',
          '3:2 — Classic photography and print.',
        ],
      },
      {
        type: 'callout',
        text: 'Leave safe margins for captions and UI on 9:16 — the top and bottom eighths get covered.',
      },
    ],
  },
  {
    id: 'creative-inspiration',
    slug: 'creative-inspiration',
    title: 'Creative Inspiration',
    description: 'Curated moodboards to break a block and spark the next idea.',
    type: 'Moodboard',
    icon: Sparkles,
    intro:
      'When the page is blank, borrow a direction. These prompts are springboards — take one and make it unmistakably yours.',
    content: [
      { type: 'h', text: 'Directions to remix' },
      {
        type: 'list',
        items: [
          'Warm nostalgia — golden hour, film grain, soft focus, quiet moments.',
          'Editorial luxury — travertine, silk, gold, generous negative space.',
          'Brutalist drama — concrete, hard shafts of light, human scale.',
          'Surreal travel — impossible cities, dreamlike weather, saturated skies.',
          'Intimate portrait — one face, one feeling, one perfect light.',
        ],
      },
      {
        type: 'callout',
        text: 'Combine two directions that don’t belong together. The friction is where original work lives.',
      },
    ],
  },
];

/** Unified lookup across tips + resources for article detail pages. */
export type LearnItem =
  | ({ kind: 'tip' } & Tip)
  | ({ kind: 'resource' } & Resource);

export function getLearnItem(slug: string): LearnItem | undefined {
  const tip = tips.find((t) => t.slug === slug);
  if (tip) return { kind: 'tip', ...tip };
  const resource = resources.find((r) => r.slug === slug);
  if (resource) return { kind: 'resource', ...resource };
  return undefined;
}

export const allLearnSlugs = [
  ...tips.map((t) => t.slug),
  ...resources.map((r) => r.slug),
];
