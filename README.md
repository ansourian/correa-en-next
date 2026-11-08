## Portadas del catálogo

`npm run dev` y `npm run build` generan automáticamente versiones WebP de 320 y 640 píxeles de ancho de las portadas definidas en `src/data/data-modelos.js`. También se pueden generar con `npm run images:cards`.

Las copias se guardan en `public/images/cards/` y se incluyen en `out` al compilar. Los originales se conservan para las fichas y galerías. Se omiten las copias que ya están actualizadas; al cambiar el script se regeneran. No se mantiene ningún archivo de dimensiones.

Después de agregar o reemplazar una portada durante el desarrollo, ejecutar `npm run images:cards` para actualizar las copias. Para cPanel, subir el contenido completo de `out`, incluida la carpeta `images/cards`.
