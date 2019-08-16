<template>
  <div class="wrapper" ref="myscroll">
    <!-- 店铺列表 start -->
    <ul class="shopslist bgeeeeee" v-if="shopsList.length">
      <!-- 店铺简介 start -->
      <li v-for="(item, index) in shopsList" :key="index" class="bgfff">
        <router-link class="shopinfo" :to="{name: 'shopInfo', params:{shopInfo: item}}" tag="div">
          <div class="shoptit">
            <div class="shopimg">
              <img class="img" :src="(item.image ? (imgurl + item.image) : ('static/img/userimg.png'))">
            </div>
            <div class="shopname color666">
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
            <span v-for="(label, tIndex) in item.label" :key="tIndex" class="tags font24 color333 bgeeeeee">{{label}}</span>
            <!-- 店铺标签 end -->
          </div>
          <div class="shopdes">
            <div class="font28 color999 ellipsis" v-html="item.business_html">{{item.business_html}}</div>
          </div>
        </router-link>
      </li>
      <!-- 店铺简介 end -->
      <!-- 上拉加载提示 start -->
      <div class="loading tc font22 color999" v-if="loading">{{loadText}}</div>
      <!-- 上拉加载提示 end -->
    </ul>
    <!-- 店铺列表 end -->
    <!-- 无信息提示 start -->
    <div v-else class="nodata">
      <img src="static/img/nodata.jpg">
    </div>
    <!-- 无信息提示 end -->
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
    },
    loadText: {
      type: String,
      default: function () {
        return '加载更多...'
      }
    }
  },
  data () {
    return {
      // 上拉加载提示
      loading: false,
      // 店铺等级图标资源路径
      vipClass: this.$store.state.vip,
      // 认证类别数组，1：不认证 2：个人认证 3：企业认证
      typearr: this.$store.state.typearr,
      // 图片路径
      imgurl: this.IMGURL
    }
  },
  computed: {
    // 下拉刷新请求开关
    isPullingDown () {
      return this.$store.state.isPullingDown
    },
    // 上拉加载请求开关
    isPullingUp () {
      return this.$store.state.isPullingUp
    }
  },
  methods: {
    // better-scroll初始化
    initScroll () {
      if (this.$refs.myscroll) {
        this.scroll = new BScroll(this.$refs.myscroll, {
          probeType: 3,
          click: true,
          // 下拉刷新配置项
          pullDownRefresh: {
            threshold: 50,
            stop: 20
          },
          // 上啦加载配置项
          pullUpLoad: {
            threshold: -50
          }
        })
        // 是否触发下拉刷新
        if (this.isPullingDown) {
          this.scroll.on('pullingDown', () => {
            this.$store.commit('setIsPullingDown', false)
            this.$emit('pullingDown')
            this.scroll.finishPullDown()
            setTimeout(() => {
              this.scroll.refresh()
            }, 2000)
          })
        }
        // 是否触发上拉加载
        if (this.isPullingUp) {
          this.scroll.on('pullingUp', () => {
            this.loading = true
            this.$store.commit('setIsPullingUp', false)
            this.$emit('pullingup')
            this.scroll.finishPullUp()
            setTimeout(() => {
              this.scroll.refresh()
              this.loading = false
            }, 2000)
          })
        }
      }
    }
  },
  watch: {
    // 监听列表变化，重置滚动
    shopsList: {
      handler () {
        this.scroll.refresh()
      },
      deep: true
    }
  },
  created () {
    this.$nextTick(() => {
      this.initScroll()
    })
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
