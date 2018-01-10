import App from '../App'

const cityList = r => require.ensure([], () => r(require('../pages/city/cityList')), 'city')
const cinemaGo = r => require.ensure([], () => r(require('../pages/cinema/cinemaGO')), 'cinema')
const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')

export default [{
  path: '/',
  component: App, //  顶层路由，对应index.
  children: [{
      path: '',
      redirect: 'cityList'
    },
    {
      path: 'cityList',
      name: 'cityList',
      component: cityList
    },
    {
      path: 'cinemaGo',
      name: 'cinemaGo',
      component: cinemaGo

    },
    {
      path: 'home',
      name: 'home',
      component: home

    }
  ]
}]
