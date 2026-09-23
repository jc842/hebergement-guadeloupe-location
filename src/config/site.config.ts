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
  name: "PBN Starter Template",
  domain: "example.com",
  url: "https://example.com",
  description: "Modèle universel Astro 5 + Keystatic + i18n pour réseau PBN Cloudflare.",
  repo: "jc842/pbn-template",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "editorial",
    fontFamily: "sans",
    colorScheme: "emerald",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "1",
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
    address: "Union Européenne",
    contactEmail: "contact@example.com",
    hostName: "Cloudflare Pages",
    hostAddress: "Union Européenne",
  },
};
