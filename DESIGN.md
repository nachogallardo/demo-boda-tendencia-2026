---
name: Valeria & Hugo
description: Invitación de boda editorial de lujo discreto; casi todo es silencio y la riqueza se concentra en Nuestra historia.
colors:
  cloud: "#F6F3EC"
  cloud-deep: "#EDE7DA"
  forest: "#1F3328"
  forest-soft: "#46564C"
  mocha: "#8A6652"
  mocha-deep: "#6E4F3D"
  champagne: "#E3D2BE"
  silver: "#C3C3C0"
  graphite: "#4F5551"
  error-brick: "#8B2E22"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(3.75rem, 17vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.015em"
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
    lineHeight: 1.65
    letterSpacing: "0.14em"
rounded:
  none: "0"
  sm: "2px"
  arch: "999px 999px 0 0"
  pill: "999px"
spacing:
  section-mobile: "96px"
  section-desktop: "144px"
  gutter-mobile: "24px"
  gutter-desktop: "40px"
  panel: "44px"
  stack-lg: "88px"
components:
  button-solid:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.cloud}"
    rounded: "{rounded.none}"
    typography: "{typography.label}"
    padding: "0 1.6rem"
    height: "48px"
  button-solid-hover:
    backgroundColor: "{colors.forest-soft}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "{rounded.none}"
    typography: "{typography.label}"
    padding: "0 1.6rem"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.cloud}"
  button-light:
    backgroundColor: "{colors.cloud}"
    textColor: "{colors.forest}"
    rounded: "{rounded.none}"
    typography: "{typography.label}"
    height: "48px"
  panel:
    backgroundColor: "{colors.cloud-deep}"
    textColor: "{colors.forest}"
    rounded: "{rounded.none}"
    padding: "44px"
  field:
    backgroundColor: "{colors.cloud}"
    textColor: "{colors.forest}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
    height: "52px"
  choice-selected:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.cloud}"
    height: "56px"
  hero-image:
    rounded: "{rounded.arch}"
  historia-final-panel:
    backgroundColor: "{colors.mocha}"
    textColor: "{colors.cloud}"
    padding: "88px 64px"
---

# Design System: Valeria & Hugo

## Overview

**Creative North Star: "El claustro en silencio"**

Una invitación que se comporta como una publicación editorial de lujo: lienzo cálido casi vacío, Bodoni enorme, mucho aire y un solo pasaje rico. El lienzo es Cloud Dancer; la masa oscura es verde bosque; el mocha aparece como panel cálido; la plata existe solo como filo fino. La forma recurrente es el arco de claustro, el único contorno de imagen que no es rectangular.

La contención es la norma y la riqueza es una excepción con dueño: Nuestra historia concentra la masa de verde bosque, los numerales gigantes en cursiva, las composiciones de imagen mixtas y su propia entrada animada. El resto de secciones (La boda, Información, FAQ, Contacto) se limita a tipografía, filetes finos y fondos tonales.

Rechaza la plantilla nupcial floral con caligrafía y dorados, y las cuadrículas de tarjetas con sombra. La profundidad se logra con cambio de fondo, no con sombras.

**Key Characteristics:**
- Lienzo Cloud Dancer con una variante tonal para alternar secciones.
- Bodoni Moda en titulares y cifras, Work Sans en cuerpo y rótulos.
- Esquinas rectas; el arco (cúpula superior) es la única silueta de imagen distinta.
- Sin sombras de caja: capas tonales y filetes de 1px.
- Iconos Phosphor light en línea, en grafito (plata sobre fondos oscuros).
- Movimiento sobrio; el barrido plateado de la cuenta atrás y la entrada de Historia son los momentos indulgentes.

## Colors

Paleta de temporada 2026/27 muy reducida: un lienzo cálido, una masa verde, un acento terroso y un filo metálico.

### Primary
- **Verde bosque** (forest): texto principal sobre cloud, fondo de Nuestra historia, menú móvil y pie, botones sólidos, estado seleccionado de las opciones.

### Secondary
- **Mocha** (mocha): panel cálido del hito final de la historia y color del cursor. Sobre cloud, el texto en acento usa **Mocha profundo** (mocha-deep) por contraste: el "&" del título, el subtítulo de cada lugar y el anillo de foco.

### Tertiary
- **Champagne** (champagne): texto secundario y fechas sobre verde bosque, selección de texto, hover del botón claro, numerales fantasma al 10% de opacidad.

### Neutral
- **Cloud Dancer** (cloud): lienzo de página y de campos.
- **Cloud profundo** (cloud-deep): fondo de secciones alternas (Galería, Regalo, FAQ, Contacto) y paneles de Información; también fondo de mapa y de aviso de fecha límite.
- **Verde suave** (forest-soft): texto secundario, ledes y subtítulos sobre cloud; hover del botón sólido.
- **Plata** (silver): filetes de 1px, marco de la cuenta atrás, bordes de botón sobre oscuro, iconos sobre oscuro. Nunca relleno de superficie.
- **Grafito** (graphite): iconos, etiquetas pequeñas y placeholders.
- **Ladrillo de error** (error-brick): únicamente errores de formulario.

