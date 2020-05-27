export const MovieRouter = {
  path: '/movie',
  name: '/movie',
  component: () => import('@/views/movie'),
  meta: { title: '电影' }
}
