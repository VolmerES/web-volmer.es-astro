export const defaultLang = "es";

export const brand = {
  name: "Volmer Studio",
  logo: "VOLMER",
  logoSuffix: "STUDIO",
  person: "Juan Bautista Delorme Pinedo",
  // Dirección declarada en las políticas de privacidad; cambiarla implica
  // actualizar también politica-privacidad.astro y en/privacy-policy.astro.
  email: "juanbautista.dev@volmer.es",
  phone: "+34 622 55 77 39",
  whatsapp: "34622557739",
  github: "https://github.com/VolmerES",
  linkedin: "https://linkedin.com/in/jdelorme",
  maps: "https://www.google.com/maps/search/?api=1&query=Volmer%20Studio&query_place_id=ChIJo-APZM3t0yUR0PZ_EfNHVdM",
  formspree: "https://formspree.io/f/xykkznrl",
  /**
   * Panel de clientes (Next.js, repo customer-volmer-es).
   * Ojo: el CLAUDE.md de ese repo menciona clientes.volmer.es, que no es
   * el dominio en producción. El bueno es customer.volmer.es.
   */
  clientPanel: "https://customer.volmer.es/login",
  /** Portfolio personal (repo volmer-personal): 42, proyectos propios y trayectoria. */
  portfolio: "https://juandelorme-portfolio.volmer.es",
  /**
   * Donde guardan los formularios: el panel los muestra en /admin/solicitudes.
   * Para probar contra un panel local: PUBLIC_LEADS_URL=http://localhost:3000/api/leads
   */
  leads: "https://customer.volmer.es/api/leads",
  /**
   * Clasificación WURI (World University Rankings for Innovation), donde 42 es
   * 3.ª en 2025 y 2026. La página oficial enlaza al PDF de cada año; la captura
   * de public/wuri-2026.webp sale de la página 2 de ese PDF.
   */
  wuriRanking: "https://wuri-world.circle.so/wuri-ranking",
  wuriPdf: "https://drive.google.com/file/d/18wRtS_m5B-3mL-xZ4jff2AFMz1XNYXz2/view",
};

/**
 * El blog se quedó vacío al mudar los artículos al portfolio. Sus páginas
 * siguen existiendo, pero fuera del menú, de la portada y del índice de Google
 * hasta que haya artículos pensados para clientes. Ponerlo a `true` lo
 * devuelve a todos esos sitios a la vez.
 */
export const blogVisible = false;

