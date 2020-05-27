import VueRouter from 'vue-router'
import { MovieRouter } from './movie'
import Vue from 'vue'

Vue.use(VueRouter)

export const constantRoutes = [
  MovieRouter
]

export const router = new VueRouter({
  routes: constantRoutes,
  mode: 'history'
})
