/**
 * Canal RSS de las noticias de un idioma, escrito a mano: son cuatro líneas y
 * no merece una dependencia.
 */
import { getNews, newsSlug } from './news';
import { routes } from '../i18n/ui';

const site = 'https://volmer.es';
const escape = (text: string) =>
    text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function newsFeed(lang: 'es' | 'en') {
    const base = `${site}${routes[lang].news}`;
    const items = (await getNews(lang)).map((entry) => {
        const url = `${base}/${newsSlug(entry)}/`;
        return `    <item>
      <title>${escape(entry.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(entry.data.description)}</description>
      <category>${escape(entry.data.tag)}</category>
      <pubDate>${entry.data.date.toUTCString()}</pubDate>
    </item>`;
    });

    const title = lang === 'es' ? 'Volmer Studio · Noticias' : 'Volmer Studio · News';
    const description = lang === 'es'
        ? 'Premios, proyectos y novedades de Volmer Studio.'
        : 'Awards, projects and updates from Volmer Studio.';

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${title}</title>
    <link>${base}/</link>
    <description>${description}</description>
    <language>${lang === 'es' ? 'es-ES' : 'en-GB'}</language>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml" />
${items.join('\n')}
  </channel>
</rss>
`;
    return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
