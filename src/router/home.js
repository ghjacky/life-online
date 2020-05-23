export const MainPageRouter = {
  path: '/',
  name: '/',
  component: () => import('@/views/home'),
  meta: { title: '主页' }
}
