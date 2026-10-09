import type { Accent } from "./projects";

/**
 * Los cuatro servicios que se venden. Los textos viven en `src/i18n/ui.ts`
 * bajo las claves `services.<id>.*`; aquí solo va lo que no es idioma.
 */
export interface Service {
  /** Ancla usada en /servicios y en los enlaces del footer. */
  id: string;
  /** Prefijo de las claves de traducción: services.<key>.title, .desc, .f1..f4 */
  key: "web" | "mobile" | "design" | "drone";
  accent: Accent;
  /** Path del icono (heroicons, stroke). */
  icon: string;
}

export const services: Service[] = [
  {
    id: "web",
    key: "web",
    accent: "cyan",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    id: "mobile",
    key: "mobile",
    accent: "pink",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    id: "design",
    key: "design",
    accent: "yellow",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    id: "drone",
    key: "drone",
    accent: "emerald",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
];
