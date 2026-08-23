import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

import { redirects } from './utils';

export default defineConfig({
  root: '.',
  output: 'server',
  integrations: [
    icon(),
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

  adapter: cloudflare({ imageService: 'compile' }),

  redirects,

  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: true,
    },
    ssr: {
      external: ['axios'],
    },
  },
});
