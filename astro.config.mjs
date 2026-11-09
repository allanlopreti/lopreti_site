import { defineConfig } from 'astro/config';

// `format: 'file'` gera /en.html; o Caddy serve como /en (try_files {path}.html).
export default defineConfig({
  site: 'https://lopreti.com.br',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
