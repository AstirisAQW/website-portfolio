# Joseph Deysolong — Portfolio

Personal portfolio website built with React 19, TypeScript, Tailwind CSS v4, GSAP, and Lenis.

## Architecture

```text
website-portfolio/
├── public/
│   └── logos/
├── scripts/
└── src/
    ├── components/
    │   ├── hero/
    │   └── ui/
    ├── content/
    ├── hooks/
    ├── motion/
    ├── types/
    └── utils/
```

- `public/` — Static assets including project screenshots, portraits, background textures, and the resume PDF.
- `public/logos/` — Local SVG technology and social icons served directly from the site.
- `scripts/` — Build-time utilities such as PNG dimension extraction (`image-sizes.mjs`).
- `src/components/` — Top-level page sections (`Hero`, `Sidebar`, `AboutSection`, `ProjectsSection`, `ResumeSection`, `Footer`) and layout pieces.
- `src/components/hero/` — Modular hero subcomponents (`StatusStrip`, `LiveClock`, `PortraitFrame`, `HeroActions`) and hero-specific motion hooks.
- `src/components/ui/` — Reusable presentation primitives (`Card`, `LinkButton`, `Icons`).
- `src/content/` — Typed portfolio data (`site`, `projects`, `skills`, `profile`, `sections`), generated image dimensions, and content integrity tests.
- `src/hooks/` — Custom React hooks for active section tracking (`useActiveSection`) and magnetic pointer interactions (`useMagnetic`).
- `src/motion/` — Centralized GSAP plugin registration, motion constants, `useMotion`, `useScrollReveals`, debounced `ScrollTrigger` refresh, and Lenis smooth scroll.
- `src/types/` — Shared TypeScript interfaces for site configuration, projects, profile credentials, and image references.
- `src/utils/` — Asset path and image reference helpers (`asset`, `imageRef`).

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
