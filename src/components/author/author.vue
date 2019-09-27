<template>
  <div class="tc">
    <!--正在登录中。。。-->
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
    // 发送code请求token
    sendCode () {
      let data = this.$qs.stringify({code: this.code})
      // 发送给后台并请求token
      this.$axios.post('index/index/login', data).then(result => {
        if (result.code === 0) {
          window.localStorage.setItem('zmj_user_token', this.$qs.stringify(result.data.data.userid))
          this.$store.commit('setUserInfo', result.data.data)
          // 获取beforeLoginUrl，我们的前端页面
          let url = this.$qs.parse(window.localStorage.getItem('zmj_beforeLoginUrl'))
          console.log(url, '页面跳转')
          // 跳转
          this.$router.push(url)
        }
      }).catch(error => {
        throw error
      })
    },
    // 非静默授权，第一次有弹框
    getCode () {
      const APPID = 'wx990037c3569aa495'
      const REDIRECT_URI = 'http://h5gq.zhaomeiji.com/demo'
      const URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + APPID + '&redirect_uri=' + REDIRECT_URI + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      // 截取code
      this.getUrlCode()
      // 如果没有code，则去请求
      if (this.code == null || this.code === '') {
        window.location.href = URL
      } else {
        console.log(this.code, 'code存在')
        // 自己的业务逻辑
        this.sendCode()
      }
    },
    // 截取url中的code方法
    getUrlCode () {
      let url = location.search
      this.code = url.substring(url.indexOf('code=') + 5, url.indexOf('state=') - 1)
      console.log(this.code, '获取code')
    }
  },
  created () {
    this.getCode()
    // this.token = window.localStorage.getItem('zmj_user_token')
    // if (!this.token) {
    //   this.getCode()
    //   // 获取beforeLoginUrl，我们的前端页面
    //   let url = window.localStorage.getItem('zmj_beforeLoginUrl')
    //   // 跳转
    //   this.$router.push(url)
    //   // 删除本地beforeLoginUrl
    //   window.localStorage.removeItem('zmj_beforeLoginUrl')
    // } else {
    //   this.setUserInfo()
    // }
  }
}
</script>
<style scoped>
</style>
