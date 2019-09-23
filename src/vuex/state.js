const state = {
  // 用户信息
  userInfo: {
    // 用户id
    userId: '1',
    // 用户名
    username: '我是测试用户名',
    // 用户头像
    userimg: '',
    // 会员到期时间
    time: '9999-99-99',
    // 注册店铺id
    shopid: '5',
    // 煤球数量
    pointsA: '50',
    // 积分数量
    pointsB: '80',
    // 与排名第一相差煤球数量
    difference: '100'
  },
  // 行政区域
  AREA: [
    {
      value: '1',
      label: '测试信息分类1测试信息分类1',
      children: [
        {
          value: '0',
          label: '测试信息分类1信息1-1',
          children: [
            {value: '0', label: '测试信息分类1信息1-1信息1-1-1'},
            {value: '1', label: '信息1-1-2'},
            {value: '2', label: '信息1-1-3'},
            {value: '3', label: '信息1-1-4'},
            {value: '4', label: '信息1-1-5'},
            {value: '5', label: '信息1-1-6'},
            {value: '6', label: '信息1-1-7'},
            {value: '7', label: '信息1-1-8'},
            {value: '8', label: '信息1-1-9'}
          ]
        },
        {
          value: '1',
          label: '信息1-2',
          children: [
            {value: '0', label: '信息1-2-1'},
            {value: '1', label: '信息1-2-2'},
            {value: '2', label: '信息1-2-3'},
            {value: '3', label: '信息1-2-4'},
            {value: '4', label: '信息1-2-5'},
            {value: '5', label: '信息1-2-6'},
            {value: '6', label: '信息1-2-7'},
            {value: '7', label: '信息1-2-8'},
            {value: '8', label: '信息1-2-9'}
          ]
        },
        {
          value: '2',
          label: '信息1-3',
          children: [
            {value: '0', label: '信息1-3-1'},
            {value: '1', label: '信息1-3-2'},
            {value: '2', label: '信息1-3-3'},
            {value: '3', label: '信息1-3-4'},
            {value: '4', label: '信息1-3-5'},
            {value: '5', label: '信息1-3-6'},
            {value: '6', label: '信息1-3-7'},
            {value: '7', label: '信息1-3-8'},
            {value: '8', label: '信息1-3-9'}
          ]
        },
        {
          value: '3',
          label: '信息1-4',
          children: [
            {value: '0', label: '信息1-4-1'},
            {value: '1', label: '信息1-4-2'},
            {value: '2', label: '信息1-4-3'},
            {value: '3', label: '信息1-4-4'},
            {value: '4', label: '信息1-4-5'},
            {value: '5', label: '信息1-4-6'},
            {value: '6', label: '信息1-4-7'},
            {value: '7', label: '信息1-4-8'},
            {value: '8', label: '信息1-4-9'}
          ]
        },
        {
          value: '4',
          label: '信息1-5',
          children: [
            {value: '0', label: '信息1-5-1'},
            {value: '1', label: '信息1-5-2'},
            {value: '2', label: '信息1-5-3'},
            {value: '3', label: '信息1-5-4'},
            {value: '4', label: '信息1-5-5'},
            {value: '5', label: '信息1-5-6'},
            {value: '6', label: '信息1-5-7'},
            {value: '7', label: '信息1-5-8'},
            {value: '8', label: '信息1-5-9'}
          ]
        },
        {
          value: '5',
          label: '信息1-6',
          children: [
            {value: '0', label: '信息1-6-1'},
            {value: '1', label: '信息1-6-2'},
            {value: '2', label: '信息1-6-3'},
            {value: '3', label: '信息1-6-4'},
            {value: '4', label: '信息1-6-5'},
            {value: '5', label: '信息1-6-6'},
            {value: '6', label: '信息1-6-7'},
            {value: '7', label: '信息1-6-8'},
            {value: '8', label: '信息1-6-9'}
          ]
        },
        {
          value: '6',
          label: '信息1-7',
          children: [
            {value: '0', label: '信息1-7-1'},
            {value: '1', label: '信息1-7-2'},
            {value: '2', label: '信息1-7-3'},
            {value: '3', label: '信息1-7-4'},
            {value: '4', label: '信息1-7-5'},
            {value: '5', label: '信息1-7-6'},
            {value: '6', label: '信息1-7-7'},
            {value: '7', label: '信息1-7-8'},
            {value: '8', label: '信息1-7-9'}
          ]
        },
        {
          value: '7',
          label: '信息1-8',
          children: [
            {value: '0', label: '信息1-8-1'},
            {value: '1', label: '信息1-8-2'},
            {value: '2', label: '信息1-8-3'},
            {value: '3', label: '信息1-8-4'},
            {value: '4', label: '信息1-8-5'},
            {value: '5', label: '信息1-8-6'},
            {value: '6', label: '信息1-8-7'},
            {value: '7', label: '信息1-8-8'},
            {value: '8', label: '信息1-8-9'}
          ]
        },
        {
          value: '8',
          label: '信息1-9',
          children: [
            {value: '0', label: '信息1-9-1'},
            {value: '1', label: '信息1-9-2'},
            {value: '2', label: '信息1-9-3'},
            {value: '3', label: '信息1-9-4'},
            {value: '4', label: '信息1-9-5'},
            {value: '5', label: '信息1-9-6'},
            {value: '6', label: '信息1-9-7'},
            {value: '7', label: '信息1-9-8'},
            {value: '8', label: '信息1-9-9'}
          ]
        }
      ]
    }
  ],
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
  classify: [
    // '全部分类',
    // '测试类别1',
    // '测试类别2',
    // '测试类别3',
    // '测试类别4',
    // '测试类别5',
    // '测试类别6',
    // '测试类别7',
    // '测试类别8',
    // '测试类别9',
    // '测试类别10'
  ],
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
  // 认证类别，1：不认证 2：个人认证 3：企业认证
  typearr: ['不认证', '个人认证', '企业认证'],
  // 信息类别
  msgarr: ['求购', '供应'],
  // 下拉刷新请求开关
  isPullingDown: true,
  // 上拉加载请求开关
  isPullingUp: true,
  // 查看的店铺信息
  shopInfo: '',
  // 查看的信息详情
  msgDetail: '',
  // 投诉原因
  cause: ['请选择投诉原因', '已联系，无此货源', '电话号码为空', '其他'],
  // 供应、求购状态(会员中心用)
  msg_status: '',
  // 查看自己发布的信息时隐藏信息详情部分按钮
  userlistshow: false,
  // 用户授权code
  code: 'ceshi'
}

export default state
