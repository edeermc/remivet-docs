# remivet-docs

Wiki de usuario y administración de **RemiVet**, publicada con [VitePress](https://vitepress.dev/).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` (o el puerto que indique la terminal).

## Build

```bash
npm run build
npm run preview
```

## Despliegue en Vercel

1. Importa este repo en Vercel como proyecto nuevo.
2. Vercel lee `vercel.json` automáticamente:
   - **Build:** `npm run build`
   - **Output:** `docs/.vitepress/dist`
3. Opcional: dominio `docs.tu-dominio.com`.

## Contenido

La documentación vive en `docs/`. Edita los `.md` y haz push; Vercel redeploya el sitio.
