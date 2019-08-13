<template>
  <div class="wrapper" ref="myscroll">
    <!-- 店铺列表 start -->
    <ul class="shopslist" v-show="shopsList.length">
      <!-- 店铺简介 start -->
      <li v-for="(item, index) in shopsList" :key="index">
        <router-link class="shopinfo" :to="{name: 'shopInfo', params:{shopInfo: item}}" tag="div">
          <div class="shoptit">
            <div class="shopimg fl">
              <img class="img" :src="item.image || 'static/img/userimg.png'">
            </div>
            <div class="shopname fr color666">
              <div class="vip_name">
                <img class="vipclass fl" v-if="vipClass[item.vipnum]" :src="vipClass[item.vipnum - 1]">
                <div class="name font30 color333 ellipsis fl">{{item.name}}</div>
              </div>
              <div>
                <span class="font28 color1470cc font_blod">{{typearr[item.type - 1]}}</span>
                <span class="shopcategory font24 colorfff bg1470cc">{{item.classify}}</span>
              </div>
              <div class="area_box">
                <img class="area" src="static/img/area.png">
                <span class="font26">{{item.area}}</span>
              </div>
            </div>
          </div>
          <div class="shoptags" v-if="item.label.length">
            <!-- 店铺标签 start -->
            <span v-for="(label, tIndex) in item.label" :key="tIndex" class="tags font24 color333 bgcecece">{{label}}</span>
            <!-- 店铺标签 end -->
          </div>
          <div class="shopdes">
            <div class="font28 color999 ellipsis">{{item.business}}</div>
          </div>
        </router-link>
      </li>
      <!-- 店铺简介 end -->
      <!-- 上拉加载提示 start -->
      <div class="loading tc font22 color999" v-if="loading">{{loadText}}</div>
      <!-- 上拉加载提示 end -->
    </ul>
    <!-- 店铺列表 end -->
  </div>
</template>

<script>
export default {
  name: 'myscrollcomplaint',
  props: {
    shopsList: {
      type: Array,
      // require: true,
      default: function () {
        return []
      }
    },
    loadText: {
      type: String,
      default: function () {
        return '加载更多...'
      }
    }
  }
}
</script>

<style scoped>

</style>
