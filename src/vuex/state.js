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
  classifymsg: [
    {value: '0', label: '全部分类'},
    {
      value: '1',
      label: '测试信息分类1',
      children: [
        {value: '0', label: '信息1-1'},
        {value: '1', label: '信息1-2'},
        {value: '2', label: '信息1-3'},
        {value: '3', label: '信息1-4'},
        {value: '4', label: '信息1-5'},
        {value: '5', label: '信息1-6'},
        {value: '6', label: '信息1-7'},
        {value: '7', label: '信息1-8'},
        {value: '8', label: '信息1-9'},
        {value: '9', label: '信息1-10'}
      ]
    },
    {
      value: '2',
      label: '测试信息分类2',
      children: [
        {value: '0', label: '信息2-1'},
        {value: '1', label: '信息2-2'},
        {value: '2', label: '信息2-3'},
        {value: '3', label: '信息2-4'},
        {value: '4', label: '信息2-5'},
        {value: '5', label: '信息2-6'},
        {value: '6', label: '信息2-7'},
        {value: '7', label: '信息2-8'},
        {value: '8', label: '信息2-9'},
        {value: '9', label: '信息2-10'}
      ]
    },
    {
      value: '3',
      label: '测试信息分类3',
      children: [
        {value: '0', label: '信息3-1'},
        {value: '1', label: '信息3-2'},
        {value: '2', label: '信息3-3'},
        {value: '3', label: '信息3-4'},
        {value: '4', label: '信息3-5'},
        {value: '5', label: '信息3-6'},
        {value: '6', label: '信息3-7'},
        {value: '7', label: '信息3-8'},
        {value: '8', label: '信息3-9'},
        {value: '9', label: '信息3-10'}
      ]
    }
  ],
  // 信息类别数组
  msgarr: ['供应', '求购'],
  // 下拉刷新请求开关
  isPullingDown: true,
  // 上拉加载请求开关
  isPullingUp: true
}

export default state
