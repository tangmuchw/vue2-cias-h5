<template>
  <div>
     <my-header></my-header>
     <my-footer my-msg='您好'></my-footer>
    <van-swipe>
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" class="imgSize"/>
  </van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
import myHeader from '../../components/header/header'
import myFooter from '../../components/footer/footer'
import 'mint-ui/lib/style.css'
import {
  Swipe, 
  SwipeItem,
  Lazyload
} from 'vant';

// import cityList from '../city/cityList'
export default {
  data () {
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
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
   
  }
}
</script>
<style scoped>
.imgSize{
    width: 100%;
    height: 10.794667rem;
}
</style>