export type LanguageCode = "en" | "fr";

export type LanguageRoute = {
  en: string;
  fr: string;
};

export const languageRoutes: LanguageRoute[] = [
  { en: "/", fr: "/fr" },
  { en: "/about", fr: "/fr/a-propos" },
  { en: "/personal-training", fr: "/fr/entrainement-personnel" },
  { en: "/online-coaching", fr: "/fr/coaching-en-ligne" },
  { en: "/results", fr: "/fr/resultats" },
  { en: "/reviews", fr: "/fr/avis" },
  { en: "/contact", fr: "/fr/contact" },
  { en: "/tools", fr: "/fr/outils" },
  { en: "/personal-trainer-mauritius", fr: "/fr" },
];

function cleanPath(pathname: string) {
  const withoutQuery = pathname.split("?")[0] || "/";
  const normalized = withoutQuery.replace(/\/+$/, "");
  return normalized || "/";
}

export function getLanguageRoute(pathname: string) {
  const path = cleanPath(pathname);
  return languageRoutes.find((route) => route.en === path || route.fr === path);
}

export function getLanguageLinks(pathname: string) {
  const path = cleanPath(pathname);
  const route = getLanguageRoute(path);
  const isFrench = path === "/fr" || path.startsWith("/fr/");

  return {
    current: (isFrench ? "fr" : "en") as LanguageCode,
    en: route?.en ?? "/",
    fr: route?.fr ?? "/fr",
  };
}

export function getMetadataLanguages(path: string) {
  const route = getLanguageRoute(path);

  if (!route) {
    return undefined;
  }

  return {
    en: route.en,
    fr: route.fr,
    "x-default": route.en,
  };
}

export const frenchSitemapRoutes = languageRoutes
  .map((route) => route.fr)
  .filter((route, index, routes) => routes.indexOf(route) === index);
