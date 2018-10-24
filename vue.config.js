module.exports = {
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('@chiaweilee/vue-markdown-loader')
      .loader('@chiaweilee/vue-markdown-loader')
      .options(require('./src/core/loader-option'))
  }
}
