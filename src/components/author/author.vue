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
      code: '',
      winUrl: ''
    }
  },
  computed: {},
  methods: {
    // // 获取携带code的url
    // getCodeUrl () {
    //   const APPID = 'wx2ef679f3ae852ad9'
    //   const REDIRECT_URI = 'http://www.bibejc.com'
    //   const URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + APPID + '&redirect_uri=' + REDIRECT_URI + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
    //   window.location.href = URL
    // },
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
      const APPID = 'wx2ef679f3ae852ad9'
      const REDIRECT_URI = 'http://www.bibejc.com'
      const URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + APPID + '&redirect_uri=' + REDIRECT_URI + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      // 截取code
      this.code = this.getUrlCode().code
      // 如果没有code，则去请求
      if (this.code == null || this.code === '') {
        window.location.href = URL
      } else {
        // 自己的业务逻辑
        let data = this.$qs.stringify({code: this.code})
        console.log(data)
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
      var url = location.search
      this.winUrl = url
      var theRequest = {}
      if (url.indexOf('?') !== -1) {
        var str = url.substr(1)
        var strs = str.split('&')
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split('=')[0]] = (strs[i].split('=')[1])
        }
      }
      return theRequest
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
