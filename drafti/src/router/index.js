import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import MockDraft from '@/components/MockDraft'
import Home from '@/components/Home'
import SignUp from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '@/components/auth/Profile'
import PlayerHistory from '@/components/statistics/PlayerHistory'
import PlayerLookup from '@/components/statistics/PlayerLookup'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
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
      path: '/ViewProfile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/PlayerHistory',
      name: 'PlayerHistory',
      component: PlayerHistory,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/PlayerLookup',
      name: 'PlayerLookup',
      component: PlayerLookup,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = firebase.auth().currentUser
    if (user) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
