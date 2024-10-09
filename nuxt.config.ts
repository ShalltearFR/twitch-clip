// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3020,
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxtjs/color-mode",
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
  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storage: "localStorage", // or 'sessionStorage' or 'cookie'
    storageKey: "nuxt-color-mode",
  },
});
