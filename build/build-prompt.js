require('./check-versions')();
require('shelljs/global');

var inquirer = require('inquirer');

var chalk = require('chalk');

inquirer.prompt([{
  name: 'env',
  message: '请选择发布环境',
  type: 'list',
  default: 'dev',
  choices: [{
    name: '发布到测试环境',
    value: 'dev'
  },{
    name: '发布到预发环境',
    value: 'prepub'
  },{
    name: '发布到生产环境',
    value: 'prod'
  }]
}]).then(function (answers) {
  var cmd = `BUILD_ENV="${answers.env}" NODE_ENV="production" node build/build.js`;

  console.log();
  console.log('   $ ' + cmd);
  console.log();
  console.log('   building...');

  exec(cmd);
});
