import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
    {
      path: '/',
      name: 'Blog',
      component: () => import('../views/Blog.vue'),
      meta: {
        label: 'بلاگ',
      },
    },
    {
      path: '/SingleBlog/:id/:url',
      name: 'SingleBlog',
      component: () => import('../views/SingleBlog.vue'),
      meta: {
        label: 'جزئیات بلاگ',
      },
    },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
