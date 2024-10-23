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
        "default-src": ["'self'", "https://clips.twitch.tv"],
        "frame-ancestors": ["'self'", "https://clip-twitch.vercel.app"],
        "frame-src": [
          "'self'",
          "https://clips.twitch.tv",
          "https://clip-twitch.vercel.app",
        ],
        "img-src": [
          "'self'",
          "data:",
          "https://static-cdn.jtvnw.net",
          "*.twitch.tv",
        ],
        "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https:"],
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
