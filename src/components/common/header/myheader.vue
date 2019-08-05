<template>
    <div class="userinfo bgfff">
        <div class="user fl">
            <router-link tag="div" class="userimg fl" :to="{name: 'userInfo'}">
                <img :src="userInfo.userimg || 'static/img/userimg.png'">
            </router-link>
            <div class="username font34 font_blod color1470cc fl">
                <router-link tag="span" class="username" :to="{name: 'userInfo'}">{{userInfo.username || '新用户'}}</router-link>
            </div>
        </div>
        <router-link tag="div" class="shopbtn fr font26 colorff9500 bgfff tc" :to="({name: 'registerShop'})">{{userInfo.shopid ? "管理店铺" : "注册店铺"}}</router-link>
    </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
    }
  },
  computed: {
    // 用户信息
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    // 获取登录用户信息
    getUserInfo () {
      console.log('获取登录用户信息')
      // this.$axios.get('').then(result => {
      //   if (result.data.code === 0) {
      //     this.$message.error(result.data.msg)
      //   } else if (result.data.code === 1) {
      //     this.$store.commit('setUserInfo', result.data.data)
      //   }
      // }).catch(error => {
      //   throw error
      // })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style scoped>
  @import "./static/css/myheader.css";

</style>
