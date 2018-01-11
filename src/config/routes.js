

const cityList = r => require.ensure([], () => r(require('../pages/city/cityList')), 'city')
const cinemaGo = r => require.ensure([], () => r(require('../pages/cinema/cinemaGO')), 'cinema')
const home = r => require.ensure([], () => r(require('../pages/home/HomeView')), 'home')

export default [
  {
    path: '/',
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
