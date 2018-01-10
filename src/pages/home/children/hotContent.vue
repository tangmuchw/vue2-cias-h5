<template>
  <div class="hot-content">
    <van-row class="hot-row">
      <van-col offset="1" span="18" class="hot-title">{{titleName}}</van-col>
      <van-col span="3" class="rightBtn">
        更多
      </van-col>
    </van-row>
    <van-row class="hot-scroller">
      <van-col  offset="1">
        <div class="scroller">
          <div class="content">
            <!-- <slot name="promItem"></slot> -->
            <van-row gutter="5" class="hasCover" v-if="type === 'hasCover'">
              <van-col v-for="(item, index) in items" :key="index">
                <router-link :to="'subject/' + item.id" append>
                  <section class="sec-pic">
                    <img v-if="item.images" :src="item.images" alt="">

                  </section>
                  <section class="sec-name">
                    <p class="cinemal-name">{{item.title}}</p>
                  </section>
                </router-link>
              </van-col>
            </van-row>
            <!-- <ul class="onlyString" v-if="type === 'onlyString'">
              <li v-for="item in items" style="border-color: #FFAC2D;">
                <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
              </li>
            </ul> -->
          </div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import {
    Row,
    Col
  } from 'vant'


  export default {
    data() {
      return {
        titleName: '热映影片',
        type: 'hasCover',
        items: [{
            id: 1,
            images: 'https://img.yzcdn.cn/2.jpg',
            title: '前任三'
          },
          {
            id: 1,
            images: 'https://img.yzcdn.cn/2.jpg',
            title: '前任三解决的扩散'
          },
          {
            id: 1,
            images: 'https://img.yzcdn.cn/2.jpg',
            title: '前任三解决的扩散'
          },
          {
            id: 1,
            images: 'https://img.yzcdn.cn/2.jpg',
            title: '前任三解决的扩散'
          }
        ]
      }
    },

    components: {
      [Row.name]: Row,
      [Col.name]: Col
    },

  }

</script>
<style scoped>
  .hot-content {
    margin-top: 1.066667rem;
  }

  .hot-row {
    margin-bottom: 0.64rem;
  }

  .hot-title {
    padding-left: 0.2rem;
    font-size: 0.597333rem;
    border-left: 0.170667rem solid #e23f3d;
  }

  .rightBtn {
    font-size: 0.512rem;
    color: #b2b2b2;
    line-height: 0.810666rem;
  }

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

  .cinemal-name {
    max-width: 61%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #b2b2b2;
    font-size: 0.554667rem;
    margin: 0;
  }

</style>
