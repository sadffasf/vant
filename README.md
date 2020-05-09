# hello-world

> A Vue.js project

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
# vant
# node-sass编译问题
``` bash
1、
npm install node-sass --save-dev //安装node-sass

npm install sass-loader --save-dev //安装sass-loader

npm install style-loader --save-dev //安装style-loader

2、webpack.base.conf.js中
{
  test: /\.scss$/,
  loaders: ["style-loader", "css-loader", "sass-loader"]
},
3、
有时候可能因为当前sass的版本太高，webpack编译时出现了错误，这个时候只需要换成低版本的就行，下面说一下修改方法，很简单，如下，找到package.json文件，里面的 "sass-loader"的版本更换掉 就行了。
"sass-loader": "^7.3.1",
```
