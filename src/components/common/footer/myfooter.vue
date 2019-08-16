<template>
  <div class="footer bgfff">
    <div class="footer-main">
      <router-link :to="{name:'index'}" tag="div" class="shops tc">
        <div class="bgimg"></div>
        <!--<img src="static/img/index.png">-->
        <div class="listname font24 color666">商铺</div>
      </router-link>
      <router-link :to="{name:'listSupplier'}" tag="div" class="supplier tc">
        <div class="bgimg"></div>
        <!--<img src="static/img/supplier.png">-->
        <div class="listname font24 color666">供应</div>
      </router-link>
      <router-link :to="{name:'listPurchase'}" tag="div" class="purchase tc">
        <div class="bgimg"></div>
        <!--<img src="static/img/purchase.png">-->
        <div class="listname font24 color666">求购</div>
      </router-link>
      <router-link :to="{name:'userInfo'}" tag="div" class="userinfo tc">
        <div class="bgimg"></div>
        <!--<img src="static/img/userinfo.png">-->
        <div class="listname font24 color666">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-footer'
}
</script>

<style scoped>
  @import "./static/css/myfooter.css";

</style>
