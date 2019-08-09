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
    <router-link tag="div" class="shopbtn fr font26 colorff9500 bgfff tc" :to="({name: 'sendMsg', query:{msg_status: msg_status}})">发布</router-link>
  </div>
</template>

<script>
export default {
  name: 'msgheader',
  props: {
    // 信息列表头部发布按钮，通过接收到的参数判断发布信息类型，1：供应信息；2：采购信息
    msg_status: {
      type: Number,
      default: function () {
        return 1
      }
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
@import "static/css/myheader.css";

</style>
