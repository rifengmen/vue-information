<template>
  <div @click="tip" class="tipbtn colorfff bgff9500 font26">免责声明</div>
</template>

<script>
export default {
  name: 'tip',
  methods: {
    // 免责声明
    tip () {
      this.$message({
        message:
          '<div class="color666" style="padding: .1rem">\n' +
          '  <div class="font28 font_blod color1470cc" style="margin: .1rem 0">免责声明</div>\n' +
          '  <div style="padding: .06rem 0;line-height: 1.5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本平台所提供的信息，只供参考之用，不承担任何法律责任。</div>\n' +
          '  <div style="padding: .06rem 0;line-height: 1.5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本平台在此声明,不承担用户就使用或未使用本平台所提供的信息所引致的任何直接、间接、附带、从属、特殊、惩罚性的损害赔偿（包括但不限于收益、预期利润的损失或失去的业务、未实现预期的节省）。</div>\n' +
          '  <div style="padding: .06rem 0;line-height: 1.5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;凡以任何方式登陆本平台或直接、间接使用本平台资料者，视为自愿接受本平台声明的约束。</div>\n',
        showClose: true,
        dangerouslyUseHTMLString: true,
        duration: 0
      })
    }
  }
}
</script>

<style scoped>
@import 'static/css/tip.css';

</style>
