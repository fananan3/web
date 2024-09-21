import { createRouter, createWebHistory } from 'vue-router'
// 路由规则
const routes = [

 {  
  path: '/login',  
  name: 'login',  
  component: () => import('@/views/login/login.vue')
},
]
// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes:routes //routes是routes：routes的缩写，第二个routes代表第5行中的routes
})
// 导出路由
export default router