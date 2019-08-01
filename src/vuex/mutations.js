const mutations = {
  // 获取用户登录信息
  login (state, userInfo) {
    state.userInfo = userInfo
  },
  // 获取店铺分类
  getCategory (state, category) {
    state.category = category
  }
}

export default mutations
