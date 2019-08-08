<template>
  <div id="wangeditor">
    <div ref="editorE" class="text font32" style="text-align: left;line-height: 1.5;"></div>
  </div>
</template>

<script>
import E from 'wangeditor'

export default {
  name: 'wangeditor',
  props: {
    'value': {
      type: String
    }
    // , 'business': {
    //   type: String
    // }
  },
  data () {
    return {}
  },
  methods: {
    // 初始化配置富文本编辑器
    initEditor () {
      // 创建富文本编辑器，需要在需要在DOM元素创建完成后
      this.editor = new E(this.$refs.editorE)
      // 配置onchange函数，将值实时传给父组件
      this.editor.customConfig.onchange = (html) => {
        this.$emit('textchange', html)
      }
      // 配置菜单
      this.editor.customConfig.menus = []
      // 创建富文本此案编辑器
      this.editor.create()
      // 当传入的值为不为空时执行
      if (this.editorContent !== '') {
        // 设置内容
        this.$nextTick(() => {
          this.editor.txt.html(this.value)
        })
      }
    }
  },
  mounted () {
    this.initEditor()
  }
}
</script>

<style scoped>
.text {
  width: 4.8rem;
  height: auto;
  border: none;
}
</style>
