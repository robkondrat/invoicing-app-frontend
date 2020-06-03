import Vue from 'vue'
import Router from 'vue-router'
// import SignUp from '@/components/SignUp'
// import Dashboard from '@/components/Dashboard'
import SignIn from '@/components/SignIn'
import SideNav from '@/components/SideNav'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
