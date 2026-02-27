// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  prisma: {
    autoSetupPrisma: true,
  },
  image: {
    provider: 'ipx',
    dir: 'storage',
  },
  routeRules: {
    '/api/home': { swr: 300 },
    '/api/contacts': { swr: 300 },
    '/api/resume': { swr: 300 },
    '/api/projects': { swr: 300 },
    '/api/projects/**': { swr: 300 },
  },
  // runtimeConfig: {
  //   public: {
  //     storagePath: process.env.STORAGE_PATH ?? './storage',
  //   }
  // },
  // nitro: {
  //   devProxy: {
  //     '/images': {
  //       target: 'http://localhost:3000/storage',
  //       changeOrigin: true
  //     }
  //   }
  // }
})