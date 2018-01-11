<template>
  <div class="myScroller">
    <van-row class="hot-scroller">
      <van-col offset="1">
        <div class="scroller">
          <div class="content">
            <van-row gutter="5">
              <van-col span="24">
                <swiper :options="swiperOption">
                  <swiper-slide v-for="(item, index) in items" :key="index">
                    <router-link :to="'subject/' + item.id" append>
                      <section class="sec-pic">
                        <img v-if="item.images" v-lazy="item.images" alt="">
                      </section>
                      <section class="sec-name">
                        <p class="item-name">{{item.title}}</p>
                      </section>
                    </router-link>
                  </swiper-slide>
                </swiper>
              </van-col>
            </van-row>
          </div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import {
    Row,
    Col,
    Lazyload
  } from 'vant'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    name:'carrousel',
    props: ['dataImages'],
    data() {
      return {
        items: this.dataImages,
        swiperOption: {
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          slidesPerView: 3,
          roundLengths: true,
          width: 350,
          slidePreGroup: 4,
          spaceBetween: 20,
          centeredSlides: true,
          centeredSlides: false,
          setWrapperSize: false,
          setWrapperSize: true,
          reventClicks: false
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true
          // }
        }
      }
    },

    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      swiper,
      swiperSlide
    },
     // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
     mounted() {
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
   
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
  }

</script>
<style scoped>
  .hot-scroller {
    overflow-x: scroll;
    white-space: nowrap;
    width: 100%;
    height: 7.9rem;
  }

  .scroller img {
    width: 4.48rem;
    height: 6.741333rem;
  }

  .sec-pic {
    width: 4.48rem;
    height: 6.741333rem;
    background: #ccc;
    border-radius: 0.256rem;
    overflow: hidden;
  }

  .sec-name {
    margin-top: 0.256rem;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 4rem;
  }

  .item-name {
    max-width: 61%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #b2b2b2;
    font-size: 0.554667rem;
    margin: 0;
  }

  .rightIconSize {
    width: 0.3rem;
    height: 0.6rem;
  }

  .swiper-container {
    height: auto!important;
    margin-left: auto;
    margin-right: auto;
  }

</style>
