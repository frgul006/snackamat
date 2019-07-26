const colors = require('vuetify/es5/util/colors').default
const config = require('./.contentful.json')
const { createClient } = require('./plugins/contentful')
const cdaClient = createClient(config)

module.exports = {
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN
  },
  mode: 'universal',
  manifest: {
    name: 'snackamat.se',
    lang: 'sv'
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/contentful', '~/plugins/vue-moment.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/vuetify', { treeShake: true }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/moment'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: '#ff9800',
      secondary: '#ff5722',
      accent: '#795548',
      error: '#f44336',
      warning: '#ffc107',
      info: '#607d8b',
      success: '#4caf50'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },
  /*
   ** Get all articles from Contentful
   ** and generate the needed files upfront
   **
   ** Included:
   ** - articles
   */
  generate: {
    routes() {
      return Promise.all([
        // get all articles
        cdaClient.getEntries({
          content_type: 'article'
        })
      ]).then(([entries]) => {
        return [
          // map entries to URLs
          ...entries.items.map(entry => `/${entry.fields.slug}`)
        ]
      })
    }
  }
}
