/**
 * @author monkeywang
 * Date: 17/9/28
 */

var merge = require('webpack-merge')
var commonEnv = require('./common.env')
var configEnv = require('../configEnv.json')

module.exports = merge(commonEnv, {
  env: 'development',
  // globalConfig 中的 key 需要为 JSON 字符串
  globalConfig: {
    NODE_ENV: JSON.stringify(configEnv.apiEnv)
  },
  port: 8080,
  autoOpenBrowser: true,
  proxyTable: {},
  cssSourceMap: false
})
