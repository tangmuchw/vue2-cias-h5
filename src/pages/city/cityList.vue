<template>
  <div id="citylist">
    <header class="head">
      <a @click="goBack">
        <img src="../../../static/img/cityList/cha.png" class="cha">
      </a>
      <div>选择城市</div>
      <img src="../../../static/img/cityList/refresh.png" class="refresh" @click="refreshCity">
    </header>
    <div class="movieSearch">
      <div class="searchCont">
        <div class="icon">
          <img src="../../../static/img/cityList/search.png">
        </div>
        <input class="searchInp" placeholder="输入城市名称" onkeyup="search()">
      </div>
    </div>
    <div class="gps">GPS定位</div>
    <div class="cityNames selectedCity" @click='goCinema'>北京</div>
    <section class="gps">A</section>
    <section class="cityCont">
      <section class="cityNames cityList" @click='goHome'>安庆市</section>
    </section>
    <div class="page-indexlist">
      <div class="page-indexlist-wrapper">
        <mt-index-list>
          <mt-index-section v-for="(item, idx) in alphabet" :index="item.initial" :key="idx">
            <mt-cell v-for="(cell, _idx) in item.cells" :title="cell" :key="_idx"></mt-cell>
          </mt-index-section>
        </mt-index-list>
      </div>
    </div>
    <!-- <div class="cityNames selectedCity">{{gpsCityName}}</div>
    <div v-for="(cityList,key,index) in cities">
      <div class="gps">{{key}}</div>
      <div class="cityCont">
       <div v-for="(city,index) in cityList"  v-bind:class="cityClass(city.cityid)" v-on:click="changeCity(city)">{{city.cityname}}</div>
      </div>
    </div> -->
  </div>

</template>

<script>
  const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar',
    'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew',
    'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd',
    'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'
  ]
  export default {
    data () {
      return {
        alphabet: []
      }
    },
    created: function () {
      this.$api.get('topics', null, r => {
        console.log(r)
      })
     
     
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
        let cells = NAMES.filter(name => name[0] === initial)
        this.alphabet.push({
          initial,
          cells
        })
      })
    },
    methods: {
      goBack: function () {

      },
      refreshCity: function () {

      },
      search: function () {

      },
      goCinema: function () {
        this.$router.push({
          name: 'cinemaGo'
        })
      },
      goHome: function () {
        this.$router.push({
          name: 'home'
        })
      }

    }
  }
</script>

<style scoped>
  @import '../../../static/css/public/reset.css';
  @import '../../../static/css/public/all.css';
  @import 'http://wap.kokozu.net/js/layer/mobile/need/layer.css?2.0';

  @component-namespace page {
    @component indexlist {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
      }

      @descendent wrapper {
        width: 100%;
        border-top: solid 1px#ddd;
      }
    }
  }

  a {
    color: #666;
  }

  body {
    background: #f2f5f5;
  }

  .head {
    width: 100%;
    height: 2.197333rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: #000;
    font-size: 0.768rem;
  }

  .head img {
    width: 0.853333rem;
    height: 0.853333rem;
  }

  .head .cha {
    margin-left: 0.768rem;
  }

  .head .refresh {
    margin-right: 0.768rem;
  }

  .movieSearch {
    width: 100%;
    height: auto;
    padding: 0.298667rem 0;
    background: #f2f4f5;
    margin-top: 2.197333rem;
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

  .gps {
    width: auto;
    font-size: 0.426667rem;
    color: #333;
    background: #e0e0e0;
    height: 0.981333rem;
    line-height: 0.981333rem;
    padding-left: 0.768rem;
  }

  .selectedCity {
    width: auto;
    font-size: 0.597333rem;
    color: #333;
    background: #fff;
    height: 1.706667rem;
    line-height: 1.706667rem;
    padding-left: 0.768rem;
    background-repeat: no-repeat;
    background-position: 95%;
    background-size: 0.768rem;
  }

  .cityCont {
    width: 100%;
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
  }

  .cityCont .cityList {
    width: auto;
    font-size: 0.597333rem;
    color: #333;
    background: #fff;
    height: 1.706667rem;
    line-height: 1.706667rem;
    margin-left: 0.768rem;
    border-bottom: 1px solid #e0e0e0;
    margin-top: 1px;
    margin-bottom: -1px;
  }

  .cityListActive {
    background-image: url(../../../static/img/cityList/list_selected.png)!important;
    background-repeat: no-repeat!important;
    background-position: 95%!important;
    background-size: 0.768rem!important;
  }

</style>
