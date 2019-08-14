const mutations = {
  // 设置用户登录信息
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  // 设置用户煤球数量
  setPointsA (state, pointsA) {
    state.userInfo.pointsA = pointsA
  },
  // 设置店铺分类
  setClassify (state, classify) {
    state.classify = classify
  },
  // 设置信息分类
  setClassifymsg (state, classifymsg) {
    state.classifymsg = classifymsg
  },
  // 设置下拉刷新请求开关
  setIsPullingDown (state, isPullingDown) {
    state.isPullingDown = isPullingDown
  },
  // 设置上拉加载请求开关
  setIsPullingUp (state, isPullingUp) {
    state.isPullingUp = isPullingUp
  },
  // 设置查看的店铺信息
  setShopInfo (state, shopInfo) {
    state.shopInfo = shopInfo
  },
  // 设置查看的信息详情
  setMsgDetail (state, msgDetail) {
    state.msgDetail = msgDetail
  },
  // 设置供应、求购状态
  setMsgStatus (state, msgStatus) {
    state.msg_status = msgStatus
  }
}

export default mutations
