import { createRouter, createWebHistory } from 'vue-router'

import {lcAppEditorWithRouter,lcLayout,lcDeployed} from 'mttk-lowcode'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/test1',
    //   name: 'test1',
    //   component: () => import('../views/test1/index.vue')
    // },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../views/home/index.vue')
    // },
    
    // {
    //   path: '/design/:app?',
    //   name: 'App design',
    //   component: lcAppEditorWithRouter
    // },
    // {
    //   path: '/deploy',
    //   name: 'deploy',
    //   component: lcLayout,
    //   children: [
    //     {
    //       path: ':app?/:page?',
    //       name: 'Page deployed',
    //       component:lcDeployed,
    //       meta: {
    //         showBreadcrumb: false
    //       }
    //     }
    //   ]
    // },
  ]
})

export default router
