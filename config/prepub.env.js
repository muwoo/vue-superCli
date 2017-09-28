var path = require('path');

module.exports = {
  env: 'prepub',
  // globalConfig 中的 key 需要为 JSON 字符串
  globalConfig: {
    NODE_ENV: JSON.stringify("prepub")
  },
  sourceMap: true,
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  productionSourceMap: true,
  productionGzip: false,
  productionGzipExtensions: ['js', 'css'],
  bundleAnalyzerReport: process.env.npm_config_report
}
