<template>
  <div class="container">
    <!-- 用户信息 start -->
    <my-header></my-header>
    <!-- 用户信息 end -->
    <!-- 选择 搜索 start -->
    <div class="search_cont color666">
      <div class="category">
        <el-select v-model="searchData.category">
          <el-option
            v-for="(item, index) in category"
            :key="index"
            :label="item"
            :value="index">
          </el-option>
        </el-select>
        <div class="site">
          <div @click="choose" class="choose tc color666">
            <div class="font26">{{searchData.site || '地区选择'}}</div>
            <img src="static/img/turnup.png" :class="(turnimg ? 'turnimg' : '')">
          </div>
          <p class="pwrap bgfff" v-if="show">
            <v-distpicker type="mobile" @selected="onSelected"></v-distpicker>
          </p>
        </div>
        <el-select v-model="searchData.sort">
          <el-option
            v-for="(item, index) in sort"
            :key="index"
            :label="item"
            :value="index">
          </el-option>
        </el-select>
      </div>
      <div class="search">
        <div class="search_input fl">
          <input type="text" v-model="searchData.search" placeholder="请输入标签进行搜索" class="fl"/>
          <img src="static/img/search.png" class="fr">
        </div>
        <div :class="'search_btn font26 tc fr' + (isSend ? ' colorff9500 bgfff' : ' color999 bge7e7e7')" @click="sendSearch">搜索</div>
      </div>
    </div>
    <!-- 选择 搜索 end -->
    <!-- 下拉刷新动画 start -->
    <loading v-if="isShowLoading"></loading>
    <!-- 下拉刷新动画 end -->
    <!-- 店铺列表 start -->
    <my-scroll
      :shopsList="shopsList"
      :loadText="loadText"
      @pullingDown="_getShopsList"
      @pullingup="getMoreShopsList">
    </my-scroll>
    <!-- 店铺列表 end -->
    <!-- 底部导航 start -->
    <my-footer></my-footer>
    <!-- 底部导航 end -->
  </div>
</template>

<script>
import MyHeader from '@/components/common/header/myheader'
import MyFooter from '@/components/common/footer/myfooter'
import MyScroll from '@/components/common/myscroll/myscroll'
import loading from '@/components/common/loading/loading'
import VDistpicker from 'v-distpicker'

