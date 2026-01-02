# 🌟 Mi Marca Personal - Sitio Web Profesional

> Página web personal responsiva y moderna para estudiante PUCP, economista, emprendedor digital  y creador de ebooks.

## 📋 Descripción

Sitio web profesional creado con HTML/CSS puro, sin frameworks. Diseño moderno, responsivo (mobile-first), con animaciones suaves y una experiencia de usuario excepcional.

**Características principales:**
- ✨ Hero section con gradiente y efecto parallax
- 📚 Sección de anuncio de ebook protagonista
- 👨‍💻 Sección "Sobre Mí" con historia y habilidades
- 🛍️ Galería de productos digitales con cards animadas
- 📧 Formulario de contacto funcional
- 🔗 Enlaces a redes sociales (Instagram, LinkedIn, WhatsApp, Email)
- 📱 Responsive design (funciona en todos los dispositivos)
- 🎨 Gradientes modernos (azul → morado → naranja)
- ⚡ JavaScript vanilla para interactividad
- 🎭 Transiciones y animaciones suaves

## 🚀 Características Técnicas

### HTML
- Estructura semántica y optimizada para SEO
- Meta tags completos (description, keywords, author)
- Google Fonts integradas (Poppins)
- Font Awesome para iconos

### CSS
- Variables CSS para fácil personalización
- Flexbox y CSS Grid
- Animations y Keyframes
- Media queries responsive
- Gradientes lineales y radiales
- Backdrop filters (blur effects)
- Sombras dinámicas

### JavaScript
- Smooth scroll navigation
- Active nav link indicator
- Intersection Observer API para animaciones
- Mobile menu toggle
- Parallax effect
- Form submission handling

## 📁 Estructura de Archivos

```
marca-personal-web/
├── index.html       # HTML principal
├── styles.css       # Estilos CSS
├── script.js        # Interactividad JavaScript
└── README.md        # Este archivo
```

## 🎨 Secciones

### 1. **Navegación (Navbar)**
- Logo con gradient
- Enlaces de navegación con hover effects
- Menu responsivo
- Posición fixed con blur background

### 2. **Hero Section**
- Título grande y llamativo
- Descripción personal
- Foto de perfil con efecto hover
- Botones CTA (Call To Action)
- Scroll indicator animado

### 3. **Anuncio de Ebook**
- Badge "NUEVO" con gradient
- Portada del libro con efecto shine
- Descripción y características
- Botón "Comprar en Hotmart"

### 4. **Sobre Mí**
- Historia personal
- Skills con badges
- Foto banner
- Información sobre estudios y emprendimiento

### 5. **Productos Digitales**
- Grid de 3 productos
- Cards con precios
- Botones de compra
- Hover effects elegantes

### 6. **Contacto**
- Grid de iconos de redes sociales
- Enlaces directos (Instagram, LinkedIn, Email, WhatsApp)
- Formulario de contacto
- Diseño atractivo con gradients

### 7. **Footer**
- Copyright
- Links de privacidad y términos
- Bandera de Perú

## 🎯 Personalización

### Cambiar colores principales
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary: #2563eb;      /* Azul principal */
    --secondary: #7c3aed;    /* Morado */
    --accent: #f97316;       /* Naranja */
}
```

### Actualizar información personal
- Reemplaza textos en `index.html`
- Actualiza links de redes sociales
- Cambia email y WhatsApp
- Actualiza URLs de Hotmart

### Agregar tus imágenes
- Reemplaza URLs de placeholder en:
  - Foto de perfil
  - Portada del libro
  - Banner personal

## 💾 Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/juancito222444-beep/marca-personal-web.git
```

2. **Abrir en el navegador:**
```bash
# Opción 1: Abrir directamente index.html
open index.html

# Opción 2: Usar un servidor local (Python)
python -m http.server 8000
# Luego visita: http://localhost:8000
```

## 🌐 GitHub Pages

El sitio está listo para ser desplegado en **GitHub Pages**:

1. En Settings → Pages
2. Selecciona `main` branch
3. Espera a que se publique
4. Tu sitio estará disponible en: `https://juancito222444-beep.github.io/marca-personal-web`

## 📊 Performance

