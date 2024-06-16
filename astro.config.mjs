import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import qwikdev from '@qwikdev/astro';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  root: '.',
  output: 'static',
  integrations: [icon(), tailwind(), qwikdev()],
  server: {
    port: 8888,
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
      },
    ],
    domains: ['githubassets.com'],
  },
});
