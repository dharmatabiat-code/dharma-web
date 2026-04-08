# Dharma - Sitio Web de Medicina Bioregenerativa

Sitio web oficial de Dharma, clínica especializada en medicina bioregenerativa en Huamanga, Ayacucho, Perú.

## Descripción del Proyecto

Dharma es un sitio web de una clínica de medicina bioregenerativa que ofrece tratamientos avanzados con células madre, PRP (Plasma Rico en Plaquetas), y terapias regenerativas. El sitio incluye información sobre servicios, beneficios, testimonios de pacientes y formulario de contacto.

### Características

- Diseño responsivo (mobile-first) con Tailwind CSS v4
- Navegación desktop/mobile (NavDesktop/NavMobile)
- Hero/About/Services/Director/Benefits/Comparison/Quote/Stats/Testimonials/Contact/Map sections
- SEO completo (meta/OG/Twitter/Schema.org from src/data/seo.js)
- JSON-LD structured data (Organization/MedicalClinic)
- Custom gold theme (--color-gold-*) + animations (fadeInUp/shimmer/glow)
- Font Awesome icons, Google Fonts (Segoe UI fallback in CSS)

## Tecnologías Utilizadas

- **Framework:** Astro 5.17.1
- **Estilos:** Tailwind CSS 4.2.1 (@tailwindcss/vite)
- **Animaciones:** AOS 2.3.4
- **Iconos:** Font Awesome
- **Scripts:** TypeScript (header.ts/contact-form.ts/testimonial-slider.ts)
- **Idiomas:** Español (es_PE), English alternate

## 📁 Estructura del Proyecto

```
dharma-web/
├── public/
│   ├── 1.jpeg
│   ├── fondo.jpg
│   ├── ICONO.png
│   ├── MEDIC.jpg
│   ├── robots.txt
│   ├── images/
│   │   ├── beneficios/
│   │   │   ├── 1.jpeg
│   │   │   └── 2.png
│   │   └── services/
│   │       ├── antiaging.jpg
│   │       ├── celulas-madre.jpg
│   │       ├── esteticos.jpg
│   │       ├── medicina-regenerativa.jpg
│   │       ├── prp.jpg
│   │       └── terapias-regeneracion.jpg
│   └── logos/
│       ├── 11.jpeg
│       ├── 22.jpeg
│       ├── icono.png
│       ├── logo-corto.jpeg
│       ├── logo-largo.jpeg
│       └── logo-largo.png
│

├── src/
│   ├── assets/                      # Recursos assets
│   │   ├── astro.svg                # Logo Astro
│   │   └── background.svg           # Fondo SVG
│   │
├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── NavDesktop.astro
│   │   ├── NavMobile.astro
│   │   ├── footer/
│   │   │   ├── FooterContact.astro
│   │   │   ├── FooterLogo.astro
│   │   │   ├── FooterMenu.astro
│   │   │   └── FooterSocial.astro
│   │   ├── index/
│   │   │   ├── AboutSection.astro
│   │   │   ├── BenefitsSection.astro
│   │   │   ├── ComparisonSection.astro
│   │   │   ├── ContactSection.astro
│   │   │   ├── HeroSection.astro
│   │   │   ├── MapSection.astro
│   │   │   ├── MedicalDirectorSection.astro
│   │   │   ├── QuoteSection.astro
│   │   │   ├── ServicesSection.astro
│   │   │   ├── StatisticsSection.astro
│   │   │   └── TestimonialsSection.astro
│   │   └── legales/
│   │       ├── FooterLegales.astro
│   │       └── HeaderLegales.astro
│   │

│   ├── data/                        # Datos configurables
│   │   ├── company.js               # Datos de la empresa
│   │   ├── seo.js                   # Configuración SEO
│   │   ├── services.js              # Servicios ofrecidos
│   │   └── testimonials.js          # Testimonios y FAQ
│   │
├── layouts/
│   │   ├── Layout.astro
│   │   └── LayoutLegales.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── legales/
│   │       ├── politica-de-privacidad.astro
│   │       └── terminos-y-condiciones.astro
│   ├── scripts/
│   │   ├── contact-form.ts
│   │   ├── header.ts
│   │   └── testimonial-slider.ts
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```


## Configuración de Datos

### Datos de la Empresa (`src/data/company.js`)

Contiene la información de contacto, dirección y estadísticas de la clínica:

```javascript
export const company = {
  name: "Dharma",
  tagline: "Medicina Bioregenerativa de Vanguardia",
  description: "Líderes en medicina bioregenerativa. Tratamientos con células madre, PRP y terapias regenerativas para restaurar tu salud desde la raíz.",
  address: {
    street: "Av. Principal 123",
    colony: "San Juan Baustista",
    city: "Huamanga",
    state: "Ayacucho",
    zip: "00000",
    country: "Perú",
    mapLink: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d971.2106238429621!2d-74.204524!3d-13.172329!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDEwJzIwLjIiUyA3NMKwMTInMTYuOSJX!5e0!3m2!1ses-419!2spe!4v1775487644312!5m2!1ses-419!2spe"
  },
  contact: {
    phone: "+51 997 307 782",
    email: "info@dharma.co",
    whatsapp: "+51 997 307 782",
    linkWhatsapp: "https://wa.me/51997307782"
  },
  hours: {
    mondayToSaturday: {
      open: "09:00",
      close: "20:00"
    },
    sunday: {
      note: "Solo citas programadas"
    }
  },
  social: {
    facebook: "https://facebook.com/dharma",
    instagram: "https://instagram.com/dharma",
    twitter: "https://twitter.com/dharma",
    tiktok: "https://tiktok.com/@dharma",
    youtube: "https://youtube.com/dharma",
    linkedin: "https://linkedin.com/company/dharma"
  },
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
Paleta de colores dorada definida en `src/styles/global.css` (Tailwind @theme):


@theme {
  /* Gold Color Palette */
  --color-gold-50: #fdfaf3;
  --color-gold-100: #f9f0d9;
  --color-gold-200: #f2e0a8;
  --color-gold-300: #e9c96b;
  --color-gold-400: #dfb33d;
  --color-gold-500: #d4a52a;
  --color-gold-600: #b8922a;
  --color-gold-700: #947a32;
  --color-gold-800: #756336;
  --color-gold-900: #5c4d2e;
  
  /* Primary Gold */
  --color-primary-gold: #d4a52a;
  --color-primary-gold-light: #e9c96b;
  --color-primary-gold-dark: #b8922a;
}

### Imágenes

Imágenes principales en `public/`:
- Hero/services: `1.jpeg`, `fondo.jpg`, `MEDIC.jpg`, `ICONO.png`
- Services (match src/data/services.js): `public/images/services/antiaging.jpg`, `celulas-madre.jpg`, `esteticos.jpg`, `medicina-regenerativa.jpg`, `prp.jpg`, `terapias-regeneracion.jpg`
- Beneficios: `public/images/beneficios/1.jpeg`, `2.png`
- Logos: `public/logos/logo-largo.png` (main/SEO), `logo-largo.jpeg`, `logo-corto.jpeg`, `icono.png`, `11.jpeg`, `22.jpeg`


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

*Documentación actualizada para Dharma Web v0.0.1 - Jhon QP*

