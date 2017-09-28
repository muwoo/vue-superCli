/**
 * @author monkeywang
 * Date: 17/9/28
 */
var path = require('path');
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var configEnv = require('../configEnv.json')

module.exports = merge(prodEnv, {
  env: 'development',
  // globalConfig 中的 key 需要为 JSON 字符串
  globalConfig: {
    NODE_ENV: JSON.stringify(configEnv.apiEnv)
  },
  index: path.resolve(__dirname, '../dist/index.html'),
  port: 8080,
  autoOpenBrowser: true,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {},
  cssSourceMap: false
})
