import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.be-oi.be',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'nl'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
