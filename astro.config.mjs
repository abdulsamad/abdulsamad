import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

export default defineConfig({
  root: '.',
  output: 'static',
  integrations: [tailwind(), image()],
  server: {
    port: 8888,
  },
});
