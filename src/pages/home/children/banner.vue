<template>
  <div class="banner">
    <van-swipe>
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  import {
    Swipe,
    SwipeItem,
    Lazyload
  } from 'vant'

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
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem

    }
  }

</script>
<style scoped>
.banner img{
  width: 100%;
   height: 10.794667rem;
}


</style>
