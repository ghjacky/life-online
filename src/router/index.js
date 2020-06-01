import VueRouter from 'vue-router'
import { MovieRouter, MovieDetailRouter } from './movie'
import Vue from 'vue'

Vue.use(VueRouter)

export const constantRoutes = [
  MovieRouter,
  MovieDetailRouter
]

export const router = new VueRouter({
  routes: constantRoutes,
  mode: 'history'
})
