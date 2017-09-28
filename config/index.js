var env = process.env.BUILD_ENV || 'local';

// 根据 BUILD_ENV 选择配置
var config = require('./' + env + '.env.js');

module.exports = config;
