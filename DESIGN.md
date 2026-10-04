---
name: Valeria & Hugo
description: Invitación de boda luminosa bajo una carpa de telas blancas; lienzo Cloud Dancer, fondos de temporada por sección y un único destello ámbar.
colors:
  cloud: "#F7F3EC"
  cloud-panel: "#EFE7DA"
  sage: "#E4E9D9"
  sage-panel: "#D7DFC9"
  blush: "#F3DFD6"
  blush-panel: "#EBCFC4"
  butter: "#F8EFCF"
  butter-panel: "#FFF9E6"
  latte: "#E9DCCB"
  field: "#FFFDF8"
  ink: "#2E2326"
  ink-soft: "#5E4A47"
  ink-button: "#3A2A2E"
  burgundy: "#7A3446"
  bronze: "#7A4E22"
  wine: "#4A2530"
  wine-panel: "#5A2E3A"
  wine-deep: "#3A1E27"
  wine-gold: "#E8C48A"
  wine-soft: "#E8D6CB"
  ember: "#F0B35E"
  error: "#A12E22"
  error-on-wine: "#F2A596"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(3.75rem, 9vw, 6.5rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 40"
  headline:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "'opsz' 40"
  title:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  numeral:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2.25rem, 6vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
    fontFeature: "italic, lining-nums"
  body:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.14em"
rounded:
  none: "0"
  sm: "2px"
  arch: "999px 999px 0 0"
  dot: "50%"
spacing:
  section-mobile: "96px"
  section-desktop: "144px"
  gutter-mobile: "24px"
  gutter-desktop: "40px"
  panel-mobile: "32px 28px"
  panel-desktop: "44px"
  hitos-gap: "150px"
components:
  button-solid:
    backgroundColor: "{colors.ink-button}"
    textColor: "{colors.cloud}"
    rounded: "{rounded.none}"
    typography: "{typography.label}"
    padding: "10px 1.6rem"
    height: "48px"
  button-solid-hover:
    backgroundColor: "{colors.wine-panel}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    typography: "{typography.label}"
    padding: "10px 1.6rem"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cloud}"
  button-on-wine:
    backgroundColor: "{colors.wine-gold}"
    textColor: "{colors.wine-deep}"
    rounded: "{rounded.none}"
    typography: "{typography.label}"
    height: "48px"
  panel:
    backgroundColor: "{colors.butter-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "44px"
  field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
    height: "52px"
  choice-selected:
    backgroundColor: "{colors.ink-button}"
    textColor: "{colors.cloud}"
    height: "56px"
  venue-image:
    rounded: "{rounded.arch}"
  hito-final-panel:
    backgroundColor: "{colors.wine-panel}"
    textColor: "{colors.cloud}"
    padding: "88px 64px"
---

# Design System: Valeria & Hugo

## Overview

**Creative North Star: "La carpa a plena luz"**

La invitación es una carpa de telas blancas a mediodía: un lienzo Cloud Dancer luminoso, secciones que cambian de color de temporada (salvia, blush, mantequilla, latte) como cambia la luz entre pliegues de tela, y un solo destello cálido, el de las lámparas, que vive únicamente en las chispas titilantes del hero y en el barrido de luz de la cuenta atrás. La oscuridad se reserva para dos anclas de borgoña: el hito de la pedida y el pie.

Bodoni Moda en peso 500 con eje óptico limitado a unos 40 aporta elegancia sin perder grosor de trazo sobre fondos claros; Work Sans hace de voz práctica. La forma recurrente es el arco, que contornea las fotos de los lugares y el segundo hito. La profundidad se logra cambiando de fondo y con filetes de bronce al 32%, no con sombras de caja.

Rechaza el contraste dramático y el negro de la versión anterior, y la plantilla nupcial de caligrafía y florales.

**Key Characteristics:**
- Lienzo Cloud Dancer con fondos de sección rotativos en cinco tonos claros; el tema vive en variables CSS por sección.
- Tinta espresso, burdeos para voz de acento y bronce para filetes, iconos y foco.
- Borgoña profundo solo en anclas (panel de la pedida, pie).
- Bodoni Moda 500 (opsz 40) en titulares, cifras y fechas en cursiva; Work Sans en cuerpo y rótulos.
- Esquinas rectas; el arco es la única silueta de imagen distinta.
- Sin sombras de caja; las chispas ámbar y el barrido de la cuenta atrás son la única luz.

