import * as config from './.contentful.json'
import { createClient } from './plugins/contentful'
import { Article } from './types'

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
      { hid: 'og:locale', name: 'og:locale', content: 'sv_SE' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'snackamat.se' },
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
  plugins: [
    '~/plugins/contentful',
    '~/plugins/vue-moment',
    '~/plugins/vue-truncate',
    '~/plugins/v-click-outside'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/vuetify'],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/moment',
    '@nuxtjs/sitemap'
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
      themes: {
        light: {
          primary: '#ff9800',
          secondary: '#ff5722',
          accent: '#99451F',
          error: '#f44336',
          warning: '#ffc107',
          info: '#607d8b',
          success: '#4caf50'
        }
      }
    },
    customVariables: ['~/assets/style/_vuetify.scss'],
    treeShake: true
  },
  /*
   ** Build configuration
   */
  build: {
    templates: [
      {
        src: './templates/robots.txt',
        dst: '../static/robots.txt',
        options: {
          env: process.env.NODE_ENV
        }
      }
    ],
    /*
     ** You can extend webpack config here
     */
    extend(cfg, ctx) {
      if (ctx.isDev) {
        cfg.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },
  sitemap: {
    hostname: 'https://snackamat.se',
    gzip: true,
    exclude: ['/404', '/artiklar'],
    async routes() {
      const [entries] = await Promise.all([
        // get all articles
        cdaClient.getEntries<Article>({
          content_type: 'article'
        })
      ])
      return [
        // map entries to URLs
        ...entries.items.map(entry => {
          return {
            url: `/artikel/${entry.fields.slug}`,
            changefreq: 'weekly',
            priority: 1,
            lastmodISO: entry.sys.updatedAt
          }
        })
      ]
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
    async routes() {
      const [entries] = await Promise.all([
        // get all articles
        cdaClient.getEntries<Article>({
          content_type: 'article'
        })
      ])
      return [
        // map entries to URLs
        ...entries.items.map(entry => `/artikel/${entry.fields.slug}`)
      ]
    }
  }
}
