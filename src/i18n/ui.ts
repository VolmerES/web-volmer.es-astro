export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "nav.home": "INICIO",
    "nav.42": "42 MADRID",
    "nav.apps": "APLICACIONES",
    "nav.portfolio": "PORTAFOLIO",
    "nav.services": "SERVICIOS",
    "nav.blog": "BLOG",
    "nav.contact": "HABLEMOS",
  },
  en: {
    "nav.home": "HOME",
    "nav.42": "42 MADRID",
    "nav.apps": "APPLICATIONS",
    "nav.portfolio": "PORTFOLIO",
    "nav.services": "SERVICES",
    "nav.blog": "BLOG",
    "nav.contact": "LET'S TALK",
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
