import { createRouter, createWebHistory } from 'vue-router'
import router from 'layout_app/router'
import Layout from 'layout_app/Layout'

console.log("🚀 ~ Layout:", Layout)

export const constantRouterMap = [
  {
    path: '/hello-world',
    component: Layout,
    meta: {},
    children: [
      {
        path: '',
        component: () => import('@/components/HelloWorld.vue'),
        name: 'HelloWorld',
        meta: {
          title: 'router.guide',
          icon: 'cib:telegram-plane'
        }
      }
    ]
  },
]

constantRouterMap.forEach((route) => {
  router.addRoute(route)
})

export const setupRouter = (app) => {
  app.use(router)
}

export default router
