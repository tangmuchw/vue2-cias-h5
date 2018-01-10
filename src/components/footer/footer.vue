<template>
  <div>
    <section class="bottom">
      {{footerName}}
      <a href="/">
        <section class="home_old active">
          <!-- <img src="img/tab_home_focus.png"> -->
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
  export default {
    props: ['myMsg'],
    data () {
      return {
        footerName: this.myMsg
      }
    }
  }
</script>
<style scoped>
.header{
    color: green
}

</style>
