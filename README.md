# Calzados Correa

Sitio web de Calzados Correa con catálogo, fichas de productos, historia de la zapatería, mantenimiento del calzado, preguntas frecuentes y contacto.

Desarrollado con Next.js 14 y React 18. Utiliza Bootstrap, React Bootstrap, Material UI y React Slick. Se publica como archivos estáticos en cPanel, sin un servidor de Next.js en el hosting.

## Instalación

Requiere Node.js 20.9.0 o superior por la versión instalada de `sharp`, y npm.

Desde la raíz del proyecto:

```bash
npm ci
```

## Comandos

| Comando | Función |
| --- | --- |
| `npm run dev` | Genera las portadas e inicia el desarrollo en `http://localhost:3000`. |
| `npm run images:cards` | Genera o actualiza las portadas pequeñas. |
| `npm run video:hero` | Regenera los videos optimizados y su imagen de portada; requiere FFmpeg. |
| `npm run lint` | Revisa el código con ESLint. |
| `npm run build` | Genera las portadas y exporta producción a `out/`. |
| `npm run start` | Sirve el contenido existente de `out/` en `http://localhost:8080`. |

`start` requiere ejecutar primero `build`: no compila ni incorpora cambios posteriores. Utiliza `serve` porque `next start` no admite `output: "export"`.

`next.config.mjs` desactiva la exportación estática durante el desarrollo y mantiene `output: "export"` y `trailingSlash: true` para producción.

## Estructura

```text
src/
  app/
    (main)/                    Inicio
    (allpages)/                Catálogo, fichas y páginas informativas
    layout.jsx                 Estructura común y estilos globales
    robots.js                  Generación de robots.txt
    sitemap.js                 Generación del sitemap
  components/                  Componentes de interfaz
  data/
    data-modelos.js            Productos y rutas de imágenes
    data-preguntas.js          Preguntas frecuentes y respuestas
    filters.js                 Opciones de filtros
  lib/
    globals.css                Estilos generales
    globalsResponsive.css      Ajustes de 300 a 767 px
public/                        Imágenes, iconos, videos y otros archivos públicos
scripts/
  generate-card-images.mjs      Generación de portadas optimizadas
```

`node_modules/`, `.next/`, `out/` y `public/images/cards/` son directorios generados y están excluidos de Git.

## Catálogo y productos

`CatalogoModelos` comparte el listado entre Todos los modelos, Ready to Wear, Made to Order y Bespoke. Cinturones tiene su propia página y reutiliza `Article` para las tarjetas.

- Los listados muestran inicialmente hasta 32 productos y permiten cargar más.
- Los filtros estructurados se leen de la URL. El texto de búsqueda y la cantidad visible se administran localmente.
- `Article` recibe el producto mediante `modelo`, sin buscarlo de nuevo por ID.
- Las tarjetas usan portadas pequeñas; las fichas y galerías conservan los originales. “Otros colores” usa la versión de 320 px.

Para agregar o modificar un producto:

1. Editar `src/data/data-modelos.js`, manteniendo un `id` único y rutas válidas.
2. Guardar sus fotos en `public/images/`. Las portadas actuales usan WebP; mantener ese formato para el generador existente.
3. Revisar `src/data/filters.js` si se incorporan opciones nuevas de filtrado.
4. Ejecutar `npm run images:cards` si el servidor de desarrollo ya estaba iniciado.
5. Ejecutar un nuevo build antes de publicar: las rutas de las fichas se generan desde los IDs del catálogo.

Un ID inexistente no genera una ficha. En producción, la presentación de la página 404 para URLs desconocidas también depende del hosting.

### Portadas optimizadas

Los pasos `predev` y `prebuild` ejecutan `scripts/generate-card-images.mjs`. Utiliza `sharp` para generar versiones WebP de 320 y 640 px de ancho de cada `previewImage`, conservando la proporción y sin ampliar originales más pequeños.

Las copias quedan en `public/images/cards/320/` y `public/images/cards/640/`, respetando subcarpetas y nombres. Las tarjetas ofrecen ambos tamaños con `srcSet` y `sizes`.

El script compara las fechas de modificación de originales, copias y del propio script para omitir archivos actualizados. Al cambiar el script se regeneran las copias. No se mantiene un archivo de dimensiones ni se convierten imágenes en el navegador o en cPanel.

## Componentes de contenido

- `AccordionPreguntas`: muestra las respuestas de `data-preguntas.js`. Admite enlaces como `/ayuda/?open=reparaciones`. Sus estilos están en `AccordionPreguntas.module.css`.
- `MantenimientoSteps`: recibe `titulo`, `numero`, `texto`, `imagen` y `alineacion`.
- `MiembroHistoria`: recibe `nombre`, `rol`, `descripcion`, `imagen` y `alineacion`. En este componente, `left` coloca la foto a la izquierda y `right` a la derecha en escritorio; en móvil los elementos se apilan.

Los integrantes comentados en Nuestra historia permanecen ocultos. Antes de habilitarlos, comprobar que existan sus imágenes.

## Video de inicio

`HeaderHome` conserva el contenido de marca en el servidor y utiliza `VideoPortada` para seleccionar el video en el navegador. El HTML inicial contiene la imagen `public/images/home/portada-video.webp`, sin una fuente de video asignada.

Al iniciar, se elige una sola versión según el ancho de pantalla: `portada-mobile.mp4` (432 × 768, recorte central vertical) hasta 767 px, o `portada-desktop.mp4` (1280 × 720). No se cambia de archivo al rotar o redimensionar para evitar otra descarga. Ambas versiones son H.264 sin audio, con `faststart`.