## Colors

Un lienzo cálido, cuatro fondos de temporada suaves, tinta espresso con dos acentos terrosos y una masa borgoña usada con cuentagotas.

### Primary
- **Burdeos** (burgundy): el "&" del título, la fecha del hero, fechas de los hitos, subtítulos de los lugares, el hashtag y el punto del eje de Historia. Es la voz de acento sobre fondos claros.

### Secondary
- **Bronce** (bronze): filetes (al 32%), marco de la cuenta atrás (al 60%), iconos, subrayado de navegación, anillo de foco y cursor. Nunca como relleno de superficie.

### Tertiary
- **Ámbar ember** (ember) y su resplandor: solo las chispas titilantes del hero y el barrido de luz de la cuenta atrás (rgba(232,170,80)). Nada más es ámbar.
- **Oro de borgoña** (wine-gold): texto de acento, filetes e iconos únicamente sobre las anclas borgoña, y la selección de texto.

### Neutral
- **Cloud Dancer** (cloud): lienzo de página, hero, La boda, Regalo, FAQ, menú móvil y cabecera al hacer scroll.
- **Salvia** (sage): Nuestra historia y Contacto. **Blush** (blush): Galería, Música y panel de vestimenta. **Mantequilla** (butter): Información para invitados. **Latte** (latte): Confirmar asistencia.
- **Paneles** (cloud-panel, sage-panel, blush-panel, butter-panel): cada fondo trae su panel tonal para tarjetas, mapas y aviso de plazo; en latte el panel es el propio cloud.
- **Tinta espresso** (ink): texto principal. **Tinta suave** (ink-soft): ledes, subtítulos y placeholders.
- **Tinta de botón** (ink-button): botón sólido, opción marcada y salto de contenido; hover a wine-panel.
- **Campo** (field): relleno de campos y steppers.
- **Borgoña** (wine, wine-panel, wine-deep, wine-soft): fondo del pie, del hito final y de sus imágenes y campos; texto secundario en wine-soft.
- **Ladrillo de error** (error; error-on-wine sobre borgoña): únicamente errores de formulario.

### Named Rules
**The Season Swap Rule.** El color de una sección es su tema completo (fondo, panel, línea, botón); se cambia la clase de tema, nunca un color suelto en un componente. Cloud y los tonos de temporada alternan sin repetir vecino.

**The Wine Anchor Rule.** El borgoña como masa pertenece solo al panel de la pedida y al pie. Cualquier otra sección permanece clara.

**The Single Spark Rule.** El ámbar solo se enciende en las chispas del hero y en el barrido de la cuenta atrás.

**The Contrast Pairing Rule.** Texto de acento sobre claro = burdeos o bronce, nunca ámbar ni oro; sobre borgoña = oro de borgoña.

## Typography

**Display Font:** Bodoni Moda (con Didot, Georgia, serif), eje opsz 6..96 cargado, uso limitado a opsz 36-48
**Body Font:** Work Sans (con system-ui, sans-serif), pesos 400 y 500

**Character:** Un Didone de contraste alto pero con peso 500 y óptico moderado, para que los finos sobrevivan sobre fondos claros, frente a una sans neutra de rótulo ancho. La cursiva lleva el "&", las fechas, el hashtag y los años fantasma.

### Hierarchy
- **Display** (500, clamp(3.75rem, 9vw, 6.5rem) desde 768px; min(15vw, 8.6svh) en móvil; 0.95): "Valeria & Hugo" en el hero, dos líneas apiladas en móvil.
- **Headline** (500, clamp(2.5rem, 6vw, 4.5rem), 1.05): títulos de sección (H2).
- **Title** (500, clamp(1.75rem, 3.4vw, 2.25rem) en paneles; clamp(1.75rem, 4vw, 2.75rem) en hitos; clamp(2rem, 4.4vw, 3rem) en lugares; clamp(1.25rem, 3vw, 1.5rem) en preguntas del FAQ, 1.05-1.25): títulos de panel, hito, lugar y pregunta.
- **Numeral** (cursiva, clamp(2.25rem, 6vw, 3.5rem) para la fecha del hito; clamp(9rem, 16vw, 14rem) al 13% para el año fantasma solo en escritorio; clamp(1.6rem, 8vw, 3.4rem) para el hashtag): fechas, años y hashtag. Cuenta atrás en recto 500 (clamp(1.6rem, 7.5vw, 3rem)).
- **Body** (400, 1.0625rem, 1.65): medida 66ch (62ch en FAQ, 44ch en hitos); lede 1.1875rem en tinta suave.
- **Label** (500, 0.8125rem, +0.14em, mayúsculas): botones; enlaces de navegación +0.1em; etiquetas de la cuenta atrás 0.6875rem-0.75rem.

