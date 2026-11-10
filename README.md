# PORTAFOLIO PERSONAL PREMIUM — Gedeon Miguel Huarcaya Gomez

## Abrir la página
1. Extrae el archivo ZIP.
2. Abre la carpeta en Visual Studio Code.
3. Abre `index.html` en Chrome o usa la extensión Live Server.

## Personalización ANTES de publicar
- `index.html`: edita autobiografía, formación, intereses, habilidades y proyectos. No publiques información personal sensible.
- `script.js`: escribe tu correo público en `const CONFIG = { email: "" };`. Sin él, el formulario muestra una advertencia en lugar de fingir que envía mensajes.
- Reemplaza el monograma GM por una foto solo si lo deseas.
- Revisa que la dirección de Andes Delivery siga siendo correcta.
- La fuente usa Google Fonts, pero la página funciona sin conexión con fuentes de respaldo.

## Funciones incluidas
Diseño responsive, menú móvil, modo claro/oscuro con preferencia guardada, animaciones de entrada, barra de lectura, máquina de escribir, tarjeta 3D, filtros de proyectos y habilidades, ventana modal, historia desplegable, botón volver arriba y formulario `mailto:` (requiere configurar correo).

## Publicación gratuita
- GitHub Pages: crea un repositorio público, sube los archivos de esta carpeta a la raíz y activa Settings > Pages > Deploy from a branch > main / (root).
- Netlify: Add new project > Deploy manually, arrastra la carpeta con `index.html` en la raíz; o importa desde GitHub.
- Vercel: Add New > Project, importa el repositorio de GitHub; framework Other, sin comando de build y directorio raíz.
- Firebase: instala Node.js y Firebase CLI; ejecuta `firebase login`, `firebase init hosting` (directorio público `.` y single-page app `No`; no sobrescribas index.html) y `firebase deploy --only hosting`. Para evitar desplegar archivos de configuración innecesarios, es preferible copiar `index.html`, `style.css`, `script.js` y `favicon.svg` a una carpeta `public` y seleccionarla durante la inicialización.

Nota: Los nombres de menús pueden cambiar. Los cuatro servicios alojan la MISMA página; no es necesario reescribirla cuatro veces.
