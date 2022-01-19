import { createRouter, createWebHistory } from '@ionic/vue-router';
import store from "../store";
const routes = [
  {
    path: '/dashboard',
    component: () => import (/* webpackChunkName: "Dashboard" */'../views/Dashboard.vue'),
    name: 'dashboard',
    meta: { private: true }
  },
  {
    path: '/login',
    component: () => import (/* webpackChunkName: "Login" */'../views/Login.vue'),
    name: 'login'
  },
  {
    path: '/logout',
    component: () => import (/* webpackChunkName: "Logout" */'../views/Logout.vue'),
    name: 'logout'
  },
  {
    path: '/user',
    component: () => import (/* webpackChunkName: "User" */'../views/User.vue'),
    name: 'user',
    meta: { private: true }
  },
  {
    path: '',
    redirect: 'dashboard'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  },
  {
    path: '/videos/:id',
    component: () => import ('../views/Video.vue')
  },
  {
    path: '/videos',
    component: () => import ('../views/Videos.vue')
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => import ('../views/Video.vue')
  // },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import ('../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  var authenticated = false;
  const user = await store.get('user')
  if (user !== null)
    authenticated = true;
  if (to.meta.private && !authenticated) {
    next({
      name: 'login',
      params: {
          wantedRoute: to.fullPath,
      },
    })
    return
  }
  next()
});

export default router
