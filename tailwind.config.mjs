import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
      },
      colors: {
        ketak: '#a3b16b',
        gold: '#c9a84c',
      },
    },
  },
  plugins: [],
} satisfies Config;
