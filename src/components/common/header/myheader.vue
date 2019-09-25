<template>
    <div class="userinfo bgfff">
        <div class="user fl">
            <router-link tag="div" class="userimg fl" :to="{name: 'userInfo'}">
                <img :src="userInfo.userimg || 'static/img/userimg.png'">
            </router-link>
            <div class="username font_blod color1470cc fl">
                <router-link tag="span" class="username font26" :to="{name: 'userInfo'}">{{userInfo.username || '新用户'}}</router-link>
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
  }
}
</script>

<style scoped>
  @import "./static/css/myheader.css";

</style>
