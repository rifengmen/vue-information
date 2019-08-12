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
    <!-- 信息详情 start -->
    <div class="msgdetail">
      <div class="msgarea font30 font_blod">
        <div>
          <span>分类：</span>
          <span>分类1</span>
        </div>
        <div>
          <span>产地：</span>
          <span>山西省太原市小店区</span>
        </div>
      </div>
    </div>
    <!-- 信息详情 end -->
  </div>
</template>

<script>
export default {
  name: 'msgDetail',
  data () {
    return {
      // 信息详情
      msgDetail: this.$route.query.msgDetail,
      // 信息类别数组
      msgarr: this.$store.state.msgarr
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
