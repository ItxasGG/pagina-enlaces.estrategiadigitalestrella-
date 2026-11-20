# pagina-enlaces.estrategiadigitalestrella

Landing estática de la **página de enlaces a medida** de Estrategia Digital Estrella. HTML, CSS y JavaScript sin frameworks ni paso de compilación.

## Estructura

```
├── index.html     Página completa (SEO, Open Graph y JSON-LD en el <head>)
├── styles.css     Estilos, mobile first
├── script.js      Aviso del ejemplo en vivo, acordeón y animaciones
├── robots.txt     Permite el rastreo
├── llms.txt       Resumen para motores de IA
└── assets/
    ├── logo-rojo.png   Cabecera
    ├── logo-negro.png  Pie
    ├── banner.png      Hero (2172 × 724 px recomendado)
    ├── favicon.png
    └── og-image.png    Vista previa al compartir (1200 × 630 px)
```

## Publicar en Cloudflare Pages

1. Sube el repositorio a GitHub.
2. En Cloudflare Pages, conecta el repositorio.
3. Framework preset: **None**. Build command: vacío. Output directory: `/`.

Cuando tengas el dominio definitivo, cambia `assets/og-image.png` por la URL absoluta en las etiquetas `og:image` y `twitter:image` de `index.html`.
