import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// JEG Remodeling Concepts Corp — marketing site (Astro + Tailwind)
export default defineConfig({
  site: 'https://www.jegfl.com',
  base: process.env.SITE_BASE || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
