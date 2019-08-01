const getters = {
  // 登录状态
  isLogin(state) {
    if (Object.keys(state.userInfo).length  !== 0) {
      return true;
    } else {
      return false;
    }
  }
}

export default getters
