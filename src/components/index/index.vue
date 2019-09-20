<template>
  <div class="container bgeeeeee">
    <!-- 用户信息 start -->
    <my-header></my-header>
    <!-- 用户信息 end -->
    <!-- 选择 搜索 start -->
    <div class="search_cont color666">
      <div class="category bgfff">
        <!-- 店铺分类 start -->
        <div class="category_box site_box" v-if="classify.length">
          <classify
            :selectArr="classify"
            :searchDataSelect="searchData_classify"
            :selectName="selectNameClassify"
            :titName="titNameClassify"
            @setSelectData="setSearchDataCategory"></classify>
        </div>
        <!-- 店铺分类 end -->
        <!-- 地区选择 start -->
        <div class="site_box" v-if="AREA.length">
          <v-area
            :selectArr="AREA"
            :searchDataSelect="area"
            :selectName="selectNameArea"
            :titName="titNameArea"
            @setSelectData="setSearchDataArea"></v-area>
        </div>
        <!--<div class="site_box">-->
          <!--<div class="site">-->
            <!--<div @click="choose" class="choose color666">-->
              <!--<div class="font26">{{searchData.area || '地区选择'}}</div>-->
              <!--<img src="static/img/turnup.png" :class="(turnimg ? 'turnimg' : '_turnimg')">-->
            <!--</div>-->
            <!--<p class="pwrap bgfff" v-if="show">-->
              <!--<v-distpicker type="mobile" @selected="onSelected"></v-distpicker>-->
            <!--</p>-->
          <!--</div>-->
        <!--</div>-->
        <!-- 地区选择 end -->
        <!-- 排序方式 start -->
        <div class="category_box site_box" v-if="sort.length">
          <classify
            :selectArr="sort"
            :searchDataSelect="searchSort"
            :selectName="selectNameSort"
            :titName="titNameSort"
            @setSelectData="setSearchDataSort"></classify>
        </div>
      </div>
      <div class="search bgeeeeee">
        <div class="search_input fl bgfff">
          <input type="text" v-model="searchData.search" placeholder="请输入标签进行搜索" class="fl"/>
          <img src="static/img/search.png" class="fr">
        </div>
        <div class="search_btn nosend_btn font26 tc fr bgfff colorff9500 send_border" @click="sendSearch">搜索</div>
      </div>
    </div>
    <!-- 选择 搜索 end -->
    <!-- 下拉刷新动画 start -->
    <loading v-if="isShowLoading"></loading>
    <!-- 下拉刷新动画 end -->
    <!-- 店铺列表 start -->
    <div class="shopslist">
      <my-scroll
        :shopsList="shopsList"
        :loadText="loadText"
        @pullingDown="_getShopsList"
        @pullingup="getMoreShopsList">
      </my-scroll>
    </div>
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
import classify from '@/components/common/classify/classify'
import VArea from '@/components/common/AREA/AREA'
import VDistpicker from 'v-distpicker'

