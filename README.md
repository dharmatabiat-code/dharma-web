# Dharma - Sitio Web de Medicina Bioregenerativa

Sitio web oficial de Dharma, clínica especializada en medicina bioregenerativa en Huamanga, Ayacucho, Perú.

## 🚀 Descripción del Proyecto

Dharma es un sitio web de una clínica de medicina bioregenerativa que ofrece tratamientos avanzados con células madre, PRP (Plasma Rico en Plaquetas), y terapias regenerativas. El sitio incluye información sobre servicios, beneficios, testimonios de pacientes y formulario de contacto.

### Características

- Diseño responsivo para dispositivos móviles y escritorio
- Navegación con efecto de scroll
- Menú móvil interactivo
- SEO optimizado con meta tags y Schema.org
- JSON-LD para datos estructurados de clínica médica
- Paleta de colores dorada (gold/amber)
- Tipografía: Plus Jakarta Sans

## 🛠️ Tecnologías Utilizadas

- **Framework:** Astro 5.17.1
- **Estilos:** Tailwind CSS 4.2.1
- **Iconos:** Font Awesome 6.4.2
- **Fuentes:** Google Fonts (Plus Jakarta Sans)
- **Idiomas:** Español (principal), Inglés

## 📁 Estructura del Proyecto

```
dharma-web/
├── public/                          # Archivos estáticos
│   ├── 1.jpeg                       # Imagen principal
│   ├── fondo.jpg                    # Imagen de fondo
│   ├── favicon.ico                  # Favicon
│   ├── favicon.svg                  # Favicon SVG
│   ├── ICONO-03.svg                 # Icono alternativo
│   ├── ICONO.png                    # Icono PNG
│   ├── ICONO.svg                    # Icono SVG
│   ├── MEDIC.jpg                    # Imagen médica
│   ├── robots.txt                   # Configuración para buscadores
│   ├── sitemap.xml                 # Mapa del sitio
│   └── logos/                       # Logotipos
│       ├── 1.jpeg
│       ├── 2.jpeg
│       ├── logo-largo.jpeg
│       └── logo-largo.png
│
├── src/
│   ├── assets/                      # Recursos assets
│   │   ├── astro.svg                # Logo Astro
│   │   └── background.svg           # Fondo SVG
│   │
│   ├── components/                  # Componentes reutilizables
│   │   ├── Footer.astro             # Pie de página principal
│   │   ├── Header.astro             # Encabezado con navegación
│   │   ├── Welcome.astro            # Componente de bienvenida
│   │   └── legales/                 # Componentes legales
│   │       ├── FooterLegales.astro
│   │       └── HeaderLegales.astro
│   │
│   ├── data/                        # Datos configurables
│   │   ├── company.js               # Datos de la empresa
│   │   ├── seo.js                   # Configuración SEO
│   │   ├── services.js              # Servicios ofrecidos
│   │   └── testimonials.js          # Testimonios y FAQ
│   │
│   ├── layouts/                     # Layouts base
│   │   ├── Layout.astro             # Layout principal
│   │   └── LayoutLegales.astro      # Layout para páginas legales
│   │
│   ├── pages/                       # Páginas del sitio
│   │   ├── index.astro              # Página principal
│   │   └── legales/                 # Páginas legales
│   │       ├── politica-de-privacidad.astro
│   │       └── terminos-y-condiciones.astro
│   │
│   └── styles/                      # Estilos globales
│       └── global.css               # Variables CSS y estilos globales
│
├── astro.config.mjs                 # Configuración de Astro
├── package.json                     # Dependencias del proyecto
├── tsconfig.json                    # Configuración de TypeScript
└── README.md                        # Este archivo
```

## ⚙️ Configuración de Datos

### Datos de la Empresa (`src/data/company.js`)

Contiene la información de contacto, dirección y estadísticas de la clínica:

```javascript
export const company = {
  name: "Dharma",
  tagline: "Medicina Bioregenerativa de Vanguardia",
  address: {
    street: "Av. Principal 123",
    colony: "San Juan Baustista",
    city: "Huamanga",
    state: "Ayacucho",
    zip: "00000",
    country: "Perú"
  },
  contact: {
    phone: "+51 997 307 782",
    email: "info@dharma.co",
    whatsapp: "+51 997 307 782"
  },
  hours: { /* Horarios de atención */ },
  social: { /* Redes sociales */ },
  stats: {
    patients: "5000+",
    years: "15+",
    satisfaction: "98%",
    treatments: "50+"
  },
  foundingYear: "2009",
  license: "COFEPRIS-2024-001"
};
```

