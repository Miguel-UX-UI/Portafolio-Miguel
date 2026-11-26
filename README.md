# Portafolio — Miguel Martínez

Sitio estático (HTML + CSS + JS, sin dependencias) publicado en Vercel: **https://miguel-ux.vercel.app**

## Estructura

```
index.html          Inicio: "Hola, soy Miguel!" + proyectos destacados
proyectos.html      Página de Proyectos
css/styles.css      Estilos
js/projects.js      ← Lista de proyectos (edita aquí títulos, imágenes y links)
js/main.js          Render de tarjetas, animaciones y menú móvil
img/proyectos/      Imágenes de fondo de cada proyecto
img/logos/          Logos de clientes/empresas
```

## Ver en local

Abre `index.html` en el navegador.

## Publicar

El sitio está en Vercel, conectado a este repositorio:

- Cada cambio que llega a `main` se publica automáticamente en **https://miguel-ux.vercel.app**.
- Las demás ramas y los pull requests reciben su propia URL de vista previa.
- El dominio se administra en Vercel: **Settings → Domains**.
- `vercel.json` activa `cleanUrls`: las páginas se abren sin `.html` (`/proyectos`, `/sobre-mi`, `/suintec`, `/finnta`), igual que en GitHub Pages. No lo borres o esos links darán 404.
