<template>
    <div class="container">
      <!-- 头部 start -->
      <div class="tit">
        <div class="backs" @click="backs">
          <img src="static/img/turnleftactive.png">
        </div>
        <div class="font26 font_blod color1470cc">{{msgarr[msgDetail.msg_status-1]}}详情</div>
        <div class="backs"></div>
      </div>
      <!-- 头部 end -->
    </div>
</template>

<script>
export default {
  name: 'msgDetail',
  data () {
    return {
      // 信息详情
      msgDetail: this.$route.query.msgDetail,
      // 信息类别
      msgarr: ['供应', '采购']
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

</style>
