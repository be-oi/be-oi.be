import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.be-oi.be',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'nl', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});