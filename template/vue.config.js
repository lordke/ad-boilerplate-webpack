// const appConfig = require('./src/app.config')
const path = require('path')
const glob = require('glob')
const manifestPlugin = require('webpack-manifest-plugin')
let pages = {}
{{#typescript}}
glob.sync(path.join(__dirname, '/src/pages/*/*.ts')).forEach(entry => {
  // console.log(glob.sync(path.dirname(entry) + '/*.html')[0])
  pages[path.basename(entry, '.ts')] = {
{{else}}
glob.sync(path.join(__dirname, '/src/pages/*/*.js')).forEach(entry => {
  // console.log(glob.sync(path.dirname(entry) + '/*.html')[0])
  pages[path.basename(entry, '.js')] = {
{{/typescript}}
    // page 的入口
    entry,
    // 模板来源
    template: glob.sync(path.dirname(entry) + '/*.html')[0],
    // 在 dist/index.html 的输出
    filename:
      path.basename(glob.sync(path.dirname(entry) + '/*.html')[0], '.html') +
      '.html',
  }
  // console.log(pages[path.basename(entry, '.js')])
})

module.exports = {
  pages,
  productionSourceMap: false,
  {{#if_eq build "standalone"}}
  runtimeCompiler: true,
  {{/if_eq}}
  configureWebpack: {
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: appConfig.title,
    // Set up all the aliases we use in our app.
    resolve: {
      alias: require('./aliases.config').webpack,
    },
  },
  chainWebpack: config => {
    config.plugin('manifest').use(manifestPlugin, [
      {
        fileName: 'mf.json',
        // publicPath: config.build.assetsPublicPath
      },
    ])
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
  },
  // Configure Webpack's dev server.
  // https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md
  devServer: {
    ...(process.env.API_BASE_URL
      ? // Proxy API endpoints to the production base URL.
        { proxy: { '/api': { target: process.env.API_BASE_URL } } }
      : // Proxy API endpoints a local mock API.
        // { before: require('./tests/mock-api') }),
        {}),
  },
}
