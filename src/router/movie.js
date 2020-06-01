export const MovieRouter = {
  path: '/movie',
  name: '/movie',
  component: () => import('@/views/movie'),
  meta: { title: '电影', noCache: true }
}

export const MovieDetailRouter = {
  path: '/movie/detail/:id',
  name: '/movie/detail/:id',
  component: () => import('@/views/movie/detail'),
  meta: { title: '电影', noCache: true }
}
