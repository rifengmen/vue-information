<template>

  <div class="loading bgfff">
    <img src="./static/img/loading.gif">
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
    top: 2rem;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 2rem;
  }

</style>
