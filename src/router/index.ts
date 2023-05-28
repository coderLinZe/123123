import localCache from '@/utils/localCache'
import { firstMenu } from '@/utils/map-menus'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/not-found/NotFound.vue')
    }
  ]
})

router.beforeEach((to) => {
  const token = localCache.getCache('token')
  if (to.path === '/main' && !token) {
    return '/login'
  }
  if (to.path === '/main') {
    return firstMenu?.url
  }
  if (to.path === '/login') {
    localCache.removeCache('token')
    localCache.removeCache('userMenus')
    localCache.removeCache('userInfo')
  }
})

export default router
