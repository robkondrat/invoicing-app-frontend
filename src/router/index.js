import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Dashboard from '@/components/Dashboard'
// import SignIn from '@/components/SignIn'
// import SideNav from '@/components/SideNav'
// import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
