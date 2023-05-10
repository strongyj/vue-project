import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from "../views/DataBindingHtml.vue"
import DataBindingInputText from "../views/DataBindingInputText.vue"
import DataBindingTextarea from "../views/DataBindingTextarea.vue"
import DataBindingSelect from "../views/DataBindingSelect.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    component: DataBinding
  },
  {
    path: '/databindinghtml',
    component: DataBindingHtml
  },
  {
    path: '/databindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindingTextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databindingselect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