### Named Rules
**The Didone Scale Rule.** Bodoni va grande o no va: nunca por debajo de 1.25rem. Todo lo pequeño es Work Sans.

**The Capped Optical Rule.** Bodoni se fija a peso 500 y `opsz` 36-48; no se deja subir al eje automático, que adelgaza los finos hasta perderlos sobre claro.

**The Lining Numerals Rule.** Cifras de datos (cuenta atrás, teléfonos, IBAN, precios) con `tabular-nums lining-nums`.

## Layout

Columna única centrada de 1240px máx. con gutters de 24px (40px desde 768px). Secciones con 96px de padding vertical (144px desde 1024px). Cabecera fija de 72px (84px desde 1200px); el menú de escritorio aparece a 1200px y por debajo hay menú de pantalla completa más CTA compacto "Confirmar" de 44px.

El hero es una composición centrada a pantalla completa (100svh, mínimo 560px) sobre foto a sangre: nombres, fecha, lede (oculto con menos de 720px de alto) y cuenta atrás apilados al centro. Nuestra historia rompe la rejilla a propósito: desde 1024px, eje central de 1px en bronce al 35% con un punto burdeos por hito, composiciones de 12 columnas con imágenes de proporciones distintas (4:5 cruzando el eje, arco 3:4, cuadrada, y el hito final a ancho completo con margen negativo). En móvil los hitos se apilan sin eje ni años fantasma. El resto usa rejillas simples (5/7 en Información, 4/6 en RSVP, 4/7 en FAQ, dos columnas en lugares) con encabezado fijo en sticky.

La galería es un carrusel con snap en móvil (78% de ancho, 4:5) y una rejilla asimétrica de 4 columnas con filas de 250px y diez piezas desde 768px. Objetivos táctiles de 44px mínimo (botones 48px, campos 52px, opciones 56px).

## Elevation & Depth

Plano por defecto: no hay sombras de caja. La profundidad se logra con el cambio de fondo de temporada, paneles tonales y filetes de 1px en bronce al 32%. Excepciones estructurales: el punto del eje de Historia lleva un anillo sólido de 6px del color de la sección más un aro fino para "cortar" el eje (`0 0 0 6px #E4E9D9, 0 0 0 7px rgba(122,78,34,.35)`); las chispas del hero llevan un halo ámbar (`0 0 5px 2px rgba(232,170,80,.8)`, `0 0 14px 4px rgba(232,170,80,.35)`); los nombres del hero llevan un halo de luz claro (`text-shadow: 0 1px 22px rgba(247,243,236,.7)`) y una foto bajo velo cálido.

### Named Rules
**The Tonal Depth Rule.** Una superficie se eleva cambiando de fondo o de panel, nunca añadiendo sombra de caja ni borde decorativo.

**The Warm Veil Rule.** Sobre la foto del hero, el texto vive bajo un velo cloud (radial al 78% central y degradado vertical hasta el 96% abajo), no sobre la foto desnuda.

## Shapes

Esquinas rectas por defecto (0; 2px en campos). La silueta distintiva es el arco (`999px 999px 0 0`): fotos de los dos lugares y el segundo hito de Historia. Las demás imágenes son rectángulos de proporciones editoriales (4:5, 3:2, 1:1, 4:3). Los botones son rectángulos con borde de 1px, sin pastilla. Los iconos son Phosphor light en línea con `currentColor`, en bronce. Los mapas se asientan sobre el panel tonal de su sección.

## Components

