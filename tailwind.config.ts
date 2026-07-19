import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F8F5FC',
          100: '#f0e4f8',
          200: '#e1c9f0',
          300: '#c9a3e5',
          400: '#b78bfa',
          500: '#8A5CF6',
          600: '#6d28d9',
          700: '#5D2A7F',
          800: '#280B39',
          900: '#1a0724',
        },
        luxury: {
          light: '#F8F5FC',
          dark: '#280B39',
          accent: '#8A5CF6',
        },
        dark: '#111111',
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      spacing: {
        'safe': 'max(0px, env(safe-area-inset-left))',
      },
    },
  },
  plugins: [require('tailwindcss/plugin')(
    function({ addUtilities }) {
      addUtilities({
        '.glass': {
          '@apply bg-white/10 backdrop-blur-md border border-white/20': {},
        },
        '.glass-dark': {
          '@apply bg-black/30 backdrop-blur-md border border-white/10': {},
        },
        '.text-gradient': {
          'background': 'linear-gradient(135deg, #280B39 0%, #8A5CF6 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      });
    }
  )],
};

export default config;
