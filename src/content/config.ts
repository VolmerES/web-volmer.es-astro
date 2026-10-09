import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

/**
 * Noticias del estudio: premios, proyectos, novedades. Una carpeta por idioma
 * (es/, en/) con el mismo nombre de fichero, que es también el slug en los dos.
 *
 * Van a la par con LinkedIn: la noticia vive aquí (es contenido propio y
 * posiciona) y, si se publicó también allí, `linkedin` enlaza al post.
 */
const noticias = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    /** Título para buscadores, de unos 60 caracteres con « | Volmer Studio». */
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    /** Etiqueta corta: Premio, Trayectoria, Lanzamiento, Certificación… */
    tag: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    /** Tamaño real de la imagen, para reservar su hueco antes de que cargue. */
    imageWidth: z.number().default(1200),
    imageHeight: z.number().default(750),
    /** Imagen para compartir (1200×630). Si falta, la de la noticia o la general. */
    ogImage: z.string().optional(),
    /** Crédito de la imagen, si no es propia. */
    imageCredit: z.string().optional(),
    /** URL del post de LinkedIn de esta misma noticia. */
    linkedin: z.string().url().optional(),
    links: z.array(z.object({ href: z.string(), label: z.string() })).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, noticias };
