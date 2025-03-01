export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-preset-env': false,
        'tailwindcss': {},
        'autoprefixer': {},
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

      config.module.rules.push({
        test: /.mdx?$/,
        use: [
          'babel-loader',
          '@mdx-js/vue-loader'
        ]
      })
    }
  }
}