- ⚡ Carga rápida (HTML/CSS puro, sin frameworks)
- 📱 Responsive en todos los dispositivos
- ♿ Accesible (semantic HTML, ARIA labels)
- 🔍 SEO optimizado

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables
- **Vanilla JavaScript** - Sin dependencias
- **Google Fonts** - Tipografía profesional
- **Font Awesome** - Iconos SVG

## 📱 Responsive Breakpoints

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** < 768px

## 🔐 SEO

- Meta description
- Meta keywords
- Semantic HTML
- Open Graph tags (listos para agregar)
- Schema markup (listos para agregar)

## 💡 Tips para mejorar

1. Agregar más secciones:
   - Blog/artículos
   - Testimonios
   - FAQ
   - Galería de proyectos

2. Funcionalidades avanzadas:
   - Modo oscuro/claro
   - Idiomas múltiples
   - Búsqueda
   - Comentarios

3. Integraciones:
   - Google Analytics
   - Formspree para formulario
   - Disqus para comentarios

## 📞 Soporte

Para cambios, mejoras o reportar bugs:
- Abre un Issue en GitHub
- Haz un Pull Request
- Contacta directamente

## 📄 Licencia

MIT License - Libre para usar y modificar

---

**Hecho con ❤️ desde Perú 🇵🇪**

*Estudiante de Economía | PUCP | Emprendedor Digital*


---

## 🎨 GUÍA DE EDICIÓN - PERSONALIZA TU WEB FÁCILMENTE

### 🚀 CÓMO EDITAR

Todos los textos, fotos y personalizaciones tienen **comentarios claros** en el código para que sea fácil.

### 📝 QUÉ EDITAR EN CADA ARCHIVO:

#### **index.html** (Contenido y estructura)
```
Busca estos comentarios y personaliza:
- "EDITA AQUÍ: Tu nombre/marca" → Tu marca personal
- "EDITA AQUÍ: Tu foto de perfil" → Agrega tu foto
- "EDITA AQUÍ: Título principal" → Tu presentación
- "EDITA AQUÍ: Tu historia/bio" → Sobre ti
- "EDITA AQUÍ: Tus habilidades" → Skills
- "EDITA AQUÍ: PRODUCTO" → Tus productos/ebooks
- "EDITA AQUÍ: TESTIMONIO" → Testimonios
- "EDITA AQUÍ: REDES SOCIALES" → Tus links
```

#### **styles.css** (Colores y diseño)
```
Busca :root {
  --primary: #2563eb;      👈 Color principal (azul)
  --secondary: #7c3aed;    👈 Color secundario (púrpura)
  --accent: #f97316;       👈 Color destacado (naranja)
}
```

#### **script.js** (Funcionalidad)
Puedes dejar como está, tiene animaciones automáticas.

### 🔧 PASOS PARA PERSONALIZAR:

1. **Abre el archivo en GitHub:**
   - Ve a `index.html` → Click el lápiz (🔊)

2. **Busca y reemplaza:**
   - `ctrl+f` (buscar) → "EDITA AQUÍ"
   - Cambia el contenido
   - Busca el siguiente comentario

3. **Guarda los cambios:**
   - "Commit changes"
   - Tu web se actualiza en 1-2 minutos

### 🖌️ EJEMPLOS RÁPIDOS:

**Cambiar tu nombre:**
```html
<!-- BUSCA ESTO: -->
<span class="logo-text">Mi Marca</span> <!-- 👈 CAMBIA ESTO -->
<!-- ESCRIBE: -->
<span class="logo-text">Juan Pérez</span>
```

**Cambiar tu foto:**
```html
<!-- BUSCA ESTO: -->
<img src="https://via.placeholder.com/400x400?text=Tu+Foto" ...> <!-- 👈 REEMPLAZA CON TU FOTO -->
<!-- ESCRIBE LA URL DE TU FOTO: -->
<img src="https://mi-sitio.com/foto.jpg" ...>
```

**Cambiar colores:**
```css
/* Abre styles.css y busca :root { */
--primary: #2563eb;   /* Cambia a: #FF0000 para rojo, #00FF00 para verde, etc */
```

### 📧 NECESITAS AYUDA?

- Todos los comentarios están en el código
- Busca "EDITA AQUÍ" para encontrar qué cambiar
- Los emojis 👈 te muestran exactamente dónde hacer cambios

---
