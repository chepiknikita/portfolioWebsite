// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: ['@nuxt/fonts', '@nuxt/image'],
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    provider: 'ipx',
    dir: resolve('./storage'),
  },
  routeRules: {
    '/**': {
      headers: {
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      },
    },
    '/api/home': { swr: 3600 },
    '/api/contacts': { swr: 3600 },
    '/api/resume': { swr: 3600 },
    '/api/projects': { swr: 3600 },
    '/api/projects/**': { swr: 3600 },
  }
})