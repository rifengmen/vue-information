<template>
  <div>
    授权中。。。
  </div>
</template>

<script>

export default {
  data () {
    return {
      token: '',
      code: ''
    }
  },
  computed: {},
  methods: {
    // 发送token设置用户信息
    setUserInfo () {
      let data = this.$qs.stringify(this.token)
      console.log(data)
      // this.$axios.post('', data).then(result => {
      //   if (result.data.code === 0) {
      //     this.$store.commit('setUserInfo', result.data.data)
      //   }
      // }).catch(error => {
      //   throw error
      // })
    },
    // sendCode () {
    //   let data = this.$qs.stringify({code: this.code})
    //   console.log(data)
    //   // // 发送给后台并请求token
    //   // this.$axios.post('', data).then(result => {
    //   //   window.localStorage.setItem('user_token', result.data.token)
    //   // }).catch(error => {
    //   //   throw error
    //   // })
    // }
    // 非静默授权，第一次有弹框
    getCode () {
      const APPID = 'wx990037c3569aa495'
      const REDIRECT_URI = 'http://h5gq.zhaomeiji.com/'
      const URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + APPID + '&redirect_uri=' + REDIRECT_URI + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      // 截取code
      this.getUrlCode()
      // 如果没有code，则去请求
      if (this.code == null || this.code === '') {
        window.location.href = URL
      } else {
        this.getUrlCode()
        // 自己的业务逻辑
        let data = this.$qs.stringify({code: this.code})
        console.log(data)
        confirm(location.search)
        // // 发送给后台并请求token
        // this.$axios.post('', data).then(result => {
        //   window.localStorage.setItem('user_token', result.data.token)
        // }).catch(error => {
        //   throw error
        // })
      }
    },
    // 截取url中的code方法
    getUrlCode () {
      let url = location.search
      this.code = url.substring(url.indexOf('code=') + 5, url.indexOf('state=') - 1)
    }
  },
  created () {
    this.token = window.localStorage.getItem('user_token')
    if (!this.token) {
      this.getCode()
      // 获取beforeLoginUrl，我们的前端页面
      let url = window.localStorage.getItem('beforeLoginUrl')
      // 跳转
      this.$router.push(url)
      // 删除本地beforeLoginUrl
      window.localStorage.removeItem('beforeLoginUrl')
    } else {
      this.setUserInfo()
    }
  }
}
</script>
<style scoped>
</style>
