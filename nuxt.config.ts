// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/fonts'],
  css: ['~/assets/css/reset.css', '~/assets/css/base.css'],
  routeRules: {
    '/': { prerender: true },
  },
  typescript: {
    typeCheck: true
  }
})