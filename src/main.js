// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router'
import axios from './service/http'
import MintUI from 'mint-ui'
import 'vant/lib/vant-css/index.css'
import 'mint-ui/lib/style.css'
import './config/rem'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)
Vue.use(MintUI)


const router = new VueRouter({
    routes,
    mode: 'history'
})

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
//  去掉警告
Vue.config.productionTip = false
