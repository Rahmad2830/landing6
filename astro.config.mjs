// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs({ entrypoint: "/src/script/script.js" })],
  i18n: {
    locales: ["id", "ar", "ch", "en", "es"],
    defaultLocale: "id"
  }
});