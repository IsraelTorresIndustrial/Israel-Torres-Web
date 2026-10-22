# Israel Torres — Portfolio

Portafolio profesional de Israel Torres López, Ingeniero Civil Industrial y Data Consultant.

El sitio presenta experiencia en estrategia, CRM, Business Intelligence, inteligencia artificial aplicada, automatización y coordinación de proyectos. Está construido con React, TypeScript, Vite y Tailwind CSS, y se despliega automáticamente en Vercel desde la rama `main`.

## Desarrollo local

```bash
npm install
npm run dev
```

## Arquitectura

- Rutas: `/`, `/sobre-mi`, `/experiencia`, `/proyectos`, `/proyectos/:caso`, `/certificaciones` (artículos se activan al publicar en `src/content/articles.ts`).
- `npm run build` genera el cliente y **prerenderiza** cada ruta a HTML estático (`scripts/prerender.mjs`).
- Contenido factual: `src/data.ts`. Capa de diseño: `src/content/`. Metadatos por ruta: `src/seo/routeMeta.ts`.
- Sistema de diseño y decisiones: `docs/design/DIRECTION.md`. Guía viva en desarrollo: `/diseno`.

## Verificaciones

```bash
npm run lint
npm run build
```

Sitio publicado: [israel-torres-web.vercel.app](https://israel-torres-web.vercel.app/)
