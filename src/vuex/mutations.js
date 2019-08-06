const mutations = {
  // 设置用户登录信息
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  // 设置用户煤球数量
  setPointsA (state, pointsA) {
    state.userInfo.pointsA = pointsA
  },
  // 获取店铺分类
  getCategory (state, category) {
    state.category = category
  },
  // 获取信息分类
  getCategory_msg (state, categorymsg) {
    state.categorymsg = categorymsg
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
