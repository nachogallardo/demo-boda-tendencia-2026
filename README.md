# Valeria & Hugo — invitación de boda (demo de portfolio)

Web de invitación single-page para una pareja **ficticia** (Valeria Durán & Hugo Castellanos, sábado 15 de mayo de 2027, Barcelona), construida como muestra de diseño con la estética de bodas 2026/2027 («lujo discreto»).

- `index.html` — marcado y estilos (Tailwind por CDN con tokens propios).
- `script.js` — cuenta atrás, menú, reveals con GSAP, lightbox, acordeón FAQ y formulario RSVP.
- `img/` — fotografías WebP optimizadas, de Unsplash (Unsplash License). El origen de cada una está en su `.json` de procedencia.

Datos de ejemplo: IBAN `ES00 0000 0000 0000 0000 0000`, teléfonos `+34 600 00 00 06/07` y email `demo@valeriayhugo-boda.example` son placeholders. Con ese email (TLD reservado `.example`) el formulario simula el envío; con un email real, `script.js` hace el envío real a FormSubmit (el primer envío requiere activarlo desde el correo de confirmación).

No requiere build: se despliega tal cual en GitHub Pages.
