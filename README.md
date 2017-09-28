# vue-super-cli

> this is super vue-cli to mixins more methods
## 项目描述

在开发过程中，我们可能经常要进行项目接口环境的切换。或者我们可能遇到多个测试环境的变更。（比如：
前后端分离，后端定义接口规范，前端需要mock服务提供接口。其次我们要发测试环境，要发预发环境，要发生产环境）
此项目就是为了简化这些步骤而扩展的vue-cli工具。

## 示例
当我们开发的时候，我们需要先运行 ``npm run init`` 
接着我们需要配置根目录下的   ``configEnv.json文件``，选择我们想要变更的接口环境
> 这里需要说明一下, 初始的时候，我们是没有configEnv.json这个文件的，这个文件在git中也是不会去
提交的，就是为了防止团队成员之间的环境冲突，这里我为了更好的演示，便提交了该文件

![image](http://img.souche.com/f2e/e25c2ff81a351d9c30ac1b77591ebcb8.png)
当我们需要进行项目发布时，会启动选项配置：
![image](http://img.souche.com/f2e/5baaead3b5f24eca278bcb2780f50bfe.png)
当选择不同的环境时，所取得接口地址也是不一样的，所以我们的接口配置文件是这样的：
![image](http://img.souche.com/f2e/ab91d93864ff1d1adf96685ffba17f02.png)

## 项目说明
* 1 这里我使用了mock服务生成接口文档，这里我使用了我们搜车公司提供的<a href="https://easy-mock.com/">easy-mock</a>
支持 Swagger，如果你不知道什么是<a href="http://swagger.io">Swagger</a>，然后利用<a href="https://github.com/easy-mock/easy-mock-cli">Easy Mock CLI</a>
对接口进行自动生成
* 2 改造webpack config 文件，进行环境配置

## 脚手架使用步骤

``` bash
# 安装依赖
npm install

# 生成环境配置文件
npm run init

# 自动生成接口
npm run api

# 启动测试服务
npm run dev

# 准备发布
npm run build
```