### Configuración SEO (`src/data/seo.js`)

Define meta tags, Open Graph, Twitter Cards y schemas:

- Meta tags (título, descripción, palabras clave)
- Open Graph para redes sociales
- Twitter Cards
- Schema.org para Organization, MedicalClinic, WebSite y FAQPage

### Servicios (`src/data/services.js`)

Lista de servicios ofrecidos:

1. **Terapia con Células Madre** - Regeneración tisular
2. **Plasma Rico en Plaquetas (PRP)** - Tratamiento autólogo
3. **Medicina Regenerativa** - Protocolos personalizados
4. **Terapias de Regeneración** - Tratamientos innovadores
5. **Tratamientos Estéticos** - Procedimientos no invasivos
6. **Medicina Antiaging** - Enfoque de longevidad

## 🎨 Personalización

### Colores

El proyecto utiliza una paleta de colores dorada definida en `src/layouts/Layout.astro`:

```css
:root {
  /* Gold Color Palette */
  --gold-50: #fdfaf3;
  --gold-100: #f9f0d9;
  --gold-200: #f2e0a8;
  --gold-300: #e9c96b;
  --gold-400: #dfb33d;
  --gold-500: #d4a52a;
  --gold-600: #b8922a;
  --gold-700: #947a32;
  --gold-800: #756336;
  --gold-900: #5c4d2e;
  
  /* Primary Gold */
  --primary-gold: #d4a52a;
  --primary-gold-light: #e9c96b;
  --primary-gold-dark: #b8922a;
}
```

### Imágenes

Las imágenes se encuentran en `/public/logos/`:
- `logo-largo.png` - Logotipo principal (usado en Header y Footer)
- `logo-largo.jpeg` - Versión JPEG del logotipo

## 📋 Comandos Disponibles

| Comando | Acción |
|---------|--------|
| `npm install` | Instala las dependencias del proyecto |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Compila el proyecto para producción en `./dist/` |
| `npm run preview` | Previsualiza la versión de producción localmente |
| `npm run astro -- --help` | Muestra ayuda de los comandos de Astro |

## 🔍 SEO y Schema

El sitio incluye optimización SEO completa:

- Meta tags personalizados
- Canonical URLs
- Open Graph para Facebook
- Twitter Cards
- JSON-LD Structured Data:
  - Organization (Organización)
  - MedicalClinic (Clínica Médica)
  - WebSite (Sitio Web)
  - FAQPage (Preguntas Frecuentes)

## 📱 Responsive Design

El sitio está optimizado para:
- **Móvil:** < 768px (menú hamburguesa)
- **Tablet:** 768px - 1024px
- **Escritorio:** > 1024px

## 🧞 Estructura de Componentes

### Layout.astro
Layout principal que incluye:
- Header con navegación
- Footer
- SEO y Schema.org
- Estilos globales
- Variables CSS

### Header.astro
- Logo (con link a inicio)
- Navegación desktop
- Menú móvil con overlay
- Efecto de scroll (fondo transparente a blanco)

### Footer.astro
- Logo y descripción
- Enlaces rápidos
- Información de contacto
- Redes sociales
- Links legales

## 📄 Páginas

### Página Principal (index.astro)
- Hero section
- Acerca de Dharma
- Servicios
- Beneficios
- Testimonios
- Contacto

### Páginas Legales
- `/legales/terminos-y-condiciones`
- `/legales/politica-de-privacidad`

## 🔧 Desarrollo

1. Clonar el repositorio
2. Ejecutar `npm install`
3. Ejecutar `npm run dev` para desarrollo
4. Realizar cambios en los archivos necesarios
5. Ejecutar `npm run build` para producción

## 📝 Notas

- El proyecto usa Tailwind CSS v4 con el plugin `@tailwindcss/vite`
- Las fuentes se cargan desde Google Fonts
- Los iconos vienen de Font Awesome
- Los datos son fácilmente editables desde los archivos en `src/data/`

## 📅 Información de la Clínica

- **Nombre:** Dharma - Medicina Bioregenerativa
- **Ubicación:** Huamanga, Ayacucho, Perú
- **Servicios:** Medicina regenerativa, Células madre, PRP, Antiaging
- **Año de fundación:** 2009

---

*Documentación actualizada para Dharma Web v0.0.1*

