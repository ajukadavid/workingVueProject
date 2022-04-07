import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Re-Splash'
      // metaTags: [
      //   {
      //     name: 'description',
      //     content: 'The home page of our example app.'
      //   },
      //   {
      //     property: 'og:description',
      //     content: 'The home page of our example app.'
      //   }
      // ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
