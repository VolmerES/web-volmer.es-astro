/**
 * Noticias publicadas de un idioma, de la más reciente a la más antigua.
 * Los borradores (`draft: true`) no salen en ningún sitio.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type NewsEntry = CollectionEntry<'noticias'>;

export async function getNews(lang: 'es' | 'en'): Promise<NewsEntry[]> {
    const entries = await getCollection('noticias', (entry) => entry.slug.startsWith(`${lang}/`) && !entry.data.draft);
    return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** El slug sin la carpeta del idioma: es el mismo en los dos. */
export const newsSlug = (entry: NewsEntry) => entry.slug.replace(/^(es|en)\//, '');

/** «enero de 2026» / «January 2026»: la noticia cuenta el mes, no el día. */
export function newsDate(date: Date, lang: 'es' | 'en') {
    return date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}
