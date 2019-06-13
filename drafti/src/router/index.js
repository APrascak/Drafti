import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import MockDraft from '@/components/MockDraft'
import Home from '@/components/Home'
import SignUp from '@/components/auth/Signup'
import ViewProfile from '@/components/auth/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mockdraft',
      name: 'MockDraft',
      component: MockDraft
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/ViewProfile',
      name: 'ViewProfile',
      component: ViewProfile
    }
  ]
})
