import { createRouter, createWebHistory } from 'vue-router'

import { RouteName } from './routeName'

import Error from '@/views/Error.vue'
import Home from '@/views/Home.vue'

// For github-pages
const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.npm_package_name : '/'

export const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.Home,
      component: Home,
      meta: {
        layout: "Default"
      }
    },
    {
      path: "/:pathMatch(.*)*",
      component: Error,
      meta: {
        layout: "Default"
      }
    }
  ]
})