### Buttons
- **Shape:** rectángulo recto (0), borde 1px, 48px de alto mínimo, texto 13px en mayúsculas con +0.14em.
- **Primary (solid):** tinta de botón (#3A2A2E) con texto cloud; hover a wine-panel. En el ancla borgoña invierte a oro de borgoña con texto wine-deep.
- **Line:** transparente con borde de tinta; hover invierte a tinta con texto del fondo.
- **Active:** escala .97. **Foco visible:** anillo de 2px en bronce, separado 3px (oro sobre borgoña).
- **Cabecera:** transparente sobre el hero; tras scroll gana fondo cloud al 96% y filete de bronce.

### Cards / Containers
- **Panel:** relleno del panel de la sección, sin radio, sin sombra, padding 32/28px (44px desde 768px). El panel de vestimenta es blush.
- **Filas:** icono bronce + texto separados por filete bronce al 32%; precios a la derecha.
- **Hito final:** panel wine-panel de 88/64px que sale de la columna, texto cloud, fecha en oro.

### Inputs / Fields
- **Style:** fondo field, borde 1px de tinta al 60%, radio 2px, 52px mínimo; etiqueta visible de 15px/500.
- **Focus:** anillo 2px bronce y borde de tinta. **Error:** borde ladrillo con mensaje e icono.
- **Opciones Sí/No:** dos bloques de 56px; la marcada se rellena de tinta de botón con texto cloud.
- **Stepper de acompañantes:** botones de 52px con cifra Bodoni de 1.5rem entre filetes.

### Navigation
Enlaces en mayúsculas de 13px con +0.1em; subrayado de 1px en bronce que crece desde la izquierda en hover y en la sección activa. Monograma "V · H" en Bodoni cursiva. En móvil, menú de pantalla completa sobre cloud con enlaces Bodoni de hasta 2.75rem que entran escalonados.

### Cuenta atrás (componente firma)
Cuatro celdas sobre vidrio claro (cloud al 55%), marco de 1px en bronce al 60%, separadores verticales de bronce al 40% y cifras Bodoni 500. Un único barrido de luz ámbar (38% de ancho, 0.95 s) cruza el marco al cargar y en hover.

### Nuestra historia (componente firma)
Sección salvia con dos lavados radiales suaves (mantequilla y blush). Cada hito lleva un año fantasma en cursiva Bodoni (bronce al 13%, solo escritorio), fecha en cursiva burdeos, título y texto de 44ch. Entrada propia con GSAP: la imagen se revela con clip-path de arriba abajo mientras asienta de escala 1.08 a 1, y el texto sube en cascada. El hito final es el panel borgoña con fecha en oro.

### Galería y lightbox
Botones de imagen sin borde con zoom de 1.04 en hover. Lightbox de pantalla completa con botones cuadrados de 52px y borde dorado, pie con la descripción y el contador.

### Acordeón FAQ
Filas separadas por filetes de bronce; pregunta en Bodoni 500, icono más que gira 45° al abrir, panel con animación de `grid-template-rows`.

## Do's and Don'ts

### Do:
- **Do** dar a cada sección un tema completo mediante su clase (cloud, sage, blush, butter, latte) y alternar sin repetir vecino.
- **Do** reservar el borgoña para el panel de la pedida y el pie, con oro de borgoña como acento sobre él.
- **Do** usar el arco únicamente en fotos de los lugares y en el segundo hito.
- **Do** separar superficies por relleno tonal y filetes de 1px en bronce al 32%.
- **Do** componer Bodoni a peso 500 con opsz 36-48 y por encima de 1.25rem.
- **Do** mantener botones rectos, de 48px y en mayúsculas de 13px.
- **Do** limitar el movimiento a fade y deslizamiento de unos 400ms, con la entrada de Historia como único pasaje elaborado; respetar `prefers-reduced-motion`.

### Don't:
- **Don't** usar ámbar fuera de las chispas del hero y el barrido de la cuenta atrás.
- **Don't** añadir sombras de caja, bordes decorativos ni esquinas redondeadas a paneles y botones.
- **Don't** usar negro ni fondos oscuros fuera de las anclas borgoña.
- **Don't** introducir caligrafía, florales ni dorados de plantilla nupcial.
- **Don't** usar bronce o burdeos como relleno de superficie, ni Work Sans en titulares.
- **Don't** repetir el tratamiento de Historia (años fantasma, clip-path, composiciones mixtas) en otras secciones.