export default {
  name: 'index',
  data () {
    return {
      // 下拉刷新
      isShowLoading: true,
      // 搜索
      searchData: {
        // 分类搜索
        category: 0,
        // 地区搜索
        area: '',
        // 排序方式，0：时间顺序(默认)；1：时间倒序；2：等级顺序；3：等级倒序
        sort: 0,
        // 标签搜索
        search: '',
        // 页码
        page: '1'
      },
      // 总页数
      total: '0',
      // 排序方式
      sort: [
        {value: 0, label: '时间顺序'},
        {value: 1, label: '时间倒序'},
        {value: 2, label: '等级顺序'},
        {value: 3, label: '等级倒序'}
      ],
      // 店铺列表
      shopsList: [
        {
          // 店铺id
          id: '1',
          // 店铺门脸图片
          image: '',
          // 店铺名称
          name: '测试企业1',
          // 所属分类
          classify: '0',
          // 认证类型，1：不认证； 2：个人认证； 3：企业认证；
          type: 1,
          // vip等级
          vipnum: '',
          // 所处地区
          area: '测试城市1',
          // 店铺标签
          label: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
          // 店铺介绍
          business: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介',
          // 店铺信息更新时间
          time: '2019-07-27 12:00:00',
          // 点赞数量
          give: '53',
          // 联系电话
          phone: '18888888888'
        }
      ],
      // 加载提示语
      loadText: '加载更多...',
      // 显示省市县下拉框
      show: false,
      // 箭头旋转
      turnimg: false,
      // 店铺分类选择提示
      selectNameClassify: '全部分类',
      // 店铺分类信息标题
      titNameClassify: '店铺分类',
      // 店铺分类选择提示
      selectNameArea: '全部地区',
      // 店铺分类信息标题
      titNameArea: '地区选择',
      // 排序方式选择提示
      selectNameSort: '时间顺序',
      // 排序方式信息标题
      titNameSort: '排序方式'
    }
  },
  computed: {
    // 行政区域
    AREA () {
      return this.$store.state.AREA
    },
    // 店铺分类
    classify () {
      return this.$store.state.classify
    },
    // 搜索类别
    searchData_classify () {
      return this.searchData.category
    },
    // 搜索地区
    area () {
      return this.searchData.area
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
    classify,
    VArea,
    VDistpicker
  },
  methods: {
    // 获取行政区域
    setAREA () {
      this.$axios.post('Index/index/area').then(result => {
        if (result.data.code === 0) {
          let data = result.data.data
          let arr = []
          arr[0] = {'value': 0, 'label': '全部地区'}
          if (data) {
            for (let i = 0; i < data.length; i++) {
              let _arr = {}
              _arr['value'] = data[i].id
              _arr['label'] = data[i].name
              if (data[i].children) {
                _arr['children'] = []
                let v = data[i].children
                for (let j = 0; j < v.length; j++) {
                  let _v = {}
                  _v['value'] = v[j].id
                  _v['label'] = v[j].name
                  _arr['children'].push(_v)
                }
              }
              arr.push(_arr)
            }
          }
          this.$store.commit('setAREA', arr)
        }
      }).catch(error => {
        throw error
      })
    },
    // 设置店铺分类
    setClassify () {
      this.$axios.post('Index/index/shopclass').then(result => {
        let data = result.data.data
        let arr = []
        arr[0] = {'value': 0, 'label': '全部分类'}
        if (data) {
          for (let i = 0; i < data.length; i++) {
            let _arr = {}
            _arr['value'] = data[i].id
            _arr['label'] = data[i].name
            arr.push(_arr)
          }
        }
        this.$store.commit('setClassify', arr)
      }).catch(error => {
        throw error
      })
    },
    // 标签搜索
    sendSearch () {
      this.getShopsList()
    },
    // 获取店铺列表资料公共方法
    getShopsList () {
      this.searchData.page = '1'
      this.isShowLoading = true
      let data = this.$qs.stringify(this.searchData)
      this.$axios.post('Index/index/shops', data).then(result => {
        this.$store.commit('setIsPullingDown', true)
        if (result.data.code === 0) {
          this.isShowLoading = false
          // result.data.data.data.forEach((value, index) => {
          //   this.$set(this.shopsList, index, {})
          //   for (let key in value) {
          //     this.$set(this.shopsList[index], key, value[key])
          //   }
          // })
          this.shopsList = result.data.data.data
          this.total = result.data.data.last_page
        }
      }).catch(error => {
        throw error
      })
      this.$store.commit('setIsPullingDown', true)
    },
    // 下拉刷新
    _getShopsList () {
      if (this.searchData.area !== '') {
        this.searchData.area = ''
      } else {
        this.getShopsList()
      }
    },
    // 上拉加载更多
    getMoreShopsList () {
      this.searchData.page++
      let currentpage = this.searchData.page
      let total = this.total
      let data = this.$qs.stringify(this.searchData)
      if (currentpage > total) {
        this.loadText = '暂无更多数据'
      } else {
        this.$axios.post('Index/index/shops', data).then(result => {
          this.$store.commit('setIsPullingUp', true)
          if (result.data.code === 0) {
            this.isShowLoading = false
            this.shopsList.push(...result.data.data.data)
          }
        }).catch(error => {
          throw error
        })
      }
      this.$store.commit('setIsPullingUp', false)
    },
    // // 旋转箭头
    // turn () {
    //   this.turnimg = !this.turnimg
    // },
    // 显示隐藏省市县下拉框
    choose () {
      this.show = !this.show
      this.turnimg = !this.turnimg
      this.searchData.area = ''
    },
    // 省市县三级联动
    onSelected (data) {
      this.searchData.area = data.province.value + data.city.value + data.area.value
      this.show = false
      this.turnimg = false
    },
    setSearchDataArea (area) {
      this.searchData.area = area
    },
    // 修改排序方式的方法
    setSearchDataSort (sort) {
      this.searchData.sort = sort
    },
    // 修改分类的方法
    setSearchDataCategory (category) {
      this.searchData.category = category
    }
  },
  watch: {
    // 监听店铺类别变换
    searchData_classify (newval, oldval) {
      this.getShopsList()
    },
    // 监听店铺地区变换
    area (newval, oldval) {
      this.getShopsList()
    },
    // 监听排序方式变换
    searchSort (newval, oldval) {
      this.getShopsList()
    }
  },
  created () {
    this.setClassify()
    this.setAREA()
  },
  beforeMount () {
    this.getShopsList()
  }
}
</script>

<style scoped>
@import "static/css/index.css";

</style>
