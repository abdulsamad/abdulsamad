import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import qwikdev from '@qwikdev/astro';

// https://astro.build/config
export default defineConfig({
  root: '.',
  output: 'static',
  integrations: [tailwind(), image(), qwikdev()],
  server: {
    port: 8888,
  },
  experimental: {
    viewTransitions: true,
  },
});
