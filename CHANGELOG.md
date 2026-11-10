## v1.1.0

**FEATURE**

> - Mostrar la cantidad de resultados y permitir limpiar filtros cuando no haya coincidencias.
> - Presentar preguntas frecuentes con un acordeón compacto y enlaces directos a respuestas.
> - Destacar la sección activa del menú de navegación.
> - Incorporar portadas optimizadas de 320 y 640 px para tarjetas y variantes relacionadas.
> - Agregar títulos, descripciones, URLs canónicas y datos estructurados con el nombre de la marca.
> - Generar `sitemap.xml` y `robots.txt` para los buscadores.
> - Adaptar imágenes y contenedores de catálogo, ficha y mantenimiento al espacio disponible.
> - Reemplazar las flechas de portada y categorías por iconos de Material UI.
> - Uniformar la presentación de recomendaciones, enlaces y medios de pago en Ayuda.

**BUGFIX**

> - Corregir la compilación estática al utilizar `useSearchParams` mediante límites de Suspense.
> - Validar la existencia del modelo antes de acceder a sus propiedades.
> - Corregir el conflicto de exportación al acceder a fichas con IDs inexistentes durante el desarrollo.
> - Evitar desincronizaciones entre los filtros de la URL y los resultados del catálogo.
> - Marcar los filtros de colores agrupados cuando alguno de sus colores esté seleccionado.
> - Reemplazar atributos JSX `class` por `className` en preguntas frecuentes y buscador.
> - Completar textos alternativos de retratos y de la imagen de Saphir, e identificar los logos de Visa y Mastercard.
> - Usar botones accesibles en la galería y excluir las diapositivas ocultas del recorrido de foco.
> - Retirar el `aria-hidden` redundante de “Volver arriba” que generaba advertencias al conservar el foco.
> - Corregir el tamaño de los chevrons dentro de los controles circulares del carrusel de modelos.
> - Evitar la franja blanca posterior a la sección azul de Nuestra historia.
> - Retirar el `main` anidado de Acerca de para evitar estructura y espaciado duplicados.

**CHORE**

> - Configurar la exportación estática para publicar en cPanel y la previsualización con `serve` en el puerto 8080.
> - Automatizar la generación de portadas mediante `sharp` antes de iniciar desarrollo o compilar, omitiendo las copias actualizadas.
> - Centralizar la lógica de los catálogos de calzado en `CatalogoModelos`.
> - Calcular resultados desde los datos y filtros sin almacenar estado redundante.
> - Pasar el producto directamente a `Article` para evitar búsquedas repetidas por ID.
> - Mantener el layout principal como componente servidor y aislar la inicialización de Bootstrap.
> - Declarar los metadatos con las APIs de Next.js y configurar el documento en español.
> - Usar el logo como contenido del H1 de inicio en lugar de un título oculto.
> - Renombrar `CardPreguntas` a `AccordionPreguntas` y aislar sus estilos en un módulo CSS.
> - Crear `MiembroHistoria` con nombre, rol, descripción, imagen y alineación; adaptar también los integrantes comentados sin habilitarlos.
> - Separar los estilos móviles en `globalsResponsive.css` y centralizar su carga en el layout.
> - Convertir los tamaños de fuente propios a `rem`.
> - Unificar el espacio final mediante padding de 5rem en escritorio y 3rem en móvil.
> - Excluir del índice las páginas de agradecimiento y de trabajo en construcción.
> - Eliminar `flecha-index.png`, `arrow.svg` y la importación duplicada de estilos desde `FadeInAnimation`.

## v1.0.0

**FEATURE**

> - Incorporar inicio con portada de video y logo de Calzados Correa.
> - Incorporar catálogos de calzado y cinturones con búsqueda, filtros y carga progresiva de 32 modelos.
> - Incorporar fichas con galería, ampliación de imágenes, características y variantes de otros colores.
> - Incorporar Nuestra historia con presentación de los integrantes de la zapatería.
> - Incorporar la guía de mantenimiento del calzado.
> - Incorporar preguntas frecuentes con apertura de respuestas mediante enlaces directos.
> - Incorporar formulario de contacto con envío a `/send.php` del hosting.
> - Incorporar botón para volver al inicio de la página.

**CHORE**

> - Configurar el proyecto Next.js y React con exportación estática para cPanel.
