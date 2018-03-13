import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Find from '@/components/Find'
import Page from '@/components/Page'
import Login from '@/components/Login'
// import Detail from '@/components/Detail'
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
    },
     {
      path: '/page',
      name: 'Page',
      component:Page 
    },
    {
      path: '/login',
      name: 'Login',
      component:Login 
    }
  ]
})
