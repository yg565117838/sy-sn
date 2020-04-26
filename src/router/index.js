import Vue from 'vue'
import VueRouter from 'vue-router'
import Detailpage from "../components/details_wrap/details_page.vue"
import Commentpage from "../components/details_wrap/comment_page.vue"
import Home from '../views/Home.vue'
import test from "../views/test.vue"
import Classification from '../views/Classification.vue'
import MustGrabList from '../views/MustGrabList.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import MyEbay from '../views/MyEbay.vue'
import NotShopCart from "../views/ShopCart-Not.vue"
import Search from '../views/Search.vue'
offscreenBuffering

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/details",
    name: "Detailpage",
    component: Detailpage
  },
  {
    path: "/comment",
    name: "Commentpage",
    component: Commentpage
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
  {
    path: "/notlogincart",
    component: NotShopCart
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
