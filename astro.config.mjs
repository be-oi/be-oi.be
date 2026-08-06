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
      // Only English has real content today; fr/nl (and /) are redirects.
      filter: (page) => {
        const path = new URL(page).pathname;
        if (path === '/' || path === '/fr/' || path === '/nl/') return false;
        return path.startsWith('/en/');
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          // Uncomment when fr/nl pages ship:
          // fr: 'fr',
          // nl: 'nl',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
