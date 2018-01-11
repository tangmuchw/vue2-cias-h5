<template>
  <div id="app">
    <!-- <img :src="right" alt=""> -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        right: '../static/img/right'

      }
    }
  }

</script>

<style>
  html {
    font-family: 微软雅黑;
  }

</style>
