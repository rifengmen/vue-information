<template>
  <div>{{msg}}</div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      getMsg() {
        this.$axios.get('/api/construction/login/vueTest').then(result => {
          console.log(result)
        }).catch(error => {
          console.log(error)
        })
      }
    },
    created() {
      this.getMsg();
    }
  }
</script>

<style scoped>

</style>
