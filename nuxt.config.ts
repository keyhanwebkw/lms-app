// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: true,
  pages: true,
  devtools: { enabled: true },

  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        }
      ]
    }
  },

  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/style.css', '~/assets/css/global.css', 'swiper/swiper-bundle.css'],

  runtimeConfig: {
    public: {
      storage: {
        original: 'https://mojahaz.kwdemo.ir/core/public/storage/original/',
        thumbnail: 'https://mojahaz.kwdemo.ir/core/public/storage/thumbnail/'
      },
      apiURL: "",
      siteName: "",
      siteNameEn: "",
      siteURL: "",
      logoURL: "",
      storageURL: {
        thumbnail: "https://mojahaz.kwdemo.ir/core/public/storage/thumbnail/",
        original: "https://mojahaz.kwdemo.ir/core/public/storage/orginal/",
      },
      faviconURL: "",
      defaultPathStaticFiles: "/",
    }
  },

  nitro: {
    devProxy: {
      "/core/public/api": {
        target: "https://mojahaz.kwdemo.ir/core/public/api",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        changeOrigin: true,
      },
    },
    output: {
      dir: ".output",
      serverDir: ".output/server",
      publicDir: ".output/public",
    },
    rollupConfig: {
      external: ["bufferutil", "utf-8-validate"],
      output: {
        generatedCode: {
          symbols: true,
        },
      },
    },
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml", "/robots.txt"],
      failOnError: false,
    },
  },

  i18n: {
    locales: [
      {
        code: "fa-IR",
        name: "فارسی ( persian )",
        iso: "fa-IR",
        dir: "rtl",
        file: "lang/fa/index.ts",
      },
    ],
    defaultLocale: "fa-IR",
    detectBrowserLanguage: false,
    vueI18n: "lang/i18n.config.ts",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    typeCheck: true,
  },

  plugins: [
    { src: "~/plugins/outsideClick", mode: "client" },
    { src: "~/plugins/datepiker", mode: "client" },
  ],
});
