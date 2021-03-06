import Vue from 'vue'
import Router from 'vue-router'
import MockDraft from '@/components/Draft/MockDraft'
import Drafting from '@/components/Draft/Drafting'
import Home from '@/components/Home'
import SignUp from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import ViewProfile from '@/components/auth/Profile'
import Statistics from '@/components/statistics/Statistics'
import PlayerHistory from '@/components/statistics/PlayerHistory'
import ADPFinish from '@/components/statistics/ADPFinish'
import Top10Comparison from '@/components/statistics/PreTop10Comparison.vue'
import PlayerLookup from '@/components/statistics/PlayerLookup'
import Blog from '@/components/statistics/Blog'
import Landing from '@/components/Landing'
import TheDraft from '@/components/TheDraft'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/mockdraft',
      name: 'MockDraft',
      component: MockDraft,
      meta: {
        requiresAuth: true
      }
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
      path: '/Home',
      name: 'Home',
      component: Home
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
      path: '/Statistics/PlayerLookup',
      name: 'PlayerLookup',
      component: PlayerLookup,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Drafting',
      name: 'Drafting',
      component: Drafting,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Statistics',
      name: 'Statistics',
      component: Statistics,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Statistics/ADPFinish',
      name: 'ADPFinish',
      component: ADPFinish,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Statistics/Top10Comparison',
      name: 'Top10Comparison',
      component: Top10Comparison,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog,
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
