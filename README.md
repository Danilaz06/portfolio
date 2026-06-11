# Portfolio · Daniel Lazar

Portfolio personal de **Daniel Lazar** — Backend Developer (Java / Spring Boot).
Construido con [Astro](https://astro.build) y un sistema de diseño propio (estética dark / terminal).

## 🚀 Desarrollo

```bash
npm install      # instala dependencias
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera la web estática en /dist
npm run preview  # previsualiza el build
```

## ✏️ Cómo editar mi contenido

**Todo el contenido vive en un único archivo:** [`src/data/profile.ts`](src/data/profile.ts).
No hace falta tocar nada más. Ahí cambias nombre, bio, skills, experiencia, proyectos y contacto.

Los campos marcados con `// TODO` son los que conviene revisar/completar.

### Pendientes rápidos
- [ ] Subir tu CV en PDF a `public/cv.pdf`
- [ ] Subir tu foto a `public/avatar.jpg` (la de LinkedIn vale)
- [ ] Revisar links de proyectos (repos / demos)
- [ ] Confirmar tu usuario de GitHub en `profile.ts`

## 🎨 Estructura

```
src/
├─ data/profile.ts        ← TU CONTENIDO (edita aquí)
├─ layouts/Layout.astro   ← <head>, SEO, fuentes
├─ components/            ← Nav, Hero, About, Skills, Experience, Projects, Contact
├─ styles/global.css      ← sistema de diseño (colores, tipografía)
└─ pages/index.astro      ← ensambla la página
```

## 📦 Despliegue

El repositorio incluye un workflow de GitHub Actions que publica automáticamente
en **GitHub Pages** con cada push a la rama principal. Solo hay que activar Pages
en *Settings → Pages → Source: GitHub Actions*.
