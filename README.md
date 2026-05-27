# Portafolio

Pequeño portafolio personal construido con React y Vite.

**Descripción**: Sitio estático/SPA para mostrar proyectos, experiencia y contacto.

**Tecnologías**
- React
- Vite
- Sass
- framer-motion
- react-icons

**Requisitos**
- Node.js 18+ y npm o yarn

**Instalación**
Ejecuta en la raíz del proyecto:

`npm install`

**Desarrollo**

`npm run dev`

Abre `http://localhost:5173` (o la URL que muestre Vite).

**Construir para producción**

`npm run build`

**Previsualizar build**

`npm run preview`

**Lint**

`npm run lint`

**Estructura principal**
- [src](src) — código fuente
- [src/App.jsx](src/App.jsx) — entrada de la app
- [src/main.jsx](src/main.jsx) — mount y bootstrap
- [src/components/hero/Hero.jsx](src/components/hero/Hero.jsx) — componente Hero
- [src/styles](src/styles) — estilos Sass

**Scripts útiles**
- `dev` — Ejecuta Vite en modo desarrollo
- `build` — Genera la carpeta de producción
- `preview` — Sirve la build localmente
- `lint` — Ejecuta ESLint

**Notas**
- Hay un script de utilidad `scripts/remove-comments.cjs` usado para eliminar comentarios del proyecto (usado previamente).
- Antes de abrir un PR, revisa la rama `remove-comments-backup` si necesitas recuperar comentarios eliminados.

**Licencia**

MIT
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