### Named Rules
**The Silver Hairline Rule.** La plata es filo, marco o icono. No rellena paneles ni forma degradados de superficie; los paneles se distinguen por relleno tonal, no por un borde plateado decorativo.

**The One Mass Rule.** El verde bosque como masa grande pertenece a Nuestra historia, al menú móvil y al pie; las demás secciones permanecen sobre cloud o cloud-deep.

**The Contrast Pairing Rule.** Texto de acento sobre cloud = mocha-deep, nunca mocha; texto secundario sobre verde = champagne, nunca plata.

## Typography

**Display Font:** Bodoni Moda (con Didot, Georgia, serif)
**Body Font:** Work Sans (con system-ui, sans-serif)

**Character:** Un Didone de alto contraste, grande y casi sin tracking, frente a una sans neutra de rótulo ancho. La cursiva de Bodoni lleva fechas, el "&", el hashtag y los numerales de la historia.

### Hierarchy
- **Display** (400, clamp(3.75rem, 17vw, 6rem), 0.94): "Valeria / & Hugo" en la portada; segunda línea con sangría de .55em y "&" en cursiva mocha-deep.
- **Headline** (400, clamp(2.5rem, 6vw, 4.5rem), 1.05): títulos de sección (H2).
- **Title** (400, clamp(1.75rem, 3.4vw, 2.25rem) a clamp(2rem, 4.4vw, 3rem), 1.05): títulos de panel y de lugar, hitos (clamp(1.75rem, 4vw, 2.75rem)), preguntas del FAQ (clamp(1.25rem, 3vw, 1.5rem)).
- **Numeral** (400 cursiva, clamp(2.25rem, 6vw, 3.5rem) para la fecha del hito; clamp(11rem, 20vw, 17rem) en escritorio para el año fantasma): fechas y años en Historia, cuenta atrás en Bodoni recto (clamp(2rem, 8vw, 3rem)), hashtag cursiva (clamp(2rem, 8vw, 4.5rem)).
- **Body** (400, 1.0625rem, 1.65): cuerpo; medida 66ch (62ch en FAQ, 44ch en hitos); lede 1.1875rem en forest-soft.
- **Label** (500, 0.8125rem, +0.14em, mayúsculas): botones, enlaces de navegación (+0.1em), cue de scroll; etiquetas de cuenta atrás 0.6875rem.

### Named Rules
**The Didone Scale Rule.** Bodoni va grande o no va: nunca por debajo de 1.25rem. Todo lo pequeño es Work Sans.

**The Lining Numerals Rule.** Cifras de datos (cuenta atrás, teléfonos, IBAN, precios) con `tabular-nums lining-nums`.

## Layout

Columna única centrada de 1240px máx. con gutters de 24px (40px desde 768px). Secciones con 96px de padding vertical (144px desde 1024px) y títulos limitados a 3xl. La portada es una composición dividida en 12 columnas en escritorio (copia columnas 1–7, arco columnas 8–12 a altura casi completa) y en móvil apila la foto arriba y los nombres debajo. La altura de cabecera es 72px (84px en escritorio).

Nuestra historia rompe la rejilla a propósito: eje central de 1px en plata al 45% en escritorio con un punto champagne por hito, e imágenes de proporciones y posiciones distintas (alta cruzando el eje, arco a la derecha, cuadrada grande a la izquierda), con el hito final a ancho completo sobre panel mocha que sale de la columna. El resto de secciones usan rejillas simples (5/7, 4/6, 4/7, 2 columnas) y paneles apilados.

La galería es un carrusel con snap en móvil (78% de ancho, 4:5) y una rejilla asimétrica de 4 columnas con filas de 250px desde 768px. Objetivos táctiles de 44px mínimo (botones 48px, campos 52px, opciones 56px). La cabecera móvil muestra un CTA compacto "Confirmar" (44px) junto al botón de menú.

## Elevation & Depth

Plano por defecto: no hay sombras de caja. La profundidad se logra con capas tonales (cloud, cloud-deep, el beige cálido del panel de vestimenta) y con la masa oscura de Historia. Los paneles se separan por relleno, no por borde. Los filetes de 1px en plata dividen filas, FAQ, teléfonos y cabecera al hacer scroll. La única excepción estructural es el punto champagne del eje de Historia, que lleva un anillo sólido de 6px del color del fondo para "cortar" el eje.

### Named Rules
**The Tonal Depth Rule.** Una superficie se eleva cambiando de fondo (cloud a cloud-deep, o a forest/mocha), nunca añadiendo sombra o borde decorativo.

## Shapes

