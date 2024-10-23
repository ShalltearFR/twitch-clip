// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3020,
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL as string,
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/styles/global.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-security",
  ],
  i18n: {
    locales: [
      {
        code: "fr",
        file: "fr-FR.json",
      },
      {
        code: "en",
        file: "en-US.json",
      },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "fr",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
    },
  },
  security: {
    corsHandler: {
      origin: process.env.WWW as string,
      methods: ["GET"],
    },
    rateLimiter: {
      headers: true,
      interval: 60000,
      tokensPerInterval: 10,
    },
    headers: {
      xXSSProtection: "1",
      contentSecurityPolicy: {
        "frame-ancestors": ["'self'", "https://clips.twitch.tv"], // Allows iframe embedding from these domains
        "frame-src": ["https://clips.twitch.tv"], // Allows iframes to be loaded from this domain

        // Format correct pour Nuxt Security
        "img-src": [
          "'self'",
          "data:",
          "https://static-cdn.jtvnw.net",
          "*.twitch.tv",
        ],
        // Tu peux ajouter d'autres directives si nécessaire :
        "default-src": ["'self'"],
        // Par exemple pour les scripts, styles, etc.
        "script-src": [
          "'self'", // Scripts provenant du même domaine
          "'unsafe-inline'", // Scripts inline (souvent non recommandé, mais ajouté ici)
          "'unsafe-eval'", // Permet l'utilisation d'eval()
          "https:", // Scripts provenant de sources HTTPS
        ],
      },
    },
  },
  routeRules: {
    "/api/**": {
      security: {
        rateLimiter: { headers: true, interval: 60000, tokensPerInterval: 5 },
      },
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": process.env.WWW as string,
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        xXSSProtection: "1",
      },
    },
  },
});
