# Wardrobe Studio Marketing

Landing page for Wardrobe Studio, built with Astro and deployed with GitHub Pages.

## Development

```sh
bun install
bun run dev
```

## Build

```sh
bun run build
```

## App Store CTA

The page reads `PUBLIC_APP_STORE_URL` at build time. When the App Store listing is live, set it in GitHub Pages Actions variables or change the fallback in `src/pages/index.astro`.
