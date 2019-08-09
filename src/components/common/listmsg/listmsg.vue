<template>
  <div class="container">
    <!-- 用户信息 start -->
    <msg-header :msg_status="msg_status"></msg-header>
    <!-- 用户信息 end -->
    <!-- 筛选条件 start -->
    <div class="search_cont color666">
      <div class="category">
        <el-cascader
          v-model="searchData.classifymsg"
          :options="classifymsg"
          @change="handleChange"></el-cascader>
        <div class="site">
          <div @click="choose" class="choose tc colorcecece">
            <div class="font26 color666">{{searchData.area || '地区选择'}}</div>
            <img src="static/img/turnup.png" :class="(turnimg ? 'turnimg' : '')">
          </div>
          <p class="pwrap bgfff" v-if="show">
            <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
          </p>
        </div>
      </div>
    </div>
    <!-- 筛选条件 end -->
    <!-- 下拉刷新动画 start -->
    <loading v-if="isShowLoading"></loading>
    <!-- 下拉刷新动画 end -->
    <!-- 信息列表 start -->
    <my-scrollmsg
      :msgList="msgList"
      :loadText="loadText"
      @pullingDown="_getMsgList"
      @pullingup="getMoreMsgList">
    </my-scrollmsg>
    <!-- 信息列表 end -->
    <!-- 底部导航 start -->
    <my-footer></my-footer>
    <!-- 底部导航 end -->
  </div>
</template>

<script>
import MsgHeader from '@/components/common/header/msgheader'
import MyFooter from '@/components/common/footer/myfooter'
import MyScrollmsg from '@/components/common/myscrollmsg/myscrollmsg'
import loading from '@/components/common/loading/loading'
import VDistpicker from 'v-distpicker'

export default {
  name: 'listmsg',
  props: {
    // 信息列表，通过接收到的参数判断加载信息，1：供应信息；2：采购信息
    msg_status: {
      type: Number,
      default: function () {
        return 1
      }
    }
  },
  data () {
    return {
      // 下拉刷新
      isShowLoading: true,
      // 筛选条件
      searchData: {
        // 信息类别，1：供应，2：求购
        msg_status: '',
        // 信息分类
        classifymsg: '0',
        // 地区查询
        area: '',
        // 页码
        page: '1'
      },
      // 总页数
      total: '0',
      // 信息列表
      msgList: [
        {
          // 信息类别，1：供应，2：求购
          msg_status: 1,
          // 信息分类所属
          classifymsg: '1-3，2-6，3-9',
          // 信息地区
          area: '测试城市1',
          // 信息详情
          business: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          // 信息编号
          msgcode: '5-258741',
          // 发布时间
          send_time: '2019-08-06 06:44:25',
          // 联系电话
          phone: '18888888888'
        }
      ],
      // 加载提示语
      loadText: '加载更多...',
      // 显示省市县下拉框
      show: false,
      // 箭头旋转
      turnimg: false
    }
  },
  computed: {
    // 信息分类
    classifymsg () {
      return this.$store.state.classifymsg
    },
    // 查询信息类别
    searchData_classifymsg () {
      return this.searchData.classifymsg
    },
    // 查询地区
    area () {
      return this.searchData.area
    }
  },
  components: {
    MsgHeader,
    MyFooter,
    MyScrollmsg,
    loading,
    VDistpicker
  },
  methods: {
    // 获取信息列表资料公共方法
    getMsgList () {
      this.searchData.page = '1'
      this.isShowLoading = true
      let data = this.$qs.stringify(this.searchData)
      this.$axios.get('Index/index/askbuy', data).then(result => {
        this.$store.commit('setIsPullingDown', true)
        if (result.data.code === 0) {
          this.isShowLoading = false
          this.msgList = result.data.data
          this.total = result.data.total
        }
      }).catch(error => {
        throw error
      })
      this.$store.commit('setIsPullingDown', true)
    },
    // 下拉刷新
    _getMsgList () {
      this.searchData.area = ''
    },
    // 上拉加载更多
    getMoreMsgList () {
      this.searchData.page++
      let currentpage = this.searchData.page
      let total = this.total
      let data = this.$qs.stringify(this.searchData)
      if (currentpage > total) {
        this.loadText = '暂无更多数据'
      } else {
        this.$axios.get('Index/index/askbuy', data).then(result => {
          this.$store.commit('setIsPullingUp', true)
          if (result.data.code === 0) {
            this.isShowLoading = false
            this.msgList = result.data.data
            this.total = result.data.total
          }
        }).catch(error => {
          throw error
        })
      }
      this.$store.commit('setIsPullingUp', true)
    },
    // 显示隐藏省市县下拉框
    choose () {
      this.show = !this.show
      this.turnimg = !this.turnimg
    },
    // 省市县三级联动
    onSelected (data) {
      this.searchData.area = data.province.value + data.city.value + data.area.value
      this.show = false
      this.turnimg = false
    },
    // 信息分类发生变化时触发
    handleChange (value) {
      this.searchData.classifymsg = value.join('-')
    }
  },
  watch: {
    searchData_classifymsg (newval, oldval) {
      this.getMsgList()
    },
    area (newval, oldval) {
      this.getMsgList()
    }
  },
  created () {
    if (this.msg_status === 1) {
      this.searchData.msg_status = 1
    } else if (this.msg_status === 2) {
      this.searchData.msg_status = 2
    }
    this.getMsgList()
  }
}
</script>

<style scoped>
@import "static/css/listmsg.css";
</style>
