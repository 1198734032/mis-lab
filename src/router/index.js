import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Login from '@/pages/login'
import User from '@/pages/user'
import Welcome from '@/pages/welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: User
    },
    {
      path: '*',
      // redirect: '/index'
      // name:'welcome',
      component: Welcome
    }
  ]
})
