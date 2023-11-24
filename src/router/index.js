import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Admin from '../views/Admin/Admin.vue'
import Gallery from '../views/Admin/Gallery.vue'
import AddImage from '../views/Admin/AddImage.vue'

import PageNotFound from '../views/PageNotFound.vue'

import Cart from '../views/Cart/Cart.vue'

import Order from '../views/Orders/Order.vue'


import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'

import Success from '../helper/payment/Success.vue'
import Failed from '../helper/payment/Failed.vue'

import OrderDetails from "../views/Orders/OrderDetails";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //Admin routes
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path : '/admin/gallery',
    name : 'Gallery',
    component : Gallery
  },
  {
    path : '/admin/gallery/add',
    name : 'AddImage',
    component : AddImage
  },
  //Page Not found
  {
    path : '/:catchAll(.*)',
    name : 'PageNotFound',
    component : PageNotFound
  },
  //Signin and Signup
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  
  {
    path : '/cart',
    name : 'Cart',
    component : Cart
  },
  {
    path : '/order',
    name : 'Order',
    component : Order
  },
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component:Success
  },
  {
    path: '/payment/failed',
    name: 'FailedPayment',
    component:Failed
  },
  {
    path:'/order/:id',
    name:'OrderDetails',
    component: OrderDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
