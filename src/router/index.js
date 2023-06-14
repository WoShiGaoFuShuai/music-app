import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ManageView from '@/views/ManageView.vue'
import SongView from '@/views/SongView.vue'
import useUserStore from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/manage-music',
      // alias: '/manage',
      name: 'manage',
      component: ManageView,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/song/:id',
      name: 'song',
      component: SongView
    },
    {
      path: '/manage',
      redirect: { name: 'manage' }
    },
    {
      path: '/:catchAll(.*)*',
      redirect: { name: 'home' }
    }
  ],
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requireAuth) {
    next()
    return
  }

  const store = useUserStore()
  if (store.isLoggedIn) {
    next()
    return
  } else {
    next({ name: 'home' })
    return
  }
})

export default router
