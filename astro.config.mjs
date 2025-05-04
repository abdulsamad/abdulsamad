import { defineConfig } from 'astro/config';
import qwikdev from '@qwikdev/astro';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  root: '.',
  output: 'static',
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

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});
