import { defineConfig } from 'astro/config';
import qwikdev from '@qwikdev/astro';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: '.',
  output: 'server',
  integrations: [
    icon(),
    qwikdev(),
    mdx({
      optimize: {
        // Prevent the optimizer from handling `h1` elements
        ignoreElementNames: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'],
      },
    }),
  ],

  server: {
    port: 3000,
  },

  image: {
    remotePatterns: [{ protocol: 'https' }],
    domains: ['githubassets.com'],
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});
