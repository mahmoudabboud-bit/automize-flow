import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0a0c12',
        'brand-card': 'rgba(19, 23, 34, 0.6)',
        'brand-accent': '#60a5fa',
        'brand-accent-glow': 'rgba(96, 165, 250, 0.4)',
        'brand-accent-secondary': '#818cf8',
        'brand-text-primary': '#f8fafc',
        'brand-text-secondary': '#94a3b8',
        'brand-border': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
