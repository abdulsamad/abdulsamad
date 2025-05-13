import { defineConfig } from 'astro/config';
import qwikdev from '@qwikdev/astro';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

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

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  redirects: {
    '/resume': {
      status: 301,
      destination: 'https://bit.ly/2Tbfyqx',
    },
    '/linkedin': {
      status: 301,
      destination: 'https://www.linkedin.com/in/abdulsamad-ansari',
    },
    '/github': {
      status: 301,
      destination: 'https://github.com/abdulsamad',
    },
    '/telegram': {
      status: 301,
      destination: 'https://t.me/AbdulSamadDev',
    },
    '/twitter': {
      status: 301,
      destination: 'https://twitter.com/AbdulSamadDev',
    },
    '/x': {
      status: 301,
      destination: 'https://x.com/AbdulSamadDev',
    },
    '/facebook': {
      status: 301,
      destination: 'https://facebook.com/AbdulSamadDev',
    },
    '/bsky': {
      status: 301,
      destination: 'https://bsky.app/profile/abdulsamad.bsky.social',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
