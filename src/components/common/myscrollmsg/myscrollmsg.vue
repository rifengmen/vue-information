<template>
    <div class="wrapper" ref="myscroll">
      <!-- 信息列表 start -->
      <ul class="msglist" v-if="msgList.length">
        <!-- 信息简介 start -->
        <li class="msgdetail bgfff" v-for="(item, index) in msgList" :key="index">
          <div class="categorymsg">
            <span class="font32 font_blod">{{item.classify}}</span>
            <span class="area color666">
              <img src="static/img/area.png">
              {{item.area}}
            </span>
          </div>
          <div class="msgdes ellipsis color666 font28" v-html="item.leave_html">{{item.leave_html}}</div>
          <div class="time_detailbtn">
            <div class="time color1470cc">发布时间：<span class="font26">{{item.time}}</span></div>
            <router-link
              :to="{name: 'msgDetail', params:{msgDetail: item}}"
              tag="div"
              class="detailbtn colorff9500 font28 tc">查看详情</router-link>
          </div>
        </li>
        <!-- 信息简介 end -->
        <!-- 上拉加载动画 start -->
        <div class="loading tc font22 color999" v-if="loading">{{loadText}}</div>
        <!-- 上拉加载动画 end -->
      </ul>
      <!-- 信息列表 end -->
      <!-- 无信息提示 start -->
      <div v-else class="nodata">
        <img src="static/img/nodata.png">
      </div>
      <!-- 无信息提示 end -->
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'myscrollmsg',
  props: {
    msgList: {
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
      // 信息分类
      classifymsg: this.$store.state.classifymsg
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
    msgList: {
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
  @import "./static/css/myscrollmsg.css";

  .loading {
    width: 100vw;
    line-height: 0.8rem;
    height: 0.8rem;
    font-size: 0.5rem;
    align-items: center;
  }
</style>
