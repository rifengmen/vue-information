<template>
  <div>
    <!-- 店铺列表 start -->
    <ul class="shopslist" v-show="shopsList.length">
      <!-- 店铺简介 start -->
      <li v-for="(item, index) in shopsList" :key="index">
        <router-link class="shopinfo" :to="{name: 'shopInfo', query:{shopid: item.shopid}}" tag="div">
          <div class="shoptit">
            <div class="shopimg fl">
              <img class="img" :src="item.img || './static/img/userimg.png'">
            </div>
            <div class="shopname fr color666">
              <div class="vip_name">
                <img class="vipclass fl" v-if="vipClass[item.vip]" :src="vipClass[item.vip]">
                <div class="name font30 color333 ellipsis fl">{{item.name}}</div>
              </div>
              <span class="shopcategory font24 colorfff bg1470cc">{{category[item.category]}}</span>
              <div class="area_box">
                <img class="area" src="./static/img/area.png">
                <span class="font26">{{item.area}}</span>
              </div>
            </div>
          </div>
          <div class="shoptags">
            <!-- 店铺标签 start -->
            <span v-for="(tag, tIndex) in item.tags" :key="tIndex" class="tags font24 color333 bgcecece">{{tag}}</span>
            <!-- 店铺标签 end -->
          </div>
          <div class="shopdes">
            <div class="font28 color666 ellipsis">{{item.des}}</div>
          </div>
        </router-link>
      </li>
      <!-- 店铺简介 end -->
    </ul>
    <!-- 店铺列表 end -->
    <!-- 上拉加载动画 start -->
    <div class="loading" v-if="loading">loading</div>
    <!-- 上拉加载动画 end -->
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'myscroll',
  props: {
    shopsList: {
      type: Array,
      // require: true,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      // 加载动画
      loading: false,
      // 店铺等级
      vipClass: this.$store.state.vip,
      // 店铺分类
      category: this.$store.state.category
    }
  },
  methods: {
    // better-scroll初始化
    initScroll () {
      if (this.$refs.myscroll) {
        this.scroll = new BScroll(this.$refs.myscroll, {
          probeType: 3,
          click: true,
          pullUpLoad: {
            threshold: 50
          }
        })
        this.scroll.on('pullingUp', () => {
          this.loading = true
          this.$emit('pullingup')
          setTimeout(() => {
            this.loading = false
          }, 2000)
        })
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.initScroll()
    })
  },
  watch: {
    shopsList () {
      this.$nextTick(() => {
        this.scroll.finishPullUp()
        this.scroll.refresh()
      })
    }
  }
}
</script>

<style scoped>
  @import "./static/css/myscroll.css";

  .loading {
    width: 100vw;
    line-height: 0.8rem;
    height: 0.8rem;
    font-size: 0.5rem;
    align-items: center;
  }
</style>
