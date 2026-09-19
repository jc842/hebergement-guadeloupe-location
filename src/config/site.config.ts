// ============================================================================
// 1. FORMATS PUBLICITAIRES REVIVE ADSERVER (v6.0.8)
// ============================================================================
export const AD_FORMATS = {
  mobileBanner: {
    id: 'mobile-banner',
    name: 'Mobile Banner 623Custom',
    width: 320,
    height: 100,
  },
  mediumRectangle: {
    id: 'medium-rectangle',
    name: 'Medium Rectangle 627IAB Medium Rectangle',
    width: 300,
    height: 250,
  },
  largeRectangle: {
    id: 'large-rectangle',
    name: 'Large Rectangle',
    width: 336,
    height: 280,
  },
  halfPage: {
    id: 'half-page',
    name: 'Half Page 625Custom',
    width: 300,
    height: 600,
  },
  leaderboard: {
    id: 'leaderboard',
    name: 'Leaderboard 626IAB Leaderboard',
    width: 728,
    height: 90,
  },
  skyscraper: {
    id: 'skyscraper',
    name: 'Skyscraper 622IAB Wide Skyscraper',
    width: 160,
    height: 600,
  },
} as const;

export type AdFormatKey = keyof typeof AD_FORMATS;

// ============================================================================
// 2. CONTRAT D'INTERFACE DU SITE
// ============================================================================
export interface AdSlotConfig {
  zoneId: number;
  format: AdFormatKey;
}

export interface SiteConfig {
  // Identité & SEO
  name: string;
  domain: string;
  url: string;
  description: string;
  repo: string;

  // Internationalisation (i18n)
  i18n: {
    defaultLocale: string;
    locales: string[];
    prefixDefaultLocale: boolean;
  };

  // Anti-Footprint Design & Thème
  theme: {
    style: 'minimal-editorial' | 'magazine-card' | 'lexington-clean' | 'modern-compact';
    fontFamily: 'sans' | 'serif' | 'system';
    colorScheme: 'stone' | 'slate' | 'zinc' | 'neutral';
  };

  // Mesure d'audience (Matomo Cookieless conforme CNIL)
  matomo: {
    url: string;
    siteId: string;
  };

  // Régie Publicitaire Revive Adserver v6.0.8
  revive: {
    reviveId: string;
    scriptUrl: string;
    zones: {
      mobileSticky: AdSlotConfig;
      inContent: AdSlotConfig;
      sidebar?: AdSlotConfig;
      header?: AdSlotConfig;
    };
  };

  // Mentions Légales & Confidentialité minimalistes
  legal: {
    editor: string;
    address: string;
    contactEmail: string;
    hostName: string;
    hostAddress: string;
  };
}

// ============================================================================
// 3. CONFIGURATION PAR DÉFAUT DU SITE (À adapter par dossier de site)
// ============================================================================
export const siteConfig: SiteConfig = {
  name: "Mon Site Thématique",
  domain: "mon-domaine.fr",
  url: "https://www.mon-domaine.fr",
  description: "Guides, comparatifs et articles de fond sur notre thématique.",
  repo: "jc842/mon-domaine",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "minimal-editorial",
    fontFamily: "sans",
    colorScheme: "stone",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "1", // Remplacer par l'ID Matomo du site
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      // Priorité Smartphone : Mobile Banner 320x100 fixe en bas
      mobileSticky: {
        zoneId: 15,
        format: "mobileBanner",
      },
      // Insert dans les articles : Medium Rectangle 300x250 ou Large Rectangle 336x280
      inContent: {
        zoneId: 12,
        format: "mediumRectangle",
      },
      // Optionnel pour grands écrans
      sidebar: {
        zoneId: 10,
        format: "halfPage",
      },
      header: {
        zoneId: 14,
        format: "leaderboard",
      },
    },
  },

  legal: {
    editor: "Éditeur indépendant",
    address: "Sainte-Rose, Guadeloupe",
    contactEmail: "contact@mon-domaine.fr",
    hostName: "Cloudflare Inc. / Hetzner Online GmbH",
    hostAddress: "San Francisco, CA, USA / Gunzenhausen, Allemagne",
  },
};