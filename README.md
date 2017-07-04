# vue-cli多页面应用
校园二手交易平台

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
如果有问题：
参考<http://blog.csdn.net/ansu2009/article/details/53305134>
```
npm install jquery --save-dev
npm install style-loader --save-dev
npm install css-loader --save-dev
npm install file-loader --save-dev
```
参考 <https://segmentfault.com/q/1010000007360125>
第一步，
```
npm install node-sass --save-dev
npm install sass-loader --save-dev
```
第二部，打开webpack.base.config.js在loaders里面加上
```
{
   test: /\.scss$/,
   loaders: ["style", "css", "sass"]
}
```
第三部，在需要用到scss的地方写上
```
<style lang="scss" scoped>
  @import 'assets/sass/index.scss'
</style>
```
