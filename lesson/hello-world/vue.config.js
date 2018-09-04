const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  chainWebpack: config => {
    if (process.argv.indexOf('--report') !== -1) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [{}])
    }
  }
}
