import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dp-lewis.github.io',
  base: process.env.NODE_ENV === 'production' ? '/quick-ai-projects' : '',
  build: {
    format: 'directory'
  },
  compressHTML: true
});