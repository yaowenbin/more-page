// const setting = require('./src/utils/setting')
const path = require('path')
const { generateEntries } = require('./mutiple-entry')
const { projectSetting } = require('./setting')

const webpack = require('webpack')
const resolve = dir => path.join(__dirname, dir)
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: IS_PROD ? process.env.BASE_URL : '/',
  productionSourceMap: false,
  pages: generateEntries(),
  devServer: {
    open: true
  },
  configureWebpack: config => {
    const plugins = []

    plugins.push(
      new webpack.DefinePlugin({
        // 项目setting文件挂载进去
        'Window.setting': {
          setting: projectSetting
        }
      })
    )
    config.plugins = [...config.plugins, ...plugins]
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))

    // 使用svg组件
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.exclude.add(/node_modules/)
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)

    return config
  }
}
