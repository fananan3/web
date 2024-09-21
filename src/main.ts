

import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'



// 导入路由
import router from './router/index'

//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入element plus icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 引入pinia
import { createPinia } from 'pinia'

//引入第三方动画库
import 'animate.css/animate.min.css'
// 实例化 Pinia
const pinia = createPinia()

//使用路由
const app = createApp(App);

app.use(pinia).use(ElementPlus).use(router).mount('#app')
//createApp(App).mount('#app')

//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
