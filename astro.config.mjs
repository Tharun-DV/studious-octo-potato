// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.dv08.in', // Replace with your actual domain
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  integrations: [],
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});