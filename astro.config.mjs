// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";
import { blogVisible } from "./src/i18n/ui.ts";

// Dominio del portafolio personal, al que se mudó todo el contenido no comercial.
const PORTFOLIO = "https://juandelorme-portfolio.volmer.es";

// https://astro.build/config
export default defineConfig({
  site: "https://volmer.es",
  output: "static",

  /**
   * Redirecciones de la reestructuración a Volmer Studio.
   *
   * ⚠️ No añadir aquí `/privacy-policy`, `/en/privacy-policy` ni
   * `/swipe-gallery-app`: son URLs declaradas en la ficha de Google Play de la
   * app Swipe Gallery y deben seguir respondiendo directamente.
   */
  redirects: {
    // Portafolio de cliente reunificado en /proyectos
    "/portfolio": "/proyectos",
    "/portfolio/web": "/proyectos",
    "/aplicaciones": "/proyectos",
    "/en/portfolio": "/en/projects",
    "/en/portfolio/web": "/en/projects",
    "/en/aplicaciones": "/en/projects",
    // Slug de servicios traducido en inglés
    "/en/servicios": "/en/services",

    // Contenido personal, ahora en el portafolio
    "/42": `${PORTFOLIO}/42`,
    "/en/42": `${PORTFOLIO}/en/42`,
    "/examrank06": `${PORTFOLIO}/examrank06`,
    "/blog/como-es-la-piscina-de-42-madrid": `${PORTFOLIO}/blog/como-es-la-piscina-de-42-madrid`,
    "/blog/de-un-asus-a-42-madrid": `${PORTFOLIO}/blog/de-un-asus-a-42-madrid`,
    "/blog/mi-primera-game-jam": `${PORTFOLIO}/blog/mi-primera-game-jam`,
    "/en/blog/como-es-la-piscina-de-42-madrid": `${PORTFOLIO}/en/blog/como-es-la-piscina-de-42-madrid`,
    "/en/blog/de-un-asus-a-42-madrid": `${PORTFOLIO}/en/blog/de-un-asus-a-42-madrid`,
    "/en/blog/mi-primera-game-jam": `${PORTFOLIO}/en/blog/mi-primera-game-jam`,
  },

  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // Mientras el blog esté oculto, fuera del sitemap (ver blogVisible).
      filter: (page) => blogVisible || !page.includes("/blog"),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
          en: "en-US",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      // El español se sirve sin prefijo (`/servicios`) y el inglés bajo `/en`.
      // Estaba en `true`, que declara lo contrario (`/es/servicios`); el build
      // estático lo disimulaba, pero el enrutado i18n daba 404 en todas las
      // rutas en español.
      prefixDefaultLocale: false,
    },
  },
});
