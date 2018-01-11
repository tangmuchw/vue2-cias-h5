<template>
  <div class="footer-guide">
    <van-row>
      <van-col v-for="(item, index) in guideItems" :key="index" span="5"> 
        <img :src="item.focusSrc">
        <p>{{item.guideName}}</p>
      </van-col>
    </van-row>

    <section class="bottom">
      {{footerName}}
      <a href="/">
        <section class="home_old active">
          <img :src="guideImgaes.home">
          <p class="header">首页</p>
        </section>
      </a>
      <a href="/">
        <section class="buy">
          <!-- <img src="img/tab_ticket_default.png"> -->
          <p>购票</p>
        </section>
      </a>
      <a href="/">
        <section class="vip">
          <!-- <img src="img/tab_news_default.png"> -->
          <p>资讯</p>
        </section>
      </a>
      <a href="/">
        <section class="mine">
          <!-- <img src="img/tab_mine_default.png"> -->
          <p>我的</p>
        </section>
      </a>
    </section>
  </div>
</template>

<script>
  import {
    Row,
    Col
  } from 'vant'
  export default {
    props: ['myMsg'],
    data() {
      return {
        footerName: this.myMsg,
        guideImgaes: {
          home: '../../../static/img/tab_home_focus@2x_hengdian.png'
        },
        guideItems: [{
            guideName: '首页',
            focusSrc:'../../../static/img/tab_home_focus@2x_hengdian.png',
            defaultSrc:'../../../static/img/tab_home_default@2x.png'
          },
          {
            guideName: '购票',
           focusSrc:'../../../static/img/tab_ticket_focus@2x_hengdian.png',
            defaultSrc:'../../../static/img/tab_ticket_default@2x.png'
          },
          {
            guideName: '资讯',
            focusSrc:'../../../static/img/tab_news_focus@2x_hengdian.png',
            defaultSrc:'../../../static/img/tab_news_default@2x.png'
           
          },
          {
            guideName: '我的',
            focusSrc:'../../../static/img/tab_mine_focus@2x_hengdian.png',
            defaultSrc:'../../../static/img/tab_mine_default@2x.png'
           
          }
        ]
      }
    },
    components: {
      [Row.name]: Row,
      [Col.name]: Col
    }
  }

</script>
<style scoped>
  .header {
    color: green
  }

</style>
