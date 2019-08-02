<template>
    <div class="userinfo bgfff">
        <div class="user fl">
            <router-link tag="div" class="userimg fl" :to="{name: 'userInfo'}">
                <img :src="userInfo.pic || 'static/img/userimg.png'">
            </router-link>
            <div class="username font34 font_blod color1470cc fl">
                <router-link tag="span" class="username" :to="{name: 'userInfo'}">{{userInfo.username || '新用户'}}</router-link>
            </div>
        </div>
        <router-link tag="div" class="shopbtn fr font26 colorff9500 bgfff tc" :to="(isSetShop ? {name: 'shopInfo'} : {name: 'registerShop'})">{{isSetShop ? "进入店铺" : "注册店铺"}}</router-link>
    </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      // 用户信息
      userInfo: this.$store.state.userInfo,
      // 是否已注册商铺
      isSetShop: false
    }
  },
  computed: {
    // 是否登录
    isLogin () {
      return this.$store.getters.isLogin
    }
  },
  methods: {
    // 获取用户商铺注册信息
    getIsSetShop () {
      // this.$axios.get('').then(result => {
      //   if (result.data.code === 0) {
      //     this.isSetShop = false
      //   } else if (result.data.code === 1) {
      //     this.isSetShop = true
      //   }
      // }).catch(error => {
      //   throw error
      // })
    }
  },
  created () {
    this.getIsSetShop()
  }
}
</script>

<style scoped>
  @import "./static/css/myheader.css";

</style>
