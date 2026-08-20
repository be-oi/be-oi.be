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
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        if (path === '/') return false;
        return path.startsWith('/en/') || path.startsWith('/nl/') || path.startsWith('/fr/');
      },
      i18n: {
        // Keep in sync with `i18n.defaultLocale` and `src/data/i18n.ts`.
        defaultLocale: 'fr',
        locales: {
          fr: 'fr',
          nl: 'nl',
          en: 'en',
        },
      },
      // Emit hreflang x-default → French (site default); HTML head also covers `/`.
      // Guard against duplicate appends: sitemap may invoke serialize once per locale URL
      // while sharing the same `links` array by reference.
      serialize(item) {
        if (!item.links?.length) return item;
        if (item.links.some((link) => link.lang === 'x-default')) return item;
        const defaultLink = item.links.find((link) => link.lang === 'fr');
        if (defaultLink) {
          item.links.push({ url: defaultLink.url, lang: 'x-default' });
        }
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
