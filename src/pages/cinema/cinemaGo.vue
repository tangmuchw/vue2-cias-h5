<template>
  <div>
    <section class="movieDH">
      <a href="javascript:history.back(-1)">
        <section class="returnBtn">
          <img src="../../../static/img/cinema/left.png">
        </section>
      </a>
      <section class="mTitle">
        <p class="cinemaT">选影院</p>
      </section>
      <router-link :to="{name:'cityList'}">
        <section class="dTime">
          <section id="appCity" cityid="460100" cinemaid="1" class="address">
            海口市
          </section>
          <section class="iconD">
            <img src="../../../static/img/cinema/down1.png">
          </section>
        </section>
      </router-link>
    </section>
    <section class="movieSearch">
      <section class="searchCont">
        <section class="icon">
          <img src="../../../static/img/cinema/search.png">
        </section>
        <input :placeholder=searchTip class="searchInp">
      </section>
    </section>
    <section class="dContainer">
      <ul>
        <li>
          <section class="topCont">
            <section class="topCont-1">
              <section class="mN">海口星轶影城</section>
              <section class="distance">最近</section>
              <section class="distance come" style="display: none;">来过</section>
            </section>
            <section class="price"></section>
          </section>
          <section class="middleCont">
            <section class="topCont-1">
              <section class="address">龙华区迎宾大道与椰海大道交汇处吾悦广场4楼</section>
            </section>
            <section>0km</section>
          </section>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        searchTip: '搜索您想去的影院'
      }
    },
    methods: {
      goCityList: function () {
        // this.$router.push({path: ''})
      }
    }
  }
</script>

<style scoped>
  @import '../../../static/css/public/reset.css';
  @import '../../../static/css/public/all.css';

  body,
  html {
    background: #f2f5f5
  }

  .movieDH {
    width: 100%;
    height: 2.304rem;
    background: #333;
    color: #fff;
    font-size: 12px;
    /* display: -webkit-box; */
    /* display: -ms-flexbox; */
    /* display: flex; */
    position: fixed;
    left: 0;
    top: 0;
  }

  .movieDH a {
    /* width: 20%; */
    text-align: center;
    /* line-height: 3; */
    position: absolute;
    top: 50%;
    margin-top: -0.469333rem;
    z-index: 9;
  }

  .movieDH a:first-child {
    left: 0.64rem;
  }

  .movieDH a:last-child {
    right: 0.64rem;
    ;
  }

  .movieDH a .returnBtn img {
    width: 0.938667rem;
    height: 0.938667rem;
  }

  .movieDH .mTitle {
    width: 100%;
    margin: 0 auto;
    position: relative;
    /* display: -webkit-box; */
    /* display: -ms-flexbox; */
    /* display: flex; */
    /* -webkit-box-orient: vertical; */
    /* -webkit-box-direction: normal; */
    /* -ms-flex-direction: column; */
    /* flex-direction: column; */
    /* -webkit-box-pack: center; */
    /* -ms-flex-pack: center; */
    /* justify-content: center; */
    /* -webkit-box-align: center; */
    /* -ms-flex-align: center; */
    /* align-items: center; */
  }

  .movieDH .mTitle .cinemaT {
    font-size: 0.768rem;
    line-height: 300%;
    width: 100%;
    text-align: center;
  }

  .movieDH .mTitle .address {
    font-size: 0.5rem;
    color: orange;
  }

  .movieDH .dTime {
    width: 100%;
    /* height: 2.304rem; */
    font-size: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 0.682667rem;
    -webkit-box-pack: flex-start;
    -ms-flex-pack: flex-start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .movieDH .dTime .address {
    color: #fff;
    font-size: 0.597333rem;
    line-height: 0.938667rem;
    margin-right: 0.213333rem;
  }

  .movieDH .dTime .iconD {}

  .movieDH .dTime .address img,
  .movieDH .dTime .iconD img {
    width: 0.5rem;
    height: 0.26rem;
    margin-bottom: 0.1rem;
  }

  .movieSearch {
    width: 100%;
    height: auto;
    padding: 0.298667rem 0;
    background: #f2f5f5;
    margin-top: 2.304rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .movieSearch .searchCont {
    width: 100%;
    margin: 0 0.64rem;
    background: #fff;
    height: 1.194667rem;
    border: 1px solid #e0e0e0;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 0.512rem;
  }

  .movieSearch .searchCont .icon {
    width: 0.682667rem;
    height: 0.682667rem;
    margin-left: 0.64rem;
    padding-right: 0.64rem;
    text-align: center;
    line-height: 1rem;
  }

  .movieSearch .searchCont .searchInp {
    width: 10.7rem;
    height: 0.9rem;
    border: none;
    outline: none;
    font-size: 0.597333rem;
    color: #b2b2b2;
  }

  .dContainer {
    width: 100%;
    font-size: 0.512rem;
    margin-bottom: 2rem;
  }

  .dContainer ul li {
    background: #fff;
    padding: 0.64rem;
    border-bottom: 1px solid #e0e0e0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .dContainer ul li .topCont,
  .dContainer ul li .middleCont {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .dContainer ul li .topCont {
    margin-bottom: 0.256rem;
  }

  .dContainer ul li .topCont .topCont-1,
  .dContainer ul li .middleCont .topCont-1 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .dContainer ul li .topCont .price {
    background: url(../../../static/img/cinema/selected_icon.png) center no-repeat;
    background-size: 100% 100%;
    width: 0.853333rem;
    height: 0.853333rem;
  }

  .dContainer ul li .topCont .topCont-1 .mN,
  .dContainer ul li .middleCont .topCont-1 .mN {
    font-size: 0.682667rem;
  }

  .dContainer ul li .topCont .topCont-1 .distance,
  .dContainer ul li .middleCont .topCont-1 .distance {
    margin-left: 0.213333rem;
    background: #66ccff;
    color: #fff;
    line-height: 100%;
    /* width: 1.237333rem; */
    /*height: 0.64rem;*/
    text-align: center;
    border-radius: 5px;
    font-size: 0.426667rem;
    display: inline-block;
    padding: 4px 5px;
  }

  .dContainer ul li .topCont .topCont-1 .come {
    background: #33cc99;
  }

  .dContainer ul li .topCont .topCont-1 .address,
  .dContainer ul li .middleCont .topCont-1 .address {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 8rem;
    background: url(../../../static/img/cinema/address1.png)left bottom no-repeat;
    background-size: 7% auto;
    padding-left: 0.853333rem;
    padding-top: 0.18rem;
  }

  .dContainer ul li .middleCont {
    color: #b2b2b2;
    font-size: 0.554667rem;
  }

</style>
