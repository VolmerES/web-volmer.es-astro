# Marketing de Volmer Studio

Todo lo de marca y difusión: el kit de marca, sus piezas ya exportadas y lo
que de ahí usa la web.

```
marketing/
  kit-marca/lienzo/       Código fuente del kit: canvas.json + una pieza por *.dc.html
  kit-marca/recursos/     QR a volmer.es y volmer.es/en
  exportaciones/es/       Piezas en español, listas para subir (PNG)
  exportaciones/en/       Las mismas en inglés
  exportaciones/imprenta/ Tarjeta de visita en PDF, a tamaño de imprenta
  exportaciones/web/      Favicon e iconos (también copiados a public/)
```

El kit vive en un lienzo de Claude en la **cuenta personal**:
**https://claude.ai/artifact/Chdm5qLuTWvWRjSkGk1uVR** (privado: para que lo vea
otra persona, compartirlo desde su menú Share). Si el lienzo y esta carpeta no
coinciden, manda esta carpeta: los últimos ajustes (firma de correo sin la nota
de Google y la «V.» de la tarjeta más pequeña) se hicieron aquí cuando la sesión
estaba en otra cuenta y aún no se han subido al lienzo.

## Sistema

| | |
|---|---|
| Fondo | Tinta `#0A0A0A`, superficie `#121212` |
| Texto | `#F4F4F5`, secundario `#A1A1AA` |
| Principal | Cian `#05D9E8`: enlaces, botones, datos |
| Firma | Rosa `#FF2A6D`: el punto del logo y, como mucho, un acento por pieza |
| Profundidad | Morado `#320A5C`, solo en brillos |
| Sobre claro | Cian oscuro `#0E7490` y rosa oscuro `#E11D5C` (contraste) |
| Tipografía | Outfit 800 titulares · Geist texto · Geist Mono etiquetas |
| Logo | «VOLMER.» con el punto rosa + «STUDIO» en mono; monograma «V.» |

Degradado cian → rosa solo en líneas finas, nunca de fondo.

Puesto: **Desarrollador de Software · Fundador de Volmer Studio** (en inglés,
Software Developer · Founder of Volmer Studio). Nombre completo: Juan Bautista
Delorme Pinedo.

## Qué es cada exportación

| Fichero | Para | Tamaño |
|---|---|---|
| `web-imagen-al-compartir.png` / `web-share-image.png` | Lo que sale al compartir volmer.es (en `public/og-image*.png`) | 1200 × 630 |
| `google-business-logo.png` | Logo del perfil de Google | 720 × 720 |
| `google-business-portada.png` / `-cover` | Portada del perfil de Google | 1080 × 608 |
| `google-business-publicacion-a/b.png` / `-post-a/b` | Publicaciones: A «plantilla tachada», B «corrección» | 1200 × 900 |
| `linkedin-logo.png` | Logo de la página de empresa | 400 × 400 |
| `linkedin-portada.png` / `-cover` | Portada de la página (a doble resolución) | 2256 × 382 |
| `linkedin-publicacion.png` / `-post` | Anuncio Volmer Tech → Volmer Studio | 1200 × 627 |
| `firma-correo.png` / `email-signature` | Final de los correos (a doble resolución; mostrar a 600 px) | 1200 × 400 |
| `tarjeta-cara/dorso.png` / `business-card-*` | Vista previa de la tarjeta | 4× |
| `imprenta/*.pdf` | Lo que se manda a la imprenta | 91 × 61 mm |

## Tarjeta de visita

Formato estándar en España: **85 × 55 mm**. Los PDF miden 91 × 61 mm porque
llevan 3 mm de sangrado por lado, que la imprenta recorta; las guías rosas del
lienzo marcan la línea de corte. El texto queda a más de 6 mm del borde final.
La cara es negra: pedirla en papel mate y con negro enriquecido. El QR del
dorso lleva a volmer.es (en la versión inglesa, a volmer.es/en/).

## Firma de correo

Lo que va dentro de la imagen no se puede pulsar: poner debajo el teléfono, el
correo y la web también como texto.

## Cómo se regeneran

Las exportaciones salen de los `*.dc.html` con Chromium sin cabeza (Playwright):
cada pieza se abre a su tamaño y se captura; la tarjeta se imprime a PDF a
91 × 61 mm. El favicon es vectorial: la «V» y el punto son los contornos reales
de Outfit ExtraBold, y los PNG salen de ese SVG.
