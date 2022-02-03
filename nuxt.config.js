export default {

  dev: process.env.NODE_ENV !== 'production',

  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    // title: process.env.npm_package_name || "",
    // meta: [
    //   { charset: "utf-8" },
    //   { name: "viewport", content: "width=device-width, initial-scale=1" },
    //   {
    //     hid: "description",
    //     name: "description",
    //     content: process.env.npm_package_description || ""
    //   }
    // ],
    link: [{ rel: "icon", type: "image/x-icon", href: "icon.ico" }]
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/tailwindcss"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    '@nuxt/http',
    // Doc: https://github.com/nuxt/content
    "@nuxt/content"
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  pwa: {
    manifest: {
      name: 'Clotaire Damy - Portfolio',
      lang: 'en',
      start_url: 'https://clotairedamy.com/',
      short_name: 'Clotaire',
      display: 'standalone',
      background_color: '#111827',
      useWebmanifestExtension: false,
      theme_color: '#111827',
      icon: 'icon.png',
      appleStatusBarStyle:'black-translucent',
      sizes: [64, 120, 144, 152, 192, 384, 512]

    }
  },
  build: {


  }
};
