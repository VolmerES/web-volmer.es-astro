/**
 * Movimiento al hacer scroll, para todo el sitio. Se declara en el HTML con
 * atributos y este módulo los pone en marcha:
 *
 * - `data-reveal`: el elemento aparece (sube y se funde) al entrar en pantalla.
 *   `data-reveal-stagger` en un contenedor hace lo mismo con cada hijo; los que
 *   entran a la vez lo hacen en cascada.
 * - `data-parallax="0.2"`: se desplaza en vertical a otra velocidad que la
 *   página. Positivo = se queda atrás (más lejos); negativo = se adelanta (más
 *   cerca). Con `data-parallax-from="top"` cuenta desde el principio de la
 *   página (para el hero, que no debe moverse con la página quieta), y
 *   `data-parallax-max` limita el desplazamiento en píxeles.
 * - `data-scroll-p="pin" | "enter"`: escribe en la variable CSS `--p` cuánto ha
 *   avanzado el elemento (de 0 a 1) y el CSS hace el resto. «pin» es para
 *   secciones con un marco `sticky` dentro; «enter», para las que pasan sin más.
 * - `#scroll-progress`: la barra de lectura de la cabecera (`--page-p`).
 *
 * La clase `motion` de <html> la pone un script en línea del <head>, antes de
 * pintar, y es la que activa los estados iniciales ocultos. Sin JavaScript o con
 * «reducir movimiento» no se pone y todo se ve quieto y completo: `--p` vale 1
 * por defecto en el CSS.
 */

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

let teardown: (() => void) | null = null;

function setup() {
    teardown?.();
    teardown = null;

    const root = document.documentElement;
    (window as unknown as { __motionReady?: boolean }).__motionReady = true;
    if (reducedMotion() || !('IntersectionObserver' in window)) {
        root.classList.remove('motion');
        return;
    }
    root.classList.add('motion');

    // ---- Aparecer al entrar ----
    const revealed = new IntersectionObserver((entries) => {
        // Los que entran en el mismo instante, en cascada.
        entries
            .filter((entry) => entry.isIntersecting)
            .forEach((entry, i) => {
                const el = entry.target as HTMLElement;
                const step = Number(el.parentElement?.dataset.revealStagger) || 90;
                el.style.setProperty('--reveal-delay', `${Math.min(i, 6) * step}ms`);
                el.classList.add('is-in');
                revealed.unobserve(el);
            });
    }, { rootMargin: '0px 0px -8% 0px' });
    document
        .querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in), [data-reveal-stagger] > :not(.is-in)')
        .forEach((el) => revealed.observe(el));

    // ---- Parallax y avance ----
    const parallax = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    const progress = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-p]'));
    const bar = document.getElementById('scroll-progress');
    const active = new Set<Element>();

    const update = () => {
        raf = 0;
        const vh = window.innerHeight;
        const narrow = window.innerWidth < 768;

        // Primero se mide todo y después se escribe, para no forzar un cálculo
        // de maquetación por cada elemento.
        const moves: [HTMLElement, number][] = [];
        for (const el of parallax) {
            if (!active.has(el)) continue;
            const speed = Number(el.dataset.parallax) * (narrow ? 0.6 : 1);
            let offset: number;
            if (el.dataset.parallaxFrom === 'top') {
                offset = window.scrollY * speed;
            } else {
                // Se mide el padre, que no se mueve: medir el propio elemento
                // ya desplazado haría que se persiguiera a sí mismo.
                const ref = (el.parentElement ?? el).getBoundingClientRect();
                offset = -(ref.top + ref.height / 2 - vh / 2) * speed;
            }
            const max = Number(el.dataset.parallaxMax);
            moves.push([el, max ? clamp(offset, -max, max) : offset]);
        }

        const advances: [HTMLElement, number][] = [];
        for (const el of progress) {
            if (!active.has(el)) continue;
            const r = el.getBoundingClientRect();
            const p = el.dataset.scrollP === 'pin'
                // El marco sticky recorre la altura sobrante de la sección.
                ? -r.top / Math.max(1, r.height - vh)
                // De asomar por abajo (85 %) a que el final pase del 60 %.
                : (vh * 0.85 - r.top) / (vh * 0.25 + r.height);
            advances.push([el, clamp(p, 0, 1)]);
        }

        for (const [el, offset] of moves) el.style.translate = `0 ${offset.toFixed(1)}px`;
        for (const [el, p] of advances) el.style.setProperty('--p', p.toFixed(4));

        if (bar) {
            const total = document.documentElement.scrollHeight - vh;
            bar.style.setProperty('--page-p', total > 0 ? clamp(window.scrollY / total, 0, 1).toFixed(4) : '0');
        }
    };

    let raf = 0;
    const kick = () => {
        if (!raf) raf = requestAnimationFrame(update);
    };

    const watch = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) active.add(entry.target);
            else active.delete(entry.target);
        }
        kick();
    }, { rootMargin: '30% 0px' });
    [...parallax, ...progress].forEach((el) => watch.observe(el));

    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', kick, { passive: true });
    kick();

    teardown = () => {
        if (raf) cancelAnimationFrame(raf);
        revealed.disconnect();
        watch.disconnect();
        window.removeEventListener('scroll', kick);
        window.removeEventListener('resize', kick);
    };
}

// Al navegar con el ClientRouter, Astro copia los atributos del <html> nuevo y
// la clase se pierde: se vuelve a poner antes de que se pinte la página.
document.addEventListener('astro:after-swap', () => {
    if (!reducedMotion()) document.documentElement.classList.add('motion');
});
document.addEventListener('astro:page-load', setup);
document.addEventListener('astro:before-swap', () => {
    teardown?.();
    teardown = null;
});
