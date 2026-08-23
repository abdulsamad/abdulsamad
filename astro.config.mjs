import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: '.',
  output: 'static',
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

  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: true,
    },
  },
});
