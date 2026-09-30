// https://nuxt.com/docs/api/configuration/nuxt-config
import vue from '@vitejs/plugin-vue'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/image', '@vueuse/nuxt'],
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
      { code: 'ca', name: 'Català', files:['ca/common.ca.json', 'ca/home.ca.json', 'ca/services.ca.json', 'ca/footer.ca.json', 'ca/legal.ca.json', 'ca/privacy.ca.json', 'ca/cookies.ca.json'] },
      { code: 'es', name: 'Español', files: ['es/common.es.json', 'es/home.es.json', 'es/services.es.json', 'es/footer.es.json', 'es/legal.es.json', 'es/privacy.es.json', 'es/cookies.es.json'] },
      { code: 'en', name: 'English', files: ['en/common.en.json', 'en/home.en.json', 'en/services.en.json', 'en/footer.en.json', 'en/legal.en.json', 'en/privacy.en.json', 'en/cookies.en.json'] }
    ],
    defaultLocale: 'ca',
    langDir: './',
    vueI18n: './i18n.config.ts'
  },
  nitro: {
    rollupConfig: {
      plugins: [vue() as any]
    }
  }
})