// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-12',
  devtools: { enabled: true },
  srcDir: 'src/',
  // css: ['~/src/assets/css/main.css'],
  experimental: {
    typedPages: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        {
          rel: 'stylesheet',
          href: '/assets/css/main.css',
        },
      ],
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
    '@nuxt/fonts',
    '@nuxt/icon',
  ],
})
