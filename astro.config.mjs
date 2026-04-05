import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: true,
  })],
  trailingSlash: 'never',
  site: 'https://ketaknusantara.fajrika.site',
  vite: {
    server: {
      host: '0.0.0.0',
      port: 3001,
      allowedHosts: true
    }
  }
});
