
import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/Dashboard.vue'),
          meta: {
            requiresAuth: true,
          }
        }
      ]

    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../views/ForgotPassword.vue'),
    }
  ],
})

router.beforeEach((to, from, next)=>{
  const AuthStore = useAuthStore()
  if (to.path==='/login' && AuthStore.isLoggedIn) {
    console.log("Already logged in, redirecting to dashboard")
    return next({ name: 'dashboard' })
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !AuthStore.isLoggedIn) {
    return next({ name: 'login' })
  }

  next();
})
export default router
