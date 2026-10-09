/**
 * Envío de los formularios de contacto y presupuesto.
 *
 * Van al panel de clientes (customer.volmer.es/api/leads), que guarda la
 * solicitud en /admin/solicitudes y avisa por correo. Si el panel no contesta
 * —caído, en pleno despliegue— se manda a Formspree como antes, para no perder
 * a nadie; también si aún no está desplegado y contesta 404. Si contesta con
 * un error de validación o de límite de envíos, no se reintenta: Formspree lo
 * aceptaría y se saltaría esas reglas.
 */

export interface Lead {
    source: 'contact' | 'quote';
    email: string;
    phone?: string;
    subject?: string;
    message: string;
    service?: string;
    /** Campo trampa: oculto en el formulario, solo lo rellena un bot. */
    website?: string;
}

export interface LeadEndpoints {
    panel: string;
    formspree: string;
}

export class LeadRejected extends Error {}

export async function sendLead(lead: Lead, endpoints: LeadEndpoints): Promise<void> {
    const body = {
        ...lead,
        lang: document.documentElement.lang === 'en' ? 'en' : 'es',
        page: location.origin + location.pathname,
    };

    try {
        const res = await fetch(endpoints.panel, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        if (res.ok) return;
        // Solo validación, tamaño y límite de envíos. Un 404 o un 405 querrían
        // decir que el panel aún no tiene /api/leads, y eso va a Formspree.
        if (res.status === 400 || res.status === 413 || res.status === 429) {
            const data = await res.json().catch(() => ({}));
            throw new LeadRejected(data.error || `HTTP ${res.status}`);
        }
    } catch (error) {
        if (error instanceof LeadRejected) throw error;
        console.warn('[leads] el panel no responde, se envía por Formspree', error);
    }

    if (lead.website) return;

    const res = await fetch(endpoints.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
            email: lead.email,
            phone: lead.phone ?? '',
            subject: lead.subject ?? '',
            message: lead.message,
        }),
    });
    if (!res.ok) throw new Error(`Formspree ${res.status}`);
}
