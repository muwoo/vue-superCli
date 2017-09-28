var merge = require('webpack-merge')
var commonEnv = require('./common.env')

module.exports = merge(commonEnv, {
  env: 'development',
  // globalConfig 中的 key 需要为 JSON 字符串
  globalConfig: {
    NODE_ENV: JSON.stringify("development")
  },
  cssSourceMap: false
})
