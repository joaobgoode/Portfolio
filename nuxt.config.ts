// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/Portfolio/'
  },
  ssr: true,
  nitro: {
    preset: 'static'
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss'
  ], content: {
    renderer: { anchorLinks: false },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
            sepia: 'monokai'
          }
        }
      }
    }
  }
})
