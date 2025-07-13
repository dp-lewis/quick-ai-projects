import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dp-lewis.github.io/quick-ai-projects',
  base: '/quick-ai-projects/',
  build: {
    format: 'directory'
  },
  compressHTML: true
});