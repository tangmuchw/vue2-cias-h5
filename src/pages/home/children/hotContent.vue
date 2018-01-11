<template>
  <div class="hot-content">
    <van-row class="hot-row">
      <van-col offset="1" span="19" class="hot-title">{{titleName}}</van-col>
      <van-col span="4" class="rightBtn"  v-show="typeName === 'film'">
        更多
      </van-col>
    </van-row>
   <my-scroller :data-images="items"></my-scroller>

  </div>
</template>

<script>
  import {
    Row,
    Col
  } from 'vant'
 
  import MyScroller from '../../../components/common/Scroller'
  

  export default {
    props: ['type','title','dataImages'],
    data() {
      return {
        titleName: this.title,
        typeName: this.type,
        items: this.dataImages  
      }
    },

    components: {
      [Row.name]: Row,
      [Col.name]: Col,
      MyScroller
    }
   
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
    background: url('../../../../static/img/right.png') 50% 65% no-repeat;
    background-size: 0.3rem 0.6rem;
    ;
  }

  

</style>
