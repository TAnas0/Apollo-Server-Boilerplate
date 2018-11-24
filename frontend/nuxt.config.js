const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/auth0.js'],

  router: {
    middleware: ['loginUser']
  },

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/apollo', '@nuxtjs/dotenv'],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (!ctx.isServer) {
        config.node = {
          fs: 'empty'
        }
      }
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
  ** Apollo module options
  */
  apollo: {
    includeNodeModules: true,
    authenticationType: 'Bearer',
    errorHandler(error) {
      console.log(
        '%cError',
        'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        error.message
      )
    },
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql',
        wsEndpoint: '',
        persisting: ''
      },
      test: {
        httpEndpoint: 'http://localhost:4000/graphql',
        wsEndpoint: ''
      }
    }
  },

  /**
   * Auth0 configuration
   */
  auth0: {
    clientID: process.env.AUTH0_CLIENT_ID,
    domain: process.env.AUTH0_DOMAIN,
    updateSessionMinutes: 5
  }
}
