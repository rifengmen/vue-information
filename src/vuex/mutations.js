const mutations = {
  // 获取用户登录信息
  login (state, userInfo) {
    state.userInfo = userInfo
  },
  // 获取店铺分类
  getCategory (state, category) {
    state.category = category
  },
  // 设置下拉刷新请求开关
  setIsPullingDown (state, isPullingDown) {
    state.isPullingDown = isPullingDown
  },
  // 设置上拉加载请求开关
  setIsPullingUp (state, isPullingUp) {
    state.isPullingUp = isPullingUp
  }
}

export default mutations
