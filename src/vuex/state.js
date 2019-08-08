const state = {
  // 用户信息
  userInfo: {
    // 用户名
    username: '测试用户名',
    // 用户头像
    userimg: 'static/img/userimg.png',
    // 是否注册店铺
    shopid: '5',
    // 煤球数量
    pointsA: '50',
    // 积分数量
    pointsB: '80',
    // 与排名第一相差煤球数量
    difference: '100'
  },
  // vip图片
  vip: [
    'static/img/Vip1.png',
    'static/img/Vip2.png',
    'static/img/Vip3.png',
    'static/img/Vip4.png',
    'static/img/Vip5.png',
    'static/img/Vip6.png',
    'static/img/Vip7.png',
    'static/img/Vip8.png',
    'static/img/Vip9.png',
    'static/img/Vip10.png'
  ],
  // 店铺分类
  classify: ['全部分类', '测试类别1', '测试类别2', '测试类别3', '测试类别4', '测试类别5', '测试类别6', '测试类别7', '测试类别8', '测试类别9', '测试类别10'],
  // 信息分类
  categorymsg: ['全部分类', '信息分类1', '信息分类2', '信息分类3', '信息分类4', '信息分类5', '信息分类6', '信息分类7', '信息分类8', '信息分类9', '信息分类10'],
  // 下拉刷新请求开关
  isPullingDown: true,
  // 上拉加载请求开关
  isPullingUp: true
}

export default state