export const ui = {
  es: {
    // ---------- Navegación ----------
    "nav.services": "SERVICIOS",
    "nav.projects": "PROYECTOS",
    "nav.about": "SOBRE MÍ",
    "nav.blog": "BLOG",
    "nav.contact": "CONTACTO",

    // ---------- CTAs ----------
    "cta.quote": "SOLICITAR PRESUPUESTO",
    "cta.quoteShort": "PRESUPUESTO",
    "cta.projects": "VER PROYECTOS",
    "cta.services": "VER SERVICIOS",
    "cta.all": "VER TODO",
    "cta.contact": "CONTACTAR",
    "cta.clientLogin": "Acceso clientes",
    "cta.readMore": "LEER ARTÍCULO",
    "cta.viewSite": "VER WEB",
    "cta.viewCase": "VER CASO",

    // ---------- Home: hero ----------
    "home.badge": "DISPONIBLE PARA NUEVOS PROYECTOS",
    "home.hello": "Hola, soy Juan",
    "home.title1": "Transformando tu visión",
    "home.title2": "en código.",
    "home.subtitle":
      "Diseño y programo webs y aplicaciones a medida para negocios. Hablas directamente conmigo, sin agencias ni intermediarios: te escucho, lo construyo y me quedo para mantenerlo.",
    "home.whatsapp": "ESCRÍBEME POR WHATSAPP",
    "home.cred.42.title": "Formado en 42 Madrid",
    "home.cred.42.desc": "3.ª universidad más innovadora del mundo (WURI)",
    "home.cred.42.more": "Ver ranking",
    "home.wuriTitle": "42, la 3.ª universidad más innovadora del mundo",
    "home.wuriCaption":
      "Extracto de la clasificación oficial WURI 2026 (Global Top 500 Innovative Universities). 42 repite en el tercer puesto, como en 2025, por delante del MIT, Stanford y Harvard.",
    "home.wuriLink": "Ver la clasificación oficial",
    "home.wuriPdf": "Abrir el PDF de 2026",
    "home.close": "Cerrar",
    "home.cred.studio.title": "Volmer Studio",
    "home.cred.studio.desc": "Webs y apps a medida para negocios",
    "home.cred.play.title": "Apps en Google Play",
    "home.cred.play.desc": "Mis propias apps, publicadas",
    "home.cred.embedded.title": "Software embebido",
    "home.cred.embedded.desc": "Desarrollo para robótica",
    "home.cred.drone.title": "Piloto de dron",
    "home.cred.drone.desc": "Licencia oficial A1/A3",
    "home.manifesto1": "Tu negocio merece",
    "home.manifesto2": "algo mejor que una plantilla.",
    "home.manifestoText":
      "Nada de temas comprados ni webs clonadas. Cada proyecto se diseña y se programa desde cero pensando en tu negocio, en cómo trabajas y en quién te compra.",
    "home.manifestoWords": "A medida · Trato directo · Sin plantillas · Programado desde cero · Me quedo después del lanzamiento ·",
    "home.stat1": "proyectos entregados",
    "home.stat2": "en {n} reseñas de Google",
    "home.stat3": "trato directo, sin intermediarios",
    "home.trustCompanies": "Empresas que han confiado en mí",
    "home.trustTech": "Tecnologías que utilizo",

    // ---------- Home: secciones ----------
    "home.servicesTag": "Servicios",
    "home.servicesTitle": "En qué puedo ayudarte",
    "home.projectsTag": "Proyectos",
    "home.projectsTitle": "Trabajo reciente",
    "home.processTag": "Cómo trabajo",
    "home.processTitle": "Del primer mensaje a la web publicada",
    "home.blogTag": "Blog",
    "home.blogTitle": "Últimas publicaciones",
    "home.blogEmpty": "Estoy preparando los primeros artículos. Vuelve pronto.",
    "home.finalTitle": "¿Hablamos de tu proyecto?",
    "home.formEmail": "Tu email",
    "home.formMessage": "Cuéntame en dos líneas qué tienes en mente",
    "home.formSubject": "Mensaje desde la portada",
    "home.formOr": "o si lo prefieres",
    "home.finalSubtitle":
      "Cuéntame qué necesitas y te respondo con una propuesta clara: qué incluye, cuánto cuesta y cuándo estará listo. Sin compromiso.",

    // ---------- Servicios ----------
    "services.badge": "SERVICIOS",
    "services.title1": "Soluciones digitales",
    "services.title2": "que dan resultados",
    "services.subtitle":
      "Cuatro formas de ayudarte, con la misma manera de trabajar: hablamos claro, cumplo plazos y te entrego algo que puedas mantener.",

    "services.web.title": "Desarrollo Web",
    "services.web.desc":
      "Webs rápidas, seguras y preparadas para posicionar en Google. Desde una landing page hasta una plataforma a medida.",
    "services.web.f1": "Stack moderno (Astro, React, Next.js)",
    "services.web.f2": "WordPress y Elementor cuando encaja mejor",
    "services.web.f3": "Optimización de rendimiento y SEO técnico",
    "services.web.f4": "Tiendas online y pasarelas de pago",

    "services.mobile.title": "Desarrollo Móvil",
    "services.mobile.desc":
      "Aplicaciones para iOS y Android desde una única base de código con Flutter. Menos coste, mismo acabado.",
    "services.mobile.f1": "Flutter para iOS y Android",
    "services.mobile.f2": "Diseño adaptado a cada plataforma",
    "services.mobile.f3": "Publicación en App Store y Play Store",
    "services.mobile.f4": "Mantenimiento y actualizaciones",

    "services.design.title": "Diseño UI/UX",
    "services.design.desc":
      "Interfaces que se entienden solas. Diseño pensado para que el visitante haga lo que quieres que haga.",
    "services.design.f1": "Prototipado en Figma antes de programar",
    "services.design.f2": "Sistemas de diseño reutilizables",
    "services.design.f3": "Revisión de usabilidad y accesibilidad",
    "services.design.f4": "Identidad visual aplicada al producto",

    "services.drone.title": "Vuelos con Drones",
    "services.drone.desc":
      "Grabación aérea en 4K y fotografía de alta resolución con licencia oficial de piloto A1/A3.",
    "services.drone.f1": "Vídeo 4K y fotografía HDR",
    "services.drone.f2": "Licencia oficial de piloto A1/A3",
    "services.drone.f3": "Edición y postproducción incluidas",
    "services.drone.f4": "Inmobiliaria, eventos y seguimiento de obra",

    // ---------- Proceso ----------
    "process.title": "Cómo trabajo",
    "process.s1.title": "Hablamos",
    "process.s1.desc":
      "Me cuentas qué necesitas y para qué. Sin tecnicismos y sin compromiso.",
    "process.s2.title": "Te propongo",
    "process.s2.desc":
      "Recibes una propuesta cerrada: alcance, precio y fecha de entrega por escrito.",
    "process.s3.title": "Construyo",
    "process.s3.desc":
      "Desarrollo el proyecto enseñándote avances, para que no haya sorpresas al final.",
    "process.s4.title": "Publico y acompaño",
    "process.s4.desc":
      "Lo dejo funcionando y sigo disponible para mantenerlo y mejorarlo.",

    // ---------- Proyectos ----------
    "projects.badge": "PROYECTOS",
    "projects.title1": "Trabajo real",
    "projects.title2": "para clientes reales",
    "projects.subtitle":
      "Una selección de proyectos entregados. Todos están en producción y puedes visitarlos.",
    "projects.webTitle": "Webs y plataformas",
    "projects.appsTitle": "Aplicaciones móviles",

    // ---------- Sobre mí ----------
    "about.badge": "SOBRE MÍ",
    "about.title1": "Detrás de Volmer Studio",
    "about.title2": "hay una sola persona",
    "about.subtitle":
      "Y eso es precisamente la ventaja: hablas con quien programa tu proyecto, no con un comercial.",
    "about.introTitle": "Hola, soy Juan",
    "about.introP1":
      "Empecé de adolescente escribiendo scripts y montando juegos sencillos en Unity con C#. Lo que era curiosidad se convirtió en oficio.",
    "about.introP2":
      "Hoy estudio en 42 Madrid, una escuela donde se aprende construyendo desde cero: he escrito un shell de Unix, un servidor IRC y un motor gráfico 3D en C. Esa base es la razón de que no dependa de plantillas ni de plugins para resolver un problema.",
    "about.introP3":
      "En paralelo llevo Volmer Studio, donde diseño y desarrollo webs y aplicaciones para negocios que necesitan algo hecho a su medida. Además soy piloto de drones con licencia A1/A3.",
    "about.valuesTitle": "Cómo trabajo",
    "about.v1.title": "Hablo claro",
    "about.v1.desc":
      "Nada de jerga técnica ni presupuestos con letra pequeña. Sabes qué compras y cuánto cuesta.",
    "about.v2.title": "Cumplo plazos",
    "about.v2.desc":
      "Doy una fecha y la cumplo. Si algo se complica, te enteras antes de que sea un problema.",
    "about.v3.title": "No desaparezco",
    "about.v3.desc":
      "Entregar la web no es el final. Sigo disponible para mantenerla, actualizarla y hacerla crecer.",
    "about.skillsTitle": "Tecnologías",
    "about.cred42": "Formado en 42 Madrid, en Arquitectura de Software. 42 es la 3.ª universidad más innovadora del mundo según el ranking WURI (2025 y 2026)",
    "about.credEmbedded": "Desarrollador de software embebido para robótica",
    "about.portfolioText": "Si quieres conocer mi lado más personal (42, los proyectos que hago por gusto y cómo he llegado hasta aquí), está en mi portfolio.",
    "about.portfolioLink": "Ver mi portfolio personal",
    "about.credDrone": "Piloto de drones con licencia oficial A1/A3",

    // ---------- Contacto ----------
    "contact.badge": "CONTACTO",
    "contact.title1": "Cuéntame",
    "contact.title2": "tu proyecto",
    "contact.subtitle":
      "Respondo a todos los mensajes, normalmente en menos de 24 horas. Si prefieres ir al grano, escríbeme por WhatsApp.",
    "contact.formTitle": "Envíame un mensaje",
    "contact.labelEmail": "TU EMAIL",
    "contact.labelSubject": "ASUNTO",
    "contact.labelMessage": "MENSAJE",
    "contact.labelPhone": "TU TELÉFONO (OPCIONAL)",
    "contact.phEmail": "tu@email.com (para responderte)",
    "contact.phSubject": "Proyecto web, app, duda...",
    "contact.phMessage": "Hola Juan, me gustaría hablar sobre...",
    "contact.send": "ENVIAR MENSAJE",
    "contact.sending": "ENVIANDO...",
    "contact.sent": "¡ENVIADO!",
    "contact.error": "ERROR - INTÉNTALO DE NUEVO",
    "contact.directTitle": "O directamente",
    "contact.responseTime": "Respuesta en menos de 24 h",
    "contact.quoteTitle": "¿Prefieres un presupuesto orientativo?",
    "contact.quoteDesc":
      "Responde tres preguntas rápidas y te preparo la solicitud automáticamente.",

    // ---------- Presupuesto (modal) ----------
    "budget.title": "Presupuesto",
    "budget.q1": "¿Qué tipo de servicio buscas?",
    "budget.q2": "¿Qué necesitas para tu web?",
    "budget.q3": "¿Incluye tienda online?",
    "budget.optApp": "Aplicación Móvil",
    "budget.optAppDesc": "iOS, Android, Flutter",
    "budget.optDrone": "Vuelo de Dron",
    "budget.optDroneDesc": "Grabación 4K, fotografía",
    "budget.optWeb": "Página Web",
    "budget.optWebDesc": "Corporativa, landing, tienda",
    "budget.optNew": "Creación nueva",
    "budget.optNewDesc": "Empezar un proyecto desde cero",
    "budget.optMaintenance": "Mantenimiento",
    "budget.optMaintenanceDesc": "Actualizar o arreglar una web existente",
    "budget.optYes": "Sí, necesito tienda online",
    "budget.optNo": "No, solo web informativa",
    "budget.summaryTitle": "¡Entendido!",
    "budget.summaryDesc": "Este es el resumen de tu solicitud:",
    "budget.back": "Atrás",
    "budget.emailLabel": "TU CORREO (REQUERIDO)",
    "budget.phoneLabel": "TU TELÉFONO (OPCIONAL)",
    "budget.messageLabel": "DETALLES DEL MENSAJE (EDITABLE)",
    "budget.sendMail": "ENVIAR SOLICITUD",
    "budget.sendWhatsapp": "ENVIAR POR WHATSAPP",

    // ---------- Reseñas ----------
    "reviews.title": "Lo que dicen mis clientes",
    "reviews.maps": "Ver en Google Maps ↗",
    "reviews.verified": "Cliente verificado",

    // ---------- Blog ----------
    "blog.title": "Blog",
    "blog.subtitle":
      "Artículos sobre desarrollo web, negocio digital y las decisiones técnicas que hay detrás de un buen proyecto.",
    "blog.empty": "Todavía no hay artículos publicados",
    "blog.emptyDesc":
      "Estoy preparando los primeros. Mientras tanto, si tienes una duda concreta sobre tu proyecto, escríbeme y te respondo.",

    // ---------- Footer ----------
    "footer.tagline": "Desarrollo web y móvil a medida.",
    "footer.servicesTitle": "Servicios",
    "footer.siteTitle": "Web",
    "footer.contactTitle": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.portfolio": "Portfolio personal",
    "footer.privacy": "Política de Privacidad",
    "footer.cookies": "Política de Cookies",
  },

  en: {
    // ---------- Navigation ----------
    "nav.services": "SERVICES",
    "nav.projects": "PROJECTS",
    "nav.about": "ABOUT",
    "nav.blog": "BLOG",
    "nav.contact": "CONTACT",

    // ---------- CTAs ----------
    "cta.quote": "REQUEST A QUOTE",
    "cta.quoteShort": "GET A QUOTE",
    "cta.projects": "VIEW PROJECTS",
    "cta.services": "VIEW SERVICES",
    "cta.all": "VIEW ALL",
    "cta.contact": "GET IN TOUCH",
    "cta.clientLogin": "Client login",
    "cta.readMore": "READ ARTICLE",
    "cta.viewSite": "VISIT SITE",
    "cta.viewCase": "VIEW CASE STUDY",

    // ---------- Home: hero ----------
    "home.badge": "AVAILABLE FOR NEW PROJECTS",
    "home.hello": "Hi, I'm Juan",
    "home.title1": "Turning your vision",
    "home.title2": "into code.",
    "home.subtitle":
      "I design and build custom websites and apps. You work directly with me — no middlemen, no agency layers: I learn your business, build it, and stick around to maintain it.",
    "home.whatsapp": "MESSAGE ME ON WHATSAPP",
    "home.cred.42.title": "Trained at 42 Madrid",
    "home.cred.42.desc": "World's 3rd most innovative university (WURI)",
    "home.cred.42.more": "See ranking",
    "home.wuriTitle": "42, the world's 3rd most innovative university",
    "home.wuriCaption":
      "Excerpt from the official WURI 2026 ranking (Global Top 500 Innovative Universities). 42 holds third place again, as in 2025, ahead of MIT, Stanford and Harvard.",
    "home.wuriLink": "See the official ranking",
    "home.wuriPdf": "Open the 2026 PDF",
    "home.close": "Close",
    "home.cred.studio.title": "Volmer Studio",
    "home.cred.studio.desc": "Custom websites and apps for businesses",
    "home.cred.play.title": "Apps on Google Play",
    "home.cred.play.desc": "My own apps, published",
    "home.cred.embedded.title": "Embedded software",
    "home.cred.embedded.desc": "Development for robotics",
    "home.cred.drone.title": "Drone pilot",
    "home.cred.drone.desc": "Official A1/A3 licence",
    "home.manifesto1": "Your business deserves",
    "home.manifesto2": "better than a template.",
    "home.manifestoText":
      "No bought themes, no cloned sites. Every project is designed and coded from scratch around your business, the way you work and the people who buy from you.",
    "home.manifestoWords": "Custom-built · Direct contact · No templates · Coded from scratch · I stay after launch ·",
    "home.stat1": "projects delivered",
    "home.stat2": "across {n} Google reviews",
    "home.stat3": "direct contact, no middlemen",
    "home.trustCompanies": "Businesses that trusted me",
    "home.trustTech": "Technologies I work with",

    // ---------- Home: sections ----------
    "home.servicesTag": "Services",
    "home.servicesTitle": "How I can help",
    "home.projectsTag": "Projects",
    "home.projectsTitle": "Recent work",
    "home.processTag": "How I work",
    "home.processTitle": "From first message to live site",
    "home.blogTag": "Blog",
    "home.blogTitle": "Latest posts",
    "home.blogEmpty": "First articles coming soon. Check back shortly.",
    "home.finalTitle": "Shall we talk about your project?",
    "home.formEmail": "Your email",
    "home.formMessage": "Tell me in a couple of lines what you have in mind",
    "home.formSubject": "Message from the home page",
    "home.formOr": "or if you prefer",
    "home.finalSubtitle":
      "Tell me what you need and I'll come back with a clear proposal: what's included, what it costs and when it ships. No strings attached.",

    // ---------- Services ----------
    "services.badge": "SERVICES",
    "services.title1": "Digital solutions",
    "services.title2": "that deliver results",
    "services.subtitle":
      "Four ways to help you, all with the same working style: plain language, deadlines met, and something you can actually maintain.",

    "services.web.title": "Web Development",
    "services.web.desc":
      "Fast, secure sites built to rank on Google. From a single landing page to a fully custom platform.",
    "services.web.f1": "Modern stack (Astro, React, Next.js)",
    "services.web.f2": "WordPress and Elementor when it fits better",
    "services.web.f3": "Performance and technical SEO optimisation",
    "services.web.f4": "Online stores and payment gateways",

    "services.mobile.title": "Mobile Development",
    "services.mobile.desc":
      "Apps for iOS and Android from a single Flutter codebase. Lower cost, same finish.",
    "services.mobile.f1": "Flutter for iOS and Android",
    "services.mobile.f2": "Design adapted to each platform",
    "services.mobile.f3": "App Store and Play Store publishing",
    "services.mobile.f4": "Maintenance and updates",

    "services.design.title": "UI/UX Design",
    "services.design.desc":
      "Interfaces that explain themselves. Designed so visitors do what you want them to do.",
    "services.design.f1": "Figma prototypes before any code",
    "services.design.f2": "Reusable design systems",
    "services.design.f3": "Usability and accessibility review",
    "services.design.f4": "Visual identity applied to the product",

    "services.drone.title": "Drone Filming",
    "services.drone.desc":
      "4K aerial footage and high-resolution photography, flown with an official A1/A3 pilot licence.",
    "services.drone.f1": "4K video and HDR photography",
    "services.drone.f2": "Official A1/A3 pilot licence",
    "services.drone.f3": "Editing and post-production included",
    "services.drone.f4": "Real estate, events and construction tracking",

    // ---------- Process ----------
    "process.title": "How I work",
    "process.s1.title": "We talk",
    "process.s1.desc":
      "You tell me what you need and why. No jargon, no commitment.",
    "process.s2.title": "I propose",
    "process.s2.desc":
      "You get a fixed proposal: scope, price and delivery date in writing.",
    "process.s3.title": "I build",
    "process.s3.desc":
      "I develop the project showing you progress along the way, so there are no surprises at the end.",
    "process.s4.title": "I ship and stay",
    "process.s4.desc":
      "I leave it running and remain available to maintain and improve it.",

    // ---------- Projects ----------
    "projects.badge": "PROJECTS",
    "projects.title1": "Real work",
    "projects.title2": "for real clients",
    "projects.subtitle":
      "A selection of delivered projects. All of them are live and you can visit them.",
    "projects.webTitle": "Websites and platforms",
    "projects.appsTitle": "Mobile applications",

    // ---------- About ----------
    "about.badge": "ABOUT",
    "about.title1": "Behind Volmer Studio",
    "about.title2": "there is one person",
    "about.subtitle":
      "And that is exactly the advantage: you talk to the person writing your code, not to a salesperson.",
    "about.introTitle": "Hi, I'm Juan",
    "about.introP1":
      "I started as a teenager writing scripts and building simple games in Unity with C#. What began as curiosity turned into a craft.",
    "about.introP2":
      "Today I study at 42 Madrid, a school where you learn by building from scratch: I've written a Unix shell, an IRC server and a 3D graphics engine in C. That foundation is why I don't depend on templates or plugins to solve a problem.",
    "about.introP3":
      "Alongside that I run Volmer Studio, designing and building websites and apps for businesses that need something made to measure. I'm also a licensed A1/A3 drone pilot.",
    "about.valuesTitle": "How I work",
    "about.v1.title": "I speak plainly",
    "about.v1.desc":
      "No technical jargon, no fine print in the quote. You know what you're buying and what it costs.",
    "about.v2.title": "I meet deadlines",
    "about.v2.desc":
      "I give a date and I keep it. If something gets complicated, you hear about it before it becomes a problem.",
    "about.v3.title": "I don't disappear",
    "about.v3.desc":
      "Shipping the site isn't the end. I stay available to maintain it, update it and help it grow.",
    "about.skillsTitle": "Technologies",
    "about.cred42": "Trained in Software Architecture at 42 Madrid. 42 is the world's 3rd most innovative university in the WURI ranking (2025 and 2026)",
    "about.credEmbedded": "Embedded software developer for robotics",
    "about.portfolioText": "If you want to see my more personal side (42, the projects I build for fun and how I got here), it lives in my portfolio.",
    "about.portfolioLink": "See my personal portfolio",
    "about.credDrone": "Officially licensed A1/A3 drone pilot",

    // ---------- Contact ----------
    "contact.badge": "CONTACT",
    "contact.title1": "Tell me about",
    "contact.title2": "your project",
    "contact.subtitle":
      "I reply to every message, usually within 24 hours. If you'd rather cut to the chase, message me on WhatsApp.",
    "contact.formTitle": "Send me a message",
    "contact.labelEmail": "YOUR EMAIL",
    "contact.labelSubject": "SUBJECT",
    "contact.labelMessage": "MESSAGE",
    "contact.labelPhone": "YOUR PHONE (OPTIONAL)",
    "contact.phEmail": "you@email.com (so I can reply)",
    "contact.phSubject": "Website project, app, question...",
    "contact.phMessage": "Hi Juan, I'd like to talk about...",
    "contact.send": "SEND MESSAGE",
    "contact.sending": "SENDING...",
    "contact.sent": "SENT!",
    "contact.error": "ERROR - PLEASE TRY AGAIN",
    "contact.directTitle": "Or reach me directly",
    "contact.responseTime": "Reply within 24 h",
    "contact.quoteTitle": "Prefer a ballpark quote?",
    "contact.quoteDesc":
      "Answer three quick questions and I'll prepare the request for you.",

    // ---------- Quote (modal) ----------
    "budget.title": "Quote",
    "budget.q1": "What kind of service are you looking for?",
    "budget.q2": "What do you need for your website?",
    "budget.q3": "Does it include an online store?",
    "budget.optApp": "Mobile App",
    "budget.optAppDesc": "iOS, Android, Flutter",
    "budget.optDrone": "Drone Filming",
    "budget.optDroneDesc": "4K footage, photography",
    "budget.optWeb": "Website",
    "budget.optWebDesc": "Corporate, landing, store",
    "budget.optNew": "Build from scratch",
    "budget.optNewDesc": "Start a new project",
    "budget.optMaintenance": "Maintenance",
    "budget.optMaintenanceDesc": "Update or fix an existing site",
    "budget.optYes": "Yes, I need an online store",
    "budget.optNo": "No, informational site only",
    "budget.summaryTitle": "Got it!",
    "budget.summaryDesc": "Here's a summary of your request:",
    "budget.back": "Back",
    "budget.emailLabel": "YOUR EMAIL (REQUIRED)",
    "budget.phoneLabel": "YOUR PHONE (OPTIONAL)",
    "budget.messageLabel": "MESSAGE DETAILS (EDITABLE)",
    "budget.sendMail": "SEND REQUEST",
    "budget.sendWhatsapp": "SEND VIA WHATSAPP",

    // ---------- Reviews ----------
    "reviews.title": "What my clients say",
    "reviews.maps": "View on Google Maps ↗",
    "reviews.verified": "Verified client",

    // ---------- Blog ----------
    "blog.title": "Blog",
    "blog.subtitle":
      "Articles on web development, digital business and the technical decisions behind a good project.",
    "blog.empty": "No articles published yet",
    "blog.emptyDesc":
      "The first ones are on the way. In the meantime, if you have a specific question about your project, write to me and I'll answer.",

    // ---------- Footer ----------
    "footer.tagline": "Custom web and mobile development.",
    "footer.servicesTitle": "Services",
    "footer.siteTitle": "Site",
    "footer.contactTitle": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.portfolio": "Personal portfolio",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookie Policy",
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Rutas canónicas del sitio por idioma. Los slugs se traducen para que cada
 * idioma tenga URLs legibles y posicionables en su propio mercado.
 *
 * ⚠️ RUTAS CONGELADAS — no renombrar ni redirigir nunca:
 *   /privacy-policy       Política de privacidad de la app Swipe Gallery.
 *                         Está declarada en la ficha de Google Play; si cambia,
 *                         las actualizaciones de la app son rechazadas.
 *   /en/privacy-policy    Equivalente en inglés, enlazada desde la página de la app.
 *   /swipe-gallery-app    URL de la web de la app en Play Console.
 *   /en/swipe-gallery-app Equivalente en inglés.
 *   public/app-ads.txt    Verificación de AdMob.
 */
export const routes = {
  es: {
    home: "/",
    services: "/servicios",
    projects: "/proyectos",
    about: "/sobre-mi",
    contact: "/contacto",
    blog: "/blog",
    privacy: "/politica-privacidad",
    cookies: "/politica-de-cookies",
    swipeApp: "/swipe-gallery-app",
    appPrivacy: "/privacy-policy",
  },
  en: {
    home: "/en/",
    services: "/en/services",
    projects: "/en/projects",
    about: "/en/about",
    contact: "/en/contact",
    blog: "/en/blog",
    privacy: "/en/privacy-policy",
    cookies: "/en/cookie-policy",
    swipeApp: "/en/swipe-gallery-app",
    appPrivacy: "/en/privacy-policy",
  },
} as const;

export function useRoutes(lang: keyof typeof ui) {
  return routes[lang];
}

/** Devuelve la URL equivalente en el otro idioma para el conmutador. */
export function getAlternateUrl(pathname: string, lang: keyof typeof ui) {
  const target = lang === "es" ? "en" : "es";
  const from = routes[lang];
  const to = routes[target];

  // Coincidencia exacta con una ruta conocida.
  for (const key of Object.keys(from) as Array<keyof typeof from>) {
    if (pathname === from[key] || pathname === `${from[key]}/`) {
      return to[key];
    }
  }

  // Entradas de blog: /blog/slug <-> /en/blog/slug
  const blogMatch = pathname.match(/^\/(?:en\/)?blog\/(.+)$/);
  if (blogMatch) {
    return `${to.blog}/${blogMatch[1]}`;
  }

  return to.home;
}
