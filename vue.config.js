const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/AlFakher/'
    : '/',
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions = {

        }
        return options
      })
  }
})
