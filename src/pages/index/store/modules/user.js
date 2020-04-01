// import router from '../../router'
import Cookies from 'js-cookie'

const state = {
  // 机构id 后台提供
  token: Cookies.get('token')
}

const mutations = {
  // 用户令牌 -- 请求头中需要传
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  changeToken ({ commit }, token) {
    commit('SET_TOKEN', token)
    Cookies.set('token', token)
  },

  // 用户登录
  login ({ commit }, userInfo) {
    // const { loginName, password, remember } = userInfo

    return new Promise((resolve, reject) => {
      // login({
      //   loginName: loginName.trim(),
      //   password: password,
      //   autoLogin: remember ? '1' : '0'
      // })
      //   .then(response => {
      //     const { token } = response.data
      //     commit('SET_TOKEN', token)
      //   })
      //   .catch(error => {
      //     reject(error)
      //   })
    })
  },
  // 用户登出 (重置密码、退出登录)
  logout ({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      // logout()
      //   .then(() => {
      //     return dispatch('resetToken').then(() => {
      //       router.replace({
      //         path: '/'
      //       })
      //       resolve()
      //     })
      //   })
      //   .catch(error => {
      //     commit('SET_TOKEN', '')
      //     reject(error)
      //   })
    })
  },

  // 清空用户资料
  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
