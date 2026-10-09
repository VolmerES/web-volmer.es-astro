/**
 * Reconocimientos de «Sobre mí»: premios y certificaciones, en texto.
 *
 * Solo lo que de verdad ha pasado. Una empresa que dio un premio va aquí, no en
 * la franja de logos de «Empresas que confían en mí», que es para clientes y
 * empresas para las que se trabaja.
 *
 * Pendiente de completar con los datos exactos: el nombre y el año del concurso
 * de Telefónica y Wayra, los cursos de Anthropic (con su enlace de
 * verificación) y la certificación de ciberseguridad (emisor y enlace).
 */

type L = { es: string; en: string };

export interface Recognition {
    year?: string;
    icon: 'trophy' | 'rocket' | 'badge' | 'shield';
    title: L;
    detail?: L;
    /** Las rutas internas, una por idioma; las externas, tal cual. */
    href?: string | L;
}

export const recognitions: Recognition[] = [
    {
        year: '2026',
        icon: 'trophy',
        title: { es: 'Ganador de la Madrid in Game HackJam 10', en: 'Winner of the Madrid in Game HackJam 10' },
        detail: {
            es: 'Con Next Stop: Madrid, en el reto de la EMT, en 42 Madrid Fundación Telefónica',
            en: 'With Next Stop: Madrid, in the EMT challenge, at 42 Madrid Fundación Telefónica',
        },
        href: { es: '/noticias/madrid-in-game-hackjam-10/', en: '/en/news/madrid-in-game-hackjam-10/' },
    },
    {
        icon: 'rocket',
        title: { es: 'Ganador de un concurso de startups', en: 'Winner of a startup competition' },
        detail: { es: 'Con Telefónica y Wayra', en: 'With Telefónica and Wayra' },
    },
    {
        icon: 'badge',
        title: { es: 'Certificaciones de Anthropic', en: 'Anthropic certifications' },
        detail: { es: 'Desarrollo con Claude, el modelo de IA de Anthropic', en: "Building with Claude, Anthropic's AI model" },
    },
    {
        icon: 'shield',
        title: { es: 'Certificación en ciberseguridad', en: 'Cybersecurity certification' },
    },
];

export const recognitionIcons: Record<Recognition['icon'], string> = {
    trophy: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0',
    rocket: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    badge: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
};
