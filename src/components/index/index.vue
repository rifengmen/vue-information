<template>
  <div class="container">
    <loading v-if="isShowLoading"></loading>
    <!-- 用户信息 start -->
    <my-header></my-header>
    <!-- 用户信息 end -->
    <!-- 搜索 start -->
    <div class="search_cont color666 font26">
      <div class="category">
        <select class="selected_options fl tc bgfff" title="店铺分类" v-model="searchData.classify">
          <option value="0">店铺分类</option>
          <option :value="index+1" v-for="(item, index) in category" :key="index+1">{{item}}</option>
        </select>
        <select class="selected_options fl tc bgfff" title="所在地区" v-model="searchData.site">
          <option value="0">所在地区</option>
        </select>
        <select class="selected_options fl tc bgfff" title="排序方式" v-model="searchData.sort">
          <option value="0">排序方式</option>
          <option :value="index+1" v-for="(item, index) in sort" :key="index+1">{{item}}</option>
        </select>
      </div>
      <div class="search">
        <div class="search_input fl">
          <input type="text" v-model="searchData.search" placeholder="请输入标签进行搜索" class="fl"/>
          <img :src="'../../static/img/search.png'" class="fr">
        </div>
        <div class="search_btn font26 tc fr colorff9500 bgfff" @click="setSearch">搜索</div>
      </div>
    </div>
    <!-- 搜索 end -->
    <!-- 店铺列表 start -->
    <my-scroll :shopsList="shopsList" @pullingup="getShopsList"></my-scroll>
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

export default {
  name: 'index',
  data () {
    return {
      // 下拉刷新
      isShowLoading: true,
      // 搜索
      searchData: {
        // 分类搜索
        classify: '0',
        // 地区搜索
        site: '0',
        // 排序方式
        sort: '0',
        // 标签搜索
        search: ''
      },
      // 排序方式
      sort: ['时间排序', '名称排序', '**排序'],
      // 商铺列表
      shopsList: [
        {
          img: './static/img/userimg.png',
          name: '测试企业1',
          category: '0',
          vip: '',
          area: '测试城市1',
          tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
          des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介'
        },
        {
          img: './static/img/userimg.png',
          name: '测试企业2',
          category: '1',
          vip: '4',
          area: '测试城市2',
          tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介，测试企业2简介，测试企业2简介测试企业2简介'
        },
        {
          img: './static/img/userimg.png',
          name: '测试企业3',
          category: '3',
          vip: '6',
          area: '测试城市3',
          tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介'
        },
        {
          img: './static/img/userimg.png',
          name: '测试企业1',
          category: '2',
          vip: '2',
          area: '测试城市1',
          tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
          des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介'
        },
        {
          img: './static/img/userimg.png',
          name: '测试企业3',
          category: '0',
          vip: '',
          area: '测试城市3',
          tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介'
        },
        {
          img: './static/img/userimg.png',
          name: '测试企业1',
          category: '2',
          vip: '1',
          area: '测试城市1',
          tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
          des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介'
        },
        {
          img: './static/img/userimg.png',
          name: '测试企业2',
          category: '3',
          vip: '10',
          area: '测试城市2',
          tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介，测试企业2简介，测试企业2简介测试企业2简介'
        },
        {
          img: './static/img/userimg.png',
          name: '测试企业3',
          category: '0',
          vip: '1',
          area: '测试城市3',
          tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介'
        },
        {
          img: './static/img/userimg.png',
          name: '测试企业1',
          category: '2',
          vip: '1',
          area: '测试城市1',
          tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
          des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介'
        },
        {
          img: './static/img/userimg.png',
          name: '测试企业3',
          category: '1',
          vip: '1',
          area: '测试城市3',
          tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
          des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介'
        }
      ]
    }
  },
  computed: {
    // 店铺分类
    category () {
      return this.$store.state.category
    },
    classify () {
      return this.searchData.classify
    },
    site () {
      return this.searchData.site
    },
    searchSort () {
      return this.searchData.sort
    }
  },
  components: {
    MyHeader,
    MyFooter,
    MyScroll,
    loading
  },
  methods: {
    // 测试请求路径  /construction/login/vueTest

    // 获取店铺分类
    getCategory () {
      console.log(this.category)
      // this.$axios.get('').then(result => {
      //   if (result.data.code === 0) {
      //   } else if (result.data.code === 1) {
      //     this.$store.commit('getCategory', result.data.data)
      //   }
      // }).catch(error => {
      //   throw error
      // })
    },

    // 标签搜索
    setSearch () {
      this.getShopsList()
    },

    // 获取店铺列表资料公共方法
    getShopsList () {
      this.isShowLoading = true
      let data = this.$qs.stringify(this.searchData)
      console.log(data)
      this.isShowLoading = false
      // this.$axios.get('',data).then(result => {
      //   if (result.data.code === 0) {
      //   } else if (result.data.code === 1) {
      //     this.isShowLoading = false
      //     this.shopsList = result.data.data
      //   }
      // }).catch(error => {
      //   throw error
      // })
    }

  },
  watch: {
    classify (newval, oldval) {
      this.getShopsList()
    },
    site (newval, oldval) {
      this.getShopsList()
    },
    searchSort (newval, oldval) {
      this.getShopsList()
    }
  },
  created () {
    this.getCategory()
    this.getShopsList()
  }
}
</script>

<style scoped>

  @import "./static/css/index.css";

</style>
