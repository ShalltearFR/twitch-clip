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
      origin: process.env.WWW,
      methods: ["GET", "POST", "OPTIONS"],
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
        "frame-src": [
          "'self'",
          "https://clips.twitch.tv",
          "https://*.vercel.app",
          "https://vercel.live",
        ],
        "script-src": [
          "'self'",
          "'unsafe-inline'", // Autorise les scripts inline
          "'unsafe-eval'", // Si nécessaire
          "https://clips.twitch.tv",
          "https://*.vercel.app",
          "https://vercel.live",
        ],
        "img-src": [
          "'self'",
          "data:",
          "https://static-cdn.jtvnw.net",
          "*.twitch.tv",
        ],
        "style-src": ["'self'", "'unsafe-inline'"],
        "script-src-elem": [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          "https://clips.twitch.tv",
          "https://*.vercel.app",
          "https://vercel.live", // Ajoutez aussi ici pour les éléments script
        ],
        "script-src-attr": ["'self'", "'unsafe-inline'"],
      },
    },
  },
  // routeRules: {
  //   "/api/**": {
  //     security: {
  //       rateLimiter: { headers: true, interval: 60000, tokensPerInterval: 5 },
  //     },
  //     headers: {
  //       "Access-Control-Allow-Origin": process.env.WWW as string,
  //       "Access-Control-Allow-Methods": "GET, POST",
  //       "Access-Control-Allow-Headers":
  //         "Origin, X-Requested-With, Content-Type, Accept",
  //       xXSSProtection: "1",
  //       "Content-Security-Policy": [
  //         "default-src 'self' https://clips.twitch.tv",
  //         "frame-src 'self' https://clips.twitch.tv https://clip-twitch.vercel.app https://vercel.live",
  //         "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://clips.twitch.tv https://clip-twitch.vercel.app https://vercel.live",
  //         "img-src 'self' data: https://static-cdn.jtvnw.net *.twitch.tv",
  //         "style-src 'self' 'unsafe-inline'",
  //         "script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https://clips.twitch.tv https://clip-twitch.vercel.app https://vercel.live",
  //         "script-src-attr 'self' 'unsafe-inline'",
  //       ].join("; "),
  //     },
  //   },
  // },
});
