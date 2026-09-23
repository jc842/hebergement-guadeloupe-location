export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  description: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
}

export const siteConfig: SiteConfig = {
  name: "Hébergement Guadeloupe — Villas avec Piscine, Gîtes & Locations de Vacances",
  domain: "hebergement-guadeloupe-location.com",
  url: "https://hebergement-guadeloupe-location.com",
  description: "Le guide indépendant de référence de la location saisonnière en Guadeloupe : villas de prestige vue mer, bungalows créoles, gîtes de charme et conseils de réservation directe.",
  repo: "jc842/hebergement-guadeloupe-location",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-mulberry",
    fontFamily: "Playfair Display, serif",
    colorScheme: "warm-taupe",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "60",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 623, format: "mobileBanner" },
      inContent: { zoneId: 627, format: "mediumRectangle" },
      header: { zoneId: 626, format: "leaderboard" },
    },
  },

  legal: {
    editor: "Éditeur indépendant",
    address: "Guadeloupe / France",
    contactEmail: "contact@hebergement-guadeloupe-location.com",
    hostName: "Cloudflare Pages & Hetzner",
    hostAddress: "Union Européenne",
  },
};
