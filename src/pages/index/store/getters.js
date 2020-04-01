// 对vuex顶层数据进行过滤，不改动state里原数据
const getters = {
  token: state => state.user.token,
  cachedViews: state => state.cache.cachedViews
}

export default getters
