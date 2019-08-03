<template>

  <div class="loading bgfff">
    <img src="static/img/loading.gif">
  </div>

</template>

<script>
export default {
  name: 'loading'
}
</script>

<style scoped>

  .loading {
    position: fixed;
    left: 0;
    top: 3.33rem;
    bottom: 0;
    z-index: 999;
    width: 100vw;
    height: calc(100vh - 4.64rem);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 2rem;
    position: absolute;
    top: 4rem;
    border-radius: 50%;
  }

</style>
