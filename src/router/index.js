import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classification from '../views/Classification.vue'
import MustGrabList from '../views/MustGrabList.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import MyEbay from '../views/MyEbay.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Classification',
    component: Classification
  },
  {
    path: '/mustgrablist',
    component: MustGrabList
  },
  {
    path: '/shoppingcart',
    component: ShoppingCart
  },
  {
    path: '/myebay',
    component: MyEbay
  },
]

const router = new VueRouter({
  routes
})

export default router
