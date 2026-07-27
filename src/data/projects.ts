/**
 * Fuente única de los proyectos de cliente.
 *
 * Las páginas en español e inglés leen de aquí, así que un proyecto nuevo se
 * añade una sola vez y aparece en los dos idiomas. Evita la duplicación que
 * había antes entre /portfolio, /aplicaciones y la home.
 */

export type Locale = "es" | "en";

/**
 * Clave de color de acento. Tailwind no puede resolver clases construidas
 * dinámicamente (`text-${color}`), así que el dato guarda una clave y cada
 * componente la traduce a clases literales que el escáner sí detecta.
 */
export type Accent =
  | "cyan"
  | "pink"
  | "yellow"
  | "emerald"
  | "violet"
  | "purple";

export interface Project {
  slug: string;
  title: string;
  /** Sector o tipo de encargo, mostrado como etiqueta sobre el título. */
  kind: Record<Locale, string>;
  description: Record<Locale, string>;
  /** Qué se resolvió. Se usa en la tarjeta ampliada de /proyectos. */
  outcome: Record<Locale, string>;
  image: string;
  tech: string[];
  link: string;
  /** true si el enlace sale del sitio. */
  external: boolean;
  color: Accent;
  featured: boolean;
}

export const webProjects: Project[] = [
  {
    slug: "maingoo",
    title: "Maingoo",
    kind: { es: "Plataforma SaaS", en: "SaaS platform" },
    description: {
      es: "Gestión inteligente de restaurantes con inteligencia artificial: previsión de demanda y control de inventario.",
      en: "AI-powered restaurant management: demand forecasting and inventory control.",
    },
    outcome: {
      es: "Web de producto y captación para una startup en fase temprana, construida para cargar rápido y escalar con el producto.",
      en: "Product and lead-generation site for an early-stage startup, built to load fast and scale with the product.",
    },
    image: "/maingoo-preview.png",
    tech: ["Astro", "TypeScript", "Tailwind"],
    link: "https://maingoo.tech/",
    external: true,
    color: "cyan",
    featured: true,
  },
  {
    slug: "violeta",
    title: "Violeta Psicología",
    kind: { es: "Web corporativa", en: "Corporate site" },
    description: {
      es: "Consulta de psicología con una identidad serena y un diseño que invita a dar el primer paso.",
      en: "A psychology practice with a calm identity and a design that invites the first step.",
    },
    outcome: {
      es: "Diseño minimalista centrado en una única acción: pedir cita. Sin distracciones ni formularios largos.",
      en: "Minimalist design focused on a single action: booking an appointment. No distractions, no long forms.",
    },
    image: "/violeta-preview.png",
    tech: ["Astro", "Tailwind"],
    link: "https://violetapsicologia.com",
    external: true,
    color: "violet",
    featured: true,
  },
  {
    slug: "mesetair",
    title: "MesetAIR",
    kind: { es: "Reservas online", en: "Online booking" },
    description: {
      es: "Experiencias de vuelo en globo aerostático con sistema de reserva y pago integrado.",
      en: "Hot-air balloon flight experiences with integrated booking and payment.",
    },
    outcome: {
      es: "El cliente pasó de gestionar reservas por teléfono a recibirlas y cobrarlas desde la web.",
      en: "The client went from handling bookings by phone to receiving and charging them straight from the site.",
    },
    image: "/mesetair-preview.png",
    tech: ["WordPress", "Elementor"],
    link: "https://mesetair.com/",
    external: true,
    color: "yellow",
    featured: true,
  },
  {
    slug: "equidae",
    title: "Equidae Psicología",
    kind: { es: "Web corporativa", en: "Corporate site" },
    description: {
      es: "Centro especializado en terapia asistida con caballos, con una estética natural y cálida.",
      en: "A centre specialising in horse-assisted therapy, with a warm, natural aesthetic.",
    },
    outcome: {
      es: "Estructura pensada para explicar una terapia poco conocida a quien llega sin contexto.",
      en: "Structured to explain a little-known therapy to visitors arriving with no context.",
    },
    image: "/equidae-preview.png",
    tech: ["WordPress", "Elementor"],
    link: "https://equidae.es/",
    external: true,
    color: "purple",
    featured: false,
  },
  {
    slug: "introspectia",
    title: "Introspectia Psicología",
    kind: { es: "Web corporativa", en: "Corporate site" },
    description: {
      es: "Gabinete de psicología con un diseño limpio y profesional, fácil de mantener por el propio cliente.",
      en: "A psychology practice with a clean, professional design the client can maintain themselves.",
    },
    outcome: {
      es: "Entregada con formación para que el equipo publique y edite contenido sin depender de mí.",
      en: "Delivered with training so the team can publish and edit content without depending on me.",
    },
    image: "/introspectia-preview.png",
    tech: ["WordPress", "Elementor"],
    link: "https://introspectiapsicologia.com/",
    external: true,
    color: "pink",
    featured: false,
  },
  {
    slug: "fitgood",
    title: "Fitgood",
    kind: { es: "Coaching y salud", en: "Coaching & health" },
    description: {
      es: "Plataforma de coaching personal y salud integral con presencia en Bélgica.",
      en: "Personal coaching and holistic health platform based in Belgium.",
    },
    outcome: {
      es: "Proyecto internacional coordinado íntegramente en remoto, de la propuesta a la publicación.",
      en: "International project coordinated entirely remotely, from proposal to launch.",
    },
    image: "/fitgood-preview.png",
    tech: ["Hostinger Builder"],
    link: "https://www.fitgood.be",
    external: true,
    color: "emerald",
    featured: false,
  },
];