export default {
  name: 'index',
  data () {
    return {
      // 测试接口数据
      test: {},
      // 下拉刷新
      isShowLoading: true,
      // 搜索
      searchData: {
        // 分类搜索
        category: 0,
        // 地区搜索
        site: '',
        // 排序方式，0：时间顺序(默认)；1：时间倒序；2：等级顺序；3：等级倒序
        sort: 0,
        // 标签搜索
        search: '',
        // 页码
        page: '1',
        // 总页数
        total: '0'
      },
      // 是否发送搜索信息
      isSend: false,
      // 排序方式
      sort: ['时间顺序', '时间倒序', '等级顺序', '等级倒序'],
      // 商铺列表
      shopsList: [
        {
          // 店铺id
          shopid: '1',
          // 店铺门脸图片
          img: 'static/img/userimg.png',
          // 店铺名称
          name: '测试企业1',
          // 所属分类
          category: '0',
          // vip等级
          vip: '',
          // 所处地区
          site: '测试城市1',
          // 店铺标签
          tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
          // 店铺介绍
          des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介',
          // 店铺信息更新时间
          updateTime: '2019-07-27 12:00:00',
          // 点赞数量
          like: '53',
          // 联系电话
          phone: '18888888888'
        },
        {
          shopid: '2',
          img: 'static/img/userimg.png',
          name: '测试企业2',
          category: '1',
          vip: '4',
          site: '测试城市2',
          tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介，测试企业2简介，测试企业2简介测试企业2简介',
          // 店铺信息更新时间
          updateTime: '2019-07-27 12:00:00',
          // 点赞数量
          like: '53',
          // 联系电话，后台需要加密
          phone: '18888888888'
        },
        {
          shopid: '3',
          img: 'static/img/userimg.png',
          name: '测试企业3',
          category: '3',
          vip: '6',
          site: '测试城市3',
          tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          // 店铺信息更新时间
          updateTime: '2019-07-27 12:00:00',
          // 点赞数量
          like: '53',
          // 联系电话
          phone: '18888888888'
        },
        {
          shopid: '4',
          img: 'static/img/userimg.png',
          name: '测试企业1',
          category: '2',
          vip: '2',
          site: '测试城市1',
          tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
          des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介',
          // 店铺信息更新时间
          updateTime: '2019-07-27 12:00:00',
          // 点赞数量
          like: '53',
          // 联系电话
          phone: '18888888888'
        },
        {
          shopid: '5',
          img: 'static/img/userimg.png',
          name: '测试企业3',
          category: '0',
          vip: '',
          site: '测试城市3',
          tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          // 店铺信息更新时间
          updateTime: '2019-07-27 12:00:00',
          // 点赞数量
          like: '53',
          // 联系电话
          phone: '18888888888'
        },
        {
          shopid: '6',
          img: 'static/img/userimg.png',
          name: '测试企业1',
          category: '2',
          vip: '1',
          site: '测试城市1',
          tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
          des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介',
          // 店铺信息更新时间
          updateTime: '2019-07-27 12:00:00',
          // 点赞数量
          like: '53',
          // 联系电话
          phone: '18888888888'
        },
        {
          shopid: '7',
          img: 'static/img/userimg.png',
          name: '测试企业2',
          category: '3',
          vip: '10',
          site: '测试城市2',
          tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介，测试企业2简介，测试企业2简介测试企业2简介',
          // 店铺信息更新时间
          updateTime: '2019-07-27 12:00:00',
          // 点赞数量
          like: '53',
          // 联系电话
          phone: '18888888888'
        },
        {
          shopid: '8',
          img: 'static/img/userimg.png',
          name: '测试企业3',
          category: '0',
          vip: '1',
          site: '测试城市3',
          tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          // 店铺信息更新时间
          updateTime: '2019-07-27 12:00:00',
          // 点赞数量
          like: '53',
          // 联系电话
          phone: '18888888888'
        },
        {
          shopid: '9',
          img: 'static/img/userimg.png',
          name: '测试企业1',
          category: '2',
          vip: '1',
          site: '测试城市1',
          tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
          des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介',
          // 店铺信息更新时间
          updateTime: '2019-07-27 12:00:00',
          // 点赞数量
          like: '53',
          // 联系电话
          phone: '18888888888'
        },
        {
          shopid: '10',
          img: 'static/img/userimg.png',
          name: '测试企业3',
          category: '1',
          vip: '1',
          site: '测试城市3',
          tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
          // 店铺信息更新时间
          updateTime: '2019-07-27 12:00:00',
          // 点赞数量
          like: '53',
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
    // 店铺分类
    category () {
      return this.$store.state.category
    },
    // 搜索类别
    searchData_category () {
      return this.searchData.category
    },
    // 搜索地区
    site () {
      return this.searchData.site
    },
    // 修改排序
    searchSort () {
      return this.searchData.sort
    },
    // 搜索标签
    search () {
      return this.searchData.search
    }
  },
  components: {
    MyHeader,
    MyFooter,
    MyScroll,
    loading,
    VDistpicker
  },
  methods: {
    // 测试接口方法
    ceshi () {
      this.$axios.post('Index/index/classify').then(result => {
        this.test = result
        console.log(result, '返回数据')
        console.log(this.test, '接收到的数据')
      }).catch(error => {
        throw error
      })
    },
    // 测试请求路径  /construction/login/vueTest
    // // 获取店铺分类
    // getCategory () {
    //   console.log(this.category)
    //   this.$axios.get('').then(result => {
    //     if (result.data.code === 0) {
    //     } else if (result.data.code === 1) {
    //       this.$store.commit('getCategory', result.data.data)
    //     }
    //   }).catch(error => {
    //     throw error
    //   })
    // },
    // 标签搜索
    sendSearch () {
      if (this.isSend) {
        this.getShopsList()
      }
    },
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
    // 获取店铺列表资料公共方法
    getShopsList () {
      this.searchData.page = '1'
      this.isShowLoading = true
      let data = this.$qs.stringify(this.searchData)
      setTimeout(() => {
        this.isShowLoading = false
      }, 1000)
      let tests = {
        shopid: '101',
        img: 'static/img/userimg.png',
        name: '测试企业3',
        category: '1',
        vip: '1',
        site: '测试城市3',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
        // 店铺信息更新时间
        updateTime: '2019-07-27 12:00:00',
        // 点赞数量
        like: '53',
        // 联系电话
        phone: '18888888888'
      }
      this.shopsList.unshift(tests)
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
    _getShopsList () {
      this.searchData.site = ''
    },
    // 上拉加载更多
    getMoreShopsList () {
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
        shopid: '102',
        img: 'static/img/userimg.png',
        name: '测试企业3',
        category: '1',
        vip: '1',
        site: '测试城市3',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介',
        // 店铺信息更新时间
        updateTime: '2019-07-27 12:00:00',
        // 点赞数量
        like: '53',
        // 联系电话
        phone: '18888888888'
      }
      this.shopsList.push(tests)
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
    // 监听店铺类别变换
    searchData_category (newval, oldval) {
      this.getTotal()
      this.getShopsList()
    },
    // 监听店铺地区变换
    site (newval, oldval) {
      this.getTotal()
      this.getShopsList()
    },
    // 监听排序方式变换
    searchSort (newval, oldval) {
      this.getTotal()
      this.getShopsList()
    },
    // 监听搜索标签输入
    search (newval, oldval) {
      if (newval !== '') {
        this.isSend = true
        return
      }
      this.isSend = false
    }
  },
  created () {
    this.getTotal()
    // this.getCategory()
    this.getShopsList()
    this.ceshi()
  }
}
</script>

<style scoped>
@import "static/css/index.css";

</style>
