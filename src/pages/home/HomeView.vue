<template>
  <div class="home-view">
    <!-- 广告 -->
    <my-banner :banner-images="bannerList"></my-banner>
    <!-- 热映影片 -->
    <hot-content type="film" title="热映影片" :data-images="filmList"></hot-content>
    <!-- 底部导航 -->
    <footer-guide></footer-guide>
  </div>

</template>

<script>
  import FooterGuide from '../../components/footer/FooterGuide'
  import LocationHeader from './children/LocationHeader'  
  import MyBanner from './children/Banner'
  import HotContent from './children/HotContent'

  export default {
    data() {
      return {
        images: [
          'https://img.yzcdn.cn/2.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ],
        bannerList:[
          'https://img.yzcdn.cn/2.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ],
        filmList: [{
            id: 1,
            images: '../../../static/img/1.jpg',
            title: '前任三'
          },
          {
            id: 1,
            images: '../../../static/img/2.jpg',
            title: '前任三解决的扩散'
          },
          {
            id: 1,
            images: '../../../static/img/1.jpg',
            title: '前任三解决的扩散'
          },
          {
            id: 1,
            images: '../../../../static/img/2.jpg',
            title: '前任三解决的扩散'
          },
          {
            id: 1,
            images: '../../../../static/img/1.jpg',
            title: '前任三解决的扩散'
          },
          {
            id: 1,
            images: '../../../../static/img/2.jpg',
            title: '前任三解决的扩散'
          }
        ]
      }
    },
    components: {
      LocationHeader,
      FooterGuide,
      MyBanner,
      HotContent
    
      }
    }

</script>
<style scoped>


</style>
