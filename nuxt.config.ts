// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/Portfolio/',
    head: {
      title: 'JoaoBGoode Dev',
      meta: [
        { name: 'description', content: 'Portfolio e Blog de João Victor (JoaoBGoode)' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/Portfolio/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/Portfolio/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/Portfolio/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/Portfolio/favicon-16x16.png' },
      ],
    },
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
