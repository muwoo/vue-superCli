/**
 * @author monkeywang
 * Date: 17/9/28
 */
var path = require('path');

module.exports = {
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/'
};
