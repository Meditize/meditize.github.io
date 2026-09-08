// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://meditize.app',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // keep the old WordPress URLs alive
  redirects: {
    '/category/blog/': '/blog/',
    '/2025/11/04/how-to-beat-digital-fatigue-6-strategies-that-actually-work-2/':
      '/blog/how-to-beat-digital-fatigue/',
  },
});