export const appProjects: Project[] = [
  {
    slug: "swipe-gallery",
    title: "Swipe Gallery",
    kind: { es: "App Android publicada", en: "Published Android app" },
    description: {
      es: "Limpia miles de fotos con un gesto: desliza para decidir qué guardas y qué borras.",
      en: "Clear thousands of photos with one gesture: swipe to decide what you keep and what you delete.",
    },
    outcome: {
      es: "Producto propio, diseñado y desarrollado de cero y publicado en Google Play. Es la prueba de lo que puedo construir para ti en Flutter.",
      en: "My own product, designed and built from scratch and published on Google Play. It's the proof of what I can build for you in Flutter.",
    },
    image: "/swipe-gallery-banner-main.png",
    tech: ["Flutter", "Dart", "Provider"],
    // ⚠️ Ruta congelada: declarada en la ficha de Google Play. No renombrar.
    link: "/swipe-gallery-app",
    external: false,
    color: "pink",
    featured: true,
  },
];

export const allProjects = [...webProjects, ...appProjects];

export const featuredProjects = allProjects.filter((p) => p.featured);

/** Logos de clientes para el carrusel de confianza de la home. */
export const clientLogos = [
  { name: "Equidae", logo: "/empresas/Equidae.png", url: "https://equidae.es" },
  { name: "Fitgood", logo: "/empresas/Fitgood.png", url: "https://fitgood.be" },
  {
    name: "Introspectia",
    logo: "/empresas/Introspectia.webp",
    url: "https://instrospectiapsicologia.com",
  },
  { name: "Maingoo", logo: "/empresas/Maingoo.svg", url: "https://maingoo.tech" },
  { name: "Mesetair", logo: "/empresas/Mesetair.webp", url: "https://mesetair.com" },
  {
    name: "Psi Violeta",
    logo: "/empresas/PsiVioleta.png",
    url: "https://violetapsicologia.com",
  },
  { name: "Winegang", logo: "/empresas/Winegang.png", url: "https://winegang.es" },
];

/** Tecnologías del marquee, con su color de marca. */
export const techStack = [
  { name: "Astro", color: "#ff5d01" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "React", color: "#61dafb" },
  { name: "Node", color: "#339933" },
  { name: "Flutter", color: "#02569B" },
  { name: "Dart", color: "#0175C2" },
  { name: "WordPress", color: "#21759B" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "Docker", color: "#2496ED" },
  { name: "Python", color: "#3776AB" },
  { name: "C", color: "#A8B9CC" },
  { name: "C++", color: "#00599C" },
  { name: "Git", color: "#F05032" },
];
