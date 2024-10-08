import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'


// 路由规则
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '/',
        component: () => import('@/views/mainpage/MainPage.vue')
    },
    {
  path: '/login',  
  name: 'login',  
  component: () => import('@/views/login/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register/register.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/user.vue')
    },
    {
        path: '/goods',
        name: 'goods',
        component: () => import('@/views/goods/goods.vue')
    },
]
// 创建路由
const router = createRouter({
    history: createWebHistory(),
    routes //routes是routes：routes的缩写，第二个routes代表第5行中的routes
})
// 导出路由
export default router