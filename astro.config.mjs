// @ts-check
import { defineConfig } from 'astro/config';

import partytown from "@astrojs/partytown";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), react()],

  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});