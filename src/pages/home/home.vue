<template>
  <div>
    <!-- 广告 -->
    <my-banner></my-banner>
    <!-- 热映影片 -->
    <hot-content></hot-content>
    <!-- <my-header></my-header> -->
    <!-- <my-footer my-msg='您好'></my-footer> -->
  </div>

</template>

<script>
  import myHeader from '../../components/header/header'
  import myFooter from '../../components/footer/footer'
  import myBanner from './children/banner'
  import hotContent from './children/hotContent'

  import {
    Swipe,
    SwipeItem,
    Lazyload
  } from 'vant'

  // import cityList from '../city/cityList'
  export default {
    data() {
      return {
        images: [
          'https://img.yzcdn.cn/2.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ]
      }
    },
    components: {
      myHeader,
      myFooter,
      myBanner,
      hotContent,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem

    }
  }

</script>
<style scoped>
  

</style>
