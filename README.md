# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

FIGMA: [text](https://www.figma.com/design/StmP1cR7A23mVSzCluNd1A/Gran-Valles?node-id=0-1&p=f)

Estructura de carpeta

- app/ -> estructura de las paginas
-- app/components/ -> componentes fijos no dinamicos
-- app/pages/ -> paginas dinamicas
- i18n/ -> carpeta de idiomas
-- i18n/* -> cata idioma tiene su carpeta correspondiente y documento por cada sector
- server/api/ --> programa para envio de correo
