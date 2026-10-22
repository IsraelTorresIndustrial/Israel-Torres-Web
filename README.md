# Israel Torres — Portfolio

Portafolio profesional de Israel Torres López, Ingeniero Civil Industrial y Data Consultant.

El sitio presenta experiencia en estrategia, CRM, Business Intelligence, inteligencia artificial aplicada, automatización y coordinación de proyectos. Está construido con React, TypeScript, Vite y Tailwind CSS, y se despliega automáticamente en Vercel desde la rama `main`.

## Desarrollo local

```bash
npm install
npm run dev
```

## Verificaciones

```bash
npm run lint
npm run build
```

## SEO & Verificación de Google Search Console

- **Archivo de verificación GSC:** `public/googlee4010bf84bb58835.html` (**crítico**: no eliminar ni renombrar).
- **Rastreo e Indexación:** `public/robots.txt` y `public/sitemap.xml`.
- **Configuración de Vercel:** `vercel.json` mantiene exentas de reescritura SPA las rutas estáticas de verificación y sitemaps, con `cleanUrls` deshabilitado para garantizar respuestas `200 OK` directas requeridas por Google.

Sitio publicado: [israel-torres-web.vercel.app](https://israel-torres-web.vercel.app/)
