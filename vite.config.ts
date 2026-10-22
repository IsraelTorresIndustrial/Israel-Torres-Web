import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

/**
 * Home <head> values are owned by index.html (SEO). They are exposed to the client so
 * that navigating back to "/" restores exactly what index.html declares.
 */
function readHomeHead() {
  const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
  const pick = (re: RegExp) => (html.match(re)?.[1] ?? '').replace(/\s+/g, ' ').trim();
  return {
    title: pick(/<title>([\s\S]*?)<\/title>/),
    description: pick(/<meta\b[^>]*\bname="description"[^>]*\bcontent="([^"]*)"/),
    canonical: pick(/<link\b[^>]*\brel="canonical"[^>]*\bhref="([^"]*)"/),
  };
}

export default defineConfig(() => {
  return {
    define: {
      __HOME_HEAD__: JSON.stringify(readHomeHead()),
    },
    // Absolute base: nested routes (/proyectos/...) must resolve /assets from the root.
    base: '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
