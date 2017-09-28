var commonEnv = require('./common.env')
var merge = require('webpack-merge')
module.exports = merge(commonEnv, {
  env: 'prod',
  // globalConfig 中的 key 需要为 JSON 字符串
  globalConfig: {
    NODE_ENV: JSON.stringify("production")
  },
  sourceMap: true,
  productionSourceMap: true,
  productionGzip: false,
  productionGzipExtensions: ['js', 'css'],
  bundleAnalyzerReport: process.env.npm_config_report
})
