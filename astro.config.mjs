import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
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

  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        if (path === '/' || path === '/fr/') return false;
        return path.startsWith('/en/') || path.startsWith('/nl/');
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          nl: 'nl',
          // Uncomment when fr pages ship:
          // fr: 'fr',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
