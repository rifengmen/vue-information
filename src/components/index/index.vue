<template>
  <div class="container">
    <!-- 用户信息 start -->
    <my-header></my-header>
    <!-- 用户信息 end -->
    <!-- 搜索 start -->
    <div class="search_cont color666 font26">
      <div class="category">
        <select class="selected_options fl tc" title="店铺分类">
          <option value="0">店铺分类</option>
          <option :value="index+1" v-for="(item, index) in category" :key="index+1">{{item}}</option>
        </select>
        <select class="selected_options fl tc" title="所在地区">
          <option value="0">所在地区</option>
        </select>
        <select class="selected_options fl tc" title="排序方式">
          <option value="0">排序方式</option>
          <option :value="index+1" v-for="(item, index) in sort" :key="index+1">{{item}}</option>
        </select>
      </div>
      <div class="search">
        <div class="search_input fl">
          <input type="text" v-model="search_val" placeholder="请输入标签进行搜索" class="fl" />
          <img src="./static/img/search.png" class="fr">
        </div>
        <button class="search_btn font26 fr colorff9500 bgfff">搜索</button>
      </div>
    </div>
    <!-- 搜索 end -->
    <!--&lt;!&ndash; 店铺列表 start &ndash;&gt;-->
    <!--<ul class="shopslist">-->
      <!--&lt;!&ndash; 店铺简介 start &ndash;&gt;-->
      <!--<li v-for="(item, index) in shopsList" :key="index">-->
        <!--<a class="shopinfo" url="/pages/shopInfo/shopInfo">-->
          <!--<div class="shoptit">-->
            <!--<div class="shopimg fl">-->
              <!--<img class="img" src="{{item.img}}">-->
            <!--</div>-->
            <!--<div class="shopname fr color666">-->
              <!--<div class="vip_name">-->
                <!--<img class="vipclass fl" v-if="vipClass[item.vip]" :src="vipClass[item.vip]">-->
                <!--<div class="name font30 color333 ellipsis fl">{{item.name}}</div>-->
              <!--</div>-->
              <!--<div class="shopcategory font24 colorfff bg1470cc">{{categoryArray[item.category]}}</div>-->
              <!--<div class="area_box">-->
                <!--<img class="area" src="//img/area.png">-->
                <!--<span class="font26">{{item.area}}</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="shoptags">-->
            <!--&lt;!&ndash; 店铺标签 start &ndash;&gt;-->
            <!--<span v-for="(tag, tIndex) in item.tags" :key="tIndex" class="tags font24 color333 bgcecece">{{tag}}</span>-->
            <!--&lt;!&ndash; 店铺标签 end &ndash;&gt;-->
          <!--</div>-->
          <!--<div class="shopdes">-->
            <!--<view class="font28 color666 ellipsis">{{item.des}}</view>-->
          <!--</div>-->
        <!--</a>-->
      <!--</li>-->
      <!--&lt;!&ndash; 店铺简介 end &ndash;&gt;-->
    <!--</ul>-->
    <!--&lt;!&ndash; 店铺列表 end &ndash;&gt;-->
    <!-- 底部导航 start -->
    <my-footer></my-footer>
    <!-- 底部导航 end -->
  </div>
</template>

<script>
import MyHeader from '@/components/common/header/myheader'
import MyFooter from '@/components/common/footer/myfooter'

export default {
  name: 'index',
  data () {
    return {
      // 店铺分类
      category: ['测试分类1', '测试分类2', '测试分类3', '测试分类4', '测试分类5', '测试分类6'],
      // 搜索内容
      search_val: '',
      // 排序方式
      sort: ['时间排序', '名称排序', '**排序']
    }
  },
  components: {
    MyHeader,
    MyFooter
  },
  methods: {
    // 测试请求路径  /construction/login/vueTest

    // // 获取店铺分类
    // getCategory () {
    //   this.$axios.get('').then(result => {
    //     if (result.data.code === 0) {
    //     } else if (result.data.code === 1) {
    //       this.category = result.data.data
    //     }
    //   }).catch(error => {
    //     throw error
    //   })
    // },

  }
}
</script>

<style scoped>

  @import "./static/css/index.css";

</style>
