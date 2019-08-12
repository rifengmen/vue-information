<template>
  <div class="container">
    <!-- 头部 start -->
    <div class="tit">
      <div class="backs" @click="backs">
        <img src="static/img/turnleftactive.png">
      </div>
      <div class="font26 font_blod color1470cc">{{userarr[status]}}</div>
      <div class="backs"></div>
    </div>
    <!-- 头部 end -->
  </div>
</template>

<script>
export default {
  name: 'userList',
  data () {
    return {
      // 我的列表名称
      userarr: ['我的供应', '我的求购', '我的查看'],
      // 我的列表状态
      status: this.$route.query.status
    }
  },
  methods: {
    // 后退
    backs () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
@import "static/css/userInfo.css";

</style>
