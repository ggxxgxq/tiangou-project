import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Find from '@/components/Find'
import Detail from '@/components/Detail'
import Goshopping from '@/components/Goshopping'
import Seashopping from '@/components/Seashopping'
import Myshopping from '@/components/Myshopping'
import Footer from '@/components/Footer'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/footer',
      name: 'Footer',
      component:Footer 
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/goshopping',
      name: 'Goshopping',
      component:Goshopping 
    },
    {
      path: '/seashopping',
      name: 'Seashopping',
      component:Seashopping 
    },
    {
      path: '/myshopping',
      name: 'Myshopping',
      component:Myshopping 
    }
  ]
})
