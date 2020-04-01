
// 机构配置映射表
// 读取每个页面下的setting文件，

const path = require('path')
const glob = require('glob')

const projectSetting = () => {
  // 默认查询多页面地址
  const PATH_ENTRY = path.resolve(__dirname, './src/pages')

  // 约定构建出的页面用folder名字，默认入口为每个页面的main.js
  const entryFilePaths = glob.sync(PATH_ENTRY + '/**/setting.js')

  let setting = {}

  entryFilePaths.forEach((filePath) => {
    const filename = filePath.match(/([^/]+)\/main\.js$/)[1]
    console.log(filename)
    // 将该文件的数据赋值过去
    setting[filename] = {
      // 机构名称
      Title: '湖南人才公共教育网',
      // url请求地址
      baseURL: process.env.ENV === 'development' ? '/dev-api' : 'http://file.hnpxw.org/'
    }
    console.log('setting', setting)
  })

  return setting
}

module.exports = {
  projectSetting
}
