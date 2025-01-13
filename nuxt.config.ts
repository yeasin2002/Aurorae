// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-12',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  site: {
    url: 'https://furniture-worlds.vercel.app',
    name: 'furniture worlds',
  },

  seo: {
    meta: {
      description: 'Furniture World',
      themeColor: [
        { content: '#18181b', media: '(prefers-color-scheme: dark)' },
        { content: 'white', media: '(prefers-color-scheme: light)' },
      ],
      twitterCreator: '@yeasin2002_dev',
      twitterSite: '@yeasin2002_dev',
      author: 'Md Kawsar Islam Yeasin',
      colorScheme: 'dark light',
      applicationName: 'Furniture World',

      ogSiteName: 'Furniture World',
      ogLocale: 'en_US',
      ogType: 'website',
      ogUrl: 'https://furniture-worlds.vercel.app/',
      ogTitle: 'Furniture World',

      ogImage: '/cover.png',
      robots: 'index, follow',
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-og-image',
    '@nuxtjs/seo',
    '@nuxtjs/robots',
    '@nuxt/image',
  ],
})
