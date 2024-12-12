// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: [
    '@/assets/css/main.css', 
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  modules: ['radix-vue/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
