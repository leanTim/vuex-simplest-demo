# vue-vuex-demo

> A Vue.js project

vue+vuex 的一个小demo
通过vue-cli 搭建 `vue init webpack foldername`

在vuex的actions里通过 [fetch][https://segmentfault.com/a/1190000007019545]  异步请求数据(本地的data.json)

中间遇到一个小问题 刚开始直接在`actions`里 用fetch请求`data.json ` 但是请求返回的一直是一个空白页面，请求不到`data.json`

后来发现是因为用的前端路由(vue-router 没有做404页面处理) 所以请求都会返回一个空白的页面

解决方案是在 `build/webpack.dev.conf.js` 配置了一个后端的路由请求数据
```js
1
const express = require('express')
const app = express()
var appData = require('../data.json')
var router = express.Router()

2 在 devServer 里加上
before (app) {
      app.get('/api', (req, res) => {
          return res.json({
            data: appData
          })
      })
    }

```
这样就能请求到本地的json数据， 方便开发调试了

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