Cuando se detecta reducción de movimiento o `navigator.connection.saveData`, se muestra únicamente la portada. Si esas preferencias cambian durante la visita, se actualiza el estado del video. La detección de ahorro de datos depende del soporte del navegador; no identifica por sí sola todas las conexiones celulares. Si el video falla, se vuelve a la imagen estática. La reproducción automática sigue dependiendo de las políticas del navegador.

Los originales `mantenimiento.mp4` y `mantenimiento.webm` se conservan. Para regenerar las versiones después de reemplazar el MP4 original, instalar FFmpeg en la computadora de desarrollo y ejecutar:

```bash
npm run video:hero
```

Si FFmpeg no está en el PATH, pasar la ruta de su ejecutable:

```powershell
npm run video:hero -- "C:\herramientas\ffmpeg\bin\ffmpeg.exe"
```

También se admite la variable `FFMPEG_PATH`. Esta conversión es manual: no se ejecuta en cada build. Los dos MP4 optimizados y el WebP se guardan en `public/`, se versionan y se incluyen en `out/` al compilar. FFmpeg no es necesario para visitar la web ni para servirla en cPanel.

## Estilos y adaptación

El layout principal importa primero `globals.css` y después `globalsResponsive.css`. Los estilos globales se cargan desde ese punto; algunos componentes tienen estilos propios, como el módulo CSS del acordeón.

- Los tamaños de fuente definidos por el proyecto utilizan `rem`.
- En escritorio, los espacios laterales dependen de cada contenedor.
- Entre 300 y 767 px, el `main` general ocupa el 90 % y agrega `0.5rem` de padding lateral.
- En la ficha móvil, el `main` ocupa el 100 %: textos e imagen principal conservan espacio lateral, mientras las miniaturas y características pueden desplazarse hasta los bordes. El espacio interior se define con `--model-content-gutter`.
- El espacio final común usa `--page-end-space`: 5rem en escritorio y 3rem en móvil. Cuando la pantalla termina con `.blue-section`, se aplica dentro de esa sección para evitar una franja blanca antes del footer.

Al modificar tamaños o distribución, revisar celular, escritorio y zoom del navegador. Un build correcto no sustituye una comprobación visual ni certifica el comportamiento con zoom.

## Indexación en Google

Los títulos, descripciones y URLs canónicas utilizan la API de metadata de Next.js. Inicio incluye datos estructurados `WebSite` con el nombre Calzados Correa.

El build exporta `sitemap.xml` y `robots.txt`. Las URLs canónicas y el sitemap usan `https://calzadoscorrea.com.ar/`; las canónicas de los catálogos omiten los parámetros de filtros. El sitemap incorpora las fichas de `data-modelos.js`.

Las páginas de agradecimiento y de trabajo en construcción tienen `noindex` y no se incluyen en el sitemap. Al completar la página de nuestro trabajo, quitar esa restricción y agregar su ruta al sitemap.

Después de publicar, enviar `https://calzadoscorrea.com.ar/sitemap.xml` en Google Search Console e inspeccionar inicio para solicitar su indexación. Estos ajustes no garantizan posiciones ni una presentación específica en los resultados.

## Publicación en cPanel

1. Ejecutar `npm run lint` y `npm run build`.
2. Revisar el resultado con `npm run start` en `http://localhost:8080`.
3. Subir **el contenido completo de `out/`** a la carpeta pública del dominio, incluyendo `_next/`, `images/`, `video/`, `robots.txt`, `sitemap.xml` y las carpetas de las páginas.
4. Comprobar inicio, categorías, una ficha, navegación directa a rutas internas y una URL inexistente en el hosting.

No se necesita subir `node_modules/` ni ejecutar `serve` o Next.js en cPanel. `images/cards/` forma parte de la exportación y debe publicarse junto con los originales.

### Formulario de contacto

`ContactForm` envía el formulario mediante `POST` a `/send.php`. Ese endpoint no está incluido en este repositorio: debe existir y estar configurado en el hosting. Ni `npm run dev` ni `serve` ejecutan PHP. Validar el envío real en un entorno con ese servicio disponible.

## Comprobaciones antes de publicar

- Filtros, búsqueda, estado sin resultados y carga de más modelos.
- Galería, miniaturas, modal y navegación por teclado.
- Desplazamiento de características y miniaturas en móvil.
- Acordeón y enlaces directos a respuestas.
- Legibilidad y ausencia de contenido recortado con zoom.
- Envío de contacto, rutas internas y respuesta 404 en cPanel.

El build puede mostrar advertencias por el uso de `<img>` y por Browserslist desactualizado. Distinguirlas de errores de compilación; no desactivar reglas de lint de forma general para ocultarlas.

## Versionado

La versión base **v1.0.0** describe la web anterior a las mejoras del 8 de noviembre de 2026. Los cambios de ese día se agrupan en **v1.1.0**; la optimización del video y los ajustes posteriores de espaciado móvil se registran en **v1.2.0** en [CHANGELOG.md](CHANGELOG.md). Una versión registrada no confirma su despliegue en cPanel.

Cada nueva versión se agrega al principio del changelog con un encabezado como `## v1.0.1`. Sus cambios se agrupan bajo **FEATURE**, **BUGFIX** y **CHORE**, usando listas dentro de bloques de cita. Incluir únicamente las categorías que tengan cambios y mantener sincronizados `package.json` y `package-lock.json` con la versión correspondiente.

- `v1.0.1`: correcciones, ajustes de estilo o mantenimiento compatibles.
- `v1.1.0`: funcionalidades nuevas compatibles.
- `v2.0.0`: cambios incompatibles en rutas, contratos o configuración de integración.

Una versión puede agrupar varios cambios; no es necesario generar una versión por cada edición de un archivo.
