import axios from 'axios'
// require('dotenv').config();
const { GMAPS_API_KEY, API_KEY, SERVICE_DOMAIN, GANA_ID } = process.env;
const TITLE = '有限会社 丸明造園'
const DESCRIPTION = '私たち 丸明造園 は、「庭師を源流とする造園技能を引き継ぐ」少数精鋭集団です。埼玉県の入間市・所沢市を中心に、庭木の手入れ（植木・ガーデニング）からマンションの植栽管理まで、幅広く対応しております。お気軽にご相談ください。'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: TITLE,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: DESCRIPTION, },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg', href: '/favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ress',
  ],

  privateRuntimeConfig: {
    GMapsApiKey: GMAPS_API_KEY,
    apiKey: API_KEY,
    serviceDomain: SERVICE_DOMAIN,
    GAnaliticsID: GANA_ID,
  },

  publicRuntimeConfig: {
    GMapsApiKey: process.env.NODE_ENV !== 'production' ? GMAPS_API_KEY : undefined,
    apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
    serviceDomain: process.env.NODE_ENV !== 'production' ? SERVICE_DOMAIN : undefined,
    GAnaliticsID: process.env.NODE_ENV !== 'production' ? GANA_ID : undefined,
  },

  // publicRuntimeConfig: {
  //   serviceDomain: process.env.SERVICE_DOMAIN,
  //   apiKey: process.env.API_KEY,
  //   GMapsApiKey: process.env.GMAPS_API_KEY,
  // },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-microcms-module',
    '@nuxtjs/google-gtag',
  ],
  'google-gtag': {
    id: process.env.GANA_ID,
    // config: {
    //   anonymize_ip: true, // anonymize IP
    //   send_page_view: false, // might be necessary to avoid duplicated page track on page reload
    //   linker: {
    //     domains: ['domain.com','domain.org']
    //   }
    // },
    debug: true, // enable to track in dev mode
    // disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
    // additionalAccounts: [{
    //   id: 'AW-XXXX-XX', // required if you are adding additional accounts
    //   config: {
    //     send_page_view: false // optional configurations
    //   }
    // }]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true
  },


  // microCMS with package
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  generate: {
    async routes() {
      const pages = await axios
        .get('https://maruaki.microcms.io/api/v1/news?limit=10', {
          headers: { 'X-API-KEY': process.env.API_KEY }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/news/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  }
}
