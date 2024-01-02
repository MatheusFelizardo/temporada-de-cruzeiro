// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Temporada de Cruzeiros',
      link: [
        {
          rel: 'preconect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconect',
          href: 'https://fonts.gstatic.com',
          
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Open+Sans:wght@300;400;500;600;700&display=swap',
        }

      ],
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
})
