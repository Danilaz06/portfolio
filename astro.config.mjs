import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://danilaz06.github.io',
  // El repo se llama "portfolio", así que GitHub Pages lo sirve en
  // danilaz06.github.io/portfolio  → la ruta base debe ser /portfolio.
  // (Si algún día renombras el repo a "danilaz06.github.io", borra esta línea.)
  base: '/portfolio',
  build: {
    inlineStylesheets: 'auto',
  },
});
