<template>
  <div class="container">
    <!-- 用户信息 start -->
    <my-header></my-header>
    <!-- 用户信息 end -->
    <!-- 筛选条件 start -->
    <div class="search_cont color666">
      <div class="category">
        <el-select v-model="searchData.categorymsg">
          <el-option
            v-for="(item, index) in categorymsg"
            :key="index"
            :label="item"
            :value="index">
          </el-option>
        </el-select>
        <div class="site">
          <div @click="choose" class="choose tc colorcecece">
            <div class="font26">{{searchData.site || '地区选择'}}</div>
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
import MyHeader from '@/components/common/header/myheader'
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
        // 判断查询信息
        msg_status: '',
        // 信息分类
        categoryimg: 0,
        // 地区查询
        site: '',
        // 页码
        page: '1',
        // 总页数
        total: '0'
      },
      // 信息列表
      msgList: [
        {
          category_msg: '1，5，8，3',
          site: '测试城市1',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '刚刚发布',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
          phone: '18888888888'
        },
        {
          category_msg: '4，5，8，3',
          site: '测试城市4',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '5分钟前',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
          phone: '18888888888'
        },
        {
          category_msg: '6，5，8，3',
          site: '测试城市6',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '10分钟前',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
          phone: '18888888888'
        },
        {
          category_msg: '2，5，8，3',
          site: '测试城市2',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '11分钟前',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
          phone: '18888888888'
        },
        {
          category_msg: '4，5，8，3',
          site: '测试城市4',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '15分钟前',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
          phone: '18888888888'
        },
        {
          category_msg: '8，5，1，3',
          site: '测试城市8',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '25分钟前',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
          phone: '18888888888'
        },
        {
          category_msg: '9，5，8，3',
          site: '测试城市9',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '35分钟前',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
          phone: '18888888888'
        },
        {
          category_msg: '3，5，8，1',
          site: '测试城市3',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '45分钟前',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
          phone: '18888888888'
        },
        {
          category_msg: '6，5，8，3',
          site: '测试城市6',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '55分钟前',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
          phone: '18888888888'
        },
        {
          category_msg: '1，5，8，3',
          site: '测试城市1',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '58分钟前',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
          phone: '18888888888'
        },
        {
          category_msg: '4，5，8，3',
          site: '测试城市4',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '59分钟前',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
          phone: '18888888888'
        },
        {
          category_msg: '8，5，1，3',
          site: '测试城市8',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '1小时前',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
          phone: '18888888888'
        },
        {
          category_msg: '3，5，8，1',
          site: '测试城市3',
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          time: '1小时前',
          msgcode: '5-258741',
          send_time: '2019-08-06 06:44:25',
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
    categorymsg () {
      return this.$store.state.categorymsg
    },
    // 查询信息类别
    searchData_category_msg () {
      return this.searchData.categorymsg
    },
    // 查询地区
    site () {
      return this.searchData.site
    }
  },
  components: {
    MyHeader,
    MyFooter,
    MyScrollmsg,
    loading,
    VDistpicker
  },
  methods: {
    // // 获取信息分类
    // getCategory_msg () {
    //   console.log(this.categorymsg)
    //   this.$axios.get('').then(result => {
    //     if (result.data.code === 0) {
    //     } else if (result.data.code === 1) {
    //       this.$store.commit('getCategory_msg', result.data.data)
    //     }
    //   }).catch(error => {
    //     throw error
    //   })
    // },
    // 获取信息总页数
    getTotal () {
      this.searchData.total = 8
      // this.$axios.get('').then(result => {
      //   if (result.data.code === 0) {
      //   } else if (result.data.code === 1) {
      //     this.searchData.total = result.data.data
      //   }
      // }).catch(error => {
      //   throw error
      // })
    },
    // 获取信息列表资料公共方法
    getMsgList () {
      this.searchData.page = '1'
      this.isShowLoading = true
      let data = this.$qs.stringify(this.searchData)
      setTimeout(() => {
        this.isShowLoading = false
      }, 1000)
      let tests = {
        category_msg: '5，1，8，3',
        site: '测试城市5',
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
        time: '2小时前',
        msgcode: '5-258741',
        send_time: '2019-08-06 06:44:25',
        phone: '18888888888'
      }
      this.msgList.unshift(tests)
      // this.$axios.get('',data).then(result => {
      //   this.$store.commit('setIsPullingDown', true)
      //   if (result.data.code === 0) {
      //   } else if (result.data.code === 1) {
      //     this.isShowLoading = false
      //     this.shopsList = result.data.data
      //   }
      // }).catch(error => {
      //   throw error
      // })
      this.$store.commit('setIsPullingDown', true)
      console.log(data, '下拉刷新发送data')
    },
    // 下拉刷新
    _getMsgList () {
      this.searchData.site = ''
    },
    // 上拉加载更多
    getMoreMsgList () {
      this.searchData.page++
      let page = this.searchData.page
      let total = this.searchData.total
      let data = this.$qs.stringify(this.searchData)
      if (page > total) {
        this.loadText = '暂无更多数据'
      } else {
        // this.$axios.get('',data).then(result => {
        //   this.$store.commit('setIsPullingUp', true)
        //   if (result.data.code === 0) {
        //   } else if (result.data.code === 1) {
        //     this.isShowLoading = false
        //     this.shopsList = result.data.data
        //   }
        // }).catch(error => {
        //   throw error
        // })
      }
      let tests = {
        category_msg: '5，1，8，3',
        site: '测试城市5',
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
        time: '2小时前',
        msgcode: '5-258741',
        send_time: '2019-08-06 06:44:25',
        phone: '18888888888'
      }
      this.msgList.push(tests)
      this.$store.commit('setIsPullingUp', true)
      console.log(data, '上拉加载发送data')
    },
    // 显示隐藏省市县下拉框
    choose () {
      this.show = !this.show
      this.turnimg = !this.turnimg
    },
    // 省市县三级联动
    onSelected (data) {
      this.searchData.site = data.province.value + data.city.value + data.area.value
      this.show = false
      this.turnimg = false
    }
  },
  watch: {
    searchData_category_msg (newval, oldval) {
      this.getTotal()
      this.getMsgList()
    },
    site (newval, oldval) {
      this.getTotal()
      this.getMsgList()
    }
  },
  created () {
    if (this.msg_status === 1) {
      this.searchData.msg_status = 1
    } else if (this.msg_status === 2) {
      this.searchData.msg_status = 2
    }
    this.getTotal()
    // this.getCategory_msg()
    this.getMsgList()
  }
}
</script>

<style scoped>
@import "static/css/listmsg.css";
</style>
