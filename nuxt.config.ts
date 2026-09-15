// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/image'],
  app: {
    head: {
      title: 'Gran Vallès | Cuidadores a domicilio en Barcelona',
      meta: [
        { name: 'description', content: 'Servicio de asistencia sanitaria a domicilio, cuidador y auxiliar a domicilio, Vallés' }
      ],
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
      { code: 'ca', name: 'Català', files:['ca/home_ca.json', 'ca/privacy_ca.json'] },
      { code: 'es', name: 'Español', files: ['es/home_es.json', 'es/privacy_es.json'] },
      { code: 'en', name: 'English', files: ['en/home_en.json', 'en/privacy_en.json'] }
    ],
    defaultLocale: 'ca',
    langDir: './'
  }
})