import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        '2xl': '1360px',
      },
    },
    extend: {
      colors: {
        // Locked brand palette — do not alter these hex values.
        charcoal: {
          DEFAULT: '#1B1B1B',
          deep: '#141414',
          soft: '#232323',
          raised: '#2A2A2A',
          hair: '#333230',
        },
        ivory: {
          DEFAULT: '#F8F5F0',
        },
        stone: {
          DEFAULT: '#8B8680',
          light: '#A9A49C',
        },
        amber: {
          DEFAULT: '#C46A2D',
          soft: '#D67F3F',
          deep: '#9E5322',
        },
        gold: {
          DEFAULT: '#D4AF37',
          soft: '#E0C260',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        display: ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        headline: ['clamp(2rem, 3.5vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0,0,0,0.25)',
        card: '0 20px 60px -20px rgba(0,0,0,0.65)',
        lift: '0 40px 90px -30px rgba(0,0,0,0.75)',
        glow: '0 0 60px -12px rgba(196,106,45,0.45)',
        'glow-gold': '0 0 60px -14px rgba(212,175,55,0.4)',
        inset: 'inset 0 1px 0 0 rgba(248,245,240,0.06)',
      },
      backgroundImage: {
        'amber-gradient': 'linear-gradient(135deg, #C46A2D 0%, #D4AF37 100%)',
        'ember-glow': 'radial-gradient(60% 60% at 50% 40%, rgba(196,106,45,0.28) 0%, rgba(196,106,45,0) 70%)',
        'gold-glow': 'radial-gradient(50% 50% at 50% 50%, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0) 70%)',
        noise: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-soft': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-0.6deg)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(18px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'float-slower': 'float-slower 9s ease-in-out infinite',
        shimmer: 'shimmer 2.2s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'pulse-ring': 'pulse-ring 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