Esquinas rectas por defecto (0; 2px en campos). La silueta distintiva es el arco de claustro (`999px 999px 0 0`): imagen de portada y segundo hito de Historia, y nada más. Las demás imágenes son rectángulos de proporciones editoriales (4:5, 3:2, 1:1, 4:3). Los botones son rectángulos con borde de 1px, sin pastilla. Los mapas se desaturan con un filtro (`grayscale(.75) sepia(.12)`) para integrarse en la paleta. Las fotos de galería están regradadas a baja saturación.

## Components

### Buttons
- **Shape:** rectángulo recto (0), borde 1px, 48px de alto, texto 13px en mayúsculas con +0.14em.
- **Primary (solid):** fondo verde bosque, texto cloud; hover a forest-soft.
- **Line:** transparente con borde verde; hover invierte a verde con texto cloud.
- **Light / Line-light:** versiones para fondos oscuros (cloud sobre forest; borde plata); hover a champagne o cloud.
- **Active:** escala .97. Foco visible: anillo de 2px mocha-deep (champagne sobre oscuro), separado 3px.
- **Cabecera móvil:** versión compacta de 44px con el texto "Confirmar".

### Cards / Containers
- **Panel:** relleno cloud-deep, sin radio, sin sombra, padding 32/28px (44px desde 768px). El panel de vestimenta usa un beige algo más cálido.
- **Filas:** icono Phosphor light + texto, separadas por filete plata de 1px.
- **Hito final:** panel mocha a ancho de columna, texto cloud, año fantasma al 13%.

### Inputs / Fields
- **Style:** fondo cloud, borde 1px verde al 60%, radio 2px, 52px mínimo. Etiquetas visibles de 15px/500.
- **Focus:** anillo 2px mocha-deep y borde verde. **Error:** borde ladrillo, mensaje con icono. **Disabled:** cloud-deep y borde plata.
- **Opciones Sí/No:** dos bloques de 56px; el marcado se rellena de verde con texto cloud.
- **Stepper de acompañantes:** botones de 52px con cifra Bodoni de 1.5rem entre filetes.

### Navigation
Enlaces en mayúsculas de 13px con +0.1em; subrayado de 1px que crece desde la izquierda en hover y en la sección activa. Cabecera fija transparente que gana fondo cloud y filete plata tras 24px de scroll. En móvil, menú de pantalla completa en verde bosque con enlaces Bodoni de hasta 2.75rem que entran escalonados.

### Cuenta atrás (componente firma)
Cuatro celdas con marco plata de 1px y separadores verticales de 1px; cifras Bodoni, etiquetas de 11px. Un único barrido de brillo plateado cruza el marco al cargar y en hover.

### Nuestra historia (componente firma)
Sección verde con ruido sutil (7%). Cada hito lleva un año gigante en cursiva Bodoni como fantasma de fondo (champagne al 10%), fecha en cursiva champagne, título Bodoni y texto champagne de 44ch. Entrada propia con GSAP: la imagen se revela con clip-path de arriba abajo mientras se asienta de escala 1.08 a 1, y el texto sube en cascada. Es el único pasaje con ese tratamiento.

### Galería y lightbox
Botones de imagen sin borde con zoom de 1.04 en hover; lightbox de pantalla completa con botones cuadrados de 52px y borde plata, pie con la descripción y el contador.

### Acordeón FAQ
Filas separadas por filetes plata; pregunta en Bodoni, icono más que gira 45° al abrir, panel con animación de `grid-template-rows`.

## Do's and Don'ts

### Do:
- **Do** mantener el lienzo en cloud y alternar solo con cloud-deep; la masa verde se reserva para Historia, menú y pie.
- **Do** usar el arco únicamente para la foto de portada y el segundo hito.
- **Do** separar superficies por relleno tonal y filetes de 1px en plata.
- **Do** usar mocha-deep para texto de acento sobre cloud y champagne para texto sobre verde.
- **Do** usar iconos Phosphor light en línea con `currentColor`, en grafito (plata sobre oscuro).
- **Do** mantener botones rectos, de 48px y en mayúsculas de 13px.
- **Do** limitar el movimiento a fade y deslizamiento de 400ms, con la entrada de Historia como único pasaje elaborado; respetar `prefers-reduced-motion`.

### Don't:
- **Don't** usar plata como relleno de panel, fondo o degradado de superficie.
- **Don't** añadir sombras de caja, bordes decorativos plateados o esquinas redondeadas a paneles y botones.
- **Don't** introducir caligrafía, florales ni dorados de plantilla nupcial.
- **Don't** usar Bodoni por debajo de 1.25rem ni Work Sans en titulares.
- **Don't** repetir el tratamiento rico de Historia (años fantasma, clip-path, composiciones mixtas) en otras secciones.
- **Don't** usar mocha (#8A6652) como color de texto sobre cloud.
