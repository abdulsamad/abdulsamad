import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import qwikdev from '@qwikdev/astro';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  root: '.',
  output: 'server',
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

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
