import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import qwikdev from '@qwikdev/astro';

export default defineConfig({
  root: '.',
  output: 'static',
  integrations: [tailwind(), qwikdev()],
  server: { port: 8888 },
  image: {
    remotePatterns: [{ protocol: 'https' }],
    domains: ['githubassets.com'],
  },
});
