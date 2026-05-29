import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://nachosizle.github.io',
  base: '/wardrobe-landing',
  build: {
    inlineStylesheets: 'always',
  },
})
