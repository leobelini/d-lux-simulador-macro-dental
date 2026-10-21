import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://leobelini.github.io',
  base: '/d-lux-simulador-macro-dental',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
