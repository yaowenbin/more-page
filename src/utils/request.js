import axios from 'axios'
import { Message } from 'element-ui'
import { throttle } from '@/utils'

// baseUrl、token 不同

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
  Message({
    message: msg || 'error',
    type: 'error',
    duration: 3 * 1000
  })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  switch (status) {
    case 404:
      tip('请求的资源不存在')
      break
    default:
      console.log(other)
  }
}

/**
 * 创建axios实例
 */
const service = axios.create({
  timeout: 10000 // request timeout
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  config => {
    const token = 'token'
    token && (config.headers['jtoken'] = token)
    // 根据setting配置动态设置baseurl
    config.baseURL = ''
    return config
  },

  error => Promise.error(error)
)

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  response => {
    Message.closeAll()
    const code = response.data.code

    if (code === '00000') {
      return response.data
    } else {
      switch (code) {
        case '00002':
          throttle(tip('登录信息失效，请重新登录'), 1000)
          return Promise.reject(response.data)

        default:
          throttle(tip(response.data.message), 1000)
          return Promise.reject(response.data)
      }
    }
  },
  error => {
    const {
      response
    } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    }
  }

)

export default service
