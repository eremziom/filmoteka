import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useLoginStore } from '../stores/login'
import authApi from '../api/authApi'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MoviesView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach(async (to, from) => {
  const credentials = useLoginStore()
  if (!credentials.user.isLoged && to.name !== 'login') {
    const token = localStorage.getItem('token')
    if(token){
      const payload = {
        token: localStorage.getItem('token')
      }
      authApi.verifyToken(payload)
        .then((res) => {
          credentials.setUser(res)
          return { name: 'home'}
        })
        .catch((err) => {
          console.log(err)
          return { name: 'login' }
        })
    } else {
      return { name: 'login' }
    }
  }
  
})

export default router
