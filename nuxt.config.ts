// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],
  app: {
    head: {
      title: 'Gran Vallès | Cuidadores a domicilio en Barcelona',
      link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
    },
  },
  i18n: {
    locales: [
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'ca', name: 'Català', file: 'ca.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'es',
    langDir: 'locales/'
  }
})