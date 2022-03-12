import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/Category.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/ProductDetail.vue'),
    meta: {
      index: 3
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/create-order',
    name: 'create-order',
    component: () => import('@/views/CreateOrder.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('@/views/Address.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/address-edit',
    name: 'addressEdit',
    component: () => import('@/views/AddressEdit.vue'),
    meta: {
      index: 1
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
