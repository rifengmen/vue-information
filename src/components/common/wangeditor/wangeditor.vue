<template>
  <div id="wangeditor">
    <div ref="editorE" style="text-align: left"></div>
  </div>
</template>

<script>
import E from 'wangeditor'

export default {
  name: 'wangeditor',
  props: {
    editorContent: {
      type: String,
      // require: true,
      default: function () {
        return ''
      }
    }
  },
  data () {
    return {}
  },
  mounted () {
    // 创建富文本编辑器，需要在需要在DOM元素创建完成后
    let editor = new E(this.$refs.editorE)
    // 配置onchange函数，将值实时传给父组件
    editor.customConfig.onChange = (html) => {
      this.$emit('updateContent', html)
    }
    // 配置菜单
    editor.customConfig.menus = []
    // 创建富文本此案编辑器
    editor.create()
    // 当传入的值为不为空时执行
    if (this.editorContent !== '') {
      // 设置内容
      editor.txt.html(this.editorContent)
    }
  }
}
</script>

<style scoped>

</style>
