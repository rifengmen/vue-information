<template>
  <div>
    <!-- 查看按钮 start -->
    <div class="site">
      <div @click="turn" class="choose color666">
        <div class="font26">{{activeSelectName || selectName}}</div>
        <img src="static/img/turnup.png" :class="(turnimg ? 'turnimg' : '_turnimg')">
      </div>
    </div>
    <!-- 查看按钮 end -->
    <!-- 付款信息 start -->
    <div class="paybox" v-if="show">
      <!-- 关闭弹框按钮 start -->
      <div class="closebtn bgfff colorff9500" @click="closemsg">关闭</div>
      <!-- 关闭弹框按钮 end -->
      <!-- 信息标题 start -->
      <div class="paytit bgfff color1470cc font32 tc">{{titName}}</div>
      <!-- 信息标题 end -->
      <!-- 信息内容 start -->
      <div class="paymsg bgfff font28">
        <!-- 信息内容省份 start -->
        <div class="province">
          <div class="classify" v-for="(item, index) in selectArr" :key="index">
            <el-radio v-model="activeSelect" :label="item.value">
              <span class="font28">{{item.label}}</span>
            </el-radio>
          </div>
        </div>
        <!-- 信息内容省份 end -->
        <!-- 信息内容城市 start -->
        <div class="city">
          <div class="classify" v-if="activeSelects" v-for="(item, index) in activeSelects" :key="index">
            <el-radio v-model="activeSelectCity" :label="item.value">
              <span class="font28">{{item.label}}</span>
            </el-radio>
          </div>
        </div>
        <!-- 信息内容城市 end -->
      </div>
      <!-- 信息内容 end -->
    </div>
    <!-- 付款信息 end -->
  </div>
</template>

<script>
export default {
  name: 'AREA',
  props: {
    // 接收全部分类
    selectArr: {
      type: Array,
      default () {
        return {}
      }
    },
    // 接收搜索分类
    searchDataSelect: {
      type: Number,
      default () {
        return 0
      }
    },
    // 选择提示
    selectName: {
      type: String,
      default () {
        return '请选择'
      }
    },
    // 信息标题
    titName: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      // 显示分类列表
      show: false,
      // 选中省份
      activeSelect: 0,
      // 选择省份对应城市
      activeSelects: [],
      // 选择城市
      activeSelectCity: 0,
      // 选中分类名称
      activeSelectName: '',
      // 箭头旋转
      turnimg: false
    }
  },
  computed: {
    // 选中地区
    activeArea () {
      return this.activeSelectName
    }
  },
  methods: {
    // 旋转箭头,查看分类信息
    turn () {
      this.turnimg = !this.turnimg
      this.show = true
    },
    // 关闭分类信息
    closemsg () {
      this.turnimg = !this.turnimg
      this.show = false
    },
    // 修改地区，全部地区
    setSearchDataClassifyAll () {
      for (let i = 0; i < this.selectArr.length; i++) {
        let data = this.selectArr[i]
        if (!data.children) {
          if (data.value === this.activeSelect) {
            this.closemsg()
            this.activeSelectName = data.label
            this.activeSelects = []
            this.activeSelectCity = 0
          }
        }
      }
      this.$emit('setSelectData', '')
    },
    // 修改地区
    setSearchDataClassify () {
      for (let i = 0; i < this.selectArr.length; i++) {
        let data = this.selectArr[i]
        if (data.value === this.activeSelect) {
          this.activeSelects = data.children
          for (let j = 0; j < data.children.length; j++) {
            let _data = data.children[j]
            if (_data.value === this.activeSelectCity) {
              this.closemsg()
              this.activeSelectName = data.label + _data.label
            }
          }
        }
      }
      this.$emit('setSelectData', this.activeArea)
    }
  },
  watch: {
    // 监听activeSelect的变化设置activeSelectName
    activeSelect (newval, oldval) {
      this.setSearchDataClassifyAll()
      this.setSearchDataClassify()
    },
    // 监听activeSelectCity的变化设置activeSelectName
    activeSelectCity (newval, oldval) {
      this.setSearchDataClassify()
    }
  }
}
</script>

<style scoped>
  @import "static/css/AREA.css";

</style>
