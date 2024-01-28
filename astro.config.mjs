import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  root: '.',
  output: 'static',
  integrations: [tailwind()],
  server: {
    port: 8888,
  },
  image: {
    remotePatterns: [{ protocol: 'https' }],
    domains: ['githubassets.com'],
  },
});
